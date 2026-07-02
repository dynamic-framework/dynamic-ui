/**
 * validate-token-overrides.mjs  (Dynamic UI 2.6)
 *
 * Validates registry/token-overrides.json against
 * registry/schema/token-overrides.v1.json.
 * JSON Schema draft 2020-12 with ajv-formats for uri / date-time.
 *
 * Usage: node scripts/validate-token-overrides.mjs
 * Exit code 0 = valid, 1 = invalid or error.
 */

import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const Ajv = require('ajv/dist/2020');
const addFormats = require('ajv-formats');

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const schemaPath = resolve(ROOT, 'registry/schema/token-overrides.v1.json');
const dataPath = resolve(ROOT, 'registry/token-overrides.json');

function readJson(filePath) {
  let raw;
  try {
    raw = readFileSync(filePath, 'utf8');
  } catch (err) {
    process.stderr.write(`Error: cannot read file "${filePath}": ${err.message}\n`);
    process.exit(1);
  }
  try {
    return JSON.parse(raw);
  } catch (err) {
    process.stderr.write(`Error: "${filePath}" contains invalid JSON: ${err.message}\n`);
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
  process.stderr.write(`Error: schema compilation failed — ${err.message}\n`);
  process.exit(1);
}

const valid = validate(data);

if (valid) {
  process.stdout.write('registry/token-overrides.json valid\n');
  process.exit(0);
} else {
  process.stderr.write('registry/token-overrides.json invalid\n');
  process.stderr.write(`${JSON.stringify(validate.errors, null, 2)}\n`);
  process.exit(1);
}
