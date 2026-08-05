import { act, renderHook } from '@testing-library/react';
import useCountdown from '../useCountdown';

describe('useCountdown', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should start with the given seconds', () => {
    const { result } = renderHook(() => useCountdown(5));
    expect(result.current.secondsLeft).toBe(5);
  });

  it('should count down every second until it reaches 0', () => {
    const { result } = renderHook(() => useCountdown(3));

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(result.current.secondsLeft).toBe(2);

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(result.current.secondsLeft).toBe(1);

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(result.current.secondsLeft).toBe(0);
  });

  it('should not go below 0 once finished', () => {
    const { result } = renderHook(() => useCountdown(1));

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(result.current.secondsLeft).toBe(0);

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(result.current.secondsLeft).toBe(0);
  });

  it('should restart the countdown back to the initial seconds', () => {
    const { result } = renderHook(() => useCountdown(2));

    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(result.current.secondsLeft).toBe(0);

    act(() => {
      result.current.restartCountdown();
    });
    expect(result.current.secondsLeft).toBe(2);

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(result.current.secondsLeft).toBe(1);
  });
});
