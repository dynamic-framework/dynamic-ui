import { useCallback, useState } from 'react';
import useCountdown from './useCountdown';

export type UseOtpConfig = {
  /** Called when the OTP reaches the expected length and `submit()` is invoked. */
  action: () => Promise<void> | void;
  /** Expected number of digits/characters for a valid OTP. Defaults to `6`. */
  otpSize?: number;
  /** Initial countdown (in seconds) before resend becomes available. Defaults to `15`. */
  seconds?: number;
};

export type UseOtpReturn = {
  /** Current OTP value. */
  otp: string;
  /**
   * Updates the OTP value (wire this to your custom pin input's `onChange`).
   * Also clears `invalid`/`error` as soon as the value actually changes, so
   * the error state disappears once the user edits the code (a no-op call
   * with the same value, e.g. from an uncontrolled input re-notifying its
   * current value, does not reset `invalid`/`error`).
   */
  setOtp: (value: string) => void;
  /**
   * `true` when `submit()` is called with an OTP shorter than `otpSize`, or
   * when `action` throws/rejects (e.g. the backend rejected the entered
   * code as incorrect).
   */
  invalid: boolean;
  /**
   * The value thrown/rejected by `action`, or `null` otherwise. Use it to
   * render a specific message for a wrong code, as opposed to a too-short
   * one.
   */
  error: unknown;
  /**
   * Validates the OTP length; if valid, calls `action`. If `action`
   * rejects, the returned promise rejects too (so callers can still
   * `.catch()` it for logging), and `invalid`/`error` are set beforehand.
   */
  submit: () => Promise<void>;
  /** Seconds remaining until resend is available. */
  secondsLeft: number;
  /** Restarts the resend countdown (call it from your "Resend" action). */
  restartCountdown: () => void;
};

/**
 * Headless hook exposing the same OTP logic used internally by `DOtp`
 * (code state, length + correctness validation, submit action and resend
 * countdown), without any bundled markup/styles.
 *
 * Use this when the default `DOtp` component doesn't match your design and
 * you need to build a fully custom UI while reusing the same behavior.
 *
 * Internally composes `useCountdown` for the resend timer and re-exposes
 * `secondsLeft`/`restartCountdown`, so there is no need to call
 * `useCountdown` separately.
 *
 * `invalid` becomes `true` both when the OTP is shorter than `otpSize` and
 * when `action` throws/rejects (e.g. the backend rejected the entered code
 * as incorrect). In the latter case, the thrown value is exposed as `error`
 * so custom UIs can render an appropriate message (e.g. "Invalid code" vs.
 * "Enter all digits"). `invalid`/`error` are cleared automatically as soon
 * as the user edits the code via `setOtp`.
 *
 * @example
 * function CustomOtp() {
 *   const {
 *     otp,
 *     setOtp,
 *     invalid,
 *     error,
 *     submit,
 *     secondsLeft,
 *     restartCountdown,
 *   } = useOtp({ action: async () => verifyOtp(otp), otpSize: 6, seconds: 15 });
 *
 *   return (
 *     <>
 *       <MyCustomPinInput value={otp} onChange={setOtp} invalid={invalid} />
 *       {invalid && <span>{error ? 'Invalid code' : 'Enter all digits'}</span>}
 *       <button onClick={() => { submit().catch(() => {}); }}>Submit</button>
 *       <button disabled={secondsLeft > 0} onClick={restartCountdown}>
 *         Resend {secondsLeft > 0 ? `(${secondsLeft}s)` : ''}
 *       </button>
 *     </>
 *   );
 * }
 */
export default function useOtp(
  {
    action,
    otpSize = 6,
    seconds = 15,
  }: UseOtpConfig,
): UseOtpReturn {
  const [otp, setOtpValue] = useState('');
  const [invalid, setInvalid] = useState(false);
  const [error, setError] = useState<unknown>(null);
  const { secondsLeft, restartCountdown } = useCountdown(seconds);

  const setOtp = useCallback((value: string) => {
    setOtpValue((prevOtp) => {
      // Guard against no-op calls (e.g. DInputPin re-notifying the same
      // value when its onChange reference changes) so we don't wipe out
      // an `invalid`/`error` state that was just set by submit().
      if (prevOtp === value) {
        return prevOtp;
      }

      setInvalid(false);
      setError(null);
      return value;
    });
  }, []);

  const submit = useCallback(async () => {
    if (otp.length < otpSize) {
      setInvalid(true);
      setError(null);
      return;
    }

    try {
      await action();
      setInvalid(false);
      setError(null);
    } catch (err) {
      setInvalid(true);
      setError(err);
      throw err;
    }
  }, [
    otp.length,
    action,
    otpSize,
  ]);

  return {
    otp,
    setOtp,
    invalid,
    error,
    submit,
    secondsLeft,
    restartCountdown,
  };
}
