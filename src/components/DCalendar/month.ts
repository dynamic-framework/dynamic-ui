/**
 * month.ts — the date arithmetic a month grid needs, and nothing else.
 *
 * Framework-free on purpose: the React calendar and the framework-free one
 * have to agree about which day sits in which cell, and the only way to
 * guarantee that is for both to call this.
 *
 * ## No date library
 *
 * `date-fns` is already a dependency and would do this correctly. It is not
 * used here for two reasons. The vanilla bundle would carry it — the whole
 * point of that build is that a bank's page loads kilobytes, not hundreds —
 * and the parts that are genuinely hard, which is every NAME a calendar shows,
 * are `Intl`'s job and `Intl` is built into the browser. What is left is
 * Gregorian month arithmetic, which is forty lines and testable.
 *
 * ## Local dates, built from components
 *
 * Every date here is constructed as `new Date(y, m, d)` and compared by its
 * local year/month/day. Never by timestamp, and never through UTC.
 *
 * That is the DST rule. `+24h` is not "tomorrow": on the day a zone springs
 * forward it is tomorrow at 01:00, and on the day it falls back it is still
 * today at 23:00. A grid built by adding milliseconds duplicates or skips a
 * day twice a year, in some zones only, which is exactly the kind of bug that
 * ships. `new Date(y, m, d + 1)` asks the runtime to normalise the calendar
 * date and is right in every zone.
 */

/** Day index, Sunday-based, as `Date.prototype.getDay` reports it. */
export type WeekDay = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type MonthOptions = {
  /** Which day a week starts on. Sunday in the US, Monday across most of Europe. */
  weekStartsOn?: WeekDay;
  /**
   * Whether to pad the grid to six rows.
   *
   * A month spans four to six weeks, so an unpadded grid changes height as you
   * page through the year — which moves everything below it and, if the
   * calendar is in a popover, can flip the popover to the other side of its
   * trigger mid-navigation. Padding costs a row of greyed dates and buys a
   * grid that does not move.
   */
  fixedWeeks?: boolean;
};

/** A date with the day components zeroed, so two of them compare by day. */
export function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function addDays(date: Date, amount: number): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + amount);
}

/**
 * Adds months, clamping the day to the target month's length.
 *
 * `new Date(2026, 0, 31)` plus one month is 31 February, which the runtime
 * normalises to 3 March — so paging forward from 31 January would skip
 * February entirely. Clamping gives 28 February, which is what every calendar
 * does and what a reader expects.
 */
export function addMonths(date: Date, amount: number): Date {
  const target = new Date(date.getFullYear(), date.getMonth() + amount, 1);
  const lastDay = new Date(target.getFullYear(), target.getMonth() + 1, 0).getDate();
  return new Date(target.getFullYear(), target.getMonth(), Math.min(date.getDate(), lastDay));
}

export function addYears(date: Date, amount: number): Date {
  return addMonths(date, amount * 12);
}

export function isSameDay(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear()
    && a.getMonth() === b.getMonth()
    && a.getDate() === b.getDate();
}

export function isSameMonth(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
}

/**
 * The day the week starts on, for a locale.
 *
 * A calendar that shows Spanish month names with a Sunday-first week is wrong
 * in Spain and in Chile, where the week starts on Monday — and it was wrong
 * silently, because the names looked right. The first day is a property of the
 * locale exactly like the month names are, so it comes from the same place.
 *
 * Two conversions worth naming, because both are easy to get backwards:
 *
 * - `getWeekInfo()` numbers days the ISO way, 1 = Monday through 7 = Sunday.
 *   `Date.getDay()` numbers them 0 = Sunday through 6 = Saturday. So ISO 7
 *   becomes 0 and everything else passes through.
 * - The API is `getWeekInfo()` in current engines and was a `weekInfo` getter
 *   in earlier ones. Both are read, and anything older falls back to Sunday —
 *   which is what the calendar did for every locale before this existed.
 */
type WeekInfoCarrier = {
  getWeekInfo?: () => { firstDay: number };
  weekInfo?: { firstDay: number };
};

export function firstDayOfWeek(locale?: string): WeekDay {
  try {
    const tag = locale ?? new Intl.DateTimeFormat().resolvedOptions().locale;
    const info = new Intl.Locale(tag) as unknown as WeekInfoCarrier;
    const firstDay = (
      typeof info.getWeekInfo === 'function' ? info.getWeekInfo() : info.weekInfo
    )?.firstDay;

    if (typeof firstDay !== 'number' || firstDay < 1 || firstDay > 7) return 0;
    return (firstDay === 7 ? 0 : firstDay) as WeekDay;
  } catch {
    return 0;
  }
}

export function startOfWeek(date: Date, weekStartsOn: WeekDay = 0): Date {
  const shift = (date.getDay() - weekStartsOn + 7) % 7;
  return addDays(startOfDay(date), -shift);
}

export function startOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

export function endOfWeek(date: Date, weekStartsOn: WeekDay = 0): Date {
  return addDays(startOfWeek(date, weekStartsOn), 6);
}

export function endOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

/**
 * The grid for the month `date` falls in: whole weeks, in reading order.
 *
 * Leading and trailing days belong to the neighbouring months and are returned
 * rather than left blank. A calendar that renders holes cannot be navigated
 * with arrow keys — pressing Left on the first of the month has to land
 * somewhere — and the APG grid pattern expects every cell to hold a date.
 */
export function monthMatrix(date: Date, options: MonthOptions = {}): Date[][] {
  const { weekStartsOn = 0, fixedWeeks = true } = options;

  const first = startOfWeek(startOfMonth(date), weekStartsOn);
  const last = endOfMonth(date);

  const weeks: Date[][] = [];
  let cursor = first;

  /*
   * Bounded by the week count, not by a `while (cursor <= last)`.
   *
   * The loop walks days and the condition reads a month, and in the hour a
   * zone changes offset those two can disagree — which is a spin, not a wrong
   * answer. Six is the most weeks a month can span, so counting is both
   * correct and incapable of hanging.
   */
  const target = fixedWeeks ? 6 : 0;
  for (let week = 0; week < 6; week += 1) {
    const row: Date[] = [];
    for (let day = 0; day < 7; day += 1) {
      row.push(cursor);
      cursor = addDays(cursor, 1);
    }
    weeks.push(row);

    const done = row[6] >= last;
    if (done && weeks.length >= target) break;
  }

  return weeks;
}

/* ------------------------------------------------------------------ *
 * Names, which are `Intl`'s job
 * ------------------------------------------------------------------ */

/**
 * Weekday names in the grid's own order.
 *
 * Built from a known week in 2024 that starts on a Sunday, so the labels line
 * up with `getDay()` without any arithmetic about which year it is.
 */
export function weekdayNames(
  locale: string | undefined,
  weekStartsOn: WeekDay = 0,
  width: 'narrow' | 'short' | 'long' = 'short',
): string[] {
  const format = new Intl.DateTimeFormat(locale, { weekday: width });
  /* 2024-09-01 was a Sunday. */
  return Array.from({ length: 7 }, (_unused, i) => (
    format.format(new Date(2024, 8, 1 + ((i + weekStartsOn) % 7)))
  ));
}

export function monthName(date: Date, locale?: string, withYear = true): string {
  return new Intl.DateTimeFormat(locale, {
    month: 'long',
    ...withYear && { year: 'numeric' },
  }).format(date);
}

/** What a cell announces: the full date, so "14" is not read out of context. */
export function cellLabel(date: Date, locale?: string): string {
  return new Intl.DateTimeFormat(locale, { dateStyle: 'full' }).format(date);
}

/** `2026-03-14`, for the `datetime` attribute and for stable element ids. */
export function isoDay(date: Date): string {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
}

/* ------------------------------------------------------------------ *
 * Selection
 * ------------------------------------------------------------------ */

/** A range being built. `to` is absent until the second date is chosen. */
export type DateRange = { from: Date; to?: Date };

export type SelectionMode = 'single' | 'multiple' | 'range' | 'week';

export type Selection = Date | Date[] | DateRange | undefined;

export function isDateRange(value: Selection): value is DateRange {
  return !!value && typeof value === 'object' && 'from' in value;
}

/**
 * Orders a range, so `from` is never after `to`.
 *
 * A range is built by two clicks and nothing stops the second landing before
 * the first. Every consumer of a range — the `in-range` test, the formatter,
 * the request that goes to a server — assumes it is ordered, so it is ordered
 * once, here, rather than defensively in each of them.
 */
export function orderRange(range: DateRange): DateRange {
  if (!range.to) return range;
  return range.from <= range.to ? range : { from: range.to, to: range.from };
}

export function isSelected(day: Date, selection: Selection): boolean {
  if (!selection) return false;
  if (Array.isArray(selection)) return selection.some((d) => isSameDay(d, day));
  if (isDateRange(selection)) {
    const { from, to } = orderRange(selection);
    if (!to) return isSameDay(day, from);
    return day >= startOfDay(from) && day <= startOfDay(to);
  }
  return isSameDay(day, selection);
}

/** Where a day sits in a range, for the three shapes the stylesheet draws. */
export function rangePosition(
  day: Date,
  range: DateRange | undefined,
): 'start' | 'end' | 'middle' | null {
  if (!range) return null;
  const { from, to } = orderRange(range);

  if (!to) return isSameDay(day, from) ? 'start' : null;
  if (isSameDay(from, to) && isSameDay(day, from)) return 'start';
  if (isSameDay(day, from)) return 'start';
  if (isSameDay(day, to)) return 'end';
  return day > startOfDay(from) && day < startOfDay(to) ? 'middle' : null;
}

/**
 * The next selection after a day is activated.
 *
 * A pure function of the current selection and the day, so the state machine
 * is one testable thing rather than a set of branches inside a click handler.
 *
 * The range machine is the part worth stating: the first activation opens a
 * range, the second closes it, and the THIRD opens a new one. Without that
 * third case a range, once complete, can never be changed without an explicit
 * reset the user has no way to guess at.
 */
export function nextSelection(
  day: Date,
  current: Selection,
  mode: SelectionMode,
  weekStartsOn: WeekDay = 0,
): Selection {
  const date = startOfDay(day);

  /*
   * A week is a range whose ends the reader never picks.
   *
   * Modelled as one rather than as its own shape so everything downstream —
   * `isSelected`, `rangePosition`, the stylesheet's three range rules, the
   * interop that reports a start and an end — works on it unchanged. The only
   * difference is that one activation produces both ends instead of two.
   */
  if (mode === 'week') {
    const from = startOfWeek(date, weekStartsOn);
    const to = endOfWeek(date, weekStartsOn);
    const same = isDateRange(current) && current.to
      && isSameDay(current.from, from) && isSameDay(current.to, to);
    return same ? undefined : { from, to };
  }

  if (mode === 'single') {
    return current && !Array.isArray(current) && !isDateRange(current)
      && isSameDay(current, date)
      /* Clicking the chosen day again clears it, which is how a single
         selection is undone when there is no other control for it. */
      ? undefined
      : date;
  }

  if (mode === 'multiple') {
    const list = Array.isArray(current) ? current : [];
    return list.some((d) => isSameDay(d, date))
      ? list.filter((d) => !isSameDay(d, date))
      : [...list, date];
  }

  const range = isDateRange(current) ? current : undefined;
  if (!range || range.to) return { from: date };
  return orderRange({ from: range.from, to: date });
}

/* ------------------------------------------------------------------ *
 * Week numbers
 * ------------------------------------------------------------------ */

/**
 * The ISO 8601 week number.
 *
 * The rule is not "count weeks from January": week 1 is the week containing
 * the first Thursday of the year, which is the same as the week containing
 * January 4th. That is why 1 January can be week 52 or 53 OF THE PREVIOUS
 * YEAR, and why 29 December can be week 1 of the next — a naive
 * `ceil(dayOfYear / 7)` is wrong at both ends of most years.
 *
 * Implemented the standard way: move to the Thursday of this date's week, then
 * count weeks from the Thursday that defines week 1.
 */
export function isoWeek(date: Date): number {
  /* ISO weeks run Monday to Sunday regardless of where the grid starts. */
  const thursday = addDays(startOfWeek(date, 1), 3);
  const firstThursday = addDays(startOfWeek(new Date(thursday.getFullYear(), 0, 4), 1), 3);

  const days = Math.round(
    (startOfDay(thursday).getTime() - startOfDay(firstThursday).getTime()) / 86400000,
  );
  return Math.round(days / 7) + 1;
}

/* ------------------------------------------------------------------ *
 * The coarser views
 * ------------------------------------------------------------------ */

export type CalendarView = 'day' | 'month' | 'quarter' | 'year';

/** How many years a year page shows. Four rows of three, like the months. */
export const YEARS_PER_PAGE = 12;

export function startOfYear(date: Date): Date {
  return new Date(date.getFullYear(), 0, 1);
}

export function startOfQuarter(date: Date): Date {
  return new Date(date.getFullYear(), Math.floor(date.getMonth() / 3) * 3, 1);
}

export function isSameYear(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear();
}

export function isSameQuarter(a: Date, b: Date): boolean {
  return isSameYear(a, b) && Math.floor(a.getMonth() / 3) === Math.floor(b.getMonth() / 3);
}

/**
 * The first year of the page `date` falls in.
 *
 * Pages are aligned to multiples of the page size rather than centred on the
 * current year, so paging forward and back returns to the same page. A page
 * centred on "now" shifts under the reader every time they arrive from a
 * different year, and the same year appears in two different pages.
 */
export function startOfYearPage(date: Date, size = YEARS_PER_PAGE): Date {
  const year = Math.floor(date.getFullYear() / size) * size;
  return new Date(year, 0, 1);
}

/**
 * A view, as the four things a grid needs to know about it.
 *
 * Written as one description rather than as branches in the component, because
 * every view shares the same keyboard and the same roving tabindex — only the
 * cells and the step sizes differ. Four `if (view === …)` chains through a
 * component is how a month grid ends up navigable and a year grid not.
 */
export type ViewDescriptor = {
  /** Cells in reading order, as rows. */
  cells: Date[][];
  /** What one arrow press moves, in whatever unit the view counts in. */
  step: (date: Date, amount: number) => Date;
  /** What PageUp/PageDown moves. */
  page: (date: Date, amount: number) => Date;
  /** Whether a cell and a date are the same thing in this view. */
  isSame: (a: Date, b: Date) => boolean;
  /** The period the grid is showing, for the heading. */
  rangeStart: (date: Date) => Date;
};

function chunk(items: Date[], perRow: number): Date[][] {
  const rows: Date[][] = [];
  for (let i = 0; i < items.length; i += perRow) rows.push(items.slice(i, i + perRow));
  return rows;
}

export function viewDescriptor(
  view: CalendarView,
  anchor: Date,
  options: MonthOptions = {},
): ViewDescriptor {
  if (view === 'month') {
    return {
      cells: chunk(
        Array.from({ length: 12 }, (_u, i) => new Date(anchor.getFullYear(), i, 1)),
        3,
      ),
      step: (date, amount) => addMonths(startOfMonth(date), amount),
      page: (date, amount) => addYears(startOfMonth(date), amount),
      isSame: isSameMonth,
      rangeStart: startOfYear,
    };
  }

  if (view === 'quarter') {
    return {
      cells: chunk(
        Array.from({ length: 4 }, (_u, i) => new Date(anchor.getFullYear(), i * 3, 1)),
        2,
      ),
      step: (date, amount) => addMonths(startOfQuarter(date), amount * 3),
      page: (date, amount) => addYears(startOfQuarter(date), amount),
      isSame: isSameQuarter,
      rangeStart: startOfYear,
    };
  }

  if (view === 'year') {
    const first = startOfYearPage(anchor).getFullYear();
    return {
      cells: chunk(
        Array.from({ length: YEARS_PER_PAGE }, (_u, i) => new Date(first + i, 0, 1)),
        3,
      ),
      step: (date, amount) => addYears(startOfYear(date), amount),
      page: (date, amount) => addYears(startOfYear(date), amount * YEARS_PER_PAGE),
      isSame: isSameYear,
      rangeStart: (date) => startOfYearPage(date),
    };
  }

  return {
    cells: monthMatrix(anchor, options),
    step: addDays,
    page: addMonths,
    isSame: isSameDay,
    rangeStart: startOfMonth,
  };
}

/** What the heading says, for each view. */
export function viewLabel(view: CalendarView, anchor: Date, locale?: string): string {
  if (view === 'day') return monthName(anchor, locale);
  if (view === 'year') {
    const first = startOfYearPage(anchor).getFullYear();
    return `${first} – ${first + YEARS_PER_PAGE - 1}`;
  }
  return String(anchor.getFullYear());
}

/** What one cell says, for each view. */
export function cellText(view: CalendarView, date: Date, locale?: string): string {
  if (view === 'day') return String(date.getDate());
  if (view === 'month') return new Intl.DateTimeFormat(locale, { month: 'short' }).format(date);
  if (view === 'quarter') return `Q${Math.floor(date.getMonth() / 3) + 1}`;
  return String(date.getFullYear());
}

/** What one cell announces — never just "Q1" or "03" out of context. */
export function cellName(view: CalendarView, date: Date, locale?: string): string {
  if (view === 'day') return cellLabel(date, locale);
  if (view === 'month') return monthName(date, locale);
  if (view === 'quarter') {
    return `Q${Math.floor(date.getMonth() / 3) + 1} ${date.getFullYear()}`;
  }
  return String(date.getFullYear());
}
