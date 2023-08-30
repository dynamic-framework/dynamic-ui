import { Meta, StoryObj } from '@storybook/react';

import { DInputCounter } from '../../components';
import { ICONS } from '../constants';

const config: Meta<typeof DInputCounter> = {
  title: 'Design System/Components/Input Counter',
  component: DInputCounter,
  argTypes: {
    innerId: {
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
    onEventChange: {
      action: 'onEventChange',
    },
    onEventClick: {
      action: 'onEventClick',
    },
  },
};

export default config;
type Story = StoryObj<typeof DInputCounter>;

export const Default: Story = {
  args: {
    innerId: 'componentId1',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: 1,
    minValue: 0,
    maxValue: 20,
  },
};

export const Error: Story = {
  args: {
    innerId: 'componentId2',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: 21,
    minValue: 0,
    maxValue: 20,
    isInvalid: true,
  },
};

export const Confirm: Story = {
  args: {
    innerId: 'componentId3',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: 2,
    minValue: 0,
    maxValue: 20,
    isValid: true,
  },
};

export const Disabled: Story = {
  args: {
    innerId: 'componentId4',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: 3,
    minValue: 0,
    maxValue: 20,
    isDisabled: true,
  },
};
