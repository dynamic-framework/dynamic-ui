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

/** The serialised value of one token — an alias becomes a `var()`. */
export function cssTokenValue(token, ctx) {
  return token.alias ? cssVarRef(token.alias, ctx.prefix) : cssValue(token, ctx);
}

/** The full declaration for one token, alias-aware. */
export function cssDeclaration(token, ctx) {
  return `${cssVarName(token, ctx.prefix)}: ${cssTokenValue(token, ctx)};`;
}

/**
 * The CSS test that decides whether a browser gets the `light-dark()` form.
 *
 * Exported so the emitter and anything reading the emitted sheet agree on one
 * string rather than two that drift.
 */
export const LIGHT_DARK_SUPPORTS = 'color: light-dark(#000, #fff)';

/**
 * One declaration carrying BOTH modes, resolved where it is used.
 *
 * This is the whole fix for themed subtrees, and it is worth being precise
 * about why, because the obvious reading of the old output is that it already
 * worked.
 *
 * A custom property is substituted where it is **declared**. The Components
 * collection has one mode, so `--df-card-bg: var(--df-bg-surface)` is declared
 * once, on `:root`, and resolves there to the light hex. What inherits down
 * the tree is that hex — not the reference. A `[data-df-theme="dark"]` further
 * in redefines `--df-bg-surface`, but nothing re-reads it, so the card keeps
 * its light fill while the text on top of it, which comes from a rule on the
 * element itself, goes dark. Measured on the shipped bundle: `.df-text-muted`
 * inside a `.df-card` inside a dark subtree sat at **2.38:1**.
 *
 * 197 of the 575 component declarations had that shape. Re-emitting all of
 * them inside every mode selector is the other way out and is what Bootstrap
 * 5.3 does; it costs the duplication and it only covers the layers someone
 * remembered to duplicate.
 *
 * `light-dark()` moves the decision from substitution time to **used-value**
 * time: the token stream `light-dark(a, b)` travels through any number of
 * `var()` hops untouched, and the browser picks a side from the `color-scheme`
 * of the element that finally paints it. So a component token declared once on
 * `:root` lands correctly inside a zone, with no duplication and nothing for a
 * component author to remember.
 *
 * Only `$type: color` qualifies — `light-dark()` is a `<color>` function. Every
 * token that currently differs between light and dark is a colour, and the
 * emitter falls back to per-mode blocks for anything that is not.
 */
export function cssLightDarkValue(lightToken, darkToken, ctx) {
  return `light-dark(${cssTokenValue(lightToken, ctx)}, ${cssTokenValue(darkToken, ctx)})`;
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
