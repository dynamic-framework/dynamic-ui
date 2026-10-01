/**
 * build-utilities.mjs — generates the utility layer.
 *
 * ## Why this is a generator and not Bootstrap's Utilities API
 *
 * The 2.x stylesheet is 1.29 MB minified, and the utility matrix is most of it:
 * Bootstrap's `$utilities` map crossed with Dynamic's extended palette
 * (16 families x 11 steps), times every responsive breakpoint, times the
 * opacity variants. `.text-teal-300` and its ~2,000 siblings ship to every page
 * of every portal whether or not anything uses them.
 *
 * Two changes fix that:
 *
 *   1. **Colour utilities come from the SEMANTIC layer only.** There is no
 *      `.df-text-teal-300`. If a client needs that exact colour they apply the
 *      token, which costs them one declaration instead of costing everyone
 *      2,000 rules. This is where the bulk of the saving is.
 *
 *   2. **Responsive variants are a separate, opt-in file.** Most pages need a
 *      handful of responsive utilities, not a responsive variant of every
 *      utility at five breakpoints.
 *
 * Nothing here is silently capped: every scope decision is logged on stdout so
 * the trade-off is visible rather than discovered later.
 *
 * ## Naming
 *
 * `.df-{utility}`, and `.df-{variant}:{utility}` for every variant:
 *
 *   df-p-4          base
 *   df-md:p-4       from the md breakpoint up
 *   df-hover:bg-muted
 *   df-dark:bg-surface
 *
 * Prefixed, unlike 2.x's bare `.p-4` / `.d-flex`: Modyo portals routinely carry
 * a client's own CSS, and `@layer` fixes precedence but not name collisions.
 *
 * The colon is 2.x's own convention — its `_utilities-hover.scss` and
 * `_utilities-dark.scss` generated `.hover\:{utility}` and `.dark\:{utility}`.
 * An earlier draft here used `df-md-p-4` for breakpoints on the theory that a
 * colon is awkward inside a Liquid template; that was wrong, since 2.x already
 * shipped colons in templates and they are perfectly ordinary in a `class`
 * attribute. One rule for every variant beats two.
 *
 * ## What gets a variant, and what does not
 *
 * 2.x generated `hover:` and `dark:` across the WHOLE utility map, which is
 * part of why its stylesheet is 1.24 MB. Here each group declares which
 * variants it supports, on the principle that the variant has to mean
 * something:
 *
 *   - `hover:` on a colour, a shadow or an opacity is a real interaction.
 *     `hover:p-4` reflows the page under the cursor.
 *   - `dark:` on a colour or a shadow is a real theme difference. Spacing does
 *     not change with the theme.
 *
 * `dark:` means something different here than it did in 2.x, and the difference
 * matters. There, the tokens were not mode-aware — dark mode was off — so
 * `dark:bg-white` meant "this literal colour, only in dark". Here the semantic
 * tokens already swap by mode, so `dark:bg-sunken` means "in dark mode reach
 * for a DIFFERENT token": light uses whatever `bg-*` you set, dark uses the
 * sunken surface. Writing `dark:bg-surface` next to `bg-surface` does nothing,
 * because `--df-bg-surface` already changed on its own.
 *
 * Variants do not stack: there is no `dark:hover:`. Stacking multiplies the
 * matrix by every pair, and the base `dark:` + component tokens cover the cases
 * that actually come up. Everything excluded is logged, never dropped quietly.
 *
 * Usage: node scripts/css/build-utilities.mjs
 */

import { loadModel } from '../tokens/lib/model.mjs';

const model = loadModel();

/* ------------------------------------------------------------------ *
 * Token lookups
 * ------------------------------------------------------------------ */

/** All token names under a dotted path prefix, in declaration order. */
function tokensUnder(prefix, { layer } = {}) {
  const found = new Map();
  for (const col of model.collections) {
    if (layer && col.layer !== layer) continue;
    for (const mode of col.modes) {
      for (const t of mode.tokens) {
        if (t.id === prefix || t.id.startsWith(`${prefix}.`)) {
          if (!found.has(t.id)) found.set(t.id, t);
        }
      }
    }
  }
  return [...found.values()];
}

const cssVar = (id) => `var(--df-${id.split('.').join('-')})`;

/** Breakpoints, read from the primitives so the two cannot drift. */
const BREAKPOINTS = tokensUnder('breakpoint', { layer: 'primitive' })
  .map((t) => ({ name: t.path[1], px: t.value.value }))
  // `xs` is 0: it is the base, and `@media (min-width: 0)` always matches, so
  // emitting a variant for it would double every rule for nothing.
  .filter((b) => b.px > 0)
  .sort((a, b) => a.px - b.px);

/**
 * Spacing steps the utilities cover: all 31.
 *
 * An earlier draft stopped at 12 and then thinned out, on the theory that a
 * `.df-p-27` belongs in a component's own CSS. In practice a gap in a scale is
 * a footgun — `df-p-13` silently doing nothing is worse than the ~8 KB the
 * remaining steps cost — and composing from utilities is exactly what this
 * layer is for.
 */
const SPACING_STEPS = [...Array(31).keys()];

/* ------------------------------------------------------------------ *
 * Catalogue
 * ------------------------------------------------------------------ */

/** Logical-property sides. `s`/`e` are start/end, so RTL works for free. */
const SIDES = {
  '': [''],
  x: ['-inline'],
  y: ['-block'],
  t: ['-block-start'],
  b: ['-block-end'],
  s: ['-inline-start'],
  e: ['-inline-end'],
};

function spacingGroup(prefix, property) {
  const rules = [];
  for (const [suffix, parts] of Object.entries(SIDES)) {
    for (const step of SPACING_STEPS) {
      rules.push({
        name: `${prefix}${suffix}-${step}`,
        decls: parts.map((p) => [`${property}${p}`, cssVar(`size.${step}`)]),
      });
    }

    // `auto` is a margin only — `padding: auto` is not a thing — and it is
    // what does the work in `mx-auto` (centre) and `ms-auto` (push to the
    // end). Leaving it out made those two impossible to express, which is
    // exactly the kind of gap that sends an author back to a literal.
    if (property === 'margin') {
      rules.push({
        name: `${prefix}${suffix}-auto`,
        decls: parts.map((p) => [`${property}${p}`, 'auto']),
      });
    }
  }
  return rules;
}

/** Semantic colour tokens, grouped for the three colour utility families. */
function colorRules() {
  const text = [];
  const bg = [];
  const border = [];

  for (const t of tokensUnder('fg', { layer: 'semantic' })) {
    text.push({ name: `text-${t.path.slice(1).join('-')}`, decls: [['color', cssVar(t.id)]] });
  }
  for (const t of tokensUnder('bg', { layer: 'semantic' })) {
    bg.push({ name: `bg-${t.path.slice(1).join('-')}`, decls: [['background-color', cssVar(t.id)]] });
  }
  for (const t of tokensUnder('border', { layer: 'semantic' })) {
    border.push({ name: `border-${t.path.slice(1).join('-')}`, decls: [['border-color', cssVar(t.id)]] });
  }

  // Roles contribute only the four sub-tokens that make sense as a utility.
  // `base-hover` and friends are states, which a utility cannot express.
  const roleTokens = tokensUnder('role', { layer: 'semantic' });
  const roles = [...new Set(roleTokens.map((t) => t.path[1]))].sort();
  for (const role of roles) {
    text.push({ name: `text-${role}`, decls: [['color', cssVar(`role.${role}.emphasis`)]] });
    bg.push({ name: `bg-${role}`, decls: [['background-color', cssVar(`role.${role}.base`)]] });
    bg.push({ name: `bg-${role}-subtle`, decls: [['background-color', cssVar(`role.${role}.subtle`)]] });
    border.push({ name: `border-${role}`, decls: [['border-color', cssVar(`role.${role}.border`)]] });
  }

  /*
   * Numbered steps, for all three properties.
   *
   * `bg-primary` and `bg-primary-subtle` are the two shades the role
   * vocabulary exposes, which is right for a component — a button does not
   * need eleven blues. It is not enough for a template author laying out a
   * page, who reaches for "a light primary" and finds nothing between
   * `subtle` and `base`.
   *
   * These come through `ramp.*`, not straight from the palette, so they keep
   * the indirection: repoint the role and every numbered class follows. They
   * are also the reason `dynamic.live-ramp.css` matters — with it, overriding
   * one `-500` moves all eleven.
   *
   * They do NOT flip in dark mode. A step names a position on a scale, not a
   * relationship to the page, so `bg-primary-100` is a pale blue on a dark
   * ground too. `bg-primary-subtle` is the one that adapts.
   */
  const stepText = [];
  const stepBg = [];
  const stepBorder = [];
  const hueText = [];
  const hueBg = [];
  const hueBorder = [];

  for (const t of tokensUnder('ramp', { layer: 'semantic' })) {
    const [, role, step] = t.path;
    stepText.push({ name: `text-${role}-${step}`, decls: [['color', cssVar(t.id)]] });
    stepBg.push({ name: `bg-${role}-${step}`, decls: [['background-color', cssVar(t.id)]] });
    stepBorder.push({ name: `border-${role}-${step}`, decls: [['border-color', cssVar(t.id)]] });
  }

  /*
   * Decorative hues, straight off the palette.
   *
   * These reach into the primitive layer, which every other utility is
   * forbidden from doing — `css:consistency` fails a COMPONENT that does it,
   * for good reason: a component reaching past the semantic layer cannot be
   * rebranded. A utility named `bg-pink-400` is the opposite case. There is no
   * role called pink and there should not be; the author has asked for that
   * hue, and routing it through an invented semantic would be indirection that
   * points nowhere.
   *
   * What they are for: illustration, category colour-coding, marketing pages.
   * What they are not for: UI state. A chip that means "error" takes
   * `bg-danger-subtle`, which follows a rebrand and flips in dark mode. One
   * that takes `bg-rose-100` does neither.
   */
  for (const t of tokensUnder('color', { layer: 'primitive' })) {
    if (t.path.length !== 3) continue;
    const [, hue, step] = t.path;
    if (!/^\d+$/.test(step)) continue;

    hueText.push({ name: `text-${hue}-${step}`, decls: [['color', cssVar(t.id)]] });
    hueBg.push({ name: `bg-${hue}-${step}`, decls: [['background-color', cssVar(t.id)]] });
    hueBorder.push({ name: `border-${hue}-${step}`, decls: [['border-color', cssVar(t.id)]] });
  }

  return {
    text,
    bg,
    border,
    stepText,
    stepBg,
    stepBorder,
    hueText,
    hueBg,
    hueBorder,
    roleCount: roles.length,
    rampSteps: stepBg.length,
    hueCount: hueBg.length,
  };
}

const colors = colorRules();

/** Type roles -> font-size utilities. */
const typeRules = () => tokensUnder('text', { layer: 'semantic' })
  .filter((t) => t.path[t.path.length - 1] === 'font-size')
  .map((t) => ({
    name: `fs-${t.path.slice(1, -1).join('-')}`,
    decls: [['font-size', cssVar(t.id)]],
  }));

const weightRules = () => tokensUnder('font-weight', { layer: 'primitive' })
  .map((t) => ({ name: `fw-${t.path[1]}`, decls: [['font-weight', cssVar(t.id)]] }));

const leadingRules = () => tokensUnder('line-height', { layer: 'primitive' })
  .map((t) => ({ name: `lh-${t.path[1]}`, decls: [['line-height', cssVar(t.id)]] }));

/**
 * Radii, all corners and per side.
 *
 * Per-side matters for anything that sits flush against an edge — an image
 * filling a card's top, a button joined to an input — and without it the only
 * way to square off one side is a literal.
 */
const RADIUS_SIDES = {
  t: ['start-start', 'start-end'],
  b: ['end-start', 'end-end'],
  s: ['start-start', 'end-start'],
  e: ['start-end', 'end-end'],
};

const radiusRules = () => tokensUnder('shape', { layer: 'semantic' })
  .flatMap((t) => [
    { name: `rounded-${t.path[1]}`, decls: [['border-radius', cssVar(t.id)]] },
    ...Object.entries(RADIUS_SIDES).map(([side, corners]) => ({
      name: `rounded-${side}-${t.path[1]}`,
      decls: corners.map((corner) => [`border-${corner}-radius`, cssVar(t.id)]),
    })),
  ]);

const shadowRules = () => tokensUnder('elevation', { layer: 'semantic' })
  .map((t) => ({ name: `shadow-${t.path[1]}`, decls: [['box-shadow', cssVar(t.id)]] }));

const zRules = () => tokensUnder('z', { layer: 'primitive' })
  .map((t) => ({ name: `z-${t.path[1]}`, decls: [['z-index', cssVar(t.id)]] }));

const opacityRules = () => tokensUnder('opacity', { layer: 'primitive' })
  .map((t) => ({ name: `opacity-${t.path[1]}`, decls: [['opacity', cssVar(t.id)]] }));

const gapRules = () => SPACING_STEPS.flatMap((step) => [
  { name: `gap-${step}`, decls: [['gap', cssVar(`size.${step}`)]] },
  { name: `gap-x-${step}`, decls: [['column-gap', cssVar(`size.${step}`)]] },
  { name: `gap-y-${step}`, decls: [['row-gap', cssVar(`size.${step}`)]] },
]);

/**
 * Border widths, all round and per edge.
 *
 * The per-edge ones exist because `border-bottom` as a divider is one of the
 * most-used utilities in the stories, and without them an author reaches for a
 * literal.
 */
const BORDER_EDGES = {
  '': ['border'],
  t: ['border-block-start'],
  b: ['border-block-end'],
  s: ['border-inline-start'],
  e: ['border-inline-end'],
  x: ['border-inline'],
  y: ['border-block'],
};

/**
 * Per-edge widths are capped at 0 and 1 on purpose.
 *
 * The whole ramp on every edge is 49 rules, and it pushed the bundle past its
 * budget to serve a `border-b-5` nobody writes. Real usage of a single edge is
 * a hairline divider or a reset of one the component drew; anything heavier is
 * a component's decision, not a utility's.
 */
const EDGE_WIDTHS = new Set(['0', '1']);

/**
 * Width, style AND colour — all three, because two of them draw nothing.
 *
 * These used to set width and style only. CSS initialises `border-color` to
 * `currentcolor`, so `df-border-1` on anything took the TEXT colour: a near
 * black hairline on body copy, and a different colour on every element it was
 * applied to. Not "no colour" — the wrong one, confidently.
 *
 * 2.x's `.border` set all three from `--bs-border-color`, which is the
 * behaviour worth keeping: a border utility should draw a border.
 *
 * An explicit colour still wins, because this family is emitted BEFORE the
 * colour families. That ordering is load-bearing — see `GROUPS`.
 */
const borderWidthRules = () => tokensUnder('border-width', { layer: 'primitive' })
  .flatMap((t) => Object.entries(BORDER_EDGES)
    .filter(([suffix]) => suffix === '' || EDGE_WIDTHS.has(t.path[1]))
    .map(([suffix, props]) => ({
      name: `border${suffix ? `-${suffix}` : ''}-${t.path[1]}`,
      decls: props.flatMap((prop) => [
        [`${prop}-width`, cssVar(t.id)],
        [`${prop}-style`, 'solid'],
        [`${prop}-color`, 'var(--df-border-default)'],
      ]),
    })));

/** Literal utilities, with no token to read from. */
const literal = (pairs) => Object.entries(pairs).map(([name, decls]) => ({ name, decls }));

const DISPLAY = literal({
  block: [['display', 'block']],
  inline: [['display', 'inline']],
  'inline-block': [['display', 'inline-block']],
  flex: [['display', 'flex']],
  'inline-flex': [['display', 'inline-flex']],
  grid: [['display', 'grid']],
  'inline-grid': [['display', 'inline-grid']],
  contents: [['display', 'contents']],
  hidden: [['display', 'none']],
});

const FLEX = literal({
  'flex-row': [['flex-direction', 'row']],
  'flex-col': [['flex-direction', 'column']],
  'flex-row-reverse': [['flex-direction', 'row-reverse']],
  'flex-col-reverse': [['flex-direction', 'column-reverse']],
  'flex-wrap': [['flex-wrap', 'wrap']],
  'flex-nowrap': [['flex-wrap', 'nowrap']],
  'flex-1': [['flex', '1 1 0%']],
  'flex-auto': [['flex', '1 1 auto']],
  'flex-initial': [['flex', '0 1 auto']],
  'flex-none': [['flex', 'none']],
  grow: [['flex-grow', '1']],
  'grow-0': [['flex-grow', '0']],
  shrink: [['flex-shrink', '1']],
  'shrink-0': [['flex-shrink', '0']],
});

const ALIGN = literal({
  'items-start': [['align-items', 'flex-start']],
  'items-center': [['align-items', 'center']],
  'items-end': [['align-items', 'flex-end']],
  'items-stretch': [['align-items', 'stretch']],
  'items-baseline': [['align-items', 'baseline']],
  'justify-start': [['justify-content', 'flex-start']],
  'justify-center': [['justify-content', 'center']],
  'justify-end': [['justify-content', 'flex-end']],
  'justify-between': [['justify-content', 'space-between']],
  'justify-around': [['justify-content', 'space-around']],
  'justify-evenly': [['justify-content', 'space-evenly']],
  'self-start': [['align-self', 'flex-start']],
  'self-center': [['align-self', 'center']],
  'self-end': [['align-self', 'flex-end']],
  'self-stretch': [['align-self', 'stretch']],
  'self-auto': [['align-self', 'auto']],
});

const TEXT = literal({
  'text-start': [['text-align', 'start']],
  'text-center': [['text-align', 'center']],
  'text-end': [['text-align', 'end']],
  'text-nowrap': [['white-space', 'nowrap']],
  'text-balance': [['text-wrap', 'balance']],
  'text-pretty': [['text-wrap', 'pretty']],
  'text-uppercase': [['text-transform', 'uppercase']],
  'text-lowercase': [['text-transform', 'lowercase']],
  'text-capitalize': [['text-transform', 'capitalize']],
  'text-truncate': [
    ['overflow', 'hidden'],
    ['text-overflow', 'ellipsis'],
    ['white-space', 'nowrap'],
  ],
  'tabular-nums': [['font-variant-numeric', 'tabular-nums']],
});

/**
 * Presentational odds and ends.
 *
 * Every one of these is here because the 2.x templates use it, not because a
 * utility framework usually ships it. `border-dashed` marks a dropzone,
 * `object-cover` fits an avatar photo, `cursor-pointer` makes a `div` acting as
 * a control look like one.
 */
const DECORATION = literal({
  'cursor-pointer': [['cursor', 'pointer']],
  'cursor-default': [['cursor', 'default']],
  'cursor-not-allowed': [['cursor', 'not-allowed']],
  italic: [['font-style', 'italic']],
  'not-italic': [['font-style', 'normal']],
  underline: [['text-decoration-line', 'underline']],
  'no-underline': [['text-decoration-line', 'none']],
  'line-through': [['text-decoration-line', 'line-through']],
  'object-cover': [['object-fit', 'cover']],
  'object-contain': [['object-fit', 'contain']],
  'align-top': [['vertical-align', 'top']],
  'align-middle': [['vertical-align', 'middle']],
  'align-bottom': [['vertical-align', 'bottom']],
  'align-baseline': [['vertical-align', 'baseline']],
  'float-none': [['float', 'none']],
  'float-start': [['float', 'inline-start']],
  'float-end': [['float', 'inline-end']],
  'bg-transparent': [['background-color', 'transparent']],
  'border-solid': [['border-style', 'solid']],
  'border-dashed': [['border-style', 'dashed']],
  'border-none': [['border-style', 'none']],
  // A list used for layout rather than for enumeration. Note that removing the
  // markers is what makes Safari stop announcing it as a list — CSS cannot put
  // that back, so a list that still IS a list needs `role="list"` in markup.
  'list-unstyled': [['padding-inline-start', '0'], ['margin-block', '0'], ['list-style', 'none']],
});

/**
 * A 12-column grid, as column-count and column-span.
 *
 * 2.x had two overlapping grids — the flexbox `.row`/`.col-*` and the CSS Grid
 * `.grid`/`.g-col-*` — and the templates use both. 3.x ships one, built on CSS
 * Grid, because that is the one the newer templates reach for and the one that
 * does not need a wrapper row to work.
 *
 * Twelve is the ceiling on purpose: a layout needing a 17-column grid is a
 * layout, not a utility, and should set `grid-template-columns` itself.
 */
const GRID_COLUMNS = 12;

const gridRules = () => {
  const rules = [];
  for (let n = 1; n <= GRID_COLUMNS; n += 1) {
    rules.push({ name: `grid-cols-${n}`, decls: [['grid-template-columns', `repeat(${n}, minmax(0, 1fr))`]] });
    rules.push({ name: `col-span-${n}`, decls: [['grid-column', `span ${n} / span ${n}`]] });
  }
  rules.push({ name: 'col-span-full', decls: [['grid-column', '1 / -1']] });
  rules.push({ name: 'col-auto', decls: [['grid-column', 'auto']] });
  return rules;
};

/**
 * Page containers.
 *
 * `df-container` is fluid with a gutter; `df-container-{bp}` caps it at that
 * breakpoint's width. 2.x shipped a `.container` that changed max-width at
 * every breakpoint at once, which meant a page could not opt into one width
 * and keep it.
 */
const containerRules = () => [
  {
    name: 'container',
    decls: [
      ['width', '100%'],
      ['margin-inline', 'auto'],
      ['padding-inline', cssVar('size.4')],
    ],
  },
  ...tokensUnder('container', { layer: 'primitive' }).map((t) => ({
    name: `container-${t.path[1]}`,
    decls: [['max-width', cssVar(t.id)]],
  })),
];

const BOX = literal({
  static: [['position', 'static']],
  relative: [['position', 'relative']],
  absolute: [['position', 'absolute']],
  fixed: [['position', 'fixed']],
  sticky: [['position', 'sticky']],
  'inset-0': [['inset', '0']],
  'top-0': [['inset-block-start', '0']],
  'bottom-0': [['inset-block-end', '0']],
  'start-0': [['inset-inline-start', '0']],
  'end-0': [['inset-inline-end', '0']],
  'overflow-auto': [['overflow', 'auto']],
  'overflow-hidden': [['overflow', 'hidden']],
  'overflow-visible': [['overflow', 'visible']],
  'overflow-x-auto': [['overflow-x', 'auto']],
  'overflow-y-auto': [['overflow-y', 'auto']],
  'w-full': [['width', '100%']],
  'w-auto': [['width', 'auto']],
  'w-fit': [['width', 'fit-content']],
  'h-full': [['height', '100%']],
  'h-auto': [['height', 'auto']],
  'h-fit': [['height', 'fit-content']],
  'min-w-0': [['min-width', '0']],
  'border-0': [['border', '0']],
  'rounded-none': [['border-radius', '0']],
});

/**
 * The catalogue. `responsive: true` means the group is also emitted per
 * breakpoint into the opt-in responsive file.
 *
 * Which groups get responsive variants is the other scope decision: layout
 * (display, flex, alignment, spacing, gap, width, text alignment) genuinely
 * changes per breakpoint. A colour or a shadow almost never does, and a
 * responsive variant of every colour utility at five breakpoints is exactly the
 * kind of matrix this generator exists to avoid.
 */
/**
 * The catalogue.
 *
 * `responsive` puts the group in the opt-in breakpoint file. `hover` and `dark`
 * put it in the base file with those variants — they are small enough to ship
 * always, unlike the breakpoint matrix.
 */
const GROUPS = [
  { name: 'display', rules: DISPLAY, responsive: true },
  { name: 'flex', rules: FLEX, responsive: true },
  { name: 'alignment', rules: ALIGN, responsive: true },
  { name: 'gap', rules: gapRules(), responsive: true },
  { name: 'margin', rules: spacingGroup('m', 'margin'), responsive: true },
  { name: 'padding', rules: spacingGroup('p', 'padding'), responsive: true },
  { name: 'text', rules: TEXT, responsive: true },
  // `hover` here is for `overflow` above all: revealing a clipped region on
  // hover is a real pattern, and the 2.x docs taught it.
  { name: 'box', rules: BOX, responsive: true, hover: true },
  { name: 'font-size', rules: typeRules(), responsive: true },
  { name: 'font-weight', rules: weightRules(), responsive: false },
  { name: 'line-height', rules: leadingRules(), responsive: false },
  /*
   * BEFORE the colour families, and that is not cosmetic.
   *
   * A width utility now sets `border-color` too, so `df-border-1` draws a
   * grey line instead of a `currentcolor` one. Emitted after the colour
   * families it would overwrite every one of them, and
   * `df-border-1 df-border-primary` would come out grey — the utilities sit
   * in one layer, so the stylesheet's order decides, not the class
   * attribute's.
   */
  { name: 'border-width', rules: borderWidthRules(), responsive: false },

  { name: 'text-colour', rules: colors.text, responsive: false, hover: true, dark: true },
  { name: 'background', rules: colors.bg, responsive: false, hover: true, dark: true },
  { name: 'border-colour', rules: colors.border, responsive: false, hover: true, dark: true },

  /*
   * Stepped colour, in its own families so they can take `hover:` and NOT
   * `dark:`.
   *
   * A numbered step names a position on a scale, so it is the same colour in
   * either theme — `df-dark:bg-primary-100` would set what `df-bg-primary-100`
   * already set. Emitting it anyway cost 231 rules that changed nothing and
   * pushed the bundle 6 KB over budget before this split.
   *
   * No `hover:` either, and that one is a judgement call rather than a
   * correctness one. Hovering to a specific shade is a real thing to want, but
   * it is 231 more rules — +1.5 KB gzip on every page — against a role-based
   * hover that already exists (`df-hover:bg-primary`, `-subtle`). The
   * granular case is one line of a consumer's own CSS; the common case is
   * already covered. Turn the flag on here if that trade stops holding.
   */
  { name: 'text-step', rules: colors.stepText, responsive: false },
  { name: 'background-step', rules: colors.stepBg, responsive: false },
  { name: 'border-step', rules: colors.stepBorder, responsive: false },

  /* Decorative hues — see `colorRules`. No variants, for the same reason the
     stepped role colours have none: a hue is a hue in either theme. */
  { name: 'text-hue', rules: colors.hueText, responsive: false },
  { name: 'background-hue', rules: colors.hueBg, responsive: false },
  { name: 'border-hue', rules: colors.hueBorder, responsive: false },
  { name: 'radius', rules: radiusRules(), responsive: false },
  { name: 'shadow', rules: shadowRules(), responsive: false, hover: true, dark: true },
  { name: 'z-index', rules: zRules(), responsive: false },
  { name: 'opacity', rules: opacityRules(), responsive: false, hover: true },
  { name: 'decoration', rules: DECORATION, responsive: false, hover: true },
  // Responsive, because a column span that cannot change at a breakpoint is
  // not a grid — it is a fixed layout.
  { name: 'grid-columns', rules: gridRules(), responsive: true },
  { name: 'container', rules: containerRules(), responsive: false },
];

/* ------------------------------------------------------------------ *
 * Emit
 * ------------------------------------------------------------------ */

/**
 * One rule.
 *
 * `variant` becomes a `df-{variant}:{utility}` class name, whose colon must be
 * backslash-escaped in the SELECTOR but not in the `class` attribute.
 * `suffix` appends a pseudo-class — `:hover` for the hover variant.
 */
function emitRule(rule, { variant = null, suffix = '', indent = 2 } = {}) {
  const pad = ' '.repeat(indent);
  const cls = variant ? `df-${variant}\\:${rule.name}` : `df-${rule.name}`;
  const decls = rule.decls
    .map(([prop, value]) => `${pad}  ${prop}: ${value};`)
    .join('\n');
  // No `!important`. Utilities sit in the last Dynamic layer, so they already
  // beat components, and a consumer's unlayered CSS still beats them. That is
  // the whole reason 2.x needed `$enable-important-utilities` and 3.x does not.
  return `${pad}.${cls}${suffix} {\n${decls}\n${pad}}`;
}

function buildBase() {
  const out = [
    '/*!',
    ' * Utilities — GENERATED by scripts/css/build-utilities.mjs. Do not edit.',
    ' */',
    '@layer df.utilities {',
  ];
  let count = 0;
  let hoverCount = 0;
  let darkCount = 0;

  for (const group of GROUPS) {
    out.push('');
    out.push(`  /* ${group.name} — ${group.rules.length} */`);
    for (const rule of group.rules) {
      out.push(emitRule(rule));
      count += 1;
    }
  }

  // --- dark --------------------------------------------------------------
  //
  // Emitted the same way the token layer emits its dark mode, and for the same
  // reason: the un-stamped document — the default "system" setting, which is
  // what most visitors have — only reaches the media query, while an explicit
  // choice has to win in both directions.
  //
  // 2.x also honoured a `.dark` ancestor class. `[data-df-theme="dark"]` covers
  // it, and unlike `.dark` it works on any subtree.
  const darkGroups = GROUPS.filter((g) => g.dark);
  if (darkGroups.length) {
    const darkRules = darkGroups.flatMap((g) => g.rules);

    out.push('');
    out.push('  /* dark: — following the OS */');
    out.push('  @media (prefers-color-scheme: dark) {');
    for (const rule of darkRules) {
      out.push(emitRule(rule, { variant: 'dark', indent: 4 }).replace(
        /^ {4}\./m,
        '    :root:not([data-df-theme="light"]) .',
      ));
      darkCount += 1;
    }
    out.push('  }');

    out.push('');
    out.push('  /* dark: — explicit, and working on any subtree */');
    for (const rule of darkRules) {
      out.push(emitRule(rule, { variant: 'dark' }).replace(
        /^ {2}\./m,
        '  [data-df-theme="dark"] .',
      ));
    }
  }

  // --- hover -------------------------------------------------------------
  //
  // After dark on purpose: both land at the same specificity, so source order
  // decides, and an interaction should beat a theme preference for the same
  // property. `text-muted dark:text-subtle hover:text-default` shows the
  // hovered colour in either mode.
  const hoverGroups = GROUPS.filter((g) => g.hover);
  if (hoverGroups.length) {
    out.push('');
    out.push('  /* hover: — applies while the pointer is over the element */');
    for (const group of hoverGroups) {
      for (const rule of group.rules) {
        out.push(emitRule(rule, { variant: 'hover', suffix: ':hover' }));
        hoverCount += 1;
      }
    }
  }

  out.push('}');
  out.push('');
  return {
    css: out.join('\n'), count, hoverCount, darkCount,
  };
}

function buildResponsive() {
  const groups = GROUPS.filter((g) => g.responsive);
  const out = [
    '/*!',
    ' * Responsive utilities — GENERATED by scripts/css/build-utilities.mjs.',
    ' *',
    ' * OPT-IN. Not part of dynamic.css: link it separately when a page needs',
    ' * breakpoint variants. Naming is .df-{breakpoint}:{utility}, min-width.',
    ' */',
    '@layer df.utilities {',
  ];
  let count = 0;
  for (const bp of BREAKPOINTS) {
    out.push('');
    out.push(`  /* >= ${bp.px}px */`);
    out.push(`  @media (min-width: ${bp.px}px) {`);
    for (const group of groups) {
      for (const rule of group.rules) {
        out.push(emitRule(rule, { variant: bp.name, indent: 4 }));
        count += 1;
      }
    }
    out.push('  }');
  }
  out.push('}');
  out.push('');
  return { css: out.join('\n'), count };
}

const base = buildBase();
const responsive = buildResponsive();

export const css = base.css;
export const responsiveCss = responsive.css;
/**
 * The same table, as data for the documentation.
 *
 * Emitted from here rather than written alongside it: a reference page listing
 * 819 class names by hand is a page that is wrong within a week, and the
 * failure is quiet — a utility that exists but is undocumented is invisible,
 * and one documented but removed is a class a template author uses and gets
 * nothing from. Both are the same bug as a dangling `var()`, one layer up.
 */
export const manifest = GROUPS.map((group) => ({
  name: group.name,
  responsive: Boolean(group.responsive),
  hover: Boolean(group.hover),
  dark: Boolean(group.dark),
  rules: group.rules.map((rule) => ({
    name: rule.name,
    decls: rule.decls.map(([prop, value]) => [prop, value]),
  })),
}));

export const breakpoints = BREAKPOINTS.map((b) => ({ name: b.name, min: b.px }));

export const stats = {
  base: base.count,
  hover: base.hoverCount,
  dark: base.darkCount,
  responsive: responsive.count,
  breakpoints: BREAKPOINTS.map((b) => b.name),
  spacingSteps: SPACING_STEPS.length,
  roles: colors.roleCount,
  // Named so the build can print what did NOT get a variant, rather than
  // leaving the cap to be discovered.
  noHover: GROUPS.filter((g) => !g.hover).map((g) => g.name),
  noDark: GROUPS.filter((g) => !g.dark).map((g) => g.name),
};

if (process.argv[1] && process.argv[1].endsWith('build-utilities.mjs')) {
  process.stdout.write(css);
  process.stderr.write(`\nbuild-utilities: ${base.count} base rules, ${responsive.count} responsive rules\n`);
}
