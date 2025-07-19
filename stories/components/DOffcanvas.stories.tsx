import { Meta, StoryObj } from '@storybook/react-vite';

import { DContextProvider } from '../../src';
import DOffcanvas from '../../src/components/DOffcanvas/DOffcanvas';
import DButton from '../../src/components/DButton';
import { CONTEXT_PROVIDER_CONFIG_MATERIAL } from '../config/constants';

const config: Meta<typeof DOffcanvas> = {
  title: 'Design System/Components/Offcanvas',
  component: DOffcanvas,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    className: {
      control: 'text',
      type: 'string',
    },
    style: {
      control: 'object',
    },
    name: {
      control: 'text',
      type: { name: 'string', required: true },
    },
    staticBackdrop: {
      control: 'boolean',
      type: 'boolean',
    },
    scrollable: {
      control: 'boolean',
      type: 'boolean',
    },
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
          pill
        />
        <DButton text="ok" className="d-grid" pill />
      </DOffcanvas.Footer>
    </DOffcanvas>
  ),
  args: {
    name: 'exampleOffcanvas',
    staticBackdrop: false,
    scrollable: false,
    openFrom: 'end',
  },
};

export const CloseIcon: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '400px' }} className="position-relative">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DOffcanvas {...args}>
      <DOffcanvas.Header
        icon="x-circle"
        showCloseButton
      >
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
          pill
        />
        <DButton text="ok" className="d-grid" pill />
      </DOffcanvas.Footer>
    </DOffcanvas>
  ),
  args: {
    name: 'exampleOffcanvas',
    staticBackdrop: false,
    scrollable: false,
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
      <DOffcanvas.Footer actionPlacement="start">
        <DButton
          text="cancel"
          theme="secondary"
          variant="outline"
          className="d-grid"
          pill
        />
        <DButton text="ok" className="d-grid" pill />
      </DOffcanvas.Footer>
    </DOffcanvas>
  ),
  args: {
    name: 'exampleOffcanvas',
    staticBackdrop: false,
    scrollable: false,
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
      <DOffcanvas.Footer actionPlacement="end">
        <DButton
          text="cancel"
          theme="secondary"
          variant="outline"
          className="d-grid"
          pill
        />
        <DButton text="ok" className="d-grid" pill />
      </DOffcanvas.Footer>
    </DOffcanvas>
  ),
  args: {
    name: 'exampleOffcanvas',
    staticBackdrop: false,
    scrollable: false,
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
          pill
        />
        <DButton text="ok" className="d-grid" pill />
      </DOffcanvas.Footer>
    </DOffcanvas>
  ),
  args: {
    name: 'exampleOffcanvas',
    staticBackdrop: false,
    scrollable: false,
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
    staticBackdrop: false,
    scrollable: false,
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
    staticBackdrop: false,
    scrollable: false,
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
          pill
        />
        <DButton text="ok" className="d-grid" pill />
      </DOffcanvas.Footer>
    </DOffcanvas>
  ),
  args: {
    name: 'exampleOffcanvas',
    staticBackdrop: false,
    scrollable: false,
    openFrom: 'end',
  },
};

/**
 * To use material symbols or any other material symbols style icon suite you can
 * use a `DContextProvider` to achieve global configuration or use the same configuration
 * variables on the `DOffcanvas`, in this case, for the close icon on the
 * `DOffcanvas.Header` or `DOffcanvasHeader`.
 */
export const MaterialStyleCloseIcon: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '400px' }} className="position-relative">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DContextProvider
      {...CONTEXT_PROVIDER_CONFIG_MATERIAL}
    >
      <DOffcanvas {...args}>
        <DOffcanvas.Header
          showCloseButton
        >
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
            pill
          />
          <DButton text="ok" className="d-grid" pill />
        </DOffcanvas.Footer>
      </DOffcanvas>
    </DContextProvider>
  ),
  args: {
    name: 'exampleOffcanvas',
    staticBackdrop: false,
    scrollable: false,
    openFrom: 'end',
  },
};
