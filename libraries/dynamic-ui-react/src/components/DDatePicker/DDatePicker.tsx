import { useCallback, useMemo } from 'react';
import DatePicker from 'react-datepicker';
import { parseISO } from 'date-fns';

import type { Locale } from 'date-fns';

import type {
  ReactDatePickerCustomHeaderProps,
  ReactDatePickerProps,
} from 'react-datepicker';

import DDatePickerTime from '../DDatePickerTime';
import DDatePickerInput from '../DDatePickerInput';
import DDatePickerHeader from '../DDatePickerHeader';

import type {
  BaseProps,
  ButtonVariant,
  ComponentSize,
  FamilyIconProps,
} from '../interface';
import { useDContext } from '../../contexts';

type Props<
  CustomModifierNames extends string = never,
  WithRange extends boolean | undefined = undefined,
> =
& BaseProps
& FamilyIconProps
& Pick<ReactDatePickerProps<CustomModifierNames, WithRange>,
| 'formatWeekDay'
| 'onChange'
| 'autoFocus'
| 'inline'
| 'withPortal'
| 'minDate'
| 'showTimeInput'
| 'calendarStartDay'
| 'dateFormat'
| 'selectsStart'
| 'selectsEnd'
| 'startDate'
| 'endDate'
| 'fixedHeight'
| 'renderCustomHeader'
>
& {
  date?: string | null;
  selectsRange?: boolean;
  inputLabel?: string;
  inputHint?: string;
  inputAriaLabel?: string;
  inputActionAriaLabel?: string;
  iconInput?: string;
  inputId?: string;
  timeId?: string;
  timeLabel?: string;
  iconHeaderPrevMonth?: string;
  iconHeaderNextMonth?: string;
  iconHeaderSize?: ComponentSize;
  headerPrevMonthAriaLabel?: string;
  headerNextMonthAriaLabel?: string;
  headerButtonVariant?: ButtonVariant;
  headerButtonTheme?: string;
  locale?: Locale;
  minYearSelect?: number;
  maxYearSelect?: number;
  invalid?: boolean;
  valid?: boolean;
  placeholder?: string;
};

/**
 * @deprecated
 */
export default function DDatePicker<
  CustomModifierNames extends string = never,
  WithRange extends boolean | undefined = undefined,
>(
  {
    date,
    selectsRange = false,
    inputLabel,
    inputHint,
    inputAriaLabel,
    inputActionAriaLabel = 'open calendar',
    inputId = 'input-calendar',
    timeId = 'input-time',
    timeLabel,
    iconInput: iconInputProp,
    iconHeaderPrevMonth: iconHeaderPrevMonthProp,
    iconHeaderNextMonth: iconHeaderNextMonthProp,
    iconMaterialStyle: iconMaterialStyleProp,
    iconFamilyClass,
    iconFamilyPrefix,
    minYearSelect = 1900,
    maxYearSelect = 2100,
    iconHeaderSize = 'sm',
    headerPrevMonthAriaLabel = 'decrease month',
    headerNextMonthAriaLabel = 'increase month',
    headerButtonVariant = 'link',
    headerButtonTheme = 'dark',
    invalid = false,
    valid = false,
    renderCustomHeader: renderCustomHeaderProp,
    locale,
    className,
    formatWeekDay: formatWeekDayProp,
    style,
    dataAttributes,
    placeholder,
    ...props
  }: Props<CustomModifierNames, WithRange>,
) {
  const {
    iconMap: {
      calendar,
      chevronLeft,
      chevronRight,
    },
  } = useDContext();
  const selected = useMemo(() => (date ? parseISO(date) : null), [date]);
  const iconInput = useMemo(() => iconInputProp || calendar, [calendar, iconInputProp]);

  const handleFormatWeekDay = useMemo(() => (
    formatWeekDayProp
      ? (day: string) => formatWeekDayProp(day)
      : (day: string) => day.substring(0, 1)
  ), [formatWeekDayProp]);

  const iconPrevMonth = useMemo(
    () => iconHeaderPrevMonthProp || chevronLeft,
    [chevronLeft, iconHeaderPrevMonthProp],
  );
  const iconNextMonth = useMemo(
    () => iconHeaderNextMonthProp || chevronRight,
    [chevronRight, iconHeaderNextMonthProp],
  );

  const DatePickerHeader = useCallback((headerProps: ReactDatePickerCustomHeaderProps) => (
    <DDatePickerHeader
      {...headerProps}
      {...locale && { locale }}
      iconPrevMonth={iconPrevMonth}
      iconNextMonth={iconNextMonth}
      iconMaterialStyle={iconMaterialStyleProp}
      prevMonthAriaLabel={headerPrevMonthAriaLabel}
      nextMonthAriaLabel={headerNextMonthAriaLabel}
      iconSize={iconHeaderSize}
      buttonVariant={headerButtonVariant}
      buttonTheme={headerButtonTheme}
      minYearSelect={minYearSelect}
      maxYearSelect={maxYearSelect}
    />
  ), [
    locale,
    iconPrevMonth,
    iconNextMonth,
    iconMaterialStyleProp,
    headerPrevMonthAriaLabel,
    headerNextMonthAriaLabel,
    iconHeaderSize,
    headerButtonVariant,
    headerButtonTheme,
    minYearSelect,
    maxYearSelect,
  ]);

  const defaultRenderCustomHeader = useCallback((headerProps: ReactDatePickerCustomHeaderProps) => (
    <DatePickerHeader {...headerProps} />
  ), [DatePickerHeader]);

  const renderCustomHeader = useMemo(
    () => (renderCustomHeaderProp || defaultRenderCustomHeader),
    [defaultRenderCustomHeader, renderCustomHeaderProp],
  );

  return (
    <DatePicker<string, boolean>
      selected={selected}
      calendarClassName="d-date-picker"
      renderCustomHeader={renderCustomHeader}
      selectsRange={selectsRange}
      formatWeekDay={handleFormatWeekDay}
      customInput={(
        <DDatePickerInput
          id={inputId}
          aria-label={inputAriaLabel}
          iconEndAriaLabel={inputActionAriaLabel}
          iconMaterialStyle={iconMaterialStyleProp}
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
          label={timeLabel}
        />
      )}
      placeholderText={placeholder}
      {...locale && { locale }}
      {...dataAttributes}
      {...props}
    />
  );
}
