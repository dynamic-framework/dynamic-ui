import { act, renderHook } from '@testing-library/react';

import useControlledState from '../useControlledState';

describe('useControlledState', () => {
  it('falls back to the initial value when no value is passed', () => {
    const { result } = renderHook(() => useControlledState<number>(undefined, false, 7));

    expect(result.current[0]).toBe(7);
  });

  it('keeps its own value when uncontrolled', () => {
    const { result } = renderHook(() => useControlledState<number>(undefined, false, 0));

    act(() => result.current[1](3));

    expect(result.current[0]).toBe(3);
  });

  it('ignores the setter when controlled, so the props stay in charge', () => {
    const { result } = renderHook(() => useControlledState<number>(1, true, 0));

    act(() => result.current[1](3));

    expect(result.current[0]).toBe(1);
  });

  it('follows the prop when controlled', () => {
    const { result, rerender } = renderHook(
      ({ value }) => useControlledState<number>(value, true, 0),
      { initialProps: { value: 1 } },
    );

    rerender({ value: 2 });

    expect(result.current[0]).toBe(2);
  });

  it('takes a value passed without onChange as a starting point, not a lock', () => {
    const { result, rerender } = renderHook(
      ({ value }) => useControlledState<number>(value, false, 0),
      { initialProps: { value: 1 } },
    );

    expect(result.current[0]).toBe(1);

    act(() => result.current[1](5));
    expect(result.current[0]).toBe(5);

    // A re-render that does not move `value` must not undo the local change.
    rerender({ value: 1 });
    expect(result.current[0]).toBe(5);
  });

  it('still applies an uncontrolled value that is changed from outside', () => {
    const { result, rerender } = renderHook(
      ({ value }) => useControlledState<number>(value, false, 0),
      { initialProps: { value: 1 } },
    );

    act(() => result.current[1](5));

    rerender({ value: 9 });

    expect(result.current[0]).toBe(9);
  });
});
