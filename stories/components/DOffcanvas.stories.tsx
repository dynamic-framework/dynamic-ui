import type { Meta, StoryObj } from '@storybook/react-vite';

import { DContextProvider, useDPortalContext } from '../../src';
import type { PortalProps } from '../../src';
import DButton from '../../src/components/DButton';
import DOffcanvas from '../../src/components/DOffcanvas/DOffcanvas';
import { CONTEXT_PROVIDER_CONFIG_MATERIAL } from '../config/constants';

import type { ResponsiveProp } from '../../src/hooks/useResponsiveProp';
import type { OffcanvasPositionToggleFrom } from '../../src/components/interface';

/**
 * Every story here opens the panel from a button.
 *
 * `DOffcanvas` is a real `<dialog>` opened with `showModal()`, which puts it in
 * the browser's TOP LAYER — above everything, including the docs page it is
 * embedded in. Rendering one inline, the way these stories used to, covers the
 * page; rendering ten of them on one autodocs page covers it ten times over.
 *
 * It is also the usage the library actually documents: register the panel in
 * `DContextProvider.availablePortals` and open it with `openPortal`.
 */

type Placement = OffcanvasPositionToggleFrom
| Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl', OffcanvasPositionToggleFrom>>;

type Payloads = {
  panel: {
    openFrom?: Placement;
    width?: string | ResponsiveProp;
    height?: string | ResponsiveProp;
    staticBackdrop?: boolean;
    title?: string;
    body?: React.ReactNode;
    showCloseButton?: boolean;
    closeIcon?: string;
    actionPlacement?: 'start' | 'end' | 'center' | 'between' | 'fill';
    withHeader?: boolean;
    withFooter?: boolean;
    /* Custom properties for the motion stories — see the Modal page. */
    style?: React.CSSProperties;
  };
};

/**
 * A panel written the naive way, on purpose: no `nativeDialog` flag, no
 * `onClose` forwarded to `DOffcanvas`. Both used to be required and both failed
 * in ways that pointed somewhere else. `DOffcanvas` reports them from the inside
 * now, so this shape works — and it is the shape that has to keep working.
 */
function Panel({ name, payload }: PortalProps<Payloads['panel']>) {
  const { closePortal } = useDPortalContext();
  const {
    title = 'Advanced filters',
    body = <p className="m-0">Offcanvas body. Press Escape or click outside to close.</p>,
    showCloseButton = true,
    closeIcon,
    actionPlacement,
    withHeader = true,
    withFooter = true,
    ...offcanvasProps
  } = payload;

  return (
    <DOffcanvas name={name} {...offcanvasProps}>
      {withHeader && (
        <DOffcanvas.Header
          onClose={closePortal}
          showCloseButton={showCloseButton}
          icon={closeIcon}
        >
          <h5 className="fw-bold m-0">{title}</h5>
        </DOffcanvas.Header>
      )}
      <DOffcanvas.Body>{body}</DOffcanvas.Body>
      {withFooter && (
        <DOffcanvas.Footer actionPlacement={actionPlacement}>
          <DButton text="Cancel" color="secondary" variant="outline" onClick={() => closePortal()} />
          <DButton text="Ok" onClick={() => closePortal()} />
        </DOffcanvas.Footer>
      )}
    </DOffcanvas>
  );
}

function Trigger({ label, payload }: { label: string; payload: Payloads['panel'] }) {
  const { openPortal } = useDPortalContext<Payloads>();
  return <DButton text={label} onClick={() => openPortal('panel', payload)} />;
}

function withPortal(children: React.ReactNode, material = false): React.JSX.Element {
  return (
    <DContextProvider<Payloads>
      availablePortals={{ panel: Panel }}
      {...material && CONTEXT_PROVIDER_CONFIG_MATERIAL}
    >
      <div className="d-flex flex-wrap gap-3 align-items-center p-4">
        {children}
      </div>
    </DContextProvider>
  );
}

const meta = {
  title: 'Design System/Components/Offcanvas',
  component: DOffcanvas,
  parameters: { layout: 'fullscreen' },
  argTypes: {
    name: {
      control: 'text',
      type: { name: 'string', required: true },
      table: { category: 'HTML Attributes' },
    },
    staticBackdrop: {
      control: 'boolean',
      table: { category: 'Behavior' },
      description: 'Refuses both ways out: a click on the backdrop and Escape.',
    },
    openFrom: {
      control: 'object',
      table: {
        category: 'Appearance',
        type: { summary: "'start' | 'end' | 'top' | 'bottom' | ResponsiveProp" },
      },
      description:
        'Side the offcanvas opens from. Accepts a single value or a `ResponsiveProp` object '
        + "(e.g. `{ xs: 'bottom', md: 'end' }`) to change placement per breakpoint.",
    },
    width: {
      control: 'object',
      table: { category: 'Appearance', type: { summary: 'string | ResponsiveProp' } },
      description:
        'Overrides the size on `start`/`end` placements (defaults to `400px`). Accepts any '
        + "CSS length (e.g. `'320px'`, `'100%'`) or a `ResponsiveProp` object.",
    },
    height: {
      control: 'object',
      table: { category: 'Appearance', type: { summary: 'string | ResponsiveProp' } },
      description:
        'Overrides the size on `top`/`bottom` placements (defaults to `100%`). Accepts any '
        + "CSS length (e.g. `'50vh'`, `'320px'`) or a `ResponsiveProp` object.",
    },
    dialogRef: {
      table: { category: 'Behavior' },
      description:
        'A ref pointed at the `<dialog>`. Close the panel with '
        + '`dialogRef.current?.close()` — unmounting it instead stops the exit transition dead.',
    },
    onClose: {
      action: 'close',
      table: { category: 'Events' },
      description: 'Fired when the browser closes the panel: Escape, or a click outside it.',
    },
    scrollable: {
      control: 'boolean',
      table: { category: 'Behavior' },
      description:
        '**Deprecated, and a no-op.** It emitted `data-bs-scroll`, an instruction to '
        + "Bootstrap's JS, which has never been on the page here. `showModal()` makes the rest "
        + 'of the document inert, which is what a modal panel wants anyway.',
    },
    className: { control: 'text', table: { category: 'Appearance' } },
    style: { control: 'object', table: { category: 'Appearance' } },
  },
} satisfies Meta<typeof DOffcanvas>;

export default meta;
type Story = StoryObj<typeof meta>;

const story = (
  render: () => React.JSX.Element,
  description: string,
): Story => ({
  render: () => render(),
  parameters: { docs: { description: { story: description } } },
});

/* --- the usage pattern --------------------------------------------------- */

export const RealUsageWithOpenPortal: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The recommended pattern: `DOffcanvas` is registered in '
          + '`DContextProvider.availablePortals` and opened imperatively with `openPortal` — '
          + '**not** rendered directly as a conditional JSX element.',
      },
      source: {
        code: `type OffcanvasPayloads = {
  filters: { description: string };
};

function FiltersOffcanvas({ name, payload }: PortalProps<OffcanvasPayloads['filters']>) {
  const { closePortal } = useDPortalContext();
  return (
    <DOffcanvas name={name} openFrom="end">
      <DOffcanvas.Header onClose={closePortal} showCloseButton>
        <h5 className="fw-bold m-0">Advanced filters</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <p className="m-0">{payload.description}</p>
      </DOffcanvas.Body>
      <DOffcanvas.Footer>
        <DButton text="Cancel" color="secondary" variant="outline" onClick={() => closePortal()} />
        <DButton text="Ok" onClick={() => closePortal()} />
      </DOffcanvas.Footer>
    </DOffcanvas>
  );
}

function App() {
  return (
    <DContextProvider<OffcanvasPayloads> availablePortals={{ filters: FiltersOffcanvas }}>
      <OpenFiltersOffcanvasButton />
    </DContextProvider>
  );
}`,
        language: 'tsx',
        type: 'code',
      },
    },
  },
  render: () => withPortal(
    <Trigger
      label="Open Offcanvas"
      payload={{ body: <p className="m-0">Payload passed via openPortal.</p> }}
    />,
  ),
};

/* --- placement ----------------------------------------------------------- */

export const Placements: Story = story(
  () => withPortal(
    (['start', 'end', 'top', 'bottom'] as const).map((openFrom) => (
      <Trigger
        key={openFrom}
        label={`openFrom="${openFrom}"`}
        payload={{ openFrom, title: `offcanvas-${openFrom}` }}
      />
    )),
  ),
  'The four edges. The placement class goes on the `<dialog>` itself — the panel IS the dialog '
  + 'here, unlike `DModal`, where the dialog is the full-viewport `.modal` box around it.',
);

export const ResponsivePlacement: Story = story(
  () => withPortal(
    <Trigger
      label="Open — bottom on a phone, end above it"
      payload={{
        openFrom: {
          xs: 'bottom', sm: 'start', md: 'end', lg: 'top',
        },
        title: 'One panel, four placements',
        body: (
          <p className="m-0">
            Resize the window (or the Storybook viewport) and reopen it: the
            placement follows the real breakpoint.
          </p>
        ),
      }}
    />,
  ),
  '`openFrom` accepts a `ResponsiveProp` object, so a bottom sheet on a phone and a side drawer '
  + 'on a desktop are one panel rather than two components swapped at a breakpoint.',
);

export const Size: Story = story(
  () => withPortal(
    <>
      <Trigger label="default (400px)" payload={{ openFrom: 'end', title: 'Default width' }} />
      <Trigger label='width="320px"' payload={{ openFrom: 'end', width: '320px', title: '320px' }} />
      <Trigger label='width="50vw"' payload={{ openFrom: 'end', width: '50vw', title: '50vw' }} />
      <Trigger label='height="50vh"' payload={{ openFrom: 'bottom', height: '50vh', title: '50vh tall' }} />
      <Trigger
        label="responsive width"
        payload={{
          openFrom: 'end',
          width: { xs: '100%', md: '400px', xl: '640px' },
          title: 'Width per breakpoint',
        }}
      />
    </>,
  ),
  '`width` sizes the `start`/`end` placements and `height` sizes `top`/`bottom`; both take any '
  + 'CSS length or a `ResponsiveProp`. They are written as `--bs-offcanvas-width` / '
  + '`--bs-offcanvas-height` on the dialog, which is where Bootstrap already reads them.',
);

/* --- composition --------------------------------------------------------- */

export const FooterAlignment: Story = story(
  () => withPortal(
    (['start', 'center', 'end', 'between', 'fill'] as const).map((actionPlacement) => (
      <Trigger
        key={actionPlacement}
        label={actionPlacement}
        payload={{ actionPlacement, title: `actionPlacement="${actionPlacement}"` }}
      />
    )),
  ),
  'The same five values `DModal.Footer` takes. This footer used to accept three of them: '
  + '`center` and `between` existed in the modal\'s copy and not here, for one element and one '
  + 'set of rules.',
);

export const Composition: Story = story(
  () => withPortal(
    <>
      <Trigger label="Header + body + footer" payload={{ title: 'All three' }} />
      <Trigger label="No header" payload={{ withHeader: false }} />
      <Trigger label="No footer" payload={{ withFooter: false, title: 'Header and body' }} />
      <Trigger
        label="No close button"
        payload={{ showCloseButton: false, title: 'Dismissed from the footer only' }}
      />
    </>,
  ),
  'Each sub-component is optional. A header holding nothing but the close button aligns it to '
  + 'the end, through `:has(.d-offcanvas-close:only-child)`.',
);

export const CloseIcon: Story = story(
  () => withPortal(
    <Trigger label="Open" payload={{ closeIcon: 'XCircle', title: 'A different dismiss icon' }} />,
  ),
  'The dismiss icon comes from `DContextProvider`\'s `iconMap.xLg` and can be overridden per '
  + 'header with `icon`.',
);

export const MaterialStyleCloseIcon: Story = story(
  () => withPortal(
    <Trigger label="Open" payload={{ title: 'Material Symbols' }} />,
    true,
  ),
  'Icon family configured globally on `DContextProvider`.',
);

export const StaticBackdrop: Story = story(
  () => withPortal(
    <Trigger
      label="Open — refuses Escape"
      payload={{
        staticBackdrop: true,
        title: 'Dismissed deliberately only',
        body: <p className="m-0">Escape and a click outside do nothing.</p>,
      }}
    />,
  ),
  'The dialog\'s `cancel` event is the only chance to veto Escape — `close` is after the fact. '
  + 'This replaced `data-bs-backdrop="static"`, an instruction to Bootstrap\'s JS that has never '
  + 'been on the page here.',
);

/* --- motion -------------------------------------------------------------- */

/**
 * The slide, at four speeds.
 *
 * The same four custom properties the modal reads — they live on `:root` and
 * both panels inherit them, so a product retimes its overlays in one place.
 * This is what the `transition` prop and its `framer-motion` `Transition` object
 * became.
 */
export const Durations: Story = {
  render: () => withPortal(
    ([
      ['instant', '0ms', '0ms'],
      ['fast', '150ms', '100ms'],
      ['default', '300ms', '150ms'],
      ['slow', '600ms', '400ms'],
    ] as const).map(([label, enter, exit]) => (
      <Trigger
        key={label}
        label={`${label} · ${enter} / ${exit}`}
        payload={{
          openFrom: 'end',
          title: `enter ${enter}, exit ${exit}`,
          body: <p className="m-0">Press Escape or click outside, and watch how it leaves.</p>,
          style: {
            '--bs-overlay-duration-enter': enter,
            '--bs-overlay-duration-exit': exit,
          } as React.CSSProperties,
        }}
      />
    )),
  ),
  parameters: {
    docs: {
      description: {
        story: 'Four speeds on one component, set as CSS custom properties rather than a prop. '
          + 'See the Modal page for why there is no `duration` prop.',
      },
      source: {
        code: `<DOffcanvas
  name="filters"
  openFrom="end"
  style={{
    '--bs-overlay-duration-enter': '600ms',
    '--bs-overlay-duration-exit': '400ms',
  }}
>
  …
</DOffcanvas>`,
      },
    },
  },
};

/**
 * What `prefers-reduced-motion` does to all of it.
 *
 * The entire transition block sits inside
 * `@media (prefers-reduced-motion: no-preference)`, so a reader who has asked
 * for less motion gets no animation at all — not a faster one.
 */
export const ReducedMotion: Story = {
  render: () => withPortal(
    <Trigger
      label="Open"
      payload={{
        openFrom: 'end',
        title: 'Motion is opt-out at the OS level',
        body: (
          <p className="m-0">
            Turn on &ldquo;reduce motion&rdquo; in your system settings and reopen this: it
            appears with no slide, whatever the duration says.
          </p>
        ),
        style: {
          '--bs-overlay-duration-enter': '900ms',
          '--bs-overlay-duration-exit': '700ms',
        } as React.CSSProperties,
      }}
    />,
  ),
  parameters: {
    docs: {
      description: {
        story: 'This panel asks for 900ms. With "reduce motion" on it still appears instantly — '
          + 'the transitions are declared inside the media query rather than being shortened by '
          + 'it, so there is no duration a consumer can set that overrides a reader\'s preference.',
      },
    },
  },
};
