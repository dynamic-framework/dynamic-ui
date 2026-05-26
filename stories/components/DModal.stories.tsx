import { Meta, StoryObj } from '@storybook/react-vite';

import { DContextProvider, useDPortalContext } from '../../src';
import type { PortalProps } from '../../src';
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
      table: { category: 'Appearance' },
    },
    style: {
      control: 'object',
      table: { category: 'Appearance' },
    },
    name: {
      control: 'text',
      type: { name: 'string', required: true },
      table: { category: 'HTML Attributes' },
    },
    staticBackdrop: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Behavior' },
    },
    scrollable: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Behavior' },
    },
    centered: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Appearance' },
    },
    fullScreen: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Appearance' },
    },
    fullScreenFrom: {
      control: 'select',
      type: 'string',
      options: ['sm', 'md', 'lg', 'xl', 'xxl'],
      table: { category: 'Appearance' },
    },
    size: {
      control: 'radio',
      type: 'string',
      options: ['sm', 'lg', 'xl'],
      table: { category: 'Appearance' },
    },
  },
};

export default config;
type Story = StoryObj<typeof DModal>;

type ModalPayloads = {
  confirm: {
    description: string;
  };
};

function ConfirmModal({ payload }: PortalProps<ModalPayloads['confirm']>) {
  const { closePortal } = useDPortalContext();
  return (
    <DModal name="confirm" centered staticBackdrop={false}>
      <DModal.Header onClose={closePortal} showCloseButton>
        <h5 className="fw-bold">Do you want to reject the offer?</h5>
      </DModal.Header>
      <DModal.Body className="py-3 px-5">
        <p className="m-0">Modal body</p>
        <small>{payload.description}</small>
      </DModal.Body>
      <DModal.Footer>
        <DButton
          text="Cancel"
          color="secondary"
          variant="outline"
          className="d-grid"
          onClick={() => closePortal()}
        />
        <DButton text="Ok" className="d-grid" />
      </DModal.Footer>
    </DModal>
  );
}

function OpenConfirmModalButton() {
  const { openPortal } = useDPortalContext<ModalPayloads>();
  return (
    <div className="p-8">
      <DButton
        text="Open Modal"
        onClick={() => openPortal('confirm', { description: 'Payload passed via openPortal.' })}
      />
    </div>
  );
}

export const RealUsageWithOpenPortal: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Real usage pattern: `DModal` is registered in `DContextProvider.availablePortals` and opened imperatively via `openPortal`. '
          + 'This is the recommended approach — **not** rendering `<DModal>` directly as a conditional JSX element.',
      },
      source: {
        code: `
type ModalPayloads = {
  confirm: {
    description: string;
  };
};

function ConfirmModal({ payload }: PortalProps<ModalPayloads['confirm']>) {
  const { closePortal } = useDPortalContext();
  return (
    <DModal name="confirm" centered staticBackdrop={false}>
      <DModal.Header onClose={closePortal} showCloseButton>
        <h5 className="fw-bold">Do you want to reject the offer?</h5>
      </DModal.Header>
      <DModal.Body className="py-3 px-5">
        <p className="m-0">Modal body</p>
        <small>{payload.description}</small>
      </DModal.Body>
      <DModal.Footer>
        <DButton
          text="Cancel"
          color="secondary"
          variant="outline"
          className="d-grid"
          onClick={() => closePortal()}
        />
        <DButton text="Ok" className="d-grid" />
      </DModal.Footer>
    </DModal>
  );
}

function OpenConfirmModalButton() {
  const { openPortal } = useDPortalContext<ModalPayloads>();
  return (
    <DButton
      text="Open Modal"
      onClick={() => openPortal('confirm', { description: 'Payload passed via openPortal.' })}
    />
  );
}

function App() {
  return (
    <DContextProvider<ModalPayloads>
      portalName="dModalStoryPortal"
      availablePortals={{ confirm: ConfirmModal }}
    >
      <OpenConfirmModalButton />
    </DContextProvider>
  );
}
        `.trim(),
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: () => (
    <DContextProvider<ModalPayloads>
      portalName="dModalStoryPortal"
      availablePortals={{ confirm: ConfirmModal }}
    >
      <OpenConfirmModalButton />
    </DContextProvider>
  ),
};

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
        />
        <DButton text="ok" className="d-grid" />
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
        icon="XCircle"
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
        />
        <DButton text="ok" className="d-grid" />
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
        />
        <DButton text="ok" className="d-grid" />
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
        />
        <DButton text="ok" className="d-grid" />
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
        />
        <DButton text="ok" className="d-grid" />
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
        />
        <DButton text="ok" className="d-grid" />
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

/*
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

          />
          <DButton text="ok" className="d-grid" />
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
