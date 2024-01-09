import { Meta, StoryObj } from '@storybook/react';

import { ComponentProps } from 'react';
import DCurrencyText from '../../src/components/DCurrencyText/DCurrencyText';
import { DContextProvider } from '../../src';

const config: Meta<typeof DCurrencyText> = {
  title: 'Design System/Utils/Currency Text',
  component: DCurrencyText,
};

export default config;
type Story = StoryObj<typeof DCurrencyText>;

export const Default: Story = {
  render: (args: ComponentProps<typeof DCurrencyText>) => (
    <DContextProvider>
      <DCurrencyText {...args} />
    </DContextProvider>
  ),
  args: {
    value: 100,
  },
};

export const CustomCurrencyProps: Story = {
  render: (args: ComponentProps<typeof DCurrencyText>) => (
    <DContextProvider
      currency={{
        symbol: '€',
        decimal: '.',
        precision: 3,
        separator: '_',
      }}
    >
      <DCurrencyText {...args} />
    </DContextProvider>
  ),
  args: {
    value: 1000.123,
  },
};
