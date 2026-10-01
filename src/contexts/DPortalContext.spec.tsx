/// <reference types="@testing-library/jest-dom" />

import { useEffect, useRef } from 'react';

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { DPortalContextProvider, useDPortalContext } from './DPortalContext';

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

const backdrop = () => document.querySelector('.df-backdrop');
const panel = () => document.querySelector('.df-overlay');

describe('DPortalContext', () => {
  it('should render the scrim with the class the stylesheet defines', async () => {
    const user = userEvent.setup();
    setup();

    await user.click(screen.getByRole('button', { name: 'Open' }));
    expect(backdrop()).toBeInTheDocument();
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
    expect(document.querySelector('.df-backdrop')).not.toBeInTheDocument();
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
    await user.click(backdrop()!);

    await waitFor(() => expect(panel()).not.toBeInTheDocument());
    expect(backdrop()).not.toBeInTheDocument();
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
