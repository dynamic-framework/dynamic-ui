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
  render: ({ mId, ...args }: ComponentProps<typeof MQuickActionCheck>) => (
    <div
      style={{ width: '320px', height: '320px' }}
      className="d-flex flex-column align-items-stretch justify-content-center gap-3"
    >
      <MQuickActionCheck mId={`${mId}0`} {...args} />
    </div>
  ),

  args: {
    mId: 'component',
    name: 'name',
    line1: 'total',
    line2: '$ 7.432.450',
  },
};

export const Example: Story = {
  render: ({ mId, ...args }: ComponentProps<typeof MQuickActionCheck>) => (
    <div
      style={{ width: '320px', height: '320px' }}
      className="d-flex flex-column align-items-stretch justify-content-center gap-3"
    >
      <MQuickActionCheck mId={`${mId}1`} {...args} />
      <MQuickActionCheck mId={`${mId}2`} {...args} />
      <MQuickActionCheck mId={`${mId}3`} {...args} />
    </div>
  ),

  args: {
    mId: 'component',
    name: 'name',
    line1: 'total',
    line2: '$ 7.432.450',
  },
};

export const Checked: Story = {
  render: ({ mId, ...args }: ComponentProps<typeof MQuickActionCheck>) => (
    <div
      style={{ width: '320px', height: '320px' }}
      className="d-flex flex-column align-items-stretch justify-content-center gap-3"
    >
      <MQuickActionCheck mId={`${mId}4`} {...args} />
    </div>
  ),

  args: {
    mId: 'component',
    name: 'name',
    line1: 'total',
    line2: '$ 7.432.450',
    isChecked: true,
  },
};
