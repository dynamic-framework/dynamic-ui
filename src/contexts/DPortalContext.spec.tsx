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

type Payloads = { example: { title: string }; second: { title: string } };

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

/**
 * A portal that opens another one from inside itself, which is what stacking
 * looks like in practice: the trigger of the second portal lives in the first
 * one and is still mounted when the second closes.
 */
function ParentPortal({ payload }: PortalProps<Payloads['example']>) {
  const { openPortal } = useDPortalContext<Payloads>();
  return (
    <div className="portal">
      {payload.title}
      <button type="button" onClick={() => openPortal('second', { title: 'Second portal' })}>Open second</button>
    </div>
  );
}

/** The only page-level trigger: the second portal is opened from the first. */
function StackedOpener() {
  const { openPortal } = useDPortalContext<Payloads>();
  return (
    <button type="button" onClick={() => openPortal('example', { title: 'First portal' })}>Open first</button>
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
  ])('does not render the portal stack %s', async (_, availablePortals) => {
    render(
      <DContextProvider availablePortals={availablePortals}>
        <span>Content</span>
      </DContextProvider>,
    );
    await act(async () => {});
    expect(document.getElementById('d-portal')).toBeEmptyDOMElement();
  });

  it('opens and closes synchronously in the same tick', () => {
    renderWithPortals();
    fireEvent.click(screen.getByText('Open'));
    expect(screen.getByText('Portal content')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Close'));
    expect(document.querySelector('#d-portal .portal')).not.toBeInTheDocument();
  });

  it('keeps an open portal closable when availablePortals is emptied', () => {
    const { rerender } = renderWithPortals();
    fireEvent.click(screen.getByText('Open'));

    rerender(
      <DContextProvider availablePortals={{}}>
        <Opener />
      </DContextProvider>,
    );
    expect(screen.getByText('Portal content')).toBeInTheDocument();
    expect(document.querySelector('#d-portal .backdrop')).toBeInTheDocument();

    fireEvent.keyDown(window, { key: 'Escape' });
    expect(document.querySelector('#d-portal .portal')).not.toBeInTheDocument();
    expect(document.getElementById('d-portal')).toBeEmptyDOMElement();
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

  // #1293 — closing used to leave the focus on `<body>`, so a keyboard or
  // screen reader user lost their place and had to walk the page again.
  describe('the focus goes back to whoever opened the portal', () => {
    it.each([
      ['closePortal', () => fireEvent.click(screen.getByText('Close'))],
      ['Escape', () => fireEvent.keyDown(window, { key: 'Escape' })],
    ])('restores it when closing with %s', async (_, close) => {
      renderWithPortals();
      const open = screen.getByText('Open');
      open.focus();
      fireEvent.click(open);
      await screen.findByText('Portal content');
      expect(open).not.toHaveFocus();

      close();
      await waitFor(() => expect(document.querySelector('#d-portal .portal')).not.toBeInTheDocument());
      expect(open).toHaveFocus();
    });

    it('gives each stacked portal back its own trigger', async () => {
      render(
        <DContextProvider availablePortals={{ example: ParentPortal, second: ExamplePortal }}>
          <StackedOpener />
        </DContextProvider>,
      );
      const first = screen.getByText('Open first');
      first.focus();
      fireEvent.click(first);
      await screen.findByText('First portal');

      // The trigger of the second portal is inside the first one.
      const second = screen.getByText('Open second');
      second.focus();
      fireEvent.click(second);
      await screen.findByText('Second portal');

      // Closing the child goes back into the parent, which is still open: this
      // is the level that a page-level trigger would never exercise.
      fireEvent.keyDown(window, { key: 'Escape' });
      await waitFor(() => expect(screen.queryByText('Second portal')).not.toBeInTheDocument());
      expect(screen.getByText('First portal')).toBeInTheDocument();
      expect(second).toHaveFocus();

      // And closing the parent goes back out to the page.
      fireEvent.keyDown(window, { key: 'Escape' });
      await waitFor(() => expect(screen.queryByText('First portal')).not.toBeInTheDocument());
      expect(first).toHaveFocus();
    });

    it('does not move the focus when the trigger is gone', async () => {
      renderWithPortals();
      // A trigger that leaves the document while the portal is open. It is
      // created here rather than taken from the render so that removing it
      // does not fight React over a node it owns.
      const trigger = document.createElement('button');
      document.body.appendChild(trigger);
      trigger.focus();

      // The click does not move the focus, so this is the active element when
      // the portal opens and therefore the one that gets stored.
      fireEvent.click(screen.getByText('Open'));
      await screen.findByText('Portal content');
      trigger.remove();

      fireEvent.click(screen.getByText('Close'));
      await waitFor(() => expect(document.querySelector('#d-portal .portal')).not.toBeInTheDocument());
      // Focusing a detached element silently drops the focus; nothing moves.
      expect(document.activeElement).toBe(document.body);
    });
  });
});
