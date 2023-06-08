import { Meta, StoryObj } from '@storybook/react';

import { MTabs, MTabContent } from '../../components';

const config: Meta<typeof MTabs> = {
  title: 'Design System/Patterns/Tabs',
  component: MTabs,
};

export default config;
type Story = StoryObj<typeof MTabs>;

export const Default: Story = {
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
  },
};