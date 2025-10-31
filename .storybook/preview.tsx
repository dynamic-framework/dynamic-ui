import type { Preview } from '@storybook/react-vite';

const config: Preview = {
  parameters: {
    docs: {
      source: {
        excludeDecorators: true,
        type: 'dynamic',
      },
    },
    layout: 'centered',
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
  tags: ['autodocs']
};

export default config;