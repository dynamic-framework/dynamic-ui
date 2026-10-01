import { useEffect } from 'react';

import type { Preview } from '@storybook/react-vite';

/**
 * Forces a theme on the preview, or follows the OS.
 *
 * 3.x themes on `data-df-theme`, and the selectors are unscoped so the
 * attribute works on any element — which is what lets a dark panel sit on a
 * light page. Setting it on the document is the same mechanism used at its
 * widest, so this toolbar is both a convenience and a live test of it.
 *
 * "System" removes the attribute rather than setting a value: that is the state
 * most viewers are actually in, where only `prefers-color-scheme` decides, and
 * a toolbar that could not reproduce it would hide every bug that only appears
 * there.
 */
function withTheme(Story, context) {
  const { theme } = context.globals;

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'system') root.removeAttribute('data-df-theme');
    else root.setAttribute('data-df-theme', theme);
  }, [theme]);

  return Story();
}

const config: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Force a theme, or follow the operating system',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'system', title: 'System', icon: 'browser' },
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { theme: 'system' },
  decorators: [withTheme],
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'centered',
    docs: {
      source: {
        excludeDecorators: true,
        type: 'dynamic',
      },
      controls: {
        matchers: {
          color: /(background|color)$/i,
          date: /Date$/,
        },
        expanded: true,
        sort: 'requiredFirst',
        exclude: [
          'iconFamilyClass',
          'iconFamilyPrefix',
          'iconMaterialStyle',
          'dataAttributes',
          'iconCloseFamilyClass',
          'iconCloseFamilyPrefix',
          'iconCloseMaterialStyle',
          'style',
          'iconStartDisabled',
          'iconStartFamilyClass',
          'iconStartFamilyPrefix',
          'iconStartMaterialStyle',
          'iconStartAriaLabel',
          'iconStartTabIndex',
          'iconEndDisabled',
          'iconEndFamilyClass',
          'iconEndFamilyPrefix',
          'iconEndMaterialStyle',
          'iconEndAriaLabel',
          'iconEndTabIndex',
          'ariaLabel',
          'loadingAriaLabel',
          'ariaLabelledBy',
          'ariaDescribedBy',
          'ariaControls',
          'ariaExpanded',
          'ariaPressed',
          'ariaHidden',
          'ariaSelected',
          'ariaDisabled',
          'ariaChecked',
          'ariaCurrent',
          'ariaRole'
        ],
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          // The 3.x port sits first while it is in progress: it is what the
          // team is reviewing, and burying it under the 2.x catalogue defeats
          // the point of having a sheet to look at.
          'Dynamic 3.x',
          'Design System',
          [
            'Quick Start',
            'Components',
            '*'
          ],
          'Patterns',
          [
            'Mobile',
            '*'
          ],
        ],
      },
    },
  },
  tags: ['autodocs', 'dev', 'test', 'manifest']
};

export default config;