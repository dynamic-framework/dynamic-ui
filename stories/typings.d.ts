declare module '*.mdx' {
  const content: React.ComponentType;
  export default content;
}

/*
 * The token build's own colour maths, imported by the theming story.
 *
 * `scripts/tokens/lib/*.mjs` is plain ESM with no Node imports, so a story can
 * run it in the browser — and the theming story has to. A demo that recomputed
 * a ramp with its own approximation would be showing something the build does
 * not do, which is the one thing a story about the token pipeline must not do:
 * the hexes on screen are produced by the same `buildRamp` that writes
 * `tokens/primitives/color.json`, and the contrast numbers by the same
 * `contrastRatio` that `tokens:validate` fails the build with.
 *
 * Declared here rather than switching `allowJs` on for the whole Storybook
 * tsconfig, which would un-type every other `.js` in reach.
 */
declare module '*/scripts/tokens/lib/ramps.mjs' {
  /** `[25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900]`. */
  export const STEPS: number[];
  /** Eleven steps in OKLCh from one seed, which lands exactly on step 500. */
  export function buildRamp(
    seed: string,
    opts?: { neutral?: boolean },
  ): Record<number, string>;
}

declare module '*/scripts/tokens/lib/color.mjs' {
  /** WCAG 2.x contrast ratio between two hex colours. Range 1..21. */
  export function contrastRatio(a: string, b: string): number;
  export function hexToOklch(input: string): { L: number; c: number; h: number };
}
