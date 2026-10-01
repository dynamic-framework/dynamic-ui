/**
 * live-ramp.mjs — the same ramp, expressed so the browser can rebuild it.
 *
 * `ramps.mjs` computes eleven steps from one seed in OKLCh and the hex
 * literals are committed: Figma reads them, CSS reads them, `tokens:validate`
 * measures contrast against them. That is right, and it has one gap — a
 * consumer who overrides `--df-color-blue-500` in their own CSS does not get a
 * new ramp. Steps 25-900 stay tints of the OLD hue. The token contract says so
 * as a caveat; for a Modyo site, which loads the CDN stylesheet and overrides
 * variables with no build step, that caveat is the whole use case.
 *
 * So each step is also emitted as a relative colour: lightness a fraction of
 * the way from the seed's own L toward white or black, chroma a multiple of
 * the seed's, hue the seed's plus a small measured offset.
 *
 * ## Why not `color-mix()`
 *
 * It was the obvious answer and it only works for half the ramp. Measured
 * across the ten chromatic families, a single mix percentage per step
 * reproduces steps 25-600 (contrast spread within 0.14 of the committed ramp)
 * and breaks 700-900 — the spread at step 900 goes from 0.78 back to 4.43,
 * which is where 2.x was before `ramps.mjs` fixed it.
 *
 * The cause is specific: the dark end of the ramp converges on a shared
 * ABSOLUTE lightness, not on a shared mix fraction. Seeds run from L 0.47
 * (purple) to 0.82 (yellow), so the fraction toward black has to differ by
 * family — 0.577 against 0.758 — and one percentage cannot be both.
 *
 * A relative colour can carry a per-family coefficient, so it can.
 *
 * ## The coefficients are measured, not chosen
 *
 * Every number below is read back out of the committed ramp, which is why
 * `npm run tokens:verify` can assert that evaluating these expressions
 * reproduces the literals. If someone changes a seed, the coefficients move
 * with it on the next build.
 */

import { hexToOklch } from './color.mjs';
import { STEPS } from './ramps.mjs';

/** Degrees of hue drift worth writing down; below this the chroma is too low to see it. */
const HUE_EPSILON = 0.05;

function hueDelta(a, b) {
  if (Number.isNaN(a) || Number.isNaN(b)) return 0;
  let d = a - b;
  if (d > 180) d -= 360;
  if (d < -180) d += 360;
  return d;
}

/**
 * How to rebuild one step from the seed.
 *
 * `p` is the fraction of the way from the seed's lightness to the endpoint —
 * white above step 500, black below it. Expressed as a fraction rather than an
 * absolute L so the ramp stays ORDERED for any seed a client supplies: a very
 * light brand colour still gets darker steps below it, which an absolute
 * lightness would not guarantee.
 */
export function stepCoefficients(seed, hexForStep) {
  const s = hexToOklch(seed);

  return STEPS.map((step) => {
    if (step === 500) return { step, seed: true };

    const t = hexToOklch(hexForStep[step]);
    const end = step < 500 ? 1 : 0;
    const p = (t.L - s.L) / (end - s.L);
    const chroma = s.c === 0 ? 0 : t.c / s.c;
    const hue = hueDelta(t.h, s.h);

    return {
      step,
      p,
      chroma,
      hue: Math.abs(hue) < HUE_EPSILON ? 0 : hue,
      toward: end === 1 ? 'white' : 'black',
    };
  });
}

const n = (value, places = 4) => Number(value.toFixed(places)).toString();

/** The CSS value for one step. */
export function stepValue(family, coefficient) {
  const anchor = `var(--df-color-${family}-500)`;
  const { p, chroma, hue, toward } = coefficient;

  const lightness = toward === 'white'
    ? `calc(l + (1 - l) * ${n(p)})`
    : `calc(l * ${n(1 - p)})`;

  const c = chroma === 1 ? 'c' : `calc(c * ${n(chroma)})`;
  /* `calc(h + -0.38)` is a parse risk; the sign goes in the operator. */
  const h = hue === 0
    ? 'h'
    : `calc(h ${hue < 0 ? '-' : '+'} ${n(Math.abs(hue), 2)})`;

  return `oklch(from ${anchor} ${lightness} ${c} ${h})`;
}

/**
 * Evaluates what a browser would compute, so the build can check itself.
 *
 * Mirrors `stepValue` exactly — if the two ever disagree the check is
 * worthless, so they are written next to each other on purpose.
 */
export function evaluate(seed, coefficient) {
  const s = hexToOklch(seed);
  const { p, chroma, hue, toward } = coefficient;
  const end = toward === 'white' ? 1 : 0;

  return {
    L: s.L + (end - s.L) * Number(n(p)),
    c: s.c * Number(n(chroma)),
    h: s.h + Number(n(hue, 2)),
  };
}

export { STEPS };
