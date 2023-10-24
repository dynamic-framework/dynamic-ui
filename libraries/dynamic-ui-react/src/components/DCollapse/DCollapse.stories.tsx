import { Meta, StoryObj } from '@storybook/react';

import DCollapse from './DCollapse';
import DIcon from '../DIcon';

const config: Meta<typeof DCollapse> = {
  title: 'Design System/Patterns/Collapse',
  component: DCollapse,
  argTypes: {
    Component: {
      options: ['Text', 'Custom'],
      mapping: {
        Text: 'Simple text',
        Custom: (
          <div className="d-flex align-items-center gap-3">
            <DIcon icon="fire" hasCircle />
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
type Story = StoryObj<typeof DCollapse>;

export const HeaderText: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '320px', height: '320px' }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DCollapse {...args}>
      <div className="row d-flex flex-column gap-3 pt-3">
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
      </div>
    </DCollapse>
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
    <DCollapse {...args}>
      <div className="row d-flex flex-column gap-3 pt-3">
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
      </div>
    </DCollapse>
  ),
  args: {
    Component: (
      <div className="d-flex align-items-center gap-3">
        <DIcon icon="fire" hasCircle />
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
    <DCollapse {...args}>
      <div className="row d-flex flex-column gap-3 pt-3">
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
      </div>
    </DCollapse>
  ),
  args: {
    Component: (
      <p>Text</p>
    ),
    defaultCollapsed: true,
    hasSeparator: true,
  },
};
