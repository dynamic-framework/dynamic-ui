import { Meta, StoryObj } from '@storybook/react';

import type { ComponentProps } from 'react';

import { DQuickActionSelect } from '../../components';

const config: Meta<typeof DQuickActionSelect> = {
  title: 'Design System/Components/Quick Action Select',
  component: DQuickActionSelect,
  argTypes: {
    id: {
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
    className: {
      control: 'text',
      type: 'string',
    },
    isSelected: {
      control: 'boolean',
      type: 'boolean',
    },
    onChange: {
      action: 'onChange',
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
    id: 'componentId1',
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
  render: ({ id, ...args }: ComponentProps<typeof DQuickActionSelect>) => (
    <>
      <DQuickActionSelect id={`${id}2`} {...args} />
      <DQuickActionSelect id={`${id}3`} {...args} />
      <DQuickActionSelect id={`${id}4`} {...args} />
    </>
  ),
  args: {
    id: 'componentId',
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
    id: 'componentId5',
    name: 'name',
    line1: 'total',
    line2: '$ 7.432.450',
    isSelected: true,
  },
};
