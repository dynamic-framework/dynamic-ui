/**
 * The connection between a `DCarousel` and controls that live somewhere else.
 *
 * ## What this is for
 *
 * `DCarouselHandle` — the `ref` — exposes four actions and no state, and a ref
 * never re-renders whoever holds it. So external arrows could be WIRED but not
 * disabled at the ends, and external dots could not mark the current page:
 * the component already knew `canPrev`, `canNext`, `pageCount` and
 * `activePage`, and there was no way out of it.
 *
 * ## Why an object and not an id
 *
 * The obvious alternative is a global registry keyed by string —
 * `<DCarousel id="hero">` plus `useCarouselControls('hero')`. It was rejected
 * for four reasons:
 *
 * - a typo in the id fails silently, which is already a known complaint about
 *   `nodeId` elsewhere in this library;
 * - two carousels sharing an id fight, and nothing can detect it at build
 *   time;
 * - external controls still need to re-render on change, so a registry needs
 *   this same store PLUS global mutable state — strictly more machinery for
 *   less type safety;
 * - it decouples in the wrong direction. The controls do not need to FIND the
 *   carousel at runtime; whoever writes the code already knows where both are.
 *
 * An object passed as a prop has none of those failure modes, and it travels
 * as far as the consumer wants to carry it — through a context, a provider, a
 * store, whatever their app already uses.
 *
 * ## Why it is framework-free
 *
 * Nothing here imports React, so the whole connection — the identity of the
 * snapshot, what counts as a change, what an action does with nothing
 * attached — is testable without rendering. The React side is
 * `useDCarouselController`, which is a `useSyncExternalStore` call and little
 * else.
 */

/** Everything a control outside the carousel needs in order to render. */
export type DCarouselControllerState = {
  /** Index of the real slide currently aligned to the scrollport. */
  activeIndex: number;
  /** Number of pagination stops, and which one is current. */
  pageCount: number;
  activePage: number;
  canPrev: boolean;
  canNext: boolean;
  /** Whether slides are advancing right now. */
  playing: boolean;
  /** Whether the USER stopped it, as opposed to a hover or a hidden tab. */
  paused: boolean;
  /**
   * Whether a `DCarousel` is attached.
   *
   * Published so a control can disable itself rather than look live and do
   * nothing — a controller is created before the carousel mounts, and may
   * outlive it.
   */
  connected: boolean;
  /**
   * The connected carousel's scrollport id, for `aria-controls`.
   *
   * The built-in arrows carry no `aria-controls`: they sit inside the
   * carousel, so proximity does the work. A button on the other side of the
   * page has no relationship to the strip it drives unless it says so, which
   * makes this the one piece of state that exists purely for assistive
   * technology.
   */
  viewportId: string | undefined;
};

/** What the carousel lets an outside control do. */
export type DCarouselActions = {
  next: () => void;
  prev: () => void;
  goToPage: (page: number) => void;
  togglePlay: () => void;
};

/** The part of the state the carousel measures, as opposed to the connection. */
export type DCarouselPublishedState = Omit<
DCarouselControllerState, 'connected' | 'viewportId'
>;

/** What `DCarousel` hands over when it connects. */
export type DCarouselLink = {
  actions: DCarouselActions;
  viewportId: string;
};

const IDLE: DCarouselControllerState = Object.freeze({
  activeIndex: 0,
  pageCount: 0,
  activePage: 0,
  canPrev: false,
  canNext: false,
  playing: false,
  paused: false,
  connected: false,
  viewportId: undefined,
});

export type DCarouselControllerStore = DCarouselActions & {
  subscribe: (listener: () => void) => () => void;
  getSnapshot: () => DCarouselControllerState;
  /**
   * `DCarousel`'s half of the connection. Returns a teardown.
   *
   * Stable for the life of the controller, like `publish`, so the component
   * can depend on it in an effect without reconnecting every time the state
   * changes.
   */
  connect: (link: DCarouselLink) => () => void;
  /** `DCarousel`'s half: pushes measured state. Stable. */
  publish: (state: DCarouselPublishedState) => void;
};

function warn(message: string): void {
  if (process.env.NODE_ENV === 'production') return;
  // eslint-disable-next-line no-console
  console.warn(`[dynamic-ui] ${message}`);
}

/**
 * A controller, with no React in it.
 *
 * Every function it returns is created once, so a consumer can put any of
 * them in a dependency array or hand one to a memoised button and it will not
 * go stale.
 */
export default function createCarouselController(): DCarouselControllerStore {
  let snapshot: DCarouselControllerState = IDLE;
  let link: DCarouselLink | null = null;
  const listeners = new Set<() => void>();

  const emit = () => listeners.forEach((listener) => listener());

  /**
   * Replaces the snapshot only when a field actually differs.
   *
   * `useSyncExternalStore` compares snapshots by IDENTITY, so a new object per
   * publish would re-render every control on every scroll event — and the
   * carousel publishes on each one, most of which change nothing. Building
   * the snapshot on change rather than on read is also why `getSnapshot` can
   * just return the field: a `getSnapshot` that builds an object is an
   * infinite loop in that hook.
   */
  const commit = (next: DCarouselControllerState) => {
    const keys = Object.keys(next) as Array<keyof DCarouselControllerState>;
    if (keys.every((key) => snapshot[key] === next[key])) return;
    snapshot = Object.freeze(next);
    emit();
  };

  /**
   * Wraps an action so it is safe to call with nothing attached.
   *
   * A controller exists before its carousel mounts and may outlive it, so
   * every action has to survive that. It warns rather than throwing: a stray
   * click is not worth crashing an app over, and silence is what sent me
   * looking the last time an id-based connector did nothing.
   */
  const act = (
    name: keyof DCarouselActions,
    run: (actions: DCarouselActions) => void,
  ) => {
    if (!link) {
      warn(
        `${name}() was called on a carousel controller with no <DCarousel> connected. `
        + 'Pass the controller to the component\'s `controller` prop, and use '
        + '`connected` to disable a control until it is.',
      );
      return;
    }
    run(link.actions);
  };

  return {
    subscribe: (listener) => {
      listeners.add(listener);
      return () => { listeners.delete(listener); };
    },

    getSnapshot: () => snapshot,

    connect: (next) => {
      if (link) {
        warn(
          'two <DCarousel>s connected to the same controller. The last one wins, '
          + 'and the controls will drive only that one — give each carousel its '
          + 'own useDCarouselController().',
        );
      }
      link = next;
      commit({ ...snapshot, connected: true, viewportId: next.viewportId });

      return () => {
        /*
         * Only if this link is still the current one. A remount runs the new
         * effect before the old cleanup in some React paths, and a blind
         * `link = null` there would disconnect the carousel that just
         * connected.
         */
        if (link !== next) return;
        link = null;
        commit({ ...IDLE });
      };
    },

    publish: (state) => {
      commit({
        ...state,
        connected: snapshot.connected,
        viewportId: snapshot.viewportId,
      });
    },

    next: () => act('next', (actions) => actions.next()),
    prev: () => act('prev', (actions) => actions.prev()),
    goToPage: (page: number) => act('goToPage', (actions) => actions.goToPage(page)),
    togglePlay: () => act('togglePlay', (actions) => actions.togglePlay()),
  };
}

export { IDLE };
