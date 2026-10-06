import { useCallback, useRef } from 'react';

/**
 * Runs something after an element's exit transition, not before it.
 *
 * The problem this solves turns up wherever CSS animates a thing out and
 * JavaScript owns when it stops existing: the element starts its transition,
 * React unmounts it on the same tick, and the transition never renders a
 * frame. The panel disappears instantly and the CSS looks broken.
 *
 * It is the third place in this library that needed it — the toast store's
 * `leaving` + grace, the vanilla toast's `remove()`, and now the modal — so it
 * is written down once.
 *
 * ## Why `transitionend` AND a timeout
 *
 * `transitionend` is the honest signal: it fires when the animation is
 * actually over, whatever duration the stylesheet gave it, so nothing here has
 * to know or duplicate that number.
 *
 * But it does not always fire. A duration of `0s`, a `prefers-reduced-motion`
 * rule that removed the transition, a hidden tab, an element whose property
 * did not actually change — each leaves the listener waiting forever, and the
 * thing being delayed never happens. The timeout is not a fallback for slow
 * machines; it is the only thing standing between a missing event and a modal
 * that can never be closed again.
 *
 * `transitionrun` would tell us whether one started, but it fires in the same
 * frame as the change and there is no moment to check it in.
 */
export const EXIT_TIMEOUT = 1000;

export default function useExitTransition() {
  const pending = useRef<number | undefined>(undefined);

  /**
   * Calls `done` once, after `element`'s transition ends or the timeout.
   *
   * Reentrant: a second call while one is pending cancels the first, so
   * closing twice does not run the continuation twice.
   */
  return useCallback((element: HTMLElement | null, done: () => void) => {
    if (pending.current !== undefined) {
      window.clearTimeout(pending.current);
      pending.current = undefined;
    }

    if (!element) {
      done();
      return;
    }

    /*
     * No transition, no wait.
     *
     * `prefers-reduced-motion` removes it, a consumer can set the duration to
     * `0ms`, and a test environment has no stylesheet at all. In each case
     * `transitionend` never fires and waiting out the timeout would hold the
     * panel in the document for a second with nothing happening — which is
     * worse than the bug this hook exists to fix.
     *
     * Only "is there one", not how long.
     *
     * The first version converted `ms` to `s` so it could compare the real
     * length — and nothing downstream used the number, because the wait ends
     * on `transitionend` rather than on a computed deadline. A revert that
     * read `200ms` as 200 SECONDS passed every test, which is what untested
     * complexity looks like. `parseFloat` answers the only question there is,
     * in either unit.
     *
     * Every comma-separated value, because a shorthand lists one per property
     * and any non-zero one means something will animate.
     */
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

    /*
     * Only the element's OWN transitions.
     *
     * `transitionend` bubbles, so a button inside the panel finishing its
     * hover would otherwise end the exit early — and the panel would vanish
     * mid-animation for anyone whose pointer happened to be over a control.
     */
    onEnd = (event: Event) => {
      if (event.target !== element) return;
      finish();
    };

    element.addEventListener('transitionend', onEnd);
    pending.current = window.setTimeout(finish, EXIT_TIMEOUT);
  }, []);
}
