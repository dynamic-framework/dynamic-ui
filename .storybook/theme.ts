import { create } from 'storybook/theming/create';

import { palette } from './palette';
import resolveTheme from './resolveTheme';

/**
 * The Storybook chrome, in both themes.
 *
 * The colours come from `palette.ts`, which is generated from the same
 * `tokens/` the stylesheet is built from. They used to be hand-written hexes
 * here — six of the design system's colours, copied, with nothing holding them
 * to it. The copy had already drifted: the accent was the light-mode blue,
 * which on a dark chrome is the wrong blue, and nothing could have said so.
 *
 * The brand is not a token. A logo URL and a product name are not colours, so
 * they stay written down.
 */
const brand = {
  fontBase: '"Jost", sans-serif',
  brandTitle: 'Dynamic',
  brandUrl: 'https://react.dynamicframework.dev',
  brandImage: 'https://cdn.modyo.cloud/uploads/8c051a86-0d5b-4064-b5fd-76fb346e0fb0/original/dynamic_logo.svg',
  brandTarget: '_self',
  appBorderRadius: 8,
};

export const themes = {
  light: create({ base: 'light', ...brand, ...palette.light }),
  dark: create({ base: 'dark', ...brand, ...palette.dark }),
} as const;

export { resolveTheme };

export default themes.light;
