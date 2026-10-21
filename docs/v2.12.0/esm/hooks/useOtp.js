import { useState, useCallback } from 'react';
import useCountdown from './useCountdown.js';

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
 *     isLoading,
 *     secondsLeft,
 *     restartCountdown,
 *   } = useOtp({ action: async () => verifyOtp(otp), otpSize: 6, seconds: 15 });
 *
 *   return (
 *     <>
 *       <MyCustomPinInput value={otp} onChange={setOtp} invalid={invalid} />
 *       {invalid && <span>{error ? 'Invalid code' : 'Enter all digits'}</span>}
 *       <button disabled={isLoading} onClick={() => { submit().catch(() => {}); }}>
 *         {isLoading ? 'Submitting...' : 'Submit'}
 *       </button>
 *       <button disabled={secondsLeft > 0} onClick={restartCountdown}>
 *         Resend {secondsLeft > 0 ? `(${secondsLeft}s)` : ''}
 *       </button>
 *     </>
 *   );
 * }
 */
function useOtp({ action, otpSize = 6, seconds = 15, }) {
    const [otp, setOtpValue] = useState('');
    const [invalid, setInvalid] = useState(false);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { secondsLeft, restartCountdown } = useCountdown(seconds);
    const setOtp = useCallback((value) => {
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
        setIsLoading(true);
        try {
            await action();
            setInvalid(false);
            setError(null);
        }
        catch (err) {
            setInvalid(true);
            setError(err);
            throw err;
        }
        finally {
            setIsLoading(false);
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
        isLoading,
        secondsLeft,
        restartCountdown,
    };
}

export { useOtp as default };
//# sourceMappingURL=useOtp.js.map
