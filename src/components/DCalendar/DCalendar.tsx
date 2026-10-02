import {
  useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import classNames from 'classnames';

import {
  addDays, addMonths, addYears, cellName, cellText, endOfMonth, isSameMonth,
  endOfWeek, isDateRange, isSelected as dayIsSelected, isoDay, isoWeek,
  monthName, nextSelection,
  rangePosition, startOfDay, startOfMonth, startOfWeek, viewDescriptor,
  viewLabel, weekdayNames,
} from './month';
import type {
  CalendarView, DateRange, Selection, SelectionMode, WeekDay,
} from './month';

import type { BaseProps } from '../interface';

type Props = BaseProps & {
  /** The month on show. Uncontrolled when omitted. */
  month?: Date;
  defaultMonth?: Date;
  onMonthChange?: (month: Date) => void;
  /** BCP 47. Every name in the grid comes from `Intl` with this. */
  locale?: string;
  weekStartsOn?: WeekDay;
  /** Six rows always, so the grid does not change height as you page. */
  fixedWeeks?: boolean;
  /** Days outside this range are present but not focusable. */
  minDate?: Date;
  maxDate?: Date;
  /**
   * Days that cannot be chosen, beyond the range.
   *
   * A predicate rather than a list, because the common cases — weekends,
   * public holidays, anything the server said is full — are rules, and a list
   * long enough to express a rule is a list that has to be regenerated every
   * time the month changes.
   */
  disabledDates?: (date: Date) => boolean;
  /** Days worth pointing at. Marked, never selected — the two are different. */
  highlightedDates?: Date[];
  /** An extra leading column with the ISO week number. */
  showWeekNumbers?: boolean;
  /** How many months to show side by side. Day view only. */
  numberOfMonths?: number;
  /**
   * What the grid counts in.
   *
   * Every view shares the keyboard, the roving tabindex and the selection —
   * only the cells and the step sizes change, which is why they are one
   * component rather than four.
   */
  view?: CalendarView;
  /** Announced as the grid's name. A calendar with no name is "table". */
  ariaLabel?: string;

  /** One day, several, or a span. */
  mode?: SelectionMode;
  selected?: Selection;
  defaultSelected?: Selection;
  onSelect?: (selection: Selection) => void;
};

/**
 * A month grid, navigable by keyboard.
 *
 * Phase one of replacing `react-datepicker`: the grid, the keyboard and the
 * ARIA. No selection yet — that is a separate concern and a separate set of
 * mistakes, and getting the navigation right first is what the rest stands on.
 *
 * ## A table, not a CSS grid
 *
 * `role="grid"` on a real `<table>` is the APG pattern, and it is also the
 * only markup where a screen reader can say "week 3, Tuesday". A grid of divs
 * loses the row and column relationship that makes that sentence possible.
 *
 * ## One tab stop
 *
 * Exactly one day carries `tabindex="0"`; the rest are `-1`. A calendar with
 * 42 tab stops takes 42 presses to get past, which is why the APG specifies a
 * roving tabindex for every grid. Tab leaves the calendar; the arrows move
 * within it.
 *
 * ## Focus follows the date, but only once it is here
 *
 * Moving the focused date calls `.focus()` on the new cell — otherwise the
 * roving tabindex moves and the user's actual focus does not, which strands
 * them on a cell that is no longer the tab stop.
 *
 * It does NOT do that on mount, and that is the subtle half: a calendar that
 * focuses itself when it renders steals focus from whatever the reader was
 * doing, and in a popover it fights the trigger that opened it.
 */
export default function DCalendar(
  {
    month: monthProp,
    defaultMonth,
    onMonthChange,
    locale,
    weekStartsOn = 0,
    fixedWeeks = true,
    minDate,
    maxDate,
    disabledDates,
    highlightedDates,
    showWeekNumbers = false,
    numberOfMonths = 1,
    view = 'day',
    ariaLabel = 'Calendar',
    mode = 'single',
    selected: selectedProp,
    defaultSelected,
    onSelect,
    className,
    style,
    dataAttributes,
  }: Props,
) {
  const gridRef = useRef<HTMLTableElement>(null);
  /* Whether focus is already inside, so the effect below never steals it. */
  const hasFocus = useRef(false);

  const [uncontrolledMonth, setUncontrolledMonth] = useState(() => (
    startOfMonth(defaultMonth ?? new Date())
  ));
  const month = monthProp ? startOfMonth(monthProp) : uncontrolledMonth;

  const [uncontrolledSelection, setUncontrolledSelection] = useState<Selection>(defaultSelected);
  const selection = selectedProp !== undefined ? selectedProp : uncontrolledSelection;

  /*
   * The day the second click of a range would close on, while the pointer is
   * over it. A range being drawn is invisible without it — the reader has
   * chosen a start and has no way to see what they are about to choose.
   */
  const [preview, setPreview] = useState<Date | null>(null);

  const [focused, setFocused] = useState(() => startOfDay(defaultMonth ?? new Date()));

  const today = useMemo(() => startOfDay(new Date()), []);
  const weekdays = useMemo(
    () => weekdayNames(locale, weekStartsOn, 'short'),
    [locale, weekStartsOn],
  );
  const longWeekdays = useMemo(
    () => weekdayNames(locale, weekStartsOn, 'long'),
    [locale, weekStartsOn],
  );

  const outOfRange = useCallback((day: Date) => (
    (!!minDate && day < startOfDay(minDate))
    || (!!maxDate && day > startOfDay(maxDate))
    || (!!disabledDates && disabledDates(day))
  ), [disabledDates, minDate, maxDate]);

  const highlighted = useMemo(() => new Set(
    (highlightedDates ?? []).map(isoDay),
  ), [highlightedDates]);

  /** The months on show, left to right. A coarser view is always one grid. */
  const months = useMemo(() => Array.from(
    { length: view === 'day' ? Math.max(1, numberOfMonths) : 1 },
    (_unused, i) => addMonths(month, i),
  ), [month, numberOfMonths, view]);

  const goToMonth = useCallback((next: Date) => {
    const target = startOfMonth(next);
    if (!monthProp) setUncontrolledMonth(target);
    onMonthChange?.(target);
  }, [monthProp, onMonthChange]);

  /**
   * Moves the focused day, pulling the month along if it left.
   *
   * A date outside the range is refused rather than clamped: clamping would
   * move focus somewhere the user did not ask for, which reads as the arrow
   * key doing the wrong thing rather than as the edge of the range.
   */
  const moveTo = useCallback((next: Date) => {
    if (outOfRange(next)) return;
    setFocused(next);

    /*
     * The grid follows when the focus leaves what it is SHOWING, which is a
     * month in the day view and a year or a page of years in the others.
     * Testing `isSameMonth` in a year view would re-anchor the grid on every
     * arrow press.
     */
    const descriptor = viewDescriptor(view, month, { weekStartsOn, fixedWeeks });
    if (descriptor.rangeStart(next).getTime() !== descriptor.rangeStart(month).getTime()) {
      goToMonth(next);
    }
  }, [fixedWeeks, goToMonth, month, outOfRange, view, weekStartsOn]);

  /*
   * The focused cell is the tab stop AND takes real focus — but only while the
   * calendar already has it. See the note on the component.
   */
  useEffect(() => {
    if (!hasFocus.current) return;
    gridRef.current
      ?.querySelector<HTMLButtonElement>('.df-calendar-day[tabindex="0"]')
      ?.focus();
  }, [focused]);

  const select = useCallback((day: Date) => {
    const next = nextSelection(day, selection, mode, weekStartsOn);
    if (selectedProp === undefined) setUncontrolledSelection(next);
    onSelect?.(next);
  }, [mode, onSelect, selectedProp, selection, weekStartsOn]);

  /**
   * The range as it would look if the pointer landed where it is.
   *
   * Only while a range is half-drawn, and only for the hover — the committed
   * selection is never guessed at.
   */
  const drawn = useMemo<DateRange | undefined>(() => {
    /*
     * A week preview is the hovered ROW, not a span from a chosen start —
     * there is no half-drawn state, because one activation picks both ends.
     */
    if (mode === 'week') {
      if (!preview) {
        return isDateRange(selection) ? selection : undefined;
      }
      return { from: startOfWeek(preview, weekStartsOn), to: endOfWeek(preview, weekStartsOn) };
    }

    if (mode !== 'range') return undefined;
    const open = selection && typeof selection === 'object' && 'from' in selection
      ? selection
      : undefined;
    if (!open) return undefined;
    if (open.to || !preview) return open;
    return { from: open.from, to: preview };
  }, [mode, preview, selection, weekStartsOn]);

  const onKeyDown = useCallback((event: React.KeyboardEvent) => {
    /*
     * The row width is the view's, not seven.
     *
     * Up and Down move a ROW, which is seven days in a day grid and three
     * months in a month grid. Hard-coding seven is how a month view ends up
     * with arrow keys that jump most of a year.
     */
    const descriptor = viewDescriptor(view, month, { weekStartsOn, fixedWeeks });
    const perRow = descriptor.cells[0]?.length ?? 7;

    const moves: Record<string, () => Date> = {
      ArrowLeft: () => descriptor.step(focused, -1),
      ArrowRight: () => descriptor.step(focused, 1),
      ArrowUp: () => descriptor.step(focused, -perRow),
      ArrowDown: () => descriptor.step(focused, perRow),
      Home: () => (view === 'day'
        ? startOfWeek(focused, weekStartsOn)
        : descriptor.cells[0][0]),
      End: () => (view === 'day'
        ? addDays(startOfWeek(focused, weekStartsOn), 6)
        : descriptor.cells[descriptor.cells.length - 1].slice(-1)[0]),
      PageUp: () => (event.shiftKey ? addYears(focused, -1) : descriptor.page(focused, -1)),
      PageDown: () => (event.shiftKey ? addYears(focused, 1) : descriptor.page(focused, 1)),
    };

    const move = moves[event.key];
    if (!move) return;

    /* Arrows scroll the page and PageUp pages it; inside a grid they do not. */
    event.preventDefault();
    moveTo(move());
  }, [fixedWeeks, focused, month, moveTo, view, weekStartsOn]);

  return (
    <div
      className={classNames('df-calendar', className)}
      style={style}
      {...dataAttributes}
    >
      <div className="df-calendar-header">
        {/*
          * The month name is a live region.
          *
          * Paging with PageUp moves focus to a day in the new month, and the
          * cell announces its own full date — but the heading changing is what
          * tells a reader the whole grid moved, and a heading that merely
          * changes is not announced.
          */}
        <h2 className="df-calendar-title" aria-live="polite">
          {viewLabel(view, month, locale)}
        </h2>
      </div>

      <div className="df-calendar-months">
        {months.map((shown) => (
          <table
            key={isoDay(shown)}
            // The ref goes on the first grid only: it is the one the focus
            // effect looks in, and the focused day is always in it or in a
            // month this one leads.
            ref={isSameMonth(shown, month) ? gridRef : undefined}
            className="df-calendar-grid"
            role="grid"
            aria-label={months.length > 1 ? monthName(shown, locale) : ariaLabel}
            onKeyDown={onKeyDown}
            onFocus={() => { hasFocus.current = true; }}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                hasFocus.current = false;
              }
            }}
          >
            {months.length > 1 && (
              <caption className="df-calendar-caption">{monthName(shown, locale, false)}</caption>
            )}
            {view === 'day' && (
              <thead>
                <tr>
                  {showWeekNumbers && (
                    <th scope="col" className="df-calendar-weekday" abbr="Week number">
                      <span className="df-sr-only">Week</span>
                      <span aria-hidden="true">#</span>
                    </th>
                  )}
                  {weekdays.map((label, i) => (
                    <th
                      key={label}
                      scope="col"
                      className="df-calendar-weekday"
                      // The short name is shown; the long one is read, because
                      // "Mo" is not a word in any language.
                      abbr={longWeekdays[i]}
                    >
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody onMouseLeave={() => setPreview(null)}>
              {viewDescriptor(view, shown, { weekStartsOn, fixedWeeks }).cells.map((row) => (
                <tr key={isoDay(row[0])}>
                  {view === 'day' && showWeekNumbers && (
                    <th scope="row" className="df-calendar-week-number">
                      {isoWeek(row[0])}
                    </th>
                  )}
                  {row.map((cell) => {
                    const descriptor = viewDescriptor(view, shown, { weekStartsOn, fixedWeeks });
                    const isFocused = descriptor.isSame(cell, focused);
                    const disabled = outOfRange(cell);
                    const chosen = view === 'day'
                      ? dayIsSelected(cell, drawn ?? selection)
                      : selection instanceof Date && descriptor.isSame(cell, selection);
                    const edge = view === 'day' ? rangePosition(cell, drawn) : null;

                    return (
                      <td
                        key={isoDay(cell)}
                        role="gridcell"
                        // `aria-selected` belongs to the cell, which is what
                        // the grid role makes selectable. On the button it
                        // would be a selected BUTTON, a different thing.
                        aria-selected={chosen || undefined}
                      >
                        <button
                          type="button"
                          className="df-calendar-day"
                          data-view={view}
                          tabIndex={isFocused && isSameMonth(shown, month) ? 0 : -1}
                          disabled={disabled}
                          aria-label={cellName(view, cell, locale)}
                          {...view === 'day' && !isSameMonth(cell, shown) && { 'data-outside': '' }}
                          {...descriptor.isSame(cell, today) && { 'data-today': '' }}
                          {...chosen && { 'data-selected': '' }}
                          {...highlighted.has(isoDay(cell)) && { 'data-highlighted': '' }}
                          {...edge && { 'data-range': edge }}
                          {...drawn && !drawn.to && { 'data-drawing': '' }}
                          onClick={() => { moveTo(cell); select(cell); }}
                          onMouseEnter={() => setPreview(cell)}
                        >
                          <time dateTime={isoDay(cell)}>{cellText(view, cell, locale)}</time>
                        </button>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        ))}
      </div>
    </div>
  );
}

export { endOfMonth, startOfMonth };
