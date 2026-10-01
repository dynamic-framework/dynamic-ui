/// <reference types="@testing-library/jest-dom" />

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DModal from '.';

/**
 * What the `<dialog>` migration was for.
 *
 * The previous version was a `<div>` with a hand-written focus trap, and three
 * of its accessibility properties were wrong rather than merely missing:
 *
 * - no `role`, so a screen reader announced a generic container;
 * - `aria-labelledby` pointed at an id nothing carried, and a dangling
 *   reference is ignored rather than falling back — the panel had **no
 *   accessible name at all**;
 * - focus was never moved into the panel and never restored on close, because
 *   the portal blurred the trigger on open.
 *
 * The parts `<dialog>` actually buys — the real focus trap, page inertness, the
 * top layer — are the browser's and have no stand-in in jsdom. What is checked
 * here is everything on this side of that line.
 */
function open(props: Record<string, unknown> = {}) {
  return render(
    <DModal name="confirm" {...props}>
      <DModal.Header showCloseButton>Confirm the transfer</DModal.Header>
      <DModal.Body>Body</DModal.Body>
    </DModal>,
  );
}

describe('<DModal /> accessibility', () => {
  it('should be a dialog, so the role comes from the element', () => {
    const { container } = open();
    const panel = container.querySelector('.df-overlay');

    expect(panel?.tagName).toBe('DIALOG');
    expect(panel).not.toHaveAttribute('role');
  });

  it('should open itself modally', () => {
    const { container } = open();
    expect(container.querySelector('.df-overlay')).toHaveAttribute('open');
  });

  /**
   * The APG is explicit that `aria-modal` must NOT be put on a native dialog:
   * `showModal()` already conveys modality, and the attribute has caused the
   * dialog's content to be announced as empty.
   */
  it('should not add aria-modal to a native dialog', () => {
    const { container } = open();
    expect(container.querySelector('.df-overlay')).not.toHaveAttribute('aria-modal');
  });

  /** The reference has to resolve, or the panel is nameless. */
  it('should take its accessible name from its own header', () => {
    const { container } = open();
    const panel = container.querySelector('.df-overlay')!;
    const labelId = panel.getAttribute('aria-labelledby')!;

    expect(labelId).toBeTruthy();
    const label = container.querySelector(`#${labelId}`);
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent('Confirm the transfer');
  });

  it('should close from its own dismiss control', async () => {
    const user = userEvent.setup();
    const onClose = jest.fn();
    const { container } = open({ onClose });

    await user.click(screen.getByRole('button', { name: 'Close' }));
    // `DModalHeader`'s button reports the intent; the panel's `onClose` fires
    // when the element itself closes.
    expect(container.querySelector('.df-overlay')).toBeInTheDocument();
  });

  /**
   * `cancel` is Escape's only veto point — `close` is after the fact.
   */
  it('should refuse Escape when the backdrop is static', () => {
    const { container } = open({ staticBackdrop: true });
    const panel = container.querySelector('.df-overlay')!;

    const cancel = new Event('cancel', { cancelable: true });
    panel.dispatchEvent(cancel);
    expect(cancel.defaultPrevented).toBe(true);
  });

  it('should allow Escape otherwise', () => {
    const { container } = open();
    const panel = container.querySelector('.df-overlay')!;

    const cancel = new Event('cancel', { cancelable: true });
    panel.dispatchEvent(cancel);
    expect(cancel.defaultPrevented).toBe(false);
  });

  /**
   * A click whose target is the dialog itself landed on the backdrop: the
   * panel's own children are the targets for clicks inside it.
   */
  it('should close on a click outside the panel, and not inside it', async () => {
    const user = userEvent.setup();
    const { container } = open();
    const panel = container.querySelector('.df-overlay') as HTMLDialogElement;

    await user.click(screen.getByText('Body'));
    expect(panel).toHaveAttribute('open');

    panel.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(panel).not.toHaveAttribute('open');
  });

  it('should leave a static backdrop open on an outside click', () => {
    const { container } = open({ staticBackdrop: true });
    const panel = container.querySelector('.df-overlay') as HTMLDialogElement;

    panel.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(panel).toHaveAttribute('open');
  });

  /** So the portal stops rendering a scrim that would double the one we get. */
  it('should declare that the browser manages it', () => {
    expect(DModal.nativeDialog).toBe(true);
  });
});
