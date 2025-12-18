import {
  useState,
  useEffect,
  useCallback,
} from 'react';

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
