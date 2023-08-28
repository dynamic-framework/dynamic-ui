import { Meta, StoryObj } from '@storybook/react';

import { DButton, DOffcanvas } from '../../components';

const config: Meta<typeof DOffcanvas> = {
  title: 'Design System/Patterns/Offcanvas',
  component: DOffcanvas,
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
  },
};

export default config;
type Story = StoryObj<typeof DOffcanvas>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '400px' }} className="position-relative">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DOffcanvas {...args}>
      <div slot="header">
        <h5 className="fw-bold">Advanced filters</h5>
      </div>
      <div slot="body">
        <p>Offcanvas body</p>
      </div>
      <div slot="footer">
        <DButton
          text="cancel"
          theme="secondary"
          variant="outline"
          className="d-grid"
          isPill
        />
        <DButton text="ok" className="d-grid" isPill />
      </div>
    </DOffcanvas>
  ),
  args: {
    name: 'exampleOffcanvas',
    isStatic: false,
    isScrollable: false,
    showCloseButton: true,
    openFrom: 'end',
  },
};

export const ActionsPlacementStart: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '400px' }} className="position-relative">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DOffcanvas {...args}>
      <div slot="header">
        <h5 className="fw-bold">Advanced filters</h5>
      </div>
      <div slot="body">
        <p>Offcanvas body</p>
      </div>
      <div slot="footer">
        <DButton
          text="cancel"
          theme="secondary"
          variant="outline"
          className="d-grid"
          isPill
        />
        <DButton text="ok" className="d-grid" isPill />
      </div>
    </DOffcanvas>
  ),
  args: {
    name: 'exampleOffcanvas',
    isStatic: false,
    isScrollable: false,
    showCloseButton: true,
    openFrom: 'end',
    footerActionPlacement: 'start',
  },
};

export const ActionsPlacementEnd: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '400px' }} className="position-relative">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DOffcanvas {...args}>
      <div slot="header">
        <h5 className="fw-bold">Advanced filters</h5>
      </div>
      <div slot="body">
        <p>Offcanvas body</p>
      </div>
      <div slot="footer">
        <DButton
          text="cancel"
          theme="secondary"
          variant="outline"
          className="d-grid"
          isPill
        />
        <DButton text="ok" className="d-grid" isPill />
      </div>
    </DOffcanvas>
  ),
  args: {
    name: 'exampleOffcanvas',
    isStatic: false,
    isScrollable: false,
    showCloseButton: true,
    openFrom: 'end',
    footerActionPlacement: 'end',
  },
};

export const WithoutHeader: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '400px' }} className="position-relative">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DOffcanvas {...args}>
      <div slot="body">
        <p>Offcanvas body</p>
      </div>
      <div slot="footer">
        <DButton
          text="cancel"
          theme="secondary"
          variant="outline"
          className="d-grid"
          isPill
        />
        <DButton text="ok" className="d-grid" isPill />
      </div>
    </DOffcanvas>
  ),
  args: {
    name: 'exampleOffcanvas',
    isStatic: false,
    isScrollable: false,
    showCloseButton: true,
    openFrom: 'end',
  },
};

export const WithoutActions: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '400px' }} className="position-relative">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DOffcanvas {...args}>
      <div slot="header">
        <h5 className="fw-bold">Advanced filters</h5>
      </div>
      <div slot="body">
        <p>Offcanvas body</p>
      </div>
    </DOffcanvas>
  ),
  args: {
    name: 'exampleOffcanvas',
    isStatic: false,
    isScrollable: false,
    showCloseButton: true,
    openFrom: 'end',
    footerActionPlacement: 'end',
  },
};

export const OnlyBody: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '400px' }} className="position-relative">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DOffcanvas {...args}>
      <div slot="body">
        <p>Offcanvas body</p>
      </div>
    </DOffcanvas>
  ),
  args: {
    name: 'exampleOffcanvas',
    isStatic: false,
    isScrollable: false,
    showCloseButton: true,
    openFrom: 'end',
    footerActionPlacement: 'end',
  },
};

export const WithoutCancelX: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '400px' }} className="position-relative">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DOffcanvas {...args}>
      <div slot="header">
        <h5 className="fw-bold">Advanced filters</h5>
      </div>
      <div slot="body">
        <p>Offcanvas body</p>
      </div>
      <div slot="footer">
        <DButton
          text="cancel"
          theme="secondary"
          variant="outline"
          className="d-grid"
          isPill
        />
        <DButton text="ok" className="d-grid" isPill />
      </div>
    </DOffcanvas>
  ),
  args: {
    name: 'exampleOffcanvas',
    isStatic: false,
    isScrollable: false,
    showCloseButton: false,
    openFrom: 'end',
    footerActionPlacement: 'end',
  },
};