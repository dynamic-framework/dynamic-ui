import { addons } from 'storybook/manager-api';
import { GLOBALS_UPDATED, SET_GLOBALS } from 'storybook/internal/core-events';

import { themes, resolveTheme } from './theme';

const config = {
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  enableShortcuts: true,
  showToolbar: true,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: true,
    collapsedRoots: ['design-system', 'hooks'],
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
};

/**
 * The chrome follows the theme toolbar.
 *
 * The toolbar already themed the PREVIEW — it sets `data-df-theme` on the
 * story's document, which is the same mechanism a consumer uses. The manager
 * is a separate React app in a separate document, and its theme was pinned to
 * `light`, so switching to dark gave you a dark story inside a light
 * Storybook: the sidebar, the toolbar and the docs chrome stayed bright.
 *
 * There is no addon for this here, and the mechanism is small enough not to
 * want one: the manager hears the same global the preview does, and re-sets
 * its config when it changes.
 */
let current;

/**
 * `api.setOptions`, not `addons.setConfig`.
 *
 * `setConfig` is the boot-time call: it fills the config the manager reads on
 * startup, and calling it again afterwards updates that store without
 * necessarily re-rendering what has already mounted. `setOptions` is the
 * runtime one — it goes through the manager's own options reducer, which is
 * what the chrome subscribes to.
 */
function applyTheme(api, globals) {
  const next = resolveTheme(globals?.theme);
  if (next === current) return;
  current = next;
  api.setOptions({ theme: themes[next] });
}

addons.register('dynamic/theme-sync', (api) => {
  /*
   * Both events, for the two moments the answer can arrive.
   *
   * `SET_GLOBALS` fires once when the preview finishes booting and reports
   * what it has; `GLOBALS_UPDATED` fires on every change afterwards. Listening
   * only to the second would leave the chrome on its initial theme until the
   * reader touched the toolbar — which is wrong for anyone whose OS is dark
   * and who never touches it.
   */
  api.on(SET_GLOBALS, ({ globals }) => applyTheme(api, globals));
  api.on(GLOBALS_UPDATED, ({ globals }) => applyTheme(api, globals));

  /* The state at registration, for the reader whose OS is dark and who never
     touches the control — no event fires for them. */
  applyTheme(api, api.getGlobals?.() ?? {});

  /*
   * And when the OS itself changes, for the viewers on "system" — the state
   * where no global changes at all, so neither event above fires.
   */
  window.matchMedia?.('(prefers-color-scheme: dark)')
    .addEventListener('change', () => {
      const { theme } = api.getGlobals?.() ?? {};
      if (theme === 'light' || theme === 'dark') return;
      current = undefined;
      applyTheme(api, { theme });
    });
});

/*
 * The boot-time theme still goes through `setConfig`, because the manager has
 * to have one before any of the above can run.
 */
addons.setConfig({ ...config, theme: themes[resolveTheme('system')] });
