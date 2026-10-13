import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useId,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import classNames from 'classnames';

import type {
  ComponentProps,
  CSSProperties,
  PropsWithChildren,
  ReactNode,
} from 'react';

import DIcon from '../DIcon';
import DCarouselSlide from './components/DCarouselSlide';
import loadDeferredMedia from './lazyMedia';
import DCarouselAutoplay from './components/DCarouselAutoplay';
import DCarouselNext from './components/DCarouselNext';
import DCarouselPagination from './components/DCarouselPagination';
import DCarouselPrev from './components/DCarouselPrev';
import { useCarousel } from './useCarousel';

import { useDContext } from '../../contexts';
import { useResponsiveProp } from '../../hooks/useResponsiveProp';

import type { ResponsiveProp } from '../../hooks/useResponsiveProp';
import type { BaseProps } from '../interface';
import type { CarouselAlign, CarouselLoop, CarouselPerMove } from './useCarousel';
import type { DCarouselControllerStore } from './controller';
import { DEFAULT_CAROUSEL_I18N } from './i18n';
import type { DCarouselI18n } from './i18n';
import type { Props as SlideProps } from './components/DCarouselSlide';

/** A step on the 4px spacing scale, matching `DLayout`'s `gap`. */
export type DCarouselSpacing =
  | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;

type Responsive<T> = T | ResponsiveProp<T>;

export type Props = BaseProps & PropsWithChildren<{
  /**
   * The carousel's accessible name, e.g. "Featured products".
   *
   * Without it the component renders as a plain element rather than as an
   * announced carousel, because `aria-roledescription="carousel"` on something
   * with no name tells a screen-reader user the kind of thing they have found
   * and nothing about which one.
   */
  label?: string;
  /** Slides visible at once. `{ xs: 1, md: 3 }` shows one on phones, three from `md` up. */
  perPage?: Responsive<number>;
  /** How far one arrow press or dot goes: a whole page, or N slides. */
  perMove?: CarouselPerMove;
  /** Space between slides, as a step on the spacing scale. */
  gap?: Responsive<DCarouselSpacing>;
  /** Inset at both ends, which is what reveals a sliver of the adjacent slides. */
  peek?: Responsive<DCarouselSpacing>;
  /** Where a slide comes to rest in the scrollport. */
  align?: CarouselAlign;
  /** `true` loops seamlessly through clones; `'rewind'` jumps back to the start. */
  loop?: CarouselLoop;
  autoplay?: boolean;
  /**
   * Milliseconds between automatic moves.
   *
   * Responsive like `perPage` and `gap`, because the right pace depends on how
   * much is on screen: one slide at a time on a phone wants longer than three
   * side by side on a desktop. Resolved in JavaScript rather than through a
   * custom property, since the timer is the one part of this component CSS
   * cannot own.
   */
  interval?: Responsive<number>;
  pauseOnHover?: boolean;
  arrows?: boolean;
  pagination?: boolean;
  /** Mouse drag. Touch always scrolls — that is the browser's, not ours. */
  draggable?: boolean;
  /** A fixed height for the strip. Slides stretch to it. */
  height?: string | number;
  /**
   * Which slide the strip starts on, by real index.
   *
   * A deep link, a "resume where you were", a date strip opened on today.
   * Applied once, without animation: a carousel that scrolls itself on arrival
   * reads as a bug.
   */
  initialSlide?: number;
  /**
   * Let each slide take its content's width instead of a share of the strip.
   *
   * For a row of logos, chips or cards that are not all the same size. It
   * makes `perPage` meaningless — the number of slides on screen is whatever
   * fits — so the pagination falls back to one stop per slide.
   */
  variableWidth?: boolean;
  /**
   * How many slides either side of the visible ones to mark ready.
   *
   * A slide carries `data-visible` while it is on screen or within this many
   * of it, which is what `data-src` images and any other deferred content key
   * off. One is the default because it is the smallest window that keeps the
   * NEXT slide from arriving blank: at zero, loading starts the moment a slide
   * is already being looked at.
   */
  lookahead?: number;
  /**
   * Overrides for the arrow icons. Both default to the context's icon map, so
   * a consumer who has already swapped their icon set does not have to name
   * them again here.
   */
  iconArrowLeft?: Partial<ComponentProps<typeof DIcon>>;
  iconArrowRight?: Partial<ComponentProps<typeof DIcon>>;
  /**
   * A controller from `useDCarouselController`, for controls that live
   * somewhere else in the tree.
   *
   * The carousel publishes its state into it and attaches its actions, so
   * external arrows can disable themselves at the ends and external dots can
   * mark the current page — neither of which the `ref` could do, because a ref
   * carries no state and never re-renders whoever holds it.
   *
   * Usually paired with `arrows={false} pagination={false}`, though the
   * built-in controls keep working alongside it if both are wanted.
   */
  controller?: DCarouselControllerStore;
  /** Fires with the index of the slide that came to rest at the alignment point. */
  onSlideChange?: (index: number) => void;
  /**
   * Fires with the outgoing and incoming index, before the change is applied.
   *
   * The case `onSlideChange` cannot serve: pausing the video on the slide that
   * is LEAVING, or sending an analytics event while the outgoing slide is
   * still the current one.
   *
   * "Before" is as early as a scroll container allows — the strip is already
   * moving by the time the browser reports anything — so this fires on the
   * frame the active slide changes rather than before the gesture.
   */
  onBeforeSlideChange?: (from: number, to: number) => void;
  /** Overrides for the control labels. */
  i18n?: Partial<DCarouselI18n>;
}>;

export type DCarouselHandle = {
  next: () => void;
  prev: () => void;
  goToPage: (page: number) => void;
  /**
   * Brings one slide to the alignment point, by its index among the real
   * slides — clones are not counted, so the index is the one the consumer
   * wrote.
   */
  goToSlide: (index: number) => void;
  /** The outer element, for measuring or scrolling into view. */
  element: HTMLDivElement | null;
};

/**
 * Turns a responsive prop into the per-tier custom properties the stylesheet
 * resolves.
 *
 * Only the tiers a consumer actually set are written. The fallback chains in
 * `carousel.css` do the rest, which is why `{ md: 3 }` alone is enough to mean
 * "one below md, three from md up" without the component knowing that rule.
 */
function tierVars<T>(
  name: string,
  value: Responsive<T> | undefined,
  format: (value: T) => string,
): CSSProperties {
  if (value === undefined || value === null) return {};
  if (typeof value !== 'object') {
    return { [`--df-carousel-${name}-xs`]: format(value as T) } as CSSProperties;
  }
  return Object.fromEntries(
    Object.entries(value as Record<string, T>)
      .filter(([, tier]) => tier !== undefined)
      .map(([breakpoint, tier]) => [`--df-carousel-${name}-${breakpoint}`, format(tier)]),
  ) as CSSProperties;
}

/** The largest value a responsive prop can take, which is how many clones a loop needs. */
function peakValue(value: Responsive<number> | undefined, fallback: number): number {
  if (value === undefined) return fallback;
  if (typeof value === 'number') return value;
  const tiers = Object.values(value).filter((tier): tier is number => typeof tier === 'number');
  return tiers.length ? Math.max(...tiers) : fallback;
}

function DCarousel(
  {
    children,
    className,
    style,
    dataAttributes,
    label,
    perPage,
    perMove = 'page',
    gap,
    peek,
    align = 'start',
    loop = false,
    autoplay = false,
    interval = 5000,
    pauseOnHover = true,
    arrows = true,
    pagination = true,
    draggable = true,
    lookahead = 1,
    initialSlide = 0,
    variableWidth = false,
    height,
    iconArrowLeft,
    iconArrowRight,
    controller,
    onSlideChange,
    onBeforeSlideChange,
    i18n: i18nProp,
  }: Props,
  ref: React.ForwardedRef<DCarouselHandle>,
) {
  const rootRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  const i18n = useMemo(() => ({ ...DEFAULT_CAROUSEL_I18N, ...i18nProp }), [i18nProp]);

  // From the context's icon map, like every other default icon in the library.
  // An inline SVG would be a glyph a consumer could not reach: swapping the
  // whole icon set through `DContextProvider` would leave the carousel drawing
  // a chevron of its own.
  const {
    iconMap: {
      chevronLeft, chevronRight, play, pause,
    },
  } = useDContext();
  const slides = useMemo(() => Children.toArray(children), [children]);
  const slideCount = slides.length;

  // A lap of clones only has to be as deep as the most slides ever on screen:
  // the strip can never show more than `perPage` at once, so that many at each
  // end is always enough to fill the view while the jump happens.
  const cloneCount = loop === true
    ? Math.min(slideCount, Math.max(1, Math.ceil(peakValue(perPage, 1))))
    : 0;

  /*
   * The scrollport is given an id so a control somewhere else can point at it
   * with `aria-controls`. The built-in arrows carry none — they sit inside the
   * carousel and proximity does the work — but a button on the other side of
   * the page has no relationship to the strip it drives unless it says so.
   */
  const viewportId = useId();

  /*
   * `true` so the pace follows a resize. Every other responsive prop is
   * resolved by a media query in the stylesheet, which re-resolves on its own;
   * this one is read once per render and would otherwise keep a phone's pace
   * after the window grew.
   */
  const { responsivePropValue } = useResponsiveProp(true);
  const resolvedInterval = typeof interval === 'number'
    ? interval
    : responsivePropValue(interval) ?? 5000;

  const {
    activeIndex,
    pageCount,
    activePage,
    canPrev,
    canNext,
    visible,
    playing,
    paused,
    togglePlay,
    goToPage,
    goToSlide,
    move,
  } = useCarousel({
    rootRef,
    viewportRef,
    slideCount,
    perMove,
    align,
    loop,
    cloneCount,
    autoplay,
    interval: resolvedInterval,
    pauseOnHover,
    draggable,
    lookahead,
    initialSlide,
    variableWidth,
    onBeforeSlideChange,
  });

  useImperativeHandle(ref, () => ({
    next: () => move(1),
    prev: () => move(-1),
    goToPage,
    goToSlide,
    element: rootRef.current,
  }), [goToPage, goToSlide, move]);

  useEffect(() => {
    onSlideChange?.(activeIndex);
  }, [activeIndex, onSlideChange]);

  /**
   * Loads the deferred media of every slide now in the window.
   *
   * After the commit that set `data-visible`, so the query finds them — and
   * through the same function the framework-free build calls, because the
   * contract is about the DOM rather than about React. `loadDeferredMedia`
   * removes each attribute as it moves it, so a slide scrolling in and out
   * does nothing the second time.
   */
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    viewport
      .querySelectorAll('.df-carousel-slide[data-visible]')
      .forEach((slide) => loadDeferredMedia(slide));
  }, [visible]);

  /* --- the controller, for controls elsewhere in the tree ----------------- */

  /*
   * `connect` and `publish` are destructured rather than used through
   * `controller`, because the hook returns a NEW object whenever the state
   * changes — that is what re-renders the controls. Depending on the object
   * would reconnect on every scroll; these two never change identity.
   */
  const connect = controller?.connect;
  const publish = controller?.publish;

  /*
   * The actions go through a ref, so the connection depends on NOTHING that
   * changes per render.
   *
   * Connecting is not idempotent: the effect's cleanup reports "no carousel
   * attached", so an effect that re-runs connects, disconnects and connects
   * again — and each of those is a state change the controls re-render on. A
   * single action that forgot its `useCallback` was enough to turn that into
   * an infinite loop, and it did. Holding the actions in a ref means the only
   * things that can re-connect are a new controller and a new viewport id,
   * neither of which happens while the carousel is simply scrolling.
   */
  const actionsRef = useRef({
    move, goToPage, goToSlide, togglePlay,
  });
  actionsRef.current = {
    move, goToPage, goToSlide, togglePlay,
  };

  useEffect(() => {
    if (!connect) return undefined;
    return connect({
      viewportId,
      actions: {
        next: () => actionsRef.current.move(1),
        prev: () => actionsRef.current.move(-1),
        goToPage: (page) => actionsRef.current.goToPage(page),
        goToSlide: (index) => actionsRef.current.goToSlide(index),
        togglePlay: () => actionsRef.current.togglePlay(),
      },
    });
  }, [connect, viewportId]);

  useEffect(() => {
    publish?.({
      activeIndex, pageCount, activePage, canPrev, canNext, playing, paused,
    });
  }, [
    activeIndex, activePage, canNext, canPrev, pageCount, paused, playing, publish,
  ]);

  const cssVars = useMemo<CSSProperties>(() => ({
    ...tierVars('per-page', perPage, (value) => String(value)),
    ...tierVars('gap', gap, (step) => `var(--df-size-${step})`),
    ...tierVars('peek', peek, (step) => `var(--df-size-${step})`),
    ...(align === 'center' && { '--df-carousel-snap-align': 'center' }),
    ...(height !== undefined && {
      '--df-carousel-height': typeof height === 'number' ? `${height}px` : height,
    }),
    ...style,
  }), [align, gap, height, peek, perPage, style]);

  /**
   * Renders one position in the strip.
   *
   * A child that is already a `DCarousel.Slide` is CLONED so its own className
   * and props survive; anything else is wrapped. Both spellings work on
   * purpose — `<DCarousel.Slide>` when the slide needs props of its own, a bare
   * element when it does not — and neither produces a slide inside a slide.
   */
  const renderSlide = (slide: ReactNode, index: number, clone?: 'head' | 'tail') => {
    // A clone is the same content at a different point in the strip, so the key
    // has to say which copy it is or React will reuse one for the other.
    const key = `${clone ?? 'slide'}-${index}`;
    const injected = {
      index,
      total: slideCount,
      active: !clone && index === activeIndex,
      /*
       * The window is in REAL indices, and a clone carries the real index of
       * the slide it copies — so the same comparison answers for both, which
       * is what makes a clone's deferred media load while it is the thing on
       * screen.
       */
      visible: index >= visible.first && index <= visible.last,
      clone,
    };

    if (isValidElement(slide) && slide.type === DCarouselSlide) {
      return cloneElement(slide as React.ReactElement<SlideProps>, { key, ...injected });
    }
    return <DCarouselSlide key={key} {...injected}>{slide}</DCarouselSlide>;
  };

  return (
    <div
      ref={rootRef}
      className={classNames('df-carousel', className)}
      style={cssVars}
      {...label && {
        'aria-roledescription': 'carousel',
        'aria-label': label,
        role: 'group',
      }}
      {...draggable && { 'data-draggable': '' }}
      {...variableWidth && { 'data-variable-width': '' }}
      {...dataAttributes}
    >
      <div
        ref={viewportRef}
        id={viewportId}
        className="df-carousel-viewport"
        /*
         * Focusable because it SCROLLS. A region a keyboard cannot
         * reach fails WCAG 2.1.1, and once it is focused the browser's own
         * arrow-key scrolling is the navigation — which is why there is no key
         * handler here to get wrong. The lint rule is about decorative elements
         * being made tab stops; this one is the interactive part.
         */
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
        role="group"
        aria-label={i18n.slides}
        /*
         * No `aria-live` here, deliberately.
         *
         * The APG carousel pattern puts one on the slide container, and it
         * works there because that pattern hides every slide but the current
         * one — so moving IS a DOM change, and there is something to announce.
         * Every slide is always present in this one, which is the better
         * structure: a screen-reader user can walk the whole strip with a
         * virtual cursor instead of being handed one slide at a time.
         *
         * A live region over content that never changes announces nothing. It
         * would be a promise in the markup that the component cannot keep.
         */
      >
        {cloneCount > 0 && slides
          .slice(slideCount - cloneCount)
          .map((slide, i) => renderSlide(slide, slideCount - cloneCount + i, 'head'))}

        {slides.map((slide, index) => renderSlide(slide, index))}

        {cloneCount > 0 && slides
          .slice(0, cloneCount)
          .map((slide, i) => renderSlide(slide, i, 'tail'))}
      </div>

      {arrows && slideCount > 0 && (
        <>
          <button
            type="button"
            className="df-carousel-arrow"
            data-direction="prev"
            aria-label={i18n.prev}
            disabled={!canPrev}
            onClick={() => move(-1)}
          >
            <DIcon icon={chevronLeft} {...iconArrowLeft} />
          </button>
          <button
            type="button"
            className="df-carousel-arrow"
            data-direction="next"
            aria-label={i18n.next}
            disabled={!canNext}
            onClick={() => move(1)}
          >
            <DIcon icon={chevronRight} {...iconArrowRight} />
          </button>
        </>
      )}

      {(pagination || autoplay) && slideCount > 0 && (
        <div className="df-carousel-controls">
          {autoplay && (
            <button
              type="button"
              className="df-carousel-autoplay"
              // The label tracks the USER's choice, not whether slides happen
              // to be moving this instant: hovering holds the strip, and a
              // button that relabels itself under the pointer is unusable.
              aria-label={paused ? i18n.play : i18n.pause}
              aria-pressed={paused}
              onClick={togglePlay}
            >
              <DIcon icon={paused ? play : pause} />
            </button>
          )}

          {pagination && pageCount > 1 && (
            <div className="df-carousel-pagination" role="tablist" aria-label={i18n.goToSlide}>
              {Array.from({ length: pageCount }, (_, page) => (
                <button
                  key={`page-${page}`}
                  type="button"
                  role="tab"
                  className="df-carousel-page"
                  aria-label={`${i18n.goToSlide} ${page + 1}`}
                  aria-selected={page === activePage}
                  tabIndex={page === activePage ? 0 : -1}
                  onClick={() => goToPage(page)}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

const ForwardedDCarousel = forwardRef<DCarouselHandle, Props>(DCarousel);
ForwardedDCarousel.displayName = 'DCarousel';

export default Object.assign(ForwardedDCarousel, {
  Slide: DCarouselSlide,
  /*
   * The three controls, for a layout that puts them outside the carousel.
   * They take a controller rather than reading a context, so they work at any
   * distance — see `controller.ts` on why that is an object and not an id.
   */
  Prev: DCarouselPrev,
  Next: DCarouselNext,
  Pagination: DCarouselPagination,
  Autoplay: DCarouselAutoplay,
});
