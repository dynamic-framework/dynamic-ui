import type { Preview } from '@storybook/react';

export default {
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
        order: [
          'Design System',
          [
            'Tokens',
            [
              'Typography',
              'Colors',
              'Spacing',
              'Border',
              'Shadow',
              'Layout',
            ],
            'Components',
            [
              'Icon',
              'Button',
              'Input',
              'Input Search',
              'Input Password',
              'Input Currency Base',
              'Input Currency',
              'Input Counter',
              'Input Pin',
              'Input Select',
              'Input Check',
              'Input Switch',
              'Formik Input',
              'Formik Input Select',
              'Box File',
              'Progress Bar',
              'Tooltip',
              'Quick Action Button',
              'Quick Action Check',
              'Quick Action Select',
              'Quick Action Switch',
              '*',
              'Skeleton',
            ],
            'Patterns',
            [
              'Alert',
              'Modal',
              'Offcanvas',
              'Popover',
              'Tabs',
              'Collapse',
              'Collapse Icon Text',
              'Badge',
              'Chip',
            ],
          ],
        ],
      },
    },
  },
} as Preview;
