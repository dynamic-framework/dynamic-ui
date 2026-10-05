import { endOfWeek, startOfWeek } from '../DCalendar/month';
import type {
  CalendarView, Selection, SelectionMode, WeekDay,
} from '../DCalendar/month';

/**
 * Translates between `react-datepicker`'s selection props and ours.
 *
 * It spells one idea three ways — `selected` for a day, `startDate`/`endDate`
 * for a span, `selectedDates` for several — with two booleans saying which
 * pair is live. `DCalendar` has one `mode` and one `selected`, which is why
 * this file exists: the shapes meet HERE, once, instead of inside a component
 * that then has to understand both.
 *
 * It is deliberately a pair of pure functions. While the two implementations
 * coexist, every difference between them is in this file and testable without
 * rendering anything.
 */

export type PickerSelection = {
  selected?: Date | null;
  startDate?: Date | null;
  endDate?: Date | null;
  selectedDates?: Date[];
  selectsRange?: boolean;
  selectsMultiple?: boolean;
  showWeekPicker?: boolean;
  calendarStartDay?: WeekDay;
};

/**
 * Three booleans for what is one axis with four values — the same shape
 * problem as the views, and resolved the same way: explicitly, here, once.
 *
 * Week wins over range because a week IS a range with both ends fixed; asking
 * for both can only mean the narrower of the two. Left as a chain of `&&` at
 * the call site, the precedence was wherever the operators happened to fall.
 */
export function selectionMode(props: PickerSelection): SelectionMode {
  if (props.showWeekPicker) return 'week';
  if (props.selectsRange) return 'range';
  if (props.selectsMultiple) return 'multiple';
  return 'single';
}

/** react-datepicker's props -> what `DCalendar` takes. */
export function toSelection(props: PickerSelection): Selection {
  /*
   * A week is carried across the boundary as a single `selected` date, which
   * is the library's contract and worth keeping: a consumer hands over a Date
   * and gets a Date back, and the fact that the grid thinks in ranges stays
   * on this side of the line.
   */
  if (props.showWeekPicker) {
    if (!props.selected) return undefined;
    return {
      from: startOfWeek(props.selected, props.calendarStartDay ?? 0),
      to: endOfWeek(props.selected, props.calendarStartDay ?? 0),
    };
  }

  if (props.selectsRange) {
    /*
     * An absent start means no range, not an empty one. `{ from: undefined }`
     * would be a range half-drawn from nowhere, and every range reader would
     * have to defend against it.
     */
    if (!props.startDate) return undefined;
    return { from: props.startDate, to: props.endDate ?? undefined };
  }

  if (props.selectsMultiple) return props.selectedDates ?? [];

  return props.selected ?? undefined;
}

/**
 * What `onChange` is called with, in the shape the library uses.
 *
 * Range reports `[from, to]` and multiple reports an array, which is the same
 * JavaScript type — so the two are told apart by the props, never by looking
 * at the value.
 */
export function fromSelection(
  selection: Selection,
  props: PickerSelection,
): Date | null | Date[] | [Date | null, Date | null] {
  /* Back to one date: the first day of the week, as the library reports it. */
  if (props.showWeekPicker) {
    if (!selection || Array.isArray(selection) || !('from' in selection)) return null;
    return selection.from;
  }

  if (props.selectsRange) {
    if (!selection || Array.isArray(selection) || !('from' in selection)) {
      return [null, null];
    }
    return [selection.from, selection.to ?? null];
  }

  if (props.selectsMultiple) return Array.isArray(selection) ? selection : [];

  return selection instanceof Date ? selection : null;
}

/* ------------------------------------------------------------------ *
 * Day predicates
 * ------------------------------------------------------------------ */

type DayFilters = {
  excludeDates?: (Date | { date: Date; message?: string })[];
  includeDates?: Date[];
  filterDate?: (date: Date) => boolean;
};

const sameDay = (a: Date, b: Date) => a.getFullYear() === b.getFullYear()
  && a.getMonth() === b.getMonth()
  && a.getDate() === b.getDate();

/**
 * The three ways a day can be refused, as one predicate.
 *
 * `excludeDates` blocks a list, `includeDates` allows ONLY a list, and
 * `filterDate` answers for each day. They compose: a day has to survive all
 * three, which is what the library does and is also the only reading that does
 * not silently drop one when two are given together.
 *
 * `excludeDates` accepts both a bare date and `{ date, message }`, because the
 * library does — the message is for a tooltip the calendar does not draw yet,
 * and reading only the date now means the markup does not have to change when
 * it does.
 */
export function dayFilter(props: DayFilters): ((date: Date) => boolean) | undefined {
  const { excludeDates, includeDates, filterDate } = props;
  if (!excludeDates && !includeDates && !filterDate) return undefined;

  const excluded = (excludeDates ?? []).map((e) => (e instanceof Date ? e : e.date));

  return (date: Date) => {
    if (excluded.some((d) => sameDay(d, date))) return true;
    if (includeDates && !includeDates.some((d) => sameDay(d, date))) return true;
    if (filterDate && !filterDate(date)) return true;
    return false;
  };
}

/**
 * `highlightDates` is either a list of dates or a list of `{ class: dates }`
 * maps. Only the dates are read: the class names are the library's styling
 * hook, and this calendar marks a highlighted day with one of its own.
 */
export function flattenHighlights(
  highlightDates?: (Date | Record<string, Date[]>)[],
): Date[] | undefined {
  if (!highlightDates) return undefined;
  return highlightDates.flatMap((entry) => (
    entry instanceof Date ? [entry] : Object.values(entry).flat()
  ));
}

/* ------------------------------------------------------------------ *
 * Views
 * ------------------------------------------------------------------ */

type ViewFlags = {
  showMonthYearPicker?: boolean;
  showYearPicker?: boolean;
  showQuarterYearPicker?: boolean;
};

/**
 * Three booleans for what is one axis with four values.
 *
 * `react-datepicker` can be asked for two views at once and resolves it by
 * whichever branch it happens to test first. Collapsing them here makes the
 * precedence explicit — coarsest wins, so asking for years and months gives
 * years — rather than leaving it to the order of some `if`s.
 */
export function calendarView(props: ViewFlags): CalendarView {
  if (props.showYearPicker) return 'year';
  if (props.showQuarterYearPicker) return 'quarter';
  if (props.showMonthYearPicker) return 'month';
  return 'day';
}

/**
 * The month a calendar should open on.
 *
 * Without this the grid opened on TODAY whatever was chosen: a field showing
 * 08/03/2026 opened in September, and the reader had to page back six months
 * to see their own date — or, worse, picked a September date believing the
 * calendar had taken them to March.
 *
 * `openToDate` still wins, because it is the caller saying so outright.
 */
export function initialMonth(
  selection: Selection,
  openToDate?: Date,
): Date | undefined {
  if (openToDate) return openToDate;
  if (!selection) return undefined;
  if (selection instanceof Date) return selection;
  if (Array.isArray(selection)) return selection[0];
  return selection.from;
}
