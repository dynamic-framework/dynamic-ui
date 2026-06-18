/**
 * validate-tokens.mjs
 *
 * Validates registry/tokens.json:
 *   1. JSON Schema (ajv, draft 2020-12).
 *   2. Structural invariants: family nodes are pure groups (no $value); semantic.*
 *      are all aliases; derivability block only on gray; exactly one audit block.
 *   3. Round-trip color fidelity: every regenerable family reproduces its non-500
 *      steps from base + tint recipe via sRGB mix (phase 1, must stay green).
 *   4. Round-trip spacing fidelity: the scale recipe (base × factor) reproduces
 *      every emitted spacing value.
 *   5. Propagation: regenerating a family's base flows through the alias graph to
 *      the semantics that reference it (proves graph fidelity for a rebrand).
 *
 * Exits non-zero on any failure.
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

const hexToRgb = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
const rgbToHex = (rgb) => `#${rgb.map((c) => c.toString(16).padStart(2, '0')).join('')}`;
// mix(target, base, w): `w` fraction of target — Bootstrap/Sass mix() for opaque colors.
const mix = (target, base, w) => base.map((c, i) => Math.round(target[i] * w + c * (1 - w)));

let failures = 0;
function fail(msg) { process.stderr.write(`✗ ${msg}\n`); failures += 1; }

/** Resolve an alias chain ("{a.b.c}") to a concrete (non-alias) $value. */
function resolveAlias(root, ref) {
  let value = ref;
  const seen = new Set();
  while (typeof value === 'string' && /^\{.+\}$/.test(value)) {
    if (seen.has(value)) throw new Error(`alias cycle at ${value}`);
    seen.add(value);
    let node = root;
    for (const seg of value.slice(1, -1).split('.')) {
      node = node?.[seg];
      if (node === undefined) throw new Error(`unresolved alias path ${value}`);
    }
    value = node.$value;
  }
  return value;
}

/** Regenerate a family's full ramp in-place from a new base hex, via the tint recipe. */
function regenerateFamily(family, newBaseHex) {
  const baseRgb = hexToRgb(newBaseHex);
  const steps = family.$extensions['dev.dynamicframework.tint'].steps;
  for (const [step, def] of Object.entries(steps)) {
    if (def.op === 'base') { family[step].$value = newBaseHex; continue; }
    const target = def.op === 'lighten' ? WHITE : BLACK;
    family[step].$value = rgbToHex(mix(target, baseRgb, def.weight));
  }
}

function main() {
  const tokens = JSON.parse(readFileSync(TOKENS_PATH, 'utf8'));
  const schema = JSON.parse(readFileSync(SCHEMA_PATH, 'utf8'));

  // 1) Schema.
  const ajv = new Ajv2020({ allErrors: true, strict: false });
  const validate = ajv.compile(schema);
  if (!validate(tokens)) {
    for (const e of validate.errors) fail(`schema: ${e.instancePath || '/'} ${e.message}`);
    process.stderr.write('Schema validation FAILED.\n');
    process.exit(1);
  }
  process.stdout.write('✓ schema valid\n');

  // 2) Structural invariants.
  const derivFamilies = [];
  let auditCount = 0;
  for (const [name, node] of Object.entries(tokens.color)) {
    const ext = node.$extensions || {};
    if (ext['dev.dynamicframework.tint'] && Object.prototype.hasOwnProperty.call(node, '$value')) {
      fail(`color.${name}: family node must be a group (no own $value)`);
    }
    if (ext['dev.dynamicframework.derivability']) derivFamilies.push(name);
    if (ext['dev.dynamicframework.audit']) auditCount += 1;
  }
  if (derivFamilies.join(',') !== 'gray') fail(`derivability block must be only on gray, found: [${derivFamilies}]`);
  if (auditCount !== 1) fail(`expected exactly 1 audit block (secondary), found ${auditCount}`);
  if (!tokens.color.secondary?.$extensions?.['dev.dynamicframework.audit']) fail('secondary must keep its audit block');
  if (tokens.color.warning?.$extensions?.['dev.dynamicframework.audit']) fail('warning must NOT have an audit block');

  let semanticLeaves = 0;
  for (const [role, props] of Object.entries(tokens.semantic)) {
    if (role === '$type') continue;
    for (const [prop, t] of Object.entries(props)) {
      if (!/^\{.+\}$/.test(t.$value)) fail(`semantic.${role}.${prop} must be an alias, got ${t.$value}`);
      semanticLeaves += 1;
    }
  }
  if (!failures) process.stdout.write(`✓ structural: family groups, derivability only on gray, 1 audit (secondary), ${semanticLeaves} semantic aliases\n`);

  // 3) Round-trip color fidelity (regenerable families only).
  let checked = 0; let mixFamilies = 0;
  for (const [name, node] of Object.entries(tokens.color)) {
    const tint = node.$extensions?.['dev.dynamicframework.tint'];
    if (!tint) continue;
    const deriv = node.$extensions['dev.dynamicframework.derivability'];
    if (deriv && deriv.regenerable === false) continue; // gray: not regenerable, skip
    mixFamilies += 1;
    const baseRgb = hexToRgb(node['500'].$value);
    for (const [step, def] of Object.entries(tint.steps)) {
      if (def.op === 'base') continue;
      const expected = rgbToHex(mix(def.op === 'lighten' ? WHITE : BLACK, baseRgb, def.weight));
      if (node[step].$value !== expected) fail(`color.${name}.${step}: round-trip mismatch (${node[step].$value} vs ${expected})`);
      else checked += 1;
    }
  }
  if (!failures) process.stdout.write(`✓ round-trip color: ${checked} steps across ${mixFamilies} regenerable families reproduce exactly\n`);

  // 4) Round-trip spacing fidelity.
  const scale = tokens.spacing.$extensions['dev.dynamicframework.scale'];
  const spacingBase = resolveAlias(tokens, scale.base);
  let spaceChecked = 0;
  for (const [level, { factor }] of Object.entries(scale.steps)) {
    const expected = spacingBase.value * factor;
    const actual = tokens.spacing[level].$value;
    if (Math.abs(actual.value - expected) > 1e-9 || actual.unit !== spacingBase.unit) {
      fail(`spacing.${level}: recipe mismatch (emitted ${actual.value}${actual.unit}, recomputed ${expected}${spacingBase.unit})`);
    } else spaceChecked += 1;
  }
  if (!failures) process.stdout.write(`✓ round-trip spacing: ${spaceChecked} levels reproduce from base × factor\n`);

  // 5) Propagation: regenerate a family base and confirm it flows through the
  //    alias graph to the semantics. The probe is chosen dynamically (any
  //    semantic aliasing a regenerable family) and the expected value is derived
  //    from that step's own tint definition — no hard-coded family/step/weight.
  const probe = (() => {
    for (const [role, props] of Object.entries(tokens.semantic)) {
      if (role === '$type') continue;
      for (const [prop, t] of Object.entries(props)) {
        const m = /^\{color\.([a-z]+)\.(\d{2,3})\}$/.exec(t.$value);
        if (!m) continue;
        const [, fam, step] = m;
        const ext = tokens.color[fam]?.$extensions;
        const tint = ext?.['dev.dynamicframework.tint'];
        const deriv = ext?.['dev.dynamicframework.derivability'];
        if (!tint || (deriv && deriv.regenerable === false)) continue; // need a regenerable family
        return { ref: t.$value, role, prop, fam, step, def: tint.steps[step] };
      }
    }
    return null;
  })();
  if (!probe) {
    fail('propagation: found no semantic alias into a regenerable family to probe');
  } else {
    const before = resolveAlias(tokens, probe.ref);
    const clone = JSON.parse(JSON.stringify(tokens));
    const NEW_BASE = '#ff3300';
    regenerateFamily(clone.color[probe.fam], NEW_BASE);
    const after = resolveAlias(clone, probe.ref);
    const expected = probe.def.op === 'base'
      ? NEW_BASE
      : rgbToHex(mix(probe.def.op === 'lighten' ? WHITE : BLACK, hexToRgb(NEW_BASE), probe.def.weight));
    if (after === before) fail(`propagation: ${probe.ref} did not change after regenerating ${probe.fam} (alias not propagating)`);
    else if (after !== expected) fail(`propagation: ${probe.ref} resolved to ${after}, expected ${expected}`);
    else process.stdout.write(`✓ propagation: regenerating ${probe.fam} flows through semantic.${probe.role}.${probe.prop} ${probe.ref} (${before} → ${after})\n`);
  }

  if (failures) { process.stderr.write(`\n${failures} check(s) FAILED.\n`); process.exit(1); }
  process.stdout.write('✓ tokens.json valid\n');
}

main();
