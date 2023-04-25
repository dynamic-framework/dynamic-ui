import type { Preview } from '@storybook/react';

import { MApp } from '../src';

export default {
  parameters: {
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
      <MApp>
        <Story />
      </MApp>
    ),
  ],
} as Preview;
