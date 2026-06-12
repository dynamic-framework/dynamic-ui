import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import type { Transition } from 'framer-motion';

import { DContextProvider, DSelect, useDPortalContext } from '../../src';
import type { PortalProps } from '../../src';
import DButton from '../../src/components/DButton';
import DModal from '../../src/components/DModal/DModal';
import { CONTEXT_PROVIDER_CONFIG_MATERIAL } from '../config/constants';

type TransitionPreset = { label: string; value: Transition };

const TRANSITION_PRESETS: TransitionPreset[] = [
  { label: 'Default', value: { ease: 'easeInOut', duration: 0.3 } },
  { label: 'Spring', value: { type: 'spring', stiffness: 300, damping: 20 } },
  { label: 'Slow', value: { ease: 'easeInOut', duration: 0.8 } },
  { label: 'Bouncy', value: { type: 'spring', stiffness: 400, damping: 20 } },
  { label: 'Fast', value: { ease: 'easeOut', duration: 0.15 } },
  { label: 'None', value: { ease: 'linear', duration: 0 } },
];

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
    transition?: Transition;
  };
};

function ConfirmModal({ name, payload }: PortalProps<ModalPayloads['confirm']>) {
  const { closePortal } = useDPortalContext();
  return (
    <DModal name={name} centered staticBackdrop={false} transition={payload.transition}>
      <DModal.Header onClose={closePortal} showCloseButton>
        <h5 className="fw-bold">Do you want to reject the offer?</h5>
      </DModal.Header>
      <DModal.Body className="py-3 px-5">
        <p className="m-0">Modal body</p>
        <small>{payload.description}</small>
        {payload.transition && (
          <pre>
            <code>
              {JSON.stringify(payload.transition, null, 2)}
            </code>
          </pre>
        )}
      </DModal.Body>
      <DModal.Footer>
        <DButton
          text="Cancel"
          color="secondary"
          variant="outline"
          onClick={() => closePortal()}
        />
        <DButton
          text="Ok"
          onClick={() => closePortal()}
        />
      </DModal.Footer>
    </DModal>
  );
}

function OpenConfirmModalButton() {
  const [selectedPreset, setSelectedPreset] = useState<TransitionPreset>(TRANSITION_PRESETS[0]);
  const { openPortal } = useDPortalContext<ModalPayloads>();
  return (
    <div className="d-flex flex-column gap-2 align-items-center">
      <DSelect<TransitionPreset>
        label="Transition Preset"
        options={TRANSITION_PRESETS}
        value={selectedPreset}
        onChange={(opt) => { if (opt) setSelectedPreset(opt); }}
      />
      <DButton
        text="Open Modal"
        onClick={() => openPortal(
          'confirm',
          {
            description: 'Payload passed via openPortal.',
            transition: selectedPreset.value,
          },
        )}
      />
      <div className="mt-4">
        <pre>
          <code>
            {JSON.stringify({ transition: selectedPreset.value }, null, 2)}
          </code>
        </pre>
      </div>
    </div>
  );
}

export const RealUsageWithOpenPortal: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Real usage pattern: `DModal` is registered in `DContextProvider.availablePortals` and opened imperatively via `openPortal`. '
          + 'This is the recommended approach — **not** rendering `<DModal>` directly as a conditional JSX element.',
      },
      source: {
        code: `
const springTransition: Transition = { type: 'spring', stiffness: 300, damping: 20 };

type ModalPayloads = {
  confirm: {
    description: string;
  };
};

function ConfirmModal({ name, payload }: PortalProps<ModalPayloads['confirm']>) {
  const { closePortal } = useDPortalContext();
  return (
    <DModal name={name} centered staticBackdrop={false} transition={springTransition}>
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
          onClick={() => closePortal()}
        />
        <DButton
          text="Ok"
          onClick={() => closePortal()}
        />
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
  decorators: [
    (Story) => (
      <div style={{ height: '400px' }} className="position-relative">
        <Story />
      </div>
    ),
  ],
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
        />
        <DButton text="ok" />
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
        />
        <DButton text="ok" />
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
        />
        <DButton text="ok" />
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
        />
        <DButton text="ok" />
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
        />
        <DButton text="ok" />
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
        />
        <DButton text="ok" />
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

          />
          <DButton text="ok" />
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
