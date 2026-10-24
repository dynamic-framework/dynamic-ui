/**
 * validate-registry.mjs
 *
 * Valida un api.json:
 *   - contra registry/schema/v1.json (JSON Schema draft 2020-12, con
 *     ajv-formats para las comprobaciones de URI y date-time);
 *   - contra los exports del paquete: cada export `use*` de `src/index.ts`
 *     tiene que tener su entrada en `hooks`;
 *   - contra el código de cada componente (scripts/component-docgen.mjs): la
 *     función que lo implementa se localiza, cada default que declara llega
 *     a `defaultValue`, sus props son exactamente las que deja el filtro
 *     (props propias y atributos que el componente desestructura) y ningún
 *     alias de tipo del proyecto queda sin expandir ni definir.
 *
 * Uso: node scripts/validate-registry.mjs [ruta/a/api.json]
 * Sin argumento valida registry/api.json.
 * Código de salida 0 = válido, 1 = inválido o error.
 */

import { readFileSync } from 'fs';
import { resolve } from 'path';
import { createRequire } from 'module';

import { ROOT, createIndexProgram, listPublicHooks } from './public-hooks.mjs';
import { parseComponentFile } from './component-docgen.mjs';

const require = createRequire(import.meta.url);
const ts = require('typescript');
const Ajv = require('ajv/dist/2020');
const addFormats = require('ajv-formats');

const schemaPath = resolve(ROOT, 'registry/schema/v1.json');
const dataPath = resolve(process.cwd(), process.argv[2] ?? resolve(ROOT, 'registry/api.json'));

function readJson(filePath) {
  let raw;
  try {
    raw = readFileSync(filePath, 'utf8');
  } catch (err) {
    process.stderr.write(`Error: no se puede leer "${filePath}": ${err.message}\n`);
    process.exit(1);
  }
  try {
    return JSON.parse(raw);
  } catch (err) {
    process.stderr.write(`Error: "${filePath}" no es un JSON válido: ${err.message}\n`);
    process.exit(1);
  }
}

const schema = readJson(schemaPath);
const data = readJson(dataPath);

const ajv = new Ajv({ allErrors: true, allowUnionTypes: true });
addFormats(ajv);

let validate;
try {
  validate = ajv.compile(schema);
} catch (err) {
  process.stderr.write(`Error: no se pudo compilar el schema: ${err.message}\n`);
  process.exit(1);
}

let invalid = false;

if (!validate(data)) {
  invalid = true;
  process.stderr.write(`${dataPath} no cumple el schema\n`);
  process.stderr.write(`${JSON.stringify(validate.errors, null, 2)}\n`);
}

const documented = new Set(Object.keys(data.hooks ?? {}));
const missingHooks = listPublicHooks()
  .map(({ name }) => name)
  .filter((name) => !documented.has(name));

if (missingHooks.length > 0) {
  invalid = true;
  process.stderr.write(
    `${missingHooks.length} hooks sin entrada en hooks (exportados desde src/index.ts):\n`
    + `${missingHooks.map((name) => `  - ${name}`).join('\n')}\n`,
  );
}

/** Todos los valores de las claves `type` de un objeto, a cualquier profundidad. */
function typeStrings(value) {
  if (!value || typeof value !== 'object') return [];
  return Object.entries(value).flatMap(([key, nested]) => (
    key === 'type' && typeof nested === 'string' ? [nested] : typeStrings(nested)
  ));
}

/** Escribe una lista de problemas con su cabecera y marca el registro inválido. */
function report(problems, header) {
  if (problems.length === 0) return;
  invalid = true;
  process.stderr.write(`${problems.length} ${header}:\n${problems.map((p) => `  - ${p}`).join('\n')}\n`);
}

// Componentes: se vuelve a leer el código de cada uno con el mismo módulo que
// usa generate-api.mjs y se compara con lo que dice api.json.
// Red de seguridad independiente del análisis por símbolo: nombres de los
// alias e interfaces declarados en src/ que no coinciden con ningún tipo de
// node_modules. Si uno aparece en un `type` sin definición, algo no se
// resolvió.
const indexProgram = createIndexProgram();
const projectNames = new Set();
const libraryNames = new Set();
indexProgram.getSourceFiles().forEach((sourceFile) => {
  const names = /node_modules/.test(sourceFile.fileName) ? libraryNames : projectNames;
  const visit = (node) => {
    if (ts.isTypeAliasDeclaration(node) || ts.isInterfaceDeclaration(node)) {
      names.add(node.name.text);
    }
    ts.forEachChild(node, visit);
  };
  visit(sourceFile);
});
const unambiguousProjectNames = [...projectNames].filter((n) => !libraryNames.has(n));

const notFound = [];
const lostDefaults = [];
const missingProps = [];
const extraProps = [];
const unresolvedTypes = [];
const componentsBySource = new Map();
Object.entries(data.components ?? {}).forEach(([name, entry]) => {
  if (!entry.sourcePath) return;
  const names = componentsBySource.get(entry.sourcePath) ?? [];
  componentsBySource.set(entry.sourcePath, [...names, name]);
});

componentsBySource.forEach((names, sourcePath) => {
  const docs = parseComponentFile(resolve(ROOT, sourcePath));
  names.forEach((name) => {
    const doc = docs.find((d) => d.displayName === name);
    if (!doc) {
      notFound.push(`${name} (${sourcePath}): el parser no lo encuentra`);
      return;
    }
    if (!doc.implementationFound) {
      notFound.push(`${name} (${sourcePath}): no se localiza la función que lo implementa`);
    }
    const documentedProps = data.components[name].props;
    const definedTypes = data.components[name].types ?? {};
    // Un alias del proyecto que se nombra en el `type` de una prop o de una
    // definición de types tiene que estar definido en types. Solo se miran
    // los `type`: una descripción que nombre un alias no es una referencia.
    // Los nombres salen del análisis por símbolo, así que un tipo de
    // librería con el mismo nombre no cuenta.
    const propTypes = Object.values(documentedProps).map((p) => p.type).join('\n');
    const mentioned = [propTypes, ...typeStrings(definedTypes)].join('\n');
    [...new Set([...doc.projectTypeNames, ...unambiguousProjectNames])]
      .filter((typeName) => !definedTypes[typeName])
      .filter((typeName) => new RegExp(`\\b${typeName}\\b`).test(
        doc.projectTypeNames.includes(typeName) ? mentioned : propTypes,
      ))
      .forEach((typeName) => unresolvedTypes.push(`${name}: ${typeName}`));
    Object.keys(doc.props)
      .filter((propName) => !documentedProps[propName])
      .forEach((propName) => missingProps.push(`${name}.${propName}`));
    Object.keys(documentedProps)
      .filter((propName) => !doc.props[propName])
      .forEach((propName) => extraProps.push(`${name}.${propName}`));
    Object.entries(doc.props).forEach(([propName, prop]) => {
      const documentedProp = documentedProps[propName];
      const declared = prop.defaultValue?.value;
      if (documentedProp && declared !== undefined && documentedProp.defaultValue !== declared) {
        lostDefaults.push(
          `${name}.${propName}: ${JSON.stringify(declared)} en el código, `
          + `${JSON.stringify(documentedProp.defaultValue)} en api.json`,
        );
      }
    });
  });
});

report(notFound, 'componentes cuyo código no se puede analizar');
report(lostDefaults, 'defaults declarados en el código que no llegan a defaultValue');
report(missingProps, 'props propias o desestructuradas por el componente que faltan en api.json');
report(extraProps, 'props en api.json que el filtro descarta (atributos de node_modules que el componente no maneja)');
report(unresolvedTypes, 'alias de tipo del proyecto sin definición en el componente');

if (invalid) {
  process.exit(1);
}
process.stdout.write(`${dataPath} válido\n`);
