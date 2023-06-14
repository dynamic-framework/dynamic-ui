import { Meta, StoryObj } from '@storybook/react';

import type { ComponentProps } from 'react';

import { MQuickActionSelect } from '../../components';

const config: Meta<typeof MQuickActionSelect> = {
  title: 'Design System/Components/Quick Action Select',
  component: MQuickActionSelect,
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
    isSelected: {
      control: 'boolean',
      type: 'boolean',
    },
    onMChange: {
      action: 'onMChange',
    },
  },
};

export default config;
type Story = StoryObj<typeof MQuickActionSelect>;

export const Default: Story = {
  render: ({ mId, ...args }: ComponentProps<typeof MQuickActionSelect>) => (
    <div
      style={{ width: '320px', height: '320px' }}
      className="d-flex flex-column align-items-stretch justify-content-center gap-3"
    >
      <MQuickActionSelect mId={`${mId}0`} {...args} />
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
  render: ({ mId, ...args }: ComponentProps<typeof MQuickActionSelect>) => (
    <div
      style={{ width: '320px', height: '320px' }}
      className="d-flex flex-column align-items-stretch justify-content-center gap-3"
    >
      <MQuickActionSelect mId={`${mId}1`} {...args} />
      <MQuickActionSelect mId={`${mId}2`} {...args} />
      <MQuickActionSelect mId={`${mId}3`} {...args} />
    </div>
  ),

  args: {
    mId: 'component',
    name: 'name',
    line1: 'total',
    line2: '$ 7.432.450',
  },
};

export const Selected: Story = {
  render: ({ mId, ...args }: ComponentProps<typeof MQuickActionSelect>) => (
    <div
      style={{ width: '320px', height: '320px' }}
      className="d-flex flex-column align-items-stretch justify-content-center gap-3"
    >
      <MQuickActionSelect mId={`${mId}4`} {...args} />
    </div>
  ),

  args: {
    mId: 'component',
    name: 'name',
    line1: 'total',
    line2: '$ 7.432.450',
    isSelected: true,
  },
};
