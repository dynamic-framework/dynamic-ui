/**
 * The brands the theming story applies, and the code that turns one into CSS.
 *
 * Separated from the story because this file is the *claim*: a theme in this
 * system is a handful of seeds and a set of semantic reassignments, and
 * everything else — eleven steps per colour family, both colour modes, every
 * component — is derived. If that is true, it has to be expressible as data
 * with no React in it, and this is the data.
 *
 * `buildRamp` is imported from `scripts/tokens/lib/`, not reimplemented. It is
 * the function that writes `tokens/primitives/color.json`, so the hexes this
 * story paints with are the hexes the build would commit for the same seed.
 * An approximation here would make the demo a drawing of the pipeline rather
 * than the pipeline.
 */

/* The extension is part of the path: this is a build script, not a module the
   resolver can find by guessing. Typed in `stories/typings.d.ts`. */
// eslint-disable-next-line import/extensions
import { buildRamp, STEPS } from '../../scripts/tokens/lib/ramps.mjs';

/** Prefix for every custom property the system emits. From `$manifest.json`. */
const P = '--df';

/** The palette families a brand may re-seed, and which roles read them. */
export const FAMILY_ROLE: Record<string, string> = {
  blue: 'role.primary · fg.link · focus.ring',
  neutral: 'role.secondary · every bg, fg and border',
  green: 'role.success',
  cyan: 'role.info',
  yellow: 'role.warning',
  red: 'role.danger',
};

/** A group of semantic reassignments, kept apart so the UI can count them. */
export type Group = Record<string, string>;

export type Brand = {
  id: string;
  name: string;
  /** The sentence a person typed. The agent's whole input. */
  brief: string;
  /**
   * What the agent chose for the palette: one hex per family it moves.
   *
   * `blue` re-seeds the primary ramp — not because the brand is blue, but
   * because `role.primary.*` aliases `{color.blue.*}` and a family name is a
   * slot, not a description. `TOKENS_CONTRACT.md` uses the same move, with a
   * green. Each seed becomes eleven committed steps through `buildRamp`.
   */
  seeds: Record<string, string>;
  /**
   * The web fonts this brand needs, loaded only while it is on.
   *
   * `stack` is what lands in the token, fallbacks included: a theme whose type
   * disappears when a font request fails is worse than one that never asked.
   */
  fonts?: { href: string; heading: string; body: string };
  /** Type roles. The most visible thing a brand owns after colour. */
  type?: Group;
  /** Radius roles. */
  shape?: Group;
  /** Border-width roles, and the focus ring's geometry. */
  stroke?: Group;
  /** Composite shadows. A flat brand and a soft one differ here, nowhere else. */
  elevation?: Group;
  /** Duration and easing roles. */
  motion?: Group;
  /** Why this brand is in the list at all. */
  note: string;
  /**
   * The reassignments the contrast gate asked for, as `light-dark()` pairs.
   *
   * A pair rather than a dark-only block, because that is the shape the token
   * layer itself now emits: one declaration on `:root` carrying both halves,
   * resolved against the `color-scheme` of whatever paints it. A dark-only
   * override under `[data-df-theme="dark"]` would fix the document and leave
   * a themed subtree behind — the exact failure mode the pair form removes.
   *
   * Only `Meridiano` has one, and it ships switched OFF so the failure is
   * visible before the fix is.
   */
  remedy?: { why: string; pairs: Record<string, [light: string, dark: string]> };
};

const GOOGLE = 'https://fonts.googleapis.com/css2?display=swap&family=';

export const BRANDS: Brand[] = [
  {
    id: 'dynamic',
    name: 'Dynamic',
    brief: 'No brief. The values the library publishes.',
    seeds: { blue: '#2068d5', neutral: '#6d6d82' },
    note: 'The baseline. Every other row on this page is these two hexes and a list of '
      + 'reassignments, changed.',
  },
  {
    id: 'araucaria',
    name: 'Araucaria',
    brief: 'Cooperativa de ahorro y crédito del sur de Chile. Cercana y confiable, '
      + 'no corporativa. Verde bosque, tipografía con peso, esquinas suaves y generosas.',
    seeds: {
      blue: '#0a7d4b', neutral: '#6f6a62', red: '#c0392b', yellow: '#e0a008',
    },
    fonts: {
      href: `${GOOGLE}Bitter:wght@600;700&family=Nunito+Sans:wght@400;600;700`,
      heading: 'Bitter, Georgia, "Times New Roman", serif',
      body: '"Nunito Sans", system-ui, -apple-system, sans-serif',
    },
    type: {
      'font-family-sans': '"Nunito Sans", system-ui, -apple-system, sans-serif',
      'text-heading-font-family': 'Bitter, Georgia, "Times New Roman", serif',
      'text-heading-font-weight': `var(${P}-font-weight-bold)`,
      'text-heading-line-height': `var(${P}-line-height-snug)`,
      'text-body-line-height': `var(${P}-line-height-relaxed)`,
      'text-heading-3-font-size': `var(${P}-font-size-800)`,
      'text-heading-5-font-size': `var(${P}-font-size-600)`,
      'text-label-font-weight': `var(${P}-font-weight-semibold)`,
    },
    shape: {
      'shape-control': `var(${P}-radius-lg)`,
      'shape-control-sm': `var(${P}-radius-md)`,
      'shape-control-lg': `var(${P}-radius-xl)`,
      'shape-surface': `var(${P}-radius-xl)`,
      'shape-surface-lg': `var(${P}-radius-2xl)`,
    },
    elevation: {
      'elevation-sm': '0 2px 6px -2px rgb(16 40 28 / 0.12)',
      'elevation-md': '0 10px 24px -8px rgb(16 40 28 / 0.18)',
      'elevation-lg': '0 20px 44px -16px rgb(16 40 28 / 0.22)',
    },
    motion: {
      'motion-duration-enter': `var(${P}-duration-slow)`,
      'motion-duration-exit': `var(${P}-duration-normal)`,
    },
    note: 'Four seeds and eighteen reassignments. Clears all 56 contrast pairs in both '
      + 'modes on the first try, which is the common case when the seeds sit mid-ramp.',
  },
  {
    id: 'nimbo',
    name: 'Nimbo',
    brief: 'Fintech de pagos para gente joven. Violeta eléctrico, geométrico, todo en '
      + 'píldora, bordes gruesos, sin sombras, se ve mejor en oscuro.',
    seeds: {
      blue: '#6d3df5', neutral: '#6a6a7d', cyan: '#00b3d6', green: '#00855a',
    },
    fonts: {
      href: `${GOOGLE}DM+Sans:wght@400;500;700&family=Space+Grotesk:wght@500;700`,
      heading: '"Space Grotesk", system-ui, sans-serif',
      body: '"DM Sans", system-ui, -apple-system, sans-serif',
    },
    type: {
      'font-family-sans': '"DM Sans", system-ui, -apple-system, sans-serif',
      'text-heading-font-family': '"Space Grotesk", system-ui, sans-serif',
      'text-heading-font-weight': `var(${P}-font-weight-bold)`,
      'text-heading-line-height': `var(${P}-line-height-none)`,
      'text-body-font-weight': `var(${P}-font-weight-normal)`,
      'text-label-font-weight': `var(${P}-font-weight-medium)`,
    },
    shape: {
      'shape-control': `var(${P}-radius-pill)`,
      'shape-control-sm': `var(${P}-radius-pill)`,
      'shape-control-lg': `var(${P}-radius-pill)`,
      'shape-surface': `var(${P}-radius-2xl)`,
      'shape-surface-lg': `var(${P}-radius-2xl)`,
    },
    stroke: {
      'stroke-control': `var(${P}-border-width-2)`,
      'stroke-emphasis': `var(${P}-border-width-3)`,
      'focus-ring-width': `var(${P}-border-width-4)`,
      'focus-ring-offset': `var(${P}-border-width-2)`,
    },
    elevation: {
      'elevation-sm': 'none',
      'elevation-md': 'none',
      'elevation-lg': `0 12px 32px -12px color-mix(in oklab, var(${P}-color-blue-500) 55%, transparent)`,
    },
    motion: {
      'motion-duration-enter': `var(${P}-duration-fast)`,
      'motion-duration-exit': `var(${P}-duration-fast)`,
      'motion-easing-enter': `var(${P}-easing-standard)`,
    },
    note: 'The pill is not a button prop. Reassigning `shape.control` makes every control '
      + 'pill-shaped at once — buttons, inputs, chips, the lot — and `stroke.control` '
      + 'thickens all of their borders in the same line.',
  },
  {
    id: 'meridiano',
    name: 'Meridiano',
    brief: 'Banca privada. Azul tinta, serio, editorial. Serif en todo, cuerpo de texto '
      + 'grande y aireado, esquinas rectas, nada de sombras.',
    seeds: { blue: '#1f3a5f', neutral: '#6e6b66' },
    fonts: {
      href: `${GOOGLE}Lora:wght@400;500;600&family=Playfair+Display:wght@600;700`,
      heading: '"Playfair Display", Georgia, serif',
      body: 'Lora, Georgia, "Times New Roman", serif',
    },
    type: {
      'font-family-sans': 'Lora, Georgia, "Times New Roman", serif',
      'text-heading-font-family': '"Playfair Display", Georgia, serif',
      'text-heading-font-weight': `var(${P}-font-weight-bold)`,
      'text-heading-line-height': `var(${P}-line-height-tight)`,
      'text-body-font-size': `var(${P}-font-size-400)`,
      'text-body-line-height': `var(${P}-line-height-relaxed)`,
      'text-body-sm-font-size': `var(${P}-font-size-300)`,
      'text-heading-3-font-size': `var(${P}-font-size-800)`,
      'text-label-font-weight': `var(${P}-font-weight-medium)`,
    },
    shape: {
      'shape-control': `var(${P}-radius-none)`,
      'shape-control-sm': `var(${P}-radius-none)`,
      'shape-control-lg': `var(${P}-radius-none)`,
      'shape-surface': `var(${P}-radius-none)`,
      'shape-surface-lg': `var(${P}-radius-sm)`,
    },
    stroke: {
      'stroke-divider': `var(${P}-border-width-1)`,
      'stroke-emphasis': `var(${P}-border-width-2)`,
      'focus-ring-width': `var(${P}-border-width-2)`,
      'focus-ring-offset': `var(${P}-border-width-2)`,
    },
    elevation: {
      'elevation-sm': 'none',
      'elevation-md': 'none',
      'elevation-lg': '0 1px 0 0 rgb(0 0 0 / 0.14)',
    },
    motion: {
      'motion-duration-enter': `var(${P}-duration-slower)`,
      'motion-easing-enter': `var(${P}-easing-standard)`,
    },
    note: 'The one that fails. An ink-navy seed is already near the dark end of its own '
      + 'ramp, so dark mode — which lightens the role to step 400 and flips `on-base` to '
      + 'near-black — has nothing left to lighten into. Four pairs go under.',
    remedy: {
      why: 'Step the dark half one rung lighter than the default mapping. The seed does '
        + 'not move and the light half stays the system default, so the light mode the '
        + 'brand was approved on is untouched.',
      pairs: {
        'role-primary-base': [`var(${P}-color-blue-500)`, `var(${P}-color-blue-300)`],
        'role-primary-base-hover': [`var(${P}-color-blue-600)`, `var(${P}-color-blue-200)`],
        'role-primary-base-active': [`var(${P}-color-blue-700)`, `var(${P}-color-blue-100)`],
        'role-primary-emphasis': [`var(${P}-color-blue-600)`, `var(${P}-color-blue-200)`],
        'focus-ring': [`var(${P}-color-blue-500)`, `var(${P}-color-blue-300)`],
        'fg-link': [`var(${P}-color-blue-500)`, `var(${P}-color-blue-200)`],
        'fg-link-hover': [`var(${P}-color-blue-700)`, `var(${P}-color-blue-100)`],
      },
    },
  },
];

/* ------------------------------------------------------------------ *
 * How much of the system a brand moves
 * ------------------------------------------------------------------ */

/** The semantic groups, in the order they are emitted and counted. */
export const GROUPS: Array<{ key: keyof Brand; label: string }> = [
  { key: 'type', label: 'type' },
  { key: 'shape', label: 'shape' },
  { key: 'stroke', label: 'stroke · focus' },
  { key: 'elevation', label: 'elevation' },
  { key: 'motion', label: 'motion' },
];

export function tally(brand: Brand) {
  const families = Object.keys(brand.seeds).length;
  const groups = GROUPS
    .map(({ key, label }) => ({ label, count: Object.keys((brand[key] ?? {}) as Group).length }))
    .filter((g) => g.count > 0);

  return {
    families,
    primitives: families * STEPS.length,
    semantic: groups.reduce((n, g) => n + g.count, 0),
    groups,
  };
}

/* ------------------------------------------------------------------ *
 * Seeds -> CSS
 * ------------------------------------------------------------------ */

/**
 * The eleven steps of one family, as custom-property declarations.
 *
 * This is the part a browser can do for itself: `dynamic.live-ramp.css`
 * expresses the same eleven values as relative colours, so a consumer who
 * links it overrides one `-500` and gets the ramp. That sheet needs a real
 * stylesheet link and this page swaps brands on a click, so the expansion
 * happens here instead — same numbers, different place.
 */
function rampLines(family: string, seed: string): string[] {
  const ramp = buildRamp(seed, { neutral: family === 'neutral' });
  return [
    `  /* ${family} — ${FAMILY_ROLE[family] ?? 'decorative'} — seed ${seed} */`,
    ...STEPS.map((step) => `  ${P}-color-${family}-${step}: ${ramp[step]};`),
  ];
}

function block(selector: string, lines: string[]): string {
  return `${selector} {\n${lines.join('\n')}\n}`;
}

const assignments = (map: Group | undefined) => Object
  .entries(map ?? {})
  .map(([name, value]) => `  ${P}-${name}: ${value};`);

/**
 * The whole theme, as the stylesheet the story injects **and** the stylesheet
 * it prints. One string, used twice, so what is on screen cannot drift from
 * what is painting the page.
 *
 * Declared on `:root`, which is both what `TOKENS_CONTRACT.md` tells a client
 * to do and the only place it fully works. A custom property is substituted
 * where it is DECLARED: `--df-role-primary-base: var(--df-color-blue-500)` is
 * declared on `:root`, so overriding the primitive on some descendant changes
 * nothing — the semantic token resolved to the old hex already, and the
 * descendant inherits that hex rather than the reference. Theming a subtree
 * means re-declaring every layer in it; theming the document means
 * re-declaring a few dozen values.
 */
export function brandCss(brand: Brand, withRemedy: boolean): string {
  if (brand.id === 'dynamic') {
    return `/* ${brand.name} — nothing to emit. This is what the library ships. */`;
  }

  const root: string[] = [];

  Object.entries(brand.seeds).forEach(([family, seed], i) => {
    if (i) root.push('');
    root.push(...rampLines(family, seed));
  });

  GROUPS.forEach(({ key, label }) => {
    const lines = assignments(brand[key] as Group | undefined);
    if (lines.length) root.push('', `  /* ${label} */`, ...lines);
  });

  const blocks = [
    `/* ${brand.name} — generated from ${Object.keys(brand.seeds).length} seeds.`,
    '   Unlayered, so it beats @layer df.tokens with no !important. */',
    block(':root', root),
  ];

  if (withRemedy && brand.remedy) {
    blocks.push(
      '',
      '/* The dark half only. Same `:root`, same light-dark() form the token layer',
      '   emits — so a themed subtree gets the corrected value too. */',
      block(':root', Object.entries(brand.remedy.pairs).map(
        ([name, [light, dark]]) => `  ${P}-${name}: light-dark(${light}, ${dark});`,
      )),
    );
  }

  return blocks.join('\n');
}

/**
 * The few lines a CDN consumer actually writes, for the same palette.
 *
 * Shown next to the generated sheet because the difference between them is the
 * whole argument for `dynamic.live-ramp.css`: the long version is what someone
 * with a build step commits, the short one is what someone editing a Modyo
 * site types into a text box. Type and shape are not in it — those are already
 * single declarations, and they are the same in both versions.
 */
export function seedCss(brand: Brand): string {
  if (brand.id === 'dynamic') return '/* nothing */';
  return [
    '<link rel="stylesheet" href=".../dynamic.css">',
    '<link rel="stylesheet" href=".../dynamic.live-ramp.css">',
    '<style>',
    '  :root {',
    ...Object.entries(brand.seeds).map(([family, seed]) => `    ${P}-color-${family}-500: ${seed};`),
    '',
    '    /* …plus the type, shape, stroke, elevation and motion roles, */',
    '    /*    which are one declaration each either way.               */',
    '  }',
    '</style>',
  ].join('\n');
}

/* ------------------------------------------------------------------ *
 * The gate
 * ------------------------------------------------------------------ */

/** The roles a re-seeded palette can break, and the family each one reads. */
const GATED_ROLES = ['primary', 'secondary', 'success', 'info', 'warning', 'danger'];

/**
 * A subset of `CONTRAST_RULES` in `scripts/tokens/validate.mjs`, by token name
 * rather than by token id.
 *
 * The validator resolves the alias graph in Node against `tokens/`; this reads
 * the same pairs back out of the live document and measures what the browser
 * actually painted — including the theme, the mode, and any remedy. Those are
 * three things the Node validator cannot see, and the only three a client's
 * override introduces.
 *
 * The validator checks 56 pairs across eight roles. These are the ones a
 * re-seeded palette can actually break: the page grounds, plus four pairs for
 * each role whose family a brand here moves.
 */
export const CONTRAST_PAIRS: Array<{ fg: string; bg: string; min: number }> = [
  { fg: 'fg-default', bg: 'bg-canvas', min: 4.5 },
  { fg: 'fg-muted', bg: 'bg-surface', min: 4.5 },
  { fg: 'fg-subtle', bg: 'bg-surface', min: 3 },
  { fg: 'fg-link', bg: 'bg-surface', min: 4.5 },
  { fg: 'border-strong', bg: 'bg-surface', min: 3 },
  { fg: 'focus-ring', bg: 'bg-surface', min: 3 },
  ...GATED_ROLES.flatMap((role) => [
    { fg: `role-${role}-on-base`, bg: `role-${role}-base`, min: 4.5 },
    { fg: `role-${role}-on-base`, bg: `role-${role}-base-hover`, min: 4.5 },
    { fg: `role-${role}-on-subtle`, bg: `role-${role}-subtle`, min: 4.5 },
    { fg: `role-${role}-emphasis`, bg: 'bg-surface', min: 4.5 },
  ]),
];

/** `--df-` + a token name, which is the whole naming rule. */
export const cssVar = (name: string) => `${P}-${name}`;
