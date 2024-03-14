import { Meta, StoryObj } from '@storybook/react';

import DInputMask from '../../src/components/DInputMask';
import { ICONS } from '../config/constants';
import { PREFIX_BS } from '../../src/components/config';

const config: Meta<typeof DInputMask> = {
  title: 'Design System/Components/Input Mask',
  component: DInputMask,
  parameters: {
    docs: {
      description: {
        component: `
Component composition with \`d-input\` to make a mask input component.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [@react-input/mask](https://www.npmjs.com/package/@react-input/mask)

## CSS Variables
| Variable                                         | Type            | Description                   |
|--------------------------------------------------|-----------------|-------------------------------|
| --${PREFIX_BS}label-color                        | css color unit  | Label color                   |
| --${PREFIX_BS}label-font-weight                  | css font weight | Label font weight             |
| --${PREFIX_BS}label-font-size                    | css length unit | Label font size               |
| --${PREFIX_BS}label-padding-x                    | css length unit | Label horizontal padding      |
| --${PREFIX_BS}label-padding-y                    | css length unit | Label vertical padding        |
| --${PREFIX_BS}input-border-color                 | css color unit  | Input border color            |
| --${PREFIX_BS}input-border-width                 | css length unit | Input border width            |
| --${PREFIX_BS}input-border-radius                | css length unit | Input border radius           |
| --${PREFIX_BS}input-focus-border-color           | css color unit  | Input focus border color      |
| --${PREFIX_BS}input-focus-box-shadow             | css shadow      | Input focus box shadow        |
| --${PREFIX_BS}input-disabled-bg                  | css color unit  | Input disable background      |
| --${PREFIX_BS}input-disabled-color               | css color unit  | Input disable color           |
| --${PREFIX_BS}input-disabled-border-color        | css color unit  | Input disable border color    |
| --${PREFIX_BS}form-text-padding                  | css length unit | Hint padding                  |
| --${PREFIX_BS}form-text-gap                      | css length unit | Space between hint elements   |
| --${PREFIX_BS}form-text-color                    | css color unit  | Hint color                    |
| --${PREFIX_BS}form-control-text-align            | css text align  | Input text align              |
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
      description: 'Name of the input',
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
    type: {
      control: 'select',
      options: ['text', 'email', 'number'],
      type: 'string',
      description: 'The type of the input',
    },
    value: {
      control: 'text',
      type: 'string',
      description: 'The value of the input',
    },
    inputMode: {
      control: 'text',
      type: 'string',
      description: 'Input mode',
    },
    pattern: {
      control: 'text',
      type: 'string',
      description: 'Pattern to validate',
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
    iconStartAriaLabel: {
      control: 'text',
      type: 'string',
    },
    iconEndAriaLabel: {
      control: 'text',
      type: 'string',
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
    onIconStartClick: {
      action: 'onIconStartClicked',
    },
    onIconEndClick: {
      action: 'onIconStartClicked',
    },
    mask: {
      control: 'text',
      type: 'string',
      description: 'example: (+56)_ ____ ____',
    },
    replacement: {
      control: 'object',
      description: 'example: { _: /\\d/ }',
    },
    showMask: {
      control: 'boolean',
      type: 'boolean',
    },
    separate: {
      control: 'boolean',
      type: 'boolean',
    },
    onChange: {
      action: 'onChange',
    },
    onBlur: {
      action: 'onBlur',
    },
    onFocus: {
      action: 'onFocus',
    },
    onWheel: {
      action: 'onWheel',
    },
    onMask: {
      action: 'onMask',
    },
    modify: {
      action: 'modify',
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DInputMask>;

export const Default: Story = {
  args: {
    id: 'componentId1',
    label: 'Label',
    labelIcon: undefined,
    type: 'text',
    iconStart: 'phone',
    iconStartAriaLabel: 'start action',
    iconEndAriaLabel: 'end action',
    hint: 'Write your phone number',
    mask: '(+56)_ ____ ____',
    replacement: { _: /\d/ },
    showMask: true,
  },
};
