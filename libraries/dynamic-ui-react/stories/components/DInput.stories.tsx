import { Meta, StoryObj } from '@storybook/react';

import DInput from '../../src/components/DInput/DInput';
import { ICONS } from '../config/constants';

const config: Meta<typeof DInput> = {
  title: 'Design System/Components/Input',
  component: DInput,
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
    onIconStartClick: {
      action: 'onIconStartClicked',
    },
    onIconEndClick: {
      action: 'onIconStartClicked',
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
  },
};

export default config;
type Story = StoryObj<typeof DInput>;

export const Default: Story = {
  args: {
    id: 'componentId1',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    type: 'text',
    value: '',
    iconStart: 'emoji-smile-upside-down',
    iconEnd: 'emoji-smile-upside-down',
    iconStartAriaLabel: 'start action',
    iconEndAriaLabel: 'end action',
    hint: 'Assistive text',
  },
};

export const Value: Story = {
  args: {
    id: 'componentId2',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    type: 'text',
    value: 'Value',
    iconStart: 'emoji-smile-upside-down',
    iconEnd: 'emoji-smile-upside-down',
    iconStartAriaLabel: 'start action',
    iconEndAriaLabel: 'end action',
    hint: 'Assistive text',
  },
};

export const Error: Story = {
  args: {
    id: 'componentId3',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    type: 'text',
    value: undefined,
    iconStart: 'emoji-smile-upside-down',
    iconStartAriaLabel: 'start action',
    iconEnd: undefined,
    hint: 'Assistive text',
    invalid: true,
  },
};

export const Confirm: Story = {
  args: {
    id: 'componentId4',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    type: 'text',
    value: undefined,
    iconStart: 'emoji-smile-upside-down',
    iconStartAriaLabel: 'start action',
    iconEnd: undefined,
    hint: 'Assistive text',
    valid: true,
  },
};

export const Disabled: Story = {
  args: {
    id: 'componentId5',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    type: 'text',
    value: undefined,
    iconStart: 'emoji-smile-upside-down',
    iconEnd: 'emoji-smile-upside-down',
    iconStartAriaLabel: 'start action',
    iconEndAriaLabel: 'end action',
    hint: 'Assistive text',
    disabled: true,
  },
};

export const Text: Story = {
  args: {
    id: 'componentId6',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    type: 'text',
    value: undefined,
    iconStart: undefined,
    iconEnd: undefined,
  },
};
