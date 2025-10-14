import { Meta, StoryObj } from '@storybook/react-vite';

import { DContextProvider } from '../../src';
import DButton from '../../src/components/DButton';
import DModal from '../../src/components/DModal/DModal';
import { CONTEXT_PROVIDER_CONFIG_MATERIAL } from '../config/constants';

const config: Meta<typeof DModal> = {
  title: 'Design System/Components/Modal',
  component: DModal,
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
    centered: {
      control: 'boolean',
      type: 'boolean',
    },
    fullScreen: {
      control: 'boolean',
      type: 'boolean',
    },
    fullScreenFrom: {
      control: 'select',
      type: 'string',
      options: ['sm', 'md', 'lg', 'xl', 'xxl'],
    },
    size: {
      control: 'radio',
      type: 'string',
      options: ['sm', 'lg', 'xl'],
    },
  },
};

export default config;
type Story = StoryObj<typeof DModal>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '400px' }} className="position-relative">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DModal {...args}>
      <DModal.Header showCloseButton>
        <h5 className="fw-bold">Do you want to reject the offer?</h5>
      </DModal.Header>
      <DModal.Body>
        <p className="m-0">Modal body</p>
      </DModal.Body>
      <DModal.Footer>
        <DButton
          text="cancel"
          color="secondary"
          variant="outline"
          className="d-grid"
          pill
        />
        <DButton text="ok" className="d-grid" pill />
      </DModal.Footer>
    </DModal>
  ),
  args: {
    name: 'exampleModal',
    staticBackdrop: false,
    scrollable: false,
    centered: true,
    fullScreen: false,
    size: 'sm',
    className: 'd-block',
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
    <DModal {...args}>
      <DModal.Header
        icon="x-circle"
        showCloseButton
      >
        <h5 className="fw-bold">Do you want to reject the offer?</h5>
      </DModal.Header>
      <DModal.Body>
        <p className="m-0">Modal body</p>
      </DModal.Body>
      <DModal.Footer>
        <DButton
          text="cancel"
          color="secondary"
          variant="outline"
          className="d-grid"
          pill
        />
        <DButton text="ok" className="d-grid" pill />
      </DModal.Footer>
    </DModal>
  ),
  args: {
    name: 'exampleModal',
    staticBackdrop: false,
    scrollable: false,
    centered: true,
    fullScreen: false,
    size: 'sm',
    className: 'd-block',
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
    <DModal {...args}>
      <DModal.Header showCloseButton>
        <h5 className="fw-bold">Do you want to reject the offer?</h5>
      </DModal.Header>
      <DModal.Body>
        <p className="m-0">Modal body</p>
      </DModal.Body>
      <DModal.Footer actionPlacement="start">
        <DButton
          text="cancel"
          color="secondary"
          variant="outline"
          className="d-grid"
          pill
        />
        <DButton text="ok" className="d-grid" pill />
      </DModal.Footer>
    </DModal>
  ),
  args: {
    name: 'exampleModal',
    staticBackdrop: false,
    scrollable: false,
    centered: true,
    fullScreen: false,
    size: 'sm',
    className: 'd-block',
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
    <DModal {...args}>
      <DModal.Header showCloseButton>
        <h5 className="fw-bold">Do you want to reject the offer?</h5>
      </DModal.Header>
      <DModal.Body>
        <p className="m-0">Modal body</p>
      </DModal.Body>
      <DModal.Footer actionPlacement="end">
        <DButton
          text="cancel"
          color="secondary"
          variant="outline"
          className="d-grid"
          pill
        />
        <DButton text="ok" className="d-grid" pill />
      </DModal.Footer>
    </DModal>
  ),
  args: {
    name: 'exampleModal',
    staticBackdrop: false,
    scrollable: false,
    centered: true,
    fullScreen: false,
    size: 'sm',
    className: 'd-block',
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
    <DModal {...args}>
      <DModal.Body>
        <p className="m-0">Modal body</p>
      </DModal.Body>
      <DModal.Footer>
        <DButton
          text="cancel"
          color="secondary"
          variant="outline"
          className="d-grid"
          pill
        />
        <DButton text="ok" className="d-grid" pill />
      </DModal.Footer>
    </DModal>
  ),
  args: {
    name: 'exampleModal',
    staticBackdrop: false,
    scrollable: false,
    centered: true,
    fullScreen: false,
    size: 'sm',
    className: 'd-block',
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
    <DModal {...args}>
      <DModal.Header showCloseButton>
        <h5 className="fw-bold">Do you want to reject the offer?</h5>
      </DModal.Header>
      <DModal.Body>
        <p className="m-0">Modal body</p>
      </DModal.Body>
    </DModal>
  ),
  args: {
    name: 'exampleModal',
    staticBackdrop: false,
    scrollable: false,
    centered: true,
    fullScreen: false,
    size: 'sm',
    className: 'd-block',
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
    <DModal {...args}>
      <DModal.Header showCloseButton />
      <DModal.Body>
        <p className="m-0">Modal body</p>
      </DModal.Body>
    </DModal>
  ),
  args: {
    name: 'exampleModal',
    staticBackdrop: false,
    scrollable: false,
    centered: true,
    fullScreen: false,
    size: 'sm',
    className: 'd-block',
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
    <DModal {...args}>
      <DModal.Header>
        <h5 className="fw-bold">Do you want to reject the offer?</h5>
      </DModal.Header>
      <DModal.Body>
        <p className="m-0">Modal body</p>
      </DModal.Body>
      <DModal.Footer>
        <DButton
          text="cancel"
          color="secondary"
          variant="outline"
          className="d-grid"
          pill
        />
        <DButton text="ok" className="d-grid" pill />
      </DModal.Footer>
    </DModal>
  ),
  args: {
    name: 'exampleModal',
    staticBackdrop: false,
    scrollable: false,
    centered: true,
    fullScreen: false,
    size: 'sm',
    className: 'd-block',
  },
};

/**
 * To use material symbols or any other material symbols style icon suite you can
 * use a `DContextProvider` to achieve global configuration or use the same configuration
 * variables on the `DModal`, in this case, for the close icon on the
 * `DModal.Header` or `DModalHeader`.
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
      <DModal {...args}>
        <DModal.Header
          showCloseButton
        >
          <h5 className="fw-bold">Do you want to reject the offer?</h5>
        </DModal.Header>
        <DModal.Body>
          <p className="m-0">Modal body</p>
        </DModal.Body>
        <DModal.Footer>
          <DButton
            text="cancel"
            color="secondary"
            variant="outline"
            className="d-grid"
            pill
          />
          <DButton text="ok" className="d-grid" pill />
        </DModal.Footer>
      </DModal>
    </DContextProvider>
  ),
  args: {
    name: 'exampleModal',
    staticBackdrop: false,
    scrollable: false,
    centered: true,
    fullScreen: false,
    size: 'sm',
    className: 'd-block',
  },
};
