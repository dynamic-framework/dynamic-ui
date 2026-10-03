import {
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

  it('does not mount the animated stack while no portal has been opened', () => {
    renderWithPortals();
    expect(document.getElementById('d-portal')).toBeEmptyDOMElement();
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
