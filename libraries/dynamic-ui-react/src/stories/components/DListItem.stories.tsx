/* eslint-disable no-console */
import { Meta, StoryObj } from '@storybook/react';

import { DList, DListItem } from '../../components';
import { THEMES } from '../constants';

const config: Meta<typeof DListItem> = {
  title: 'Design System/Components/List Item',
  component: DListItem,
  argTypes: {
    className: {
      type: 'string',
    },
    isActive: {
      type: 'boolean',
      control: 'boolean',
    },
    isDisabled: {
      type: 'boolean',
      control: 'boolean',
    },
    theme: {
      control: 'select',
      type: { name: 'string' },
      options: THEMES,
      table: { defaultValue: { summary: 'primary' } },
    },
    onEventClick: {
      action: 'onEventClick',
    },
  },
};

export default config;
type Story = StoryObj<typeof DListItem>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: 'calc(375px - 1rem)' }} className="position-relative">
        <DList>
          <Story />
        </DList>
      </div>
    ),
  ],
  render: (args) => (
    <DListItem {...args}>
      <span className="d-block px-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </span>
    </DListItem>
  ),
};

export const Active: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: 'calc(375px - 1rem)' }} className="position-relative">
        <DList>
          <Story />
        </DList>
      </div>
    ),
  ],
  render: (args) => (
    <DListItem {...args}>
      <span className="d-block px-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </span>
    </DListItem>
  ),
  args: {
    isActive: true,
  },
};

export const Disabled: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: 'calc(375px - 1rem)' }} className="position-relative">
        <DList>
          <Story />
        </DList>
      </div>
    ),
  ],
  render: (args) => (
    <DListItem {...args}>
      <span className="d-block px-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </span>
    </DListItem>
  ),
  args: {
    isDisabled: true,
  },
};

export const WithTheme: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: 'calc(375px - 1rem)' }} className="position-relative">
        <DList>
          <Story />
        </DList>
      </div>
    ),
  ],
  render: (args) => (
    <DListItem {...args}>
      <span className="d-block px-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </span>
    </DListItem>
  ),
  args: {
    theme: 'secondary',
  },
};
