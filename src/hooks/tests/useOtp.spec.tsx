import { act, renderHook } from '@testing-library/react';
import useOtp from '../useOtp';

describe('useOtp', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should initialize with empty otp, not invalid, and full countdown', () => {
    const action = jest.fn();
    const { result } = renderHook(() => useOtp({ action, otpSize: 6, seconds: 15 }));

    expect(result.current.otp).toBe('');
    expect(result.current.invalid).toBe(false);
    expect(result.current.secondsLeft).toBe(15);
  });

  it('should mark invalid and not call action when otp is shorter than otpSize', async () => {
    const action = jest.fn();
    const { result } = renderHook(() => useOtp({ action, otpSize: 6 }));

    act(() => {
      result.current.setOtp('123');
    });

    await act(async () => {
      await result.current.submit();
    });

    expect(result.current.invalid).toBe(true);
    expect(action).not.toHaveBeenCalled();
  });

  it('should clear invalid and call action when otp reaches otpSize', async () => {
    const action = jest.fn();
    const { result, rerender } = renderHook(() => useOtp({ action, otpSize: 6 }));

    act(() => {
      result.current.setOtp('123456');
    });
    rerender();

    await act(async () => {
      await result.current.submit();
    });

    expect(result.current.invalid).toBe(false);
    expect(action).toHaveBeenCalledTimes(1);
  });

  it('should mark invalid and expose the error when action rejects (wrong code)', async () => {
    const rejectionError = new Error('Wrong OTP code');
    const action = jest.fn().mockRejectedValue(rejectionError);
    const { result, rerender } = renderHook(() => useOtp({ action, otpSize: 6 }));

    act(() => {
      result.current.setOtp('123456');
    });
    rerender();

    await act(async () => {
      await expect(result.current.submit()).rejects.toThrow('Wrong OTP code');
    });

    expect(result.current.invalid).toBe(true);
    expect(result.current.error).toBe(rejectionError);
  });

  it('should clear invalid/error as soon as the otp is edited again', async () => {
    const action = jest.fn().mockRejectedValue(new Error('Wrong OTP code'));
    const { result, rerender } = renderHook(() => useOtp({ action, otpSize: 6 }));

    act(() => {
      result.current.setOtp('123456');
    });
    rerender();

    await act(async () => {
      await expect(result.current.submit()).rejects.toThrow();
    });
    expect(result.current.invalid).toBe(true);

    act(() => {
      result.current.setOtp('654321');
    });

    expect(result.current.invalid).toBe(false);
    expect(result.current.error).toBe(null);
  });

  it('should expose a working countdown/restart pair', () => {
    const action = jest.fn();
    const { result } = renderHook(() => useOtp({ action, seconds: 2 }));

    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(result.current.secondsLeft).toBe(0);

    act(() => {
      result.current.restartCountdown();
    });
    expect(result.current.secondsLeft).toBe(2);
  });
});
