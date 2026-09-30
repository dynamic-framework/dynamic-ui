/**
 * ramps.mjs — generates an 11-step perceptual ramp from a single seed color.
 *
 * ## Why this exists
 *
 * Dynamic 2.x built ramps with Bootstrap's `tint-color()` / `shade-color()`,
 * which mix the seed with white/black in sRGB. Two problems:
 *
 *   1. Figma cannot reproduce the function, so a designer pastes hex by hand
 *      and the two systems drift apart on the first rebrand.
 *   2. The steps are not comparable across families. Measured on the 2.x
 *      ramps, contrast-vs-white at step 900 ranges from 15.07 (yellow) to
 *      19.35 (indigo) — so `warning-900` and `primary-900` are not the same
 *      step in any meaningful sense.
 *
 * Here the ramp is computed in OKLCh and the resulting hex values are written
 * into `tokens/primitives/color.json`. Figma reads those literals; CSS reads
 * those literals. Nothing is recomputed at runtime or in Sass.
 *
 * Measured effect of the change: the step-900 contrast spread across the ten
 * chromatic families drops from 4.27 to 0.64, and step 800 from 7.81 to 4.93,
 * while the light steps (25-400) stay within dL 0.03 of the shipped 2.x values.
 * In other words the tints people already use barely move; the broken dark end
 * gets fixed. `npm run tokens:verify` re-measures this.
 *
 * ## Where the curves come from
 *
 * They are not invented. Dynamic's existing neutral ramp (`$gray-25` ..
 * `$gray-900`) is remarkably well-behaved in OKLCh: near-constant hue
 * (~285.5 deg) and a smooth lightness scale. That ramp is the ANCHOR — its
 * measured lightness values become the shared lightness scale and its measured
 * chroma profile becomes the neutral chroma curve, so the generator reproduces
 * the shipped grays byte for byte. It formalises a design decision the team
 * already made rather than replacing it.
 *
 * ## The two rules that shape the algorithm
 *
 * **Step 500 is the seed, exactly.** Client brands are defined by
 * `--df-blue-500`-style values, so the seed cannot move. That rules out the
 * Material-style approach of pinning every family's 500 to a shared lightness:
 * Dynamic's seeds span L 0.47 (purple) to 0.82 (yellow), so a shared L would
 * turn `yellow-500` into a dark gold.
 *
 * **Chroma is bounded by the sRGB gamut, not by the seed alone.** Asking for a
 * fixed fraction of the seed's chroma at a different lightness overshoots the
 * gamut on 76 of 100 steps, and the clipped result then depends on hue by
 * accident. So the target is the smaller of two bounds — see `buildRamp`.
 */

import { hexToOklch, oklchToHex, oklabToSrgb, oklchToOklab, parseHex, hex } from './color.mjs';

/** The 11 ramp steps, light to dark. */
export const STEPS = [25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

/** Index of step 500 in STEPS. The seed anchor. */
const ANCHOR = STEPS.indexOf(500);

/**
 * Shared lightness scale, measured from the anchor neutral ramp
 * (#fbfbfc .. #15151a). Note the deliberate compression at the top: 25 and 50
 * are "barely tinted" surface colors, not evenly spaced steps.
 */
export const LIGHTNESS_SCALE = [
  0.9884, // 25
  0.9557, // 50
  0.9112, // 100
  0.8230, // 200
  0.7325, // 300
  0.6391, // 400
  0.5423, // 500
  0.4631, // 600
  0.3804, // 700
  0.2928, // 800
  0.1980, // 900
];

/**
 * Chroma envelope, as a fraction of the seed's chroma. Keeps the light steps
 * subtle enough to work as background washes (their actual job) and holds full
 * chroma through 600 on the dark side — mixing toward black in sRGB drains
 * chroma and turns dark greens and blues muddy, which is the complaint the 2.x
 * `-600`/`-700` steps attract.
 */
const CHROMA_ENVELOPE = [
  0.10, // 25
  0.18, // 50
  0.32, // 100
  0.58, // 200
  0.80, // 300
  0.94, // 400
  1.00, // 500
  1.00, // 600
  0.97, // 700
  0.88, // 800
  0.70, // 900
];

/**
 * Chroma envelope measured from the anchor neutral ramp, applied to `neutral`
 * so the generated ramp reproduces the shipped grays instead of replacing them.
 */
const CHROMA_ENVELOPE_NEUTRAL = [
  0.040, // 25
  0.083, // 50
  0.206, // 100
  0.385, // 200
  0.572, // 300
  0.775, // 400
  1.000, // 500
  0.843, // 600
  0.677, // 700
  0.502, // 800
  0.308, // 900
];

/**
 * Hard cap on how close to the sRGB gamut boundary a generated step may sit.
 * A step exactly on the boundary is fragile: it survives no further processing
 * (a filter, a blend, a wider-gamut display mapping) without shifting hue.
 */
const GAMUT_CEILING = 0.95;

/**
 * Largest chroma that stays inside sRGB at the given lightness and hue.
 * Binary search, because the OKLab->sRGB boundary has no closed form.
 */
function maxChroma(L, h) {
  const EPS = 0.002;
  const fits = (c) => {
    const { r, g, b } = oklabToSrgb(oklchToOklab({ L, c, h }));
    return r >= -EPS && r <= 1 + EPS
      && g >= -EPS && g <= 1 + EPS
      && b >= -EPS && b <= 1 + EPS;
  };
  let lo = 0;
  let hi = 0.5; // beyond any sRGB color in OKLCh
  for (let i = 0; i < 30; i += 1) {
    const mid = (lo + hi) / 2;
    if (fits(mid)) lo = mid;
    else hi = mid;
  }
  return lo;
}

/**
 * Remaps the shared lightness scale so that index ANCHOR lands on `seedL`
 * while both endpoints stay at the shared extremes.
 *
 * Light side: [scale[ANCHOR] .. scale[0]] is stretched onto [seedL .. scale[0]].
 * Dark side:  [scale[last] .. scale[ANCHOR]] is stretched onto [scale[last] .. seedL].
 *
 * The result: `blue-25` and `yellow-25` are equally light, `blue-900` and
 * `yellow-900` are equally dark, and both 500s are untouched brand colors.
 */
function remapLightness(seedL) {
  const scale = LIGHTNESS_SCALE;
  const top = scale[0];
  const bottom = scale[scale.length - 1];
  const mid = scale[ANCHOR];

  return scale.map((l, i) => {
    if (i === ANCHOR) return seedL;
    if (i < ANCHOR) {
      const t = (l - mid) / (top - mid);
      return seedL + t * (top - seedL);
    }
    const t = (l - bottom) / (mid - bottom);
    return bottom + t * (seedL - bottom);
  });
}

/**
 * Builds one ramp.
 *
 * Chroma at each step is `min(seedChroma * envelope, maxChroma * ceiling)`:
 *
 *   - the envelope is an absolute bound, which is what makes a `-100` equally
 *     subtle in green and in indigo;
 *   - the gamut term is a guard rail, which is what keeps every step inside
 *     sRGB without the clipped result depending on hue by accident.
 *
 * Whichever is smaller wins. The guard rail is deliberately independent of the
 * seed: an earlier version scaled it by the seed's own gamut-relative
 * saturation, which quietly capped near-achromatic families and stopped the
 * neutral ramp reproducing the shipped grays.
 *
 * @param {string} seed  Hex color that becomes step 500.
 * @param {object} [opts]
 * @param {boolean} [opts.neutral]  Use the neutral chroma envelope.
 * @returns {Record<number, string>}  { 25: '#…', …, 900: '#…' }
 */
export function buildRamp(seed, { neutral = false } = {}) {
  const { L: seedL, c: seedC, h } = hexToOklch(seed);
  const lightness = remapLightness(seedL);
  const envelope = neutral ? CHROMA_ENVELOPE_NEUTRAL : CHROMA_ENVELOPE;

  const ramp = {};
  STEPS.forEach((step, i) => {
    if (i === ANCHOR) {
      // Emitted verbatim rather than round-tripped, so the brand color in the
      // JSON is byte-identical to the one the designer chose.
      ramp[step] = hex(parseHex(seed));
      return;
    }
    const L = lightness[i];
    const c = Math.min(seedC * envelope[i], maxChroma(L, h) * GAMUT_CEILING);
    ramp[step] = oklchToHex({ L, c, h });
  });
  return ramp;
}
