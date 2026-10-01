import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
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
import { useCarousel } from './useCarousel';

import { useDContext } from '../../contexts';
import type { ResponsiveProp } from '../../hooks/useResponsiveProp';
import type { BaseProps } from '../interface';
import type { CarouselAlign, CarouselLoop, CarouselPerMove } from './useCarousel';
import type { Props as SlideProps } from './components/DCarouselSlide';

/** A step on the 4px spacing scale, matching `DLayout`'s `gap`. */
export type DCarouselSpacing =
  | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;

type Responsive<T> = T | ResponsiveProp<T>;

export type DCarouselI18n = {
  prev: string;
  next: string;
  slides: string;
  goToSlide: string;
  play: string;
  pause: string;
};

const DEFAULT_I18N: DCarouselI18n = {
  prev: 'Previous slide',
  next: 'Next slide',
  slides: 'Slides',
  goToSlide: 'Go to slide',
  play: 'Start automatic slide show',
  pause: 'Pause automatic slide show',
};

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
  /** Milliseconds between automatic moves. */
  interval?: number;
  pauseOnHover?: boolean;
  arrows?: boolean;
  pagination?: boolean;
  /** Mouse drag. Touch always scrolls — that is the browser's, not ours. */
  draggable?: boolean;
  /** A fixed height for the strip. Slides stretch to it. */
  height?: string | number;
  /**
   * Overrides for the arrow icons. Both default to the context's icon map, so
   * a consumer who has already swapped their icon set does not have to name
   * them again here.
   */
  iconArrowLeft?: Partial<ComponentProps<typeof DIcon>>;
  iconArrowRight?: Partial<ComponentProps<typeof DIcon>>;
  /** Fires with the index of the slide that came to rest at the alignment point. */
  onSlideChange?: (index: number) => void;
  /** Overrides for the control labels. */
  i18n?: Partial<DCarouselI18n>;
}>;

export type DCarouselHandle = {
  next: () => void;
  prev: () => void;
  goToPage: (page: number) => void;
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
    height,
    iconArrowLeft,
    iconArrowRight,
    onSlideChange,
    i18n: i18nProp,
  }: Props,
  ref: React.ForwardedRef<DCarouselHandle>,
) {
  const rootRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  const i18n = useMemo(() => ({ ...DEFAULT_I18N, ...i18nProp }), [i18nProp]);

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

  const {
    activeIndex,
    pageCount,
    activePage,
    canPrev,
    canNext,
    paused,
    togglePlay,
    goToPage,
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
    interval,
    pauseOnHover,
    draggable,
  });

  useImperativeHandle(ref, () => ({
    next: () => move(1),
    prev: () => move(-1),
    goToPage,
    element: rootRef.current,
  }), [goToPage, move]);

  useEffect(() => {
    onSlideChange?.(activeIndex);
  }, [activeIndex, onSlideChange]);

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
      {...label && { 'aria-roledescription': 'carousel', 'aria-label': label, role: 'group' }}
      {...draggable && { 'data-draggable': '' }}
      {...dataAttributes}
    >
      <div
        ref={viewportRef}
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
});
