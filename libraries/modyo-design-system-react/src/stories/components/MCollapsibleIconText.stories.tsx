import { Meta, StoryObj } from '@storybook/react';

import { MCollapsibleIconText } from '../../components';

const config: Meta<typeof MCollapsibleIconText> = {
  title: 'React/Components/CollapsibleIconText',
  component: MCollapsibleIconText,
  argTypes: {
    title: {
      control: 'string',
    },
    icon: {
      control: 'string',
    },
    iconSize: {
      control: 'string',
    },
    iconTheme: {
      control: 'string',
    },
    iconFamilyClass: {
      control: 'string',
    },
    iconFamilyPrefix: {
      control: 'string',
    },
  },
};

export default config;
type Story = StoryObj<typeof MCollapsibleIconText>;

export const Default: Story = {
  render: (args) => (
    <MCollapsibleIconText {...args}>
      <div className="row d-flex flex-column gap-3">
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
      </div>
    </MCollapsibleIconText>
  ),

  args: {
    title: 'Credit cards',
    icon: 'credit-card-2-back',
    iconSize: '1.5rem',
    iconTheme: 'primary',
  },
};
