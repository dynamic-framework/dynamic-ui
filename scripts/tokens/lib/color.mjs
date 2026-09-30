/**
 * color.mjs — sRGB <-> OKLab/OKLCh conversion and sRGB gamut mapping.
 *
 * Zero dependencies on purpose: this module runs in the token build, which must
 * stay reproducible and auditable. The math is the published OKLab definition
 * (Bjorn Ottosson, 2020) plus the standard sRGB transfer function.
 *
 * Every function here is pure. Hex in, hex out, no rounding surprises: the only
 * place we quantise to 8-bit is `hex()`.
 */

/* ------------------------------------------------------------------ *
 * sRGB transfer function
 * ------------------------------------------------------------------ */

/** Gamma-encoded sRGB channel (0..1) -> linear-light (0..1). */
function toLinear(c) {
  return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}

/** Linear-light channel (0..1) -> gamma-encoded sRGB (0..1). */
function toGamma(c) {
  return c <= 0.0031308 ? c * 12.92 : 1.055 * c ** (1 / 2.4) - 0.055;
}

/* ------------------------------------------------------------------ *
 * Hex parsing / formatting
 * ------------------------------------------------------------------ */

/** "#2068d5" | "#fff" -> { r, g, b } in 0..1 gamma sRGB. */
export function parseHex(input) {
  let h = String(input).trim().replace(/^#/, '');
  if (h.length === 3) h = h.split('').map((c) => c + c).join('');
  if (!/^[0-9a-fA-F]{6}$/.test(h)) {
    throw new Error(`Not a 6-digit hex color: ${input}`);
  }
  return {
    r: parseInt(h.slice(0, 2), 16) / 255,
    g: parseInt(h.slice(2, 4), 16) / 255,
    b: parseInt(h.slice(4, 6), 16) / 255,
  };
}

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);

/** { r, g, b } in 0..1 gamma sRGB -> "#rrggbb" (lowercase). */
export function hex({ r, g, b }) {
  const byte = (v) => Math.round(clamp01(v) * 255).toString(16).padStart(2, '0');
  return `#${byte(r)}${byte(g)}${byte(b)}`;
}

/* ------------------------------------------------------------------ *
 * sRGB <-> OKLab
 * ------------------------------------------------------------------ */

/** Gamma sRGB -> OKLab { L, a, b }. L is 0..1. */
export function srgbToOklab({ r, g, b }) {
  const lr = toLinear(r);
  const lg = toLinear(g);
  const lb = toLinear(b);

  const l = 0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb;
  const m = 0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb;
  const s = 0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb;

  const l_ = Math.cbrt(l);
  const m_ = Math.cbrt(m);
  const s_ = Math.cbrt(s);

  return {
    L: 0.2104542553 * l_ + 0.7936177850 * m_ - 0.0040720468 * s_,
    a: 1.9779984951 * l_ - 2.4285922050 * m_ + 0.4505937099 * s_,
    b: 0.0259040371 * l_ + 0.7827717662 * m_ - 0.8086757660 * s_,
  };
}

/** OKLab -> gamma sRGB. Channels may fall outside 0..1 (out of gamut). */
export function oklabToSrgb({ L, a, b }) {
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.2914855480 * b;

  const l = l_ ** 3;
  const m = m_ ** 3;
  const s = s_ ** 3;

  return {
    r: toGamma(+4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s),
    g: toGamma(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s),
    b: toGamma(-0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s),
  };
}

/* ------------------------------------------------------------------ *
 * OKLab <-> OKLCh (polar form: L, chroma, hue in degrees)
 * ------------------------------------------------------------------ */

export function oklabToOklch({ L, a, b }) {
  const c = Math.sqrt(a * a + b * b);
  let h = (Math.atan2(b, a) * 180) / Math.PI;
  if (h < 0) h += 360;
  // A greyscale color has no meaningful hue; report 0 so it round-trips stably.
  return { L, c, h: c < 1e-7 ? 0 : h };
}

export function oklchToOklab({ L, c, h }) {
  const rad = (h * Math.PI) / 180;
  return { L, a: c * Math.cos(rad), b: c * Math.sin(rad) };
}

export const hexToOklch = (input) => oklabToOklch(srgbToOklab(parseHex(input)));

/* ------------------------------------------------------------------ *
 * Gamut mapping
 * ------------------------------------------------------------------ */

const EPS = 1 / 512; // sub-8-bit tolerance; avoids clipping on float noise
const inGamut = ({ r, g, b }) => (
  r >= -EPS && r <= 1 + EPS && g >= -EPS && g <= 1 + EPS && b >= -EPS && b <= 1 + EPS
);

/**
 * Finds the most saturated in-gamut sRGB color with the given L and h by
 * binary-searching chroma downward. This preserves lightness and hue exactly,
 * which is what keeps a generated ramp perceptually even — naive per-channel
 * clipping would shift both.
 */
export function oklchToSrgbGamutMapped({ L, c, h }) {
  const direct = oklabToSrgb(oklchToOklab({ L, c, h }));
  if (inGamut(direct)) return { r: clamp01(direct.r), g: clamp01(direct.g), b: clamp01(direct.b) };

  let lo = 0;
  let hi = c;
  // 24 iterations resolves chroma far below 8-bit quantisation.
  for (let i = 0; i < 24; i += 1) {
    const mid = (lo + hi) / 2;
    if (inGamut(oklabToSrgb(oklchToOklab({ L, c: mid, h })))) lo = mid;
    else hi = mid;
  }
  const mapped = oklabToSrgb(oklchToOklab({ L, c: lo, h }));
  return { r: clamp01(mapped.r), g: clamp01(mapped.g), b: clamp01(mapped.b) };
}

/** OKLCh -> "#rrggbb", gamut-mapped by reducing chroma. */
export const oklchToHex = (lch) => hex(oklchToSrgbGamutMapped(lch));

/* ------------------------------------------------------------------ *
 * Contrast (WCAG 2.x relative luminance)
 * ------------------------------------------------------------------ */

/** WCAG relative luminance of a hex color. */
export function luminance(input) {
  const { r, g, b } = parseHex(input);
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

/** WCAG 2.x contrast ratio between two hex colors. Range 1..21. */
export function contrastRatio(a, b) {
  const la = luminance(a);
  const lb = luminance(b);
  const light = Math.max(la, lb);
  const dark = Math.min(la, lb);
  return (light + 0.05) / (dark + 0.05);
}
