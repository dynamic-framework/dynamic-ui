/**
 * The toast store.
 *
 * Framework-free on purpose, like `DCalendar/month.ts`: the React container
 * and the vanilla build render the same stack, and a queue that lived inside a
 * React hook could only ever serve one of them. What is here is the part with
 * decisions in it — identity, ordering, the timers — and it is testable
 * without rendering anything.
 *
 * ## Why not `react-hot-toast`
 *
 * 2.x wrapped it, and the wrapper spent its length undoing the library's
 * choices: `toast.custom()` for every call because the built-in markup was not
 * ours, a `visible` flag the wrapper translated into rendering `null`, and a
 * container positioned by inline styles that the stylesheet then had to fight.
 * What was left of the library was a list, six positions and a timer.
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
  placement: ToastPlacement;
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

  const drop = (id: string) => {
    timers.get(id)?.cancel();
    timers.delete(id);
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

    timers.get(id)?.cancel();
    timers.delete(id);
    toasts = toasts.map((item) => (item.id === id ? { ...item, leaving: true } : item));
    publish();

    const handle = clock.setTimeout(() => drop(id), EXIT_GRACE);
    timers.set(id, {
      cancel: () => clock.clearTimeout(handle),
      pause: () => {},
      resume: () => {},
    });
  };

  /** A pausable countdown to dismissal. */
  const startTimer = (id: string, duration: number) => {
    if (duration <= 0) return;

    let remaining = duration;
    let startedAt = clock.now();
    let handle = clock.setTimeout(() => dismiss(id), remaining);

    const pause = () => {
      clock.clearTimeout(handle);
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
      if (remaining <= 0) {
        dismiss(id);
        return;
      }
      startedAt = clock.now();
      handle = clock.setTimeout(() => dismiss(id), remaining);
    };

    timers.set(id, { cancel: () => clock.clearTimeout(handle), pause, resume });
  };

  let autoId = 0;
  /*
   * The container's default, which `show()` falls back to.
   *
   * It lives in the store rather than being applied by the container, because
   * the placement has to be decided when the toast is CREATED: the container
   * groups by placement, so a toast with no placement would have no region to
   * go in. The 2.x `position` prop meant the same thing.
   */
  let defaultPlacement: ToastPlacement = DEFAULT_PLACEMENT;

  /** Where toasts go when they do not name a placement. */
  const setDefaultPlacement = (placement: ToastPlacement) => {
    defaultPlacement = placement;
  };

  /** Adds a toast, or updates the one with this id. Returns the id. */
  const show = (input: ToastInput<Content>): string => {
    autoId += 1;
    const id = input.id ?? `df-toast-${autoId}`;
    const duration = input.duration ?? DEFAULT_DURATION;
    const placement = input.placement ?? defaultPlacement;
    const existing = toasts.find((entry) => entry.id === id);

    if (existing) {
      /*
         * Updating keeps the sequence, so a toast that changes its message
         * does not jump to the end of the stack. It restarts the timer,
         * because new content deserves its full reading time.
         */
      timers.get(id)?.cancel();
      toasts = toasts.map((entry) => (entry.id === id
        ? {
          ...entry, content: input.content, duration, placement, leaving: false,
        }
        : entry));
    } else {
      sequence += 1;
      toasts = toasts.concat({
        id, content: input.content, placement, duration, leaving: false, sequence,
      });

      /* The oldest go, not the newest: the latest message is the one that
           still matters. Dropped outright — animating something nobody has
           read is pointless. */
      if (toasts.length > MAX_TOASTS) {
        const excess = toasts.slice(0, toasts.length - MAX_TOASTS);
        excess.forEach((entry) => {
          timers.get(entry.id)?.cancel();
          timers.delete(entry.id);
        });
        toasts = toasts.slice(-MAX_TOASTS);
      }
    }

    publish();
    startTimer(id, duration);
    return id;
  };

  const dismissAll = () => {
    toasts.slice().forEach((entry) => dismiss(entry.id));
  };

  /** Holds the countdown — a pointer over it, or focus inside it. */
  const pause = (id: string) => { timers.get(id)?.pause(); };
  const resume = (id: string) => { timers.get(id)?.resume(); };

  const getSnapshot = () => snapshot;

  const subscribe = (listener: (state: ToastState<Content>) => void) => {
    listeners.add(listener);
    return () => { listeners.delete(listener); };
  };

  /** For a test or a renderer unmounting; leaves no timer running. */
  const reset = () => {
    timers.forEach((timer) => timer.cancel());
    timers.clear();
    toasts = [];
    defaultPlacement = DEFAULT_PLACEMENT;
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
    setDefaultPlacement,
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
 * Sorted by sequence rather than trusted to array order: an update keeps its
 * original sequence, so the array can hold an older entry after a newer one.
 */
export function toastsAt<Content>(
  state: ToastState<Content>,
  placement: ToastPlacement,
  reverseOrder = false,
): ToastEntry<Content>[] {
  const matching = state.toasts
    .filter((entry) => entry.placement === placement)
    .sort((a, b) => a.sequence - b.sequence);

  return reverseOrder ? matching.reverse() : matching;
}

/** Every placement currently holding a toast, so a renderer makes no empty regions. */
export function activePlacements<Content>(state: ToastState<Content>): ToastPlacement[] {
  return [...new Set(state.toasts.map((entry) => entry.placement))];
}
