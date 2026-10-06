import { useEffect } from 'react';
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';

import { DContextProvider } from './DContext';
import { useDPortalContext, type PortalProps } from './DPortalContext';

type Payloads = { example: { title: string } };

function ExamplePortal({ payload }: PortalProps<Payloads['example']>) {
  return <div className="portal">{payload.title}</div>;
}

function Opener() {
  const { openPortal, closePortal } = useDPortalContext<Payloads>();
  return (
    <>
      <button type="button" onClick={() => openPortal('example', { title: 'Portal content' })}>Open</button>
      <button type="button" onClick={closePortal}>Close</button>
    </>
  );
}

function renderWithPortals() {
  return render(
    <DContextProvider availablePortals={{ example: ExamplePortal }}>
      <Opener />
    </DContextProvider>,
  );
}

describe('DPortalContextProvider', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it.each([
    ['without availablePortals', undefined],
    ['with an empty availablePortals', {}],
  ])('does not load the animated stack %s', async (_, availablePortals) => {
    render(
      <DContextProvider availablePortals={availablePortals}>
        <span>Content</span>
      </DContextProvider>,
    );
    await act(async () => {});
    expect(document.getElementById('d-portal')).toBeEmptyDOMElement();
  });

  it('cancels an open that is still waiting for the stack module', async () => {
    renderWithPortals();
    fireEvent.click(screen.getByText('Open'));
    fireEvent.click(screen.getByText('Close'));
    await waitFor(() => expect(document.getElementById('d-portal')).not.toBeEmptyDOMElement());
    expect(document.querySelector('#d-portal .portal')).not.toBeInTheDocument();
  });

  it('opens a portal only once when opened from an effect', async () => {
    function EffectOpener() {
      const { openPortal, stack } = useDPortalContext<Payloads>();
      useEffect(() => {
        openPortal('example', { title: 'Portal content' });
      }, [openPortal]);
      return <span>{`Open portals: ${stack.length}`}</span>;
    }
    render(
      <DContextProvider availablePortals={{ example: ExamplePortal }}>
        <EffectOpener />
      </DContextProvider>,
    );
    await screen.findByText('Portal content');
    await act(async () => {
      await new Promise((resolve) => { setTimeout(resolve, 0); });
    });
    expect(screen.getByText('Open portals: 1')).toBeInTheDocument();
  });

  it('renders the portal component once it is opened', async () => {
    renderWithPortals();
    fireEvent.click(screen.getByText('Open'));
    expect(await screen.findByText('Portal content')).toBeInTheDocument();
    expect(document.querySelector('#d-portal .backdrop')).toBeInTheDocument();
  });

  // The exit animation keeps the closed portal mounted for ~450ms.
  it('closes the portal with closePortal and with Escape', async () => {
    renderWithPortals();
    fireEvent.click(screen.getByText('Open'));
    await screen.findByText('Portal content');

    fireEvent.click(screen.getByText('Close'));
    await waitFor(() => expect(document.querySelector('#d-portal .portal')).not.toBeInTheDocument());

    fireEvent.click(screen.getByText('Open'));
    await screen.findByText('Portal content');
    fireEvent.keyDown(window, { key: 'Escape' });
    await waitFor(() => expect(document.querySelector('#d-portal .portal')).not.toBeInTheDocument());
  });
});
