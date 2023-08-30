import { Meta, StoryObj } from '@storybook/react';

import type { ComponentProps } from 'react';

import { DQuickActionSelect } from '../../components';

const config: Meta<typeof DQuickActionSelect> = {
  title: 'Design System/Components/Quick Action Select',
  component: DQuickActionSelect,
  argTypes: {
    innerId: {
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
    onEventChange: {
      action: 'onEventChange',
    },
  },
};

export default config;
type Story = StoryObj<typeof DQuickActionSelect>;

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
    innerId: 'componentId1',
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
  render: ({ innerId, ...args }: ComponentProps<typeof DQuickActionSelect>) => (
    <>
      <DQuickActionSelect innerId={`${innerId}2`} {...args} />
      <DQuickActionSelect innerId={`${innerId}3`} {...args} />
      <DQuickActionSelect innerId={`${innerId}4`} {...args} />
    </>
  ),
  args: {
    innerId: 'componentId',
    name: 'name',
    line1: 'total',
    line2: '$ 7.432.450',
  },
};

export const Selected: Story = {
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
    innerId: 'componentId5',
    name: 'name',
    line1: 'total',
    line2: '$ 7.432.450',
    isSelected: true,
  },
};
