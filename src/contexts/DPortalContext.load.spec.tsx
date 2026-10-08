import { fireEvent, render, screen } from '@testing-library/react';
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
});
