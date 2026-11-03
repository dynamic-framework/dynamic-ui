/**
 * api-types.mjs
 *
 * Compara un api.json con los tipos que publica el paquete (`dist/types/`).
 * Los `.d.ts` salen del código que se ejecuta y mandan: si api.json difiere
 * de ellos, el error está en el generador. Lo usa `validate-registry.mjs`.
 *
 * Comprueba (#1341, #1306):
 *   - cada export `D*` del índice que es un componente tiene entrada en
 *     `components` o en `contexts`, salvo los de `NON_COMPONENT_EXPORTS`;
 *   - cada entrada de `components` que no es un export lleva `parent` y
 *     `accessor`, y todo `accessor` resuelve a un miembro real del padre;
 *   - el `required` de cada prop coincide con su opcionalidad en el `.d.ts`;
 *   - ningún `type` está truncado (`... N more ...`).
 * No compara el texto de los `type`.
 */

import { existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { createRequire } from 'module';

import { ROOT, TSCONFIG_PATH } from './public-hooks.mjs';
import { TRUNCATED } from './component-docgen.mjs';

const require = createRequire(import.meta.url);
const ts = require('typescript');

export const TYPES_INDEX = resolve(ROOT, 'dist/types/index.d.ts');

/**
 * Exports `D*` invocables que no son componentes y por eso no tienen entrada
 * en api.json, con el motivo.
 */
export const NON_COMPONENT_EXPORTS = {
  // En React 19 un Context también se puede renderizar como provider, así que
  // su tipo es invocable; pero es el objeto de createContext y se accede a él
  // con useDContext, que sí está en hooks.
  DContext: 'objeto de createContext; se accede con useDContext',
};

/** Todos los valores de las claves `type` de un objeto, con su ruta. */
function typeEntries(value, prefix = '$') {
  if (!value || typeof value !== 'object') return [];
  return Object.entries(value).flatMap(([key, nested]) => {
    const path = `${prefix}.${key}`;
    return key === 'type' && typeof nested === 'string'
      ? [[path, nested]]
      : typeEntries(nested, path);
  });
}

/** Crea un programa sobre el índice de los tipos publicados. */
function createTypesProgram(indexPath) {
  const { options } = ts.parseJsonConfigFileContent(
    ts.readConfigFile(TSCONFIG_PATH, ts.sys.readFile).config,
    ts.sys,
    dirname(TSCONFIG_PATH),
  );
  return ts.createProgram([indexPath], { ...options, noEmit: true, skipLibCheck: true });
}

/**
 * Devuelve los problemas de `data` frente a los tipos de `indexPath`:
 * `{ missingExports, orphanEntries, badAccessors, requiredMismatches,
 *    unresolvedProps, truncatedTypes }`, cada uno una lista de líneas.
 */
export function compareWithTypes(data, indexPath = TYPES_INDEX) {
  if (!existsSync(indexPath)) {
    throw new Error(`no existe ${indexPath}: ejecuta npm run build antes de validar`);
  }
  const program = createTypesProgram(indexPath);
  const checker = program.getTypeChecker();
  const moduleSymbol = checker.getSymbolAtLocation(program.getSourceFile(indexPath));

  const exportTypes = new Map();
  checker.getExportsOfModule(moduleSymbol).forEach((symbol) => {
    // eslint-disable-next-line no-bitwise
    const target = symbol.flags & ts.SymbolFlags.Alias ? checker.getAliasedSymbol(symbol) : symbol;
    // eslint-disable-next-line no-bitwise
    if (target.flags & ts.SymbolFlags.Value) {
      exportTypes.set(symbol.name, checker.getTypeOfSymbol(target));
    }
  });

  const components = data.components ?? {};
  const contexts = data.contexts ?? {};
  const isCallable = (type) => !!type && type.getCallSignatures().length > 0;

  const missingExports = [...exportTypes]
    .filter(([name, type]) => /^D[A-Z]/.test(name) && isCallable(type))
    .map(([name]) => name)
    .filter((name) => !NON_COMPONENT_EXPORTS[name] && !components[name] && !contexts[name]);

  // Tipo del miembro al que apunta `accessor` (`DSelect.OptionCheck`), o null.
  const accessorType = (entry) => {
    const [parentName, member, ...extra] = (entry.accessor ?? '').split('.');
    if (extra.length || !member || parentName !== entry.parent) return null;
    const property = exportTypes.get(parentName)?.getProperty(member);
    const type = property && checker.getTypeOfSymbol(property);
    return isCallable(type) ? type : null;
  };

  const orphanEntries = [];
  const badAccessors = [];
  Object.entries(components).forEach(([name, entry]) => {
    if (!exportTypes.has(name) && !(entry.parent && entry.accessor)) {
      orphanEntries.push(name);
    } else if ((entry.parent || entry.accessor) && !accessorType(entry)) {
      badAccessors.push(`${name}: ${entry.accessor ?? '(sin accessor)'} (parent ${entry.parent ?? '(sin parent)'})`);
    }
  });

  const requiredMismatches = [];
  const unresolvedProps = [];
  [...Object.entries(components), ...Object.entries(contexts)].forEach(([name, entry]) => {
    const componentType = exportTypes.get(name) ?? (entry.accessor ? accessorType(entry) : null);
    const [signature] = componentType?.getCallSignatures() ?? [];
    const [propsParameter] = signature?.getParameters() ?? [];
    if (!propsParameter) {
      // Sin tipo porque la entrada ya se reportó como huérfana o con un
      // accessor que no resuelve: no se repite.
      if (componentType || (contexts[name] && !components[name])) {
        unresolvedProps.push(`${name}: no se encuentra el tipo de sus props`);
      }
      return;
    }
    const propsType = checker.getTypeOfSymbol(propsParameter);
    Object.entries(entry.props ?? {}).forEach(([propName, prop]) => {
      const symbol = propsType.getProperty(propName);
      if (!symbol) {
        unresolvedProps.push(`${name}.${propName}: no existe en el tipo de las props`);
        return;
      }
      // eslint-disable-next-line no-bitwise
      const optional = (symbol.flags & ts.SymbolFlags.Optional) !== 0;
      if (prop.required !== !optional) {
        requiredMismatches.push(
          `${name}.${propName}: ${optional ? 'opcional' : 'obligatoria'} en el .d.ts, `
          + `required: ${JSON.stringify(prop.required)} en api.json`,
        );
      }
    });
  });

  const truncatedTypes = typeEntries(data)
    .filter(([, type]) => TRUNCATED.test(type))
    .map(([path]) => path);

  return {
    missingExports,
    orphanEntries,
    badAccessors,
    requiredMismatches,
    unresolvedProps,
    truncatedTypes,
  };
}
