import { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';

import { DInputCurrency } from '../../components';
import { ICONS } from '../config/constants';
import { LiquidContextProvider } from '../../contexts';

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
      control: 'string',
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
type Story = StoryObj<typeof DInputCurrency>;

export const Default: Story = {
  decorators: [
    (Story) => {
      // eslint-disable-next-line global-require
      require('../config/liquidConfig');
      return <Story />;
    },
  ],
  render: (args: ComponentProps<typeof DInputCurrency>) => (
    <LiquidContextProvider>
      <DInputCurrency {...args} />
    </LiquidContextProvider>
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
  decorators: [
    (Story) => {
      // eslint-disable-next-line global-require
      require('../config/liquidConfig');
      return <Story />;
    },
  ],
  render: (args: ComponentProps<typeof DInputCurrency>) => (
    <LiquidContextProvider>
      <DInputCurrency {...args} />
    </LiquidContextProvider>
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
  decorators: [
    (Story) => {
      // eslint-disable-next-line global-require
      require('../config/liquidConfig');
      return <Story />;
    },
  ],
  render: (args: ComponentProps<typeof DInputCurrency>) => (
    <LiquidContextProvider>
      <DInputCurrency {...args} />
    </LiquidContextProvider>
  ),
  args: {
    id: 'componentId3',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    minValue: 0,
    maxValue: 100000,
    isInvalid: true,
  },
};

export const Confirm: Story = {
  decorators: [
    (Story) => {
      // eslint-disable-next-line global-require
      require('../config/liquidConfig');
      return <Story />;
    },
  ],
  render: (args: ComponentProps<typeof DInputCurrency>) => (
    <LiquidContextProvider>
      <DInputCurrency {...args} />
    </LiquidContextProvider>
  ),
  args: {
    id: 'componentId4',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    minValue: 0,
    maxValue: 100000,
    isValid: true,
  },
};

export const Disabled: Story = {
  decorators: [
    (Story) => {
      // eslint-disable-next-line global-require
      require('../config/liquidConfig');
      return <Story />;
    },
  ],
  render: (args: ComponentProps<typeof DInputCurrency>) => (
    <LiquidContextProvider>
      <DInputCurrency {...args} />
    </LiquidContextProvider>
  ),
  args: {
    id: 'componentId5',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    minValue: 0,
    maxValue: 100000,
    isDisabled: true,
  },
};

export const WithCurrencyCode: Story = {
  decorators: [
    (Story) => {
      // eslint-disable-next-line global-require
      require('../config/liquidConfig');
      return <Story />;
    },
  ],
  render: (args: ComponentProps<typeof DInputCurrency>) => (
    <LiquidContextProvider>
      <DInputCurrency {...args} />
    </LiquidContextProvider>
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
