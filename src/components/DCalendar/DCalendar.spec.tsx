/// <reference types="@testing-library/jest-dom" />

import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DCalendar from './DCalendar';
import { isoDay } from './month';

/**
 * The grid, the keyboard and the focus. No selection yet — that is phase two.
 *
 * Every calendar that is hard to use is hard for one of the reasons tested
 * here: 42 tab stops instead of one, arrow keys that move the tabindex but not
 * the focus, a grid that steals focus when it renders, or holes at the edges
 * of the month that the arrows fall into.
 */

const MARCH = new Date(2026, 2, 1);
const day = (n: number) => screen.getByRole('button', { name: new RegExp(`March ${n}, 2026`) });

const setup = (props: Partial<React.ComponentProps<typeof DCalendar>> = {}) => render(
  <DCalendar defaultMonth={MARCH} locale="en-US" weekStartsOn={0} {...props} />,
);

describe('<DCalendar />', () => {
  describe('the grid', () => {
    it('should be a named grid', () => {
      setup({ ariaLabel: 'Pick a date' });
      expect(screen.getByRole('grid', { name: 'Pick a date' })).toBeInTheDocument();
    });

    it('should hold every day of the month', () => {
      setup();
      expect(day(1)).toBeInTheDocument();
      expect(day(31)).toBeInTheDocument();
    });

    /**
     * Holes cannot be navigated: pressing Left on the 1st has to land
     * somewhere, and the APG grid pattern expects every cell to hold a date.
     */
    it('should fill the edges with the neighbouring months, marked', () => {
      /* 1 March 2026 is a Sunday, so a Sunday-start grid has no leading days
         and the padding comes from April at the end. A Monday-start grid has
         both, which is why each end is checked under its own week start. */
      const { unmount } = setup();
      expect(screen.getByRole('button', { name: /April 1, 2026/ }))
        .toHaveAttribute('data-outside');
      unmount();

      setup({ weekStartsOn: 1 });
      expect(screen.getByRole('button', { name: /February 23, 2026/ }))
        .toHaveAttribute('data-outside');
    });

    it('should label each day with its whole date, not just the number', () => {
      setup();
      expect(day(14)).toHaveAccessibleName(expect.stringContaining('2026') as unknown as string);
    });

    /** "Mo" is not a word in any language; the column header carries the word. */
    it('should give the weekday columns a readable abbreviation', () => {
      setup();
      const headers = screen.getAllByRole('columnheader');
      expect(headers).toHaveLength(7);
      expect(headers[0]).toHaveAttribute('abbr', 'Sunday');
      expect(headers[0]).toHaveTextContent('Sun');
    });

    it('should follow the locale and the first day of the week', () => {
      setup({ locale: 'es-ES', weekStartsOn: 1 });
      expect(screen.getAllByRole('columnheader')[0]).toHaveAttribute('abbr', expect.stringMatching(/lunes/i));
      expect(screen.getByRole('heading')).toHaveTextContent(/marzo/i);
    });
  });

  describe('the tab stop', () => {
    /**
     * A calendar with 42 tab stops takes 42 presses to get past, which is why
     * the APG specifies a roving tabindex for every grid.
     */
    it('should have exactly one', () => {
      const { container } = setup();
      expect(container.querySelectorAll('.df-calendar-day[tabindex="0"]')).toHaveLength(1);
      expect(container.querySelectorAll('.df-calendar-day[tabindex="-1"]').length)
        .toBeGreaterThan(30);
    });

    it('should move with the focused day', async () => {
      const user = userEvent.setup();
      const { container } = setup();

      await user.click(day(10));
      await user.keyboard('{ArrowRight}');

      const stops = container.querySelectorAll('.df-calendar-day[tabindex="0"]');
      expect(stops).toHaveLength(1);
      expect(stops[0]).toHaveAccessibleName(expect.stringContaining('March 11') as unknown as string);
    });
  });

  /**
   * The subtle half of focus management.
   *
   * A calendar that focuses itself when it renders steals focus from whatever
   * the reader was doing — and in a popover it fights the trigger that just
   * opened it, which reads as the popover refusing to open.
   */
  describe('focus', () => {
    it('should not take focus on mount', () => {
      render(
        <>
          <button type="button">Before</button>
          <DCalendar defaultMonth={MARCH} locale="en-US" />
        </>,
      );
      expect(document.body).toHaveFocus();
    });

    it('should follow the arrow keys once it has focus', async () => {
      const user = userEvent.setup();
      setup();

      await user.click(day(10));
      await user.keyboard('{ArrowDown}');
      expect(day(17)).toHaveFocus();
    });
  });

  describe('the keyboard', () => {
    const cases: [string, string, number][] = [
      ['{ArrowRight}', 'a day forward', 11],
      ['{ArrowLeft}', 'a day back', 9],
      ['{ArrowDown}', 'a week forward', 17],
      ['{ArrowUp}', 'a week back', 3],
    ];

    it.each(cases)('%s should move %s', async (key, _label, expected) => {
      const user = userEvent.setup();
      setup();

      await user.click(day(10));
      await user.keyboard(key);
      expect(day(expected)).toHaveFocus();
    });

    it('Home and End should reach the ends of the week', async () => {
      const user = userEvent.setup();
      setup();

      await user.click(day(11));
      await user.keyboard('{Home}');
      expect(day(8)).toHaveFocus();

      await user.keyboard('{End}');
      expect(day(14)).toHaveFocus();
    });

    it('PageUp and PageDown should move a month, bringing the grid along', async () => {
      const user = userEvent.setup();
      setup();

      await user.click(day(10));
      await user.keyboard('{PageDown}');

      expect(screen.getByRole('heading')).toHaveTextContent('April 2026');
      expect(screen.getByRole('button', { name: /April 10, 2026/ })).toHaveFocus();
    });

    it('Shift+PageUp should move a year', async () => {
      const user = userEvent.setup();
      setup();

      await user.click(day(10));
      await user.keyboard('{Shift>}{PageUp}{/Shift}');
      expect(screen.getByRole('heading')).toHaveTextContent('March 2025');
    });

    /** Stepping off the edge of the month pulls the month with it. */
    it('should change month when an arrow leaves it', async () => {
      const user = userEvent.setup();
      setup();

      await user.click(day(1));
      await user.keyboard('{ArrowLeft}');

      expect(screen.getByRole('heading')).toHaveTextContent('February 2026');
    });

    /** Inside a grid the arrows navigate; they must not also scroll the page. */
    it('should swallow the keys it handles', async () => {
      const user = userEvent.setup();
      const onKeyDown = jest.fn<void, [boolean]>();
      const handle = (event: React.KeyboardEvent) => { onKeyDown(event.defaultPrevented); };
      render(
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div onKeyDown={handle}>
          <DCalendar defaultMonth={MARCH} locale="en-US" />
        </div>,
      );

      await user.click(day(10));
      await user.keyboard('{ArrowRight}');
      expect(onKeyDown).toHaveBeenCalledWith(true);
    });
  });

  /**
   * A date outside the range is refused, not clamped.
   *
   * Clamping would move focus somewhere the user did not ask for, which reads
   * as the arrow key doing the wrong thing rather than as the edge of a range.
   */
  describe('range limits', () => {
    it('should disable the days outside it', () => {
      setup({ minDate: new Date(2026, 2, 10), maxDate: new Date(2026, 2, 20) });

      expect(day(9)).toBeDisabled();
      expect(day(10)).toBeEnabled();
      expect(day(21)).toBeDisabled();
    });

    it('should refuse to move past the edge rather than clamp', async () => {
      const user = userEvent.setup();
      setup({ minDate: new Date(2026, 2, 10) });

      await user.click(day(10));
      await user.keyboard('{ArrowLeft}');
      expect(day(10)).toHaveFocus();
    });
  });

  describe('the month', () => {
    it('should report a change to a controlled caller', async () => {
      const user = userEvent.setup();
      const onMonthChange = jest.fn();
      render(
        <DCalendar month={MARCH} locale="en-US" onMonthChange={onMonthChange} />,
      );

      await user.click(day(10));
      await user.keyboard('{PageDown}');

      expect(onMonthChange).toHaveBeenCalledWith(new Date(2026, 3, 1));
    });

    /**
     * The heading is a live region: paging moves focus to a day that announces
     * its own date, but the grid having moved is what the heading carries, and
     * a heading that merely changes is not announced.
     */
    it('should announce the month politely', () => {
      setup();
      expect(screen.getByRole('heading')).toHaveAttribute('aria-live', 'polite');
    });
  });

  describe('the shape of the grid', () => {
    it('should always be six rows, so paging does not resize it', () => {
      const { container, rerender } = setup();
      const rows = () => within(container.querySelector('tbody')!).getAllByRole('row').length;

      expect(rows()).toBe(6);
      rerender(<DCalendar defaultMonth={new Date(2026, 1, 1)} locale="en-US" weekStartsOn={0} />);
      expect(rows()).toBe(6);
    });

    it('should carry an ISO date on every cell', () => {
      const { container } = setup();
      const first = container.querySelector('time')!;
      expect(first.getAttribute('datetime')).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(isoDay(new Date(2026, 2, 1))).toBe('2026-03-01');
    });
  });

  /**
   * Selection, which is a different set of mistakes from navigation.
   *
   * `aria-selected` goes on the CELL, not on the button: the grid role makes
   * cells selectable, and on the button it would announce a selected button,
   * which is a different thing.
   */
  describe('selection', () => {
    const cellFor = (n: number) => day(n).closest('[role="gridcell"]')!;

    it('should choose a day and say so on the cell', async () => {
      const user = userEvent.setup();
      setup();

      await user.click(day(10));
      expect(cellFor(10)).toHaveAttribute('aria-selected', 'true');
      expect(cellFor(11)).not.toHaveAttribute('aria-selected');
    });

    it('should report the chosen day', async () => {
      const user = userEvent.setup();
      const onSelect = jest.fn();
      setup({ onSelect });

      await user.click(day(10));
      expect(onSelect).toHaveBeenCalledWith(new Date(2026, 2, 10));
    });

    it('should clear when the same day is chosen twice', async () => {
      const user = userEvent.setup();
      const onSelect = jest.fn();
      setup({ onSelect });

      await user.click(day(10));
      await user.click(day(10));
      expect(onSelect).toHaveBeenLastCalledWith(undefined);
      expect(cellFor(10)).not.toHaveAttribute('aria-selected');
    });

    it('should take a controlled selection without owning it', async () => {
      const user = userEvent.setup();
      const onSelect = jest.fn();
      setup({ selected: new Date(2026, 2, 5), onSelect });

      expect(cellFor(5)).toHaveAttribute('aria-selected', 'true');

      await user.click(day(10));
      /* Reported, but not applied — the caller owns the value. */
      expect(onSelect).toHaveBeenCalledWith(new Date(2026, 2, 10));
      expect(cellFor(5)).toHaveAttribute('aria-selected', 'true');
      expect(cellFor(10)).not.toHaveAttribute('aria-selected');
    });

    it('should keep several days in multiple mode', async () => {
      const user = userEvent.setup();
      setup({ mode: 'multiple' });

      await user.click(day(10));
      await user.click(day(12));

      expect(cellFor(10)).toHaveAttribute('aria-selected', 'true');
      expect(cellFor(12)).toHaveAttribute('aria-selected', 'true');
    });

    describe('range', () => {
      it('should mark every day between the two ends', async () => {
        const user = userEvent.setup();
        setup({ mode: 'range' });

        await user.click(day(10));
        await user.click(day(14));

        expect(cellFor(10)).toHaveAttribute('aria-selected', 'true');
        expect(cellFor(12)).toHaveAttribute('aria-selected', 'true');
        expect(cellFor(14)).toHaveAttribute('aria-selected', 'true');
        expect(cellFor(15)).not.toHaveAttribute('aria-selected');
      });

      it('should name the three shapes for the stylesheet', async () => {
        const user = userEvent.setup();
        setup({ mode: 'range' });

        await user.click(day(10));
        await user.click(day(14));

        expect(day(10)).toHaveAttribute('data-range', 'start');
        expect(day(12)).toHaveAttribute('data-range', 'middle');
        expect(day(14)).toHaveAttribute('data-range', 'end');
      });

      it('should order a range drawn backwards', async () => {
        const user = userEvent.setup();
        setup({ mode: 'range' });

        await user.click(day(14));
        await user.click(day(10));

        expect(day(10)).toHaveAttribute('data-range', 'start');
        expect(day(14)).toHaveAttribute('data-range', 'end');
      });

      /**
       * The third click starts over. Without it a completed range can never be
       * changed without a reset the user has no way to guess at.
       */
      it('should start a new range on the third press', async () => {
        const user = userEvent.setup();
        setup({ mode: 'range' });

        await user.click(day(10));
        await user.click(day(14));
        await user.click(day(20));

        expect(cellFor(12)).not.toHaveAttribute('aria-selected');
        expect(day(20)).toHaveAttribute('data-range', 'start');
      });

      /**
       * A range being drawn is invisible without a preview: the reader has
       * chosen a start and has no way to see what they are about to choose.
       */
      it('should preview the span under the pointer', async () => {
        const user = userEvent.setup();
        setup({ mode: 'range' });

        await user.click(day(10));
        await user.hover(day(14));

        expect(day(12)).toHaveAttribute('data-range', 'middle');
        expect(cellFor(12)).toHaveAttribute('aria-selected', 'true');
      });

      it('should not preview once the range is closed', async () => {
        const user = userEvent.setup();
        setup({ mode: 'range' });

        await user.click(day(10));
        await user.click(day(12));
        await user.hover(day(20));

        expect(cellFor(16)).not.toHaveAttribute('aria-selected');
      });
    });
  });
});

/**
 * The coarser views.
 *
 * They share the keyboard and the roving tabindex with the day grid — only
 * the cells and the step sizes change. The thing that goes wrong when they do
 * not share it is Up and Down: a row is seven days in a day grid and three
 * months in a month grid, and hard-coding seven gives a month view arrow keys
 * that jump most of a year.
 */
describe('<DCalendar /> views', () => {
  const inView = (view: 'month' | 'quarter' | 'year') => render(
    <DCalendar defaultMonth={new Date(2026, 5, 15)} locale="en-US" view={view} />,
  );

  it('should show twelve months, labelled with their year', () => {
    inView('month');
    expect(screen.getAllByRole('gridcell')).toHaveLength(12);
    expect(screen.getByRole('button', { name: 'March 2026' })).toBeInTheDocument();
    expect(screen.getByRole('heading')).toHaveTextContent('2026');
  });

  it('should show four quarters', () => {
    inView('quarter');
    expect(screen.getAllByRole('gridcell')).toHaveLength(4);
    expect(screen.getByRole('button', { name: 'Q2 2026' })).toBeInTheDocument();
  });

  it('should show an aligned page of years', () => {
    inView('year');
    expect(screen.getAllByRole('gridcell')).toHaveLength(12);
    expect(screen.getByRole('heading')).toHaveTextContent('2016 – 2027');
  });

  /** No weekday header where there are no weekdays. */
  it('should drop the weekday row', () => {
    inView('month');
    expect(screen.queryAllByRole('columnheader')).toHaveLength(0);
  });

  it('should move one cell at a time with Left and Right', async () => {
    const user = userEvent.setup();
    inView('month');

    await user.click(screen.getByRole('button', { name: 'March 2026' }));
    await user.keyboard('{ArrowRight}');
    expect(screen.getByRole('button', { name: 'April 2026' })).toHaveFocus();
  });

  /**
   * A row is three months here, not seven days.
   */
  it('should move one ROW with Up and Down', async () => {
    const user = userEvent.setup();
    inView('month');

    await user.click(screen.getByRole('button', { name: 'March 2026' }));
    await user.keyboard('{ArrowDown}');
    expect(screen.getByRole('button', { name: 'June 2026' })).toHaveFocus();
  });

  it('should page by a year in the month view', async () => {
    const user = userEvent.setup();
    inView('month');

    await user.click(screen.getByRole('button', { name: 'March 2026' }));
    await user.keyboard('{PageDown}');
    expect(screen.getByRole('heading')).toHaveTextContent('2027');
  });

  /** A year page moves a whole page, not a year — otherwise it would not move. */
  it('should page by twelve years in the year view', async () => {
    const user = userEvent.setup();
    inView('year');

    await user.click(screen.getByRole('button', { name: '2020' }));
    await user.keyboard('{PageDown}');
    expect(screen.getByRole('heading')).toHaveTextContent('2028 – 2039');
  });

  it('should choose a month and say so on the cell', async () => {
    const user = userEvent.setup();
    const onSelect = jest.fn();
    render(
      <DCalendar defaultMonth={new Date(2026, 5, 15)} locale="en-US" view="month" onSelect={onSelect} />,
    );

    await user.click(screen.getByRole('button', { name: 'March 2026' }));

    expect(onSelect).toHaveBeenCalledWith(new Date(2026, 2, 1));
    expect(screen.getByRole('button', { name: 'March 2026' }).closest('[role="gridcell"]'))
      .toHaveAttribute('aria-selected', 'true');
  });
});

/**
 * Week selection, which has no half-drawn state.
 *
 * One activation picks both ends, so the preview is the hovered ROW rather
 * than a span growing from a chosen start — and hovering before anything is
 * chosen still has to show something, because otherwise a reader cannot tell
 * the mode apart from the single one until they click.
 */
describe('<DCalendar /> week selection', () => {
  const weekSetup = () => render(
    <DCalendar defaultMonth={new Date(2026, 2, 1)} locale="en-US" weekStartsOn={0} mode="week" />,
  );
  const cellFor = (n: number) => day(n).closest('[role="gridcell"]')!;

  it('should select the whole week from any day in it', async () => {
    const user = userEvent.setup();
    weekSetup();

    await user.click(day(11));

    [8, 9, 10, 11, 12, 13, 14].forEach((n) => {
      expect(cellFor(n)).toHaveAttribute('aria-selected', 'true');
    });
    expect(cellFor(15)).not.toHaveAttribute('aria-selected');
  });

  it('should draw the row as one band', async () => {
    const user = userEvent.setup();
    weekSetup();

    await user.click(day(11));
    expect(day(8)).toHaveAttribute('data-range', 'start');
    expect(day(11)).toHaveAttribute('data-range', 'middle');
    expect(day(14)).toHaveAttribute('data-range', 'end');
  });

  it('should preview the row under the pointer before anything is chosen', async () => {
    const user = userEvent.setup();
    weekSetup();

    await user.hover(day(11));
    expect(cellFor(8)).toHaveAttribute('aria-selected', 'true');
    expect(cellFor(14)).toHaveAttribute('aria-selected', 'true');
  });

  it('should clear when the same week is chosen twice', async () => {
    const user = userEvent.setup();
    weekSetup();

    await user.click(day(11));
    await user.click(day(9));
    await user.unhover(day(9));
    expect(cellFor(11)).not.toHaveAttribute('aria-selected');
  });
});

/**
 * The week the grid picks has to follow `weekStartsOn`.
 *
 * Every other week test here starts on Sunday, so hard-coding Sunday in the
 * selection call passed all of them — the unit test in `month.spec` covered
 * the core, but nothing covered the WIRING from the prop to it. A default that
 * happens to match the test data is not a tested default.
 */
describe('<DCalendar /> week selection honours the first day', () => {
  it('should select a Monday-to-Sunday week when the week starts on Monday', async () => {
    const user = userEvent.setup();
    render(
      <DCalendar defaultMonth={new Date(2026, 2, 1)} locale="en-US" weekStartsOn={1} mode="week" />,
    );

    /* 2026-03-11 is a Wednesday: a Monday-start week runs the 9th to the 15th. */
    await user.click(day(11));
    /*
     * Unhovered first. Under the pointer the band drawn is the PREVIEW, which
     * is computed from the prop — so this test passed while the selection
     * itself ignored the prop entirely, and was measuring the wrong thing.
     */
    await user.unhover(day(11));

    expect(day(9)).toHaveAttribute('data-range', 'start');
    expect(day(15)).toHaveAttribute('data-range', 'end');
    expect(day(8).closest('[role="gridcell"]')).not.toHaveAttribute('aria-selected');
  });
});

/**
 * Paging with a pointer.
 *
 * The grid shipped with keyboard paging only — PageUp and PageDown — which is
 * not a calendar anyone can use with a mouse, and is undiscoverable even for
 * those who could. Every inline date picker in the library rendered without a
 * way to reach another month.
 */
describe('<DCalendar /> navigation', () => {
  const prev = () => screen.getByRole('button', { name: 'previous' });
  const next = () => screen.getByRole('button', { name: 'next' });
  const title = () => screen.getByRole('heading');

  it('should page back a month', async () => {
    const user = userEvent.setup();
    render(<DCalendar defaultMonth={new Date(2026, 2, 1)} locale="en-US" />);

    await user.click(prev());
    expect(title()).toHaveTextContent(/February 2026/i);
  });

  it('should page forward a month', async () => {
    const user = userEvent.setup();
    render(<DCalendar defaultMonth={new Date(2026, 2, 1)} locale="en-US" />);

    await user.click(next());
    expect(title()).toHaveTextContent(/April 2026/i);
  });

  it('should cross the year boundary', async () => {
    const user = userEvent.setup();
    render(<DCalendar defaultMonth={new Date(2026, 0, 1)} locale="en-US" />);

    await user.click(prev());
    expect(title()).toHaveTextContent(/December 2025/i);
  });

  it('should report the move', async () => {
    const user = userEvent.setup();
    const onMonthChange = jest.fn();
    render(
      <DCalendar defaultMonth={new Date(2026, 2, 1)} locale="en-US" onMonthChange={onMonthChange} />,
    );

    await user.click(next());
    expect(onMonthChange).toHaveBeenCalledWith(new Date(2026, 3, 1));
  });

  /*
   * Left behind, the roving tabindex still points at a day in a month that is
   * no longer shown: the next Tab into the grid lands nowhere visible, and the
   * first arrow key jumps back to the month just left.
   */
  it('should take the focusable day with it', async () => {
    const user = userEvent.setup();
    render(<DCalendar defaultMonth={new Date(2026, 2, 10)} locale="en-US" />);

    await user.click(next());

    const focusable = document.querySelectorAll('.df-calendar-grid [tabindex="0"]');
    expect(focusable).toHaveLength(1);
    expect(focusable[0]).toHaveAccessibleName(expect.stringMatching(/April/i) as never);
  });

  describe('at the edges of the allowed range', () => {
    /*
     * Disabled, not hidden. A control that disappears at a boundary reads as a
     * rendering fault, and gives a screen-reader user nothing to announce.
     */
    it('should disable Previous when nothing before this month is allowed', () => {
      render(
        <DCalendar
          defaultMonth={new Date(2026, 2, 1)}
          minDate={new Date(2026, 2, 5)}
          locale="en-US"
        />,
      );
      expect(prev()).toBeDisabled();
      expect(next()).toBeEnabled();
    });

    it('should disable Next when nothing after this month is allowed', () => {
      render(
        <DCalendar
          defaultMonth={new Date(2026, 2, 1)}
          maxDate={new Date(2026, 2, 20)}
          locale="en-US"
        />,
      );
      expect(next()).toBeDisabled();
      expect(prev()).toBeEnabled();
    });

    /*
     * The bound is read from the PERIOD, not from the visible cells. A day
     * grid shows the tail of the previous month, so asking "is any cell in
     * range" leaves Previous enabled on a month whose predecessor is entirely
     * below the floor.
     */
    it('should not be fooled by the previous month leaking into the grid', () => {
      render(
        <DCalendar
          defaultMonth={new Date(2026, 2, 1)}
          minDate={new Date(2026, 2, 1)}
          locale="en-US"
        />,
      );
      expect(prev()).toBeDisabled();
    });
  });

  it('should page a year at a time in the month view', async () => {
    const user = userEvent.setup();
    render(<DCalendar defaultMonth={new Date(2026, 2, 1)} view="month" locale="en-US" />);

    await user.click(next());
    expect(title()).toHaveTextContent(/2027/);
  });

  it('should be possible to turn off', () => {
    render(<DCalendar defaultMonth={new Date(2026, 2, 1)} locale="en-US" showNavigation={false} />);
    expect(screen.queryByRole('button', { name: 'previous' })).not.toBeInTheDocument();
  });
});

/**
 * The week starts where the locale says, not always on Sunday.
 *
 * Sunday was hard-coded for every locale, so a Spanish calendar rendered
 * Spanish month names over a Sunday-first week. Wrong in Spain and in Chile,
 * and wrong silently — the names looked right, so nothing pointed at the
 * column headers.
 */
describe('<DCalendar /> first day of the week', () => {
  const headers = () => Array.from(
    document.querySelectorAll('.df-calendar-grid thead th'),
  ).map((cell) => cell.textContent?.trim());

  it('should start on Monday for Chilean Spanish', () => {
    render(<DCalendar defaultMonth={new Date(2026, 2, 1)} locale="es-CL" />);
    expect(headers()[0]).toMatch(/^l/i);
  });

  it('should start on Sunday for American English', () => {
    render(<DCalendar defaultMonth={new Date(2026, 2, 1)} locale="en-US" />);
    expect(headers()[0]).toMatch(/^s/i);
  });

  it('should start on Monday for British English', () => {
    render(<DCalendar defaultMonth={new Date(2026, 2, 1)} locale="en-GB" />);
    expect(headers()[0]).toMatch(/^m/i);
  });

  /* An explicit prop still wins: a consumer may have a reason the locale
     cannot know about. */
  it('should let an explicit weekStartsOn override the locale', () => {
    render(<DCalendar defaultMonth={new Date(2026, 2, 1)} locale="es-CL" weekStartsOn={0} />);
    expect(headers()[0]).toMatch(/^d/i);
  });

  /* The grid has to follow the header, or the dates land in the wrong columns. */
  it('should place the first of March 2026 under Sunday in a Monday-first week', () => {
    render(<DCalendar defaultMonth={new Date(2026, 2, 1)} locale="es-CL" />);
    /* 2026-03-01 is a Sunday; in a Monday-first week it is the LAST column. */
    /* Anchored: "31 de marzo de 2026" contains "1 de marzo de 2026". */
    const first = screen.getByRole('button', { name: /^domingo, 1 de marzo de 2026$/i });
    const row = first.closest('tr')!;
    const cells = Array.from(row.querySelectorAll('[role="gridcell"]'));
    expect(cells.indexOf(first.closest('[role="gridcell"]')!)).toBe(6);
  });
});

/**
 * Several months on show at once.
 *
 * "What the grid is showing" was read as the anchor month alone, which is
 * right for one grid and wrong for several. Picking a day in the SECOND month
 * re-anchored the view on it — March–April became April–May — so the month
 * holding the start of a range scrolled away mid-selection. Nothing was lost,
 * but the reader had to page back to see what they had picked, which reads as
 * the calendar resetting itself.
 */
describe('<DCalendar /> with several months on show', () => {
  const captions = () => Array.from(
    document.querySelectorAll('.df-calendar-grid caption'),
  ).map((caption) => caption.textContent);

  const twoMonths = (props = {}) => render(
    <DCalendar
      defaultMonth={new Date(2026, 2, 1)}
      locale="en-US"
      numberOfMonths={2}
      {...props}
    />,
  );

  it('should not move when a day in the second month is chosen', async () => {
    const user = userEvent.setup();
    twoMonths({ mode: 'range' });

    expect(captions()).toEqual(['March', 'April']);
    await user.click(screen.getByRole('button', { name: /^Wednesday, April 15, 2026$/ }));
    expect(captions()).toEqual(['March', 'April']);
  });

  /* The whole point: both ends of a range stay visible while it is drawn. */
  it('should keep both ends of a range in view', async () => {
    const user = userEvent.setup();
    twoMonths({ mode: 'range' });

    await user.click(screen.getByRole('button', { name: /^Tuesday, March 10, 2026$/ }));
    await user.click(screen.getByRole('button', { name: /^Wednesday, April 15, 2026$/ }));

    expect(captions()).toEqual(['March', 'April']);
    expect(screen.getByRole('button', { name: /^Tuesday, March 10, 2026$/ }))
      .toHaveAttribute('data-range', 'start');
    expect(screen.getByRole('button', { name: /^Wednesday, April 15, 2026$/ }))
      .toHaveAttribute('data-range', 'end');
  });

  /*
   * `getAllByRole`, not `getByRole`: with several months on show the last days
   * of March are ALSO the leading days of the April grid, so the same date has
   * two buttons. Only one carries `tabindex="0"` — the roving tab stop is
   * across the whole calendar, not per grid — but both answer to the name.
   */
  it('should not move when a day in the second month is focused with the keyboard', async () => {
    const user = userEvent.setup();
    twoMonths();

    const [inMarchGrid] = screen.getAllByRole('button', { name: /^Tuesday, March 31, 2026$/ });
    await user.click(inMarchGrid);
    await user.keyboard('{ArrowRight}');

    expect(captions()).toEqual(['March', 'April']);
    expect(document.activeElement).toHaveAttribute('aria-label', 'Wednesday, April 1, 2026');
  });

  /* One tab stop for the whole calendar, even when a date appears twice. */
  it('should keep a single tab stop across the grids', async () => {
    const user = userEvent.setup();
    twoMonths();

    const [inMarchGrid] = screen.getAllByRole('button', { name: /^Tuesday, March 31, 2026$/ });
    expect(screen.getAllByRole('button', { name: /^Tuesday, March 31, 2026$/ })).toHaveLength(2);

    await user.click(inMarchGrid);
    expect(document.querySelectorAll('.df-calendar-day[tabindex="0"]')).toHaveLength(1);
  });

  /*
   * Scrolling the least that brings the target into view. Anchoring the FIRST
   * grid on the target is minimal going backwards and a month too far going
   * forwards — it skipped the April the reader was looking at.
   */
  it('should scroll one month when moving past the end', async () => {
    const user = userEvent.setup();
    twoMonths();

    await user.click(screen.getByRole('button', { name: /^Thursday, April 30, 2026$/ }));
    await user.keyboard('{ArrowRight}');

    expect(captions()).toEqual(['April', 'May']);
  });

  it('should scroll one month when moving before the start', async () => {
    const user = userEvent.setup();
    twoMonths();

    await user.click(screen.getByRole('button', { name: /^Sunday, March 1, 2026$/ }));
    await user.keyboard('{ArrowLeft}');

    expect(captions()).toEqual(['February', 'March']);
  });

  /* The same single step the nav button takes, in both directions. */
  it('should match what the nav buttons do', async () => {
    const user = userEvent.setup();
    twoMonths();

    await user.click(screen.getByRole('button', { name: 'next' }));
    expect(captions()).toEqual(['April', 'May']);
  });

  it('should hold for three months too', async () => {
    const user = userEvent.setup();
    render(
      <DCalendar defaultMonth={new Date(2026, 2, 1)} locale="en-US" numberOfMonths={3} />,
    );

    expect(captions()).toEqual(['March', 'April', 'May']);
    await user.click(screen.getByRole('button', { name: /^Wednesday, May 20, 2026$/ }));
    expect(captions()).toEqual(['March', 'April', 'May']);
  });
});
