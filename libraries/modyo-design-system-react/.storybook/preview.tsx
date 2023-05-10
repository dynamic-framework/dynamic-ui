import type { Preview } from '@storybook/react';

import { MApp } from '../src';
import { ICONS, ALL_COLORS_WITH_EMPTY } from '../src/stories/constants';

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
  },
  decorators: [
    (Story) => (
      <MApp className="d-flex justify-content-center align-items-center">
        <Story />
      </MApp>
    ),
  ],
} as Preview;
