import { Meta, StoryObj } from '@storybook/react';

import { MInput } from '../../components';
import { ICONS } from '../constants';

const config: Meta<typeof MInput> = {
  title: 'Design System/Components/Input',
  component: MInput,
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
      table: { defaultValue: { summary: 'question-circle' } },
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
    onMIconStartClick: {
      action: 'onIconStartClicked',
    },
    onMIconEndClick: {
      action: 'onIconStartClicked',
    },
    onMChange: {
      action: 'onMChange',
    },
  },
};

export default config;
type Story = StoryObj<typeof MInput>;

export const Default: Story = {
  args: {
    mId: 'componentId',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    type: 'text',
    value: undefined,
    iconStart: 'emoji-smile-upside-down',
    iconEnd: 'emoji-smile-upside-down',
    hint: 'Assistive text',
  },
};

export const Value: Story = {
  args: {
    mId: 'componentId',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    type: 'text',
    value: 'Value',
    iconStart: 'emoji-smile-upside-down',
    iconEnd: 'emoji-smile-upside-down',
    hint: 'Assistive text',
  },
};

export const Error: Story = {
  args: {
    mId: 'componentId',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    type: 'text',
    value: undefined,
    iconStart: 'emoji-smile-upside-down',
    iconEnd: undefined,
    hint: 'Assistive text',
    isInvalid: true,
  },
};

export const Confirm: Story = {
  args: {
    mId: 'componentId',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    type: 'text',
    value: undefined,
    iconStart: 'emoji-smile-upside-down',
    iconEnd: undefined,
    hint: 'Assistive text',
    isValid: true,
  },
};

export const Disabled: Story = {
  args: {
    mId: 'componentId',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    type: 'text',
    value: undefined,
    iconStart: 'emoji-smile-upside-down',
    iconEnd: 'emoji-smile-upside-down',
    hint: 'Assistive text',
    isDisabled: true,
  },
};

export const Text: Story = {
  args: {
    mId: 'componentId',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    type: 'text',
    value: undefined,
    iconStart: undefined,
    iconEnd: undefined,
  },
};
