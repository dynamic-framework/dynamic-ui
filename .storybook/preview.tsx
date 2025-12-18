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
          'Design System',
          [
            'Quick Start',
            'Components',
            [
              '*',
            ],
            'Patterns',
            [
              '*'
            ],
            'Utils',
            [
              '*'
            ]
          ],
        ],
      },
    },
  },
  tags: ['autodocs']
};

export default config;