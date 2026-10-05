/// <reference types="@testing-library/jest-dom" />

import { useState } from 'react';

import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DCalendar from './DCalendar';

/**
 * The customisation seams.
 *
 * Two kinds, and they fail differently: `formatters` change text and cannot
 * break the control, `render*` props change markup and can. So the render
 * props are handed the props the calendar computed, and these tests are mostly
 * about what SURVIVES a replacement — the accessible name, the disabled state,
 * the grid semantics — rather than about what it looks like.
 */

const march = new Date(2026, 2, 1);
const setup = (props: Partial<Parameters<typeof DCalendar>[0]> = {}) => render(
  <DCalendar defaultMonth={march} locale="en-US" {...props} />,
);

describe('formatters', () => {
  it('should default the caption to the month and the year', () => {
    setup();
    expect(screen.getByRole('heading')).toHaveTextContent('March 2026');
  });

  /* The case a design system asks for first: "March", not "March 2026". */
  it('should let the caption drop the year', () => {
    setup({
      formatters: {
        caption: (date, _view, locale) => new Intl.DateTimeFormat(locale, { month: 'long' })
          .format(date),
      },
    });
    expect(screen.getByRole('heading')).toHaveTextContent('March');
    expect(screen.getByRole('heading')).not.toHaveTextContent('2026');
  });

  it('should let the caption be an abbreviation', () => {
    setup({
      formatters: {
        caption: (date, _view, locale) => new Intl.DateTimeFormat(locale, { month: 'short' })
          .format(date),
      },
    });
    expect(screen.getByRole('heading')).toHaveTextContent('Mar');
  });

  it('should narrow the weekday headers', () => {
    setup({ formatters: { weekday: (date, locale) => new Intl.DateTimeFormat(locale, { weekday: 'narrow' }).format(date) } });
    const headers = Array.from(document.querySelectorAll('thead th')).map((h) => h.textContent);
    expect(headers[0]).toBe('S');
  });

  /*
   * The visible text and the accessible name are separate on purpose: a cell
   * SHOWS `8` and is ANNOUNCED as "Sunday, March 8, 2026". A formatter that
   * changed both would force a choice between a grid of long strings and a
   * screen reader that says "eight".
   */
  it('should not let a day formatter change the accessible name', () => {
    setup({ formatters: { day: () => '•' } });
    expect(screen.getByRole('button', { name: /^Sunday, March 8, 2026$/ })).toBeInTheDocument();
  });

  it('should format the options in the selectors', () => {
    setup({
      showSelectors: true,
      formatters: {
        monthOption: (date, locale) => new Intl.DateTimeFormat(locale, { month: 'short' })
          .format(date),
      },
    });
    const select = screen.getByLabelText('Month');
    expect(within(select).getByRole('option', { name: 'Mar' })).toBeInTheDocument();
  });
});

describe('labels', () => {
  it('should rename the paging buttons', () => {
    setup({ labels: { previous: 'Mes anterior', next: 'Mes siguiente' } });
    expect(screen.getByRole('button', { name: 'Mes anterior' })).toBeInTheDocument();
  });

  /* The month is in the name because `fixedWeeks` shows the days either side,
     so "day 8" alone matches March 8 AND April 8. */
  it('should rename a cell without changing what it shows', () => {
    setup({ labels: { day: (date) => `día ${date.getDate()} del mes ${date.getMonth()}` } });
    const cell = screen.getByRole('button', { name: 'día 8 del mes 2' });
    expect(cell).toHaveTextContent('8');
  });

  it('should rename the selectors', () => {
    setup({ showSelectors: true, labels: { monthSelect: 'Mes', yearSelect: 'Año' } });
    expect(screen.getByLabelText('Mes')).toBeInTheDocument();
    expect(screen.getByLabelText('Año')).toBeInTheDocument();
  });
});

describe('renderNav', () => {
  it('should let a button be text instead of an icon', async () => {
    const user = userEvent.setup();
    setup({
      renderNav: ({ direction, buttonProps }) => (
        <button type="button" {...buttonProps}>{direction === 'prev' ? 'Anterior' : 'Siguiente'}</button>
      ),
    });

    expect(screen.getByRole('button', { name: 'previous' })).toHaveTextContent('Anterior');
    await user.click(screen.getByRole('button', { name: 'next' }));
    expect(screen.getByRole('heading')).toHaveTextContent('April 2026');
  });

  /*
   * The point of handing over `buttonProps` rather than just the handler: a
   * consumer who spreads it gets the disabled state they would otherwise have
   * had to know to ask for.
   */
  it('should carry the disabled state into a replacement', () => {
    setup({
      minDate: new Date(2026, 2, 1),
      renderNav: ({ buttonProps, label }) => <button type="button" {...buttonProps}>{label}</button>,
    });
    expect(screen.getByRole('button', { name: 'previous' })).toBeDisabled();
  });

  it('should carry the accessible name into a replacement', () => {
    setup({
      labels: { previous: 'Atrás' },
      renderNav: ({ buttonProps }) => <button type="button" {...buttonProps}>«</button>,
    });
    expect(screen.getByRole('button', { name: 'Atrás' })).toBeInTheDocument();
  });

  /* So a replacement can read "March" rather than "previous". */
  it('should say which month the button would move to', () => {
    setup({
      renderNav: ({ buttonProps, target, direction }) => (
        <button type="button" {...buttonProps}>
          {direction}
          :
          {target.getMonth()}
        </button>
      ),
    });
    expect(screen.getByRole('button', { name: 'previous' })).toHaveTextContent('prev:1');
    expect(screen.getByRole('button', { name: 'next' })).toHaveTextContent('next:3');
  });
});

describe('renderCaption', () => {
  it('should replace the heading and the selectors', () => {
    setup({
      showSelectors: true,
      renderCaption: ({ label }) => <div data-testid="caption">{label}</div>,
    });
    expect(screen.getByTestId('caption')).toHaveTextContent('March 2026');
    expect(screen.queryByLabelText('Month')).not.toBeInTheDocument();
  });

  /* The replacement gets the options so it does not have to recompute them. */
  it('should hand over the month and year options', () => {
    setup({
      renderCaption: ({ months, years }) => (
        <div data-testid="caption">
          {months.length}
          /
          {years.length}
        </div>
      ),
    });
    expect(screen.getByTestId('caption')).toHaveTextContent('12/21');
  });

  it('should let the replacement move the grid', async () => {
    const user = userEvent.setup();
    setup({
      renderCaption: ({ goToMonth, month }) => (
        <button type="button" onClick={() => goToMonth(new Date(2026, 11, 1))}>
          {month.getMonth()}
        </button>
      ),
    });

    await user.click(screen.getByRole('button', { name: '2' }));
    expect(screen.getByRole('button', { name: '11' })).toBeInTheDocument();
  });

  /* Months are meaningless in a view that counts in months or larger. */
  it('should offer no months outside the day view', () => {
    setup({
      view: 'month',
      renderCaption: ({ months }) => <div data-testid="caption">{months.length}</div>,
    });
    expect(screen.getByTestId('caption')).toHaveTextContent('0');
  });
});

describe('renderDay', () => {
  it('should replace what a cell shows', () => {
    setup({ renderDay: ({ label }) => <span>{`[${label}]`}</span> });
    expect(screen.getByRole('button', { name: /March 8, 2026/ })).toHaveTextContent('[8]');
  });

  /*
   * The grid semantics are not up for grabs. A custom cell still has to be a
   * gridcell with an accessible name and a roving tabindex, or the calendar
   * stops being navigable the moment someone customises it.
   */
  it('should keep the accessible name, the role and the selected state', async () => {
    const user = userEvent.setup();
    setup({ renderDay: ({ label }) => <b>{label}</b>, mode: 'single' });

    const cell = screen.getByRole('button', { name: /^Sunday, March 8, 2026$/ });
    expect(cell.closest('[role="gridcell"]')).toBeInTheDocument();

    await user.click(cell);
    expect(cell.closest('[role="gridcell"]')).toHaveAttribute('aria-selected', 'true');
  });

  it('should keep the keyboard working through a custom cell', async () => {
    const user = userEvent.setup();
    setup({ renderDay: ({ label }) => <b>{label}</b> });

    await user.click(screen.getByRole('button', { name: /^Sunday, March 8, 2026$/ }));
    await user.keyboard('{ArrowRight}');
    expect(screen.getByRole('button', { name: /March 9, 2026/ })).toHaveFocus();
  });

  it('should report the state a cell is in', () => {
    setup({
      highlightedDates: [new Date(2026, 2, 10)],
      disabledDates: (date: Date) => date.getDate() === 12,
      renderDay: ({ label, highlighted, disabled }) => (
        <span>
          {label}
          {highlighted ? '*' : ''}
          {disabled ? 'x' : ''}
        </span>
      ),
    });
    expect(screen.getByRole('button', { name: /March 10, 2026/ })).toHaveTextContent('10*');
    expect(screen.getByRole('button', { name: /March 12, 2026/ })).toHaveTextContent('12x');
  });

  it('should report where in a range a cell sits', async () => {
    const user = userEvent.setup();
    function Controlled() {
      const [selected, setSelected] = useState();
      return (
        <DCalendar
          defaultMonth={march}
          locale="en-US"
          mode="range"
          selected={selected}
          onSelect={setSelected as never}
          renderDay={({ label, range }) => <span>{`${label}${range ?? ''}`}</span>}
        />
      );
    }
    render(<Controlled />);

    await user.click(screen.getByRole('button', { name: /^Tuesday, March 10, 2026$/ }));
    await user.click(screen.getByRole('button', { name: /^Friday, March 13, 2026$/ }));
    await user.unhover(screen.getByRole('button', { name: /^Friday, March 13, 2026$/ }));

    expect(screen.getByRole('button', { name: /March 10, 2026/ })).toHaveTextContent('10start');
    expect(screen.getByRole('button', { name: /March 11, 2026/ })).toHaveTextContent('11middle');
    expect(screen.getByRole('button', { name: /March 13, 2026/ })).toHaveTextContent('13end');
  });
});

/**
 * The week-number column, which was announced in English whatever the locale.
 *
 * `labels.weekNumber` was in the type, had a default, and was wired to
 * nothing — the number went out bare, so a screen reader read a row header as
 * "thirteen". The column heading was a hard-coded "Week" besides. Both are the
 * same class of fault as an unread prop: nothing fails, the promise is just
 * not kept.
 */
describe('week numbers', () => {
  const weekSetup = (props = {}) => render(
    <DCalendar
      defaultMonth={new Date(2026, 2, 1)}
      locale="en-US"
      showWeekNumbers
      {...props}
    />,
  );

  it('should announce a row header as a week, not as a bare number', () => {
    weekSetup();
    const header = document.querySelector('.df-calendar-week-number');
    expect(header).toHaveTextContent(/Week \d+/);
  });

  it('should still SHOW only the number', () => {
    weekSetup();
    const shown = document.querySelector('.df-calendar-week-number [aria-hidden="true"]');
    expect(shown?.textContent).toMatch(/^\d+$/);
  });

  it('should take the row header name from labels', () => {
    weekSetup({ labels: { weekNumber: (week: number) => `Semana ${week}` } });
    expect(document.querySelector('.df-calendar-week-number')).toHaveTextContent(/Semana \d+/);
  });

  it('should take the column heading from labels', () => {
    weekSetup({ labels: { weekNumberHeading: 'Semana' } });
    const heading = document.querySelector('thead th.df-calendar-weekday');
    expect(heading).toHaveAttribute('abbr', 'Semana');
    expect(heading?.querySelector('.df-sr-only')).toHaveTextContent('Semana');
  });
});

/**
 * The built-in selectors, whose change handlers were never exercised.
 *
 * Both are one line that builds a Date out of three parts, and both were
 * uncovered — the kind of line where a swapped argument moves the reader to
 * the wrong year and nothing says so.
 */
describe('the built-in selectors', () => {
  it('should move the grid when the month is changed', async () => {
    const user = userEvent.setup();
    render(<DCalendar defaultMonth={march} locale="en-US" showSelectors />);

    await user.selectOptions(screen.getByLabelText('Month'), '11');
    expect(screen.getByLabelText('Month')).toHaveValue('11');
    expect(screen.getByRole('button', { name: /December 25, 2026/ })).toBeInTheDocument();
  });

  it('should keep the year when the month is changed', async () => {
    const user = userEvent.setup();
    render(<DCalendar defaultMonth={march} locale="en-US" showSelectors />);

    await user.selectOptions(screen.getByLabelText('Month'), '11');
    expect(screen.getByLabelText('Year')).toHaveValue('2026');
  });

  it('should move the grid when the year is changed', async () => {
    const user = userEvent.setup();
    render(<DCalendar defaultMonth={march} locale="en-US" showSelectors />);

    await user.selectOptions(screen.getByLabelText('Year'), '2030');
    expect(screen.getByRole('button', { name: /March 15, 2030/ })).toBeInTheDocument();
  });

  /* The month must survive a year change, or picking a year silently moves
     the reader to January. */
  it('should keep the month when the year is changed', async () => {
    const user = userEvent.setup();
    render(<DCalendar defaultMonth={march} locale="en-US" showSelectors />);

    await user.selectOptions(screen.getByLabelText('Year'), '2030');
    expect(screen.getByLabelText('Month')).toHaveValue('2');
  });
});
