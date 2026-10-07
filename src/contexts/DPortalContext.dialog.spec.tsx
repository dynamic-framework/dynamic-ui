import {
  act,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';

import DModal from '../components/DModal';
import { DContextProvider } from './DContext';
import { useDPortalContext, type PortalProps } from './DPortalContext';

jest.mock('../components/DIcon', () => ({
  __esModule: true,
  default: () => null,
}));

type Payloads = {
  first: { title: string };
  second: { title: string };
};

const onCloseSpy = jest.fn();

/**
 * A panel that forwards the portal's `onClose` straight into `DModal`.
 *
 * The hazardous shape: the dialog closes itself, this handler pops the entry,
 * and then `DModal` pops it again when its exit finishes. With one panel open
 * the second pop is harmless; with two it would take the one underneath.
 */
function ForwardingPanel({ name, payload, onClose }: PortalProps<Payloads['second']>) {
  return (
    <DModal name={name} onClose={onClose}>
      <DModal.Header>{payload.title}</DModal.Header>
      <DModal.Body>Body</DModal.Body>
    </DModal>
  );
}

function PlainPanel({ name, payload }: PortalProps<Payloads['first']>) {
  return (
    <DModal name={name}>
      <DModal.Header>{payload.title}</DModal.Header>
      <DModal.Body>Body</DModal.Body>
    </DModal>
  );
}

/**
 * The shape that lost its exit animation: a Cancel button calling `closePortal`.
 */
function PanelWithCancel({ name, payload }: PortalProps<Payloads['first']>) {
  const { closePortal } = useDPortalContext<Payloads>();
  return (
    <DModal name={name} onClose={onCloseSpy}>
      <DModal.Header>{payload.title}</DModal.Header>
      <DModal.Body>
        <button type="button" onClick={() => closePortal()}>cancel</button>
      </DModal.Body>
    </DModal>
  );
}

function Opener() {
  const { openPortal, stack } = useDPortalContext<Payloads>();
  return (
    <>
      <button type="button" onClick={() => openPortal('first', { title: 'Underneath' })}>
        open first
      </button>
      <button type="button" onClick={() => openPortal('second', { title: 'On top' })}>
        open second
      </button>
      <span data-testid="depth">{stack.length}</span>
    </>
  );
}

function renderStack() {
  return render(
    <DContextProvider availablePortals={{ first: PlainPanel, second: ForwardingPanel }}>
      <Opener />
    </DContextProvider>,
  );
}

describe('DPortalContextProvider with native dialog panels', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('renders no scrim of its own when the panel paints a ::backdrop', async () => {
    renderStack();
    fireEvent.click(screen.getByText('open first'));
    await screen.findByText('Underneath');

    // A tick, so the deferred scrim latch would have fired if it were going to.
    await act(async () => {
      await new Promise((resolve) => { setTimeout(resolve, 0); });
    });

    expect(document.querySelector('#d-portal .backdrop')).not.toBeInTheDocument();
  });

  /**
   * One Escape, one panel. The top dialog closes itself, and the entry it pops
   * has to be its own.
   */
  it('closes only the panel that reported it, even when onClose is forwarded', async () => {
    renderStack();
    fireEvent.click(screen.getByText('open first'));
    await screen.findByText('Underneath');
    fireEvent.click(screen.getByText('open second'));
    await screen.findByText('On top');
    expect(screen.getByTestId('depth')).toHaveTextContent('2');

    act(() => {
      (document.getElementById('second') as HTMLDialogElement).close();
    });

    expect(screen.getByTestId('depth')).toHaveTextContent('1');
    expect(screen.queryByText('On top')).not.toBeInTheDocument();
    expect(screen.getByText('Underneath')).toBeInTheDocument();
  });

  /**
   * `closePortal()` has to go through the element, not around it.
   *
   * Popping the stack unmounts the panel, and an element removed from the
   * document stops transitioning — so a Cancel button made the panel vanish on
   * the frame it was told to leave while Escape animated properly. The
   * observable difference is that the dialog now actually CLOSES: it fires
   * `close`, which is the event the exit is hung off.
   */
  it('closes the panel through its own close event, not by popping it', async () => {
    onCloseSpy.mockClear();
    render(
      <DContextProvider availablePortals={{ first: PanelWithCancel, second: ForwardingPanel }}>
        <Opener />
      </DContextProvider>,
    );

    fireEvent.click(screen.getByText('open first'));
    await screen.findByText('Underneath');
    expect(document.getElementById('first')).toHaveAttribute('open');

    fireEvent.click(screen.getByText('cancel'));

    expect(onCloseSpy).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId('depth')).toHaveTextContent('0');
  });
});
