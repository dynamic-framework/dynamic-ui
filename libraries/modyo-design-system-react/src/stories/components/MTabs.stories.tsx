import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MApp, MTabs, MTabContent } from '../../components';

export default {
  title: 'React/Tabs',
  component: MTabs,
  decorators: [
    (Story) => (
      <MApp>
        <Story />
      </MApp>
    ),
  ],
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
} as ComponentMeta<typeof MTabs>;

const Template: ComponentStory<typeof MTabs> = (args) => (
  <MTabs
    {...args}
  >
    <MTabContent tab="tab1">
      Tab content for Tab 1
    </MTabContent>
    <MTabContent tab="tab2">
      Tab content for Tab 2
    </MTabContent>
  </MTabs>
);

export const Default = Template.bind({});
Default.args = {
  defaultSelected: 'tab2',
  options: [
    { label: 'Tab 1', tab: 'tab1' },
    { label: 'Tab 2', tab: 'tab2' },
    { label: 'Tab w/o Content', tab: 'empty' },
  ],
};
