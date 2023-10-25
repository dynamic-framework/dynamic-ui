import { Meta, StoryObj } from '@storybook/react';

import DOffcanvas from '../../src/components/DOffcanvas/DOffcanvas';
import DButton from '../../src/components/DButton';

const config: Meta<typeof DOffcanvas> = {
  title: 'Design System/Patterns/Offcanvas',
  component: DOffcanvas,
  argTypes: {
    name: {
      control: 'text',
      type: { name: 'string', required: true },
    },
    className: {
      control: 'text',
      type: { name: 'string' },
    },
    isStatic: {
      control: 'boolean',
      type: 'boolean',
    },
    isScrollable: {
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
      <DOffcanvas.Header showCloseButton>
        <h5 className="fw-bold">Advanced filters</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <p>Offcanvas body</p>
      </DOffcanvas.Body>
      <DOffcanvas.Footer>
        <DButton
          text="cancel"
          theme="secondary"
          variant="outline"
          className="d-grid"
          isPill
        />
        <DButton text="ok" className="d-grid" isPill />
      </DOffcanvas.Footer>
    </DOffcanvas>
  ),
  args: {
    name: 'exampleOffcanvas',
    isStatic: false,
    isScrollable: false,
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
      <DOffcanvas.Header showCloseButton>
        <h5 className="fw-bold">Advanced filters</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <p>Offcanvas body</p>
      </DOffcanvas.Body>
      <DOffcanvas.Footer footerActionPlacement="start">
        <DButton
          text="cancel"
          theme="secondary"
          variant="outline"
          className="d-grid"
          isPill
        />
        <DButton text="ok" className="d-grid" isPill />
      </DOffcanvas.Footer>
    </DOffcanvas>
  ),
  args: {
    name: 'exampleOffcanvas',
    isStatic: false,
    isScrollable: false,
    openFrom: 'end',
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
      <DOffcanvas.Header showCloseButton>
        <h5 className="fw-bold">Advanced filters</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <p>Offcanvas body</p>
      </DOffcanvas.Body>
      <DOffcanvas.Footer footerActionPlacement="end">
        <DButton
          text="cancel"
          theme="secondary"
          variant="outline"
          className="d-grid"
          isPill
        />
        <DButton text="ok" className="d-grid" isPill />
      </DOffcanvas.Footer>
    </DOffcanvas>
  ),
  args: {
    name: 'exampleOffcanvas',
    isStatic: false,
    isScrollable: false,
    openFrom: 'end',
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
      <DOffcanvas.Header showCloseButton />
      <DOffcanvas.Body>
        <p>Offcanvas body</p>
      </DOffcanvas.Body>
      <DOffcanvas.Footer>
        <DButton
          text="cancel"
          theme="secondary"
          variant="outline"
          className="d-grid"
          isPill
        />
        <DButton text="ok" className="d-grid" isPill />
      </DOffcanvas.Footer>
    </DOffcanvas>
  ),
  args: {
    name: 'exampleOffcanvas',
    isStatic: false,
    isScrollable: false,
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
      <DOffcanvas.Header showCloseButton>
        <h5 className="fw-bold">Advanced filters</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <p>Offcanvas body</p>
      </DOffcanvas.Body>
    </DOffcanvas>
  ),
  args: {
    name: 'exampleOffcanvas',
    isStatic: false,
    isScrollable: false,
    openFrom: 'end',
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
      <DOffcanvas.Header showCloseButton />
      <DOffcanvas.Body>
        <p>Offcanvas body</p>
      </DOffcanvas.Body>
    </DOffcanvas>
  ),
  args: {
    name: 'exampleOffcanvas',
    isStatic: false,
    isScrollable: false,
    openFrom: 'end',
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
      <DOffcanvas.Header>
        <h5 className="fw-bold">Advanced filters</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <p>Offcanvas body</p>
      </DOffcanvas.Body>
      <DOffcanvas.Footer>
        <DButton
          text="cancel"
          theme="secondary"
          variant="outline"
          className="d-grid"
          isPill
        />
        <DButton text="ok" className="d-grid" isPill />
      </DOffcanvas.Footer>
    </DOffcanvas>
  ),
  args: {
    name: 'exampleOffcanvas',
    isStatic: false,
    isScrollable: false,
    openFrom: 'end',
  },
};
