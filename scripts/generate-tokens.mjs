/**
 * generate-tokens.mjs
 *
 * Generates registry/tokens.json — a DTCG (2025.10) design-token contract for
 * Dynamic UI.
 *
 *   PHASE 1 — color: 10 chromatic families + gray (literal $value per step,
 *     tint recipe in $extensions), plus the 8 roles as aliases.
 *   PHASE 2 — semantic level (subtle/emphasis per role, as aliases down to the
 *     family step), non-color dimensions (typography, spacing+recipe, radius,
 *     shadow), a root coverage manifest, and the per-deviation derivability block.
 *
 * SOURCE OF TRUTH (R1): values are read from the SCSS source by compiling a
 * dedicated throwaway harness (scripts/tokens/_export-harness.scss) with the
 * project's dart-sass (R2) — NEVER by parsing the compiled CSS.
 *
 * Usage: node scripts/generate-tokens.mjs
 */

import { execFileSync } from 'node:child_process';
import {
  mkdirSync, writeFileSync, mkdtempSync, rmSync, readFileSync,
} from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(SCRIPT_DIR, '..');
// R2: the project's dart-sass, never the PATH `sass` (Ruby gem). Invoked via
// `node <sass.js>` rather than the .bin shim so it also works on Windows
// (where the shim is sass.cmd and execFileSync would not resolve it).
const SASS_JS = resolve(ROOT, 'node_modules/sass/sass.js');
const HARNESS = resolve(SCRIPT_DIR, 'tokens/_export-harness.scss');
const OUTPUT_DIR = resolve(ROOT, 'registry');
const OUTPUT_PATH = resolve(OUTPUT_DIR, 'tokens.json');

// Minor bump from 1.0.0: phase 2 is a backward-compatible additive expansion
// (new top-level groups), not a rebrand — so it bumps the contract's minor
// (I4 forbids only rebrands from bumping), staying within schema major v1.
const SCHEMA_VERSION = '1.1.0';
// Overridable for local/CI/alternate CDN, consistent with generate-api.mjs.
const CDN_BASE = (process.env.CDN_BASE_URL ?? 'https://cdn.dynamicframework.dev/assets').replace(/\/$/, '');

// The 11-step tint curve, verbatim from _colors.scss (tint-color/shade-color).
//   lighten w == mix(white, base, w*100%);  darken w == mix(black, base, w*100%) — sRGB.
const RAMP = [
  { step: '25', op: 'lighten', weight: 0.95 },
  { step: '50', op: 'lighten', weight: 0.90 },
  { step: '100', op: 'lighten', weight: 0.80 },
  { step: '200', op: 'lighten', weight: 0.60 },
  { step: '300', op: 'lighten', weight: 0.40 },
  { step: '400', op: 'lighten', weight: 0.20 },
  { step: '500', op: 'base' },
  { step: '600', op: 'darken', weight: 0.20 },
  { step: '700', op: 'darken', weight: 0.40 },
  { step: '800', op: 'darken', weight: 0.60 },
  { step: '900', op: 'darken', weight: 0.80 },
];

const CHROMATIC = ['blue', 'indigo', 'purple', 'pink', 'red', 'orange', 'yellow', 'green', 'teal', 'cyan'];
const GRAY = 'gray';
const ALL_FAMILIES = [...CHROMATIC, GRAY];

// Which family each role's RAMP copies in the source ($primary-25: $blue-25, …).
// Note: this is the ramp family, NOT $theme-colors-mapping (secondary maps to
// gray-800 for its base, but its ramp steps copy gray). Verified in main() against
// the role-ramp hexes emitted by the harness.
const ROLE_RAMP_FAMILY = {
  primary: 'blue', secondary: 'gray', success: 'green', info: 'blue', warning: 'yellow', danger: 'red',
};

// gray deviates from the color category default (bootstrap-mix/regenerable/exact):
// it is a hand-tuned neutral scale, not regenerable from a single base via mix.
const GRAY_DERIVABILITY = { method: 'hand-authored', regenerable: false, fidelity: 'approximate' };

// Root coverage manifest (SPEC §6): the contract's metadata about itself. The
// default-profiles are the derivability defaults a token follows when it carries
// NO derivability block (§5).
const COVERAGE = {
  categories: {
    color: { state: 'tokenized-regenerable', defaultProfile: { method: 'bootstrap-mix', regenerable: true, fidelity: 'exact' } },
    typography: { state: 'tokenized-static', defaultProfile: { regenerable: false } },
    spacing: { state: 'tokenized-regenerable', defaultProfile: { method: 'scalar-multiple', regenerable: true, fidelity: 'exact' } },
    radius: { state: 'tokenized-static', defaultProfile: { regenerable: false } },
    shadow: { state: 'partial', defaultProfile: { regenerable: false } },
  },
  gaps: [
    { dimension: 'tracking', state: 'not-tokenizable', reason: 'No letter-spacing brand input exists in the source.' },
    { dimension: 'shadow', state: 'partial', reason: 'Only box-shadow-lg is a Dynamic override; box-shadow/-sm/-inset inherit Bootstrap defaults.' },
    { dimension: 'icons-data-uri', state: 'not-tokenizable', compileTimeOnly: true, reason: 'Hex is baked into data-URI SVGs in _root.scss (form-feedback icons); not themeable via token.' },
  ],
};

// SPEC §7 — keep ONLY secondary's audit (transitional). warning's audit is
// removed: its contrast override is now expressed structurally (semantic.warning
// .text-emphasis aliases {color.yellow.800}); its ramp is sound.
// FOOTGUN (§6.4): do NOT remove secondary's audit until Track B (the real ramp
// fix in _colors.scss/_root.scss) lands. Removing it while the ramp is still
// broken would let the contract assert, by silence, that secondary is sound.
const ROLE_AUDIT = {
  secondary: {
    consistent: false,
    issue:
      'The role maps to gray-800, but the runtime ramp step --bs-secondary-500 '
      + 'inherits that value via the -500 special case in _root.scss, breaking '
      + 'monotonicity: --bs-secondary-400 = gray-400 (138,138,155), '
      + '--bs-secondary-500 = gray-800 (43,43,52), --bs-secondary-600 = gray-600 (87,87,104).',
    scssDivergence: '$secondary (gray-400) != runtime --bs-secondary (gray-800)',
  },
};

const SEMANTIC_PROPS = ['text-emphasis', 'bg-subtle', 'border-subtle'];
const ROLES = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'];

function compileHarness() {
  const tmp = mkdtempSync(join(tmpdir(), 'dtcg-harness-'));
  const out = join(tmp, 'harness.css');
  try {
    execFileSync(
      process.execPath,
      [SASS_JS, '--no-source-map', '--load-path=src/style', '--load-path=./', HARNESS, out],
      { cwd: ROOT, stdio: ['ignore', 'ignore', 'inherit'] },
    );
    return { css: readFileSync(out, 'utf8'), tmp };
  } catch (err) {
    rmSync(tmp, { recursive: true, force: true });
    throw err;
  }
}

/** Parse all `--<kind>-<key>: <value>;` declarations from the harness CSS. */
function parseHarness(css) {
  const ramps = {}; // fam -> { step -> hex }
  const bases = {}; // fam -> hex
  const mapping = {}; // role -> target string
  const semantics = {}; // "role__prop" -> "var(--bs-…)"
  const roleramps = {}; // "role-step" -> hex
  const type = {}; // typography key -> raw
  const space = {}; // level/base -> raw
  const radius = {}; // name -> raw
  let shadowLg = null;

  const re = /--(ramp|base|map|sem|roleramp|type|space|radius|shadow)-([a-z0-9_-]+):\s*([^;]+);/g;
  let m;
  while ((m = re.exec(css)) !== null) {
    const [, kind, key, raw] = m;
    const value = raw.trim();
    switch (kind) {
      case 'base': bases[key] = value.toLowerCase(); break;
      case 'map': mapping[key] = value.replace(/^"|"$/g, ''); break;
      case 'ramp': {
        const i = key.lastIndexOf('-');
        (ramps[key.slice(0, i)] ||= {})[key.slice(i + 1)] = value.toLowerCase();
        break;
      }
      case 'sem': semantics[key] = value; break;
      case 'roleramp': roleramps[key] = value.toLowerCase(); break;
      case 'type': type[key] = value; break;
      case 'space': space[key] = value; break;
      case 'radius': radius[key] = value; break;
      case 'shadow': if (key === 'lg') shadowLg = value; break;
      default: break;
    }
  }
  return {
    ramps, bases, mapping, semantics, roleramps, type, space, radius, shadowLg,
  };
}

// ---------- color (phase 1) ----------

/** Family node: pure group (no $value); all steps literal hex leaves; tint recipe. */
function buildFamily(fam, ramp, isMix) {
  const node = { $type: 'color' };
  for (const { step } of RAMP) node[step] = { $value: ramp[step] };

  const steps = {};
  for (const { step, op, weight } of RAMP) steps[step] = op === 'base' ? { op } : { op, weight };

  node.$extensions = {
    'dev.dynamicframework.tint': {
      base: `{color.${fam}.500}`,
      space: 'srgb',
      method: isMix ? 'bootstrap-mix' : 'hand-authored',
      steps,
    },
  };
  // Derivability block ONLY where a token deviates from its category default (§5).
  if (!isMix) {
    node.$extensions['dev.dynamicframework.derivability'] = GRAY_DERIVABILITY;
  }
  return node;
}

/** Resolve a $theme-colors-mapping target to a DTCG alias (family base OR step). */
function roleTargetToAlias(target) {
  const stepMatch = /^([a-z]+)-(\d{2,3})$/.exec(target);
  if (stepMatch && ALL_FAMILIES.includes(stepMatch[1])) return `{color.${stepMatch[1]}.${stepMatch[2]}}`;
  if (ALL_FAMILIES.includes(target)) return `{color.${target}.500}`;
  throw new Error(`Unresolvable role target: "${target}"`);
}

function buildRole(role, target) {
  const node = { $type: 'color', $value: roleTargetToAlias(target) };
  if (ROLE_AUDIT[role]) node.$extensions = { 'dev.dynamicframework.audit': ROLE_AUDIT[role] };
  return node;
}

// ---------- semantic (phase 2) ----------

/** Resolve a semantic var() target (e.g. "var(--bs-primary-600)") to a family
 *  step alias, verifying the role-step hex matches the family-step hex. */
function semanticToAlias(varStr, ramps, roleramps) {
  const m = /^var\(--bs-([a-z]+)-(\d{2,3})\)$/.exec(varStr);
  if (!m) throw new Error(`Unparseable semantic target: ${varStr}`);
  const [, base, step] = m;
  const family = ALL_FAMILIES.includes(base) ? base : ROLE_RAMP_FAMILY[base];
  if (!family) throw new Error(`Unknown semantic base "${base}" in ${varStr}`);
  const famHex = ramps[family]?.[step];
  if (!famHex) throw new Error(`No ${family}.${step} for semantic ${varStr}`);
  if (!ALL_FAMILIES.includes(base)) {
    const roleHex = roleramps[`${base}-${step}`];
    if (roleHex && roleHex !== famHex) {
      throw new Error(
        `Semantic ${varStr}: role ${base}-${step} (${roleHex}) != family ${family}.${step} `
        + `(${famHex}) — does not resolve to a clean family step`,
      );
    }
  }
  return `{color.${family}.${step}}`;
}

function buildSemantic(semantics, ramps, roleramps) {
  const out = { $type: 'color' };
  for (const role of ROLES) {
    out[role] = {};
    for (const prop of SEMANTIC_PROPS) {
      const key = `${role}__${prop}`;
      if (!semantics[key]) throw new Error(`Missing semantic ${key} in harness output`);
      out[role][prop] = { $value: semanticToAlias(semantics[key], ramps, roleramps) };
    }
  }
  return out;
}

// ---------- non-color dimensions (phase 2) ----------

function parseDim(s) {
  if (s === '0') return { value: 0, unit: 'rem' };
  const m = /^(-?[\d.]+)(rem|px|em)$/.exec(s);
  if (!m) throw new Error(`Unparseable dimension: "${s}"`);
  return { value: parseFloat(m[1]), unit: m[2] };
}

function buildTypography(type) {
  const family = type['family-sans'].split(',').map((p) => p.trim().replace(/^"|"$/g, ''));
  const fontWeight = { $type: 'fontWeight' };
  for (const [k, v] of [['light', 'fw-light'], ['normal', 'fw-normal'], ['semibold', 'fw-semibold'], ['bold', 'fw-bold'], ['bolder', 'fw-bolder']]) {
    fontWeight[k] = { $value: parseInt(type[v], 10) };
  }
  const fontSize = { $type: 'dimension', base: { $value: parseDim(type['fs-base']) } };
  for (let i = 1; i <= 6; i += 1) fontSize[`h${i}`] = { $value: parseDim(type[`fs-h${i}`]) };
  for (let i = 1; i <= 6; i += 1) fontSize[`display-${i}`] = { $value: parseDim(type[`fs-display${i}`]) };
  const lineHeight = {
    $type: 'number',
    base: { $value: parseFloat(type['lh-base']) },
    sm: { $value: parseFloat(type['lh-sm']) },
    lg: { $value: parseFloat(type['lh-lg']) },
    heading: { $value: parseFloat(type['lh-heading']) },
  };
  return {
    fontFamily: { $type: 'fontFamily', sans: { $value: family } },
    fontWeight,
    fontSize,
    lineHeight,
  };
}

function buildSpacing(space) {
  const base = parseDim(space.base);
  const node = { $type: 'dimension' };
  const steps = {};
  const levels = Object.keys(space).filter((k) => k !== 'base').sort((a, b) => Number(a) - Number(b));
  for (const k of levels) {
    const dim = parseDim(space[k]);
    node[k] = { $value: dim };
    steps[k] = { factor: base.value === 0 ? 0 : dim.value / base.value };
  }
  // The recipe base ($spacer) must coincide with one emitted level. Find that
  // level instead of assuming `4`, so the alias stays correct (and fails fast)
  // if the source scale ever changes such that $spacer != spacer-4.
  const baseLevel = levels.find((k) => {
    const d = parseDim(space[k]);
    return d.value === base.value && d.unit === base.unit;
  });
  if (!baseLevel) {
    throw new Error(`spacing base (${space.base}) matches no emitted level — cannot anchor the scale recipe`);
  }
  node.$extensions = {
    'dev.dynamicframework.scale': {
      base: `{spacing.${baseLevel}}`,
      method: 'scalar-multiple',
      steps,
    },
  };
  return node;
}

function buildRadius(radius) {
  const node = { $type: 'dimension' };
  // Source has the base radius PLUS the 5 named variants (sm/lg/xl/xxl/pill) — 6
  // independent literals, NO derived scale, NO recipe. (SPEC §1.4/§8 enumerate 5
  // variants; the base is the 6th — emitted for completeness, see PR report.)
  for (const name of ['default', 'sm', 'lg', 'xl', 'xxl', 'pill']) {
    node[name] = { $value: parseDim(radius[name]) };
  }
  return node;
}

function buildShadow(shadowLg) {
  const colorMatch = /(rgba?\([^)]*\)|#[0-9a-f]+)/i.exec(shadowLg);
  const color = colorMatch ? colorMatch[0].replace(/\s+/g, ' ') : null;
  const dims = shadowLg.slice(0, colorMatch ? colorMatch.index : undefined).trim().split(/\s+/);
  const toDim = (x) => (x === '0' ? { value: 0, unit: 'px' } : parseDim(x));
  return {
    $type: 'shadow',
    lg: {
      $value: {
        color,
        offsetX: toDim(dims[0]),
        offsetY: toDim(dims[1]),
        blur: toDim(dims[2] || '0'),
        spread: toDim(dims[3] || '0'),
      },
    },
  };
}

function main() {
  const { version } = JSON.parse(readFileSync(resolve(ROOT, 'package.json'), 'utf8'));

  process.stdout.write('Compiling export harness with dart-sass...\n');
  const { css, tmp } = compileHarness();
  let p;
  try {
    p = parseHarness(css);
  } finally {
    rmSync(tmp, { recursive: true, force: true }); // no temp artifacts (SPEC §3)
  }
  const {
    ramps, bases, mapping, semantics, roleramps, type, space, radius, shadowLg,
  } = p;

  // Color sanity: every family has a base + full ramp, and -500 == base.
  for (const fam of ALL_FAMILIES) {
    if (!bases[fam]) throw new Error(`Missing base for family "${fam}"`);
    for (const { step } of RAMP) {
      if (!ramps[fam]?.[step]) throw new Error(`Missing ${fam}-${step} in harness output`);
    }
    if (ramps[fam]['500'] !== bases[fam]) {
      throw new Error(`${fam}-500 (${ramps[fam]['500']}) != base (${bases[fam]})`);
    }
  }

  const color = {};
  for (const fam of ALL_FAMILIES) color[fam] = buildFamily(fam, ramps[fam], CHROMATIC.includes(fam));
  for (const [role, target] of Object.entries(mapping)) color[role] = buildRole(role, target);

  const tokens = {
    // Unversioned, matching the schema's own $id and the api.json precedent
    // (assets/schema/v1.json). The contract version lives in `dynamicUi` below.
    $schema: `${CDN_BASE}/tokens/schema/tokens.v1.json`,
    $extensions: {
      'dev.dynamicframework.contract': {
        schemaVersion: SCHEMA_VERSION,
        dynamicUi: version,
        generatedFrom: 'scss-source',
      },
      'dev.dynamicframework.coverage': COVERAGE,
    },
    color,
    semantic: buildSemantic(semantics, ramps, roleramps),
    typography: buildTypography(type),
    spacing: buildSpacing(space),
    radius: buildRadius(radius),
    shadow: buildShadow(shadowLg),
  };

  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_PATH, `${JSON.stringify(tokens, null, 2)}\n`, 'utf8');
  process.stdout.write(`Generated ${OUTPUT_PATH}\n`);
  process.stdout.write(
    `  color: ${ALL_FAMILIES.length} families + ${Object.keys(mapping).length} roles; `
    + `semantic: ${ROLES.length} roles × ${SEMANTIC_PROPS.length}; `
    + `+ typography/spacing/radius/shadow; dynamicUi ${version}\n`,
  );
}

main();
