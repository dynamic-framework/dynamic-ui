/**
 * validate-registry.mjs
 *
 * Validates registry/api.json against registry/schema/v1.json.
 * Uses JSON Schema draft 2020-12 with ajv-formats for URI and date-time checks.
 *
 * Usage: node scripts/validate-registry.mjs
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
const schemaPath = resolve(ROOT, 'registry/schema/v1.json');
const dataPath = resolve(ROOT, 'registry/api.json');

const schema = JSON.parse(readFileSync(schemaPath, 'utf8'));
const data = JSON.parse(readFileSync(dataPath, 'utf8'));

const ajv = new Ajv({ allErrors: true, allowUnionTypes: true });
addFormats(ajv);

const validate = ajv.compile(schema);
const valid = validate(data);

if (valid) {
  process.stdout.write('registry/api.json valid\n');
  process.exit(0);
} else {
  process.stderr.write('registry/api.json invalid\n');
  process.stderr.write(JSON.stringify(validate.errors, null, 2) + '\n');
  process.exit(1);
}
