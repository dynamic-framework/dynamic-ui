import { Meta, StoryObj } from '@storybook/react';

import { MTabs, MTabContent } from '../../components';

const config: Meta<typeof MTabs> = {
  title: 'Design System/Patterns/Tabs',
  component: MTabs,
  argTypes: {
    className: {
      type: 'string',
      control: 'string',
    },
    isVertical: {
      type: 'boolean',
      control: 'boolean',
      table: { defaultValue: { summary: false } },
    },
  },
};

export default config;
type Story = StoryObj<typeof MTabs>;

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
  render: (args) => (
    <MTabs {...args}>
      <MTabContent tab="tab1">Tab content for Tab 1</MTabContent>
      <MTabContent tab="tab2">Tab content for Tab 2</MTabContent>
    </MTabs>
  ),
  args: {
    defaultSelected: 'tab2',
    options: [
      { label: 'Tab 1', tab: 'tab1' },
      { label: 'Tab 2', tab: 'tab2' },
      { label: 'Tab w/o Content', tab: 'empty' },
    ],
    isVertical: false,
  },
};

export const Vertical: Story = {
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
  render: (args) => (
    <MTabs {...args}>
      <MTabContent tab="tab1">Tab content for Tab 1</MTabContent>
      <MTabContent tab="tab2">Tab content for Tab 2</MTabContent>
    </MTabs>
  ),
  args: {
    defaultSelected: 'tab2',
    options: [
      { label: 'Tab 1', tab: 'tab1' },
      { label: 'Tab 2', tab: 'tab2' },
      { label: 'Tab w/o Content', tab: 'empty' },
    ],
    isVertical: true,
  },
};
