import { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';

import { MInputCurrency } from '../../components';
import { ICONS } from '../constants';
import { LiquidContextProvider } from '../../contexts';

const config: Meta<typeof MInputCurrency> = {
  title: 'Design System/Components/Input Currency',
  component: MInputCurrency,
  argTypes: {
    mId: {
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
      action: 'onMChange',
    },
  },
};

export default config;
type Story = StoryObj<typeof MInputCurrency>;

export const Default: Story = {
  render: (args: ComponentProps<typeof MInputCurrency>) => {
    // eslint-disable-next-line global-require
    require('../config/liquidConfig');
    return (
      <LiquidContextProvider>
        <MInputCurrency {...args} />
      </LiquidContextProvider>
    );
  },
  args: {
    mId: 'componentId',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    minValue: 0,
    maxValue: 100000,
  },
};

export const Value: Story = {
  render: (args: ComponentProps<typeof MInputCurrency>) => {
    // eslint-disable-next-line global-require
    require('../config/liquidConfig');
    return (
      <LiquidContextProvider>
        <MInputCurrency {...args} />
      </LiquidContextProvider>
    );
  },
  args: {
    mId: 'componentId',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: 1000,
    minValue: 0,
    maxValue: 100000,
  },
};

export const Error: Story = {
  render: (args: ComponentProps<typeof MInputCurrency>) => {
    // eslint-disable-next-line global-require
    require('../config/liquidConfig');
    return (
      <LiquidContextProvider>
        <MInputCurrency {...args} />
      </LiquidContextProvider>
    );
  },
  args: {
    mId: 'componentId',
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
  render: (args: ComponentProps<typeof MInputCurrency>) => {
    // eslint-disable-next-line global-require
    require('../config/liquidConfig');
    return (
      <LiquidContextProvider>
        <MInputCurrency {...args} />
      </LiquidContextProvider>
    );
  },
  args: {
    mId: 'componentId',
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
  render: (args: ComponentProps<typeof MInputCurrency>) => {
    // eslint-disable-next-line global-require
    require('../config/liquidConfig');
    return (
      <LiquidContextProvider>
        <MInputCurrency {...args} />
      </LiquidContextProvider>
    );
  },
  args: {
    mId: 'componentId',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    minValue: 0,
    maxValue: 100000,
    isDisabled: true,
  },
};
