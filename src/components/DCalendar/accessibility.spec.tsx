/// <reference types="@testing-library/jest-dom" />

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import DCalendar from './DCalendar';

/**
 * The grid pattern, audited.
 *
 * A calendar is the ARIA `grid` pattern, and the pattern is mostly about three
 * things that are invisible when they are right and silent when they are
 * wrong: exactly one way in, a cursor that moves without leaving, and a cell
 * that says what it is. What follows checks each against what the component
 * actually renders rather than against what it intends.
 */

const march = new Date(2026, 2, 1);
const setup = (props = {}) => render(
  <DCalendar defaultMonth={march} locale="en-US" {...props} />,
);

const tabStops = () => document.querySelectorAll('.df-calendar-day[tabindex="0"]');

describe('the way in', () => {
  /*
   * The one that made the component unusable.
   *
   * The roving tab stop started on the first day of the month whether or not
   * that day was allowed. A `disabled` button cannot take focus, so with a
   * `minDate` past the 1st the grid had NO reachable tab stop: Tab went
   * straight from whatever preceded the calendar to whatever followed it, and
   * a keyboard user could not reach a single date.
   */
  it('should have exactly one tab stop', () => {
    setup();
    expect(tabStops()).toHaveLength(1);
  });

  it('should put the tab stop on a day that can actually take focus', () => {
    setup({ minDate: new Date(2026, 2, 10) });
    const [stop] = Array.from(tabStops()) as HTMLButtonElement[];

    expect(stop).toBeDefined();
    expect(stop).not.toBeDisabled();
    stop.focus();
    expect(stop).toHaveFocus();
  });

  it('should be reachable with Tab', async () => {
    const user = userEvent.setup();
    render(
      <>
        <button type="button">before</button>
        <DCalendar defaultMonth={march} locale="en-US" minDate={new Date(2026, 2, 10)} />
      </>,
    );

    screen.getByRole('button', { name: 'before' }).focus();

    /*
     * Tab until a day is reached, rather than a fixed count: how many
     * focusables precede the grid depends on whether a paging button happens
     * to be disabled, and the property worth asserting is that the grid is
     * reachable at all, not how far away it is.
     */
    let reached = false;
    for (let i = 0; i < 6 && !reached; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await user.tab();
      reached = document.activeElement?.classList.contains('df-calendar-day') ?? false;
    }

    expect(reached).toBe(true);
  });

  /* Tab leaves the grid; it does not walk 42 days. */
  it('should leave the grid on the next Tab', async () => {
    const user = userEvent.setup();
    render(
      <>
        <DCalendar defaultMonth={march} locale="en-US" />
        <button type="button">after</button>
      </>,
    );

    (tabStops()[0] as HTMLButtonElement).focus();
    await user.tab();
    expect(screen.getByRole('button', { name: 'after' })).toHaveFocus();
  });
});

describe('days that cannot be chosen', () => {
  /*
   * `aria-disabled`, not `disabled`.
   *
   * A `disabled` button is removed from the tab order AND cannot take focus,
   * so the grid cursor cannot land on it — a screen reader user arrowing
   * across a month never learns the range exists, the days simply are not
   * there. `aria-disabled` keeps the date in the grid, announced as
   * unavailable, which is what the date picker pattern asks for.
   */
  it('should stay focusable so the range is discoverable', () => {
    setup({ minDate: new Date(2026, 2, 10) });
    const first = screen.getByRole('button', { name: /^Sunday, March 1, 2026$/ });

    expect(first).toHaveAttribute('aria-disabled', 'true');
    expect(first).not.toBeDisabled();
  });

  it('should refuse to be chosen', async () => {
    const user = userEvent.setup();
    const onSelect = jest.fn();
    setup({ minDate: new Date(2026, 2, 10), onSelect });

    await user.click(screen.getByRole('button', { name: /^Sunday, March 1, 2026$/ }));
    expect(onSelect).not.toHaveBeenCalled();
  });
});

describe('the cursor', () => {
  it('should move the tab stop with the cursor', async () => {
    const user = userEvent.setup();
    setup();

    (tabStops()[0] as HTMLButtonElement).focus();
    await user.keyboard('{ArrowRight}');

    await waitFor(() => expect(tabStops()).toHaveLength(1));
    expect(tabStops()[0]).toHaveFocus();
  });

  it('should not take focus on mount', () => {
    render(
      <>
        <input aria-label="elsewhere" />
        <DCalendar defaultMonth={march} locale="en-US" />
      </>,
    );
    const input = screen.getByLabelText('elsewhere');
    input.focus();
    expect(input).toHaveFocus();
  });
});

describe('what a cell says', () => {
  it('should name every day with its full date', () => {
    setup();
    expect(screen.getByRole('button', { name: /^Sunday, March 8, 2026$/ })).toBeInTheDocument();
  });

  it('should name days in the locale', () => {
    setup({ locale: 'es-CL' });
    expect(screen.getByRole('button', { name: /^domingo, 8 de marzo de 2026$/ })).toBeInTheDocument();
  });

  /*
   * `aria-selected` sits on the gridcell, which is where the pattern puts it —
   * but focus sits on the button inside, and a screen reader announcing the
   * focused element does not reliably reach up to an ancestor. The state has
   * to be on the thing that takes focus too.
   */
  it('should announce the selected state on the focused element', async () => {
    const user = userEvent.setup();
    setup({ mode: 'single' });

    const cell = screen.getByRole('button', { name: /March 8, 2026/ });
    await user.click(cell);

    expect(cell).toHaveAttribute('aria-pressed', 'true');
    expect(cell.closest('[role="gridcell"]')).toHaveAttribute('aria-selected', 'true');
  });

  it('should mark today', () => {
    render(<DCalendar locale="en-US" />);
    const today = document.querySelector('.df-calendar-day[data-today]');
    expect(today).toHaveAttribute('aria-current', 'date');
  });
});

describe('the grid itself', () => {
  it('should have an accessible name', () => {
    setup();
    expect(screen.getByRole('grid')).toHaveAccessibleName();
  });

  /* The default name was "Calendar" in every language. */
  it('should name itself in the locale', () => {
    setup({ locale: 'es-CL' });
    expect(screen.getByRole('grid')).toHaveAccessibleName(/marzo/i);
  });

  it('should name each grid when several are shown', () => {
    setup({ numberOfMonths: 2 });
    const [first, second] = screen.getAllByRole('grid');
    expect(first).toHaveAccessibleName(/March/);
    expect(second).toHaveAccessibleName(/April/);
  });

  /*
   * Explicit roles all the way down.
   *
   * Putting `role="grid"` on a `<table>` and `role="gridcell"` on its cells
   * while leaving the rows implicit is a half-mapping: the same reasoning that
   * made the cells explicit applies to the rows between them.
   */
  it('should declare rows as well as cells', () => {
    setup();
    expect(document.querySelectorAll('[role="row"]').length).toBeGreaterThan(4);
    expect(document.querySelectorAll('[role="gridcell"]').length).toBeGreaterThan(27);
  });

  it('should say when more than one cell can be selected', () => {
    setup({ mode: 'range' });
    expect(screen.getByRole('grid')).toHaveAttribute('aria-multiselectable', 'true');
  });

  it('should not say so for a single date', () => {
    setup({ mode: 'single' });
    expect(screen.getByRole('grid')).not.toHaveAttribute('aria-multiselectable');
  });
});

describe('announcing a move', () => {
  it('should carry the month in a live region', () => {
    setup();
    expect(document.querySelector('[aria-live]')).toHaveTextContent('March 2026');
  });

  /*
   * The live region was the heading, and turning the selectors on REPLACED the
   * heading — so a calendar with month and year pickers announced nothing when
   * it paged, which is the configuration most likely to page.
   */
  it('should still announce when the selectors replace the heading', async () => {
    const user = userEvent.setup();
    setup({ showSelectors: true });

    await user.click(screen.getByRole('button', { name: 'next' }));
    await waitFor(() => {
      expect(document.querySelector('[aria-live]')).toHaveTextContent(/April/);
    });
  });
});

describe('axe', () => {
  it.each([
    ['a plain month', {}],
    ['a range', { mode: 'range' as const }],
    ['week numbers', { showWeekNumbers: true }],
    ['selectors', { showSelectors: true }],
    ['two months', { numberOfMonths: 2 }],
    ['bounded', { minDate: new Date(2026, 2, 10) }],
  ])('should have no violations: %s', async (_name, props) => {
    const { container } = setup(props);
    expect(await axe(container)).toHaveNoViolations();
  });
});
