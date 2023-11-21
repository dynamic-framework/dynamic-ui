/* eslint-disable no-console */
import { Meta, StoryObj } from '@storybook/react';

import DListItem from '../../src/components/DList/components/DListItem';
import DList from '../../src/components/DList/DList';

import { THEMES } from '../config/constants';

const config: Meta<typeof DListItem> = {
  title: 'Design System/Components/List Item',
  component: DListItem,
  argTypes: {
    className: {
      type: 'string',
    },
    active: {
      type: 'boolean',
      control: 'boolean',
    },
    disabled: {
      type: 'boolean',
      control: 'boolean',
    },
    theme: {
      control: 'select',
      type: { name: 'string' },
      options: THEMES,
      table: { defaultValue: { summary: 'primary' } },
    },
    onClick: {
      action: 'onClick',
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
    active: true,
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
    disabled: true,
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
