import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { DContextProvider } from './DContext';

const mockLoaded = jest.fn();
jest.mock('./portal/DPortalStack', () => {
  mockLoaded();
  return jest.requireActual<typeof import('./portal/DPortalStack')>('./portal/DPortalStack');
});

function ExamplePortal() {
  return <div className="portal">Portal content</div>;
}

// Jest caches the module after the first load, so the cases that must not load
// it run before the one that does.
describe('DPortalContextProvider module loading', () => {
  it.each([
    ['without availablePortals', undefined],
    ['with an empty availablePortals', {}],
  ])('never imports the portal stack %s', async (_, availablePortals) => {
    render(
      <DContextProvider availablePortals={availablePortals}>
        <span>Content</span>
      </DContextProvider>,
    );
    await act(async () => {});
    expect(screen.getByText('Content')).toBeInTheDocument();
    expect(mockLoaded).not.toHaveBeenCalled();
  });

  it('imports the portal stack when portals are registered', async () => {
    render(
      <DContextProvider availablePortals={{ example: ExamplePortal }}>
        <span>Content</span>
      </DContextProvider>,
    );
    await act(async () => {});
    expect(mockLoaded).toHaveBeenCalledTimes(1);
  });
});
