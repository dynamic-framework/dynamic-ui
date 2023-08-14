/* eslint-disable no-console */
import { Meta, StoryObj } from '@storybook/react';
import { MList, MListItem } from '../../components';
import { THEMES } from '../constants';

const config: Meta<typeof MListItem> = {
  title: 'Design System/Components/List Item',
  component: MListItem,
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
    onMClick: {
      type: 'function',
    },
  },
};

export default config;
type Story = StoryObj<typeof MListItem>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: 'calc(375px - 1rem)' }} className="position-relative">
        <MList>
          <Story />
        </MList>
      </div>
    ),
  ],
  render: (args) => (
    <MListItem {...args}>
      <span className="d-block px-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </span>
    </MListItem>
  ),
  args: {
    onMClick: undefined,
  },
};

export const Active: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: 'calc(375px - 1rem)' }} className="position-relative">
        <MList>
          <Story />
        </MList>
      </div>
    ),
  ],
  render: (args) => (
    <MListItem {...args}>
      <span className="d-block px-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </span>
    </MListItem>
  ),
  args: {
    onMClick: undefined,
    isActive: true,
  },
};

export const Disabled: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: 'calc(375px - 1rem)' }} className="position-relative">
        <MList>
          <Story />
        </MList>
      </div>
    ),
  ],
  render: (args) => (
    <MListItem {...args}>
      <span className="d-block px-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </span>
    </MListItem>
  ),
  args: {
    onMClick: undefined,
    isDisabled: true,
  },
};

export const WithTheme: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: 'calc(375px - 1rem)' }} className="position-relative">
        <MList>
          <Story />
        </MList>
      </div>
    ),
  ],
  render: (args) => (
    <MListItem {...args}>
      <span className="d-block px-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </span>
    </MListItem>
  ),
  args: {
    onMClick: undefined,
    theme: 'secondary',
  },
};
