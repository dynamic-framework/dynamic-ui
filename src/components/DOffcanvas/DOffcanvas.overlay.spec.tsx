/// <reference types="@testing-library/jest-dom" />

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DOffcanvas from '.';

jest.mock('../../contexts', () => ({
  useDContext: () => ({
    iconMap: { xLg: 'x-lg-icon' },
    icon: { familyClass: 'bi', familyPrefix: 'bi', materialStyle: false },
  }),
}));

/**
 * The offcanvas gets the same `<dialog>` treatment as the modal, and for the
 * same reasons — see `DModal.overlay.spec.tsx`.
 *
 * The one structural difference is that here the panel IS the dialog: there is
 * no full-viewport wrapper around it, so an outside click is a click on the
 * browser's `::backdrop`, which is reported as a click on the dialog element.
 */
function open(props: Record<string, unknown> = {}) {
  return render(
    <DOffcanvas name="filters" {...props}>
      <DOffcanvas.Header showCloseButton>Filter transactions</DOffcanvas.Header>
      <DOffcanvas.Body>Body</DOffcanvas.Body>
    </DOffcanvas>,
  );
}

const panelOf = (container: HTMLElement) => container.querySelector('dialog.offcanvas') as HTMLDialogElement;

describe('<DOffcanvas /> as a native dialog', () => {
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

  it('should not add aria-modal or aria-hidden to a native dialog', () => {
    const { container } = open();
    const panel = panelOf(container);

    expect(panel).not.toHaveAttribute('aria-modal');
    expect(panel).not.toHaveAttribute('aria-hidden');
  });

  it('should take its accessible name from its own header', () => {
    const { container } = open();
    const panel = panelOf(container);
    const labelId = panel.getAttribute('aria-labelledby') as string;

    expect(labelId).toBeTruthy();
    expect(container.querySelector(`#${labelId}`)).toHaveTextContent('Filter transactions');
  });

  it('should keep the Bootstrap placement class on the dialog itself', () => {
    const { container } = open({ openFrom: 'start' });
    expect(panelOf(container)).toHaveClass('offcanvas', 'offcanvas-start');
  });

  it('should refuse Escape when the backdrop is static', () => {
    const { container } = open({ staticBackdrop: true });
    const cancel = new Event('cancel', { cancelable: true });

    panelOf(container).dispatchEvent(cancel);
    expect(cancel.defaultPrevented).toBe(true);
  });

  it('should close on a click outside the panel, and not inside it', async () => {
    const user = userEvent.setup();
    const { container } = open();
    const panel = panelOf(container);

    await user.click(screen.getByText('Body'));
    expect(panel).toHaveAttribute('open');

    panel.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(panel).not.toHaveAttribute('open');
  });

  it('should report onClose when the element closes itself', () => {
    const onClose = jest.fn();
    const { container } = open({ onClose });

    panelOf(container).close();
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('should declare that the browser manages it', () => {
    expect(DOffcanvas.nativeDialog).toBe(true);
  });
});
