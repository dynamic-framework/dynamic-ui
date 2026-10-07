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

  /*
   * The scrim is LATCHED: absent until a panel needs one, present from then on.
   *
   * It has to outlive the panel so its fade-out has a previous frame to leave
   * from — but "persistent" must not mean "always", because that is a
   * `position: fixed` element covering the viewport for every provider on the
   * page. A Storybook docs page mounts one provider per story.
   */
  it.each([
    ['without availablePortals', undefined],
    ['with an empty availablePortals', {}],
  ])('mounts no scrim %s', async (_, availablePortals) => {
    render(
      <DContextProvider availablePortals={availablePortals}>
        <span>Content</span>
      </DContextProvider>,
    );
    await act(async () => {});
    expect(document.querySelector('#d-portal .backdrop')).not.toBeInTheDocument();
  });

  it('opens and closes without leaving a panel behind', async () => {
    renderWithPortals();
    fireEvent.click(screen.getByText('Open'));
    await screen.findByText('Portal content');
    fireEvent.click(screen.getByText('Close'));
    await waitFor(() => expect(document.querySelector('#d-portal .portal')).not.toBeInTheDocument());
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

  /*
   * The scrim arrives a tick after the panel.
   *
   * A panel reports whether the browser is managing it from its own mount
   * effect, so on the first frame the provider cannot yet tell a `<dialog>` from
   * this plain `<div>`. It waits rather than guessing — which is what keeps a
   * stack of dialogs from mounting a scrim they will never use.
   */
  it('renders the portal component once it is opened, and then the scrim', async () => {
    renderWithPortals();
    fireEvent.click(screen.getByText('Open'));
    expect(await screen.findByText('Portal content')).toBeInTheDocument();

    await waitFor(() => (
      expect(document.querySelector('#d-portal .backdrop')).toBeInTheDocument()
    ));
    expect(document.querySelector('#d-portal .backdrop')).toHaveAttribute('data-open');
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
