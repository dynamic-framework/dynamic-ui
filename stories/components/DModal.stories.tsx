import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { DContextProvider, DSelect, useDPortalContext } from '../../src';
import type { PortalProps } from '../../src';
import DButton from '../../src/components/DButton';
import DInput from '../../src/components/DInput';
import DModal from '../../src/components/DModal/DModal';
import DConfirmModalContainer from '../../src/components/DConfirmModal/DConfirmModalContainer';
import useConfirmModal from '../../src/hooks/useConfirmModal';
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
  /** A second registered name, so two panels can be open at once. */
  nested: { title?: string };
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
    /*
     * Custom properties for the motion stories.
     *
     * The timing is CSS, so this is how a single panel overrides it — the
     * same thing a consumer writes. It lands on the `<dialog>`, which is the
     * element the transition is declared on.
     */
    style?: React.CSSProperties;
    /**
     * Renders the button that opens the second panel.
     *
     * A flag rather than the button itself in `body`. The payload crosses
     * into the portal's state, and data survives that trip in a way a React
     * element does not have to — an element in state is a tree held open for
     * as long as the entry lives, serialised by the docs panel, and compared
     * by identity on every render. The flag says what to draw; the panel
     * draws it.
     */
    withNestedTrigger?: boolean;
  };
};

/** Opens the small panel from inside the big one. */
function OpenNested() {
  const { openPortal } = useDPortalContext<Payloads>();
  return (
    <DButton
      text="Open a second modal"
      variant="outline"
      onClick={() => openPortal('nested', { title: 'The one on top' })}
    />
  );
}

/**
 * A panel written the naive way, on purpose.
 *
 * It declares no `nativeDialog` flag and forwards no `onClose` to the
 * `DModal`, because a consumer writing their first panel would not. Both used
 * to be required and both failed in ways that pointed somewhere else: without
 * the flag the portal drew its scrim on top of the dialog's `::backdrop`, and
 * without `onClose` the dialog closed itself while the stack kept the entry —
 * so the panel went, a sheet stayed, and the next click went into dismissing
 * it instead of doing what it was aimed at.
 *
 * `DModal` reports both from the inside now, so this shape works. The story
 * stays naive deliberately: it is the shape that has to keep working.
 */
function Panel({ name, payload }: PortalProps<Payloads['panel']>) {
  const { closePortal } = useDPortalContext();
  const {
    title = 'Do you want to reject the offer?',
    body = <p className="df-m-0">Panel body. Press Escape or click outside to close.</p>,
    showCloseButton = true,
    actionPlacement,
    withHeader = true,
    withFooter = true,
    withNestedTrigger = false,
    ...geometry
  } = payload;

  return (
    <DModal name={name} {...geometry}>
      {withHeader && (
        <DModal.Header onClose={closePortal} showCloseButton={showCloseButton}>
          <h5 className="df-fw-semibold df-m-0">{title}</h5>
        </DModal.Header>
      )}
      <DModal.Body>
        {body}
        {withNestedTrigger && <OpenNested />}
      </DModal.Body>
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

/**
 * The panel the big one opens.
 *
 * A separate registration rather than the same one twice: the stack is keyed
 * by name and React keys the rendered panels by it too, so opening `panel`
 * from inside `panel` would collide with itself.
 */
function NestedPanel({ name, payload }: PortalProps<Payloads['nested']>) {
  const { closePortal } = useDPortalContext();
  return (
    <DModal name={name} size="sm">
      <DModal.Header onClose={closePortal} showCloseButton>
        <h5 className="df-fw-semibold df-m-0">{payload.title ?? 'The one on top'}</h5>
      </DModal.Header>
      <DModal.Body>
        <p className="df-m-0">
          Both are open. Escape closes this one and leaves the one underneath —
          the browser sends it to the topmost dialog in the top layer, and the
          portal pops the entry that closed.
        </p>
      </DModal.Body>
      <DModal.Footer>
        <DButton text="Close this one" onClick={() => closePortal()} />
      </DModal.Footer>
    </DModal>
  );
}

/** Wraps a story in the provider the panel needs, the way an app does once. */
function withPortal(children: React.ReactNode, material = false): React.JSX.Element {
  return (
    <DContextProvider<Payloads>
      availablePortals={{ panel: Panel, nested: NestedPanel }}
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

/* --- motion ------------------------------------------------------------ */

/**
 * The timing, at four speeds.
 *
 * Open each one and watch it LEAVE — the enter is the same `decelerate` in all
 * of them, and the difference is easiest to see on the way out.
 *
 * There is no `duration` prop, deliberately. A prop would mean JavaScript
 * owning a value CSS applies: the component would have to write an inline
 * style, which is exactly what removing the animation library got rid of. And
 * a design system with a duration prop per component is a design system with
 * as many ways to be inconsistent as it has components.
 */
export const Durations: Story = {
  render: () => withPortal(
    ([
      ['instant', '0ms', '0ms'],
      ['fast', '150ms', '100ms'],
      ['default', '200ms', '150ms'],
      ['slow', '600ms', '400ms'],
    ] as const).map(([label, enter, exit]) => (
      <Trigger
        key={label}
        label={`${label} · ${enter} / ${exit}`}
        payload={{
          title: `enter ${enter}, exit ${exit}`,
          body: (
            <p className="df-m-0">
              Press Escape or click outside, and watch how it leaves.
            </p>
          ),
          style: {
            '--df-overlay-duration-enter': enter,
            '--df-overlay-duration-exit': exit,
          } as React.CSSProperties,
        }}
      />
    )),
  ),
  parameters: {
    docs: {
      description: {
        story: 'Four speeds on one component. The exit is shorter than the enter in each '
          + 'pair, which is the system default: `motion.duration-exit` is 150ms against 200 '
          + 'for the enter. Leaving should get out of the way.',
      },
      source: {
        code: `<DModal
  name="confirm"
  style={{
    '--df-overlay-duration-enter': '600ms',
    '--df-overlay-duration-exit': '400ms',
  }}
>
  …
</DModal>

// These land on the <dialog>, which is the element the transition is
// declared on. For a panel that is NOT a dialog, the portal's scrim is a
// SIBLING of the panel rather than an ancestor, so it does not inherit a
// per-panel override — set those on the portal mount point or on :root.
//
// Four custom properties control the whole animation:
//
//   --df-overlay-duration-enter   how long it takes to arrive
//   --df-overlay-duration-exit    how long it takes to leave
//   --df-overlay-easing-enter     its curve on the way in
//   --df-overlay-easing-exit      its curve on the way out
//
// They are separate because leaving is not arriving played backwards: the
// system's default enter is 200ms on \`decelerate\` and its exit is 150ms on
// \`accelerate\`. A panel that decelerates on the way out reads as reluctant.
//
// Set to 0ms the panel appears and vanishes with no transition, which is
// also what everyone with \`prefers-reduced-motion: reduce\` already gets —
// the whole animation sits inside that media query.`,
      },
    },
  },
};

/**
 * The curve, which matters more than the duration.
 *
 * `decelerate` arrives fast and settles; `accelerate` starts slow and leaves
 * quickly; `linear` does neither and looks mechanical next to them. Open two
 * in a row to feel the difference — it is not visible in a still frame.
 */
export const Easings: Story = {
  render: () => withPortal(
    ([
      ['system default', 'var(--df-motion-easing-enter)', 'var(--df-motion-easing-exit)'],
      ['linear', 'linear', 'linear'],
      ['back out', 'cubic-bezier(0.34, 1.56, 0.64, 1)', 'ease-in'],
    ] as const).map(([label, enter, exit]) => (
      <Trigger
        key={label}
        label={label}
        payload={{
          title: label,
          body: <p className="df-m-0">Open it a few times — a curve is a motion, not a frame.</p>,
          /* Slowed down so the curve is actually perceptible; at 200ms every
             easing looks much the same. */
          style: {
            '--df-overlay-duration-enter': '600ms',
            '--df-overlay-duration-exit': '450ms',
            '--df-overlay-easing-enter': enter,
            '--df-overlay-easing-exit': exit,
          } as React.CSSProperties,
        }}
      />
    )),
  ),
  parameters: {
    docs: {
      description: {
        story: 'Slowed to 600ms so the curve is perceptible — at the default 200ms every '
          + 'easing looks much the same. "Back out" overshoots slightly on the way in, which '
          + 'suits a confirmation and is wrong for an error.',
      },
      source: {
        code: `<DModal
  name="confirm"
  style={{
    '--df-overlay-easing-enter': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    '--df-overlay-easing-exit': 'ease-in',
  }}
>
  …
</DModal>`,
      },
    },
  },
};

/**
 * Every panel at once, which is the usual case.
 *
 * One modal with its own timing is rare. A product deciding its overlays are
 * slower than the default is not — and that is a stylesheet rule, not a prop
 * repeated at every call site.
 *
 * The scope has to be `:root`, not a wrapper class, and that is worth knowing
 * before you try the obvious thing: a panel opened through the portal is
 * appended to `document.body`, so it is NOT a DOM descendant of the provider
 * or of anything you wrapped around it. Custom properties inherit down the
 * DOM, not down the React tree, so a class on an ancestor of the provider
 * never reaches the panel.
 */
export const ScopedTiming: Story = {
  render: () => (
    <>
      <style>
        {`:root {
            --df-overlay-duration-enter: 500ms;
            --df-overlay-duration-exit: 350ms;
          }`}
      </style>
      {withPortal(
        <Trigger
          label="Open — timed from :root"
          payload={{
            title: 'Timed by the document',
            body: (
              <p className="df-m-0">
                Nothing on this panel sets a duration — the value comes from
                the document root, which every panel inherits wherever the
                portal puts it.
              </p>
            ),
          }}
        />,
      )}
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The panel sets nothing; `:root` does. A wrapper class would NOT work — '
          + 'a portalled panel is appended to `document.body`, so it is not a DOM '
          + 'descendant of whatever you wrapped around the provider.',
      },
      source: {
        code: `/* app.css */
:root {
  --df-overlay-duration-enter: 500ms;
  --df-overlay-duration-exit: 350ms;
}

/* Every DModal now uses that timing, and nothing at the call sites
   changed.

   :root rather than a wrapper class, because a panel opened through
   the portal is appended to document.body — it is NOT a DOM
   descendant of your provider, and custom properties inherit down
   the DOM rather than down the React tree. A class on an ancestor
   of the provider reaches the trigger and not the panel.

   To scope it narrower than the whole document, put the variables
   on the portal mount point — it IS an ancestor of the panel. Note
   that the provider creates that element itself and removes any
   existing one with the same id, so style it by id rather than by
   rendering your own: */
#portal {
  --df-overlay-duration-enter: 500ms;
}

/* Wider instead — the whole system, including the toast and the
   collapse — by moving the value the overlay points AT: */
:root {
  --df-duration-normal: 500ms;
}`,
      },
    },
  },
};

/**
 * What `prefers-reduced-motion` does to all of it.
 *
 * The entire transition block sits inside
 * `@media (prefers-reduced-motion: no-preference)`, so a reader who has asked
 * for less motion gets no animation at all — not a faster one. Every duration
 * above becomes irrelevant for them, which is the point.
 */
export const ReducedMotion: Story = {
  render: () => withPortal(
    <Trigger
      label="Open"
      payload={{
        title: 'Motion is opt-out at the OS level',
        body: (
          <p className="df-m-0">
            Turn on &ldquo;reduce motion&rdquo; in your system settings and reopen this:
            it appears and disappears with no transition, whatever the duration says.
          </p>
        ),
        style: {
          '--df-overlay-duration-enter': '900ms',
          '--df-overlay-duration-exit': '700ms',
        } as React.CSSProperties,
      }}
    />,
  ),
  parameters: {
    docs: {
      description: {
        story: 'This panel asks for 900ms. With "reduce motion" on it still appears '
          + 'instantly — the transitions are declared inside the media query rather than '
          + 'being shortened by it, so there is no duration a consumer can set that '
          + 'overrides a reader\'s preference.',
      },
      source: {
        code: `/* overlay.css — the whole animation is inside this query */
@media (prefers-reduced-motion: no-preference) {
  dialog.df-overlay { transition: … }
}

/* So a consumer CANNOT override a reader's preference by setting a
   duration: there is no transition to time. That is deliberate —
   shortening the animation instead would still move the panel. */`,
      },
    },
  },
};

/* --- stacking ---------------------------------------------------------- */

/**
 * Two at once, and the order they leave in.
 *
 * A big panel opens a small one from its own body. Both are real `<dialog>`s
 * in the browser's top layer, which is what makes this work without any
 * z-index: the top layer stacks in the order things were opened, so the second
 * one is above the first and the first is still visible behind it.
 *
 * Press Escape, or click outside. The browser sends it to the TOPMOST dialog
 * only, so the small one goes and the big one stays — and the portal pops the
 * entry that actually closed rather than assuming. Press Escape again for the
 * other.
 *
 * Worth noticing what is NOT here: no `z-index`, no manual focus management,
 * no counting of open panels. Each `<dialog>` makes everything behind it
 * inert, so the panel underneath is visible and not reachable, which is the
 * behaviour a nested modal needs and the hardest part to write by hand.
 */
export const Stacked: Story = story(
  () => withPortal(
    <Trigger
      label="Open a large modal"
      payload={{
        size: 'lg',
        title: 'The one underneath',
        body: (
          <p className="df-m-0">
            A large panel. The button below opens a small one on top of it.
          </p>
        ),
        withNestedTrigger: true,
      }}
    />,
  ),
  'Two panels open at once. The second is `size="sm"` over a `size="lg"`, both in the '
  + "browser's top layer — so the stacking order is the opening order and no `z-index` is "
  + 'involved. Escape closes only the topmost, because that is what the browser does with a '
  + 'stack of dialogs, and each one makes everything behind it inert.',
);

/* --- confirming from inside a modal ------------------------------------ */

/**
 * Asks before doing something, from inside an open panel.
 *
 * `useConfirmModal` renders through its own container rather than the portal
 * stack, so it sits above whatever is open without being part of it.
 */
function ConfirmFromModal() {
  const { closePortal } = useDPortalContext();
  const [result, setResult] = useState<string>('');

  const confirm = useConfirmModal({
    title: 'Discard the changes?',
    message: 'The form has unsaved edits. Closing now loses them.',
    confirmLabel: 'Discard',
    cancelLabel: 'Keep editing',
    confirmColor: 'danger',
    onConfirm: () => {
      setResult('discarded');
      closePortal();
    },
    onClose: () => setResult('kept'),
  });

  return (
    <div className="df-flex df-flex-col df-gap-3">
      <p className="df-m-0">
        A panel with unsaved work. Closing it should ask first — which is a
        confirm modal on top of this one.
      </p>
      <DInput label="Amount" defaultValue="1,250.00" />
      <div className="df-flex df-gap-2">
        <DButton text="Close with a confirmation" color="danger" onClick={confirm.open} />
        <DButton text="Close directly" variant="outline" onClick={() => closePortal()} />
      </div>
      {result && (
        <p className="df-m-0 df-text-muted df-fs-body-sm">
          Last answer:
          {' '}
          {result}
        </p>
      )}
    </div>
  );
}

/**
 * A modal that confirms before closing.
 *
 * Three layers of top-layer dialog, and the thing to watch is that each one
 * makes the one below inert: while the confirmation is up, the form behind it
 * cannot be tabbed into or read by a screen reader's browse mode.
 *
 * `useConfirmModal` has its own container (`DConfirmModalContainer`) rather
 * than going through the portal stack, which is why "confirm" can close the
 * panel that opened it without the two fighting over whose turn it is to pop.
 */
export const ConfirmBeforeClosing: Story = story(
  () => withPortal(
    <>
      {/*
        * `d-portal` is the node `DContextProvider` creates — the default
        * `portalName`. An id nothing creates makes `getElementById` return
        * null and the container render nothing, so the confirmation never
        * appears and the button looks dead. That is what a made-up id here
        * did.
        */}
      <DConfirmModalContainer nodeId="d-portal" />
      <Trigger
        label="Open a form"
        payload={{
          size: 'md',
          title: 'Edit the transfer',
          withFooter: false,
          body: <ConfirmFromModal />,
        }}
      />
    </>,
  ),
  'The confirmation is a third dialog above the panel that asked for it. Each `<dialog>` '
  + 'makes everything behind it inert, so the form cannot be tabbed into while the question '
  + 'is up — which is the part that is hard to get right by hand.',
);
