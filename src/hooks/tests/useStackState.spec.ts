import { act, renderHook } from '@testing-library/react';
import useStackState from '../useStackState';

describe('useStackState', () => {
  it('should initialize with empty list by default', () => {
    const { result } = renderHook(() => useStackState<number>());
    const [list, controls] = result.current;

    expect(list).toEqual([]);
    expect(controls.isEmpty()).toBe(true);
    expect(controls.length).toBe(0);
    expect(controls.peek()).toBeUndefined();
  });

  it('should initialize with provided initial list', () => {
    const { result } = renderHook(() => useStackState([1, 2, 3]));
    const [list, controls] = result.current;

    expect(list).toEqual([1, 2, 3]);
    expect(controls.isEmpty()).toBe(false);
    expect(controls.length).toBe(3);
    expect(controls.peek()).toBe(3);
  });

  it('should push items to the stack', () => {
    const { result } = renderHook(() => useStackState<number>());
    let [, controls] = result.current;

    act(() => controls.push(10));
    [, controls] = result.current;
    act(() => controls.push(20));

    const [list, newControls] = result.current;
    expect(list).toEqual([10, 20]);
    expect(newControls.peek()).toBe(20);
    expect(newControls.length).toBe(2);
  });

  it('should pop items from the stack', () => {
    const { result } = renderHook(() => useStackState([1, 2, 3]));
    let [list, controls] = result.current;

    act(() => controls.pop());
    [list, controls] = result.current;
    expect(list).toEqual([1, 2]);

    act(() => controls.pop());
    [list, controls] = result.current;
    expect(list).toEqual([1]);

    act(() => controls.pop());
    [list, controls] = result.current;
    expect(list).toEqual([]);

    expect(controls.isEmpty()).toBe(true);
    expect(controls.peek()).toBeUndefined();
  });

  it('should clear the stack', () => {
    const { result } = renderHook(() => useStackState([1, 2, 3]));
    let [list, controls] = result.current;

    act(() => controls.clear());
    [list, controls] = result.current;
    expect(list).toEqual([]);

    expect(controls.isEmpty()).toBe(true);
    expect(controls.length).toBe(0);
  });
});
