/// <reference types="@testing-library/jest-dom" />

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DModal from '.';

jest.mock('../../contexts', () => ({
  useDContext: () => ({
    iconMap: { xLg: 'x-lg-icon' },
    icon: { familyClass: 'bi', familyPrefix: 'bi', materialStyle: false },
  }),
}));

/**
 * What the `<dialog>` migration was for.
 *
 * The previous version was a `<div>` with a hand-written focus trap in
 * `DPortalContext`, and three of its accessibility properties were wrong rather
 * than merely missing:
 *
 * - no `role`, so a screen reader announced a generic container;
 * - `aria-labelledby` pointed at `${name}Label` and nothing carried that id — a
 *   dangling reference is ignored rather than falling back, so the panel had
 *   **no accessible name at all**;
 * - focus was never moved into the panel and never restored on close, because
 *   `openPortal` blurred the trigger on the way in.
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

const panelOf = (container: HTMLElement) => container.querySelector('dialog.modal') as HTMLDialogElement;

describe('<DModal /> as a native dialog', () => {
  it('should be a dialog, so the role comes from the element', () => {
    const { container } = open();
    const panel = panelOf(container);

    expect(panel).toBeInTheDocument();
    expect(panel).not.toHaveAttribute('role');
  });

  it('should open itself modally', () => {
    const { container } = open();
    expect(panelOf(container)).toHaveAttribute('open');
  });

  /**
   * The APG is explicit that `aria-modal` must NOT be put on a native dialog:
   * `showModal()` already conveys modality, and the attribute has caused the
   * dialog's content to be announced as empty. `aria-hidden="false"` went with
   * it — it announced nothing and contradicted the element.
   */
  it('should not add aria-modal or aria-hidden to a native dialog', () => {
    const { container } = open();
    const panel = panelOf(container);

    expect(panel).not.toHaveAttribute('aria-modal');
    expect(panel).not.toHaveAttribute('aria-hidden');
  });

  /** The reference has to resolve, or the panel is nameless. */
  it('should take its accessible name from its own header', () => {
    const { container } = open();
    const panel = panelOf(container);
    const labelId = panel.getAttribute('aria-labelledby') as string;

    expect(labelId).toBeTruthy();
    const label = container.querySelector(`#${labelId}`);
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent('Confirm the transfer');
  });

  it('should keep Bootstrap markup inside the dialog', () => {
    const { container } = open({ centered: true, size: 'lg' });
    const panel = panelOf(container);

    const dialog = panel.querySelector('.modal-dialog');
    expect(dialog).toHaveClass('modal-dialog-centered', 'modal-lg');
    expect(dialog?.querySelector('.modal-content')).toBeInTheDocument();
  });

  /** `cancel` is Escape's only veto point — `close` is after the fact. */
  it('should refuse Escape when the backdrop is static', () => {
    const { container } = open({ staticBackdrop: true });
    const cancel = new Event('cancel', { cancelable: true });

    panelOf(container).dispatchEvent(cancel);
    expect(cancel.defaultPrevented).toBe(true);
  });

  it('should allow Escape otherwise', () => {
    const { container } = open();
    const cancel = new Event('cancel', { cancelable: true });

    panelOf(container).dispatchEvent(cancel);
    expect(cancel.defaultPrevented).toBe(false);
  });

  /**
   * A click whose target is the dialog itself landed on the backdrop, or in the
   * gap Bootstrap leaves around `.modal-content`: the panel's own children are
   * the targets for clicks inside it.
   */
  it('should close on a click outside the panel, and not inside it', async () => {
    const user = userEvent.setup();
    const { container } = open();
    const panel = panelOf(container);

    await user.click(screen.getByText('Body'));
    expect(panel).toHaveAttribute('open');

    panel.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(panel).not.toHaveAttribute('open');
  });

  it('should leave a static backdrop open on an outside click', () => {
    const { container } = open({ staticBackdrop: true });
    const panel = panelOf(container);

    panel.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(panel).toHaveAttribute('open');
  });

  it('should report onClose when the element closes itself', () => {
    const onClose = jest.fn();
    const { container } = open({ onClose });

    panelOf(container).close();
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  /** So the portal stops rendering a scrim that would double the one we get. */
  it('should declare that the browser manages it', () => {
    expect(DModal.nativeDialog).toBe(true);
  });
});
