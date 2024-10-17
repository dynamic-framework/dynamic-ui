import { Meta, StoryObj } from '@storybook/react';

import DQuickActionSwitch from '../../src/components/DQuickActionSwitch/DQuickActionSwitch';

const config: Meta<typeof DQuickActionSwitch> = {
  title: 'Design System/Components/Quick Action Switch',
  component: DQuickActionSwitch,
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
    className: {
      control: 'text',
      type: 'string',
    },
    style: {
      control: 'object',
    },
    hint: {
      control: 'text',
      type: 'string',
    },
    checked: {
      control: 'boolean',
      type: 'boolean',
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
    },
    onClick: {
      action: 'onClick',
    },
  },
};

export default config;
type Story = StoryObj<typeof DQuickActionSwitch>;

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
    id: 'componentId1',
    label: 'Program',
    hint: 'This payment is applied with the periodicity and date that you define',
    checked: false,
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
    id: 'componentId2',
    label: 'Program',
    hint: 'This payment is applied with the periodicity and date that you define',
    checked: true,
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
    id: 'componentId3',
    label: 'Program',
    hint: 'This payment is applied with the periodicity and date that you define',
    checked: false,
    disabled: true,
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
    id: 'componentId4',
    label: 'Program',
    hint: 'This payment is applied with the periodicity and date that you define',
    checked: true,
    disabled: true,
  },
};
