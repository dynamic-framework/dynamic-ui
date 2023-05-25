import { Meta, StoryObj } from '@storybook/react';

import { MCollapse, MIcon } from '../../components';

const config: Meta<typeof MCollapse> = {
  title: 'Design System/Patterns/Collapse',
  component: MCollapse,
  argTypes: {
    Component: {
      options: ['Text', 'Custom'],
      mapping: {
        Text: 'Simple text',
        Custom: (
          <div className="d-flex align-items-center gap-3">
            <MIcon icon="fire" hasCircle />
            <h1 className="h4 m-0">Custom component</h1>
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

export const HeaderText: Story = {
  render: (args) => (
    <div style={{ width: '320px', height: '320px' }}>
      <MCollapse {...args}>
        <div className="row d-flex flex-column gap-3 pt-3">
          <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        </div>
      </MCollapse>
    </div>
  ),

  args: {
    Component: 'Text',
    defaultCollapsed: false,
    hasSeparator: true,
  },
};

export const HeaderComponent: Story = {
  render: (args) => (
    <div style={{ width: '320px', height: '320px' }}>
      <MCollapse {...args}>
        <div className="row d-flex flex-column gap-3 pt-3">
          <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        </div>
      </MCollapse>
    </div>
  ),

  args: {
    Component: (
      <div className="d-flex align-items-center gap-3">
        <MIcon icon="fire" hasCircle />
        <h1 className="h4 m-0">Custom component</h1>
      </div>
    ),
    defaultCollapsed: false,
    hasSeparator: true,
  },
};

export const Collapsed: Story = {
  render: (args) => (
    <div style={{ width: '320px', height: '320px' }}>
      <MCollapse {...args}>
        <div className="row d-flex flex-column gap-3 pt-3">
          <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        </div>
      </MCollapse>
    </div>
  ),

  args: {
    Component: 'Text',
    defaultCollapsed: true,
    hasSeparator: true,
  },
};
