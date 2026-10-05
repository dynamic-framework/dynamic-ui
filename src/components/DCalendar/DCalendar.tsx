import {
  useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import classNames from 'classnames';

import {
  addDays, addMonths, addYears, cellName, cellText, endOfMonth, isSameMonth,
  endOfWeek, firstDayOfWeek, isDateRange, isSelected as dayIsSelected, isoDay,
  isoWeek, monthName, nextSelection,
  rangePosition, startOfDay, startOfMonth, startOfWeek, viewDescriptor,
  viewLabel, weekdayNames,
} from './month';
import type {
  CalendarView, DateRange, Selection, SelectionMode, WeekDay,
} from './month';

import DButtonIcon from '../DButtonIcon';
import { useDContext } from '../../contexts';

import type { CalendarSlots } from './slots';
import type { BaseProps } from '../interface';

type Props = BaseProps & {
  /** The month on show. Uncontrolled when omitted. */
  month?: Date;
  defaultMonth?: Date;
  onMonthChange?: (month: Date) => void;
  /** BCP 47. Every name in the grid comes from `Intl` with this. */
  locale?: string;
  /**
   * The day the week starts on. Derived from `locale` when omitted — the first
   * day is a property of the locale exactly like the month names are.
   */
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

  /**
   * The two buttons that page the grid.
   *
   * On by default. A calendar reachable only by keyboard is not a calendar —
   * PageUp and PageDown page it, and a reader using a pointer has no way to
   * discover that.
   */
  showNavigation?: boolean;
  /**
   * Replaces the title with a month and a year control.
   *
   * Native `<select>`s: a calendar's year list is the one place a custom
   * listbox is clearly worse — the platform one is searchable by typing, opens
   * as a long scrollable list on every platform, and costs nothing to ship.
   */
  showSelectors?: boolean;
  minYear?: number;
  maxYear?: number;
  iconPrev?: string;
  iconNext?: string;
  prevAriaLabel?: string;
  nextAriaLabel?: string;

  /** One day, several, or a span. */
  mode?: SelectionMode;
  selected?: Selection;
  defaultSelected?: Selection;
  onSelect?: (selection: Selection) => void;
} & CalendarSlots;

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
    weekStartsOn: weekStartsOnProp,
    fixedWeeks = true,
    minDate,
    maxDate,
    disabledDates,
    highlightedDates,
    showWeekNumbers = false,
    numberOfMonths = 1,
    view = 'day',
    ariaLabel = 'Calendar',
    showNavigation = true,
    showSelectors = false,
    minYear,
    maxYear,
    iconPrev,
    iconNext,
    prevAriaLabel = 'previous',
    nextAriaLabel = 'next',
    formatters,
    labels,
    renderNav,
    renderCaption,
    renderDay,
    mode = 'single',
    selected: selectedProp,
    defaultSelected,
    onSelect,
    className,
    style,
    dataAttributes,
  }: Props,
) {
  const { iconMap: { chevronLeft, chevronRight } } = useDContext();

  /*
   * Sunday was the default for every locale, so a Spanish calendar showed
   * Spanish month names over a Sunday-first week — wrong in Spain and in
   * Chile, and wrong silently, because the names looked right.
   */
  const weekStartsOn = weekStartsOnProp ?? firstDayOfWeek(locale);

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
  /*
   * One real date per column, in column order.
   *
   * `weekdayNames` returns strings, which is all the default header needs —
   * but a `weekday` formatter is handed a Date, because that is what lets a
   * consumer ask `Intl` for a different width instead of slicing a string
   * that may not be sliceable in their language.
   */
  const weekdayDates = useMemo(() => {
    const first = startOfWeek(new Date(2026, 2, 1), weekStartsOn);
    return Array.from({ length: 7 }, (_unused, i) => addDays(first, i));
  }, [weekStartsOn]);

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
   * Paging by pointer, and whether either end has anywhere left to go.
   *
   * The bounds are read from the view's PERIOD, not from its cells: a day grid
   * shows the last days of the previous month, so asking "is any visible cell
   * in range" would keep Previous enabled on a month whose predecessor is
   * entirely below `minDate`.
   */
  const paging = useMemo(() => {
    const descriptor = viewDescriptor(view, month, { weekStartsOn, fixedWeeks });
    const periodStart = descriptor.rangeStart(month);
    const nextPeriodStart = descriptor.rangeStart(descriptor.page(month, 1));

    return {
      prev: () => descriptor.page(month, -1),
      next: () => descriptor.page(month, 1),
      /* Everything before this period is below the floor. */
      prevDisabled: !!minDate && startOfDay(minDate) >= periodStart,
      /* Everything from the next period on is above the ceiling. */
      nextDisabled: !!maxDate && startOfDay(maxDate) < nextPeriodStart,
    };
  }, [fixedWeeks, maxDate, minDate, month, view, weekStartsOn]);

  /**
   * Paging with a pointer takes the focused day with it.
   *
   * Left behind, the roving tabindex still points at a day in a month that is
   * no longer shown — so the next Tab into the grid lands nowhere visible, and
   * the first arrow key jumps the reader back to the month they just left.
   */
  const page = useCallback((direction: -1 | 1) => {
    const target = direction === -1 ? paging.prev() : paging.next();
    goToMonth(target);
    const descriptor = viewDescriptor(view, month, { weekStartsOn, fixedWeeks });
    setFocused((current) => descriptor.page(current, direction));
  }, [fixedWeeks, goToMonth, month, paging, view, weekStartsOn]);

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
     * The grid follows when the focus leaves what it is SHOWING — all of it.
     *
     * "Showing" was read as the anchor month alone, which is right for one
     * grid and wrong for several: with `numberOfMonths={2}` a click on a day
     * in the SECOND month re-anchored the view on it, so March–April became
     * April–May and the month holding the start of the range scrolled away
     * mid-selection. Nothing was lost, but the reader had to page back to see
     * what they had picked, which reads as the calendar resetting itself.
     *
     * So the test is against every period on show. A coarser view is always
     * one grid, and `months` already accounts for that.
     */
    const descriptor = viewDescriptor(view, month, { weekStartsOn, fixedWeeks });
    const target = descriptor.rangeStart(next).getTime();
    if (months.some((shown) => descriptor.rangeStart(shown).getTime() === target)) return;

    /*
     * Scroll the least that brings the target into view.
     *
     * `goToMonth(next)` anchors the FIRST grid on the target, which is the
     * minimal move going backwards and a month too far going forwards: from
     * March–April, arrowing off the end of April landed on May–June, skipping
     * the April the reader was looking at. Anchoring the LAST grid instead
     * gives April–May, the same single step the nav button takes.
     */
    const after = target > descriptor.rangeStart(months[months.length - 1]).getTime();
    goToMonth(after ? addMonths(next, -(months.length - 1)) : next);
  }, [fixedWeeks, goToMonth, month, months, outOfRange, view, weekStartsOn]);

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

  /*
   * The years the selector offers.
   *
   * Bounded by `minDate`/`maxDate` when they are given, because a year list
   * running past a date the calendar will refuse is a list of dead ends. The
   * fallback window is a decade either side of what is on show.
   */
  /*
   * Text and accessible names, resolved once.
   *
   * A formatter that is not given falls through to the calendar's own, so a
   * consumer overrides the one string they care about rather than supplying a
   * complete set.
   */
  const text = useMemo(() => ({
    caption: (date: Date) => (
      formatters?.caption?.(date, view, locale) ?? viewLabel(view, date, locale)
    ),
    weekday: (date: Date, index: number) => (
      formatters?.weekday?.(date, locale) ?? weekdays[index]
    ),
    day: (date: Date) => formatters?.day?.(date, view, locale) ?? cellText(view, date, locale),
    monthOption: (date: Date) => (
      formatters?.monthOption?.(date, locale) ?? monthName(date, locale, false)
    ),
    yearOption: (year: number) => formatters?.yearOption?.(year, locale) ?? String(year),
  }), [formatters, locale, view, weekdays]);

  const name = useMemo(() => ({
    day: (date: Date) => labels?.day?.(date, view, locale) ?? cellName(view, date, locale),
    previous: labels?.previous ?? prevAriaLabel,
    next: labels?.next ?? nextAriaLabel,
    monthSelect: labels?.monthSelect ?? 'Month',
    yearSelect: labels?.yearSelect ?? 'Year',
    weekNumber: labels?.weekNumber ?? ((week: number) => `Week ${week}`),
  }), [labels, locale, nextAriaLabel, prevAriaLabel, view]);

  const years = useMemo(() => {
    const current = month.getFullYear();
    const first = minYear ?? minDate?.getFullYear() ?? current - 10;
    const last = maxYear ?? maxDate?.getFullYear() ?? current + 10;
    const from = Math.min(first, current);
    const to = Math.max(last, current);
    return Array.from({ length: to - from + 1 }, (_unused, i) => from + i);
  }, [maxDate, maxYear, minDate, minYear, month]);

  const monthNames = useMemo(() => Array.from(
    { length: 12 },
    (_unused, i) => monthName(new Date(month.getFullYear(), i, 1), locale),
  ), [locale, month]);

  /**
   * The month/year options the built-in selectors show, and that the render
   * prop is handed so a replacement does not have to recompute them.
   *
   * Months are empty outside the day view: in a grid that counts in months or
   * larger, the year alone places it and a month control means nothing.
   */
  const monthOptions = view === 'day'
    ? monthNames.map((_unused, index) => ({
      value: index,
      label: text.monthOption(new Date(month.getFullYear(), index, 1)),
    }))
    : [];

  const yearOptions = view === 'year'
    ? []
    : years.map((year) => ({ value: year, label: text.yearOption(year) }));

  /**
   * The heading between the two paging buttons.
   *
   * `aria-live="polite"` on the title is load-bearing: paging with PageUp
   * moves focus to a day in the new month and the cell announces its own full
   * date, but what tells a reader the whole grid moved is the heading — and a
   * heading that merely changes is not announced.
   */
  const caption = () => {
    if (renderCaption) {
      return renderCaption({
        month,
        view,
        locale,
        label: text.caption(month),
        goToMonth,
        months: monthOptions,
        years: yearOptions,
        labels: { monthSelect: name.monthSelect, yearSelect: name.yearSelect },
      });
    }

    if (!showSelectors) {
      return (
        <h2 className="df-calendar-title" aria-live="polite">
          {text.caption(month)}
        </h2>
      );
    }

    return (
      <div className="df-calendar-selectors">
        {monthOptions.length > 0 && (
          <select
            className="df-calendar-select"
            aria-label={name.monthSelect}
            value={month.getMonth()}
            onChange={(event) => {
              goToMonth(new Date(month.getFullYear(), Number(event.target.value), 1));
            }}
          >
            {monthOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        )}

        {yearOptions.length > 0 && (
          <select
            className="df-calendar-select"
            aria-label={name.yearSelect}
            value={month.getFullYear()}
            onChange={(event) => {
              goToMonth(new Date(Number(event.target.value), month.getMonth(), 1));
            }}
          >
            {yearOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        )}
      </div>
    );
  };

  /**
   * One paging button, through the render prop when there is one.
   *
   * `buttonProps` carries the handler, the disabled state and the accessible
   * name together, so a consumer who spreads it keeps every guarantee and a
   * consumer who does not has visibly chosen otherwise.
   */
  const nav = (direction: 'prev' | 'next') => {
    const disabled = direction === 'prev' ? paging.prevDisabled : paging.nextDisabled;
    const label = direction === 'prev' ? name.previous : name.next;
    const icon = direction === 'prev' ? (iconPrev || chevronLeft) : (iconNext || chevronRight);
    const onClick = () => page(direction === 'prev' ? -1 : 1);

    if (renderNav) {
      return renderNav({
        direction,
        disabled,
        icon,
        label,
        target: direction === 'prev' ? paging.prev() : paging.next(),
        buttonProps: { disabled, 'aria-label': label, onClick },
      });
    }

    return (
      <DButtonIcon
        className="df-calendar-nav"
        icon={icon}
        aria-label={label}
        disabled={disabled}
        onClick={onClick}
      />
    );
  };

  return (
    <div
      className={classNames('df-calendar', className)}
      style={style}
      {...dataAttributes}
    >
      <div className="df-calendar-header">
        {showNavigation && nav('prev')}

        {/*
          * The month name is a live region.
          *
          * Paging with PageUp moves focus to a day in the new month, and the
          * cell announces its own full date — but the heading changing is what
          * tells a reader the whole grid moved, and a heading that merely
          * changes is not announced.
          */}
        {caption()}

        {showNavigation && nav('next')}
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
                  {weekdayDates.map((date, i) => (
                    <th
                      key={longWeekdays[i]}
                      scope="col"
                      className="df-calendar-weekday"
                      // The short name is shown; the long one is read, because
                      // "Mo" is not a word in any language.
                      abbr={longWeekdays[i]}
                    >
                      {text.weekday(date, i)}
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
                          aria-label={name.day(cell)}
                          {...view === 'day' && !isSameMonth(cell, shown) && { 'data-outside': '' }}
                          {...descriptor.isSame(cell, today) && { 'data-today': '' }}
                          {...chosen && { 'data-selected': '' }}
                          {...highlighted.has(isoDay(cell)) && { 'data-highlighted': '' }}
                          {...edge && { 'data-range': edge }}
                          {...drawn && !drawn.to && { 'data-drawing': '' }}
                          onClick={() => { moveTo(cell); select(cell); }}
                          onMouseEnter={() => setPreview(cell)}
                        >
                          {/*
                            * The render prop replaces what is INSIDE the
                            * button, never the button. The role, the roving
                            * tabindex, `aria-selected` and the accessible
                            * name are the difference between a grid and a
                            * pile of buttons, so they are not up for grabs.
                            */}
                          {renderDay ? renderDay({
                            date: cell,
                            label: text.day(cell),
                            selected: chosen,
                            today: descriptor.isSame(cell, today),
                            outside: view === 'day' && !isSameMonth(cell, shown),
                            disabled: outOfRange(cell),
                            highlighted: highlighted.has(isoDay(cell)),
                            range: edge || undefined,
                          }) : (
                            <time dateTime={isoDay(cell)}>{text.day(cell)}</time>
                          )}
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
