/**
 * api-types.mjs
 *
 * Compara un api.json con los tipos que publica el paquete (`dist/types/`).
 * Los `.d.ts` salen del código que se ejecuta y mandan: si api.json difiere
 * de ellos, el error está en el generador. Lo usa `validate-registry.mjs`.
 *
 * Comprueba (#1341, #1306, #1351):
 *   - cada export del índice en mayúscula e invocable tiene entrada en
 *     `components` o en `contexts`, salvo los de `NON_COMPONENT_EXPORTS`;
 *   - cada entrada de `components` que no es un export lleva `parent` y
 *     `accessor`, y todo `accessor` resuelve a un miembro real del padre;
 *   - el `required` de cada prop coincide con su opcionalidad en el `.d.ts`;
 *   - el `type` de cada prop coincide con el del `.d.ts` (`normalizeType`);
 *   - ningún `type`, `returnType` ni `signature` está truncado
 *     (`... N more ...`).
 */

import { existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { createRequire } from 'module';

import { ROOT, TSCONFIG_PATH } from './public-hooks.mjs';
import {
  ALIAS_FORMAT, PRIMITIVE_OR_LITERAL, TRUNCATED, inlineAliases,
} from './component-docgen.mjs';

const require = createRequire(import.meta.url);
const ts = require('typescript');

/**
 * Índice de los tipos publicados. `API_TYPES_DIR` permite apuntar a otras
 * declaraciones con la misma estructura (los tests emiten las suyas en un
 * directorio temporal para no depender de un build previo).
 */
export const TYPES_INDEX = resolve(
  process.env.API_TYPES_DIR ? resolve(process.env.API_TYPES_DIR) : resolve(ROOT, 'dist/types'),
  'index.d.ts',
);

/**
 * Exports en mayúscula invocables que no son componentes y por eso no tienen
 * entrada en api.json, con el motivo.
 */
export const NON_COMPONENT_EXPORTS = {
  // En React 19 un Context también se puede renderizar como provider, así que
  // su tipo es invocable; pero es el objeto de createContext y se accede a él
  // con useDContext, que sí está en hooks.
  DContext: 'objeto de createContext; se accede con useDContext',
};

// Claves cuyo valor es un tipo de TypeScript en texto: `type` en props,
// campos y parámetros; `returnType` y `signature` en los hooks.
const TYPE_KEYS = new Set(['type', 'returnType', 'signature']);

/** Todos los valores de las claves de TYPE_KEYS de un objeto, con su ruta. */
function typeEntries(value, prefix = '$') {
  if (!value || typeof value !== 'object') return [];
  return Object.entries(value).flatMap(([key, nested]) => {
    const path = `${prefix}.${key}`;
    return TYPE_KEYS.has(key) && typeof nested === 'string'
      ? [[path, nested]]
      : typeEntries(nested, path);
  });
}

const OPEN = { '(': ')', '<': '>', '[': ']', '{': '}' };

/**
 * Parte `text` por `separators` en el primer nivel: fuera de paréntesis,
 * genéricos, corchetes, llaves y comillas. `=>` no cierra un genérico.
 */
function splitTop(text, separators) {
  const parts = [];
  const stack = [];
  let quote = null;
  let start = 0;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (quote) {
      if (char === '\\') i += 1;
      else if (char === quote) quote = null;
    } else if (char === '"' || char === "'") {
      quote = char;
    } else if (char === '=' && text[i + 1] === '>') {
      if (!stack.length && separators.includes('=>')) {
        parts.push(text.slice(start, i));
        start = i + 2;
      }
      i += 1;
    } else if (OPEN[char]) {
      stack.push(OPEN[char]);
    } else if (char === stack[stack.length - 1]) {
      stack.pop();
    } else if (!stack.length && separators.includes(char)) {
      parts.push(text.slice(start, i));
      start = i + 1;
    }
  }
  parts.push(text.slice(start));
  return parts.map((part) => part.trim());
}

/** Normaliza cada grupo entre paréntesis, genéricos, corchetes o llaves. */
function normalizeGroups(text) {
  let out = '';
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (char === '"' || char === "'") {
      const end = text.indexOf(char, i + 1);
      out += text.slice(i, end + 1);
      i = end;
    } else if (char === '=' && text[i + 1] === '>') {
      out += '=>';
      i += 1;
    } else if (OPEN[char]) {
      let depth = 0;
      let j = i;
      for (; j < text.length; j += 1) {
        if (text[j] === '=' && text[j + 1] === '>') j += 1;
        else if (OPEN[text[j]]) depth += 1;
        else if (Object.values(OPEN).includes(text[j])) {
          depth -= 1;
          if (depth === 0) break;
        }
      }
      // Cada elemento de la lista (`a: T`, `T`) se normaliza por separado.
      const items = splitTop(text.slice(i + 1, j), [',', ';']).map((item) => {
        const [key, ...rest] = splitTop(item, [':']);
        // eslint-disable-next-line no-use-before-define
        return rest.length ? `${key}: ${normalizeType(rest.join(': '))}` : normalizeType(item);
      });
      out += `${char}${items.join(char === '{' ? '; ' : ', ')}${OPEN[char]}`;
      i = j;
    } else {
      out += char;
    }
  }
  return out;
}

/** Tipo en texto con espacios colapsados y uniones e intersecciones ordenadas en todos los niveles. */
export function normalizeType(text) {
  const clean = text.replace(/\s+/g, ' ').trim();
  const [head, ...ret] = splitTop(clean, ['=>']);
  if (ret.length) return `${normalizeGroups(head)} => ${normalizeType(ret.join(' => '))}`;
  return splitTop(clean, ['|'])
    .map((member) => splitTop(member, ['&']).map(normalizeGroups).sort().join(' & '))
    .sort()
    .join(' | ');
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
 *    typeMismatches, unresolvedProps, truncatedTypes }`, cada uno una lista
 *    de líneas.
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
    .filter(([name, type]) => /^[A-Z]/.test(name) && isCallable(type))
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

  // Alias literales del proyecto, expandidos como en el generador. Un nombre
  // con dos definiciones distintas no se expande.
  const typesDir = dirname(indexPath);
  const literalAliases = new Map();
  program.getSourceFiles()
    .filter((file) => file.fileName.startsWith(typesDir))
    .forEach((file) => file.statements.forEach((statement) => {
      if (!ts.isTypeAliasDeclaration(statement) || statement.typeParameters) return;
      const declared = checker.getTypeAtLocation(statement.name);
      const members = declared.isUnion() ? declared.types : [declared];
      // eslint-disable-next-line no-bitwise
      if (!members.every((t) => t.flags & PRIMITIVE_OR_LITERAL)) return;
      const name = statement.name.text;
      const text = checker.typeToString(declared, undefined, ALIAS_FORMAT);
      literalAliases.set(name, literalAliases.has(name) && literalAliases.get(name) !== text ? null : text);
    }));
  const aliasReplacements = [...literalAliases].filter(([, text]) => text !== null);

  /** Tipo de la prop en el `.d.ts`; una unión de literales, miembro a miembro (`Placement`). */
  const declaredText = (type) => {
    const members = type.isUnion() ? type.types : [type];
    // eslint-disable-next-line no-bitwise
    if (members.length > 1 && members.every((t) => t.flags & PRIMITIVE_OR_LITERAL)) {
      const texts = members.map((t) => checker.typeToString(t));
      const booleans = texts.filter((t) => t === 'true' || t === 'false');
      return [
        ...texts.filter((t) => !booleans.includes(t)),
        ...(booleans.length === 2 ? ['boolean'] : booleans),
      ].join(' | ');
    }
    return checker.typeToString(type, undefined, ts.TypeFormatFlags.NoTruncation)
      .replace(/import\("[^"]*"\)\./g, '');
  };
  const canonical = (text) => normalizeType(inlineAliases(text, aliasReplacements));

  const requiredMismatches = [];
  const typeMismatches = [];
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
      // Un tipo truncado ya se reporta en truncatedTypes.
      if (typeof prop.type !== 'string' || TRUNCATED.test(prop.type)) return;
      const declaredType = checker.getTypeOfSymbol(symbol);
      if (canonical(prop.type) !== canonical(declaredText(declaredType))) {
        const shown = checker.typeToString(declaredType, undefined, ts.TypeFormatFlags.NoTruncation)
          .replace(/import\("[^"]*"\)\./g, '');
        typeMismatches.push(`${name}.${propName}: ${JSON.stringify(prop.type)} en api.json, ${JSON.stringify(shown)} en el .d.ts`);
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
    typeMismatches,
    unresolvedProps,
    truncatedTypes,
  };
}
