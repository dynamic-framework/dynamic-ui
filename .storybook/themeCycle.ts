export type Choice = 'system' | 'light' | 'dark';

export const ORDER: Choice[] = ['system', 'light', 'dark'];

export const LABEL: Record<Choice, string> = {
  system: 'Following the system',
  light: 'Light',
  dark: 'Dark',
};

/**
 * The next value in the cycle.
 *
 * Its own file, with no Storybook import, for the same reason `resolveTheme`
 * is: `storybook/preview-api` is an `exports` subpath the library's own
 * `moduleResolution: node` cannot resolve, so a test importing the component
 * cannot run at all. What is left in the component is markup.
 *
 * Three states rather than two, because "system" is a real one — it is what
 * most readers are in, where only `prefers-color-scheme` decides, and a
 * two-way switch could never get back to it.
 */
export default function nextChoice(current: string | undefined): Choice {
  const index = ORDER.indexOf(current as Choice);
  /*
   * An unknown value lands on `light`, not on `system`.
   *
   * `indexOf` returns -1 for an unset global, and `-1 + 1` is 0 — which is
   * `system`, the state the reader is already in. Cycling to it would make
   * the first press appear to do nothing.
   */
  return index === -1 ? 'light' : ORDER[(index + 1) % ORDER.length];
}
