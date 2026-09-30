/**
 * emit.mjs — turns token records into the strings each output format needs.
 *
 * One serialiser per (type, target) pair, and nothing else. Keeping these here
 * rather than in the emitters means "how is a duration written in CSS" has
 * exactly one answer in the codebase.
 */

/* ------------------------------------------------------------------ *
 * Shared helpers
 * ------------------------------------------------------------------ */

/** Trims float noise: 0.25 -> "0.25", 16 -> "16", 1.5000000002 -> "1.5". */
function num(n) {
  const r = Math.round(n * 1e6) / 1e6;
  return String(r);
}

/** A font family member needs quoting if it is not a bare identifier. */
function quoteFamily(name) {
  return /^[a-zA-Z][a-zA-Z0-9-]*$/.test(name) ? name : `"${name}"`;
}

/** Custom-property name for a token: `--df-color-blue-500`. */
export const cssVarName = (token, prefix) => `--${prefix}-${token.name}`;

/** A `var()` reference to another token, by its dotted alias id. */
export const cssVarRef = (aliasId, prefix) => `var(--${prefix}-${aliasId.split('.').join('-')})`;

/* ------------------------------------------------------------------ *
 * CSS
 * ------------------------------------------------------------------ */

/**
 * Serialises a token's own value (never an alias) as CSS.
 *
 * @param {object} token
 * @param {object} ctx  { prefix, rootFontSize }
 */
export function cssValue(token, ctx) {
  const { type, value } = token;

  switch (type) {
    case 'color':
      return value;

    case 'dimension': {
      const { value: v, unit } = value;
      // Unitless zero is valid in most CSS and NOT in a media query, where the
      // unit is required. Breakpoints are read back by DContext and fed
      // straight into `(min-width: …)`, so a group can opt out of the
      // shorthand. Everything else keeps it — `padding: 0` beats `padding: 0px`.
      if (v === 0 && !token.keepZeroUnit) return '0';
      // A group marked `css: { unit: "rem" }` is authored in px (Figma's unit)
      // and emitted in rem, so the whole scale still responds to the user's
      // browser font size. Everything else keeps its authored unit.
      if (token.cssUnit === 'rem' && unit === 'px') return `${num(v / ctx.rootFontSize)}rem`;
      return `${num(v)}${unit}`;
    }

    case 'number':
      return num(value);

    case 'fontWeight':
      return typeof value === 'number' ? String(value) : value;

    case 'fontFamily':
      return (Array.isArray(value) ? value : [value]).map(quoteFamily).join(', ');

    case 'duration':
      return `${num(value.value)}${value.unit}`;

    case 'cubicBezier':
      return `cubic-bezier(${value.map(num).join(', ')})`;

    case 'shadow': {
      const layers = Array.isArray(value) ? value : [value];
      return layers.map((l) => {
        const parts = [
          cssLength(l.offsetX, token, ctx),
          cssLength(l.offsetY, token, ctx),
          cssLength(l.blur, token, ctx),
          cssLength(l.spread, token, ctx),
          resolveColorPart(l.color, ctx),
        ];
        if (l.inset) parts.unshift('inset');
        return parts.join(' ');
      }).join(', ');
    }

    default:
      throw new Error(`tokens: no CSS serialiser for $type "${type}" (${token.id})`);
  }
}

/** A dimension nested inside a composite value. */
function cssLength(dim, token, ctx) {
  if (dim == null) return '0';
  if (typeof dim === 'string') return dim;
  if (dim.value === 0) return '0';
  if (token.cssUnit === 'rem' && dim.unit === 'px') return `${num(dim.value / ctx.rootFontSize)}rem`;
  return `${num(dim.value)}${dim.unit}`;
}

/** A colour nested inside a composite value, which may itself be an alias. */
function resolveColorPart(color, ctx) {
  const m = /^\{([^}]+)\}$/.exec(String(color).trim());
  return m ? cssVarRef(m[1], ctx.prefix) : color;
}

/** The full declaration for one token, alias-aware. */
export function cssDeclaration(token, ctx) {
  const value = token.alias
    ? cssVarRef(token.alias, ctx.prefix)
    : cssValue(token, ctx);
  return `${cssVarName(token, ctx.prefix)}: ${value};`;
}

/* ------------------------------------------------------------------ *
 * Figma
 * ------------------------------------------------------------------ */

/** Figma variable types we can represent. Anything else is not publishable. */
const FIGMA_TYPE = {
  color: 'COLOR',
  dimension: 'FLOAT',
  number: 'FLOAT',
  fontWeight: 'FLOAT',
  fontFamily: 'STRING',
};

export const figmaType = (type) => FIGMA_TYPE[type] ?? null;

/** `#2068d5` / `#00000080` -> Figma's { r, g, b, a } floats. */
export function figmaColor(input) {
  let h = String(input).trim().replace(/^#/, '');
  if (h.length === 3) h = h.split('').map((c) => c + c).join('');
  if (h.length === 6) h += 'ff';
  if (!/^[0-9a-fA-F]{8}$/.test(h)) {
    throw new Error(`tokens: cannot convert "${input}" to a Figma colour`);
  }
  const byte = (i) => parseInt(h.slice(i * 2, i * 2 + 2), 16) / 255;
  return {
    r: byte(0), g: byte(1), b: byte(2), a: byte(3),
  };
}

/**
 * Serialises a token's own value for Figma.
 *
 * Dimensions are emitted in px as plain numbers: Figma FLOAT variables are
 * unitless and the canvas is in px, so this is the one place the rem
 * conversion must NOT happen.
 */
export function figmaValue(token) {
  switch (token.type) {
    case 'color':
      return figmaColor(token.value);
    case 'dimension':
      return token.value.value;
    case 'number':
      return token.value;
    case 'fontWeight':
      return typeof token.value === 'number' ? token.value : null;
    case 'fontFamily':
      return (Array.isArray(token.value) ? token.value : [token.value]).map(quoteFamily).join(', ');
    default:
      return null;
  }
}

/** Figma shows `/` as group nesting. */
export const figmaName = (token) => token.path.join('/');

/* ------------------------------------------------------------------ *
 * SCSS / TypeScript identifiers
 * ------------------------------------------------------------------ */

export const scssVarName = (token, prefix) => `$${prefix}-${token.name}`;

/** `color-blue-500` -> `colorBlue500`, for the TS surface. */
export function camel(name) {
  return name.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
}
