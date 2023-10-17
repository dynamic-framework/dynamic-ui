import { Meta, StoryObj } from '@storybook/react';

import {
  DButton,
  DOffcanvas,
  DOffcanvasBody,
  DOffcanvasFooter,
  DOffcanvasHeader,
} from '../../components';

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
      <DOffcanvasHeader showCloseButton>
        <h5 className="fw-bold">Advanced filters</h5>
      </DOffcanvasHeader>
      <DOffcanvasBody>
        <p>Offcanvas body</p>
      </DOffcanvasBody>
      <DOffcanvasFooter>
        <DButton
          text="cancel"
          theme="secondary"
          variant="outline"
          className="d-grid"
          isPill
        />
        <DButton text="ok" className="d-grid" isPill />
      </DOffcanvasFooter>
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
      <DOffcanvasHeader showCloseButton>
        <h5 className="fw-bold">Advanced filters</h5>
      </DOffcanvasHeader>
      <DOffcanvasBody>
        <p>Offcanvas body</p>
      </DOffcanvasBody>
      <DOffcanvasFooter footerActionPlacement="start">
        <DButton
          text="cancel"
          theme="secondary"
          variant="outline"
          className="d-grid"
          isPill
        />
        <DButton text="ok" className="d-grid" isPill />
      </DOffcanvasFooter>
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
      <DOffcanvasHeader showCloseButton>
        <h5 className="fw-bold">Advanced filters</h5>
      </DOffcanvasHeader>
      <DOffcanvasBody>
        <p>Offcanvas body</p>
      </DOffcanvasBody>
      <DOffcanvasFooter footerActionPlacement="end">
        <DButton
          text="cancel"
          theme="secondary"
          variant="outline"
          className="d-grid"
          isPill
        />
        <DButton text="ok" className="d-grid" isPill />
      </DOffcanvasFooter>
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
      <DOffcanvasHeader showCloseButton />
      <DOffcanvasBody>
        <p>Offcanvas body</p>
      </DOffcanvasBody>
      <DOffcanvasFooter>
        <DButton
          text="cancel"
          theme="secondary"
          variant="outline"
          className="d-grid"
          isPill
        />
        <DButton text="ok" className="d-grid" isPill />
      </DOffcanvasFooter>
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
      <DOffcanvasHeader showCloseButton>
        <h5 className="fw-bold">Advanced filters</h5>
      </DOffcanvasHeader>
      <DOffcanvasBody>
        <p>Offcanvas body</p>
      </DOffcanvasBody>
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
      <DOffcanvasHeader showCloseButton />
      <DOffcanvasBody>
        <p>Offcanvas body</p>
      </DOffcanvasBody>
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
      <DOffcanvasHeader>
        <h5 className="fw-bold">Advanced filters</h5>
      </DOffcanvasHeader>
      <DOffcanvasBody>
        <p>Offcanvas body</p>
      </DOffcanvasBody>
      <DOffcanvasFooter>
        <DButton
          text="cancel"
          theme="secondary"
          variant="outline"
          className="d-grid"
          isPill
        />
        <DButton text="ok" className="d-grid" isPill />
      </DOffcanvasFooter>
    </DOffcanvas>
  ),
  args: {
    name: 'exampleOffcanvas',
    isStatic: false,
    isScrollable: false,
    openFrom: 'end',
  },
};
