import { Meta, StoryObj } from '@storybook/react';

import DInputCounter from '../../src/components/DInputCounter/DInputCounter';
import { ICONS } from '../config/constants';

const config: Meta<typeof DInputCounter> = {
  title: 'Design System/Components/Input Counter',
  component: DInputCounter,
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
    iconStartAriaText: {
      control: 'text',
      type: 'string',
    },
    iconEndAriaText: {
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
type Story = StoryObj<typeof DInputCounter>;

export const Default: Story = {
  args: {
    id: 'componentId1',
    label: 'Label',
    labelIcon: undefined,
    minValue: 0,
    maxValue: 20,
    iconStartAriaText: 'decrease action',
    iconEndAriaText: 'increase action',
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
    iconStartAriaText: 'decrease action',
    iconEndAriaText: 'increase action',
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
    iconStartAriaText: 'decrease action',
    iconEndAriaText: 'increase action',
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
    iconStartAriaText: 'decrease action',
    iconEndAriaText: 'increase action',
  },
};
