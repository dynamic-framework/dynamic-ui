import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import type { RefObject } from 'react';

/**
 * The carousel engine.
 *
 * ## The one idea
 *
 * Everything is derived from the scroll position. Nothing is remembered.
 *
 * The version this replaces kept an `activeIndex` and moved a transform to
 * match it, which meant every path that could change the layout — a resize, a
 * breakpoint crossing, a slide added, a font finally loading — had to remember
 * to recompute it. Whenever one did not, the dots pointed at a slide that was
 * not on screen.
 *
 * Here the scroll position IS the state. `scrollLeft` cannot disagree with what
 * is rendered, because it is what is rendered. `perPage` is read back out of
 * the resolved custom property, so the arrows and the dots see exactly the
 * number the stylesheet laid the slides out with — not a second calculation
 * that happens to usually agree.
 *
 * ## What is actually hard
 *
 * Only two things. The seamless loop, which needs clones and an invisible jump
 * at the right moment; and knowing when scrolling has STOPPED, since `scrollend`
 * is not in every browser this library targets.
 */

/** How far a move goes: a whole page, or a fixed number of slides. */
export type CarouselPerMove = number | 'page';

/**
 * `true` clones the slides for a seamless loop; `'rewind'` jumps back to the
 * start instead. Two options because they cost different things — see
 * {@link useCarousel} on clones.
 */
export type CarouselLoop = boolean | 'rewind';

export type CarouselAlign = 'start' | 'center';

type Options = {
  rootRef: RefObject<HTMLDivElement | null>;
  viewportRef: RefObject<HTMLDivElement | null>;
  slideCount: number;
  perMove: CarouselPerMove;
  align: CarouselAlign;
  loop: CarouselLoop;
  cloneCount: number;
  autoplay: boolean;
  interval: number;
  pauseOnHover: boolean;
  draggable: boolean;
};

export type CarouselState = {
  /** Index of the real slide currently aligned to the scrollport. */
  activeIndex: number;
  /** Number of pagination stops, and which one is current. */
  pageCount: number;
  activePage: number;
  canPrev: boolean;
  canNext: boolean;
  /** Whether slides are advancing right now. */
  playing: boolean;
  /**
   * Whether the USER stopped it, as opposed to it being held while they hover
   * or while the tab is in the background. The two are separate on purpose —
   * see {@link useCarousel}.
   */
  paused: boolean;
};

/**
 * Milliseconds of quiet before scrolling counts as finished.
 *
 * Only used where `scrollend` is missing (Safari below 18, and the versions of
 * Chrome and Firefox this library still targets). Long enough not to fire
 * mid-flick, short enough that a loop jump is not visible as a pause.
 */
const SCROLL_IDLE_MS = 120;

/** Sub-pixel slack. Scroll positions are fractional and rarely land exactly. */
const EPSILON = 1.5;

type Metrics = {
  /** Viewport-relative x of the scrollport's content box start edge. */
  contentStart: number;
  contentWidth: number;
  rtl: boolean;
};

function readMetrics(viewport: HTMLElement): Metrics {
  const rect = viewport.getBoundingClientRect();
  const styles = getComputedStyle(viewport);
  const padStart = parseFloat(styles.paddingInlineStart) || 0;
  const padEnd = parseFloat(styles.paddingInlineEnd) || 0;
  const rtl = styles.direction === 'rtl';

  return {
    // `clientLeft` is the left border width, which sits between the border box
    // the rect describes and the padding box everything else is measured from.
    contentStart: rect.left + viewport.clientLeft + (rtl ? padEnd : padStart),
    contentWidth: viewport.clientWidth - padStart - padEnd,
    rtl,
  };
}

/**
 * How far to scroll for this slide to sit at its alignment point.
 *
 * Deliberately computed from bounding rects rather than `offsetLeft`: the
 * result is a physical delta that can be handed straight to `scrollBy`, which
 * makes it correct in RTL without the component branching on direction. Only
 * the `start` case has to ask, because "start" is the right edge there.
 */
function alignDelta(metrics: Metrics, slide: HTMLElement, align: CarouselAlign): number {
  const rect = slide.getBoundingClientRect();
  if (align === 'center') {
    return (rect.left + rect.width / 2) - (metrics.contentStart + metrics.contentWidth / 2);
  }
  return metrics.rtl
    ? rect.right - (metrics.contentStart + metrics.contentWidth)
    : rect.left - metrics.contentStart;
}

/** Every slide in DOM order, clones included. */
function allSlides(viewport: HTMLElement): HTMLElement[] {
  return Array.from(viewport.querySelectorAll<HTMLElement>('.df-carousel-slide'));
}

export function useCarousel(
  {
    rootRef,
    viewportRef,
    slideCount,
    perMove,
    align,
    loop,
    cloneCount,
    autoplay,
    interval,
    pauseOnHover,
    draggable,
  }: Options,
): CarouselState & {
    goToPage: (page: number) => void;
    move: (direction: 1 | -1) => void;
    togglePlay: () => void;
  } {
  const infinite = loop === true;

  const [activeIndex, setActiveIndex] = useState(0);
  const [perPage, setPerPage] = useState(1);
  const [range, setRange] = useState({ scroll: 0, max: 0 });

  /**
   * Two kinds of stopped, which is not a distinction worth collapsing.
   *
   * `paused` is a decision: the user pressed the button and expects it to stay
   * pressed. `suspended` is a circumstance: they are hovering, or focus is
   * inside, or the tab is hidden, and it ends by itself when the circumstance
   * does.
   *
   * With one flag they overwrite each other, and the bug is not subtle:
   * clicking the pause button focuses it, focus suspends autoplay, and the
   * click handler then reads "already stopped" and starts it again. The button
   * does the opposite of what it says.
   */
  const [paused, setPaused] = useState(false);
  const [suspended, setSuspended] = useState(false);

  /**
   * Set while a loop jump is in flight.
   *
   * The jump is itself a scroll, so without this the scroll handler would treat
   * it as the user arriving somewhere and could jump again — a loop that
   * ratchets through the strip on its own.
   */
  const jumping = useRef(false);

  /* --- measuring -------------------------------------------------------- */

  /**
   * Reads the slide count the STYLESHEET resolved, rather than working it out
   * again.
   *
   * A second calculation is a second thing that can be wrong, and it would be
   * wrong in exactly the cases that matter: a fractional container width, a
   * consumer's own media query, the moment a breakpoint is crossed.
   *
   * Kept apart from the scroll measurement below because `getComputedStyle`
   * forces a style recalculation, and this value only changes when the
   * carousel's width does — not on every frame of a scroll.
   */
  const measurePerPage = useCallback(() => {
    const root = rootRef.current;
    if (!root) return;
    const resolved = parseFloat(
      getComputedStyle(root).getPropertyValue('--df-carousel-per-page'),
    );
    setPerPage(Number.isFinite(resolved) && resolved >= 1 ? Math.round(resolved) : 1);
  }, [rootRef]);

  const measure = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const scroll = Math.abs(viewport.scrollLeft);
    setRange({ scroll, max: Math.max(0, viewport.scrollWidth - viewport.clientWidth) });

    const slides = allSlides(viewport);
    if (!slides.length) return;

    const metrics = readMetrics(viewport);
    let nearest = 0;
    let nearestDistance = Infinity;
    for (let i = 0; i < slides.length; i += 1) {
      const distance = Math.abs(alignDelta(metrics, slides[i], align));
      if (distance < nearestDistance - 0.5) {
        nearestDistance = distance;
        nearest = i;
      }
    }

    // `nearest` indexes the rendered strip. Under an infinite loop the strip is
    // [tail clones][real][head clones], so the real index is offset by the
    // leading clone count and wraps at both ends.
    const realIndex = infinite
      ? (((nearest - cloneCount) % slideCount) + slideCount) % slideCount
      : nearest;
    setActiveIndex(realIndex);
  }, [align, cloneCount, infinite, slideCount, viewportRef]);

  /* --- the loop jump ---------------------------------------------------- */

  /**
   * Moves off a clone onto the identical real slide, instantly.
   *
   * This is the whole trick. The clone and its original hold the same content,
   * so a jump between them changes no pixel — the strip is simply somewhere
   * else in its own scroll range, with the same thing on screen and room to
   * keep going.
   */
  const reconcileLoop = useCallback(() => {
    if (!infinite || jumping.current) return;
    const viewport = viewportRef.current;
    if (!viewport) return;

    const slides = allSlides(viewport);
    if (slides.length !== slideCount + cloneCount * 2) return;

    const metrics = readMetrics(viewport);
    let nearest = 0;
    let nearestDistance = Infinity;
    for (let i = 0; i < slides.length; i += 1) {
      const distance = Math.abs(alignDelta(metrics, slides[i], align));
      if (distance < nearestDistance - 0.5) {
        nearestDistance = distance;
        nearest = i;
      }
    }

    const firstReal = cloneCount;
    const lastReal = cloneCount + slideCount - 1;
    if (nearest >= firstReal && nearest <= lastReal) return;

    const target = nearest < firstReal
      ? nearest + slideCount // a tail clone: the same slide, one lap forward
      : nearest - slideCount; // a head clone: one lap back

    jumping.current = true;
    viewport.scrollBy({ left: alignDelta(metrics, slides[target], align), behavior: 'instant' });
    // Cleared on the next frame rather than synchronously: the scroll event for
    // the jump has not been dispatched yet, and clearing now would let the
    // handler treat the jump as a fresh arrival.
    requestAnimationFrame(() => { jumping.current = false; });
  }, [align, cloneCount, infinite, slideCount, viewportRef]);

  /* --- scroll plumbing --------------------------------------------------- */

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return undefined;

    let frame = 0;
    let idle: ReturnType<typeof setTimeout>;

    const onScroll = () => {
      // Scroll fires far more often than a frame; coalescing to one rAF keeps
      // the O(slides) measurement to once per painted frame at worst.
      if (!frame) {
        frame = requestAnimationFrame(() => {
          frame = 0;
          measure();
        });
      }
      clearTimeout(idle);
      idle = setTimeout(reconcileLoop, SCROLL_IDLE_MS);
    };

    // `scrollend` is exact and cheap where it exists. The timeout above is the
    // fallback for the browsers this library still targets that lack it, and
    // running both is harmless: whichever fires first does the work, and
    // `reconcileLoop` is a no-op once the strip is on a real slide.
    viewport.addEventListener('scroll', onScroll, { passive: true });
    viewport.addEventListener('scrollend', reconcileLoop);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(idle);
      viewport.removeEventListener('scroll', onScroll);
      viewport.removeEventListener('scrollend', reconcileLoop);
    };
  }, [measure, reconcileLoop, viewportRef]);

  /* --- reacting to layout, not to props ---------------------------------- */

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return undefined;

    measurePerPage();
    measure();

    // A ResizeObserver rather than a window resize listener, because the thing
    // that changes `perPage` is the CAROUSEL's width. It can change with the
    // window, but it can also change because a sidebar opened or a parent grid
    // reflowed, and a window listener sees none of that.
    if (typeof ResizeObserver === 'undefined') return undefined;
    const observer = new ResizeObserver(() => {
      measurePerPage();
      measure();
    });
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [measure, measurePerPage, viewportRef]);

  /* --- starting position ------------------------------------------------- */

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || !infinite) return;
    const slides = allSlides(viewport);
    const first = slides[cloneCount];
    if (!first) return;
    // Start on the first REAL slide, so there is a lap of clones available in
    // both directions and the very first `prev` already has somewhere to go.
    viewport.scrollBy({ left: alignDelta(readMetrics(viewport), first, align), behavior: 'instant' });
  }, [align, cloneCount, infinite, viewportRef]);

  /* --- navigation -------------------------------------------------------- */

  const move = useCallback((direction: 1 | -1) => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const slides = allSlides(viewport);
    if (slides.length < 2) return;

    // One slide's worth of scroll, taken from the rendered gap between two
    // slides rather than from the gap token — a consumer overriding the gap in
    // their own CSS should still get a correct move.
    const first = slides[0].getBoundingClientRect();
    const second = slides[1].getBoundingClientRect();
    const step = Math.abs(second.left - first.left) || first.width;
    const amount = (perMove === 'page' ? perPage : perMove) * step;

    // Read live rather than from state: the state behind `range` is updated on
    // an animation frame, so two quick presses would both see the position
    // before the first one.
    const scroll = Math.abs(viewport.scrollLeft);
    const max = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
    const atEnd = direction === 1 ? scroll >= max - EPSILON : scroll <= EPSILON;

    // `rewind` is the only case that does not simply scroll: there is nowhere
    // further to go, so it goes back to the other end instead.
    if (atEnd && loop === 'rewind') {
      viewport.scrollTo({ left: direction === 1 ? 0 : viewport.scrollWidth });
      return;
    }

    viewport.scrollBy({ left: direction * amount * (readMetrics(viewport).rtl ? -1 : 1) });
  }, [loop, perMove, perPage, viewportRef]);

  const pageCount = useMemo(() => {
    if (slideCount <= 0) return 0;
    if (perMove === 'page') return Math.max(1, Math.ceil(slideCount / perPage));
    const stops = Math.ceil(Math.max(0, slideCount - perPage) / perMove) + 1;
    return Math.max(1, stops);
  }, [perMove, perPage, slideCount]);

  /**
   * Which dot is lit, as a fraction of the scroll range rather than from the
   * active index.
   *
   * Index arithmetic gets the ends wrong whenever the slides do not divide
   * evenly into pages: with five slides three at a time, the last page shows
   * slides 2-4, so the active index is 2 and `floor(2 / 3)` lights the FIRST
   * dot while the user is looking at the last page. The scroll fraction is 1
   * there, which is unambiguous.
   */
  const activePage = useMemo(() => {
    if (pageCount <= 1) return 0;
    if (infinite) {
      return perMove === 'page'
        ? Math.min(pageCount - 1, Math.floor(activeIndex / perPage))
        : Math.min(pageCount - 1, Math.round(activeIndex / (perMove)));
    }
    if (range.max <= 0) return 0;
    return Math.round((range.scroll / range.max) * (pageCount - 1));
  }, [activeIndex, infinite, pageCount, perMove, perPage, range.max, range.scroll]);

  const goToPage = useCallback((page: number) => {
    const viewport = viewportRef.current;
    if (!viewport || pageCount <= 1) return;

    if (infinite) {
      const slides = allSlides(viewport);
      const index = cloneCount + Math.min(
        slideCount - 1,
        page * (perMove === 'page' ? perPage : (perMove)),
      );
      const target = slides[index];
      if (target) viewport.scrollBy({ left: alignDelta(readMetrics(viewport), target, align) });
      return;
    }

    // The inverse of `activePage`: a fraction of the scroll range. Snapping then
    // corrects the last pixel, so this never lands between two slides.
    const max = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
    const left = (page / (pageCount - 1)) * max;
    viewport.scrollTo({ left: readMetrics(viewport).rtl ? -left : left });
  }, [align, cloneCount, infinite, pageCount, perMove, perPage, slideCount, viewportRef]);

  /* --- autoplay ---------------------------------------------------------- */

  const reducedMotion = useMemo(() => (
    typeof window !== 'undefined'
      && typeof window.matchMedia === 'function'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ), []);

  const playing = autoplay && !paused && !suspended && !reducedMotion;

  useEffect(() => {
    if (!playing) return undefined;
    const id = setInterval(() => move(1), interval);
    return () => clearInterval(id);
  }, [interval, move, playing]);

  /**
   * Autoplay stops when nobody is looking.
   *
   * A carousel advancing in a tab you cannot see wastes work and, worse,
   * finishes a lap while you are away so the thing you wanted is gone when you
   * come back. The same argument applies to a carousel scrolled off the page.
   */
  useEffect(() => {
    if (!autoplay) return undefined;
    const root = rootRef.current;

    const onVisibility = () => setSuspended(document.hidden);
    document.addEventListener('visibilitychange', onVisibility);

    let observer: IntersectionObserver | undefined;
    if (root && typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        ([entry]) => setSuspended(!entry.isIntersecting),
        { threshold: 0 },
      );
      observer.observe(root);
    }

    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      observer?.disconnect();
    };
  }, [autoplay, rootRef]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !autoplay) return undefined;

    const suspend = () => setSuspended(true);
    const release = () => setSuspended(false);

    // Focus always pauses, hover only if asked. Pausing on focus is not a
    // preference: a keyboard user tabbing through the slides cannot read one
    // that is about to scroll away, and WCAG 2.2.2 wants a way to stop it.
    root.addEventListener('focusin', suspend);
    root.addEventListener('focusout', release);
    if (pauseOnHover) {
      root.addEventListener('pointerenter', suspend);
      root.addEventListener('pointerleave', release);
    }

    return () => {
      root.removeEventListener('focusin', suspend);
      root.removeEventListener('focusout', release);
      root.removeEventListener('pointerenter', suspend);
      root.removeEventListener('pointerleave', release);
    };
  }, [autoplay, pauseOnHover, rootRef]);

  /* --- pointer drag ------------------------------------------------------ */

  /**
   * Drag, for pointers that have no other way to scroll sideways.
   *
   * Touch is deliberately excluded: the browser already scrolls a touch drag,
   * with momentum and rubber-banding tuned per platform, and taking that over
   * produces something that feels almost right and therefore wrong. This exists
   * for the mouse, which can otherwise only reach the strip through the arrows.
   */
  useEffect(() => {
    const root = rootRef.current;
    const viewport = viewportRef.current;
    if (!root || !viewport || !draggable) return undefined;

    let startX = 0;
    let startScroll = 0;
    let dragging = false;
    let moved = 0;
    /**
     * Set only for the click that a drag is about to produce.
     *
     * Keying the suppression on "how far did the last drag go" instead leaves
     * the flag set after a drag that ends outside any link, and the next
     * activation — including one from the keyboard, which has no pointerdown to
     * reset it — is swallowed for no reason anyone could work out.
     */
    let swallowNextClick = false;

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType === 'touch' || event.button !== 0) return;
      dragging = true;
      moved = 0;
      startX = event.clientX;
      startScroll = viewport.scrollLeft;
      root.setAttribute('data-dragging', '');
      viewport.setPointerCapture(event.pointerId);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!dragging) return;
      const delta = event.clientX - startX;
      moved = Math.max(moved, Math.abs(delta));
      viewport.scrollLeft = startScroll - delta;
    };

    const onPointerUp = (event: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      swallowNextClick = moved > 5;
      root.removeAttribute('data-dragging');
      if (viewport.hasPointerCapture(event.pointerId)) {
        viewport.releasePointerCapture(event.pointerId);
      }
      // Removing `data-dragging` restores `scroll-snap-type`, and the browser
      // settles onto the nearest slide from wherever the drag ended. Nothing
      // here has to decide which slide that is.
    };

    // A drag that ends over a link would otherwise follow it. Suppressed in the
    // capture phase so the click never reaches the slide's own handlers.
    const onClickCapture = (event: MouseEvent) => {
      if (!swallowNextClick) return;
      swallowNextClick = false;
      event.preventDefault();
      event.stopPropagation();
    };

    viewport.addEventListener('pointerdown', onPointerDown);
    viewport.addEventListener('pointermove', onPointerMove);
    viewport.addEventListener('pointerup', onPointerUp);
    viewport.addEventListener('pointercancel', onPointerUp);
    viewport.addEventListener('click', onClickCapture, true);

    return () => {
      viewport.removeEventListener('pointerdown', onPointerDown);
      viewport.removeEventListener('pointermove', onPointerMove);
      viewport.removeEventListener('pointerup', onPointerUp);
      viewport.removeEventListener('pointercancel', onPointerUp);
      viewport.removeEventListener('click', onClickCapture, true);
    };
  }, [draggable, rootRef, viewportRef]);

  return {
    activeIndex,
    pageCount,
    activePage,
    canPrev: Boolean(loop) || range.scroll > EPSILON,
    canNext: Boolean(loop) || range.scroll < range.max - EPSILON,
    playing,
    paused,
    togglePlay: () => setPaused((was) => !was),
    goToPage,
    move,
  };
}

export default useCarousel;
