/**
 * generate-tokens-schema.mjs
 *
 * Generates registry/schema/tokens.v1.json — the JSON Schema that validates
 * registry/tokens.json (referenced by its `$schema` field). It encodes the
 * DTCG color-contract invariants from SPEC §6:
 *   - color families are pure groups (no own $value); every ramp step is a hex
 *     leaf — incl. -500, which holds the base, so {color.<fam>.500} is the base ref
 *   - every family carries dev.dynamicframework.tint with base, space:"srgb"
 *     and 11 steps (op ∈ {lighten, darken, base}, weight ∈ [0,1])
 *   - roles are aliases (to a family base {color.<fam>.500} OR a step)
 *
 * Usage: node scripts/generate-tokens-schema.mjs
 */

import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(SCRIPT_DIR, '..');
const OUTPUT_DIR = resolve(ROOT, 'registry/schema');
const OUTPUT_PATH = resolve(OUTPUT_DIR, 'tokens.v1.json');
// Overridable for local/CI/alternate CDN, consistent with generate-schema.mjs.
const CDN_BASE = (process.env.CDN_BASE_URL ?? 'https://cdn.dynamicframework.dev/assets').replace(/\/$/, '');

// Kept in sync with generate-tokens.mjs (the stable contract surface).
const CHROMATIC = ['blue', 'indigo', 'purple', 'pink', 'red', 'orange', 'yellow', 'green', 'teal', 'cyan'];
const GRAY = 'gray';
const ALL_FAMILIES = [...CHROMATIC, GRAY];
const ROLES = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'];
const STEPS = ['25', '50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];

const HEX = { type: 'string', pattern: '^#[0-9a-f]{6}$' };
const ALIAS = { type: 'string', pattern: '^\\{color\\.[a-z]+(\\.[0-9]{2,3})?\\}$' };

const colorLeaf = (valueSchema) => ({
  type: 'object',
  required: ['$value'],
  properties: { $type: { const: 'color' }, $value: valueSchema },
  additionalProperties: false,
});

function tintStepsSchema() {
  const properties = {};
  for (const step of STEPS) {
    properties[step] = step === '500'
      ? { type: 'object', required: ['op'], properties: { op: { const: 'base' } }, additionalProperties: false }
      : {
        type: 'object',
        required: ['op', 'weight'],
        properties: {
          op: { enum: ['lighten', 'darken'] },
          weight: { type: 'number', minimum: 0, maximum: 1 },
        },
        additionalProperties: false,
      };
  }
  return {
    type: 'object', required: STEPS, properties, additionalProperties: false,
  };
}

const tintExtension = {
  type: 'object',
  required: ['base', 'space', 'method', 'steps'],
  properties: {
    base: ALIAS,
    space: { const: 'srgb' },
    method: { enum: ['bootstrap-mix', 'hand-authored'] },
    fidelity: { enum: ['approximate'] },
    regenerable: { type: 'boolean' },
    note: { type: 'string' },
    steps: tintStepsSchema(),
  },
  additionalProperties: false,
};

function familySchema() {
  // A family is a pure DTCG group: $type + $extensions + step children, NO own
  // $value (additionalProperties:false makes an own $value invalid). Every step,
  // including -500, is a literal hex leaf.
  const properties = {
    $type: { const: 'color' },
    $extensions: {
      type: 'object',
      required: ['dev.dynamicframework.tint'],
      properties: { 'dev.dynamicframework.tint': tintExtension },
      additionalProperties: false,
    },
  };
  for (const step of STEPS) {
    properties[step] = colorLeaf(HEX);
  }
  return {
    type: 'object',
    required: ['$type', '$extensions', ...STEPS],
    properties,
    additionalProperties: false,
  };
}

const auditExtension = {
  type: 'object',
  required: ['consistent'],
  properties: {
    consistent: { type: 'boolean' },
    issue: { type: 'string' },
    scssDivergence: { type: 'string' },
    colorRampConsistent: { type: 'boolean' },
  },
  additionalProperties: false,
};

const roleSchema = {
  type: 'object',
  required: ['$type', '$value'],
  properties: {
    $type: { const: 'color' },
    $value: ALIAS,
    $extensions: {
      type: 'object',
      properties: { 'dev.dynamicframework.audit': auditExtension },
      additionalProperties: false,
    },
  },
  additionalProperties: false,
};

function main() {
  const colorProperties = {};
  for (const fam of ALL_FAMILIES) colorProperties[fam] = familySchema();
  for (const role of ROLES) colorProperties[role] = roleSchema;

  const schema = {
    $schema: 'https://json-schema.org/draft/2020-12/schema',
    $id: `${CDN_BASE}/tokens/schema/tokens.v1.json`,
    title: 'Dynamic UI DTCG color token contract (v1)',
    type: 'object',
    required: ['$schema', '$extensions', 'color'],
    properties: {
      $schema: { type: 'string' },
      $extensions: {
        type: 'object',
        required: ['dev.dynamicframework.contract'],
        properties: {
          'dev.dynamicframework.contract': {
            type: 'object',
            required: ['schemaVersion', 'dynamicUi', 'generatedFrom'],
            properties: {
              schemaVersion: { const: '1.0.0' },
              dynamicUi: { type: 'string', pattern: '^\\d+\\.\\d+\\.\\d+' },
              generatedFrom: { const: 'scss-source' },
            },
            additionalProperties: false,
          },
        },
        additionalProperties: false,
      },
      color: {
        type: 'object',
        required: [...ALL_FAMILIES, ...ROLES],
        properties: colorProperties,
        additionalProperties: false,
      },
    },
    additionalProperties: false,
  };

  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_PATH, `${JSON.stringify(schema, null, 2)}\n`, 'utf8');
  process.stdout.write(`Generated ${OUTPUT_PATH}\n`);
}

main();
