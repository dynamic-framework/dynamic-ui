import {
  useCallback,
  useMemo,
  type ComponentType,
} from 'react';
import DatePicker from 'react-datepicker';

import type {
  DatePickerProps,
  ReactDatePickerCustomHeaderProps,
} from 'react-datepicker';

import { Locale } from 'date-fns';
import { DCalendar } from '../DCalendar';
import {
  calendarView, dayFilter, flattenHighlights, fromSelection, selectionMode,
  toSelection,
} from './selectionInterop';
import DDatePickerTime from './components/DDatePickerTime';
import DDatePickerInput from './components/DDatePickerInput';
import DDatePickerHeaderSelector, { PickerType } from './components/DDatePickerHeaderSelector';

import type {
  BaseProps,
  ButtonVariant,
  ComponentColor,
  ComponentSize,
  FamilyIconProps,
} from '../interface';

type Props =
& BaseProps
& FamilyIconProps
& Omit<DatePickerProps,
| 'showMonthDropdown'
| 'showMonthYearDropdown'
| 'showYearDropdown'
| 'useShortMonthInDropdown'
| 'yearDropdownItemNumber'
| 'scrollableYearDropdown'
| 'dropdownMode'
| 'yearItemNumber'
| 'portalId'
| 'withPortal'
| 'onPortalKeyDown'
| 'portalHost'
| 'locale'
>
& {
  inputLabel?: string;
  inputHint?: string;
  inputAriaLabel?: string;
  inputActionAriaLabel?: string;
  iconInput?: string;
  inputId?: string;
  timeId?: string;
  iconHeaderPrev?: string;
  iconHeaderNext?: string;
  iconHeaderSize?: ComponentSize;
  headerPrevMonthAriaLabel?: string;
  headerNextMonthAriaLabel?: string;
  headerButtonVariant?: ButtonVariant;
  headerButtonColor?: ComponentColor;
  minYearSelect?: number;
  maxYearSelect?: number;
  invalid?: boolean;
  valid?: boolean;
  placeholder?: string;
  showHeaderSelectors?: boolean;
  formatHeaderDate?: string;
  locale?: Locale,
  ariaLabelInputTime?: string;
};

export default function DDatePicker(
  {
    inputLabel,
    inputHint,
    inputAriaLabel,
    ariaLabelInputTime,
    inputActionAriaLabel = 'open calendar',
    inputId = 'input-calendar',
    timeId = 'input-time',
    timeInputLabel,
    minYearSelect,
    maxYearSelect,
    iconHeaderSize,
    iconMaterialStyle,
    iconInput,
    headerPrevMonthAriaLabel,
    headerNextMonthAriaLabel,
    invalid = false,
    valid = false,
    renderCustomHeader: renderCustomHeaderProp,
    className,
    dateFormatCalendar: dateFormatCalendarProp,
    style,
    dataAttributes,
    placeholder,
    showHeaderSelectors,
    formatHeaderDate,
    ...props
  }: Props,
) {
  // Some test runtimes can resolve react-datepicker as a module object.
  // Normalize to a renderable component for both function and { default } shapes.
  const SafeDatePicker = useMemo<ComponentType<DatePickerProps>>(() => {
    const interopDefault = (DatePicker as unknown as { default?: unknown }).default;

    if (interopDefault !== undefined) {
      return interopDefault as ComponentType<DatePickerProps>;
    }

    if (typeof DatePicker === 'function') {
      return DatePicker as unknown as ComponentType<DatePickerProps>;
    }

    return DatePicker as unknown as ComponentType<DatePickerProps>;
  }, []);

  /**
   * The in-house grid, for the plain inline day calendar.
   *
   * This is the first piece of `react-datepicker` to go, and it is this piece
   * first for two reasons: `inline` is the most-used prop in the whole surface
   * — 21 of the uses across the stories and specs — and a day grid with no
   * popover is the part `DCalendar` already covers completely.
   *
   * Everything else still goes to the library. Narrow on purpose: a date
   * picker that half works is worse than one that works through a dependency,
   * so each condition here comes off only once the replacement covers it.
   *
   *   next: the popover and the input, then time.
   *
   * Every inline story now renders through here. What is left is the whole
   * path where the calendar hangs off a text field, and the time list.
   */
  const useOwnCalendar = Boolean(props.inline)
    && !props.showTimeSelect
    && !props.showTimeSelectOnly;

  const pickerType = useMemo(() => {
    if (props.showQuarterYearPicker) return PickerType.Quarter;
    if (props.showMonthYearPicker) return PickerType.Month;
    if (props.showYearPicker) return PickerType.Year;
    return PickerType.Default;
  }, [
    props.showQuarterYearPicker,
    props.showMonthYearPicker,
    props.showYearPicker,
  ]);

  const DatePickerHeader = useCallback((headerProps: ReactDatePickerCustomHeaderProps) => (
    <DDatePickerHeaderSelector
      {...headerProps}
      monthsShown={props.monthsShown}
      prevMonthAriaLabel={headerPrevMonthAriaLabel}
      nextMonthAriaLabel={headerNextMonthAriaLabel}
      iconSize={iconHeaderSize}
      minYearSelect={minYearSelect}
      maxYearSelect={maxYearSelect}
      pickerType={pickerType}
      showHeaderSelectors={showHeaderSelectors}
      formatHeaderDate={formatHeaderDate}
      locale={props.locale}
    />
  ), [
    headerPrevMonthAriaLabel,
    headerNextMonthAriaLabel,
    iconHeaderSize,
    minYearSelect,
    maxYearSelect,
    pickerType,
    showHeaderSelectors,
    formatHeaderDate,
    props.monthsShown,
    props.locale,
  ]);

  const defaultRenderCustomHeader = useCallback((headerProps: ReactDatePickerCustomHeaderProps) => (
    <DatePickerHeader {...headerProps} />
  ), [DatePickerHeader]);

  const renderCustomHeader = useMemo(
    () => (renderCustomHeaderProp || defaultRenderCustomHeader),
    [defaultRenderCustomHeader, renderCustomHeaderProp],
  );

  if (useOwnCalendar) {
    return (
      <DCalendar
        className={className}
        style={style}
        dataAttributes={dataAttributes}
        locale={typeof props.locale === 'string' ? props.locale : undefined}
        weekStartsOn={props.calendarStartDay}
        mode={selectionMode(props)}
        selected={toSelection(props)}
        onSelect={(selection) => props.onChange?.(
          fromSelection(selection, props) as never,
          undefined,
        )}
        defaultMonth={props.openToDate ?? undefined}
        minDate={props.minDate ?? undefined}
        maxDate={props.maxDate ?? undefined}
        numberOfMonths={props.monthsShown}
        view={calendarView(props)}
        showWeekNumbers={props.showWeekNumbers}
        disabledDates={dayFilter(props)}
        highlightedDates={flattenHighlights(props.highlightDates)}
        ariaLabel={inputAriaLabel ?? inputLabel}
      />
    );
  }

  return (
    <SafeDatePicker
      {...dataAttributes}
      {...props as DatePickerProps}
      calendarClassName="d-date-picker"
      renderCustomHeader={renderCustomHeader}
      placeholderText={placeholder}
      customInput={(
        <DDatePickerInput
          id={inputId}
          aria-label={inputAriaLabel}
          iconEndAriaLabel={inputActionAriaLabel}
          iconMaterialStyle={iconMaterialStyle}
          iconEnd={iconInput}
          inputLabel={inputLabel}
          className={className}
          style={style}
          invalid={invalid}
          valid={valid}
          hint={inputHint}
        />
      )}
      customTimeInput={(
        <DDatePickerTime
          id={timeId}
          aria-label={ariaLabelInputTime}
        />
      )}
    />
  );
}
