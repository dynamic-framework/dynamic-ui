import { Meta, StoryObj } from '@storybook/react';

import { MButton, MOffcanvas } from '../../components';

const config: Meta<typeof MOffcanvas> = {
  title: 'Design System/Patterns/Offcanvas',
  component: MOffcanvas,
  argTypes: {
    name: {
      control: 'text',
      type: { name: 'string', required: true },
    },
    isStatic: {
      control: 'boolean',
      type: 'boolean',
    },
    isScrollable: {
      control: 'boolean',
      type: 'boolean',
    },
    showCloseButton: {
      control: 'boolean',
      type: 'boolean',
    },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        inline: false,
        height: '400px',
      },
    },
  },
};

export default config;
type Story = StoryObj<typeof MOffcanvas>;

export const Default: Story = {
  render: (args) => (
    <MOffcanvas {...args}>
      <div slot="header">
        <h5 className="fw-bold">Advanced filters</h5>
      </div>
      <div slot="body">
        <p>Offcanvas body</p>
      </div>
      <div slot="footer">
        <MButton
          text="cancel"
          theme="secondary"
          variant="outline"
          className="d-grid"
          isPill
        />
        <MButton text="ok" className="d-grid" isPill />
      </div>
    </MOffcanvas>
  ),

  args: {
    name: 'exampleOffcanvas',
    isStatic: false,
    isScrollable: false,
    showCloseButton: true,
    openFrom: 'end',
    isInline: true,
  },
};

export const WithoutActions: Story = {
  render: (args) => (
    <MOffcanvas {...args}>
      <div slot="header">
        <h5 className="fw-bold">Advanced filters</h5>
      </div>
      <div slot="body">
        <p>Offcanvas body</p>
      </div>
    </MOffcanvas>
  ),

  args: {
    name: 'exampleOffcanvas',
    isStatic: false,
    isScrollable: false,
    showCloseButton: true,
    openFrom: 'end',
    footerActionPlacement: 'end',
    isInline: true,
  },
};

export const OnlyBody: Story = {
  render: (args) => (
    <MOffcanvas {...args}>
      <div slot="body">
        <p>Offcanvas body</p>
      </div>
    </MOffcanvas>
  ),

  args: {
    name: 'exampleOffcanvas',
    isStatic: false,
    isScrollable: false,
    showCloseButton: true,
    openFrom: 'end',
    footerActionPlacement: 'end',
    isInline: true,
  },
};

export const WithoutCancelX: Story = {
  render: (args) => (
    <MOffcanvas {...args}>
      <div slot="header">
        <h5 className="fw-bold">Advanced filters</h5>
      </div>
      <div slot="body">
        <p>Offcanvas body</p>
      </div>
      <div slot="footer">
        <MButton
          text="cancel"
          theme="secondary"
          variant="outline"
          className="d-grid"
          isPill
        />
        <MButton text="ok" className="d-grid" isPill />
      </div>
    </MOffcanvas>
  ),

  args: {
    name: 'exampleOffcanvas',
    isStatic: false,
    isScrollable: false,
    showCloseButton: false,
    openFrom: 'end',
    footerActionPlacement: 'end',
    isInline: true,
  },
};
