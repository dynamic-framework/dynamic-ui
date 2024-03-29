import type { Preview } from '@storybook/react';

export default {
  parameters: {
    docs: {
      toc: true,
    },
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
            'Quick Start',
            'Typography',
            'Colors',
            'Spacing',
            'Border',
            'Shadow',
            'Layout',
            'Components',
            [
              'Context Provider',
              'Button',
              'Icon',
              'Input',
              'Input Mask',
              'Input Search',
              'Input Password',
              'Input Currency Base',
              'Input Currency',
              'Input Counter',
              'Input Pin',
              'Input Select',
              'Input Check',
              'Input Switch',
              'Datepicker',
              'Progress',
              'Tooltip',
              'Card',
              'Quick Action Button',
              'Quick Action Check',
              'Quick Action Select',
              'Quick Action Switch',
              'List',
              'List Item',
              'Paginator',
              'Stepper',
              'Stepper Desktop',
              'Stepper Mobile',
              '*',
              'Skeleton',
              'Box File',
              'Chip',
              'Badge',
              'Avatar'
            ],
            'Patterns',
            [
              'Toast',
              'AlertBox',
              'Modal',
              'OffCanvas',
              'Carousel',
              'Popover',
              'Tabs',
              'Collapse',
            ],
            'Utils',
            [
              'Hooks',
              'Currency Text'
            ]
          ],
        ],
      },
    },
  },
} as Preview;
