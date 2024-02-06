import { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';

import DInputCurrency from '../../src/components/DInputCurrency/DInputCurrency';
import { ICONS } from '../config/constants';
import { DContextProvider } from '../../src';
import { PREFIX_BS } from '../../src/components/config';

const config: Meta<typeof DInputCurrency> = {
  title: 'Design System/Components/Input Currency',
  component: DInputCurrency,
  parameters: {
    docs: {
      description: {
        component: `
Component composition with \`d-input-currency-base\` to make a currency input component that use
a \`DContextProvider\` to get the currency config.

## CSS Variables
| Variable                                        | Type            | Description                   |
|-------------------------------------------------|-----------------|-------------------------------|
| --${PREFIX_BS}input-control-gap                 | css length unit | Space between layout elements |
| --${PREFIX_BS}input-label-color                 | css color unit  | Label color                   |
| --${PREFIX_BS}input-label-font-weight           | css font weight | Label font weight             |
| --${PREFIX_BS}input-label-font-size             | css length unit | Label font size               |
| --${PREFIX_BS}input-label-padding-x             | css length unit | Label horizontal padding      |
| --${PREFIX_BS}input-label-padding-y             | css length unit | Label vertical padding        |
| --${PREFIX_BS}input-label-gap                   | css length unit | Space between label elements  |
| --${PREFIX_BS}input-group-border-color          | css color unit  | Input border color            |
| --${PREFIX_BS}input-group-border-width          | css length unit | Input border width            |
| --${PREFIX_BS}input-group-border-radius         | css length unit | Input border radius           |
| --${PREFIX_BS}input-group-hover-border-color    | css color unit  | Input hover border color      |
| --${PREFIX_BS}input-group-focus-border-color    | css color unit  | Input focus border color      |
| --${PREFIX_BS}input-group-focus-box-shadow      | css shadow      | Input focus box shadow        |
| --${PREFIX_BS}input-form-text-padding           | css length unit | Hint padding                  |
| --${PREFIX_BS}input-form-text-gap               | css length unit | Space between hint elements   |
| --${PREFIX_BS}input-form-text-color             | css color unit  | Hint color                    |
| --${PREFIX_BS}input-group-disabled-bg           | css color unit  | Input disable background      |
| --${PREFIX_BS}input-group-disabled-color        | css color unit  | Input disable color           |
| --${PREFIX_BS}input-group-disabled-border-color | css color unit  | Input disable border color    |
| --${PREFIX_BS}input-form-control-text-align     | css text align  | Input text align              |
| --${PREFIX_BS}input-currency-symbol-color       | css color unit  | Color of the currency symbol  |
        `,
      },
    },
  },
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
    style: {
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
    iconStartAriaLabel: {
      control: 'text',
      type: 'string',
    },
    iconEndAriaLabel: {
      control: 'text',
      type: 'string',
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
    floatingLabel: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: false } },
    },
    onChange: {
      action: 'onChange',
    },
  },
  tags: ['autodocs'],
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

export const Floating: Story = {
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
    floatingLabel: true,
  },
};
