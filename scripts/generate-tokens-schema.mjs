/**
 * generate-tokens-schema.mjs
 *
 * Generates registry/schema/tokens.v1.json — the JSON Schema that validates
 * registry/tokens.json (referenced by its `$schema` field).
 *
 * Encodes the contract invariants:
 *   - color families are pure groups (no own $value); every ramp step is a hex
 *     leaf; the tint recipe lives in $extensions; derivability block ONLY where a
 *     token deviates from its category default (today: gray) with EXACTLY
 *     {method,regenerable,fidelity} and additionalProperties:false.
 *   - semantic.<role>.<prop> are aliases (no hex literals).
 *   - non-color dimensions use DTCG types (fontFamily/fontWeight/dimension/number/shadow);
 *     spacing carries a scale recipe; radius is literal with no recipe.
 *   - root carries the coverage manifest.
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

const CHROMATIC = ['blue', 'indigo', 'purple', 'pink', 'red', 'orange', 'yellow', 'green', 'teal', 'cyan'];
const ALL_FAMILIES = [...CHROMATIC, 'gray'];
const ROLES = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'];
const STEPS = ['25', '50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
const SEMANTIC_PROPS = ['text-emphasis', 'bg-subtle', 'border-subtle'];
const SPACING_LEVELS = Array.from({ length: 31 }, (_, i) => String(i));
const RADIUS_KEYS = ['default', 'sm', 'lg', 'xl', 'xxl', 'pill'];

const HEX = { type: 'string', pattern: '^#[0-9a-f]{6}$' };
const ALIAS = { type: 'string', pattern: '^\\{[a-z]+(\\.[a-z0-9-]+)+\\}$' };
const DIM = {
  type: 'object',
  required: ['value', 'unit'],
  properties: { value: { type: 'number' }, unit: { enum: ['rem', 'px', 'em'] } },
  additionalProperties: false,
};

const leaf = (valueSchema, typeConst) => ({
  type: 'object',
  required: ['$value'],
  properties: { $type: typeConst ? { const: typeConst } : true, $value: valueSchema },
  additionalProperties: false,
});

const fromEntries = (keys, valueSchema) => Object.fromEntries(keys.map((k) => [k, valueSchema]));

// ---------- color ----------

const tintSteps = {
  type: 'object',
  required: STEPS,
  properties: Object.fromEntries(STEPS.map((step) => [
    step,
    step === '500'
      ? { type: 'object', required: ['op'], properties: { op: { const: 'base' } }, additionalProperties: false }
      : {
        type: 'object',
        required: ['op', 'weight'],
        properties: { op: { enum: ['lighten', 'darken'] }, weight: { type: 'number', minimum: 0, maximum: 1 } },
        additionalProperties: false,
      },
  ])),
  additionalProperties: false,
};

const tintExtension = {
  type: 'object',
  required: ['base', 'space', 'method', 'steps'],
  properties: {
    base: ALIAS,
    space: { const: 'srgb' },
    method: { enum: ['bootstrap-mix', 'hand-authored'] },
    steps: tintSteps,
  },
  additionalProperties: false,
};

// SPEC §5: exactly {method, regenerable, fidelity}; additionalProperties:false.
const derivabilityExtension = {
  type: 'object',
  required: ['method', 'regenerable', 'fidelity'],
  properties: {
    method: { enum: ['bootstrap-mix', 'hand-authored', 'alias', 'scalar-multiple'] },
    regenerable: { type: 'boolean' },
    fidelity: { enum: ['exact', 'approximate'] },
  },
  additionalProperties: false,
};

const familySchema = {
  type: 'object',
  required: ['$type', '$extensions', ...STEPS],
  properties: {
    $type: { const: 'color' },
    $extensions: {
      type: 'object',
      required: ['dev.dynamicframework.tint'],
      properties: {
        'dev.dynamicframework.tint': tintExtension,
        'dev.dynamicframework.derivability': derivabilityExtension,
      },
      additionalProperties: false,
    },
    ...fromEntries(STEPS, leaf(HEX, 'color')),
  },
  additionalProperties: false,
};

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

// ---------- semantic ----------

const semanticRole = {
  type: 'object',
  required: SEMANTIC_PROPS,
  properties: fromEntries(SEMANTIC_PROPS, leaf(ALIAS, 'color')),
  additionalProperties: false,
};

const semanticSchema = {
  type: 'object',
  required: ['$type', ...ROLES],
  properties: { $type: { const: 'color' }, ...fromEntries(ROLES, semanticRole) },
  additionalProperties: false,
};

// ---------- non-color ----------

const typographySchema = {
  type: 'object',
  required: ['fontFamily', 'fontWeight', 'fontSize', 'lineHeight'],
  properties: {
    fontFamily: {
      type: 'object',
      required: ['$type', 'sans'],
      properties: { $type: { const: 'fontFamily' }, sans: leaf({ type: 'array', items: { type: 'string' }, minItems: 1 }, 'fontFamily') },
      additionalProperties: false,
    },
    fontWeight: {
      type: 'object',
      required: ['$type', 'normal', 'semibold', 'bold'],
      properties: {
        $type: { const: 'fontWeight' },
        ...fromEntries(['light', 'normal', 'semibold', 'bold', 'bolder'], leaf({ type: 'integer', minimum: 1, maximum: 1000 }, 'fontWeight')),
      },
      additionalProperties: false,
    },
    fontSize: {
      type: 'object',
      required: ['$type', 'base'],
      properties: {
        $type: { const: 'dimension' },
        ...fromEntries(['base', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'display-1', 'display-2', 'display-3', 'display-4', 'display-5', 'display-6'], leaf(DIM, 'dimension')),
      },
      additionalProperties: false,
    },
    lineHeight: {
      type: 'object',
      required: ['$type', 'base'],
      properties: { $type: { const: 'number' }, ...fromEntries(['base', 'sm', 'lg', 'heading'], leaf({ type: 'number' }, 'number')) },
      additionalProperties: false,
    },
  },
  additionalProperties: false,
};

const scaleExtension = {
  type: 'object',
  required: ['base', 'method', 'steps'],
  properties: {
    base: ALIAS,
    method: { const: 'scalar-multiple' },
    steps: {
      type: 'object',
      additionalProperties: {
        type: 'object', required: ['factor'], properties: { factor: { type: 'number' } }, additionalProperties: false,
      },
    },
  },
  additionalProperties: false,
};

const spacingSchema = {
  type: 'object',
  required: ['$type', '$extensions', ...SPACING_LEVELS],
  properties: {
    $type: { const: 'dimension' },
    $extensions: {
      type: 'object',
      required: ['dev.dynamicframework.scale'],
      properties: { 'dev.dynamicframework.scale': scaleExtension },
      additionalProperties: false,
    },
    ...fromEntries(SPACING_LEVELS, leaf(DIM, 'dimension')),
  },
  additionalProperties: false,
};

// Radius: literal dimensions only — NO recipe, NO derivability block.
const radiusSchema = {
  type: 'object',
  required: ['$type', ...RADIUS_KEYS],
  properties: { $type: { const: 'dimension' }, ...fromEntries(RADIUS_KEYS, leaf(DIM, 'dimension')) },
  additionalProperties: false,
};

const shadowValue = {
  type: 'object',
  required: ['color', 'offsetX', 'offsetY', 'blur', 'spread'],
  properties: {
    color: { type: 'string' }, offsetX: DIM, offsetY: DIM, blur: DIM, spread: DIM,
  },
  additionalProperties: false,
};

const shadowSchema = {
  type: 'object',
  required: ['$type', 'lg'],
  properties: { $type: { const: 'shadow' }, lg: leaf(shadowValue, 'shadow') },
  additionalProperties: false,
};

// ---------- root extensions ----------

const profile = {
  type: 'object',
  required: ['regenerable'],
  properties: {
    method: { enum: ['bootstrap-mix', 'hand-authored', 'alias', 'scalar-multiple'] },
    regenerable: { type: 'boolean' },
    fidelity: { enum: ['exact', 'approximate'] },
  },
  additionalProperties: false,
};

const coverageExtension = {
  type: 'object',
  required: ['categories', 'gaps'],
  properties: {
    categories: {
      type: 'object',
      required: ['color', 'typography', 'spacing', 'radius', 'shadow'],
      additionalProperties: {
        type: 'object',
        required: ['state', 'defaultProfile'],
        properties: {
          state: { enum: ['tokenized-regenerable', 'tokenized-static', 'partial', 'not-tokenizable'] },
          defaultProfile: profile,
        },
        additionalProperties: false,
      },
    },
    gaps: {
      type: 'array',
      items: {
        type: 'object',
        required: ['dimension', 'state', 'reason'],
        properties: {
          dimension: { type: 'string' },
          state: { enum: ['partial', 'not-tokenizable'] },
          reason: { type: 'string' },
          compileTimeOnly: { type: 'boolean' },
        },
        additionalProperties: false,
      },
    },
  },
  additionalProperties: false,
};

const contractExtension = {
  type: 'object',
  required: ['schemaVersion', 'dynamicUi', 'generatedFrom'],
  properties: {
    schemaVersion: { type: 'string', pattern: '^1\\.\\d+\\.\\d+$' },
    dynamicUi: { type: 'string', pattern: '^\\d+\\.\\d+\\.\\d+' },
    generatedFrom: { const: 'scss-source' },
  },
  additionalProperties: false,
};

function main() {
  const colorProperties = {};
  for (const fam of ALL_FAMILIES) colorProperties[fam] = familySchema;
  for (const role of ROLES) colorProperties[role] = roleSchema;

  const schema = {
    $schema: 'https://json-schema.org/draft/2020-12/schema',
    $id: 'https://cdn.dynamicframework.dev/assets/tokens/schema/tokens.v1.json',
    title: 'Dynamic UI DTCG token contract (v1)',
    type: 'object',
    required: ['$schema', '$extensions', 'color', 'semantic', 'typography', 'spacing', 'radius', 'shadow'],
    properties: {
      $schema: { type: 'string' },
      $extensions: {
        type: 'object',
        required: ['dev.dynamicframework.contract', 'dev.dynamicframework.coverage'],
        properties: {
          'dev.dynamicframework.contract': contractExtension,
          'dev.dynamicframework.coverage': coverageExtension,
        },
        additionalProperties: false,
      },
      color: {
        type: 'object',
        required: [...ALL_FAMILIES, ...ROLES],
        properties: colorProperties,
        additionalProperties: false,
      },
      semantic: semanticSchema,
      typography: typographySchema,
      spacing: spacingSchema,
      radius: radiusSchema,
      shadow: shadowSchema,
    },
    additionalProperties: false,
  };

  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_PATH, `${JSON.stringify(schema, null, 2)}\n`, 'utf8');
  process.stdout.write(`Generated ${OUTPUT_PATH}\n`);
}

main();
