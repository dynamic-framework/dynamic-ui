import { useEffect, useState, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';

import type { ReactNode } from 'react';

import DToastRegion from '../DToast/DToastRegion';
import { toastStore } from '../DToast/toastStore';

import type { ToastPlacement, ToastState } from '../DToast/store';

/**
 * What the server renders, and what the client renders while hydrating.
 *
 * A module constant so its identity is stable: `useSyncExternalStore` compares
 * snapshots by identity and would loop forever on a fresh object per call.
 */
const EMPTY_STATE: ToastState<ReactNode> = { toasts: [] };

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
 * ## Server rendering, and why it takes three commits
 *
 * The server has no `document` — `createPortal` is a client API — so the
 * regions render in place. The first client render has to produce exactly
 * that, the same six empty regions in the same position, or hydration reports
 * a mismatch and React throws the server's markup away.
 *
 * That leaves an unavoidable move: the regions start in the tree and end up in
 * `document.body`. Moving a React subtree to a different host is not a move at
 * all — the inline nodes are destroyed and fresh ones are created in the body.
 * So a toast dispatched before this mounted would be IN those brand-new
 * regions the moment they appear, and a live region that arrives carrying its
 * own message announces nothing. That is the bug this component exists to
 * avoid, reintroduced at the one moment it is hardest to notice.
 *
 * Hence three commits, each with a job:
 *
 * 1. in place, empty — matches the server, so hydration succeeds;
 * 2. in the body, still empty — the regions reach their final home with
 *    nothing in them, which is what assistive technology has to see first;
 * 3. in the body, with content — anything queued is now INSERTED into regions
 *    that were already being watched.
 *
 * From there the regions never move again, so every later toast is an
 * insertion into a region that has been sitting there empty.
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
  /*
   * `placed` — the regions are in their final DOM home.
   *
   * Mounted, not "is there a document": `typeof document !== 'undefined'` is
   * true on the very first client render too, so it would open the portal
   * during hydration, against a server tree that had rendered the regions in
   * place.
   */
  const [placed, setPlaced] = useState(false);
  useEffect(() => { setPlaced(true); }, []);

  /*
   * `ready` — and they were committed there empty.
   *
   * This can only turn true in a commit AFTER the one that placed them, which
   * is the whole point: it buys the empty region its own commit before any
   * content goes in.
   *
   * Deliberately not reset when `portal` changes at runtime. Flipping it would
   * move the regions again, and unmounting the toasts currently on screen —
   * losing whatever state a custom toast was holding — is a worse outcome than
   * one possibly-missed announcement after a prop change nobody makes.
   */
  const [ready, setReady] = useState(false);
  useEffect(() => { if (placed) setReady(true); }, [placed]);

  const state = useSyncExternalStore(
    toastStore.subscribe,
    toastStore.getSnapshot,
    /*
     * Empty on the server, and empty again while hydrating.
     *
     * A toast is a response to something that happened in the browser, so
     * there is never anything to render on the server. Returning the LIVE
     * snapshot here instead would make the hydrating render disagree with the
     * server's markup for any toast dispatched before hydration finished.
     */
    () => EMPTY_STATE,
  );

  const regions = (
    <>
      {PLACEMENTS.map((corner) => (
        <DToastRegion
          key={corner}
          placement={corner}
          state={ready ? state : EMPTY_STATE}
          reverseOrder={reverseOrder}
          fallback={defaultPlacement}
        />
      ))}
    </>
  );

  return portal && placed
    ? createPortal(regions, document.body)
    : regions;
}
