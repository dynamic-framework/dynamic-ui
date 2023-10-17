import { Meta, StoryObj } from '@storybook/react';

import type { ComponentProps } from 'react';

import { DQuickActionCheck } from '../../components';

const config: Meta<typeof DQuickActionCheck> = {
  title: 'Design System/Components/Quick Action Check',
  component: DQuickActionCheck,
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
    line3: {
      control: 'text',
      type: 'string',
      description: 'The text value',
    },
    isChecked: {
      control: 'boolean',
      type: 'boolean',
    },
    onChange: {
      action: 'onChange',
    },
  },
};

export default config;
type Story = StoryObj<typeof DQuickActionCheck>;

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
  render: ({ id, ...args }: ComponentProps<typeof DQuickActionCheck>) => (
    <>
      <DQuickActionCheck id={`${id}2`} {...args} />
      <DQuickActionCheck id={`${id}3`} {...args} />
      <DQuickActionCheck id={`${id}4`} {...args} />
    </>
  ),
  args: {
    id: 'componentId',
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
    id: 'componentId5',
    name: 'name',
    line1: 'total',
    line2: '$ 7.432.450',
    isChecked: true,
  },
};
