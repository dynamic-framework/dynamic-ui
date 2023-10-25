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
  inputIcon?: string;
  inputId?: string;
  timeId?: string;
  timeLabel?: string;
  headerDecreaseMonthIcon?: string;
  headerIncreaseMonthIcon?: string;
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
    inputIcon = 'calendar',
    inputId = 'input-calendar',
    timeId = 'input-time',
    timeLabel,
    headerDecreaseMonthIcon = 'chevron-left',
    headerIncreaseMonthIcon = 'chevron-right',
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
      decreaseMonthIcon={headerDecreaseMonthIcon}
      increaseMonthIcon={headerIncreaseMonthIcon}
      iconSize={headerIconSize}
      buttonVariant={headerButtonVariant}
      buttonTheme={headerButtonTheme}
      withMonthSelector={!!withMonthSelector}
    />
  ), [headerButtonTheme,
    headerButtonVariant,
    headerDecreaseMonthIcon,
    headerIconSize,
    headerIncreaseMonthIcon,
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
