import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { DContextProvider, DSelect, useDPortalContext } from '../../src';
import type { PortalProps } from '../../src';
import DButton from '../../src/components/DButton';
import DInput from '../../src/components/DInput';
import DModal from '../../src/components/DModal/DModal';
import { CONTEXT_PROVIDER_CONFIG_MATERIAL } from '../config/constants';

import type { DSelectOption } from '../../src/components/DSelect/types';
import type { OverlayPlacement, OverlaySize } from '../../src/components/interface';

/**
 * Every story here opens the panel from a button.
 *
 * Not a stylistic choice. `DModal` is a real `<dialog>` opened with
 * `showModal()`, which puts it in the browser's TOP LAYER — above everything,
 * including the docs page it is embedded in. Rendering one inline, the way
 * these stories used to, covers the page; rendering thirteen of them on one
 * autodocs page covers it thirteen times over, which reads as a page with no
 * stories on it at all.
 *
 * It is also the usage the library actually documents: register the panel in
 * `DContextProvider.availablePortals` and open it with `openPortal`.
 */

type Payloads = {
  panel: {
    placement?: OverlayPlacement | Partial<Record<string, OverlayPlacement>>;
    size?: OverlaySize;
    width?: string;
    height?: string;
    staticBackdrop?: boolean;
    title?: string;
    body?: React.ReactNode;
    showCloseButton?: boolean;
    actionPlacement?: 'start' | 'end' | 'center' | 'between' | 'fill';
    withHeader?: boolean;
    withFooter?: boolean;
  };
};

function Panel({ name, payload }: PortalProps<Payloads['panel']>) {
  const { closePortal } = useDPortalContext();
  const {
    title = 'Do you want to reject the offer?',
    body = <p className="df-m-0">Panel body. Press Escape or click outside to close.</p>,
    showCloseButton = true,
    actionPlacement,
    withHeader = true,
    withFooter = true,
    ...geometry
  } = payload;

  return (
    <DModal name={name} {...geometry}>
      {withHeader && (
        <DModal.Header onClose={closePortal} showCloseButton={showCloseButton}>
          <h5 className="df-fw-semibold df-m-0">{title}</h5>
        </DModal.Header>
      )}
      <DModal.Body>{body}</DModal.Body>
      {withFooter && (
        <DModal.Footer actionPlacement={actionPlacement}>
          <DButton text="Cancel" color="secondary" variant="outline" onClick={() => closePortal()} />
          <DButton text="Ok" onClick={() => closePortal()} />
        </DModal.Footer>
      )}
    </DModal>
  );
}

/** A button that opens `Panel` with the given payload. */
function Trigger({ label, payload }: { label: string; payload: Payloads['panel'] }) {
  const { openPortal } = useDPortalContext<Payloads>();
  return <DButton text={label} onClick={() => openPortal('panel', payload)} />;
}

/** Wraps a story in the provider the panel needs, the way an app does once. */
function withPortal(children: React.ReactNode, material = false): React.JSX.Element {
  return (
    <DContextProvider<Payloads>
      availablePortals={{ panel: Panel }}
      {...material && CONTEXT_PROVIDER_CONFIG_MATERIAL}
    >
      <div className="df-flex df-flex-wrap df-gap-3 df-items-center df-p-4">
        {children}
      </div>
    </DContextProvider>
  );
}

const config: Meta<typeof DModal> = {
  title: 'Design System/Components/Modal',
  component: DModal,
  parameters: { layout: 'fullscreen' },
  argTypes: {
    name: {
      control: 'text',
      type: { name: 'string', required: true },
      table: { category: 'HTML Attributes' },
    },
    placement: {
      control: 'select',
      options: ['center', 'start', 'end', 'top', 'bottom', 'fill'],
      table: { category: 'Appearance' },
      description: 'Where the panel is anchored. Also accepts a responsive object.',
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg', 'xl'],
      table: { category: 'Appearance' },
      description: 'A rung on the shared scale. Sets whichever axis `placement` sizes.',
    },
    width: {
      control: 'text',
      table: { category: 'Appearance' },
      description: 'Escape hatch for the inline axis. Any CSS length, or a responsive object.',
    },
    height: {
      control: 'text',
      table: { category: 'Appearance' },
      description: 'Escape hatch for the block axis. Any CSS length, or a responsive object.',
    },
    staticBackdrop: {
      control: 'boolean',
      table: { category: 'Behavior' },
      description: 'Refuses both ways out: a click on the backdrop and Escape.',
    },
    className: { control: 'text', table: { category: 'Appearance' } },
    style: { control: 'object', table: { category: 'Appearance' } },
  },
};

export default config;
type Story = StoryObj<typeof DModal>;

const story = (
  render: () => React.JSX.Element,
  description: string,
): Story => ({
  render: () => render(),
  parameters: { docs: { description: { story: description } } },
});

/* --- the model --------------------------------------------------------- */

/**
 * The six placements, side by side.
 *
 * One component draws all of them. Open `end` next to `center` and the only
 * difference you can see is the one `placement` describes: a drawer fills the
 * height and meets the edge, a dialog hugs its content and floats.
 */
export const Placements: Story = story(
  () => withPortal(
    (['center', 'start', 'end', 'top', 'bottom', 'fill'] as OverlayPlacement[]).map((placement) => (
      <Trigger
        key={placement}
        label={placement}
        payload={{ placement, title: `placement="${placement}"` }}
      />
    )),
  ),
  'Every placement is the same `DModal`. `center` is a dialog, the four edges are drawers and '
  + 'sheets, `fill` covers the viewport. There is no second component and no `variant` — the '
  + 'edge placements already have no border radius and already fill the axis they do not size.',
);

/**
 * One scale, at any placement.
 *
 * `size` sets whichever axis the placement sizes: the width of a drawer, the
 * height of a sheet, the max-width of a dialog. Before the merge a drawer
 * could not take a named size at all.
 */
export const Sizes: Story = story(
  () => withPortal(
    <>
      {(['sm', 'md', 'lg', 'xl'] as OverlaySize[]).map((size) => (
        <Trigger
          key={`c-${size}`}
          label={`dialog ${size}`}
          payload={{ placement: 'center', size, title: `placement="center" size="${size}"` }}
        />
      ))}
      {(['sm', 'md', 'lg', 'xl'] as OverlaySize[]).map((size) => (
        <Trigger
          key={`d-${size}`}
          label={`drawer ${size}`}
          payload={{ placement: 'end', size, title: `placement="end" size="${size}"` }}
        />
      ))}
    </>,
  ),
  'The same four rungs serve a dialog\'s max-width and a drawer\'s width.',
);

/**
 * A bottom sheet on a phone, a dialog on a desktop.
 *
 * This is the case that makes one component worth having: you cannot swap
 * component names at a breakpoint, but a responsive `placement` costs nothing.
 * It also replaces `fullScreenFrom`, whose value the stylesheet never read.
 */
export const ResponsivePlacement: Story = story(
  () => withPortal(
    <>
      <Trigger
        label="bottom sheet → dialog"
        payload={{
          placement: { xs: 'bottom', md: 'center' },
          title: "placement={{ xs: 'bottom', md: 'center' }}",
          body: <p className="df-m-0">Resize the viewport and open it again.</p>,
        }}
      />
      <Trigger
        label="fullscreen → dialog"
        payload={{
          placement: { xs: 'fill', md: 'center' },
          title: "placement={{ xs: 'fill', md: 'center' }}",
          body: <p className="df-m-0">What `fullScreenFrom=&quot;md&quot;` was trying to say.</p>,
        }}
      />
    </>,
  ),
  'Resize the Storybook viewport between openings. `placement` resolves against the real '
  + 'breakpoints, so one panel is a sheet on a phone and a dialog above `md`.',
);

/** Any CSS length, for when a named rung is not the right answer. */
export const ExplicitSize: Story = story(
  () => withPortal(
    <>
      <Trigger label="drawer 320px" payload={{ placement: 'end', width: '320px', title: 'width="320px"' }} />
      <Trigger label="drawer 50vw" payload={{ placement: 'start', width: '50vw', title: 'width="50vw"' }} />
      <Trigger label="sheet 40vh" payload={{ placement: 'bottom', height: '40vh', title: 'height="40vh"' }} />
      <Trigger
        label="sheet, both axes"
        payload={{
          placement: { xs: 'bottom', md: 'end' },
          width: '420px',
          height: '60vh',
          title: 'width AND height, responsive placement',
          body: <p className="df-m-0">The stylesheet reads whichever axis the placement sizes.</p>,
        }}
      />
    </>,
  ),
  '`width` and `height` are written as separate custom properties, so a panel that is a sheet '
  + 'at `xs` and a drawer at `md` can carry both without one being applied to the wrong axis.',
);

/* --- composition ------------------------------------------------------- */

/** The parts are optional, and the separators follow them. */
export const Composition: Story = story(
  () => withPortal(
    <>
      <Trigger label="Full" payload={{ title: 'Header, body and footer' }} />
      <Trigger label="No header" payload={{ withHeader: false }} />
      <Trigger label="No footer" payload={{ withFooter: false }} />
      <Trigger label="Body only" payload={{ withHeader: false, withFooter: false }} />
      <Trigger label="No close button" payload={{ showCloseButton: false, title: 'Escape still closes it' }} />
    </>,
  ),
  'A header with only a close button pushes it to the end; a missing header takes its separator '
  + 'with it.',
);

/** Every value the stylesheet supports, which is now the whole of the type. */
export const FooterAlignment: Story = story(
  () => withPortal(
    (['start', 'end', 'center', 'between', 'fill'] as const).map((actionPlacement) => (
      <Trigger
        key={actionPlacement}
        label={actionPlacement}
        payload={{ actionPlacement, title: `actionPlacement="${actionPlacement}"` }}
      />
    )),
  ),
  '`center` and `between` had rules in the stylesheet that neither component\'s type exposed, and '
  + '`fill` emitted `data-align="fill"` against a rule written as `[data-fill]` — so the one value '
  + 'that stretches the buttons rather than aligning them did nothing. `css:attributes` catches '
  + 'that class of gap now.',
);

/** A panel that refuses both ways out. */
export const StaticBackdrop: Story = story(
  () => withPortal(
    <Trigger
      label="Static backdrop"
      payload={{
        staticBackdrop: true,
        title: 'Decide before you leave',
        body: <p className="df-m-0">Escape and clicking outside are both vetoed. Use a button.</p>,
      }}
    />,
  ),
  'Escape is vetoed in `onCancel`, which is the only point a native dialog gives you to refuse it '
  + '— `close` fires after the fact.',
);

/** Long content scrolls in the body; the header and footer stay put. */
export const ScrollingBody: Story = story(
  () => withPortal(
    <>
      <Trigger
        label="Long dialog"
        payload={{
          size: 'md',
          title: 'Terms',
          /*
           * Plain paragraphs, spaced by the element defaults.
           *
           * `p` carries `margin-block-end` from `text.body`, so a block of
           * written text reads correctly with no class on it — which is the
           * only thing that can work for markup out of a CMS.
           */
          body: (
            <div>
              {Array.from({ length: 24 }, (unused, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <p key={i}>{`Clause ${i + 1}. The body is the only part that scrolls.`}</p>
              ))}
            </div>
          ),
        }}
      />
      <Trigger
        label="Long drawer"
        payload={{
          placement: 'end',
          title: 'Filters',
          body: (
            <>
              {Array.from({ length: 24 }, (unused, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <p key={i}>{`Filter ${i + 1}`}</p>
              ))}
            </>
          ),
        }}
      />
    </>,
  ),
  'The dialog caps at `max-height` and the drawer fills the viewport; in both cases '
  + '`.df-overlay-body` is the scroll container, so the header and footer never move.',
);

/** A form inside the panel, which is the common real use. */
export const WithForm: Story = story(
  () => withPortal(
    <Trigger
      label="Open form"
      payload={{
        size: 'sm',
        title: 'Transfer',
        body: (
          <div className="df-flex df-flex-col df-gap-3">
            <DInput type="text" label="Recipient" placeholder="Account number" />
            <DInput type="text" label="Amount" placeholder="0.00" />
          </div>
        ),
      }}
    />,
  ),
  'Focus moves into the panel on open and returns to the trigger on close — both from '
  + '`showModal()`, neither written here.',
);

/** The close icon from a Material icon set, through `DContextProvider`. */
export const MaterialStyleCloseIcon: Story = story(
  () => withPortal(
    <Trigger label="Material icons" payload={{ title: 'Material close icon' }} />,
    true,
  ),
  'The close button renders through `DIcon`, so it follows whatever icon family the context is '
  + 'configured with.',
);

/* --- playground -------------------------------------------------------- */

const PLACEMENTS: DSelectOption<OverlayPlacement>[] = [
  { label: 'Center (a dialog)', value: 'center' },
  { label: 'Start (a drawer)', value: 'start' },
  { label: 'End (a drawer)', value: 'end' },
  { label: 'Top (a sheet)', value: 'top' },
  { label: 'Bottom (a sheet)', value: 'bottom' },
  { label: 'Fill (the viewport)', value: 'fill' },
];

const SIZES: DSelectOption<OverlaySize>[] = [
  { label: 'sm', value: 'sm' },
  { label: 'md', value: 'md' },
  { label: 'lg', value: 'lg' },
  { label: 'xl', value: 'xl' },
];

function Playground() {
  const [placement, setPlacement] = useState<OverlayPlacement>('center');
  const [size, setSize] = useState<OverlaySize>('md');
  const { openPortal } = useDPortalContext<Payloads>();

  return (
    <div className="df-flex df-flex-col df-gap-3" style={{ maxWidth: '20rem' }}>
      <DSelect<OverlayPlacement>
        label="placement"
        options={PLACEMENTS}
        value={placement}
        onChange={(value) => { if (value) setPlacement(value as OverlayPlacement); }}
      />
      <DSelect<OverlaySize>
        label="size"
        options={SIZES}
        value={size}
        onChange={(value) => { if (value) setSize(value as OverlaySize); }}
      />
      <DButton
        text="Open"
        onClick={() => openPortal('panel', {
          placement,
          size,
          title: `placement="${placement}" size="${size}"`,
        })}
      />
      <pre className="df-m-0">
        <code>{`<DModal placement="${placement}" size="${size}" />`}</code>
      </pre>
    </div>
  );
}

/** Pick a placement and a size and open it. */
export const PlacementPlayground: Story = story(
  () => withPortal(<Playground />),
  'The two props that describe the geometry, side by side. Everything else about the panel is the '
  + 'same whichever you pick.',
);
