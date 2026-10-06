/// <reference types="@testing-library/jest-dom" />

import { useEffect, useRef } from 'react';

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { DPortalContextProvider, useDPortalContext } from './DPortalContext';
import DModal from '../components/DModal';

/**
 * The portal that puts a modal or an offcanvas on the page.
 *
 * Three names in here were Bootstrap's and were never ported, and all three
 * failed silently:
 *
 * - the scrim was `.backdrop`, which no stylesheet defines, so a modal
 *   rendered with no visible backdrop;
 * - the panel was looked for as `.portal`, which is on nothing, so the
 *   dismiss-on-outside-click never ran — and neither did Escape, which goes
 *   through the same function;
 * - a static backdrop was read from `data-bs-backdrop`, while the components
 *   emit `data-static-backdrop`, so it closed like any other.
 *
 * None of it could be caught by the stylesheet checks: `css:usage` only looks
 * at `df-`-prefixed classes, and the migration audit only flags names that
 * exist in the 2.x Sass tree — `.backdrop` and `.portal` are in neither.
 */

type Payload = { isStatic: boolean };

/** A stand-in for DModal: the same root class and state attribute. */
function Panel({ payload }: { payload: Payload }) {
  return (
    <div
      className="df-overlay"
      data-placement="center"
      {...payload.isStatic && { 'data-static-backdrop': '' }}
    >
      <button type="button">Inside</button>
    </div>
  );
}

function Opener({ isStatic }: Payload) {
  const { openPortal } = useDPortalContext<{ panel: Payload }>();
  return (
    <button type="button" onClick={() => openPortal('panel', { isStatic })}>
      Open
    </button>
  );
}

function setup(isStatic = false) {
  // The provider needs its mount point to exist, the same as on a real page.
  const mount = document.createElement('div');
  mount.id = 'test-portal';
  document.body.appendChild(mount);

  return render(
    <DPortalContextProvider portalName="test-portal" availablePortals={{ panel: Panel }}>
      <Opener isStatic={isStatic} />
    </DPortalContextProvider>,
  );
}

/** Longer than the exit animation: 150ms of fade after a 300ms delay. */
const settled = () => new Promise((resolve) => { setTimeout(resolve, 600); });

/**
 * A panel that is a real `<dialog>`, the way `DModal` and `DModal` are.
 *
 * `nativeDialog` is what tells the portal the browser is managing it.
 */
function NativePanel({ onClose }: { onClose?: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => { ref.current?.showModal(); }, []);
  return (
    <dialog ref={ref} className="df-overlay" data-placement="center" onClose={onClose}>
      <button type="button">Inside</button>
    </dialog>
  );
}
NativePanel.nativeDialog = true;

function NativeOpener() {
  const { openPortal } = useDPortalContext<{ panel: Payload }>();
  return (
    <button type="button" onClick={() => openPortal('panel', { isStatic: false })}>
      Open
    </button>
  );
}

function renderNative() {
  const mount = document.createElement('div');
  mount.id = 'native-portal';
  document.body.appendChild(mount);

  return render(
    <DPortalContextProvider portalName="native-portal" availablePortals={{ panel: NativePanel }}>
      <NativeOpener />
    </DPortalContextProvider>,
  );
}

/**
 * The scrim element, which is now always in the document.
 *
 * It used to be mounted only while a panel was open, and that is precisely why
 * it needed `framer-motion`: an element that unmounts has no previous frame to
 * animate from, so `AnimatePresence` had to hold it there for the exit. Kept in
 * the document and switched with `data-open`, the exit is an ordinary CSS
 * transition — so these assertions moved from "is it there" to "is it on".
 */
const backdrop = () => document.querySelector('.df-backdrop');
const scrimIsOn = () => backdrop()?.hasAttribute('data-open') ?? false;
const panel = () => document.querySelector('.df-overlay');

describe('DPortalContext', () => {
  it('should render the scrim with the class the stylesheet defines', async () => {
    const user = userEvent.setup();
    setup();

    await user.click(screen.getByRole('button', { name: 'Open' }));
    expect(backdrop()).toBeInTheDocument();
    expect(scrimIsOn()).toBe(true);
  });

  /*
   * Not even in the document until something needs it.
   *
   * The scrim has to OUTLIVE its panel so the fade-out has a previous frame to
   * leave from, and the first version read that as "always mounted" — a
   * `position: fixed` element covering the viewport, per provider, whether or
   * not it would ever be used. A Storybook docs page mounts one provider per
   * story: seventeen full-viewport compositing layers over a document that
   * needed none, which made the page unusable.
   *
   * jsdom composites nothing, so the cost is invisible here; the COUNT is not.
   */
  it('should not mount the scrim until something needs it', () => {
    setup();
    expect(backdrop()).not.toBeInTheDocument();
  });

  /*
   * And once mounted it stays, because an element that unmounts has no
   * previous frame to animate from — which is the whole reason this is a
   * persistent element rather than one rendered alongside the panel.
   */
  it('should keep the scrim after the panel has gone, so it can fade', async () => {
    const user = userEvent.setup();
    setup();

    await user.click(screen.getByRole('button', { name: 'Open' }));
    await user.click(backdrop()!);
    await waitFor(() => expect(panel()).not.toBeInTheDocument());

    expect(backdrop()).toBeInTheDocument();
    expect(scrimIsOn()).toBe(false);
  });

  /**
   * To 1, not to 0.5: `--df-overlay-backdrop-color` already carries 50% alpha,
   * so animating the opacity to 0.5 as well multiplied the two into a 25%
   * scrim — most of why this read as having no backdrop.
   */
  it('should not dim the scrim a second time with opacity', async () => {
    const user = userEvent.setup();
    setup();

    await user.click(screen.getByRole('button', { name: 'Open' }));
    expect(backdrop()).not.toHaveStyle({ opacity: '0.5' });
  });

  it('should close on a click on the scrim', async () => {
    const user = userEvent.setup();
    setup();

    await user.click(screen.getByRole('button', { name: 'Open' }));
    expect(panel()).toBeInTheDocument();

    await user.click(backdrop()!);
    // `AnimatePresence` keeps both mounted for the length of the exit
    // animation, so closing is observable only once that has run.
    await waitFor(() => expect(panel()).not.toBeInTheDocument());
  });

  it('should close on Escape', async () => {
    const user = userEvent.setup();
    setup();

    await user.click(screen.getByRole('button', { name: 'Open' }));
    await user.keyboard('{Escape}');
    await waitFor(() => expect(panel()).not.toBeInTheDocument());
  });

  /**
   * Asserted after a fixed wait, not immediately.
   *
   * `AnimatePresence` keeps the panel mounted for the length of its exit
   * animation, so "still there" right after the click is true whether the
   * close fired or not — and this test passed while the attribute was being
   * read under the wrong name. You cannot `waitFor` the absence of a change;
   * the only honest check is to let the animation's worth of time pass and
   * then look.
   */
  it('should leave a static backdrop alone, both ways out', async () => {
    const user = userEvent.setup();
    setup(true);

    await user.click(screen.getByRole('button', { name: 'Open' }));

    await user.click(backdrop()!);
    await settled();
    expect(panel()).toBeInTheDocument();

    await user.keyboard('{Escape}');
    await settled();
    expect(panel()).toBeInTheDocument();
  });

  /**
   * A panel that opens itself must get NO scrim from the portal.
   *
   * `<dialog>` paints its own through `::backdrop`, so a second one stacks two
   * 50% scrims into something much darker than the design says — and, worse,
   * the portal's one keeps intercepting clicks after the dialog has closed, so
   * dismissing takes two presses.
   */
  it('should render no scrim of its own for a native dialog', async () => {
    const user = userEvent.setup();
    renderNative();

    await user.click(screen.getByRole('button', { name: 'Open' }));
    expect(document.querySelector('.df-overlay')).toBeInTheDocument();
    /* The element is there and OFF: no second 50% layer, nothing over the
       page to swallow the next click. */
    expect(scrimIsOn()).toBe(false);
  });

  /**
   * A dialog can close itself, and the portal has no way to know. Without the
   * `onClose` it is handed, the stack keeps an entry for a panel that is gone
   * and the element stays mounted — still in the top layer, still painting its
   * backdrop, still swallowing the next click.
   */
  it('should pop the stack when a native dialog closes itself', async () => {
    const user = userEvent.setup();
    renderNative();

    await user.click(screen.getByRole('button', { name: 'Open' }));
    const dialog = document.querySelector('.df-overlay') as HTMLDialogElement;

    dialog.close();
    await waitFor(() => expect(document.querySelector('.df-overlay')).not.toBeInTheDocument());
  });

  /**
   * The scrim must not outlive the panel.
   *
   * It had a 300ms delay on its exit, left over from when the panel was itself
   * an animated element that had to finish first. The scrim therefore stayed
   * mounted for 450ms after closing — covering the page and swallowing the next
   * click, which read as the modal needing two presses to dismiss.
   */
  it('should take the scrim away with the panel', async () => {
    const user = userEvent.setup();
    setup();

    await user.click(screen.getByRole('button', { name: 'Open' }));
    expect(scrimIsOn()).toBe(true);

    await user.click(backdrop()!);
    await waitFor(() => expect(panel()).not.toBeInTheDocument());

    /*
     * Off the moment the panel goes, not 450ms later.
     *
     * The scrim used to carry a 300ms exit delay left over from when the panel
     * was a `framer-motion` element that had to animate away first — so it
     * stayed over the page after the close and swallowed the next click, which
     * read as the modal needing two presses to dismiss.
     */
    expect(scrimIsOn()).toBe(false);
  });

  /** A click inside the panel is not a click outside it. */
  it('should stay open when something inside it is clicked', async () => {
    const user = userEvent.setup();
    setup();

    await user.click(screen.getByRole('button', { name: 'Open' }));
    await user.click(screen.getByRole('button', { name: 'Inside' }));
    expect(panel()).toBeInTheDocument();
  });
});

/**
 * Where a portalled panel ends up, and what that means for theming.
 *
 * The panel is appended to `document.body`, so it is NOT a DOM descendant of
 * the provider or of anything wrapped around it. Custom properties inherit
 * down the DOM and not down the React tree, which means a scope class on an
 * ancestor of the provider reaches the trigger and never the panel.
 *
 * This is here because a documentation example claimed the opposite. A
 * `.my-app { --df-overlay-duration-enter: … }` wrapper looks exactly like it
 * should work, and the failure is silent — the panel just keeps the default.
 */
describe('the portal mount point', () => {
  it('should put the panel outside anything wrapped around the provider', async () => {
    const user = userEvent.setup();
    const mount = document.createElement('div');
    mount.id = 'scope-portal';
    document.body.appendChild(mount);

    render(
      <div className="theme-scope">
        <DPortalContextProvider portalName="scope-portal" availablePortals={{ panel: Panel }}>
          <Opener isStatic={false} />
        </DPortalContextProvider>
      </div>,
    );

    await user.click(screen.getByRole('button', { name: 'Open' }));

    expect(panel()).toBeInTheDocument();
    expect(panel()!.closest('.theme-scope')).toBeNull();
  });

  /*
   * The mount point IS an ancestor, so that is the narrow scope that works —
   * and it is what the modal's theming story documents.
   *
   * Asserted on the id rather than on a node this test created: `usePortal`
   * removes any existing element with that id and appends its own, so a
   * pre-made div is not the element the panel ends up in. Worth knowing
   * before you try to style a mount point you rendered yourself.
   */
  it('should put the panel inside its own mount point', async () => {
    const user = userEvent.setup();

    render(
      <DPortalContextProvider portalName="inside-portal" availablePortals={{ panel: Panel }}>
        <Opener isStatic={false} />
      </DPortalContextProvider>,
    );

    await user.click(screen.getByRole('button', { name: 'Open' }));

    const host = panel()!.closest('#inside-portal');
    expect(host).toBeInTheDocument();
    expect(host).toHaveClass('d-portal');
    expect(host!.parentElement).toBe(document.body);
  });
});

/**
 * A panel that forgets the contract.
 *
 * Registering a panel used to carry two obligations nobody enforced: set
 * `Component.nativeDialog = true` if it renders a `DModal`, and forward the
 * `onClose` the portal passes down to that `DModal`. The library's own stories
 * did neither, and the symptoms did not point at the cause:
 *
 * - without the flag, the portal drew its scrim ON TOP of the dialog's
 *   `::backdrop` — two stacked 50% layers;
 * - without `onClose`, the dialog closed itself for Escape and for an outside
 *   click and nothing popped the stack, so the portal kept rendering the
 *   closed panel and its scrim. The reader saw the modal go and a sheet stay,
 *   and had to click a second time.
 *
 * `DModal` now reports both from the inside, so a panel written the naive way
 * works.
 */
describe('a panel that declares nothing', () => {
  /** Exactly the shape the stories had: no flag, no forwarded `onClose`. */
  function NaivePanel({ name }: { name: string }) {
    return (
      <DModal name={name}>
        <DModal.Body>body</DModal.Body>
      </DModal>
    );
  }

  function NaiveOpener() {
    const { openPortal } = useDPortalContext<{ panel: Record<string, never> }>();
    return (
      <button type="button" onClick={() => openPortal('panel', {})}>Open</button>
    );
  }

  const renderNaive = () => {
    const mount = document.createElement('div');
    mount.id = 'naive-portal';
    document.body.appendChild(mount);

    return render(
      <DPortalContextProvider portalName="naive-portal" availablePortals={{ panel: NaivePanel }}>
        <NaiveOpener />
      </DPortalContextProvider>,
    );
  };

  it('should draw no scrim of its own, flag or no flag', async () => {
    const user = userEvent.setup();
    renderNaive();

    await user.click(screen.getByRole('button', { name: 'Open' }));

    expect(document.querySelector('dialog')).toBeInTheDocument();
    expect(document.querySelector('.df-backdrop')).not.toHaveAttribute('data-open');
  });

  /*
   * The stack has to empty when the dialog closes itself. Left behind, the
   * portal keeps the entry and the scrim decision keeps answering "something
   * is open".
   */
  it('should pop the stack when the dialog closes itself', async () => {
    const user = userEvent.setup();
    renderNaive();

    await user.click(screen.getByRole('button', { name: 'Open' }));
    const dialog = document.querySelector('dialog') as HTMLDialogElement;

    dialog.close();
    await waitFor(() => expect(document.querySelector('dialog')).not.toBeInTheDocument());
    expect(document.querySelector('.df-backdrop')).not.toHaveAttribute('data-open');
  });

  /* And a `DModal` on its own, with no portal anywhere, must still render. */
  it('should work with no portal at all', () => {
    expect(() => render(
      <DModal name="standalone"><DModal.Body>x</DModal.Body></DModal>,
    )).not.toThrow();
  });
});

/**
 * Two panels open at once.
 *
 * The stories show a large modal opening a small one, and the claim they make
 * is that closing the top one leaves the other alone. That is worth a test
 * because `closePortal` pops the TOP of the stack — correct when the top is
 * what closed, and wrong the moment it is not.
 */
describe('a stack of two', () => {
  function Outer({ name }: { name: string }) {
    const { openPortal } = useDPortalContext<{ inner: Record<string, never> }>();
    return (
      <DModal name={name}>
        <DModal.Body>
          <button type="button" onClick={() => openPortal('inner', {})}>Open inner</button>
        </DModal.Body>
      </DModal>
    );
  }

  function Inner({ name }: { name: string }) {
    return <DModal name={name}><DModal.Body>inner body</DModal.Body></DModal>;
  }

  function StackOpener() {
    const { openPortal } = useDPortalContext<{ outer: Record<string, never> }>();
    return <button type="button" onClick={() => openPortal('outer', {})}>Open outer</button>;
  }

  const renderStack = () => {
    const mount = document.createElement('div');
    mount.id = 'stack-portal';
    document.body.appendChild(mount);

    return render(
      <DPortalContextProvider
        portalName="stack-portal"
        availablePortals={{ outer: Outer, inner: Inner }}
      >
        <StackOpener />
      </DPortalContextProvider>,
    );
  };

  const openBoth = async (user: ReturnType<typeof userEvent.setup>) => {
    await user.click(screen.getByRole('button', { name: 'Open outer' }));
    await user.click(screen.getByRole('button', { name: 'Open inner' }));
  };

  it('should hold both at once', async () => {
    const user = userEvent.setup();
    renderStack();
    await openBoth(user);

    expect(document.querySelectorAll('dialog')).toHaveLength(2);
  });

  /* The one underneath stays. Popping the wrong entry would take it instead,
     and the symptom — the panel you were reading vanishing — points nowhere
     near the cause. */
  it('should leave the one underneath when the top closes', async () => {
    const user = userEvent.setup();
    renderStack();
    await openBoth(user);

    const dialogs = document.querySelectorAll('dialog');
    dialogs[dialogs.length - 1].close();

    await waitFor(() => expect(document.querySelectorAll('dialog')).toHaveLength(1));
    expect(screen.getByRole('button', { name: 'Open inner' })).toBeInTheDocument();
  });

  it('should close the second one too', async () => {
    const user = userEvent.setup();
    renderStack();
    await openBoth(user);

    const close = () => {
      const open = document.querySelectorAll('dialog');
      open[open.length - 1].close();
    };

    close();
    await waitFor(() => expect(document.querySelectorAll('dialog')).toHaveLength(1));
    close();
    await waitFor(() => expect(document.querySelectorAll('dialog')).toHaveLength(0));
  });

  /* Neither panel paints the portal's scrim, however many are open. */
  it('should draw no scrim of its own for either', async () => {
    const user = userEvent.setup();
    renderStack();
    await openBoth(user);

    expect(document.querySelector('.df-backdrop')).not.toHaveAttribute('data-open');
  });

  /*
   * The one that froze a browser.
   *
   * The report was a COUNT, and it started as a boolean — so closing the inner
   * panel set it false while the outer was still open and still a `<dialog>`.
   * The portal then switched its own machinery back on underneath a live
   * dialog: its scrim over the panel, its click-outside handler closing an
   * extra entry, and — the one that actually hung — its Tab trap calling
   * `focus()` against the browser's own focus trap, two pieces of code moving
   * focus at each other.
   *
   * jsdom stubs `<dialog>`, so it has no native focus trap to fight and cannot
   * reproduce the freeze. What it CAN check is the state that caused it.
   */
  it('should stay hands-off while the outer panel is still open', async () => {
    const user = userEvent.setup();
    renderStack();
    await openBoth(user);

    const dialogs = document.querySelectorAll('dialog');
    dialogs[dialogs.length - 1].close();
    await waitFor(() => expect(document.querySelectorAll('dialog')).toHaveLength(1));

    /* Still one dialog open, so the portal must still be drawing nothing. */
    expect(document.querySelector('.df-backdrop')).not.toHaveAttribute('data-open');
  });

  /* And hands ON again once the last one has gone. */
  it('should take its machinery back when the stack empties', async () => {
    const user = userEvent.setup();
    renderStack();
    await openBoth(user);

    const close = () => {
      const open = document.querySelectorAll('dialog');
      open[open.length - 1].close();
    };
    close();
    await waitFor(() => expect(document.querySelectorAll('dialog')).toHaveLength(1));
    close();
    await waitFor(() => expect(document.querySelectorAll('dialog')).toHaveLength(0));

    expect(document.querySelector('.df-backdrop')).not.toHaveAttribute('data-open');
  });
});

/**
 * The portal keeping its hands off a `<dialog>`.
 *
 * This is the fix for the freeze, and it is not the scrim. A native dialog
 * traps focus, handles Escape and makes the page inert; the portal has its own
 * version of each, written for panels that are not dialogs. Run both and they
 * do not add up — the Tab trap calls `focus()` against the browser's focus
 * trap, which is two pieces of code moving focus at each other.
 *
 * It used to key off a static `Component.nativeDialog` flag that whoever
 * REGISTERED the panel had to set, and the library's own stories did not set
 * it. `DModal` reports it from the inside now, so a panel written the naive
 * way gets it right.
 *
 * jsdom stubs `<dialog>` — no native focus trap, no self-closing on Escape —
 * so the freeze itself is not reproducible here. What is checkable is that the
 * portal does nothing, which is the whole of the fix.
 */
describe('hands off a native dialog', () => {
  function Naive({ name }: { name: string }) {
    return (
      <DModal name={name}>
        <DModal.Body><button type="button">inside</button></DModal.Body>
      </DModal>
    );
  }

  function NaiveOpen() {
    const { openPortal } = useDPortalContext<{ panel: Record<string, never> }>();
    return <button type="button" onClick={() => openPortal('panel', {})}>Open</button>;
  }

  const setupNaive = () => {
    const mount = document.createElement('div');
    mount.id = 'hands-off-portal';
    document.body.appendChild(mount);

    return render(
      <DPortalContextProvider portalName="hands-off-portal" availablePortals={{ panel: Naive }}>
        <NaiveOpen />
      </DPortalContextProvider>,
    );
  };

  /*
   * The dialog closes itself for Escape. If the portal ALSO handles it, two
   * entries come off the stack for one press — which with a stack of two
   * closes both.
   */
  it('should not pop the stack itself on Escape', async () => {
    const user = userEvent.setup();
    setupNaive();

    await user.click(screen.getByRole('button', { name: 'Open' }));
    expect(document.querySelector('dialog')).toBeInTheDocument();

    /* jsdom's stub does not close on Escape, so anything that disappears here
       was the portal doing work that is not its own. */
    await user.keyboard('{Escape}');
    await settled();
    expect(document.querySelector('dialog')).toBeInTheDocument();
  });

  /* Same for a click that lands outside the panel. */
  it('should not pop the stack itself on an outside click', async () => {
    const user = userEvent.setup();
    setupNaive();

    await user.click(screen.getByRole('button', { name: 'Open' }));
    await user.click(document.body);
    await settled();

    expect(document.querySelector('dialog')).toBeInTheDocument();
  });

  /* And Tab must not be intercepted: the browser's own trap owns it. */
  it('should not intercept Tab', async () => {
    const user = userEvent.setup();
    setupNaive();

    await user.click(screen.getByRole('button', { name: 'Open' }));

    const inside = screen.getByRole('button', { name: 'inside' });
    inside.focus();

    let defaultPrevented = false;
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') defaultPrevented = event.defaultPrevented;
    });

    await user.tab();
    expect(defaultPrevented).toBe(false);
  });
});

/**
 * A documentation page, which is where this went wrong.
 *
 * Storybook's autodocs mounts every story on one page, and every story that
 * uses a portal mounts a provider. The modal page has seventeen. When the
 * scrim was mounted unconditionally that was seventeen `position: fixed`
 * elements covering the viewport, each with a transition — seventeen
 * compositing layers over a document that needed none, and the page became
 * unusable.
 *
 * jsdom composites nothing, so the COST is invisible here. The COUNT is not,
 * and the count is what the regression looks like.
 */
describe('many providers on one page', () => {
  it('should mount no scrim at all when nothing has opened', () => {
    render(
      <>
        {Array.from({ length: 17 }, (_unused, index) => {
          const id = `docs-portal-${index}`;
          const node = document.createElement('div');
          node.id = id;
          document.body.appendChild(node);
          return (
            <DPortalContextProvider
              key={id}
              portalName={id}
              availablePortals={{ panel: Panel }}
            >
              <Opener isStatic={false} />
            </DPortalContextProvider>
          );
        })}
      </>,
    );

    expect(document.querySelectorAll('.df-backdrop')).toHaveLength(0);
  });
});

/**
 * A `DModal` that is NOT the portal's panel.
 *
 * `useConfirmModal` renders one through its own container, and a consumer can
 * render one inline with no portal involved at all. Both are `DModal`s inside
 * a provider, and `DModal` closes the portal when it closes — so without a
 * check, closing a confirmation popped the panel underneath it. One Escape,
 * two panels gone, which is what a reader reported.
 *
 * The portal keys its stack by name and hands that name to the panel, so a
 * match is the test: this dialog is the portal's entry, or it is somebody
 * else's.
 */
describe('a DModal outside the stack', () => {
  function StackPanel({ name }: { name: string }) {
    return <DModal name={name}><DModal.Body>in the stack</DModal.Body></DModal>;
  }

  function Elsewhere() {
    const { openPortal } = useDPortalContext<{ panel: Record<string, never> }>();
    return (
      <>
        <button type="button" onClick={() => openPortal('panel', {})}>Open</button>
        {/* A second dialog in the same provider, owned by nobody's stack. */}
        <DModal name="not-in-the-stack"><DModal.Body>elsewhere</DModal.Body></DModal>
      </>
    );
  }

  it('should not pop the stack when a foreign modal closes', async () => {
    const user = userEvent.setup();
    const mount = document.createElement('div');
    mount.id = 'foreign-portal';
    document.body.appendChild(mount);

    render(
      <DPortalContextProvider portalName="foreign-portal" availablePortals={{ panel: StackPanel }}>
        <Elsewhere />
      </DPortalContextProvider>,
    );

    await user.click(screen.getByRole('button', { name: 'Open' }));
    expect(screen.getByText('in the stack')).toBeInTheDocument();

    const foreign = screen.getByText('elsewhere').closest('dialog') as HTMLDialogElement;
    foreign.close();
    await settled();

    /* The portal's own panel is untouched. */
    expect(screen.getByText('in the stack')).toBeInTheDocument();
  });

  /* And the portal's own panel still closes itself, as before. */
  it('should still pop the stack for its own panel', async () => {
    const user = userEvent.setup();
    const mount = document.createElement('div');
    mount.id = 'own-portal';
    document.body.appendChild(mount);

    render(
      <DPortalContextProvider portalName="own-portal" availablePortals={{ panel: StackPanel }}>
        <Elsewhere />
      </DPortalContextProvider>,
    );

    await user.click(screen.getByRole('button', { name: 'Open' }));
    const own = screen.getByText('in the stack').closest('dialog') as HTMLDialogElement;

    own.close();
    await waitFor(() => expect(screen.queryByText('in the stack')).not.toBeInTheDocument());
  });
});
