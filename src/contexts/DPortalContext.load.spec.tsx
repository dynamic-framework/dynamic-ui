import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';

import { DContextProvider } from './DContext';
import { useDPortalContext } from './DPortalContext';
import { getPortalStack } from './portal/portalStackRegistry';
import DPortalStackStatic from './portal/DPortalStackStatic';

const mockLoaded = jest.fn();
jest.mock('./portal/DPortalStack', () => {
  mockLoaded();
  return jest.requireActual<typeof import('./portal/DPortalStack')>('./portal/DPortalStack');
});

function ExamplePortal() {
  return <div className="portal">Portal content</div>;
}

function Opener() {
  const { openPortal } = useDPortalContext<{ example: undefined }>();
  return <button type="button" onClick={() => openPortal('example', undefined)}>Open</button>;
}

// Jest caches modules, so the cases without overlay components run first.
describe('DPortalContextProvider portal stack renderer', () => {
  it('opens portals with the static stack when no overlay component is imported', () => {
    render(
      <DContextProvider availablePortals={{ example: ExamplePortal }}>
        <Opener />
      </DContextProvider>,
    );
    fireEvent.click(screen.getByText('Open'));

    expect(screen.getByText('Portal content')).toBeInTheDocument();
    expect(document.querySelector('#d-portal .backdrop.show')).toBeInTheDocument();
    expect(getPortalStack()).toBe(DPortalStackStatic);
    expect(mockLoaded).not.toHaveBeenCalled();
  });

  it.each([
    ['DModal', () => import('../components/DModal')],
    ['DOffcanvas', () => import('../components/DOffcanvas')],
  ])('registers the animated stack when %s is imported', async (_, load) => {
    await jest.isolateModulesAsync(async () => {
      await load();
      const registry = await import('./portal/portalStackRegistry');
      const animated = await import('./portal/DPortalStack');
      expect(registry.getPortalStack()).toBe(animated.default);
    });
  });

  // Runs last: it imports DModal into the shared module registry, so it
  // replaces the static stack for any case after it.
  it('switches a mounted provider to the animated stack when an overlay is imported', async () => {
    function AnimatedOpener() {
      const { openPortal, closePortal } = useDPortalContext<{ example: undefined }>();
      return (
        <>
          <button type="button" onClick={() => openPortal('example', undefined)}>Open</button>
          <button type="button" onClick={closePortal}>Close</button>
        </>
      );
    }

    render(
      <DContextProvider availablePortals={{ example: ExamplePortal }}>
        <AnimatedOpener />
      </DContextProvider>,
    );
    fireEvent.click(screen.getByText('Open'));
    expect(document.querySelector('#d-portal .backdrop')).toHaveClass('show');

    // Nothing else re-renders the provider here: only the registry
    // subscription can swap the stack of the portal that is already open.
    await act(async () => {
      await import('../components/DModal');
    });
    expect(mockLoaded).toHaveBeenCalled();
    expect(screen.getByText('Portal content')).toBeInTheDocument();
    // The animated backdrop fades in through framer-motion instead of `.show`.
    const backdrop = document.querySelector('#d-portal .backdrop');
    expect(backdrop).toBeInTheDocument();
    expect(backdrop).not.toHaveClass('show');

    // AnimatePresence keeps the closed portal mounted until the delayed
    // backdrop exit (~450ms) finishes.
    fireEvent.click(screen.getByText('Close'));
    expect(screen.getByText('Portal content')).toBeInTheDocument();
    expect(document.querySelector('#d-portal .backdrop')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText('Portal content')).not.toBeInTheDocument();
      expect(document.querySelector('#d-portal .backdrop')).not.toBeInTheDocument();
    }, { timeout: 2000 });
  });
});
