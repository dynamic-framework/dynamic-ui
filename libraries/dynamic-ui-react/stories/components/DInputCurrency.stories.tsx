import { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';

import DInputCurrency from '../../src/components/DInputCurrency/DInputCurrency';
import { ICONS } from '../config/constants';
import { DContextProvider } from '../../src/contexts';

const config: Meta<typeof DInputCurrency> = {
  title: 'Design System/Components/Input Currency',
  component: DInputCurrency,
  argTypes: {
    id: {
      control: 'text',
      type: 'string',
      description: 'The id of the input',
    },
    name: {
      control: 'text',
      type: 'string',
      description: 'The name of the input',
    },
    className: {
      control: 'text',
      type: 'string',
    },
    label: {
      control: 'text',
      type: 'string',
    },
    labelIcon: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      type: 'string',
      options: [undefined, ...ICONS],
    },
    placeholder: {
      control: 'text',
      type: 'string',
    },
    value: {
      control: 'number',
      type: 'number',
      description: 'The value of the input',
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: false } },
    },
    readOnly: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: false } },
    },
    loading: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: false } },
    },
    iconStart: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      type: 'string',
      options: [undefined, ...ICONS],
    },
    iconEnd: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      type: 'string',
      options: [undefined, ...ICONS],
    },
    hint: {
      control: 'text',
      type: 'string',
      description: 'Hint to display, also used to display validity feedback',
    },
    currencyCode: {
      control: 'string',
      type: 'string',
    },
    invalid: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: false } },
    },
    valid: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: false } },
    },
    minValue: {
      control: 'number',
      type: 'number',
    },
    maxValue: {
      control: 'number',
      type: 'number',
    },
    onChange: {
      action: 'onChange',
    },
  },
};

export default config;
type Story = StoryObj<typeof DInputCurrency>;

export const Default: Story = {
  render: (args: ComponentProps<typeof DInputCurrency>) => (
    <DContextProvider>
      <DInputCurrency {...args} />
    </DContextProvider>
  ),
  args: {
    id: 'componentId1',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    minValue: 0,
    maxValue: 100000,
  },
};

export const Value: Story = {
  render: (args: ComponentProps<typeof DInputCurrency>) => (
    <DContextProvider>
      <DInputCurrency {...args} />
    </DContextProvider>
  ),
  args: {
    id: 'componentId2',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: 1000,
    minValue: 0,
    maxValue: 100000,
  },
};

export const Error: Story = {
  render: (args: ComponentProps<typeof DInputCurrency>) => (
    <DContextProvider>
      <DInputCurrency {...args} />
    </DContextProvider>
  ),
  args: {
    id: 'componentId3',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    minValue: 0,
    maxValue: 100000,
    invalid: true,
  },
};

export const Confirm: Story = {
  render: (args: ComponentProps<typeof DInputCurrency>) => (
    <DContextProvider>
      <DInputCurrency {...args} />
    </DContextProvider>
  ),
  args: {
    id: 'componentId4',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    minValue: 0,
    maxValue: 100000,
    valid: true,
  },
};

export const Disabled: Story = {
  render: (args: ComponentProps<typeof DInputCurrency>) => (
    <DContextProvider>
      <DInputCurrency {...args} />
    </DContextProvider>
  ),
  args: {
    id: 'componentId5',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    minValue: 0,
    maxValue: 100000,
    disabled: true,
  },
};

export const WithCurrencyCode: Story = {
  render: (args: ComponentProps<typeof DInputCurrency>) => (
    <DContextProvider>
      <DInputCurrency {...args} />
    </DContextProvider>
  ),
  args: {
    id: 'componentId6',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    minValue: 0,
    maxValue: 100000,
    currencyCode: 'CLP',
  },
};
