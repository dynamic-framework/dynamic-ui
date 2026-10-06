import type { ThemeName } from './palette';

/**
 * Which chrome to show, given what the toolbar says.
 *
 * Its own file, with no Storybook import, for two reasons. It is the only part
 * of the theming with a decision in it — everything else is `create()` handed
 * a palette — and `storybook/theming/create` is an `exports` subpath that the
 * library's own `moduleResolution: node` cannot resolve, so a test importing
 * `theme.ts` cannot run at all.
 */
export default function resolveTheme(choice: string | undefined): ThemeName {
  if (choice === 'light' || choice === 'dark') return choice;

  /*
   * "System" is a state, not a missing value.
   *
   * It is what most viewers are actually in, where only `prefers-color-scheme`
   * decides — and it is resolved against the MANAGER's window, which is a
   * different document from the preview's. Falling back to light here would
   * leave the sidebar bright for everyone whose OS is dark and who never
   * touches the toolbar.
   */
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
