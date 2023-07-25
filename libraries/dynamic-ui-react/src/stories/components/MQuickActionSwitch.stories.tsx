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
    isDisabled: {
      control: 'boolean',
      type: 'boolean',
    },
  },
};

export default config;
type Story = StoryObj<typeof MQuickActionSwitch>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div
        style={{ width: '320px', height: '320px' }}
        className="d-flex flex-column align-items-stretch justify-content-center gap-3"
      >
        <Story />
      </div>
    ),
  ],
  args: {
    mId: 'componentId1',
    label: 'Program',
    hint: 'This payment is applied with the periodicity and date that you define',
    isChecked: false,
  },
};

export const Checked: Story = {
  decorators: [
    (Story) => (
      <div
        style={{ width: '320px', height: '320px' }}
        className="d-flex flex-column align-items-stretch justify-content-center gap-3"
      >
        <Story />
      </div>
    ),
  ],
  args: {
    mId: 'componentId2',
    label: 'Program',
    hint: 'This payment is applied with the periodicity and date that you define',
    isChecked: true,
  },
};

export const DefaultDisabled: Story = {
  decorators: [
    (Story) => (
      <div
        style={{ width: '320px', height: '320px' }}
        className="d-flex flex-column align-items-stretch justify-content-center gap-3"
      >
        <Story />
      </div>
    ),
  ],
  args: {
    mId: 'componentId3',
    label: 'Program',
    hint: 'This payment is applied with the periodicity and date that you define',
    isChecked: false,
    isDisabled: true,
  },
};

export const CheckedDisabled: Story = {
  decorators: [
    (Story) => (
      <div
        style={{ width: '320px', height: '320px' }}
        className="d-flex flex-column align-items-stretch justify-content-center gap-3"
      >
        <Story />
      </div>
    ),
  ],
  args: {
    mId: 'componentId4',
    label: 'Program',
    hint: 'This payment is applied with the periodicity and date that you define',
    isChecked: true,
    isDisabled: true,
  },
};
