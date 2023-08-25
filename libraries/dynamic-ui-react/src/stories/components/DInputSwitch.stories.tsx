import { Meta, StoryObj } from '@storybook/react';

import { DInputSwitch } from '../../components';

const config: Meta<typeof DInputSwitch> = {
  title: 'Design System/Components/Input Switch',
  component: DInputSwitch,
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
    isChecked: {
      control: 'boolean',
      type: 'boolean',
    },
    isReadonly: {
      control: 'boolean',
      type: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
      type: 'boolean',
    },
    onEventChange: {
      action: 'onEventChange',
    },
  },
};

export default config;
type Story = StoryObj<typeof DInputSwitch>;

export const WithoutLabel: Story = {
  args: {
    innerId: 'componentId1',
    isChecked: false,
    isDisabled: false,
  },
};

export const Default: Story = {
  args: {
    innerId: 'componentId2',
    label: 'Label',
    isChecked: false,
    isDisabled: false,
  },
};

export const Checked: Story = {
  args: {
    innerId: 'componentId3',
    label: 'Label',
    isChecked: true,
    isDisabled: false,
  },
};

export const Readonly: Story = {
  args: {
    innerId: 'componentId4',
    label: 'Label',
    isChecked: false,
    isReadonly: true,
  },
};

export const Disabled: Story = {
  args: {
    innerId: 'componentId5',
    label: 'Label',
    isChecked: false,
    isDisabled: true,
  },
};

export const CheckedDisabled: Story = {
  args: {
    innerId: 'componentId6',
    label: 'Label',
    isChecked: true,
    isDisabled: true,
  },
};
