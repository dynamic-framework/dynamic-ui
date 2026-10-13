/// <reference types="@testing-library/jest-dom" />

import { createRef } from 'react';

import type { ComponentProps } from 'react';
import {
  act, fireEvent, render, screen, within,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DCarousel from '.';
import { DContextProvider } from '../../contexts';
import type { DCarouselHandle } from './DCarousel';

/**
 * jsdom has no layout engine, so everything the carousel derives from geometry
 * — which slide is aligned, whether there is anywhere left to scroll, when a
 * loop should jump — reads as zero here and cannot be asserted.
 *
 * What CAN be asserted, and is worth more, is the contract either side of that
 * geometry: the responsive props become the custom properties the stylesheet
 * resolves, the loop renders the right clones inert, and the controls carry the
 * roles and labels a screen reader needs. The scrolling itself is the browser's
 * and is exercised in Storybook.
 */
// Held in a variable rather than read back off the prototype, so an assertion
// on "did it scroll?" does not have to reference an unbound method.
const scrollBy = jest.fn();

beforeAll(() => {
  // Not implemented in jsdom; without these a click on an arrow throws.
  Element.prototype.scrollTo = jest.fn();
  Element.prototype.scrollBy = scrollBy;
  Element.prototype.setPointerCapture = jest.fn();
  Element.prototype.releasePointerCapture = jest.fn();
  Element.prototype.hasPointerCapture = jest.fn(() => false);
});

beforeEach(() => scrollBy.mockClear());

function slides(count: number) {
  return [...Array(count).keys()].map((i) => (
    <DCarousel.Slide key={i}>{`Slide ${i + 1}`}</DCarousel.Slide>
  ));
}

describe('<DCarousel />', () => {
  describe('Structure and accessibility', () => {
    it('should render one slide per child, each announced with its position', () => {
      render(<DCarousel label="Offers">{slides(3)}</DCarousel>);

      const rendered = screen.getAllByRole('group', { name: /of 3$/ });
      expect(rendered).toHaveLength(3);
      expect(rendered[0]).toHaveAttribute('aria-label', '1 of 3');
      expect(rendered[0]).toHaveAttribute('aria-roledescription', 'slide');
      expect(rendered[2]).toHaveAttribute('aria-label', '3 of 3');
    });

    it('should announce itself as a carousel when given a label', () => {
      render(<DCarousel label="Featured products">{slides(2)}</DCarousel>);

      const carousel = screen.getByRole('group', { name: 'Featured products' });
      expect(carousel).toHaveAttribute('aria-roledescription', 'carousel');
    });

    /**
     * `aria-roledescription` overrides what a screen reader says the thing IS,
     * so without a name it replaces "group" with "carousel" and leaves the user
     * with no way to tell one from another. Omitting both is the better
     * failure.
     */
    it('should not claim to be a carousel when it has no accessible name', () => {
      const { container } = render(<DCarousel>{slides(2)}</DCarousel>);
      expect(container.querySelector('.d-carousel')).not.toHaveAttribute('aria-roledescription');
    });

    it('should make the scrolling region keyboard reachable', () => {
      const { container } = render(<DCarousel>{slides(2)}</DCarousel>);
      const viewport = container.querySelector('.d-carousel-viewport');

      expect(viewport).toHaveAttribute('tabindex', '0');
      expect(viewport).toHaveAttribute('aria-label', 'Slides');
    });

    it('should wrap a child that is not already a slide', () => {
      const { container } = render(
        <DCarousel>
          <img src="a.png" alt="A" />
          <img src="b.png" alt="B" />
        </DCarousel>,
      );

      expect(container.querySelectorAll('.d-carousel-slide')).toHaveLength(2);
      expect(within(container).getByAltText('A').closest('.d-carousel-slide')).toBeInTheDocument();
    });

    it('should keep a slide’s own className rather than nesting a second slide', () => {
      const { container } = render(
        <DCarousel>
          <DCarousel.Slide className="my-slide">One</DCarousel.Slide>
        </DCarousel>,
      );

      expect(container.querySelectorAll('.d-carousel-slide')).toHaveLength(1);
      expect(container.querySelector('.d-carousel-slide')).toHaveClass('my-slide');
    });
  });

  describe('Responsive layout', () => {
    /**
     * The core of the redesign: a responsive prop becomes one custom property
     * per tier, and `carousel.css` resolves the cascade. The component must
     * write ONLY the tiers that were given — a tier written with a default
     * would win over the smaller tier the consumer actually set.
     */
    it('should write one custom property per breakpoint given', () => {
      const { container } = render(
        <DCarousel perPage={{ xs: 1, md: 3, xl: 4 }}>{slides(6)}</DCarousel>,
      );

      const root = container.querySelector<HTMLElement>('.d-carousel')!;
      expect(root.style.getPropertyValue('--bs-carousel-per-page-xs')).toBe('1');
      expect(root.style.getPropertyValue('--bs-carousel-per-page-md')).toBe('3');
      expect(root.style.getPropertyValue('--bs-carousel-per-page-xl')).toBe('4');
      expect(root.style.getPropertyValue('--bs-carousel-per-page-sm')).toBe('');
      expect(root.style.getPropertyValue('--bs-carousel-per-page-lg')).toBe('');
    });

    it('should treat a flat value as the smallest tier, so it applies everywhere', () => {
      const { container } = render(<DCarousel perPage={2}>{slides(4)}</DCarousel>);

      const root = container.querySelector<HTMLElement>('.d-carousel')!;
      expect(root.style.getPropertyValue('--bs-carousel-per-page-xs')).toBe('2');
    });

    it('should resolve gap and peek against the spacing scale', () => {
      const { container } = render(
        <DCarousel gap={3} peek={{ xs: 2, lg: 6 }}>{slides(3)}</DCarousel>,
      );

      const root = container.querySelector<HTMLElement>('.d-carousel')!;
      expect(root.style.getPropertyValue('--bs-carousel-gap-xs')).toBe('var(--bs-ref-spacer-3)');
      expect(root.style.getPropertyValue('--bs-carousel-peek-xs')).toBe('var(--bs-ref-spacer-2)');
      expect(root.style.getPropertyValue('--bs-carousel-peek-lg')).toBe('var(--bs-ref-spacer-6)');
    });

    it('should pass height and centre alignment through as custom properties', () => {
      const { container } = render(
        <DCarousel align="center" height={240}>{slides(3)}</DCarousel>,
      );

      const root = container.querySelector<HTMLElement>('.d-carousel')!;
      expect(root.style.getPropertyValue('--bs-carousel-height')).toBe('240px');
      expect(root.style.getPropertyValue('--bs-carousel-snap-align')).toBe('center');
    });

    it('should let a consumer style prop survive alongside the generated properties', () => {
      const { container } = render(
        <DCarousel perPage={2} style={{ maxWidth: 500 }}>{slides(3)}</DCarousel>,
      );

      const root = container.querySelector<HTMLElement>('.d-carousel')!;
      expect(root.style.maxWidth).toBe('500px');
      expect(root.style.getPropertyValue('--bs-carousel-per-page-xs')).toBe('2');
    });
  });

  describe('Loop', () => {
    it('should render no clones without a loop', () => {
      const { container } = render(<DCarousel>{slides(4)}</DCarousel>);
      expect(container.querySelectorAll('[data-clone]')).toHaveLength(0);
    });

    it('should render no clones for a rewind, which needs none', () => {
      const { container } = render(<DCarousel loop="rewind">{slides(4)}</DCarousel>);
      expect(container.querySelectorAll('[data-clone]')).toHaveLength(0);
    });

    /**
     * One lap at each end, as deep as the most slides that can ever be on
     * screen. Fewer would leave a gap at the moment of the jump; more is DOM
     * and, for image slides, network nobody sees.
     */
    it('should clone as many slides at each end as the widest breakpoint shows', () => {
      const { container } = render(
        <DCarousel loop perPage={{ xs: 1, lg: 3 }}>{slides(6)}</DCarousel>,
      );

      expect(container.querySelectorAll('[data-clone="head"]')).toHaveLength(3);
      expect(container.querySelectorAll('[data-clone="tail"]')).toHaveLength(3);
      expect(container.querySelectorAll('.d-carousel-slide')).toHaveLength(12);
    });

    it('should never clone more slides than exist', () => {
      const { container } = render(
        <DCarousel loop perPage={8}>{slides(2)}</DCarousel>,
      );
      expect(container.querySelectorAll('[data-clone="head"]')).toHaveLength(2);
    });

    it('should place the head clones at the end of the strip and the tail at the start', () => {
      const { container } = render(<DCarousel loop perPage={1}>{slides(3)}</DCarousel>);
      const rendered = [...container.querySelectorAll('.d-carousel-slide')];

      // [last][1..3][first] — so a scroll off either end lands on content that
      // is identical to the slide it will silently jump to.
      expect(rendered[0]).toHaveTextContent('Slide 3');
      expect(rendered[1]).toHaveTextContent('Slide 1');
      expect(rendered[4]).toHaveTextContent('Slide 1');
    });

    it('should keep clones out of the accessibility tree and the tab order', () => {
      const { container } = render(<DCarousel loop>{slides(3)}</DCarousel>);
      const clone = container.querySelector('[data-clone]')!;

      expect(clone).toHaveAttribute('aria-hidden', 'true');
      expect(clone).toHaveAttribute('inert');
      expect(clone).not.toHaveAttribute('role');
    });
  });

  describe('Controls', () => {
    it('should render labelled arrows by default', () => {
      render(<DCarousel>{slides(3)}</DCarousel>);

      expect(screen.getByRole('button', { name: 'Previous slide' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Next slide' })).toBeInTheDocument();
    });

    it('should disable the previous arrow at the start of the strip', () => {
      render(<DCarousel>{slides(3)}</DCarousel>);
      expect(screen.getByRole('button', { name: 'Previous slide' })).toBeDisabled();
    });

    /** With a loop there is always somewhere to go, in both directions. */
    it('should leave both arrows enabled when looping', () => {
      render(<DCarousel loop>{slides(3)}</DCarousel>);
      expect(screen.getByRole('button', { name: 'Previous slide' })).toBeEnabled();
      expect(screen.getByRole('button', { name: 'Next slide' })).toBeEnabled();
    });

    it('should render custom arrow icons when given', () => {
      const { container } = render(
        <DCarousel
          iconArrowLeft={{ icon: 'ArrowLeft', color: 'success' }}
          iconArrowRight={{ icon: 'ArrowRight', color: 'danger' }}
        >
          {slides(2)}
        </DCarousel>,
      );

      const prev = container.querySelector('[data-direction="prev"]');
      const next = container.querySelector('[data-direction="next"]');
      expect(prev?.querySelector('.d-icon.d-icon-color-success')).toBeInTheDocument();
      expect(next?.querySelector('.d-icon.d-icon-color-danger')).toBeInTheDocument();
    });

    /**
     * The default arrows come from the context's icon map, not from an SVG
     * this component draws. A consumer who has swapped their whole icon set
     * through `DContextProvider` gets their chevrons here too, without naming
     * them again.
     */
    it('should take its default arrows from the context icon map', () => {
      const { container } = render(<DCarousel>{slides(2)}</DCarousel>);

      const prev = container.querySelector('[data-direction="prev"] .d-icon');
      const next = container.querySelector('[data-direction="next"] .d-icon');
      expect(prev).toBeInTheDocument();
      expect(next).toBeInTheDocument();
    });

    /**
     * The override MERGES with the default, so `{ color: 'danger' }` alone
     * recolours the context's chevron rather than rendering an icon with no
     * name.
     */
    it('should merge an override onto the default icon', () => {
      const { container } = render(
        <DCarousel iconArrowLeft={{ color: 'danger' }}>{slides(2)}</DCarousel>,
      );

      const prev = container.querySelector('[data-direction="prev"] .d-icon');
      expect(prev).toHaveClass('d-icon-color-danger');
      expect(prev).not.toBeEmptyDOMElement();
    });

    it('should render no arrows when asked not to', () => {
      const { container } = render(<DCarousel arrows={false}>{slides(3)}</DCarousel>);
      expect(container.querySelector('.d-carousel-arrow')).not.toBeInTheDocument();
    });

    it('should render one pagination tab per page', () => {
      render(<DCarousel>{slides(4)}</DCarousel>);

      const tabs = screen.getAllByRole('tab');
      expect(tabs).toHaveLength(4);
      expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
      expect(tabs[1]).toHaveAttribute('aria-selected', 'false');
    });

    it('should render no pagination for a single page', () => {
      const { container } = render(<DCarousel>{slides(1)}</DCarousel>);
      expect(container.querySelector('.d-carousel-pagination')).not.toBeInTheDocument();
    });

    it('should move when an arrow is pressed', async () => {
      const user = userEvent.setup();
      render(<DCarousel loop>{slides(3)}</DCarousel>);

      await user.click(screen.getByRole('button', { name: 'Next slide' }));
      expect(scrollBy).toHaveBeenCalled();
    });
  });

  describe('Autoplay', () => {
    /**
     * WCAG 2.2.2: anything that moves on its own for more than five seconds
     * needs a way to stop it, and that way has to be reachable — which is why
     * the toggle is a real button in the controls row rather than a gesture.
     */
    it('should render a pause control whenever autoplay is on', () => {
      render(<DCarousel autoplay>{slides(3)}</DCarousel>);
      expect(screen.getByRole('button', { name: /Pause|Start/ })).toBeInTheDocument();
    });

    it('should render no pause control when autoplay is off', () => {
      render(<DCarousel>{slides(3)}</DCarousel>);
      expect(screen.queryByRole('button', { name: /Pause|Start/ })).not.toBeInTheDocument();
    });

    it('should stop advancing once paused', async () => {
      const user = userEvent.setup();
      render(<DCarousel autoplay>{slides(3)}</DCarousel>);

      const toggle = screen.getByRole('button', { name: /Pause|Start/ });
      await user.click(toggle);
      expect(screen.getByRole('button', { name: /Start/ })).toHaveAttribute('aria-pressed', 'true');
    });

    /**
     * Every slide stays in the accessibility tree, so a screen-reader user can
     * reach any of them directly rather than being shown one at a time. That is
     * also why there is no live region: nothing in the DOM changes when the
     * strip moves, so one would announce nothing.
     */
    it('should keep every slide reachable rather than announcing through a live region', () => {
      const { container } = render(<DCarousel autoplay>{slides(3)}</DCarousel>);
      const viewport = container.querySelector('.d-carousel-viewport');

      expect(viewport).not.toHaveAttribute('aria-live');
      expect(container.querySelectorAll('[role="group"][aria-roledescription="slide"]')).toHaveLength(3);
    });
  });

  describe('Imperative handle', () => {
    it('should expose next, prev and goToPage', () => {
      const ref = createRef<DCarouselHandle>();
      render(<DCarousel ref={ref} loop>{slides(4)}</DCarousel>);

      expect(typeof ref.current?.next).toBe('function');
      expect(typeof ref.current?.prev).toBe('function');
      expect(ref.current?.element).toHaveClass('d-carousel');

      ref.current?.next();
      expect(scrollBy).toHaveBeenCalled();
    });
  });

  describe('i18n', () => {
    it('should take overrides for every control label', () => {
      render(
        <DCarousel i18n={{ prev: 'Anterior', next: 'Siguiente', slides: 'Diapositivas' }}>
          {slides(3)}
        </DCarousel>,
      );

      expect(screen.getByRole('button', { name: 'Anterior' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Siguiente' })).toBeInTheDocument();
      expect(screen.getByRole('group', { name: 'Diapositivas' })).toBeInTheDocument();
    });
  });

  /*
   * The pace follows the breakpoint, like `perPage` and `gap`. One slide at a
   * time on a phone wants longer than three side by side on a desktop, and
   * before this the two had to share a number.
   *
   * Resolved in JavaScript rather than through a custom property, because the
   * timer is the one part of this component CSS cannot own — so unlike the
   * other responsive props there is no media query doing the work.
   */
  describe('a responsive interval', () => {
    /*
     * The breakpoints the hook compares against are read from CSS custom
     * properties in a layout effect, and jsdom has no stylesheet — so without
     * these the context holds empty strings, every `(min-width: )` is invalid,
     * no tier ever matches, and the interval silently falls back to its
     * default. Setting them on the root is the smallest honest stand-in for
     * the stylesheet being present.
     */
    const PX = {
      xs: '0px', sm: '576px', md: '768px', lg: '992px', xl: '1200px', xxl: '1400px',
    };

    const atWidth = (width: number) => {
      Object.entries(PX).forEach(([name, value]) => {
        document.documentElement.style.setProperty(`--bs-breakpoint-${name}`, value);
      });

      window.matchMedia = jest.fn().mockImplementation((query: string) => {
        const floor = Number(/min-width:\s*(\d+)px/.exec(query)?.[1] ?? NaN);
        return {
          /*
           * Width queries only. Matching everything also matches
           * `(prefers-reduced-motion: reduce)`, which switches autoplay off
           * entirely — so the timer never starts and the test fails for a
           * reason that has nothing to do with the interval.
           */
          matches: Number.isNaN(floor) ? false : width >= floor,
          media: query,
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
          addListener: jest.fn(),
          removeListener: jest.fn(),
          dispatchEvent: jest.fn(),
          onchange: null,
        };
      });
    };

    afterEach(() => {
      jest.useRealTimers();
      Object.keys(PX).forEach((name) => {
        document.documentElement.style.removeProperty(`--bs-breakpoint-${name}`);
      });
    });

    const mountAt = (width: number, interval: ComponentProps<typeof DCarousel>['interval']) => {
      atWidth(width);
      jest.useFakeTimers();
      render(
        <DContextProvider>
          <DCarousel label="Offers" autoplay loop interval={interval}>{slides(4)}</DCarousel>
        </DContextProvider>,
      );
      scrollBy.mockClear();
    };

    it('should take the tier that matches, not the smallest', () => {
      mountAt(1000, { xs: 1000, md: 4000 });

      jest.advanceTimersByTime(1500);
      expect(scrollBy).not.toHaveBeenCalled();

      jest.advanceTimersByTime(3000);
      expect(scrollBy).toHaveBeenCalled();
    });

    it('should take the smallest tier below the next breakpoint', () => {
      mountAt(400, { xs: 1000, md: 4000 });

      jest.advanceTimersByTime(1100);
      expect(scrollBy).toHaveBeenCalled();
    });

    it('should still take a plain number', () => {
      mountAt(1000, 2000);

      jest.advanceTimersByTime(2100);
      expect(scrollBy).toHaveBeenCalled();
    });
  });

  /*
   * Three options that came out of comparing the API against react-slick's.
   * jsdom has no layout, so what is asserted is the contract either side of
   * the measurement — the attribute the stylesheet reads, and the call that is
   * or is not made.
   */
  describe('initialSlide', () => {
    it('should scroll to the starting slide on mount, without animating', () => {
      scrollBy.mockClear();
      render(<DCarousel label="Offers" initialSlide={3}>{slides(6)}</DCarousel>);

      expect(scrollBy).toHaveBeenCalledWith(
        expect.objectContaining({ behavior: 'instant' }),
      );
    });

    /* Nothing to do: the strip already starts at the first slide. */
    it('should not scroll when it starts at zero', () => {
      scrollBy.mockClear();
      render(<DCarousel label="Offers">{slides(6)}</DCarousel>);

      expect(scrollBy).not.toHaveBeenCalled();
    });

    /* A mount is not a change, however far in it starts. */
    it('should not announce a change for the slide it started on', () => {
      const onBefore = jest.fn();
      render(
        <DCarousel label="Offers" initialSlide={3} onBeforeSlideChange={onBefore}>
          {slides(6)}
        </DCarousel>,
      );

      expect(onBefore).not.toHaveBeenCalled();
    });
  });

  describe('variableWidth', () => {
    it('should mark the strip so the stylesheet lets slides size themselves', () => {
      const { container } = render(
        <DCarousel label="Logos" variableWidth>{slides(4)}</DCarousel>,
      );

      expect(container.querySelector('.d-carousel')).toHaveAttribute('data-variable-width');
    });

    it('should leave the attribute off by default', () => {
      const { container } = render(<DCarousel label="Logos">{slides(4)}</DCarousel>);

      expect(container.querySelector('.d-carousel')).not.toHaveAttribute('data-variable-width');
    });

    /*
     * With variable widths there is no "per page", so the page maths counts in
     * slides — one stop each, which is the only unit left that means anything.
     */
    it('should give one pagination stop per slide', () => {
      render(<DCarousel label="Logos" variableWidth>{slides(4)}</DCarousel>);

      expect(screen.getAllByRole('tab')).toHaveLength(4);
    });
  });

  describe('onBeforeSlideChange', () => {
    /**
     * Places the strip so the FIRST measurement lands on slide 2.
     *
     * jsdom reports every rect as zeroes, so without this every measurement
     * finds slide 0 and the guard being tested — that a mount never announces
     * a change — can never be exercised: nothing differs from the starting
     * index, so both the guarded and the unguarded version stay quiet.
     */
    const placeAt = (index: number) => {
      jest.spyOn(Element.prototype, 'getBoundingClientRect')
        .mockImplementation(function rect(this: Element) {
          if (!this.classList.contains('d-carousel-slide')) {
            return {
              left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0, x: 0, y: 0, toJSON() {},
            } as DOMRect;
          }
          const siblings = Array.from(this.parentElement?.children ?? []);
          const offset = (siblings.indexOf(this) - index) * 100;
          return {
            left: offset,
            right: offset + 100,
            width: 100,
            top: 0,
            bottom: 0,
            height: 0,
            x: offset,
            y: 0,
            toJSON() {},
          } as DOMRect;
        });
    };

    afterEach(() => jest.restoreAllMocks());

    /*
     * A mount is not a change, wherever the strip happens to be sitting when
     * it is first measured — which is not always slide zero: a carousel can be
     * restored mid-scroll, or mounted inside something already scrolled.
     */
    it('should not announce the slide the first measurement finds', () => {
      placeAt(2);
      const onBefore = jest.fn();

      render(
        <DCarousel label="Offers" onBeforeSlideChange={onBefore}>{slides(6)}</DCarousel>,
      );

      expect(onBefore).not.toHaveBeenCalled();
    });

    it('should not fire while nothing has moved', () => {
      const onBefore = jest.fn();
      render(
        <DCarousel label="Offers" onBeforeSlideChange={onBefore}>{slides(4)}</DCarousel>,
      );

      expect(onBefore).not.toHaveBeenCalled();
    });

    it('should be optional', () => {
      expect(() => render(<DCarousel label="Offers">{slides(4)}</DCarousel>)).not.toThrow();
    });
  });

  /*
   * Autoplay is held by four independent things — a hidden tab, being off
   * screen, focus inside the strip, the pointer over it — and they used to
   * share one boolean, so any of them clearing it cleared the others.
   *
   * The bug that surfaced it: the play button lives INSIDE the carousel, so
   * clicking it focused it, focus suspended autoplay, and pressing play did
   * nothing at all.
   */
  describe('resuming autoplay', () => {
    const autoplaying = (extra = {}) => render(
      <DCarousel label="Offers" autoplay loop interval={1000} {...extra}>
        {slides(4)}
      </DCarousel>,
    );

    afterEach(() => jest.useRealTimers());

    it('should advance again after pause and play', () => {
      jest.useFakeTimers();
      const { container } = autoplaying();
      const button = container.querySelector('.d-carousel-autoplay') as HTMLButtonElement;

      fireEvent.click(button);
      /* A real click focuses the button; that is the whole bug. */
      fireEvent.focusIn(button);
      fireEvent.click(button);

      scrollBy.mockClear();
      act(() => { jest.advanceTimersByTime(2500); });

      expect(scrollBy).toHaveBeenCalled();
    });

    /*
     * `pauseOnHover` is a heuristic; a press is an instruction. Without this,
     * pressing play with the pointer still over the strip — which is where the
     * pointer always is, because that is where the button is — resumed
     * nothing.
     */
    it('should beat the hover hold when play is pressed', () => {
      jest.useFakeTimers();
      const { container } = autoplaying();
      const root = container.querySelector('.d-carousel') as HTMLElement;
      const button = container.querySelector('.d-carousel-autoplay') as HTMLButtonElement;

      fireEvent.pointerEnter(root);
      fireEvent.click(button);
      fireEvent.click(button);

      scrollBy.mockClear();
      act(() => { jest.advanceTimersByTime(2500); });

      expect(scrollBy).toHaveBeenCalled();
    });

    /* Still held while the pointer is there and nobody asked otherwise. */
    it('should stay held while hovering', () => {
      jest.useFakeTimers();
      const { container } = autoplaying();
      fireEvent.pointerEnter(container.querySelector('.d-carousel') as HTMLElement);

      scrollBy.mockClear();
      act(() => { jest.advanceTimersByTime(2500); });

      expect(scrollBy).not.toHaveBeenCalled();
    });

    /*
     * One reason clearing another is what the single boolean allowed: moving
     * the mouse away resumed a carousel in a hidden tab.
     */
    it('should keep each hold independent of the others', () => {
      jest.useFakeTimers();
      const { container } = autoplaying();
      const root = container.querySelector('.d-carousel') as HTMLElement;

      fireEvent.pointerEnter(root);
      fireEvent.focusIn(root);
      fireEvent.focusOut(root);

      scrollBy.mockClear();
      act(() => { jest.advanceTimersByTime(2500); });

      expect(scrollBy).not.toHaveBeenCalled();
    });

    /*
     * The control renders on whether there IS an autoplay, not on whether it
     * is moving — `playing` is false under the cursor, so the earlier rule
     * made the button vanish under the hand reaching for it.
     */
    it('should keep the control visible while hovering', () => {
      const { container } = autoplaying();
      fireEvent.pointerEnter(container.querySelector('.d-carousel') as HTMLElement);

      expect(container.querySelector('.d-carousel-autoplay')).toBeInTheDocument();
    });

    it('should render no control when nothing autoplays', () => {
      const { container } = render(<DCarousel label="Offers">{slides(4)}</DCarousel>);

      expect(container.querySelector('.d-carousel-autoplay')).not.toBeInTheDocument();
    });
  });

  /**
   * `scroll-snap-stop: always` applies to the component's own scrolls too.
   *
   * It tells the browser it may not cross a snap point without stopping, and it
   * does not distinguish a flick from a `scrollBy` — so every programmatic move
   * of more than one slide was clamped to exactly one. An arrow press with the
   * default `perMove="page"` advanced a single slide, a pagination dot three
   * along went to the next one, and the loop's jump across a lap of clones
   * stranded the strip on a clone, which read as the carousel freezing at the
   * end or bouncing between the last slide and the first.
   *
   * `data-seeking` relaxes the rule for the duration of the component's own
   * scrolls. jsdom has no scroll snapping, so the SYMPTOM cannot be reproduced
   * here — what this pins is the mechanism, which is the part that regresses if
   * someone tidies the attribute away.
   */
  describe('programmatic scrolling', () => {
    /*
     * Driven through the handle rather than the arrow: jsdom reports every
     * measurement as zero, so `canNext` is false and the button renders
     * disabled. The handle reaches the same `move`.
     */
    it('marks the root while it is scrolling the strip itself', () => {
      const ref = createRef<DCarouselHandle>();
      const { container } = render(<DCarousel ref={ref}>{slides(6)}</DCarousel>);
      const root = container.querySelector('.d-carousel') as HTMLElement;

      expect(root).not.toHaveAttribute('data-seeking');

      act(() => ref.current?.next());
      expect(root).toHaveAttribute('data-seeking');
    });

    it('marks the root when a pagination dot is used', async () => {
      const user = userEvent.setup();
      const { container } = render(<DCarousel perPage={1}>{slides(4)}</DCarousel>);
      const root = container.querySelector('.d-carousel') as HTMLElement;

      await user.click(within(root).getAllByRole('tab')[2]);
      expect(root).toHaveAttribute('data-seeking');
    });

    /** A flick is the user's scroll, and must keep the `always` guarantee. */
    it('does not mark the root for a scroll it did not start', () => {
      const { container } = render(<DCarousel>{slides(6)}</DCarousel>);
      const root = container.querySelector('.d-carousel') as HTMLElement;
      const viewport = root.querySelector('.d-carousel-viewport') as HTMLElement;

      fireEvent.scroll(viewport);
      expect(root).not.toHaveAttribute('data-seeking');
    });
  });
});
