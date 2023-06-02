import { Meta, StoryObj } from '@storybook/react';

import { MQuickActionSwitch } from '../../components';

const config: Meta<typeof MQuickActionSwitch> = {
  title: 'Design System/Components/Quick Action Switch',
  component: MQuickActionSwitch,
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
    hint: {
      control: 'text',
      type: 'string',
    },
    isChecked: {
      control: 'boolean',
      type: 'boolean',
    },
  },
};

export default config;
type Story = StoryObj<typeof MQuickActionSwitch>;

export const Default: Story = {
  args: {
    mId: 'componentId2',
    label: 'Program',
    hint: 'This payment is applied with the periodicity and date that you define',
    isChecked: false,
  },
};
