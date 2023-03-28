import { StoryFn, Meta } from '@storybook/react';

import { MTabs, MTabContent } from '../../components';

const config: Meta<typeof MTabs> = {
  title: 'React/Components/Tabs',
  component: MTabs,
  argTypes: {
    defaultSelected: {
      control: {
        type: 'select',
      },
      options: ['tab1', 'tab2', 'empty'],
    },
    onChange: { action: 'changed' },
    variant: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, 'pills', 'group'],
    },
    className: {
      control: 'text',
    },
  },
};

export default config;

export const Default = {
  render: (args) => (
    <MTabs {...args}>
      <MTabContent tab='tab1'>Tab content for Tab 1</MTabContent>
      <MTabContent tab='tab2'>Tab content for Tab 2</MTabContent>
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
