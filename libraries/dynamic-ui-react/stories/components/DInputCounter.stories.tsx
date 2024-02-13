import { Meta, StoryObj } from '@storybook/react';

import type { ComponentProps } from 'react';

import DInputCounter from '../../src/components/DInputCounter/DInputCounter';
import { ICONS } from '../config/constants';
import { PREFIX_BS } from '../../src/components/config';
import { DContextProvider } from '../../src';

const config: Meta<typeof DInputCounter> = {
  title: 'Design System/Components/Input Counter',
  component: DInputCounter,
  parameters: {
    docs: {
      description: {
        component: `
Component composition with \`d-input\` to make a counter input component.

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
    floatingLabel: {
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
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DInputCounter>;

export const Default: Story = {
  args: {
    id: 'componentId1',
    label: 'Label',
    labelIcon: undefined,
    minValue: 0,
    maxValue: 20,
    iconStartAriaLabel: 'decrease action',
    iconEndAriaLabel: 'increase action',
  },
};

export const Error: Story = {
  args: {
    id: 'componentId2',
    label: 'Label',
    labelIcon: undefined,
    value: 21,
    minValue: 0,
    maxValue: 20,
    invalid: true,
    iconStartAriaLabel: 'decrease action',
    iconEndAriaLabel: 'increase action',
  },
};

export const Confirm: Story = {
  args: {
    id: 'componentId3',
    label: 'Label',
    labelIcon: undefined,
    value: 2,
    minValue: 0,
    maxValue: 20,
    valid: true,
    iconStartAriaLabel: 'decrease action',
    iconEndAriaLabel: 'increase action',
  },
};

export const Disabled: Story = {
  args: {
    id: 'componentId4',
    label: 'Label',
    labelIcon: undefined,
    value: 3,
    minValue: 0,
    maxValue: 20,
    disabled: true,
    iconStartAriaLabel: 'decrease action',
    iconEndAriaLabel: 'increase action',
  },
};

export const Floating: Story = {
  args: {
    id: 'componentId5',
    label: 'Label',
    labelIcon: undefined,
    value: 3,
    minValue: 0,
    maxValue: 20,
    floatingLabel: true,
    iconStartAriaLabel: 'decrease action',
    iconEndAriaLabel: 'increase action',
  },
};

export const MaterialIcon: Story = {
  render: (args: ComponentProps<typeof DInputCounter>) => (
    <DContextProvider
      icon={{
        materialStyle: true,
        familyPrefix: '',
        familyClass: 'material-symbols-outlined',
      }}
      iconMap={{
        xIcon: 'close_small',
        xLgIcon: 'close',
        chevronDownIcon: 'expand_more',
        alert: {
          warning: 'warning',
          danger: 'error',
          success: 'done',
          info: 'info',
          dark: 'info',
          light: 'info',
          primary: 'info',
          secondary: 'info',
        },
        input: {
          invalid: 'priority_high',
          valid: 'done',
          search: 'search',
          show: 'visibility',
          hide: 'visibility_off',
          increase: 'add_box',
          decrease: 'indeterminate_check_box',
        },
      }}
    >
      <DInputCounter
        {...args}
      />
    </DContextProvider>
  ),
  args: {
    id: 'componentId6',
    label: 'Label',
    labelIcon: undefined,
    value: 3,
    minValue: 0,
    maxValue: 20,
    iconStartAriaLabel: 'decrease action',
    iconEndAriaLabel: 'increase action',
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
};
