import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
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
} 

export default preview;
