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
    transition: {
      table: { category: 'Appearance' },
    },
    openFrom: {
      control: 'object',
      table: {
        category: 'Appearance',
        type: {
          summary: "'start' | 'end' | 'top' | 'bottom' | ResponsiveProp",
        },
      },
      description:
        'Side the offcanvas opens from. Accepts a single value or a `ResponsiveProp` object '
        + "(e.g. `{ xs: 'bottom', md: 'end' }`) to change placement per breakpoint.",
    },
    width: {
      control: 'text',
      table: {
        category: 'Appearance',
        type: { summary: 'string | ResponsiveProp' },
      },
      description:
        'Overrides the size on `start`/`end` placements (defaults to `400px`). Accepts any '
        + "CSS length (e.g. `'320px'`, `'100%'`) or a `ResponsiveProp` object.",
    },
    height: {
      control: 'text',
      table: {
        category: 'Appearance',
        type: { summary: 'string | ResponsiveProp' },
      },
      description:
        'Overrides the size on `top`/`bottom` placements (defaults to `100%`). Accepts any '
        + "CSS length (e.g. `'50vh'`, `'320px'`) or a `ResponsiveProp` object.",
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

function ResponsiveFiltersOffcanvas({ name }: PortalProps<OffcanvasPayloads['filters']>) {
  const { closePortal } = useDPortalContext();
  return (
    <DOffcanvas
      name={name}
      staticBackdrop={false}
      scrollable={false}
      openFrom={{
        xs: 'bottom', sm: 'start', md: 'end', lg: 'top',
      }}
    >
      <DOffcanvas.Header onClose={closePortal} showCloseButton>
        <h5 className="fw-bold">Advanced filters</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <p>Offcanvas body</p>
        <small>
          Resize the viewport: opens from
          {' '}
          <code>bottom</code>
          {' '}
          below the
          {' '}
          <code>md</code>
          {' '}
          breakpoint and from
          {' '}
          <code>end</code>
          {' '}
          from
          {' '}
          <code>md</code>
          {' '}
          up.
        </small>
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

function OpenResponsiveFiltersOffcanvasButton() {
  const { openPortal } = useDPortalContext<OffcanvasPayloads>();
  return (
    <DButton
      text="Open Responsive Offcanvas"
      onClick={() => openPortal('filters', { description: 'Payload passed via openPortal.' })}
    />
  );
}

export const ResponsivePlacement: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '400px' }} className="d-flex justify-content-center align-items-center">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          '`openFrom` accepts a `ResponsiveProp` object so the placement can change per breakpoint '
          + "(e.g. `{ xs: 'bottom', md: 'end' }`), instead of a single fixed value. As with any other "
          + 'offcanvas, it must be registered in `DContextProvider.availablePortals` and opened via '
          + '`openPortal` — rendering it directly as JSX is not the recommended usage. '
          + 'Resize the browser window (or Storybook viewport) to see the placement react to the '
          + 'real breakpoint.',
      },
      source: {
        code: `
type OffcanvasPayloads = {
  filters: {
    description: string;
  };
};

function ResponsiveFiltersOffcanvas({ name }: PortalProps<OffcanvasPayloads['filters']>) {
  const { closePortal } = useDPortalContext();
  return (
    <DOffcanvas 
      name={name} 
      staticBackdrop={false} 
      scrollable={false} 
      openFrom={{
        xs: 'bottom', sm: 'start', md: 'end', lg: 'top',
      }}
    >
      <DOffcanvas.Header onClose={closePortal} showCloseButton>
        <h5 className="fw-bold">Advanced filters</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <p>Offcanvas body</p>
      </DOffcanvas.Body>
      <DOffcanvas.Footer>
        <DButton text="Cancel" color="secondary" variant="outline" onClick={() => closePortal()} />
        <DButton text="Ok" onClick={() => closePortal()} />
      </DOffcanvas.Footer>
    </DOffcanvas>
  );
}

function OpenResponsiveFiltersOffcanvasButton() {
  const { openPortal } = useDPortalContext<OffcanvasPayloads>();
  return (
    <DButton
      text="Open Responsive Offcanvas"
      onClick={() => openPortal('filters', { description: 'Payload passed via openPortal.' })}
    />
  );
}

function App() {
  return (
    <DContextProvider<OffcanvasPayloads>
      portalName="dOffcanvasResponsiveStoryPortal"
      availablePortals={{ filters: ResponsiveFiltersOffcanvas }}
    >
      <OpenResponsiveFiltersOffcanvasButton />
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
    <DContextProvider<OffcanvasPayloads>
      portalName="dOffcanvasResponsiveStoryPortal"
      availablePortals={{ filters: ResponsiveFiltersOffcanvas }}
    >
      <div className="d-flex flex-column gap-2 align-items-center">
        <OpenResponsiveFiltersOffcanvasButton />
        <pre>
          <code>
            {JSON.stringify({
              openFrom:
              {
                xs: 'bottom',
                sm: 'start',
                md: 'end',
                lg: 'top',
              },
            }, null, 2)}
          </code>
        </pre>
      </div>
    </DContextProvider>
  ),
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
