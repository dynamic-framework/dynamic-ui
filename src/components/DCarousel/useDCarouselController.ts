import { useMemo, useState, useSyncExternalStore } from 'react';

import createCarouselController from './controller';

import type {
  DCarouselControllerState,
  DCarouselControllerStore,
} from './controller';

/**
 * A controller a `DCarousel` can be driven by from anywhere in the tree.
 *
 * The returned object is both halves at once: the live state to render with,
 * the actions to call, and the connection the component uses. Pass it to
 * `controller` and put the controls wherever they belong.
 *
 * ```tsx
 * const hero = useDCarouselController();
 *
 * <DCarousel controller={hero} arrows={false} pagination={false}>
 *   <DCarousel.Slide>…</DCarousel.Slide>
 * </DCarousel>
 *
 * // anywhere — a page header, a sidebar, another route's layout
 * <DCarousel.Prev controller={hero} />
 * <DCarousel.Next controller={hero} />
 * <DCarousel.Pagination controller={hero} />
 *
 * // or your own markup, with the state the built-in controls use
 * <button disabled={!hero.canPrev} onClick={hero.prev}>Back</button>
 * <span>{hero.activePage + 1} of {hero.pageCount}</span>
 * ```
 *
 * Nothing is read from a global registry, so two carousels cannot collide and
 * a typo cannot leave a control silently wired to nothing — see
 * {@link createCarouselController} on why this is an object rather than an id.
 *
 * The state fields change identity on every move, which is what re-renders
 * the controls; `next`, `prev`, `goToPage`, `togglePlay`, `connect` and
 * `publish` never do, so they are safe in a dependency array.
 */
export type DCarouselController = DCarouselControllerState & DCarouselControllerStore;

export default function useDCarouselController(): DCarouselController {
  /*
   * `useState` with the factory, not `useMemo`: React may discard a `useMemo`
   * and recompute it, and a second store would leave the controls subscribed
   * to one connection while the carousel published to another. `useState`
   * guarantees the initialiser runs once.
   */
  const [store] = useState(createCarouselController);

  const state = useSyncExternalStore(
    store.subscribe,
    store.getSnapshot,
    /*
     * The same snapshot on the server. `IDLE` says `connected: false`, which
     * is the truth before hydration — no carousel has mounted — and it keeps
     * the server and client markup identical.
     */
    store.getSnapshot,
  );

  return useMemo(() => ({ ...state, ...store }), [state, store]);
}
