/**
 * build-primitives.mjs — writes `tokens/primitives/color.json`.
 *
 * The colour primitives are the only generated token file: every ramp is
 * derived from one seed per family (see `lib/ramps.mjs`) and the resulting hex
 * literals are committed, so Figma and CSS read the exact same values and
 * nobody recomputes a tint anywhere.
 *
 * To rebrand: change a seed below, run `npm run tokens:primitives`, review the
 * diff. That is the whole procedure.
 *
 * Usage: node scripts/tokens/build-primitives.mjs
 */

import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

import { buildRamp, STEPS } from './lib/ramps.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const OUT = resolve(ROOT, 'tokens/primitives/color.json');

/**
 * Seed colours. Step 500 of each ramp is exactly this value.
 *
 * `neutral` carries the anchor flag: its ramp uses the chroma profile measured
 * from the shipped 2.x gray ramp, which makes the generated output byte-identical
 * to `$gray-25 .. $gray-900`. Everything else in the system — the shared
 * lightness scale included — is derived from this one ramp, so it is the last
 * seed you should change casually.
 */
export const FAMILIES = {
  neutral: { seed: '#6d6d82', neutral: true, description: 'Anchor ramp. Defines the shared lightness scale used by every other family.' },
  blue: { seed: '#2068d5' },
  indigo: { seed: '#6610f2' },
  purple: { seed: '#4848b7' },
  pink: { seed: '#d81b60' },
  red: { seed: '#dc3545' },
  orange: { seed: '#fd7e14' },
  yellow: { seed: '#ffb300' },
  green: { seed: '#198754' },
  teal: { seed: '#20c997' },
  cyan: { seed: '#0dcaf0' },
};

function build() {
  const color = { $type: 'color' };

  for (const [name, { seed, neutral = false, description }] of Object.entries(FAMILIES)) {
    const ramp = buildRamp(seed, { neutral });
    const group = {};

    for (const step of STEPS) {
      group[step] = { $value: ramp[step] };
    }

    group.$extensions = {
      'dev.dynamicframework.ramp': {
        seed,
        anchorStep: 500,
        space: 'oklch',
        method: neutral ? 'anchor-neutral' : 'oklch-envelope',
        generator: 'scripts/tokens/build-primitives.mjs',
      },
    };

    if (description) group.$description = description;
    color[name] = group;
  }

  // Absolute black and white are not ramp members: they are fixed references
  // that no rebrand should ever move.
  color.white = { $value: '#ffffff', $description: 'Absolute white. Never rebranded.' };
  color.black = { $value: '#000000', $description: 'Absolute black. Never rebranded.' };
  color.transparent = {
    $value: '#00000000',
    $description: 'Fully transparent. An absolute like white and black, and the only way to say "no fill" as a token — the alpha ramps below start at 5%.',
  };

  // Translucent primitives, as 8-digit hex. These exist so that scrims and
  // overlays can be *aliased* from the semantic layer instead of forcing a
  // literal `rgba()` into it. Figma COLOR variables carry an alpha channel, so
  // 8-digit hex round-trips; `rgba(var(--x-rgb), .5)` does not, which is why
  // 2.x could not export its overlays at all.
  const ALPHAS = [5, 10, 20, 30, 40, 50, 60, 70, 80, 90];
  const toHexAlpha = (pct) => Math.round((pct / 100) * 255).toString(16).padStart(2, '0');

  color.alpha = {
    $description: 'Translucent black and white, for scrims and overlays.',
    black: Object.fromEntries(ALPHAS.map((a) => [a, { $value: `#000000${toHexAlpha(a)}` }])),
    white: Object.fromEntries(ALPHAS.map((a) => [a, { $value: `#ffffff${toHexAlpha(a)}` }])),
  };

  return {
    $description:
      'Colour primitives. GENERATED — do not edit by hand; edit the seeds in '
      + 'scripts/tokens/build-primitives.mjs and re-run `npm run tokens:primitives`.',
    color,
  };
}

/*
 * Guarded, because `FAMILIES` is imported elsewhere.
 *
 * `build-live-ramp.mjs` needs the seeds, and importing this file used to
 * REWRITE `tokens/primitives/color.json` as a side effect of asking for them —
 * so a CSS build silently regenerated a committed token file.
 */
if (process.argv[1] && process.argv[1].endsWith('build-primitives.mjs')) {
  writeFileSync(OUT, `${JSON.stringify(build(), null, 2)}\n`, 'utf8');
  process.stdout.write(`tokens: wrote ${OUT.replace(`${ROOT}/`, '')}\n`);
}
