import { Meta, StoryObj } from '@storybook/react';

import { MCollapse } from '../../components';

const config: Meta<typeof MCollapse> = {
  title: 'React/Components/Collapse',
  component: MCollapse,
  argTypes: {
    Component: {
      options: ['Text', 'Custom'],
      mapping: {
        Text: 'Simple text',
        Custom: (
          <div className="d-flex gap-3">
            <h4 className="m-0 fw-bold">Custom component</h4>
          </div>
        ),
      },
    },
    defaultCollapsed: {
      control: 'boolean',
    },
    hasSeparator: {
      control: 'boolean',
    },
  },
};

export default config;
type Story = StoryObj<typeof MCollapse>;

export const Default: Story = {
  render: (args) => (
    <MCollapse {...args}>
      <div className="row d-flex flex-column gap-3">
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
      </div>
    </MCollapse>
  ),

  args: {
    Component: 'Text',
    defaultCollapsed: false,
    hasSeparator: true,
  },
};
