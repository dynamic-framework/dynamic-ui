import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { DContextProvider, useDPortalContext } from '../../src';
import type { PortalProps } from '../../src';
import DButton from '../../src/components/DButton';
import DInput from '../../src/components/DInput';
import DModal from '../../src/components/DModal/DModal';
import DConfirmModalContainer from '../../src/components/DConfirmModal/DConfirmModalContainer';
import useConfirmModal from '../../src/hooks/useConfirmModal';
import { CONTEXT_PROVIDER_CONFIG_MATERIAL } from '../config/constants';

import type { ModalSize } from '../../src/components/interface';

/**
 * Every story here opens the panel from a button.
 *
 * Not a stylistic choice. `DModal` is a real `<dialog>` opened with
 * `showModal()`, which puts it in the browser's TOP LAYER — above everything,
 * including the docs page it is embedded in. Rendering one inline, the way
 * these stories used to (`className="d-block"` inside a 400px box), covers the
 * page; rendering ten of them on one autodocs page covers it ten times over,
 * which reads as a page with no stories on it at all.
 *
 * It is also the usage the library actually documents: register the panel in
 * `DContextProvider.availablePortals` and open it with `openPortal`.
 */

type Payloads = {
  /** A second registered name, so two panels can be open at once. */
  nested: { title?: string };
  panel: {
    size?: ModalSize;
    centered?: boolean;
    scrollable?: boolean;
    fullScreen?: boolean;
    fullScreenFrom?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    staticBackdrop?: boolean;
    title?: string;
    /**
     * Body copy, as a STRING.
     *
     * Not a `ReactNode`, and that is the whole point. The payload crosses into
     * the portal's state and into the props of the element the docs page
     * serialises — and data survives both trips in a way a React element does
     * not. `docs.source.type` is `dynamic`, so Storybook stringifies the
     * rendered story tree, which means walking every element reachable from a
     * prop.
     *
     * One paragraph in a payload is survivable. The `Scrollable` story put
     * TWENTY-FOUR in, and the serialiser took the whole docs page from 53 MB to
     * 1.3 GB — until Chromium ran the renderer out of memory and killed the tab.
     * It reads as the browser hanging, and nothing points at a story.
     *
     * So the payload says WHAT to draw and the panel draws it.
     */
    body?: string;
    /** Filler paragraphs, for showing a body that scrolls. */
    paragraphs?: number;
    showCloseButton?: boolean;
    closeIcon?: string;
    actionPlacement?: 'start' | 'end' | 'center' | 'between' | 'fill';
    withHeader?: boolean;
    withFooter?: boolean;
    /*
     * Custom properties for the motion stories.
     *
     * The timing is CSS now, so this is how a single panel overrides it — the
     * same thing a consumer writes. It lands on the `<dialog>`, which is the
     * element the transition is declared on. This is what the old `transition`
     * prop and its `framer-motion` `Transition` object became.
     */
    style?: React.CSSProperties;
    /**
     * Renders the button that opens the second panel.
     *
     * A flag rather than the button itself in `body`. The payload crosses into
     * the portal's state, and data survives that trip in a way a React element
     * does not have to.
     */
    withNestedTrigger?: boolean;
    /** Renders the form that asks for a confirmation before closing. */
    withConfirmDemo?: boolean;
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
    <div className="d-flex flex-column gap-3">
      <p className="m-0">
        A panel with unsaved work. Closing it should ask first — which is a
        confirm modal on top of this one.
      </p>
      <DInput label="Amount" defaultValue="1,250.00" />
      <div className="d-flex gap-2">
        <DButton text="Close with a confirmation" color="danger" onClick={confirm.open} />
        <DButton text="Close directly" variant="outline" onClick={() => closePortal()} />
      </div>
      {result && (
        <p className="m-0 text-muted small">
          Last answer:
          {' '}
          {result}
        </p>
      )}
    </div>
  );
}

/**
 * A panel written the naive way, on purpose.
 *
 * It declares no `nativeDialog` flag and forwards no `onClose` to the `DModal`,
 * because a consumer writing their first panel would not. Both used to be
 * required and both failed in ways that pointed somewhere else: without the flag
 * the portal drew its own scrim on top of the dialog's `::backdrop`, and without
 * `onClose` the dialog closed itself while the stack kept the entry — so the
 * panel went, a sheet stayed, and the next click went into dismissing it instead
 * of doing what it was aimed at.
 *
 * `DModal` reports both from the inside now, so this shape works. The story
 * stays naive deliberately: it is the shape that has to keep working.
 */
function Panel({ name, payload }: PortalProps<Payloads['panel']>) {
  const { closePortal } = useDPortalContext();
  const {
    title = 'Do you want to reject the offer?',
    body = 'Modal body. Press Escape or click outside to close.',
    paragraphs = 0,
    showCloseButton = true,
    closeIcon,
    actionPlacement,
    withHeader = true,
    withFooter = true,
    withNestedTrigger = false,
    withConfirmDemo = false,
    ...modalProps
  } = payload;

  return (
    <DModal name={name} centered {...modalProps}>
      {withHeader && (
        <DModal.Header onClose={closePortal} showCloseButton={showCloseButton} icon={closeIcon}>
          <h5 className="fw-bold m-0">{title}</h5>
        </DModal.Header>
      )}
      <DModal.Body>
        {body && <p className="m-0">{body}</p>}
        {Array.from({ length: paragraphs }, (_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <p key={index}>
            {`Paragraph ${index + 1} — the header and the footer stay put while this scrolls.`}
          </p>
        ))}
        {withNestedTrigger && <OpenNested />}
        {withConfirmDemo && <ConfirmFromModal />}
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
 * A separate registration rather than the same one twice: the stack is keyed by
 * name and React keys the rendered panels by it too, so opening `panel` from
 * inside `panel` would collide with itself.
 */
function NestedPanel({ name, payload }: PortalProps<Payloads['nested']>) {
  const { closePortal } = useDPortalContext();
  return (
    <DModal name={name} centered size="sm">
      <DModal.Header onClose={closePortal} showCloseButton>
        <h5 className="fw-bold m-0">{payload.title ?? 'The one on top'}</h5>
      </DModal.Header>
      <DModal.Body>
        <p className="m-0">
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
      <div className="d-flex flex-wrap gap-3 align-items-center p-4">
        {children}
      </div>
    </DContextProvider>
  );
}

const meta = {
  title: 'Design System/Components/Modal',
  component: DModal,
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
    scrollable: {
      control: 'boolean',
      table: { category: 'Behavior' },
    },
    centered: {
      control: 'boolean',
      table: { category: 'Appearance' },
    },
    fullScreen: {
      control: 'boolean',
      table: { category: 'Appearance' },
    },
    fullScreenFrom: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'xxl'],
      table: { category: 'Appearance' },
    },
    size: {
      control: 'radio',
      options: ['sm', 'lg', 'xl'],
      table: { category: 'Appearance' },
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
    className: { control: 'text', table: { category: 'Appearance' } },
    style: { control: 'object', table: { category: 'Appearance' } },
  },
} satisfies Meta<typeof DModal>;

export default meta;
type Story = StoryObj<typeof meta>;

const story = (
  render: () => React.JSX.Element,
  description: string,
): Story => ({
  render: () => render(),
  parameters: { docs: { description: { story: description } } },
});

/* --- the usage pattern -------------------------------------------------- */

export const RealUsageWithOpenPortal: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The recommended pattern: `DModal` is registered in '
          + '`DContextProvider.availablePortals` and opened imperatively with `openPortal` — '
          + '**not** rendered directly as a conditional JSX element. The panel reports back to '
          + 'the portal on its own, so a panel written this way needs no `nativeDialog` flag and '
          + 'no `onClose` wiring.',
      },
      source: {
        code: `type ModalPayloads = {
  confirm: { description: string };
};

function ConfirmModal({ name, payload }: PortalProps<ModalPayloads['confirm']>) {
  const { closePortal } = useDPortalContext();
  return (
    <DModal name={name} centered>
      <DModal.Header onClose={closePortal} showCloseButton>
        <h5 className="fw-bold m-0">Do you want to reject the offer?</h5>
      </DModal.Header>
      <DModal.Body>
        <p className="m-0">{payload.description}</p>
      </DModal.Body>
      <DModal.Footer>
        <DButton text="Cancel" color="secondary" variant="outline" onClick={() => closePortal()} />
        <DButton text="Ok" onClick={() => closePortal()} />
      </DModal.Footer>
    </DModal>
  );
}

function App() {
  return (
    <DContextProvider<ModalPayloads> availablePortals={{ confirm: ConfirmModal }}>
      <OpenConfirmModalButton />
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
      label="Open Modal"
      payload={{ body: 'Payload passed via openPortal.' }}
    />,
  ),
};

/* --- the component surface ---------------------------------------------- */

export const Sizes: Story = story(
  () => withPortal(
    <>
      <Trigger label="default" payload={{ title: 'Default width' }} />
      {(['sm', 'lg', 'xl'] as const).map((size: ModalSize) => (
        <Trigger
          key={size}
          label={`size="${size}"`}
          payload={{ size, title: `modal-${size}` }}
        />
      ))}
    </>,
  ),
  'The three Bootstrap width modifiers plus the default. `size` lands on `.modal-dialog` as '
  + '`modal-sm` / `modal-lg` / `modal-xl`, exactly as before — the `<dialog>` wraps that markup '
  + 'rather than replacing it.',
);

export const Centered: Story = story(
  () => withPortal(
    <>
      <Trigger label="centered" payload={{ centered: true, title: 'modal-dialog-centered' }} />
      <Trigger label="top aligned" payload={{ centered: false, title: 'No centering' }} />
    </>,
  ),
  '`centered` adds `.modal-dialog-centered`. Without it the panel sits near the top of the '
  + 'viewport, which is Bootstrap\'s default.',
);

export const Scrollable: Story = story(
  () => withPortal(
    <Trigger
      label="Open a long panel"
      payload={{
        scrollable: true,
        title: 'A body that scrolls',
        body: '',
        paragraphs: 24,
      }}
    />,
  ),
  '`scrollable` adds `.modal-dialog-scrollable`, which keeps the header and footer fixed and '
  + 'scrolls the body. The page behind does not scroll either way: `showModal()` makes it inert '
  + 'and `useDisableBodyScrollEffect` locks it.',
);

export const FullScreen: Story = story(
  () => withPortal(
    <>
      <Trigger label="fullScreen" payload={{ fullScreen: true, title: 'modal-fullscreen' }} />
      <Trigger
        label='fullScreen below "md"'
        payload={{
          fullScreen: true,
          fullScreenFrom: 'md',
          title: 'modal-fullscreen-md-down',
          body: 'Narrow the viewport below 768px and reopen it.',
        }}
      />
    </>,
  ),
  '`fullScreen` on its own covers the viewport at every width; with `fullScreenFrom` it only '
  + 'does so below that breakpoint.',
);

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
  'Five values, and `DOffcanvas.Footer` now takes the same five. It used to accept three while '
  + 'this one accepted four, for one element and one set of rules — `center` and `between` were '
  + 'missing from one side or the other.',
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
      <Trigger
        label="Close button only"
        payload={{ title: '', body: 'An empty header pushes the close button to the end.' }}
      />
    </>,
  ),
  'Each sub-component is optional. A header holding nothing but the close button aligns it to '
  + 'the end, through `:has(.d-modal-close:only-child)`.',
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
  'Icon family configured globally on `DContextProvider`. The same values can be set per header '
  + 'with `iconFamilyClass` / `iconFamilyPrefix` / `iconMaterialStyle`.',
);

export const StaticBackdrop: Story = story(
  () => withPortal(
    <Trigger
      label="Open — refuses Escape"
      payload={{
        staticBackdrop: true,
        title: 'Dismissed deliberately only',
        body: 'Escape and a click outside do nothing. Use the close button or Cancel.',
      }}
    />,
  ),
  'The dialog\'s `cancel` event is the only chance to veto Escape — `close` is after the fact — '
  + 'and the outside click is ignored. This replaced `data-bs-backdrop="static"`, which was an '
  + 'instruction to Bootstrap\'s JS that has never been on the page here, so it did nothing at all.',
);

/* --- motion -------------------------------------------------------------- */

/**
 * The timing, at four speeds.
 *
 * Open each one and watch it LEAVE — the enter is the same curve in all of them,
 * and the difference is easiest to see on the way out.
 *
 * There is no `duration` prop, and no `transition` prop any more. A prop would
 * mean JavaScript owning a value CSS applies: the component would have to write
 * an inline style, which is exactly what removing the animation library got rid
 * of. And a design system with a duration prop per component is a design system
 * with as many ways to be inconsistent as it has components.
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
          title: `enter ${enter}, exit ${exit}`,
          body: 'Press Escape or click outside, and watch how it leaves.',
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
        story: 'Four speeds on one component. The exit is shorter than the enter in each pair, '
          + 'which is the default: 150ms against 300 for the enter. Leaving should get out of '
          + 'the way.',
      },
      source: {
        code: `<DModal
  name="confirm"
  style={{
    '--bs-overlay-duration-enter': '600ms',
    '--bs-overlay-duration-exit': '400ms',
  }}
>
  …
</DModal>

// These land on the <dialog>, which is the element the transition is declared
// on. For a panel that is NOT a dialog, the portal's scrim is a SIBLING of the
// panel rather than an ancestor, so it does not inherit a per-panel override —
// set those on the portal mount point or on :root.
//
// Four custom properties control the whole animation:
//
//   --bs-overlay-duration-enter   how long it takes to arrive
//   --bs-overlay-duration-exit    how long it takes to leave
//   --bs-overlay-easing-enter     its curve on the way in
//   --bs-overlay-easing-exit      its curve on the way out
//
// They are separate because leaving is not arriving played backwards. A panel
// that decelerates on the way out reads as reluctant.
//
// Set to 0ms the panel appears and vanishes with no transition, which is also
// what everyone with \`prefers-reduced-motion: reduce\` already gets — the whole
// animation sits inside that media query.`,
      },
    },
  },
};

/**
 * The curve, which matters more than the duration.
 *
 * `decelerate` arrives fast and settles; `accelerate` starts slow and leaves
 * quickly; `linear` does neither and looks mechanical next to them. Open two in
 * a row to feel the difference — it is not visible in a still frame.
 */
export const Easings: Story = {
  render: () => withPortal(
    ([
      ['system default', 'cubic-bezier(0, 0, 0, 1)', 'cubic-bezier(.3, 0, 1, 1)'],
      ['linear', 'linear', 'linear'],
      ['back out', 'cubic-bezier(0.34, 1.56, 0.64, 1)', 'ease-in'],
    ] as const).map(([label, enter, exit]) => (
      <Trigger
        key={label}
        label={label}
        payload={{
          title: label,
          body: 'Open it a few times — a curve is a motion, not a frame.',
          /* Slowed down so the curve is actually perceptible; at 300ms every
             easing looks much the same. */
          style: {
            '--bs-overlay-duration-enter': '600ms',
            '--bs-overlay-duration-exit': '450ms',
            '--bs-overlay-easing-enter': enter,
            '--bs-overlay-easing-exit': exit,
          } as React.CSSProperties,
        }}
      />
    )),
  ),
  parameters: {
    docs: {
      description: {
        story: 'Slowed to 600ms so the curve is perceptible — at the default every easing looks '
          + 'much the same. "Back out" overshoots slightly on the way in, which suits a '
          + 'confirmation and is wrong for an error.',
      },
      source: {
        code: `<DModal
  name="confirm"
  style={{
    '--bs-overlay-easing-enter': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    '--bs-overlay-easing-exit': 'ease-in',
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
 * appended to `document.body`, so it is NOT a DOM descendant of the provider or
 * of anything you wrapped around it. Custom properties inherit down the DOM, not
 * down the React tree.
 */
export const ScopedTiming: Story = {
  render: () => (
    <>
      <style>
        {`:root {
            --bs-overlay-duration-enter: 500ms;
            --bs-overlay-duration-exit: 350ms;
          }`}
      </style>
      {withPortal(
        <Trigger
          label="Open — timed from :root"
          payload={{
            title: 'Timed by the document',
            body: 'Nothing on this panel sets a duration — the value comes from the '
              + 'document root, which every panel inherits wherever the portal puts it.',
          }}
        />,
      )}
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The panel sets nothing; `:root` does. A wrapper class would NOT work — a '
          + 'portalled panel is appended to `document.body`, so it is not a DOM descendant of '
          + 'whatever you wrapped around the provider.',
      },
      source: {
        code: `/* app.scss */
:root {
  --bs-overlay-duration-enter: 500ms;
  --bs-overlay-duration-exit: 350ms;
}

/* Every DModal and DOffcanvas now uses that timing, and nothing at the
   call sites changed.

   :root rather than a wrapper class, because a panel opened through the
   portal is appended to document.body — it is NOT a DOM descendant of
   your provider, and custom properties inherit down the DOM rather than
   down the React tree. A class on an ancestor of the provider reaches
   the trigger and not the panel.

   To scope it narrower than the whole document, put the variables on the
   portal mount point — it IS an ancestor of the panel. The provider
   creates that element itself and removes any existing one with the same
   id, so style it by id rather than rendering your own: */
#d-portal {
  --bs-overlay-duration-enter: 500ms;
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
        body: 'Turn on \u201creduce motion\u201d in your system settings and reopen this: '
          + 'it appears and disappears with no transition, whatever the duration says.',
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
      source: {
        code: `/* _d-modal.scss — the whole animation is inside this query */
@media (prefers-reduced-motion: no-preference) {
  dialog.modal { transition: … }
}

/* So a consumer CANNOT override a reader's preference by setting a
   duration: there is no transition to time. That is deliberate —
   shortening the animation instead would still move the panel. */`,
      },
    },
  },
};

/* --- stacking ------------------------------------------------------------ */

/**
 * Two at once, and the order they leave in.
 *
 * A big panel opens a small one from its own body. Both are real `<dialog>`s in
 * the browser's top layer, which is what makes this work without any `z-index`:
 * the top layer stacks in the order things were opened.
 *
 * Press Escape, or click outside. The browser sends it to the TOPMOST dialog
 * only, so the small one goes and the big one stays — and the portal pops the
 * entry that actually closed rather than assuming.
 *
 * Worth noticing what is NOT here: no `z-index`, no manual focus management, no
 * counting of open panels. Each `<dialog>` makes everything behind it inert, so
 * the panel underneath is visible and not reachable — which is the behaviour a
 * nested modal needs and the hardest part to write by hand.
 */
export const Stacked: Story = story(
  () => withPortal(
    <Trigger
      label="Open a large modal"
      payload={{
        size: 'lg',
        title: 'The one underneath',
        body: 'A large panel. The button below opens a small one on top of it.',
        withNestedTrigger: true,
      }}
    />,
  ),
  'Two panels open at once, both in the browser\'s top layer — so the stacking order is the '
  + 'opening order and no `z-index` is involved. This is what replaced `--bs-modal-zindex: '
  + '$zindex-modal + 10` on the confirm modal.',
);

/* --- confirming from inside a modal -------------------------------------- */

export const ConfirmBeforeClosing: Story = story(
  () => withPortal(
    <>
      {/*
        * `d-portal` is the node `DContextProvider` creates — the default
        * `portalName`. An id nothing creates makes `getElementById` return null
        * and the container render nothing, so the confirmation never appears and
        * the button looks dead.
        */}
      <DConfirmModalContainer nodeId="d-portal" />
      <Trigger
        label="Open a form"
        payload={{
          title: 'Edit the transfer',
          withFooter: false,
          body: '',
          withConfirmDemo: true,
        }}
      />
    </>,
  ),
  'The confirmation is a third dialog above the panel that asked for it. Each `<dialog>` makes '
  + 'everything behind it inert, so the form cannot be tabbed into while the question is up — '
  + 'which is the part that is hard to get right by hand.',
);
