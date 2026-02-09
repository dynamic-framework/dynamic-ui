import { Meta, StoryObj } from '@storybook/react-vite';

import { ComponentProps } from 'react';
import DCurrencyText from '../../src/components/DCurrencyText/DCurrencyText';
import { DContextProvider } from '../../src';

const config: Meta<typeof DCurrencyText> = {
  title: 'Design System/Utils/Currency Text',
  component: DCurrencyText,
  argTypes: {
    value: {
      control: 'number',
      type: 'number',
      description: 'The numeric value to be formatted',
      table: { category: 'Content' },
    },
    className: {
      control: 'text',
      type: 'string',
      description: 'Additional CSS classes',
      table: { category: 'Appearance' },
    },
    style: {
      control: 'object',
      description: 'Inline styles',
      table: { category: 'Appearance' },
    },
    dataAttributes: {
      control: 'object',
      description: 'Data attributes',
      table: { category: 'HTML Attributes' },
    },
  },
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
        decimal: ',',
        separator: '.',
        precision: 2,
      }}
    >
      <DCurrencyText {...args} />
    </DContextProvider>
  ),
  args: {
    value: 1000.1,
  },
};
