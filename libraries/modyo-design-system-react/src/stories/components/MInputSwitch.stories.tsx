import { Meta, StoryObj } from '@storybook/react';

import { MInputSwitch } from '../../components';

const config: Meta<typeof MInputSwitch> = {
  title: 'Design System/Components/Switch',
  component: MInputSwitch,
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
    isChecked: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
  },
};

export default config;
type Story = StoryObj<typeof MInputSwitch>;

export const WithoutLabel: Story = {
  args: {
    mId: 'componentId',
    isChecked: false,
    isDisabled: false,
  },
};

export const Default: Story = {
  args: {
    mId: 'componentId',
    label: 'Label',
    isChecked: false,
    isDisabled: false,
  },
};

export const Checked: Story = {
  args: {
    mId: 'componentId',
    label: 'Label',
    isChecked: true,
    isDisabled: false,
  },
};

export const Disabled: Story = {
  args: {
    mId: 'componentId',
    label: 'Label',
    isChecked: false,
    isDisabled: true,
  },
};
