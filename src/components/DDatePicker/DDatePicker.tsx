import {
  useCallback,
  useMemo,
} from 'react';
import DatePicker from 'react-datepicker';

import type {
  DatePickerProps,
  ReactDatePickerCustomHeaderProps,
} from 'react-datepicker';

import { Locale } from 'date-fns';
import DDatePickerTime from './components/DDatePickerTime';
import DDatePickerInput from './components/DDatePickerInput';
import DDatePickerHeaderSelector, { PickerType } from './components/DDatePickerHeaderSelector';

import type {
  BaseProps,
  ButtonVariant,
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
  headerButtonTheme?: string;
  minYearSelect?: number;
  maxYearSelect?: number;
  invalid?: boolean;
  valid?: boolean;
  placeholder?: string;
  showHeaderSelectors?: boolean;
  locale?: Locale,
};

export default function DDatePicker(
  {
    inputLabel,
    inputHint,
    inputAriaLabel,
    inputActionAriaLabel = 'open calendar',
    inputId = 'input-calendar',
    timeId = 'input-time',
    timeInputLabel,
    iconInput,
    iconHeaderPrev,
    iconHeaderNext,
    iconMaterialStyle,
    iconFamilyClass,
    iconFamilyPrefix,
    minYearSelect,
    maxYearSelect,
    iconHeaderSize,
    headerPrevMonthAriaLabel,
    headerNextMonthAriaLabel,
    headerButtonVariant,
    headerButtonTheme,
    invalid = false,
    valid = false,
    renderCustomHeader: renderCustomHeaderProp,
    className,
    dateFormatCalendar: dateFormatCalendarProp,
    style,
    dataAttributes,
    placeholder,
    showHeaderSelectors,
    ...props
  }: Props,
) {
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
      iconPrev={iconHeaderPrev}
      iconNext={iconHeaderNext}
      iconMaterialStyle={iconMaterialStyle}
      prevMonthAriaLabel={headerPrevMonthAriaLabel}
      nextMonthAriaLabel={headerNextMonthAriaLabel}
      iconSize={iconHeaderSize}
      buttonVariant={headerButtonVariant}
      buttonTheme={headerButtonTheme}
      minYearSelect={minYearSelect}
      maxYearSelect={maxYearSelect}
      pickerType={pickerType}
      showHeaderSelectors={showHeaderSelectors}
      locale={props.locale}
    />
  ), [
    iconHeaderNext,
    iconHeaderPrev,
    iconMaterialStyle,
    headerPrevMonthAriaLabel,
    headerNextMonthAriaLabel,
    iconHeaderSize,
    headerButtonVariant,
    headerButtonTheme,
    minYearSelect,
    maxYearSelect,
    pickerType,
    showHeaderSelectors,
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

  return (
    <DatePicker
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
        <DDatePickerTime id={timeId} />
      )}
    />
  );
}
