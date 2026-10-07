import { useCallback, useRef } from 'react';

/** Backstop for a `transitionend` that never arrives. */
export const EXIT_TIMEOUT = 1000;

/**
 * Whether the browser can animate a `<dialog>` on its way out.
 *
 * A top-layer dialog leaves by going `display: none`, and `display` is a
 * discrete property — without `transition-behavior: allow-discrete` the browser
 * jumps straight to the end, so the panel vanishes on the frame it is told to
 * close and no `transitionend` ever fires for the exit.
 *
 * This is the only place v2 diverges from the 3.x hook, and it is because of
 * the support floor: `<dialog>.showModal()` lands in Safari 15.4 and
 * `allow-discrete` in Safari 17.4. Between those two versions the panel is
 * perfectly functional and simply has no exit animation — and WITHOUT this
 * check, every close would sit on the 1s timeout below before the portal
 * unmounted it, holding a stack entry for a panel that is already invisible.
 *
 * Read once: it is a static capability, and `CSS.supports` is not free.
 */
const CAN_ANIMATE_EXIT = typeof CSS !== 'undefined'
  && typeof CSS.supports === 'function'
  && CSS.supports('transition-behavior', 'allow-discrete');

/**
 * Runs `done` after the element has finished transitioning out.
 *
 * The portal unmounts a panel by popping it off the stack, and an element
 * removed from the document stops transitioning — so calling `closePortal()`
 * straight from the `close` event wins the race every time and the exit
 * animation never renders. (The enter still works, which is why it used to look
 * like only half the animation existed.)
 */
export default function useExitTransition() {
  const pending = useRef<number | undefined>(undefined);

  return useCallback((element: HTMLElement | null, done: () => void) => {
    if (pending.current !== undefined) {
      window.clearTimeout(pending.current);
      pending.current = undefined;
    }

    if (!element || !CAN_ANIMATE_EXIT) {
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
