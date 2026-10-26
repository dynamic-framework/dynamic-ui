/**
 * Generic seconds-based countdown hook.
 *
 * Starts counting down from `seconds` to `0` and exposes `restartCountdown`
 * to reset and restart the timer (e.g. for "resend code in Xs" patterns,
 * session-expiry banners, or any other cooldown/throttle UI).
 *
 * @example
 * const { secondsLeft, restartCountdown } = useCountdown(30);
 */
export default function useCountdown(seconds: number): {
    secondsLeft: number;
    restartCountdown: () => void;
};
