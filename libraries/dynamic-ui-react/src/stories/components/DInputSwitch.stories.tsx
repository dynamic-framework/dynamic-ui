import { Meta, StoryObj } from '@storybook/react';

import { DInputSwitch } from '../../components';

const config: Meta<typeof DInputSwitch> = {
  title: 'Design System/Components/Input Switch',
  component: DInputSwitch,
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
    onChange: {
      action: 'onChange',
    },
  },
};

export default config;
type Story = StoryObj<typeof DInputSwitch>;

export const WithoutLabel: Story = {
  args: {
    id: 'componentId1',
    isChecked: false,
    isDisabled: false,
  },
};

export const Default: Story = {
  args: {
    id: 'componentId2',
    label: 'Label',
    isChecked: false,
    isDisabled: false,
  },
};

export const Checked: Story = {
  args: {
    id: 'componentId3',
    label: 'Label',
    isChecked: true,
    isDisabled: false,
  },
};

export const Readonly: Story = {
  args: {
    id: 'componentId4',
    label: 'Label',
    isChecked: false,
    isReadonly: true,
  },
};

export const Disabled: Story = {
  args: {
    id: 'componentId5',
    label: 'Label',
    isChecked: false,
    isDisabled: true,
  },
};

export const CheckedDisabled: Story = {
  args: {
    id: 'componentId6',
    label: 'Label',
    isChecked: true,
    isDisabled: true,
  },
};
