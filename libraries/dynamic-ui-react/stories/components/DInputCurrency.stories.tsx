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

The Bootstrap documentation provides details on the default [Input Form CSS Variables](https://getbootstrap.com/docs/5.3/forms/form-control/#css)
and so it does [Input Group CSS Variables](https://getbootstrap.com/docs/5.3/forms/input-group/#css)

| Variable                                  | Class         | Type            | Description                  |
|-------------------------------------------|---------------|-----------------|------------------------------|
| --${PREFIX_BS}label-color                 | :root         | css color unit  | Label color                  |
| --${PREFIX_BS}label-font-weight           | :root         | css font weight | Label font weight            |
| --${PREFIX_BS}label-font-size             | :root         | css length unit | Label font size              |
| --${PREFIX_BS}label-padding-x             | :root         | css length unit | Label horizontal padding     |
| --${PREFIX_BS}label-padding-y             | :root         | css length unit | Label vertical padding       |
| --${PREFIX_BS}input-border-color          | .input-group  | css color unit  | Input border color           |
| --${PREFIX_BS}input-border-width          | .input-group  | css length unit | Input border width           |
| --${PREFIX_BS}input-border-radius         | .input-group  | css length unit | Input border radius          |
| --${PREFIX_BS}input-focus-border-color    | .input-group  | css color unit  | Input focus border color     |
| --${PREFIX_BS}input-focus-box-shadow      | .input-group  | css shadow      | Input focus box shadow       |
| --${PREFIX_BS}input-disabled-bg           | .input-group  | css color unit  | Input disable background     |
| --${PREFIX_BS}input-disabled-color        | .input-group  | css color unit  | Input disable color          |
| --${PREFIX_BS}input-disabled-border-color | .input-group  | css color unit  | Input disable border color   |
| --${PREFIX_BS}form-text-padding           | .form-text    | css length unit | Hint padding                 |
| --${PREFIX_BS}form-text-gap               | .form-text    | css length unit | Space between hint elements  |
| --${PREFIX_BS}form-text-color             | .form-text    | css color unit  | Hint color                   |
| --${PREFIX_BS}form-control-text-align     | .form-control | css text align  | Input text align             |
| --${PREFIX_BS}input-currency-symbol-color | .input-group  | css color unit  | Color of the currency symbol |
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
      control: 'object',
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
    size: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      type: 'string',
      options: [undefined, 'sm', 'lg'],
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
    validIcon: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      type: 'string',
      options: [undefined, ...ICONS],
    },
    invalidIcon: {
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
