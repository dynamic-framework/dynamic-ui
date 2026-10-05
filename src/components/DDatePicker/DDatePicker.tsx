import { useCallback } from 'react';

import { DCalendar } from '../DCalendar';
import { formatDate, parseDate } from '../DCalendar/format';
import {
  calendarView, dayFilter, flattenHighlights, fromSelection, initialMonth,
  selectionMode, toSelection,
} from './selectionInterop';
import DDatePickerPopover from './DDatePickerPopover';
import DDatePickerTime from './components/DDatePickerTime';
import DDatePickerInput from './components/DDatePickerInput';

import type { Selection, WeekDay } from '../DCalendar/month';
import type { BaseProps, FamilyIconProps } from '../interface';

export type DatePickerValue = Date | null;

/**
 * The picker's own props.
 *
 * This was `Omit<DatePickerProps, …>` with twelve names subtracted — a public
 * surface nobody chose, where every prop `react-datepicker` happened to have
 * was part of this design system's API whether it had an answer for it or
 * not, and where removing one was a breaking change to a contract we did not
 * write. Spelled out it is about a third the size, and each entry is a
 * decision someone made.
 */
export type Props =
& BaseProps
& FamilyIconProps
& {
  /* --- the value, in the three shapes the 2.x API used --- */
  selected?: DatePickerValue;
  startDate?: DatePickerValue;
  endDate?: DatePickerValue;
  selectedDates?: Date[];
  selectsRange?: boolean;
  selectsMultiple?: boolean;
  onChange?: (value: DatePickerValue | Date[] | [DatePickerValue, DatePickerValue]) => void;

  /* --- what the grid shows --- */
  inline?: boolean;
  openToDate?: Date;
  monthsShown?: number;
  showWeekNumbers?: boolean;
  calendarStartDay?: WeekDay;
  locale?: string;
  fixedHeight?: boolean;

  /* --- which view it counts in --- */
  showMonthYearPicker?: boolean;
  showYearPicker?: boolean;
  showQuarterYearPicker?: boolean;
  showWeekPicker?: boolean;

  /* --- which days can be chosen --- */
  minDate?: Date;
  maxDate?: Date;
  excludeDates?: (Date | { date: Date; message?: string })[];
  includeDates?: Date[];
  filterDate?: (date: Date) => boolean;
  highlightDates?: (Date | Record<string, Date[]>)[];

  /* --- the field --- */
  /**
   * Lands on the `<input>`, which is where it has always landed: the 2.x
   * build forwarded it through, and a `<label for>` written against it would
   * otherwise point at nothing.
   */
  id?: string;
  dateFormat?: string;
  placeholder?: string;
  disabled?: boolean;
  inputLabel?: string;
  inputHint?: string;
  inputAriaLabel?: string;
  inputActionAriaLabel?: string;
  iconInput?: string;
  inputId?: string;
  invalid?: boolean;
  valid?: boolean;

  /* --- the time field, under the grid --- */
  showTimeInput?: boolean;
  timeInputLabel?: string;
  timeId?: string;
  ariaLabelInputTime?: string;

  /* --- the header --- */
  iconHeaderPrev?: string;
  iconHeaderNext?: string;
  headerPrevMonthAriaLabel?: string;
  headerNextMonthAriaLabel?: string;
  showHeaderSelectors?: boolean;
  minYearSelect?: number;
  maxYearSelect?: number;
};

/** What the field shows. A period is written as its own first day. */
function displayValue(
  selection: Selection,
  pattern: string,
  locale?: string,
): string {
  if (!selection) return '';
  if (Array.isArray(selection)) {
    return selection.map((date) => formatDate(date, pattern, { locale })).join(', ');
  }
  if (selection instanceof Date) return formatDate(selection, pattern, { locale });
  /* A range reads as both ends; an unfinished one as the end it has. */
  const from = formatDate(selection.from, pattern, { locale });
  return selection.to ? `${from} – ${formatDate(selection.to, pattern, { locale })}` : from;
}

export default function DDatePicker(props: Props) {
  const {
    inline,
    dateFormat = 'dd/MM/yyyy',
    locale,
    className,
    style,
    dataAttributes,
    inputId = 'input-calendar',
    timeId = 'input-time',
    inputLabel,
    inputHint,
    inputAriaLabel,
    inputActionAriaLabel = 'open calendar',
    ariaLabelInputTime,
    iconInput,
    iconMaterialStyle,
    invalid = false,
    valid = false,
    placeholder,
    disabled,
    showTimeInput,
    timeInputLabel,
    onChange,
    iconHeaderPrev,
    iconHeaderNext,
    headerPrevMonthAriaLabel,
    headerNextMonthAriaLabel,
    showHeaderSelectors,
    minYearSelect,
    maxYearSelect,
    id,
    calendarStartDay,
    openToDate,
    minDate,
    maxDate,
    monthsShown,
    showWeekNumbers,
    fixedHeight,
    highlightDates,
  } = props;

  const mode = selectionMode(props);
  const selection = toSelection(props);

  const report = useCallback((next: Selection) => {
    onChange?.(fromSelection(next, props) as never);
  }, [onChange, props]);

  /**
   * Whether choosing closes the panel.
   *
   * A single date is finished the moment it is picked. A range is not — the
   * first click only names a start, and closing there would make the second
   * end unreachable. Several dates are never finished; the reader says when.
   */
  const closesOnSelect = useCallback((next: Selection) => {
    if (mode === 'multiple') return false;
    if (mode === 'range') return !Array.isArray(next) && !!next && 'to' in next && !!next.to;
    return !!next;
  }, [mode]);

  const renderCalendar = useCallback((close?: () => void) => (
    <DCalendar
      locale={locale}
      weekStartsOn={calendarStartDay}
      mode={mode}
      selected={selection}
      defaultMonth={initialMonth(selection, openToDate)}
      minDate={minDate}
      maxDate={maxDate}
      numberOfMonths={monthsShown}
      view={calendarView(props)}
      showWeekNumbers={showWeekNumbers}
      fixedWeeks={fixedHeight}
      disabledDates={dayFilter(props)}
      highlightedDates={flattenHighlights(highlightDates)}
      ariaLabel={inputAriaLabel ?? inputLabel}
      iconPrev={iconHeaderPrev}
      iconNext={iconHeaderNext}
      prevAriaLabel={headerPrevMonthAriaLabel}
      nextAriaLabel={headerNextMonthAriaLabel}
      showSelectors={showHeaderSelectors}
      minYear={minYearSelect}
      maxYear={maxYearSelect}
      onSelect={(next) => {
        report(next);
        if (close && closesOnSelect(next)) close();
      }}
    />
    /* `props` is the dependency: every reader above is a field of it, and
       listing them one by one is how one gets forgotten. */
  ), [
    calendarStartDay, closesOnSelect, fixedHeight, headerNextMonthAriaLabel,
    headerPrevMonthAriaLabel, highlightDates, iconHeaderNext, iconHeaderPrev,
    inputAriaLabel, inputLabel, locale, maxDate, maxYearSelect, minDate, minYearSelect,
    mode, monthsShown, openToDate, props, report, selection, showHeaderSelectors,
    showWeekNumbers,
  ]);

  /**
   * The time field, which changes the clock without moving the day.
   *
   * `parseDate` with a pattern naming only hours and minutes resolves the date
   * part from the reference — so "14:30" on the 8th of March stays the 8th of
   * March. Adding milliseconds to a timestamp instead would cross a daylight
   * saving boundary twice a year and land on the wrong day.
   */
  const time = showTimeInput && (
    <DDatePickerTime
      id={timeId}
      label={timeInputLabel}
      aria-label={ariaLabelInputTime}
      value={selection instanceof Date ? formatDate(selection, 'HH:mm') : ''}
      onChange={(value) => {
        if (!(selection instanceof Date)) return;
        const next = parseDate(value, 'HH:mm', { reference: selection });
        if (next) report(next);
      }}
    />
  );

  if (inline) {
    return (
      <div className={className} style={style} {...dataAttributes}>
        {renderCalendar()}
        {time}
      </div>
    );
  }

  return (
    <DDatePickerPopover
      ariaLabel={inputAriaLabel ?? inputLabel ?? 'Choose a date'}
      renderTrigger={({ ref, open, ...triggerProps }) => (
        <DDatePickerInput
          ref={ref as never}
          /* `id` on the component has always landed on the input — the 2.x
             build forwarded it through, and a label written against it would
             otherwise point at nothing. */
          id={id ?? inputId}
          aria-label={inputAriaLabel}
          aria-expanded={open}
          iconEndAriaLabel={inputActionAriaLabel}
          iconMaterialStyle={iconMaterialStyle}
          iconEnd={iconInput}
          inputLabel={inputLabel}
          className={className}
          style={style}
          invalid={invalid}
          valid={valid}
          hint={inputHint}
          placeholder={placeholder}
          disabled={disabled}
          value={displayValue(selection, dateFormat, locale)}
          {...dataAttributes}
          {...triggerProps}
        />
      )}
    >
      {(close) => (
        <div className="df-datepicker-panel">
          {renderCalendar(close)}
          {time}
        </div>
      )}
    </DDatePickerPopover>
  );
}
