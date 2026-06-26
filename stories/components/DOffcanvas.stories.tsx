import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import type { Transition } from 'framer-motion';

import { DContextProvider, DSelect, useDPortalContext } from '../../src';
import type { PortalProps } from '../../src';
import DButton from '../../src/components/DButton';
import DOffcanvas from '../../src/components/DOffcanvas/DOffcanvas';
import { CONTEXT_PROVIDER_CONFIG_MATERIAL } from '../config/constants';

type TransitionPreset = { label: string; value: Transition };

const TRANSITION_PRESETS: TransitionPreset[] = [
  { label: 'Default', value: { ease: 'easeInOut', duration: 0.3 } },
  { label: 'Spring', value: { type: 'spring', stiffness: 300, damping: 20 } },
  { label: 'Slow', value: { ease: 'easeInOut', duration: 0.8 } },
  { label: 'Bouncy', value: { type: 'spring', stiffness: 400, damping: 10 } },
  { label: 'Fast', value: { ease: 'easeOut', duration: 0.15 } },
  { label: 'None', value: { ease: 'linear', duration: 0 } },
];

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
  },
};

export default config;
type Story = StoryObj<typeof DOffcanvas>;

type OffcanvasPayloads = {
  filters: {
    description: string;
    transition?: Transition;
  };
};

function FiltersOffcanvas({ name, payload }: PortalProps<OffcanvasPayloads['filters']>) {
  const { closePortal } = useDPortalContext();
  return (
    <DOffcanvas
      name={name}
      staticBackdrop={false}
      scrollable={false}
      openFrom="end"
      transition={payload.transition}
    >
      <DOffcanvas.Header onClose={closePortal} showCloseButton>
        <h5 className="fw-bold">Advanced filters</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <p>Offcanvas body</p>
        <small>{payload.description}</small>
      </DOffcanvas.Body>
      <DOffcanvas.Footer>
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
      </DOffcanvas.Footer>
    </DOffcanvas>
  );
}

function OpenFiltersOffcanvasButton() {
  const [selectedPreset, setSelectedPreset] = useState<TransitionPreset>(TRANSITION_PRESETS[0]);
  const { openPortal } = useDPortalContext<OffcanvasPayloads>();
  return (
    <div className="d-flex flex-column gap-2 align-items-center">
      <DSelect<TransitionPreset>
        label="Transition Preset"
        options={TRANSITION_PRESETS}
        value={selectedPreset}
        onChange={(opt) => { if (opt) setSelectedPreset(opt); }}
      />
      <DButton
        text="Open Offcanvas"
        onClick={() => openPortal(
          'filters',
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

type ResponsiveOffcanvasPayloads = {
  responsive: Record<string, never>;
};

function ResponsiveOffcanvas({ name }: PortalProps<ResponsiveOffcanvasPayloads['responsive']>) {
  const { closePortal } = useDPortalContext();

  return (
    <DOffcanvas
      name={name}
      staticBackdrop={false}
      scrollable={false}
      openFrom={{ xs: 'bottom', lg: 'end' }}
    >
      <DOffcanvas.Header onClose={closePortal} showCloseButton>
        <h5 className="fw-bold">Responsive offcanvas</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <p>
          On mobile this panel slides in from the
          <strong>bottom</strong>
          . On desktop (lg+) it slides in from the
          <strong>right</strong>
          .
        </p>
      </DOffcanvas.Body>
      <DOffcanvas.Footer>
        <DButton text="cancel" color="secondary" variant="outline" onClick={() => closePortal()} />
        <DButton text="ok" onClick={() => closePortal()} />
      </DOffcanvas.Footer>
    </DOffcanvas>
  );
}

function OpenResponsiveOffcanvasButton() {
  const { openPortal } = useDPortalContext<ResponsiveOffcanvasPayloads>();

  return (
    <DButton
      text="Open responsive offcanvas"
      onClick={() => openPortal('responsive', {})}
    />
  );
}

export const RealUsageWithOpenPortal: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Real usage pattern: `DOffcanvas` is registered in `DContextProvider.availablePortals` and opened imperatively via `openPortal`. '
          + 'This is the recommended approach — **not** rendering `<DOffcanvas>` directly as a conditional JSX element.',
      },
      source: {
        code: `
const springTransition: Transition = { type: 'spring', stiffness: 300, damping: 20 };

type OffcanvasPayloads = {
  filters: {
    description: string;
  };
};

function FiltersOffcanvas({ name, payload }: PortalProps<OffcanvasPayloads['filters']>) {
  const { closePortal } = useDPortalContext();
  return (
    <DOffcanvas name={name} staticBackdrop={false} scrollable={false} openFrom="end" transition={springTransition}>
      <DOffcanvas.Header onClose={closePortal} showCloseButton>
        <h5 className="fw-bold">Advanced filters</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <p>Offcanvas body</p>
        <small>{payload.description}</small>
      </DOffcanvas.Body>
      <DOffcanvas.Footer>
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
      </DOffcanvas.Footer>
    </DOffcanvas>
  );
}

function OpenFiltersOffcanvasButton() {
  const { openPortal } = useDPortalContext<OffcanvasPayloads>();
  return (
    <DButton
      text="Open Offcanvas"
      onClick={() => openPortal('filters', { description: 'Payload passed via openPortal.' })}
    />
  );
}

function App() {
  return (
    <DContextProvider<OffcanvasPayloads>
      portalName="dOffcanvasStoryPortal"
      availablePortals={{ filters: FiltersOffcanvas }}
    >
      <OpenFiltersOffcanvasButton />
    </DContextProvider>
  );
}
        `.trim(),
        language: 'tsx',
        type: 'code',
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
  render: () => (
    <DContextProvider<OffcanvasPayloads>
      portalName="dOffcanvasStoryPortal"
      availablePortals={{ filters: FiltersOffcanvas }}
    >
      <OpenFiltersOffcanvasButton />
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
          color="secondary"
          variant="outline"
        />
        <DButton text="ok" />
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
        icon="XCircle"
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
          color="secondary"
          variant="outline"
        />
        <DButton text="ok" />
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
          color="secondary"
          variant="outline"
        />
        <DButton text="ok" />
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
          color="secondary"
          variant="outline"
        />
        <DButton text="ok" />
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
          color="secondary"
          variant="outline"
        />
        <DButton text="ok" />
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
          color="secondary"
          variant="outline"
        />
        <DButton text="ok" />
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
            color="secondary"
            variant="outline"

          />
          <DButton text="ok" />
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

/**
 * `openFrom` also accepts a `ResponsiveProp` object so the offcanvas can open
 * from different positions depending on the viewport.
 * Resize the viewport (e.g. use the Storybook viewport toolbar) to see the
 * position switch: **bottom** on `xs` and **end** on `lg`+.
 */
export const ResponsiveOpenFrom: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
      description: {
        story:
          'Pass a `ResponsiveProp` object to `openFrom` to control the position per breakpoint. '
          + 'Click the button to open the panel: it slides in from the **bottom** on mobile (`xs`) and from the **right** on desktop (`lg`+).',
      },
    },
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '400px' }} className="position-relative">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <DContextProvider<ResponsiveOffcanvasPayloads>
      portalName="dOffcanvasResponsiveStoryPortal"
      availablePortals={{ responsive: ResponsiveOffcanvas }}
    >
      <OpenResponsiveOffcanvasButton />
    </DContextProvider>
  ),
};
