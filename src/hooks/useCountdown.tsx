import {
  useState,
  useEffect,
  useCallback,
} from 'react';

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
export default function useCountdown(seconds: number) {
  const [secondsLeft, setSecondsLeft] = useState(seconds);
  const [isActive, setIsActive] = useState(true);

  const resetCountdown = useCallback((newSeconds = seconds) => {
    setIsActive(false);
    setSecondsLeft(newSeconds);
  }, [seconds]);

  const restartCountdown = useCallback(() => {
    resetCountdown(seconds);
    setIsActive(true);
  }, [resetCountdown, seconds]);

  useEffect(() => {
    if (!isActive) {
      return () => {};
    }

    const interval = setInterval(() => {
      setSecondsLeft((prevSeconds) => {
        const newSeconds = prevSeconds - 1;
        if (newSeconds <= 0) {
          clearInterval(interval);
          setIsActive(false);
          return 0;
        }
        return newSeconds;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive]);

  return { secondsLeft, restartCountdown };
}
