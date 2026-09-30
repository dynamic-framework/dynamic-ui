import type { Preview } from '@storybook/react-vite';

const config: Preview = {
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