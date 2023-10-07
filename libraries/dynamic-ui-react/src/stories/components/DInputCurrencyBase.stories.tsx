import { Meta, StoryObj } from '@storybook/react';

import { DInputCurrencyBase } from '../../components';
import { ICONS } from '../constants';

const config: Meta<typeof DInputCurrencyBase> = {
  title: 'Design System/Components/Input Currency Base',
  component: DInputCurrencyBase,
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
    isDisabled: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: false } },
    },
    isReadOnly: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: false } },
    },
    isLoading: {
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
      control: 'text',
      type: 'string',
    },
    isInvalid: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: false } },
    },
    isValid: {
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
type Story = StoryObj<typeof DInputCurrencyBase>;

export const Default: Story = {
  args: {
    id: 'componentId1',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    minValue: 0,
    maxValue: 100000,
    currencyOptions: {
      symbol: '$',
      precision: 2,
      separator: ',',
      decimal: '.',
    },
  },
};

export const Value: Story = {
  args: {
    id: 'componentId2',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: 100,
    minValue: 0,
    maxValue: 100000,
    currencyOptions: {
      symbol: '$',
      precision: 2,
      separator: ',',
      decimal: '.',
    },
  },
};

export const Error: Story = {
  args: {
    id: 'componentId3',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    minValue: 0,
    maxValue: 100000,
    currencyOptions: {
      symbol: '$',
      precision: 2,
      separator: ',',
      decimal: '.',
    },
    isInvalid: true,
  },
};

export const Confirm: Story = {
  args: {
    id: 'componentId4',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    minValue: 0,
    maxValue: 100000,
    currencyOptions: {
      symbol: '$',
      precision: 2,
      separator: ',',
      decimal: '.',
    },
    isValid: true,
  },
};

export const Disabled: Story = {
  args: {
    id: 'componentId5',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    minValue: 0,
    maxValue: 100000,
    currencyOptions: {
      symbol: '$',
      precision: 2,
      separator: ',',
      decimal: '.',
    },
    isDisabled: true,
  },
};

export const WithCurrencyCode: Story = {
  args: {
    id: 'componentId6',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    minValue: 0,
    maxValue: 100000,
    currencyCode: 'CLP',
    currencyOptions: {
      symbol: '$',
      precision: 2,
      separator: ',',
      decimal: '.',
    },
  },
};
