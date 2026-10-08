/// <reference types="@testing-library/jest-dom" />

import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DCarousel, { createCarouselController, useDCarouselController } from '.';

/**
 * Controls that live somewhere else in the tree.
 *
 * jsdom has no layout engine, so everything the carousel derives from geometry
 * reads as zero here — which is why `loop` appears in most of these: with a
 * loop, `canPrev` and `canNext` are true by definition rather than by
 * measurement, and the wiring can be asserted without a browser.
 *
 * What is being checked is the CONNECTION: that state crosses from the
 * carousel to controls it shares no ancestor with, that actions cross back,
 * and that the relationship is stated for assistive technology — the last of
 * which only matters because of the distance.
 */
/*
 * Held in variables rather than read back off the prototype, so an assertion
 * on "did it scroll?" does not have to reference an unbound method — the same
 * reason `DCarousel.spec.tsx` does it this way.
 */
const scrollBy = jest.fn();
const scrollTo = jest.fn();

beforeAll(() => {
  Element.prototype.scrollTo = scrollTo;
  Element.prototype.scrollBy = scrollBy;
  Element.prototype.setPointerCapture = jest.fn();
  Element.prototype.releasePointerCapture = jest.fn();
  Element.prototype.hasPointerCapture = jest.fn(() => false);
});

beforeEach(() => {
  scrollBy.mockClear();
  scrollTo.mockClear();
});

function slides(count: number) {
  return [...Array(count).keys()].map((i) => (
    <DCarousel.Slide key={i}>{`Slide ${i + 1}`}</DCarousel.Slide>
  ));
}

/**
 * The controls and the carousel share only the root, which is the layout the
 * controller exists for: a header in one branch, the strip in another, and no
 * context between them.
 */
function FarApart(
  { count = 4, loop = false }: { count?: number; loop?: boolean },
) {
  const hero = useDCarouselController();

  return (
    <div>
      <header data-testid="header">
        <DCarousel.Prev controller={hero} />
        <DCarousel.Next controller={hero} />
        <DCarousel.Pagination controller={hero} />
        <span data-testid="readout">
          {hero.connected ? `${hero.activePage + 1}/${hero.pageCount}` : 'disconnected'}
        </span>
      </header>
      <main data-testid="main">
        <DCarousel label="Offers" controller={hero} arrows={false} pagination={false} loop={loop}>
          {slides(count)}
        </DCarousel>
      </main>
    </div>
  );
}

describe('useDCarouselController', () => {
  describe('the connection', () => {
    it('should report the carousel as connected once it mounts', () => {
      render(<FarApart />);
      expect(screen.getByTestId('readout')).not.toHaveTextContent('disconnected');
    });

    /* The controls are in `header`, the carousel in `main`: no shared context. */
    it('should drive a carousel it shares no ancestor with', async () => {
      const user = userEvent.setup();
      render(<FarApart count={4} loop />);

      const header = screen.getByTestId('header');
      expect(within(header).getByRole('button', { name: 'Next slide' })).toBeInTheDocument();
      expect(within(screen.getByTestId('main')).queryByRole('button', { name: 'Next slide' }))
        .not.toBeInTheDocument();

      await user.click(within(header).getByRole('button', { name: 'Next slide' }));
      expect(scrollBy).toHaveBeenCalled();
    });

    it('should publish the page count for a control to render', () => {
      render(<FarApart count={4} />);
      expect(screen.getByTestId('readout')).toHaveTextContent('1/4');
    });

    it('should go back to disconnected when the carousel unmounts', () => {
      function Toggling({ mounted }: { mounted: boolean }) {
        const hero = useDCarouselController();
        return (
          <div>
            <span data-testid="readout">{hero.connected ? 'connected' : 'disconnected'}</span>
            {mounted && <DCarousel label="Offers" controller={hero}>{slides(3)}</DCarousel>}
          </div>
        );
      }

      const { rerender } = render(<Toggling mounted />);
      expect(screen.getByTestId('readout')).toHaveTextContent('connected');

      rerender(<Toggling mounted={false} />);
      expect(screen.getByTestId('readout')).toHaveTextContent('disconnected');
    });
  });

  /*
   * The whole reason the `ref` was not enough: it carries no state and never
   * re-renders whoever holds it, so external arrows could be wired but never
   * disabled.
   */
  describe('the arrows', () => {
    it('should be disabled while nothing is connected', () => {
      function Alone() {
        const hero = useDCarouselController();
        return <DCarousel.Prev controller={hero} />;
      }

      render(<Alone />);
      expect(screen.getByRole('button', { name: 'Previous slide' })).toBeDisabled();
    });

    /* In jsdom there is nowhere to scroll, so both ends read as unreachable. */
    it('should be disabled at an end', () => {
      render(<FarApart count={4} />);
      expect(screen.getByRole('button', { name: 'Previous slide' })).toBeDisabled();
    });

    it('should be enabled when the carousel loops, which has no ends', () => {
      render(<FarApart count={4} loop />);
      expect(screen.getByRole('button', { name: 'Previous slide' })).toBeEnabled();
      expect(screen.getByRole('button', { name: 'Next slide' })).toBeEnabled();
    });

    /*
     * The built-in arrows carry no `aria-controls` — they sit inside the
     * carousel and proximity does the work. A button on the other side of the
     * page has no relationship to the strip it drives unless it says so.
     */
    it('should point at the scrolling region it drives', () => {
      const { container } = render(<FarApart count={4} loop />);

      const viewport = container.querySelector('.df-carousel-viewport');
      const target = screen.getByRole('button', { name: 'Next slide' })
        .getAttribute('aria-controls');

      expect(target).toBeTruthy();
      expect(viewport).toHaveAttribute('id', target);
    });

    it('should take its words from the page language', () => {
      function Translated() {
        const hero = useDCarouselController();
        return <DCarousel.Prev controller={hero} i18n={{ prev: 'Anterior' }} />;
      }

      render(<Translated />);
      expect(screen.getByRole('button', { name: 'Anterior' })).toBeInTheDocument();
    });
  });

  describe('the pagination', () => {
    it('should render one stop per page, with the first selected', () => {
      render(<FarApart count={4} />);

      const tabs = screen.getAllByRole('tab');
      expect(tabs).toHaveLength(4);
      expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
    });

    /* One Tab stop for the group, not `pageCount` of them. */
    it('should rove the tab stop rather than hold one per dot', () => {
      render(<FarApart count={4} />);

      const tabs = screen.getAllByRole('tab');
      expect(tabs[0]).toHaveAttribute('tabindex', '0');
      expect(tabs[1]).toHaveAttribute('tabindex', '-1');
    });

    it('should move the carousel when a stop is clicked', async () => {
      const user = userEvent.setup();
      render(<FarApart count={4} />);

      await user.click(screen.getAllByRole('tab')[2]);
      expect(scrollTo).toHaveBeenCalled();
    });

    /* A pagination with one dot is a control with nothing to control. */
    it('should render nothing below two stops', () => {
      render(<FarApart count={1} />);
      expect(screen.queryByRole('tablist')).not.toBeInTheDocument();
    });

    it('should render nothing while no carousel is connected', () => {
      function Alone() {
        const hero = useDCarouselController();
        return <DCarousel.Pagination controller={hero} />;
      }

      render(<Alone />);
      expect(screen.queryByRole('tablist')).not.toBeInTheDocument();
    });
  });

  describe('alongside the built-in controls', () => {
    /*
     * `arrows` and `pagination` are independent of the controller, so both
     * sets can be shown at once — a strip with its own arrows and a page
     * header that also drives it.
     */
    it('should leave the built-in controls working', () => {
      function Both() {
        const hero = useDCarouselController();
        return (
          <div>
            <header data-testid="header"><DCarousel.Next controller={hero} /></header>
            <DCarousel label="Offers" controller={hero} loop>{slides(3)}</DCarousel>
          </div>
        );
      }

      render(<Both />);
      expect(screen.getAllByRole('button', { name: 'Next slide' })).toHaveLength(2);
    });
  });

  /*
   * Connecting is not idempotent: the effect's cleanup reports "no carousel
   * attached", so an effect that re-runs connects, disconnects and connects
   * again — and each of those is a state change the controls re-render on,
   * which re-runs the effect. A single action that forgot its `useCallback`
   * turned that into a loop React could only stop at its nested-update limit.
   *
   * This pins the property whose violation caused it, rather than the symptom:
   * one mount, one connection, however much the carousel re-renders.
   */
  describe('connecting once', () => {
    it('should connect a single time across re-renders', async () => {
      const user = userEvent.setup();
      const store = createCarouselController();
      const connect = jest.spyOn(store, 'connect');

      const { rerender } = render(
        <DCarousel label="Offers" controller={store} loop>{slides(4)}</DCarousel>,
      );

      await user.click(screen.getByRole('button', { name: 'Next slide' }));
      rerender(<DCarousel label="Offers" controller={store} loop>{slides(4)}</DCarousel>);

      expect(connect).toHaveBeenCalledTimes(1);
      connect.mockRestore();
    });
  });
});
