/// <reference types="@testing-library/jest-dom" />

import { useState } from 'react';
import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';
import DErrorBoundary, { useErrorBoundary } from './DErrorBoundary';

// Helper component that throws when 'explode' is true
function Bomb({ explode }: { explode: boolean }) {
  if (explode) {
    throw new Error('Boom!');
  }
  return <div>Safe content</div>;
}

// Suppress console.error for tests that intentionally throw
const originalConsoleError = console.error;
beforeAll(() => {
  // eslint-disable-next-line no-console
  console.error = jest.fn();
});
afterAll(() => {
  // eslint-disable-next-line no-console
  console.error = originalConsoleError;
});

describe('<DErrorBoundary />', () => {
  it('renders children when no error occurs', () => {
    render(
      <DErrorBoundary>
        <Bomb explode={false} />
      </DErrorBoundary>,
    );
    expect(screen.getByText('Safe content')).toBeInTheDocument();
  });

  it('renders default fallback when error occurs', () => {
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

    render(<TestComponent />);

    expect(screen.getByText('Safe content')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Trigger'));

    expect(screen.getByText('An unexpected error occurred.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Retry' })).toBeInTheDocument();
  });

  it('calls onError when error occurs', () => {
    const onError = jest.fn();
    function TestComponent() {
      const [explode, setExplode] = useState(false);
      return (
        <>
          <button type="button" onClick={() => setExplode(true)}>Trigger</button>
          <DErrorBoundary onError={onError}>
            <Bomb explode={explode} />
          </DErrorBoundary>
        </>
      );
    }

    render(<TestComponent />);
    fireEvent.click(screen.getByText('Trigger'));

    expect(onError).toHaveBeenCalledTimes(1);
    const [capturedError, capturedInfo] = onError.mock.calls[0] as [
      Error,
      { componentStack: string },
    ];
    expect(capturedError).toBeInstanceOf(Error);
    expect(capturedInfo.componentStack).toEqual(expect.any(String));
  });

  it('renders custom fallback if provided', () => {
    const fallback = () => <div>Custom Error Message</div>;
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

    render(<TestComponent />);
    fireEvent.click(screen.getByText('Trigger'));

    expect(screen.getByText('Custom Error Message')).toBeInTheDocument();
  });

  it('resets boundary when resetKeys change', () => {
    function TestComponent() {
      const [explode, setExplode] = useState(false);
      const [key, setKey] = useState(0);

      return (
        <>
          <button type="button" onClick={() => setExplode(true)}>Trigger</button>
          <button
            type="button"
            onClick={() => {
              setExplode(false);
              setKey((k) => k + 1);
            }}
          >
            Reset Key
          </button>
          <DErrorBoundary resetKeys={[key]}>
            <Bomb explode={explode} />
          </DErrorBoundary>
        </>
      );
    }

    render(<TestComponent />);
    fireEvent.click(screen.getByText('Trigger'));
    expect(screen.getByText('An unexpected error occurred.')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Reset Key'));
    expect(screen.getByText('Safe content')).toBeInTheDocument();
  });

  it('calls onReset when boundary is reset', () => {
    const onReset = jest.fn();
    function TestComponent() {
      const [explode, setExplode] = useState(false);

      return (
        <>
          <button type="button" onClick={() => setExplode(true)}>Trigger</button>
          <DErrorBoundary
            onReset={() => {
              onReset();
              setExplode(false);
            }}
          >
            <Bomb explode={explode} />
          </DErrorBoundary>
        </>
      );
    }

    render(<TestComponent />);
    fireEvent.click(screen.getByText('Trigger'));

    // Default fallback has a retry button that calls resetErrorBoundary
    fireEvent.click(screen.getByRole('button', { name: 'Retry' }));

    expect(onReset).toHaveBeenCalled();
    expect(screen.getByText('Safe content')).toBeInTheDocument();
  });

  it('supports useErrorBoundary hook to show boundary', () => {
    function Thrower() {
      const { showBoundary } = useErrorBoundary();
      return (
        <button
          type="button"
          onClick={() => showBoundary(new Error('Hook Error'))}
        >
          Throw
        </button>
      );
    }

    render(
      <DErrorBoundary>
        <Thrower />
      </DErrorBoundary>,
    );

    fireEvent.click(screen.getByText('Throw'));
    expect(screen.getByText('An unexpected error occurred.')).toBeInTheDocument();
  });
});
