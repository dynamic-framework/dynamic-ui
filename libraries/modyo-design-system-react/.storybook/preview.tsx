import type { Preview } from '@storybook/react';

import { MApp } from '../src';
import { ICONS, ALL_COLORS_WITH_EMPTY } from '../src/stories/constants';

export default {
  argTypes: {
    theme: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: ALL_COLORS_WITH_EMPTY,
    },
    icon: {
      control: 'select',
      type: { name: 'string', required: true },
      options: ICONS,
    },
    isLoading: {
      control: 'boolean',
      table: { defaultValue: { summary: false } },
    },
  },
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <MApp className="d-flex justify-content-center align-items-center">
        <Story />
      </MApp>
    ),
  ],
} as Preview;
