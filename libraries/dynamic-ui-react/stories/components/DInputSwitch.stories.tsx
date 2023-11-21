import { Meta, StoryObj } from '@storybook/react';

import DInputSwitch from '../../src/components/DInputSwitch/DInputSwitch';

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
    checked: {
      control: 'boolean',
      type: 'boolean',
    },
    readonly: {
      control: 'boolean',
      type: 'boolean',
    },
    disabled: {
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
    checked: false,
    disabled: false,
    ariaLabel: 'Label',
  },
};

export const Default: Story = {
  args: {
    id: 'componentId2',
    label: 'Label',
    checked: false,
    disabled: false,
  },
};

export const Checked: Story = {
  args: {
    id: 'componentId3',
    label: 'Label',
    checked: true,
    disabled: false,
  },
};

export const Readonly: Story = {
  args: {
    id: 'componentId4',
    label: 'Label',
    checked: false,
    readonly: true,
  },
};

export const Disabled: Story = {
  args: {
    id: 'componentId5',
    label: 'Label',
    checked: false,
    disabled: true,
  },
};

export const CheckedDisabled: Story = {
  args: {
    id: 'componentId6',
    label: 'Label',
    checked: true,
    disabled: true,
  },
};
