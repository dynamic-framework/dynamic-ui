import { Meta, StoryObj } from '@storybook/react';

import { MInputSwitch } from '../../components';

const config: Meta<typeof MInputSwitch> = {
  title: 'Design System/Components/Input Switch',
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
      type: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
      type: 'boolean',
    },
  },
};

export default config;
type Story = StoryObj<typeof MInputSwitch>;

export const WithoutLabel: Story = {
  args: {
    mId: 'componentId1',
    isChecked: false,
    isDisabled: false,
  },
};

export const Default: Story = {
  args: {
    mId: 'componentId2',
    label: 'Label',
    isChecked: false,
    isDisabled: false,
  },
};

export const Checked: Story = {
  args: {
    mId: 'componentId3',
    label: 'Label',
    isChecked: true,
    isDisabled: false,
  },
};

export const Disabled: Story = {
  args: {
    mId: 'componentId4',
    label: 'Label',
    isChecked: false,
    isDisabled: true,
  },
};


export const CheckedDisabled: Story = {
  args: {
    mId: 'componentId4',
    label: 'Label',
    isChecked: true,
    isDisabled: true,
  },
};
