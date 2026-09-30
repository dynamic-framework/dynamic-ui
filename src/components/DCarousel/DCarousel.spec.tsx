/// <reference types="@testing-library/jest-dom" />

import { createRef } from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DCarousel from '.';
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
      expect(container.querySelector('.df-carousel')).not.toHaveAttribute('aria-roledescription');
    });

    it('should make the scrolling region keyboard reachable', () => {
      const { container } = render(<DCarousel>{slides(2)}</DCarousel>);
      const viewport = container.querySelector('.df-carousel-viewport');

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

      expect(container.querySelectorAll('.df-carousel-slide')).toHaveLength(2);
      expect(within(container).getByAltText('A').closest('.df-carousel-slide')).toBeInTheDocument();
    });

    it('should keep a slide’s own className rather than nesting a second slide', () => {
      const { container } = render(
        <DCarousel>
          <DCarousel.Slide className="my-slide">One</DCarousel.Slide>
        </DCarousel>,
      );

      expect(container.querySelectorAll('.df-carousel-slide')).toHaveLength(1);
      expect(container.querySelector('.df-carousel-slide')).toHaveClass('my-slide');
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

      const root = container.querySelector<HTMLElement>('.df-carousel')!;
      expect(root.style.getPropertyValue('--df-carousel-per-page-xs')).toBe('1');
      expect(root.style.getPropertyValue('--df-carousel-per-page-md')).toBe('3');
      expect(root.style.getPropertyValue('--df-carousel-per-page-xl')).toBe('4');
      expect(root.style.getPropertyValue('--df-carousel-per-page-sm')).toBe('');
      expect(root.style.getPropertyValue('--df-carousel-per-page-lg')).toBe('');
    });

    it('should treat a flat value as the smallest tier, so it applies everywhere', () => {
      const { container } = render(<DCarousel perPage={2}>{slides(4)}</DCarousel>);

      const root = container.querySelector<HTMLElement>('.df-carousel')!;
      expect(root.style.getPropertyValue('--df-carousel-per-page-xs')).toBe('2');
    });

    it('should resolve gap and peek against the spacing scale', () => {
      const { container } = render(
        <DCarousel gap={3} peek={{ xs: 2, lg: 6 }}>{slides(3)}</DCarousel>,
      );

      const root = container.querySelector<HTMLElement>('.df-carousel')!;
      expect(root.style.getPropertyValue('--df-carousel-gap-xs')).toBe('var(--df-size-3)');
      expect(root.style.getPropertyValue('--df-carousel-peek-xs')).toBe('var(--df-size-2)');
      expect(root.style.getPropertyValue('--df-carousel-peek-lg')).toBe('var(--df-size-6)');
    });

    it('should pass height and centre alignment through as custom properties', () => {
      const { container } = render(
        <DCarousel align="center" height={240}>{slides(3)}</DCarousel>,
      );

      const root = container.querySelector<HTMLElement>('.df-carousel')!;
      expect(root.style.getPropertyValue('--df-carousel-height')).toBe('240px');
      expect(root.style.getPropertyValue('--df-carousel-snap-align')).toBe('center');
    });

    it('should let a consumer style prop survive alongside the generated properties', () => {
      const { container } = render(
        <DCarousel perPage={2} style={{ maxWidth: 500 }}>{slides(3)}</DCarousel>,
      );

      const root = container.querySelector<HTMLElement>('.df-carousel')!;
      expect(root.style.maxWidth).toBe('500px');
      expect(root.style.getPropertyValue('--df-carousel-per-page-xs')).toBe('2');
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
      expect(container.querySelectorAll('.df-carousel-slide')).toHaveLength(12);
    });

    it('should never clone more slides than exist', () => {
      const { container } = render(
        <DCarousel loop perPage={8}>{slides(2)}</DCarousel>,
      );
      expect(container.querySelectorAll('[data-clone="head"]')).toHaveLength(2);
    });

    it('should place the head clones at the end of the strip and the tail at the start', () => {
      const { container } = render(<DCarousel loop perPage={1}>{slides(3)}</DCarousel>);
      const rendered = [...container.querySelectorAll('.df-carousel-slide')];

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
      expect(prev?.querySelector('.df-icon[data-color="success"]')).toBeInTheDocument();
      expect(next?.querySelector('.df-icon[data-color="danger"]')).toBeInTheDocument();
    });

    /**
     * The default arrows come from the context's icon map, not from an SVG
     * this component draws. A consumer who has swapped their whole icon set
     * through `DContextProvider` gets their chevrons here too, without naming
     * them again.
     */
    it('should take its default arrows from the context icon map', () => {
      const { container } = render(<DCarousel>{slides(2)}</DCarousel>);

      const prev = container.querySelector('[data-direction="prev"] .df-icon');
      const next = container.querySelector('[data-direction="next"] .df-icon');
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

      const prev = container.querySelector('[data-direction="prev"] .df-icon');
      expect(prev).toHaveAttribute('data-color', 'danger');
      expect(prev).not.toBeEmptyDOMElement();
    });

    it('should render no arrows when asked not to', () => {
      const { container } = render(<DCarousel arrows={false}>{slides(3)}</DCarousel>);
      expect(container.querySelector('.df-carousel-arrow')).not.toBeInTheDocument();
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
      expect(container.querySelector('.df-carousel-pagination')).not.toBeInTheDocument();
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
      const viewport = container.querySelector('.df-carousel-viewport');

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
      expect(ref.current?.element).toHaveClass('df-carousel');

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
});
