/**
 * The brands the theming story applies, and the code that turns one into CSS.
 *
 * Separated from the story because this file is the *claim*: a theme in this
 * system is a handful of seeds and a few semantic reassignments, and
 * everything else — eleven steps per family, both colour modes, every
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

export type Brand = {
  id: string;
  name: string;
  /** The sentence a person typed. The agent's whole input. */
  brief: string;
  /**
   * What the agent chose. Two hexes.
   *
   * `primary` re-seeds the `blue` family — not because the brand is blue, but
   * because `role.primary.*` aliases `{color.blue.*}` and a family name is a
   * slot, not a description. `TOKENS_CONTRACT.md` uses the same move, with a
   * green. The alternative — leaving blue alone and pointing the role at
   * another family — is what `Meridiano.remedy` demonstrates.
   */
  seeds: { primary: string; neutral: string };
  /** Non-colour decisions, as semantic reassignments. Mode-independent. */
  shape?: Record<string, string>;
  /** Type. A stack with no web font, so the story loads nothing. */
  type?: Record<string, string>;
  /** Why this brand is in the list at all. */
  note: string;
  /**
   * The reassignments the contrast gate asked for, as `light-dark()` pairs.
   *
   * A pair rather than a dark-only block, because that is the shape the token
   * layer itself now emits: one declaration on `:root` carrying both halves,
   * resolved against the `color-scheme` of whatever paints it. A dark-only
   * override under `[data-df-theme="dark"]` would fix the document and leave
   * a themed subtree behind — the exact failure mode the pair form exists to
   * remove.
   *
   * Only `Meridiano` has one, and it ships switched OFF so the failure is
   * visible before the fix is.
   */
  remedy?: { why: string; pairs: Record<string, [light: string, dark: string]> };
};

export const BRANDS: Brand[] = [
  {
    id: 'dynamic',
    name: 'Dynamic',
    brief: 'No brief. The values the library publishes.',
    seeds: { primary: '#2068d5', neutral: '#6d6d82' },
    note: 'The baseline. Every other row on this page is these two hexes, changed.',
  },
  {
    id: 'araucaria',
    name: 'Araucaria',
    brief: 'Cooperativa de ahorro y crédito del sur de Chile. Cercana y confiable, '
      + 'no corporativa. Verde bosque, esquinas suaves.',
    seeds: { primary: '#0a7d4b', neutral: '#6f6a62' },
    shape: {
      'shape-control': `var(${P}-radius-lg)`,
      'shape-surface': `var(${P}-radius-xl)`,
      'shape-surface-lg': `var(${P}-radius-2xl)`,
    },
    note: 'A hue swap and two radius roles. Clears all 22 contrast pairs in both modes '
      + 'on the first try, which is the common case when the seed sits mid-ramp.',
  },
  {
    id: 'nimbo',
    name: 'Nimbo',
    brief: 'Fintech de pagos para gente joven. Violeta eléctrico, todo en píldora, '
      + 'se ve mejor en oscuro.',
    seeds: { primary: '#6d3df5', neutral: '#6a6a7d' },
    shape: {
      'shape-control': `var(${P}-radius-pill)`,
      'shape-control-sm': `var(${P}-radius-pill)`,
      'shape-control-lg': `var(${P}-radius-pill)`,
      'shape-surface': `var(${P}-radius-2xl)`,
    },
    note: 'Same two seeds, four radius roles. The pill is not a button prop — '
      + 'reassigning `shape.control` makes every control pill-shaped at once.',
  },
  {
    id: 'meridiano',
    name: 'Meridiano',
    brief: 'Banca privada. Azul tinta, serio, editorial. Serif en los títulos, '
      + 'esquinas rectas.',
    seeds: { primary: '#1f3a5f', neutral: '#6e6b66' },
    shape: {
      'shape-control': `var(${P}-radius-sm)`,
      'shape-surface': `var(${P}-radius-sm)`,
      'shape-surface-lg': `var(${P}-radius-sm)`,
    },
    type: {
      'text-heading-font-family': 'Georgia, "Times New Roman", serif',
      'text-heading-font-weight': `var(${P}-font-weight-bold)`,
    },
    note: 'The one that fails. An ink-navy seed is already near the dark end of its own '
      + 'ramp, so dark mode — which lightens the role to step 400 and flips `on-base` to '
      + 'near-black — has nothing left to lighten into.',
    remedy: {
      why: 'Step the dark half one rung lighter than the default mapping. The seed does '
        + 'not move and the light half is the system default, so the light mode the brand '
        + 'was approved on is untouched.',
      pairs: {
        'role-primary-base': [`var(${P}-color-blue-500)`, `var(${P}-color-blue-300)`],
        'role-primary-base-hover': [`var(${P}-color-blue-600)`, `var(${P}-color-blue-200)`],
        'role-primary-base-active': [`var(${P}-color-blue-700)`, `var(${P}-color-blue-100)`],
        'focus-ring': [`var(${P}-color-blue-500)`, `var(${P}-color-blue-300)`],
      },
    },
  },
];

/* ------------------------------------------------------------------ *
 * Seeds -> CSS
 * ------------------------------------------------------------------ */

/**
 * The eleven steps of one family, as custom-property declarations.
 *
 * This is the part a browser can do for itself: `dynamic.live-ramp.css`
 * expresses the same eleven values as relative colours, so a consumer who
 * links it overrides one `-500` and gets the ramp. That sheet is written
 * against `:root`, and this page needs four themes side by side on one
 * document, so the expansion happens here instead — same numbers, different
 * place.
 */
function rampLines(family: string, seed: string, neutral = false): string[] {
  const ramp = buildRamp(seed, { neutral });
  return STEPS.map((step) => `  ${P}-color-${family}-${step}: ${ramp[step]};`);
}

function block(selector: string, lines: string[]): string {
  return `${selector} {\n${lines.join('\n')}\n}`;
}

const assignments = (map: Record<string, string> | undefined) => Object
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
 * re-declaring two hexes.
 */
export function brandCss(brand: Brand, withRemedy: boolean): string {
  if (brand.id === 'dynamic') {
    return `/* ${brand.name} — nothing to emit. This is what the library ships. */`;
  }

  const root = [
    `  /* role.primary.* aliases {color.blue.*} — seed ${brand.seeds.primary} */`,
    ...rampLines('blue', brand.seeds.primary),
    '',
    `  /* greys, and role.secondary.* — seed ${brand.seeds.neutral} */`,
    ...rampLines('neutral', brand.seeds.neutral, true),
  ];

  const shape = assignments(brand.shape);
  if (shape.length) root.push('', '  /* radius roles */', ...shape);

  const type = assignments(brand.type);
  if (type.length) root.push('', '  /* type roles */', ...type);

  const blocks = [
    `/* ${brand.name} — generated from 2 seeds. Unlayered, so it beats @layer df.tokens. */`,
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
 * The two lines a CDN consumer actually writes, for the same result.
 *
 * Shown next to the generated sheet because the difference between them is the
 * whole argument for `dynamic.live-ramp.css`: the long version is what someone
 * with a build step commits, the short one is what someone editing a Modyo
 * site types into a text box.
 */
export function seedCss(brand: Brand): string {
  if (brand.id === 'dynamic') return '/* nothing */';
  return [
    '<link rel="stylesheet" href=".../dynamic.css">',
    '<link rel="stylesheet" href=".../dynamic.live-ramp.css">',
    '<style>',
    '  :root {',
    `    ${P}-color-blue-500: ${brand.seeds.primary};`,
    `    ${P}-color-neutral-500: ${brand.seeds.neutral};`,
    '  }',
    '</style>',
  ].join('\n');
}

/* ------------------------------------------------------------------ *
 * The gate
 * ------------------------------------------------------------------ */

/**
 * A subset of `CONTRAST_RULES` in `scripts/tokens/validate.mjs`, by token name
 * rather than by token id.
 *
 * The validator resolves the alias graph in Node against `tokens/`; this reads
 * the same pairs back out of the live document with `getComputedStyle`, which
 * means it measures what the browser actually painted — including the theme
 * on the wrapper, the mode on the surface, and any remedy. Those are three
 * things the Node validator cannot see, and the only three a client's
 * override introduces.
 *
 * `scripts/tokens/validate.mjs` checks 54 pairs across eight roles. These
 * eleven are the ones a two-seed rebrand can actually break: everything
 * involving `primary`, everything involving the greys.
 */
export const CONTRAST_PAIRS: Array<{ fg: string; bg: string; min: number }> = [
  { fg: 'fg-default', bg: 'bg-canvas', min: 4.5 },
  { fg: 'fg-muted', bg: 'bg-surface', min: 4.5 },
  { fg: 'fg-subtle', bg: 'bg-surface', min: 3 },
  { fg: 'fg-link', bg: 'bg-canvas', min: 4.5 },
  { fg: 'role-primary-on-base', bg: 'role-primary-base', min: 4.5 },
  { fg: 'role-primary-on-base', bg: 'role-primary-base-hover', min: 4.5 },
  { fg: 'role-primary-on-subtle', bg: 'role-primary-subtle', min: 4.5 },
  { fg: 'role-primary-emphasis', bg: 'bg-canvas', min: 4.5 },
  { fg: 'role-secondary-on-base', bg: 'role-secondary-base', min: 4.5 },
  { fg: 'border-strong', bg: 'bg-surface', min: 3 },
  { fg: 'focus-ring', bg: 'bg-surface', min: 3 },
];

/** `--df-` + a token name, which is the whole naming rule. */
export const cssVar = (name: string) => `${P}-${name}`;
