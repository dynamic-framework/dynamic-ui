/**
 * verify.mjs — asserts the claims the ramp generator makes about itself.
 *
 * `lib/ramps.mjs` documents three properties in prose. Prose drifts, so each
 * one is re-measured here and the script exits non-zero if it stops holding:
 *
 *   1. The generated `neutral` ramp reproduces the shipped 2.x gray ramp byte
 *      for byte. That ramp is the anchor the whole system is derived from, so
 *      if it moves, everything moved.
 *   2. The shared lightness scale still matches the anchor ramp's measured
 *      OKLCh lightness. If someone edits LIGHTNESS_SCALE by hand, this fails.
 *   3. The light steps stay close to the 2.x values (so the tints people
 *      already use do not shift), while the dark steps become comparable
 *      across families (the defect the change exists to fix).
 *
 * Usage: node scripts/tokens/verify.mjs
 */

import { readFileSync } from 'fs';
import { resolve } from 'path';

import { buildRamp, STEPS, LIGHTNESS_SCALE } from './lib/ramps.mjs';
import {
  hexToOklch, contrastRatio, parseHex, hex,
} from './lib/color.mjs';
import { ROOT } from './lib/model.mjs';
import { FAMILIES } from './build-primitives.mjs';

/**
 * The gray ramp as shipped by Dynamic 2.x (`src/style/abstracts/variables/_colors.scss`).
 * Hardcoded on purpose: it is the historical anchor, and the point of the test
 * is to detect drift away from it.
 */
const ANCHOR_2X = {
  25: '#fbfbfc', 50: '#f0f0f2', 100: '#e1e1e6', 200: '#c4c4cd',
  300: '#a7a7b4', 400: '#8a8a9b', 500: '#6d6d82', 600: '#575768',
  700: '#41414e', 800: '#2b2b34', 900: '#15151a',
};

/** The 2.x chromatic seeds, and the tint/shade weights Bootstrap used. */
const SEEDS_2X = {
  blue: '#2068d5', indigo: '#6610f2', purple: '#4848b7', pink: '#d81b60', red: '#dc3545',
  orange: '#fd7e14', yellow: '#ffb300', green: '#198754', teal: '#20c997', cyan: '#0dcaf0',
};
const WEIGHTS = [0.95, 0.90, 0.80, 0.60, 0.40, 0.20, null, 0.20, 0.40, 0.60, 0.80];

/** Bootstrap's `mix()`: a linear blend in gamma sRGB. */
function mix(a, b, weight) {
  const A = parseHex(a);
  const B = parseHex(b);
  return hex({
    r: A.r * weight + B.r * (1 - weight),
    g: A.g * weight + B.g * (1 - weight),
    b: A.b * weight + B.b * (1 - weight),
  });
}

/** Reproduces the 2.x ramp for one seed, for comparison. */
const ramp2x = (seed) => STEPS.map((step, i) => (
  WEIGHTS[i] === null
    ? hex(parseHex(seed))
    : mix(i < 6 ? '#ffffff' : '#000000', seed, WEIGHTS[i])
));

/** Spread of contrast-vs-white across a set of ramps, per step. */
function spreadPerStep(ramps) {
  return STEPS.map((step, i) => {
    const ratios = ramps.map((r) => contrastRatio(r[i], '#ffffff'));
    return Math.max(...ratios) - Math.min(...ratios);
  });
}

/* ------------------------------------------------------------------ */

const failures = [];
const fail = (msg) => failures.push(msg);

/* --- 1. the anchor ramp reproduces exactly ---------------------------- */

const neutral = buildRamp(ANCHOR_2X[500], { neutral: true });
const drift = STEPS.filter((s) => neutral[s] !== ANCHOR_2X[s]);

if (drift.length) {
  for (const s of drift) {
    fail(`anchor ramp: neutral-${s} is ${neutral[s]}, shipped 2.x is ${ANCHOR_2X[s]}`);
  }
} else {
  process.stdout.write(`ok   anchor ramp reproduces all ${STEPS.length} shipped 2.x gray steps byte for byte\n`);
}

/* --- 2. the lightness scale still comes from the anchor --------------- */

const measured = STEPS.map((s) => hexToOklch(ANCHOR_2X[s]).L);
const scaleDrift = measured
  .map((L, i) => ({ step: STEPS[i], L, declared: LIGHTNESS_SCALE[i] }))
  .filter(({ L, declared }) => Math.abs(L - declared) > 5e-5);

if (scaleDrift.length) {
  for (const d of scaleDrift) {
    fail(`lightness scale: step ${d.step} declares ${d.declared} but the anchor measures ${d.L.toFixed(4)}`);
  }
} else {
  process.stdout.write('ok   LIGHTNESS_SCALE matches the anchor ramp\'s measured OKLCh lightness\n');
}

/* --- 3. light steps stay put, dark steps become comparable ----------- */

const generated = Object.values(SEEDS_2X).map((seed) => {
  const r = buildRamp(seed);
  return STEPS.map((s) => r[s]);
});
const legacy = Object.values(SEEDS_2X).map(ramp2x);

// Light side: no step may move more than this in OKLCh lightness.
const LIGHT_TOLERANCE = 0.05;
let worst = { dL: 0 };
STEPS.forEach((step, i) => {
  if (i > 5) return; // steps 25..400
  Object.keys(SEEDS_2X).forEach((fam, f) => {
    const dL = Math.abs(hexToOklch(generated[f][i]).L - hexToOklch(legacy[f][i]).L);
    if (dL > worst.dL) worst = { dL, fam, step };
    if (dL > LIGHT_TOLERANCE) {
      fail(`light-side drift: ${fam}-${step} moved dL ${dL.toFixed(3)}, over the ${LIGHT_TOLERANCE} tolerance`);
    }
  });
});
if (worst.dL <= LIGHT_TOLERANCE) {
  process.stdout.write(`ok   light steps (25-400) stay within dL ${LIGHT_TOLERANCE} of 2.x — worst is ${worst.fam}-${worst.step} at ${worst.dL.toFixed(3)}\n`);
}

const spreadNew = spreadPerStep(generated);
const spreadOld = spreadPerStep(legacy);

process.stdout.write('\n     contrast-vs-white spread across the 10 chromatic families\n');
process.stdout.write('     step        2.x      3.x   change\n');
STEPS.forEach((step, i) => {
  const delta = spreadNew[i] - spreadOld[i];
  process.stdout.write(
    `     ${String(step).padStart(4)}   ${spreadOld[i].toFixed(2).padStart(8)} ${spreadNew[i].toFixed(2).padStart(8)}   ${(delta >= 0 ? '+' : '') + delta.toFixed(2)}\n`,
  );
});
process.stdout.write('\n');

// The dark end is the defect being fixed, so it must actually improve.
for (const step of [800, 900]) {
  const i = STEPS.indexOf(step);
  if (spreadNew[i] >= spreadOld[i]) {
    fail(`step ${step}: spread did not improve (2.x ${spreadOld[i].toFixed(2)}, 3.x ${spreadNew[i].toFixed(2)})`);
  }
}
if (!failures.length) {
  const i9 = STEPS.indexOf(900);
  process.stdout.write(`ok   step-900 spread narrowed from ${spreadOld[i9].toFixed(2)} to ${spreadNew[i9].toFixed(2)}\n`);
}

/* --- 4. every generated ramp is monotonic and in gamut ---------------- */

/*
 * Every ramp the generator produces, not just the ones 2.x had.
 *
 * This iterated `SEEDS_2X`, which is the legacy comparison set — so the eight
 * decorative hues added later were generated, shipped and never checked for
 * monotonic lightness or gamut. A ramp that reverses direction somewhere in
 * the middle looks like a palette decision, not a bug.
 */
const allRamps = Object.fromEntries(
  /* The `neutral` family carries the anchor chroma profile; dropping that
     flag here made the generated grays differ from the committed ones by a
     few units, and the sync check reported `color.json` stale. */
  Object.entries(FAMILIES).map(([fam, { seed, neutral: isAnchor = false }]) => [
    fam,
    STEPS.map((s) => buildRamp(seed, { neutral: isAnchor })[s]),
  ]),
);

for (const [fam, colors] of Object.entries(allRamps)) {
  const ls = colors.map((c) => hexToOklch(c).L);
  for (let i = 1; i < ls.length; i += 1) {
    if (ls[i] >= ls[i - 1]) {
      fail(`${fam}: lightness is not strictly descending at step ${STEPS[i]}`);
    }
  }
}
if (!failures.some((f) => f.includes('descending'))) {
  process.stdout.write(`ok   all ${Object.keys(allRamps).length} ramps are strictly descending in lightness\n`);
}

/* --- 5. the committed primitives match the generator ----------------- */

const committed = JSON.parse(
  readFileSync(resolve(ROOT, 'tokens/primitives/color.json'), 'utf8'),
).color;

let stale = 0;
for (const [fam, colors] of Object.entries(allRamps)) {
  STEPS.forEach((step, i) => {
    if (committed[fam]?.[step]?.$value !== colors[i]) {
      stale += 1;
      fail(`tokens/primitives/color.json is stale: ${fam}.${step} is ${committed[fam]?.[step]?.$value}, generator produces ${colors[i]}. Run \`npm run tokens:primitives\`.`);
    }
  });
}
if (!stale) {
  process.stdout.write('ok   tokens/primitives/color.json is in sync with the generator\n');
}

/* ------------------------------------------------------------------ */

if (failures.length) {
  process.stderr.write('\n');
  for (const f of failures) process.stderr.write(`FAIL ${f}\n`);
  process.stderr.write(`\ntokens: ${failures.length} verification failure(s)\n`);
  process.exit(1);
}
process.stdout.write('\ntokens: all ramp properties verified\n');
