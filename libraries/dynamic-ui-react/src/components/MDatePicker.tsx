/* eslint-disable react/jsx-props-no-spreading */
import DatePicker, {
  ReactDatePickerCustomHeaderProps,
  ReactDatePickerProps,
} from 'react-datepicker';
import { DateTime } from 'luxon';

import {
  forwardRef,
  useCallback,
} from 'react';

import { ButtonVariant, ComponentSize } from '@dynamic-framework/ui';
import { useLiquidContext } from '../contexts';

import MDatePickerTime, { InnerDatePickerTimeProps } from './MDatePickerTime';
import MDatePickerInput, { InnerDatePickerProps } from './MDatePickerInput';
import MDatePickerHeader from './MDatePickerHeader';

type CalendarProps = Omit<ReactDatePickerProps, 'onChange' | 'selectsRange'> & {
  date: string;
  setDate: (value: Date | [Date | null, Date | null] | null) => void;
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

export default function MDatePicker({
  setDate,
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
}: CalendarProps) {
  const dateJS = (value: string) => DateTime.fromISO(value).toJSDate();
  const { language } = useLiquidContext();
  const lang = language || 'en';

  // eslint-disable-next-line react/no-unstable-nested-components
  const InputPicker = forwardRef(({ value, onClick }: InnerDatePickerProps, ref) => (
    <MDatePickerInput
      label={inputLabel}
      mId={inputId}
      iconEnd={inputIcon}
      value={value}
      onClick={onClick}
      ref={ref}
    />
  ));

  const TimeInputPicker = useCallback(({ value, onChange }: InnerDatePickerTimeProps) => (
    <MDatePickerTime
      onChange={onChange}
      value={value}
      label={timeLabel}
      mId={timeId}
    />
  ), [timeLabel, timeId]);

  const DatePickerHeader = useCallback((headerProps: ReactDatePickerCustomHeaderProps) => (
    <MDatePickerHeader
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
      selected={dateJS(date)}
      calendarClassName="m-date-picker"
      onChange={(value) => {
        setDate(value);
      }}
      renderCustomHeader={(headerProps) => <DatePickerHeader {...headerProps} />}
      customInput={<InputPicker />}
      customTimeInput={<TimeInputPicker />}
      selectsRange={selectsRange}
      {...lang && { locale: lang }}
      {...props}
    />
  );
}
