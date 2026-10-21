import { useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';

import DToastRegion from '../DToast/DToastRegion';
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
 * Mount once, near the root.
 *
 * ## The regions are always mounted
 *
 * All six corners render from the first paint, empty, and stay. This looks
 * wasteful and is the entire point: a live region inserted at the same moment
 * as its content is frequently not announced at all, because assistive
 * technology has to be watching the element BEFORE the change happens. A
 * container that mounted a region together with the first toast in it would
 * reintroduce exactly the timing problem that moving the region off each toast
 * was meant to fix — and it would miss precisely the isolated, one-off
 * notification that matters most.
 *
 * An empty region costs an inert element: no size, no pointer events, nothing
 * to announce.
 *
 * ## Where an unplaced toast goes is decided HERE
 *
 * `toast()` can be called before this mounts, so the store deliberately leaves
 * `placement` unset rather than stamping a default onto the entry at creation
 * time. Resolving it at render means this component's prop always wins, even
 * for a notification dispatched earlier.
 *
 * ## What replaced `react-hot-toast`
 *
 * This was its `<Toaster>`, and the wrapper existed to undo it: every toast
 * went through `toast.custom()` because the built-in markup was not ours, the
 * library's `visible` flag had to be translated into rendering `null`, and the
 * container positioned itself with inline styles that the stylesheet then
 * fought. What was actually used of it was a list, six positions and a timer —
 * `DToast/store.ts` now.
 *
 * The props that went with it are gone: `containerClassName`, `containerStyle`,
 * `toastOptions` and `gutter` were all ways of reaching into a third party's
 * markup. The region is Bootstrap's own `.toast-container`, so it is dressed
 * by `--#{$prefix}toast-zindex` and `--#{$prefix}toast-spacing` like the rest
 * of the component, and the viewport offset is
 * `--#{$prefix}toast-container-inset`.
 */
export default function DToastContainer(
  {
    placement: defaultPlacement = 'bottom-center',
    reverseOrder = false,
    portal = true,
  }: DToastContainerProps,
) {
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

  const regions = (
    <>
      {PLACEMENTS.map((corner) => (
        <DToastRegion
          key={corner}
          placement={corner}
          state={state}
          reverseOrder={reverseOrder}
          fallback={defaultPlacement}
        />
      ))}
    </>
  );

  return portal && typeof document !== 'undefined'
    ? createPortal(regions, document.body)
    : regions;
}
