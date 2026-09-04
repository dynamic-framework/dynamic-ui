/// <reference types="@testing-library/jest-dom" />

import { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DErrorBoundary from './DErrorBoundary';

// Helper component that throws when 'explode' is true
function Bomb({ explode }: { explode: boolean }) {
  if (explode) {
    throw new Error('Boom!');
  }
  return <div>Safe content</div>;
}

// Suppress console.error for tests that intentionally throw
// eslint-disable-next-line no-console
const originalConsoleError = console.error;
beforeAll(() => {
  // eslint-disable-next-line no-console
  console.error = jest.fn();
});
afterAll(() => {
  // eslint-disable-next-line no-console
  console.error = originalConsoleError;
});

describe('<DErrorBoundary /> a11y', () => {
  it('should have no violations when rendering children with no error', async () => {
    const { container } = render(
      <DErrorBoundary>
        <Bomb explode={false} />
      </DErrorBoundary>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations when rendering the default fallback', async () => {
    function TestComponent() {
      const [explode, setExplode] = useState(false);
      return (
        <>
          <button type="button" onClick={() => setExplode(true)}>Trigger</button>
          <DErrorBoundary>
            <Bomb explode={explode} />
          </DErrorBoundary>
        </>
      );
    }

    const { container } = render(<TestComponent />);
    fireEvent.click(container.querySelector('button') as HTMLButtonElement);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations when rendering a custom fallback', async () => {
    const fallback = () => <div role="alert">Custom Error Message</div>;
    function TestComponent() {
      const [explode, setExplode] = useState(false);
      return (
        <>
          <button type="button" onClick={() => setExplode(true)}>Trigger</button>
          <DErrorBoundary fallback={fallback}>
            <Bomb explode={explode} />
          </DErrorBoundary>
        </>
      );
    }

    const { container } = render(<TestComponent />);
    fireEvent.click(container.querySelector('button') as HTMLButtonElement);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
