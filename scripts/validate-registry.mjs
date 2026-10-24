/**
 * validate-registry.mjs
 *
 * Valida un api.json:
 *   - contra registry/schema/v1.json (JSON Schema draft 2020-12, con
 *     ajv-formats para las comprobaciones de URI y date-time);
 *   - contra los exports del paquete: cada export `use*` de `src/index.ts`
 *     tiene que tener su entrada en `hooks`.
 *
 * Uso: node scripts/validate-registry.mjs [ruta/a/api.json]
 * Sin argumento valida registry/api.json.
 * Código de salida 0 = válido, 1 = inválido o error.
 */

import { readFileSync } from 'fs';
import { resolve } from 'path';
import { createRequire } from 'module';

import { ROOT, listPublicHooks } from './public-hooks.mjs';

const require = createRequire(import.meta.url);
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

if (invalid) {
  process.exit(1);
}
process.stdout.write(`${dataPath} válido\n`);
