import { Meta, StoryObj } from '@storybook/react';

import { DCurrencyText } from '../../components';

const config: Meta<typeof DCurrencyText> = {
  title: 'Design System/Components/Currency Text',
  component: DCurrencyText,
};

export default config;
type Story = StoryObj<typeof DCurrencyText>;

export const Default: Story = {
  decorators: [
    (Story) => {
      // eslint-disable-next-line global-require
      require('../config/liquidConfig');
      return <Story />;
    },
  ],
  args: {
    value: 100,
  },
};
