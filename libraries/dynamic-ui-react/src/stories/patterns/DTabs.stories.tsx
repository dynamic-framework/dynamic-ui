import { Meta, StoryObj } from '@storybook/react';

import { DTabs, DTabContent } from '../../components';

const config: Meta<typeof DTabs> = {
  title: 'Design System/Patterns/Tabs',
  component: DTabs,
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
type Story = StoryObj<typeof DTabs>;

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
    <DTabs {...args}>
      <DTabContent tab="tab1">Tab content for Tab 1</DTabContent>
      <DTabContent tab="tab2">Tab content for Tab 2</DTabContent>
    </DTabs>
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
    <DTabs {...args}>
      <DTabContent tab="tab1">Tab content for Tab 1</DTabContent>
      <DTabContent tab="tab2">Tab content for Tab 2</DTabContent>
    </DTabs>
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
