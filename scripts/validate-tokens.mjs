/**
 * validate-tokens.mjs
 *
 * Validates registry/tokens.json (SPEC §6/§7):
 *   1. Schema validation against registry/schema/tokens.v1.json (ajv, draft 2020-12).
 *   2. Round-trip tint-fidelity test: for every family declaring
 *      method:"bootstrap-mix", recompute each non-500 step from base + weight via
 *      sRGB mix and assert it reproduces the emitted $value EXACTLY. This proves
 *      the $extensions tint relation is a faithful 2b generator of the 2a values.
 *
 * Exits non-zero on any failure.
 *
 * Usage: node scripts/validate-tokens.mjs
 */

import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import Ajv2020 from 'ajv/dist/2020.js';

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(SCRIPT_DIR, '..');
const TOKENS_PATH = resolve(ROOT, 'registry/tokens.json');
const SCHEMA_PATH = resolve(ROOT, 'registry/schema/tokens.v1.json');

const WHITE = [255, 255, 255];
const BLACK = [0, 0, 0];

function hexToRgb(hex) {
  return [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
}
function rgbToHex(rgb) {
  return `#${rgb.map((c) => c.toString(16).padStart(2, '0')).join('')}`;
}
// mix(target, base, w): `w` fraction of target, mirroring Bootstrap/Sass mix() for
// opaque colors. lighten -> target white, darken -> target black.
function mix(target, base, w) {
  return base.map((c, i) => Math.round(target[i] * w + c * (1 - w)));
}

function fail(msg) {
  process.stderr.write(`✗ ${msg}\n`);
  process.exitCode = 1;
}

function main() {
  const tokens = JSON.parse(readFileSync(TOKENS_PATH, 'utf8'));
  const schema = JSON.parse(readFileSync(SCHEMA_PATH, 'utf8'));

  // 1) Schema validation.
  const ajv = new Ajv2020({ allErrors: true, strict: false });
  const validate = ajv.compile(schema);
  if (!validate(tokens)) {
    for (const e of validate.errors) fail(`schema: ${e.instancePath || '/'} ${e.message}`);
    process.stderr.write('Schema validation FAILED.\n');
    process.exit(1);
  }
  process.stdout.write('✓ schema valid\n');

  // 2) Structural (Fix A) + round-trip tint fidelity.
  let checked = 0;
  let mixFamilies = 0;
  for (const [name, node] of Object.entries(tokens.color)) {
    const tint = node.$extensions?.['dev.dynamicframework.tint'];
    if (!tint) continue; // roles have no tint extension
    // Family nodes are DTCG groups: they must NOT carry their own $value
    // (a node with $value is a token, which cannot also hold child tokens).
    if (Object.prototype.hasOwnProperty.call(node, '$value')) {
      fail(`${name}: family node must be a group (must NOT have its own $value)`);
    }
    if (tint.method !== 'bootstrap-mix') continue;
    mixFamilies += 1;
    const baseRgb = hexToRgb(node['500'].$value); // the 500 step holds the literal base
    for (const [step, def] of Object.entries(tint.steps)) {
      if (def.op === 'base') {
        if (!/^#[0-9a-f]{6}$/.test(node[step].$value)) {
          fail(`${name}.${step} expected literal base hex, got ${node[step].$value}`);
        }
        continue;
      }
      const target = def.op === 'lighten' ? WHITE : BLACK;
      const expected = rgbToHex(mix(target, baseRgb, def.weight));
      const actual = node[step].$value;
      if (actual !== expected) {
        fail(`${name}.${step}: round-trip mismatch (emitted ${actual}, recomputed ${expected})`);
      }
      checked += 1;
    }
  }
  if (process.exitCode === 1) {
    process.stderr.write('Round-trip fidelity FAILED.\n');
    process.exit(1);
  }
  process.stdout.write(
    `✓ round-trip fidelity: ${checked} steps across ${mixFamilies} bootstrap-mix families reproduce exactly\n`,
  );
  process.stdout.write('✓ tokens.json valid\n');
}

main();
