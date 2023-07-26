import { Meta, StoryObj } from '@storybook/react';

import type { ComponentProps } from 'react';

import { MQuickActionCheck } from '../../components';

const config: Meta<typeof MQuickActionCheck> = {
  title: 'Design System/Components/Quick Action Check',
  component: MQuickActionCheck,
  argTypes: {
    mId: {
      control: 'text',
      type: 'string',
    },
    name: {
      control: 'text',
      type: 'string',
    },
    value: {
      control: 'text',
      type: 'string',
    },
    line1: {
      control: 'text',
      type: 'string',
      description: 'The title',
    },
    line2: {
      control: 'text',
      type: 'string',
      description: 'The subtitle',
    },
    line3: {
      control: 'text',
      type: 'string',
      description: 'The text value',
    },
    isChecked: {
      control: 'boolean',
      type: 'boolean',
    },
    onMChange: {
      action: 'onMChange',
    },
  },
};

export default config;
type Story = StoryObj<typeof MQuickActionCheck>;

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
    name: 'name',
    line1: 'total',
    line2: '$ 7.432.450',
  },
};

export const Example: Story = {
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
  render: ({ mId, ...args }: ComponentProps<typeof MQuickActionCheck>) => (
    <>
      <MQuickActionCheck mId={`${mId}2`} {...args} />
      <MQuickActionCheck mId={`${mId}3`} {...args} />
      <MQuickActionCheck mId={`${mId}4`} {...args} />
    </>
  ),
  args: {
    mId: 'componentId',
    name: 'name',
    line1: 'total',
    line2: '$ 7.432.450',
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
    mId: 'componentId5',
    name: 'name',
    line1: 'total',
    line2: '$ 7.432.450',
    isChecked: true,
  },
};
