import { useCallback, useMemo } from 'react';
import DatePicker from 'react-datepicker';
import { DateTime } from 'luxon';

import type { ReactDatePickerCustomHeaderProps, ReactDatePickerProps } from 'react-datepicker';

import DDatePickerTime from './DDatePickerTime';
import DDatePickerInput from './DDatePickerInput';
import DDatePickerHeader from './DDatePickerHeader';
import { useDContext } from '../contexts';

import type { ButtonVariant, ComponentSize } from './interface';

type Props = Omit<ReactDatePickerProps, 'onChange' | 'selectsRange'> & {
  date: string;
  onChangeDate: (value: Date | [Date | null, Date | null] | null) => void;
  selectsRange?: boolean;
  withMonthSelector?: boolean;
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
};

export default function DDatePicker(
  {
    onChangeDate,
    date,
    selectsRange,
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
    ...props
  }: Props,
) {
  const selected = useMemo(() => DateTime.fromISO(date).toJSDate(), [date]);
  const { language } = useDContext();
  const locale = useMemo(() => language || 'en', [language]);

  const DatePickerHeader = useCallback((headerProps: ReactDatePickerCustomHeaderProps) => (
    <DDatePickerHeader
      {...headerProps}
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
  ]);

  return (
    <DatePicker
      selected={selected}
      calendarClassName="m-date-picker"
      onChange={onChangeDate}
      renderCustomHeader={(headerProps) => <DatePickerHeader {...headerProps} />}
      customInput={<DDatePickerInput id={inputId} iconEnd={inputIcon} />}
      customTimeInput={<DDatePickerTime id={timeId} label={timeLabel} />}
      selectsRange={selectsRange}
      {...locale && { locale }}
      {...props}
    />
  );
}
