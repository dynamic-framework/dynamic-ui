import { Meta, StoryObj } from '@storybook/react';

import DCurrencyText from '../../src/components/DCurrencyText/DCurrencyText';

const config: Meta<typeof DCurrencyText> = {
  title: 'Design System/Components/Currency Text',
  component: DCurrencyText,
};

export default config;
type Story = StoryObj<typeof DCurrencyText>;

export const Default: Story = {
  args: {
    value: 100,
  },
};