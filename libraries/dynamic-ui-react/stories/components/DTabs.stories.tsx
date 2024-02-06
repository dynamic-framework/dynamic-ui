import { Meta, StoryObj } from '@storybook/react';

import DTabs from '../../src/components/DTabs';

const config: Meta<typeof DTabs> = {
  title: 'Design System/Patterns/Tabs',
  component: DTabs,
  argTypes: {
    className: {
      type: 'string',
      control: 'string',
    },
    vertical: {
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
      <DTabs.Tab tab="tab1">Tab content for Tab 1</DTabs.Tab>
      <DTabs.Tab tab="tab2">Tab content for Tab 2</DTabs.Tab>
    </DTabs>
  ),
  args: {
    defaultSelected: 'tab2',
    options: [
      { label: 'Tab 1', tab: 'tab1' },
      { label: 'Tab 2', tab: 'tab2' },
      { label: 'Tab w/o Content', tab: 'empty' },
    ],
    vertical: false,
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
      <DTabs.Tab tab="tab1">Tab content for Tab 1</DTabs.Tab>
      <DTabs.Tab tab="tab2">Tab content for Tab 2</DTabs.Tab>
    </DTabs>
  ),
  args: {
    defaultSelected: 'tab2',
    options: [
      { label: 'Tab 1', tab: 'tab1' },
      { label: 'Tab 2', tab: 'tab2' },
      { label: 'Tab w/o Content', tab: 'empty' },
    ],
    vertical: true,
  },
};
