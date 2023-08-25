import { Meta, StoryObj } from '@storybook/react';

import { DInputSearch } from '../../components';
import { ICONS } from '../constants';

const config: Meta<typeof DInputSearch> = {
  title: 'Design System/Components/Input Search',
  component: DInputSearch,
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
    placeholder: {
      control: 'text',
      type: 'string',
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
    onEventClick: {
      action: 'onEventClick',
    },
    onEventChange: {
      action: 'onEventChange',
    },
  },
};

export default config;
type Story = StoryObj<typeof DInputSearch>;

export const Default: Story = {
  args: {
    innerId: 'componentId1',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
  },
};

export const Value: Story = {
  args: {
    innerId: 'componentId2',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: 'Value',
  },
};

export const Error: Story = {
  args: {
    innerId: 'componentId3',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    isInvalid: true,
  },
};

export const Confirm: Story = {
  args: {
    innerId: 'componentId4',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    isValid: true,
  },
};

export const Disabled: Story = {
  args: {
    innerId: 'componentId5',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    isDisabled: true,
  },
};
