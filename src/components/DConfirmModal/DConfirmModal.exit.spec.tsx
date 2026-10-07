import {
  act,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import type { PropsWithChildren } from 'react';

import { DContextProvider } from '../../contexts';
import useConfirmModal from '../../hooks/useConfirmModal';
import DConfirmModalContainer from './DConfirmModalContainer';

jest.mock('../DIcon', () => ({
  __esModule: true,
  default: () => null,
}));

function Wrapper({ children }: PropsWithChildren) {
  return (
    <DContextProvider>
      {children}
      <DConfirmModalContainer nodeId="d-portal" />
    </DContextProvider>
  );
}

function Opener({ onConfirm, onClose }: {
  onConfirm: () => void | Promise<void>;
  onClose?: () => void;
}) {
  const confirm = useConfirmModal({
    title: 'Archive the transfer?',
    onConfirm,
    onClose,
  });
  return <button type="button" onClick={confirm.open}>open</button>;
}

const dialog = () => document.querySelector('#d-portal dialog.confirm-modal');

/**
 * Every way out goes through the element.
 *
 * Dropping the store entry unmounts the `<dialog>`, and an element removed from
 * the document stops transitioning — so the modal used to snap out of existence
 * while `.confirm-modal` had a perfectly good exit declared on it.
 * `framer-motion` held the element open through its own exit; with the animation
 * in CSS the element has to be allowed to finish, which means something has to
 * `close()` it and wait.
 *
 * The transition itself is the browser's and has no stand-in in jsdom. What is
 * checked here is that the element is CLOSED rather than yanked, which is the
 * part this side of the line owns.
 */
describe('<DConfirmModalUI /> exit', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  /*
   * The `close` event is the discriminating signal, and the only one.
   *
   * Both the old behaviour and the new one end with the element gone, so
   * asserting that it left proves nothing. Removing a node does not fire
   * `close` — only closing it does. So a `close` that fired is proof the exit
   * was given a chance to run rather than being cut off by the unmount.
   */
  it('closes the element and reports the dismissal when cancelled', async () => {
    const user = userEvent.setup();
    const onClose = jest.fn();
    const closed = jest.fn();
    render(<Opener onConfirm={jest.fn()} onClose={onClose} />, { wrapper: Wrapper });

    await user.click(screen.getByText('open'));
    const panel = dialog() as HTMLDialogElement;
    expect(panel).toHaveAttribute('open');
    panel.addEventListener('close', closed);

    await user.click(screen.getByRole('button', { name: 'Cancel' }));

    expect(closed).toHaveBeenCalledTimes(1);
    await waitFor(() => expect(onClose).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(dialog()).not.toBeInTheDocument());
  });

  it('closes the element on a successful confirm, without reporting a dismissal', async () => {
    const user = userEvent.setup();
    const onConfirm = jest.fn().mockResolvedValue(undefined);
    const onClose = jest.fn();
    const closed = jest.fn();
    render(<Opener onConfirm={onConfirm} onClose={onClose} />, { wrapper: Wrapper });

    await user.click(screen.getByText('open'));
    (dialog() as HTMLDialogElement).addEventListener('close', closed);

    await user.click(screen.getByRole('button', { name: 'Confirm' }));

    await waitFor(() => expect(closed).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(dialog()).not.toBeInTheDocument());
    expect(onConfirm).toHaveBeenCalledTimes(1);
    // `onClose` is the user saying no. Confirming is not saying no.
    expect(onClose).not.toHaveBeenCalled();
  });

  /** A rejected action leaves the modal up, so the user can try again. */
  it('stays open when the confirm action throws', async () => {
    const user = userEvent.setup();
    const onConfirm = jest.fn().mockRejectedValue(new Error('network'));
    render(<Opener onConfirm={onConfirm} />, { wrapper: Wrapper });

    await user.click(screen.getByText('open'));
    await user.click(screen.getByRole('button', { name: 'Confirm' }));

    await waitFor(() => expect(onConfirm).toHaveBeenCalledTimes(1));
    expect(dialog()).toHaveAttribute('open');
  });

  /** Escape is the dialog closing itself; the store has to hear about it. */
  it('drops the entry when the element closes itself', async () => {
    const user = userEvent.setup();
    const onClose = jest.fn();
    render(<Opener onConfirm={jest.fn()} onClose={onClose} />, { wrapper: Wrapper });

    await user.click(screen.getByText('open'));
    const panel = dialog() as HTMLDialogElement;

    act(() => { panel.close(); });

    await waitFor(() => expect(onClose).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(dialog()).not.toBeInTheDocument());
  });
});
