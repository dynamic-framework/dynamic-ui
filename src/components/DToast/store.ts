/**
 * The toast store.
 *
 * Framework-free on purpose: what is here is the part with decisions in it —
 * identity, ordering, the timers — and it is testable without rendering
 * anything. The React layer on top of it is three small components that only
 * translate this state into markup.
 *
 * ## Why not `react-hot-toast`
 *
 * The previous `DToastContainer` was its `<Toaster>`, and the wrapper spent
 * its length undoing the library's choices: every toast went through
 * `toast.custom()` because the built-in markup was not ours, a `visible` flag
 * the wrapper translated into rendering `null`, and a container positioned by
 * inline styles that the stylesheet then had to fight. What was actually used
 * of the library was a list, six positions and a timer — which is this file.
 *
 * Owning it is what lets the region be styled by the same `--#{$prefix}toast-*`
 * variables as the toast itself, instead of a third party's inline styles.
 *
 * ## Timers are the whole problem
 *
 * A toast that vanishes while it is being read is the complaint everyone has
 * about toasts, and WCAG 2.2.1 asks for the same thing. So a timer is
 * pausable, and `pause` records how much was LEFT rather than when it started
 * — resuming has to continue, not restart, or a toast hovered three times
 * never leaves.
 */

export type ToastPlacement =
  | 'top-start' | 'top-center' | 'top-end'
  | 'bottom-start' | 'bottom-center' | 'bottom-end';

export type ToastEntry<Content = unknown> = {
  /** Stable. Reusing one updates that toast in place rather than stacking. */
  id: string;
  content: Content;
  /**
   * Where the caller asked for it, or `undefined` for "wherever the renderer
   * puts unplaced toasts".
   *
   * Deliberately NOT resolved here. The store used to stamp a default onto
   * every entry at creation time, which meant a toast dispatched before the
   * container mounted — or before an earlier sibling's effect ran — was
   * permanently stamped with whatever default happened to be registered at
   * that instant, and no later registration could move it. Keeping the
   * distinction lets the renderer resolve it at render time, when the
   * container's own prop is actually known.
   */
  placement?: ToastPlacement;
  /** Milliseconds. `0` keeps it until something dismisses it. */
  duration: number;
  /** Set while it plays its exit transition, so a renderer can animate it. */
  leaving: boolean;
  /** Ascending. What `reverseOrder` reverses, and what keeps order stable. */
  sequence: number;
};

export type ToastState<Content = unknown> = {
  toasts: ToastEntry<Content>[];
};

export type ToastInput<Content = unknown> = {
  id?: string;
  content: Content;
  placement?: ToastPlacement;
  duration?: number;
};

export const DEFAULT_DURATION = 5000;
export const DEFAULT_PLACEMENT: ToastPlacement = 'bottom-center';

/**
 * How long a toast is kept after being told to leave.
 *
 * Long enough for the exit transition, and a ceiling rather than a promise: a
 * renderer that animates listens for the transition and removes it sooner. A
 * transition that never starts — reduced motion, a hidden tab — must not leave
 * the entry in the list forever.
 */
export const EXIT_GRACE = 400;

/**
 * The most toasts kept at once.
 *
 * A loop that fires one per failed request will fire hundreds, and a stack
 * taller than the viewport is both useless and a memory leak. The OLDEST go:
 * the newest message is the one that still matters.
 */
export const MAX_TOASTS = 20;

type Timer = { cancel: () => void; pause: () => void; resume: () => void };

export type Clock = {
  now: () => number;
  setTimeout: (fn: () => void, ms: number) => number;
  clearTimeout: (handle: number) => void;
};

/** The real one. Injected so the tests do not have to wait five seconds. */
export const systemClock: Clock = {
  now: () => Date.now(),
  setTimeout: (fn, ms) => globalThis.setTimeout(fn, ms) as unknown as number,
  clearTimeout: (handle) => globalThis.clearTimeout(handle),
};

export function createToastStore<Content = unknown>(clock: Clock = systemClock) {
  let toasts: ToastEntry<Content>[] = [];
  let sequence = 0;
  const timers = new Map<string, Timer>();
  /**
   * Who is currently holding each toast — a pointer over it, or focus inside
   * it.
   *
   * Kept beside the timers rather than inside them because a hold has to
   * OUTLIVE the timer it applies to: updating a toast in place replaces its
   * timer, and without this the replacement would start counting down under a
   * cursor that never left. The renderer sends no new enter event, because the
   * slot never unmounted.
   *
   * Holders are identified, not counted, because a renderer has to be able to
   * release the hold IT took without touching anyone else's. A toast whose
   * placement changes moves to another region, and the element holding it
   * unmounts without ever emitting a leave event — so its renderer releases
   * the hold on unmount. If that were a bare flag, releasing the dead element's
   * hold would also clear the one its replacement had just taken.
   */
  const holds = new Map<string, Set<unknown>>();

  /** For a caller that has no identity of its own to offer. */
  const ANONYMOUS_HOLDER = Symbol('toast-hold');

  const isHeld = (id: string) => (holds.get(id)?.size ?? 0) > 0;
  const listeners = new Set<(state: ToastState<Content>) => void>();

  /*
   * A frozen snapshot, recreated on every change.
   *
   * React's `useSyncExternalStore` compares the result of `getSnapshot` by
   * identity and loops forever if it is a new object each call — so the
   * snapshot is built when the data changes, not when it is read.
   */
  let snapshot: ToastState<Content> = { toasts: [] };
  const publish = () => {
    snapshot = { toasts: toasts.slice() };
    listeners.forEach((listener) => listener(snapshot));
  };

  /** Cancels a toast's timer and forgets it, so no stale closure survives. */
  const clearTimer = (id: string) => {
    timers.get(id)?.cancel();
    timers.delete(id);
  };

  const drop = (id: string) => {
    clearTimer(id);
    holds.delete(id);
    toasts = toasts.filter((entry) => entry.id !== id);
    publish();
  };

  /**
   * Marks a toast as leaving, then drops it.
   *
   * Two steps because a renderer needs a frame with the entry still present to
   * animate from. `remove` is what a renderer calls when its transition ends;
   * the grace timer is the backstop for when there is no transition.
   */
  const dismiss = (id: string) => {
    const entry = toasts.find((item) => item.id === id);
    if (!entry || entry.leaving) return;

    clearTimer(id);
    toasts = toasts.map((item) => (item.id === id ? { ...item, leaving: true } : item));
    publish();

    const handle = clock.setTimeout(() => drop(id), EXIT_GRACE);
    timers.set(id, {
      cancel: () => clock.clearTimeout(handle),
      pause: () => {},
      resume: () => {},
    });
  };

  /**
   * A pausable countdown to dismissal.
   *
   * Starts held if something is already holding the toast, which is the case
   * whenever an update replaces the timer of a toast under the cursor.
   */
  const startTimer = (id: string, duration: number) => {
    clearTimer(id);
    if (duration <= 0) return;

    let remaining = duration;
    let startedAt = clock.now();
    let handle: number | undefined;

    const schedule = () => {
      startedAt = clock.now();
      handle = clock.setTimeout(() => dismiss(id), remaining);
    };

    const cancel = () => {
      if (handle !== undefined) clock.clearTimeout(handle);
      handle = undefined;
    };

    const pause = () => {
      /*
       * Only a RUNNING timer can be paused.
       *
       * `pause` subtracts the time since `startedAt`, so calling it twice
       * subtracts the same stretch twice and the toast leaves early — which
       * is what happened when hover and focus each paused independently.
       */
      if (handle === undefined) return;
      cancel();
      /*
       * What is LEFT, not when it started.
       *
       * Resuming has to continue the countdown. Restarting it means a toast
       * hovered three times never leaves, which is how a notification ends up
       * pinned to the corner of a page for a minute.
       */
      remaining -= clock.now() - startedAt;
    };

    const resume = () => {
      if (handle !== undefined) return;
      if (remaining <= 0) {
        dismiss(id);
        return;
      }
      schedule();
    };

    timers.set(id, { cancel, pause, resume });
    if (!isHeld(id)) schedule();
  };

  let autoId = 0;

  /**
   * An id no live toast is using.
   *
   * The counter alone is not enough: nothing stops a caller from passing
   * `d-toast-2` as its own stable id, and the counter would hand that same
   * string out later and silently replace a toast that has nothing to do with
   * the new one. Only an id a caller DELIBERATELY reuses should update a toast.
   */
  const generateId = (): string => {
    const taken = new Set(toasts.map((entry) => entry.id));
    do {
      autoId += 1;
    } while (taken.has(`d-toast-${autoId}`));
    return `d-toast-${autoId}`;
  };

  /** Adds a toast, or updates the one with this id. Returns the id. */
  const show = (input: ToastInput<Content>): string => {
    const id = input.id ?? generateId();
    const duration = input.duration ?? DEFAULT_DURATION;
    const existing = toasts.find((entry) => entry.id === id);

    if (existing) {
      /*
       * Updating keeps the sequence, so a toast that changes its message does
       * not jump to the end of the stack. It restarts the timer, because new
       * content deserves its full reading time.
       *
       * The placement is kept too unless the update names one: an update that
       * passes only an id and new content would otherwise move the toast to
       * another corner, which remounts its content and loses whatever state
       * that content was holding.
       */
      toasts = toasts.map((entry) => (entry.id === id
        ? {
          ...entry,
          content: input.content,
          duration,
          placement: input.placement ?? entry.placement,
          leaving: false,
        }
        : entry));
    } else {
      sequence += 1;
      toasts = toasts.concat({
        id,
        content: input.content,
        placement: input.placement,
        duration,
        leaving: false,
        sequence,
      });

      /* The oldest go, not the newest: the latest message is the one that
         still matters. Dropped outright — animating something nobody has read
         is pointless. */
      if (toasts.length > MAX_TOASTS) {
        const excess = toasts.slice(0, toasts.length - MAX_TOASTS);
        excess.forEach((entry) => {
          clearTimer(entry.id);
          holds.delete(entry.id);
        });
        toasts = toasts.slice(-MAX_TOASTS);
      }
    }

    publish();
    /* Clears the previous timer even when the new duration is `0`, so a toast
       updated to "stays until dismissed" keeps no timer that a later resume
       could restart. */
    startTimer(id, duration);
    return id;
  };

  const dismissAll = () => {
    toasts.slice().forEach((entry) => dismiss(entry.id));
  };

  /**
   * Holds the countdown — a pointer over it, or focus inside it.
   *
   * Idempotent per holder, and recorded even for a toast with no timer
   * running, so an update that gives it one starts that timer held.
   *
   * `holder` identifies who is holding. Pass the same value back to `resume`.
   */
  const pause = (id: string, holder: unknown = ANONYMOUS_HOLDER) => {
    let holders = holds.get(id);
    if (!holders) {
      holders = new Set();
      holds.set(id, holders);
    }
    if (holders.has(holder)) return;
    holders.add(holder);
    /* The countdown stops for the FIRST holder; the rest just join. */
    if (holders.size === 1) timers.get(id)?.pause();
  };

  /** Releases one holder's hold. The countdown resumes when the last one goes. */
  const resume = (id: string, holder: unknown = ANONYMOUS_HOLDER) => {
    const holders = holds.get(id);
    if (!holders?.delete(holder)) return;
    if (holders.size > 0) return;
    holds.delete(id);
    timers.get(id)?.resume();
  };

  const getSnapshot = () => snapshot;

  const subscribe = (listener: (state: ToastState<Content>) => void) => {
    listeners.add(listener);
    return () => { listeners.delete(listener); };
  };

  /** For a test or a renderer unmounting; leaves no timer running. */
  const reset = () => {
    timers.forEach((timer) => timer.cancel());
    timers.clear();
    holds.clear();
    toasts = [];
    publish();
  };

  /*
   * Plain functions, returned by reference.
   *
   * Declared as consts rather than as methods on the returned literal so
   * passing one around — `useSyncExternalStore(store.subscribe, …)`, or
   * handing `dismiss` to a caller — is not an unbound method. None of them
   * touches `this`, but a method type says they might, and the lint rule that
   * says so is right to.
   */
  return {
    show,
    dismiss,
    /** Drops it with no exit, for a renderer whose transition has finished. */
    remove: drop,
    dismissAll,
    pause,
    resume,
    getSnapshot,
    subscribe,
    reset,
  };
}

export type ToastStore<Content = unknown> = ReturnType<typeof createToastStore<Content>>;

/**
 * The toasts for one placement, in render order.
 *
 * `fallback` is where entries that named no placement belong — the renderer's
 * own default, which is only known at render time.
 *
 * Sorted by sequence rather than trusted to array order: an update keeps its
 * original sequence, so the array can hold an older entry after a newer one.
 */
export function toastsAt<Content>(
  state: ToastState<Content>,
  placement: ToastPlacement,
  reverseOrder = false,
  fallback: ToastPlacement = DEFAULT_PLACEMENT,
): ToastEntry<Content>[] {
  const matching = state.toasts
    .filter((entry) => (entry.placement ?? fallback) === placement)
    .sort((a, b) => a.sequence - b.sequence);

  return reverseOrder ? matching.reverse() : matching;
}
