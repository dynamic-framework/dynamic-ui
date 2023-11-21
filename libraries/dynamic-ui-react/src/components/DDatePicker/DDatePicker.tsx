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

import type { BaseProps, ButtonVariant, ComponentSize } from '../interface';

type Props =
& BaseProps
& Omit<ReactDatePickerProps, 'selected' | 'selectsRange' | 'locale'>
& {
  date?: string | null;
  withMonthSelector?: boolean;
  selectsRange?: boolean;
  inputLabel?: string;
  inputAriaLabel?: string;
  inputActionAriaLabel?: string;
  inputIcon?: string;
  inputId?: string;
  timeId?: string;
  timeLabel?: string;
  headerPrevMonthIcon?: string;
  headerNextMonthIcon?: string;
  headerPrevMonthAriaLabel?: string;
  headerNextMonthAriaLabel?: string;
  headerIconSize?: ComponentSize;
  headerButtonVariant?: ButtonVariant;
  headerButtonTheme?: string;
  locale?: Locale;
};

export default function DDatePicker(
  {
    date,
    selectsRange = false,
    withMonthSelector,
    inputLabel,
    inputAriaLabel,
    inputActionAriaLabel = 'open calendar',
    inputIcon = 'calendar',
    inputId = 'input-calendar',
    timeId = 'input-time',
    timeLabel,
    headerPrevMonthIcon = 'chevron-left',
    headerPrevMonthAriaLabel = 'decrease month',
    headerNextMonthIcon = 'chevron-right',
    headerNextMonthAriaLabel = 'increase month',
    headerIconSize = 'sm',
    headerButtonVariant = 'link',
    headerButtonTheme = 'dark',
    locale,
    className,
    style,
    ...props
  }: Props,
) {
  const selected = useMemo(() => (date ? parseISO(date) : null), [date]);

  const DatePickerHeader = useCallback((headerProps: ReactDatePickerCustomHeaderProps) => (
    <DDatePickerHeader
      {...headerProps}
      {...locale && { locale }}
      prevMonthIcon={headerPrevMonthIcon}
      nextMonthIcon={headerNextMonthIcon}
      prevMonthAriaLabel={headerPrevMonthAriaLabel}
      nextMonthAriaLabel={headerNextMonthAriaLabel}
      iconSize={headerIconSize}
      buttonVariant={headerButtonVariant}
      buttonTheme={headerButtonTheme}
      withMonthSelector={!!withMonthSelector}
    />
  ), [
    headerButtonTheme,
    headerButtonVariant,
    headerPrevMonthIcon,
    headerPrevMonthAriaLabel,
    headerIconSize,
    headerNextMonthIcon,
    headerNextMonthAriaLabel,
    withMonthSelector,
    locale,
  ]);

  return (
    <DatePicker
      selected={selected}
      calendarClassName="d-date-picker"
      renderCustomHeader={(headerProps) => <DatePickerHeader {...headerProps} />}
      customInput={(
        <DDatePickerInput
          id={inputId}
          aria-label={inputAriaLabel}
          iconEndAriaLabel={inputActionAriaLabel}
          iconEnd={inputIcon}
          className={className}
          style={style}
        />
      )}
      customTimeInput={<DDatePickerTime id={timeId} label={timeLabel} />}
      selectsRange={selectsRange}
      {...locale && { locale }}
      {...props}
    />
  );
}
