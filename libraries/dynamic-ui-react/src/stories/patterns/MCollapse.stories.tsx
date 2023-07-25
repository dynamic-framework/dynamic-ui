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
  decorators: [
    (Story) => (
      <div style={{ width: '320px', height: '320px' }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <MCollapse {...args}>
      <div className="row d-flex flex-column gap-3 pt-3">
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
      </div>
    </MCollapse>
  ),
  args: {
    Component: (
      <p>Text</p>
    ),
    defaultCollapsed: false,
    hasSeparator: true,
  },
};

export const HeaderComponent: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '320px', height: '320px' }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <MCollapse {...args}>
      <div className="row d-flex flex-column gap-3 pt-3">
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
      </div>
    </MCollapse>
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
  decorators: [
    (Story) => (
      <div style={{ width: '320px', height: '320px' }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <MCollapse {...args}>
      <div className="row d-flex flex-column gap-3 pt-3">
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
      </div>
    </MCollapse>
  ),
  args: {
    Component: (
      <p>Text</p>
    ),
    defaultCollapsed: true,
    hasSeparator: true,
  },
};
