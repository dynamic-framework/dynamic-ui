import { useEffect, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';

import DToastRegion from '../DToast/DToastRegion';
import { activePlacements } from '../DToast/store';
import { toastStore } from '../DToast/toastStore';

import type { ToastPlacement } from '../DToast/store';

/** The six corners, in a fixed order so regions never reshuffle. */
const PLACEMENTS: ToastPlacement[] = [
  'top-start', 'top-center', 'top-end',
  'bottom-start', 'bottom-center', 'bottom-end',
];

export type DToastContainerProps = {
  /**
   * Where toasts go when they do not name a placement.
   *
   * @default 'bottom-center'
   */
  placement?: ToastPlacement;
  /** Newest at the bottom of the stack instead of the top. */
  reverseOrder?: boolean;
  /**
   * Renders into `document.body` instead of in place.
   *
   * On by default, and worth knowing why: a region is `position: fixed`, and a
   * fixed element inside an ancestor with a `transform`, a `filter` or
   * `will-change` is positioned against THAT ancestor rather than the
   * viewport. Any animated wrapper anywhere above the container would pin the
   * toasts to the middle of it. A portal to the body cannot be captured.
   *
   * Turn it off for a test or a Storybook frame that needs the markup in place.
   */
  portal?: boolean;
};

/**
 * The render target for every toast.
 *
 * Mount once, near the root. It renders nothing until a toast exists, and then
 * one region per corner in use.
 *
 * ## What replaced `react-hot-toast`
 *
 * The 2.x container was its `<Toaster>`, and the wrapper existed to undo it:
 * every toast went through `toast.custom()` because the built-in markup was
 * not ours, the library's `visible` flag had to be translated into rendering
 * `null`, and the container positioned itself with inline styles that the
 * stylesheet then fought. What was actually used of it was a list, six
 * positions and a timer — `DToast/store.ts` now.
 *
 * The props that went with it are gone: `containerClassName`,
 * `containerStyle`, `toastOptions` and `gutter` were all ways of reaching into
 * a third party's markup. The region is ours, so it is styled by
 * `--df-toast-*` tokens like everything else, and the gap between toasts is
 * `--df-toast-region-gap`.
 */
export default function DToastContainer(
  {
    placement: defaultPlacement = 'bottom-center',
    reverseOrder = false,
    portal = true,
  }: DToastContainerProps,
) {
  /*
   * Registered with the store rather than applied here.
   *
   * The placement has to be decided when the toast is CREATED — the container
   * groups by placement, so a toast with none would have no region to go in.
   * An effect, because `toast()` can legitimately be called before this
   * mounts and the first render must not have a side effect.
   */
  useEffect(() => {
    toastStore.setDefaultPlacement(defaultPlacement);
  }, [defaultPlacement]);

  const state = useSyncExternalStore(
    toastStore.subscribe,
    toastStore.getSnapshot,
    /*
     * The server snapshot is the same empty one.
     *
     * A toast is a response to something that happened in the browser, so
     * there is never anything to render on the server — and returning a
     * different object here would make React report a hydration mismatch for
     * a difference that does not exist.
     */
    toastStore.getSnapshot,
  );

  const inUse = activePlacements(state);
  if (!inUse.length) return null;

  const regions = (
    <>
      {PLACEMENTS.filter((corner) => inUse.includes(corner)).map((corner) => (
        <DToastRegion
          key={corner}
          placement={corner}
          state={state}
          reverseOrder={reverseOrder}
        />
      ))}
    </>
  );

  return portal && typeof document !== 'undefined'
    ? createPortal(regions, document.body)
    : regions;
}
