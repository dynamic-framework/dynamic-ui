import { useCallback, useRef } from 'react';

export const EXIT_TIMEOUT = 1000;

export default function useExitTransition() {
  const pending = useRef<number | undefined>(undefined);

  return useCallback((element: HTMLElement | null, done: () => void) => {
    if (pending.current !== undefined) {
      window.clearTimeout(pending.current);
      pending.current = undefined;
    }

    if (!element) {
      done();
      return;
    }
    const { transitionDuration, transitionDelay } = getComputedStyle(element);
    const animates = `${transitionDuration},${transitionDelay}`
      .split(',')
      .some((part) => parseFloat(part) > 0);

    if (!animates) {
      done();
      return;
    }

    let finished = false;
    let onEnd: (event: Event) => void;

    const finish = () => {
      if (finished) return;
      finished = true;
      window.clearTimeout(pending.current);
      pending.current = undefined;
      element.removeEventListener('transitionend', onEnd);
      done();
    };

    onEnd = (event: Event) => {
      if (event.target !== element) return;
      finish();
    };

    element.addEventListener('transitionend', onEnd);
    pending.current = window.setTimeout(finish, EXIT_TIMEOUT);
  }, []);
}
