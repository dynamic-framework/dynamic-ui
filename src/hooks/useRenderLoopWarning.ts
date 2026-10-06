import { useRef } from 'react';

/**
 * Says which component is in a render loop, once, instead of freezing silently.
 *
 * A runaway render is the worst failure mode React has: the tab stops
 * responding, the devtools are too busy to open, and the only evidence is that
 * a page "hangs". There is nothing to read afterwards, so the only chance to
 * learn anything is to notice it while it is happening.
 *
 * This counts renders per instance and logs ONE message with a stack when the
 * count crosses a threshold inside one second. The stack is the point — it
 * names the component and the update that is driving it.
 *
 * ## Why a time window and not a plain count
 *
 * A long-lived component legitimately renders thousands of times over a
 * session. What is pathological is renders with no frame between them, so the
 * count is reset whenever a second passes with the component idle.
 */

/**
 * Below React's own limit, deliberately.
 *
 * React bails out of a `setState` loop at 50 nested updates with "Maximum
 * update depth exceeded" — which is a good error and names a stack. A
 * threshold above that never fires, because React stops the loop first.
 *
 * So this sits under it, and its value is the loops React does NOT catch: a
 * re-render driven by an external store, an effect rescheduling itself through
 * a timer, a subscription that fires on every commit. Those do not nest, so
 * React's counter never trips and the tab simply stops responding.
 */
const THRESHOLD = 25;
const WINDOW_MS = 1000;

export default function useRenderLoopWarning(name: string): void {
  const count = useRef(0);
  const since = useRef(0);
  const warned = useRef(false);

  /*
   * Removed by the CONSUMER's production build, not by ours.
   *
   * A library bundle keeps the branch — `process.env.NODE_ENV` is left for
   * whoever bundles the app to substitute, which is the convention every React
   * library follows. So the string is in the published package and the code
   * never runs in an app built for production.
   *
   * The check is inside the hook rather than around the call: calling a hook
   * conditionally would break the rules of hooks for the sake of a counter.
   */
  if (process.env.NODE_ENV !== 'production') {
    const now = Date.now();
    if (now - since.current > WINDOW_MS) {
      since.current = now;
      count.current = 0;
      warned.current = false;
    }

    count.current += 1;

    if (count.current > THRESHOLD && !warned.current) {
      warned.current = true;
      /* eslint-disable-next-line no-console */
      console.error(
        `[dynamic] ${name} rendered ${count.current} times in under a second — `
        + 'this is a render loop, and the page is about to stop responding. '
        + 'The stack below is the render that crossed the line.',
        new Error('render loop').stack,
      );
    }
  }
}
