import { Meta, StoryObj } from '@storybook/react-vite';

import DInputMask from '../../src/components/DInputMask';
import { ICONS } from '../config/constants';

const config: Meta<typeof DInputMask> = {
  title: 'Design System/Components/Input Mask',
  component: DInputMask,
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
      table: { defaultValue: { summary: 'false' } },
    },
    readOnly: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    loading: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
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
    hint: {
      control: 'text',
      type: 'string',
      description: 'Hint to display, also used to display validity feedback',
    },
    invalid: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    valid: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    floatingLabel: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
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
};

export default config;
type Story = StoryObj<typeof DInputMask>;

export const Default: Story = {
  args: {
    id: 'componentId1',
    label: 'Label',
    labelIcon: undefined,
    type: 'text',
    iconStart: 'Phone',
    iconStartAriaLabel: 'start action',
    iconEndAriaLabel: 'end action',
    hint: 'Write your phone number',
    mask: '(+56)_ ____ ____',
    replacement: { _: /\d/ },
    showMask: true,
  },
};

export const Invalid: Story = {
  args: {
    id: 'componentId2',
    label: 'Label',
    labelIcon: undefined,
    type: 'text',
    iconStart: 'Phone',
    iconStartAriaLabel: 'start action',
    iconEndAriaLabel: 'end action',
    hint: 'Write your phone number',
    mask: '(+56)_ ____ ____',
    replacement: { _: /\d/ },
    showMask: true,
    invalid: true,
  },
};

export const Valid: Story = {
  args: {
    id: 'componentId3',
    label: 'Label',
    labelIcon: undefined,
    type: 'text',
    iconStart: 'Phone',
    iconStartAriaLabel: 'start action',
    iconEndAriaLabel: 'end action',
    hint: 'Write your phone number',
    mask: '(+56)_ ____ ____',
    replacement: { _: /\d/ },
    showMask: true,
    valid: true,
  },
};
