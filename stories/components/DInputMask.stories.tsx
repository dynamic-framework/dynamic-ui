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
      table: { category: 'HTML Attributes' },
    },
    name: {
      control: 'text',
      type: 'string',
      description: 'Name of the input',
      table: { category: 'HTML Attributes' },
    },
    className: {
      control: 'text',
      type: 'string',
      table: { category: 'Appearance' },
    },
    style: {
      control: 'object',
      table: { category: 'Appearance' },
    },
    label: {
      control: 'text',
      type: 'string',
      table: { category: 'Content' },
    },
    placeholder: {
      control: 'text',
      type: 'string',
      table: { category: 'Content' },
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'number'],
      type: 'string',
      description: 'The type of the input',
      table: { category: 'HTML Attributes' },
    },
    value: {
      control: 'text',
      type: 'string',
      description: 'The value of the input',
      table: { category: 'Content' },
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
      table: { category: 'Appearance' },
    },
    inputMode: {
      control: 'text',
      type: 'string',
      description: 'Input mode',
      table: { category: 'HTML Attributes' },
    },
    pattern: {
      control: 'text',
      type: 'string',
      description: 'Pattern to validate',
      table: { category: 'HTML Attributes' },
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
    readOnly: {
      control: 'boolean',
      type: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
    loading: {
      control: 'boolean',
      type: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
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
      table: { category: 'Icon' },
    },
    iconStartAriaLabel: {
      control: 'text',
      type: 'string',
      table: { category: 'Content' },
    },
    iconEndAriaLabel: {
      control: 'text',
      type: 'string',
      table: { category: 'Content' },
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
      table: { category: 'Icon' },
    },
    hint: {
      control: 'text',
      type: 'string',
      description: 'Hint to display, also used to display validity feedback',
      table: { category: 'Content' },
    },
    invalid: {
      control: 'boolean',
      type: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
    valid: {
      control: 'boolean',
      type: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
    floatingLabel: {
      control: 'boolean',
      type: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Appearance',
      },
    },
    onIconStartClick: {
      action: 'onIconStartClicked',
      table: { category: 'Events' },
    },
    onIconEndClick: {
      action: 'onIconStartClicked',
      table: { category: 'Events' },
    },
    mask: {
      control: 'text',
      type: 'string',
      description: 'example: (+56)_ ____ ____',
      table: { category: 'Behavior' },
    },
    replacement: {
      control: 'object',
      description: 'example: { _: /\\d/ }',
      table: { category: 'Behavior' },
    },
    showMask: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Behavior' },
    },
    separate: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Behavior' },
    },
    onChange: {
      action: 'onChange',
      table: { category: 'Events' },
    },
    onBlur: {
      action: 'onBlur',
      table: { category: 'Events' },
    },
    onFocus: {
      action: 'onFocus',
      table: { category: 'Events' },
    },
    onWheel: {
      action: 'onWheel',
      table: { category: 'Events' },
    },
    modify: {
      action: 'modify',
      table: { category: 'Behavior' },
    },
  },
};

export default config;
type Story = StoryObj<typeof DInputMask>;

export const Default: Story = {
  args: {
    label: 'Label',
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
