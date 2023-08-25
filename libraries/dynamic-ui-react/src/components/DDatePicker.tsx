/* eslint-disable react/jsx-props-no-spreading */
import DatePicker, {
  ReactDatePickerCustomHeaderProps,
  ReactDatePickerProps,
} from 'react-datepicker';
import { DateTime } from 'luxon';

import {
  FormEventHandler,
  forwardRef,
  useCallback,
} from 'react';

import { ButtonVariant, ComponentSize } from '@dynamic-framework/ui';
import { useLiquidContext } from '../contexts';

import DDatePickerTime from './DDatePickerTime';
import MDatePickerInput from './DDatePickerInput';
import DDatePickerHeader from './DDatePickerHeader';

type InputPickerProps = {
  value?: string;
  onClick?: () => void;
};

type TimeInputPickerProps = {
  value?: string | number ;
  onChange?: ((value: string) => void) & FormEventHandler<HTMLDInputElement>
};

type CalendarProps = Omit<ReactDatePickerProps, 'onChange' | 'selectsRange'> & {
  date: string;
  onEventChangeDate: (value: Date | [Date | null, Date | null] | null) => void;
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
    onEventChangeDate,
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
  }: CalendarProps,
) {
  const dateJS = (value: string) => DateTime.fromISO(value).toJSDate();
  const { language } = useLiquidContext();
  const lang = language || 'en';

  // eslint-disable-next-line react/no-unstable-nested-components
  const InputPicker = forwardRef(({ value, onClick }: InputPickerProps, ref) => (
    <MDatePickerInput
      label={inputLabel}
      innerId={inputId}
      iconEnd={inputIcon}
      value={value}
      onEventClick={onClick}
      ref={ref}
    />
  ));

  const TimeInputPicker = useCallback(({ value, onChange }: TimeInputPickerProps) => (
    <DDatePickerTime
      onEventChange={onChange}
      value={value}
      label={timeLabel}
      innerId={timeId}
    />
  ), [timeLabel, timeId]);

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
      selected={dateJS(date)}
      calendarClassName="m-date-picker"
      onChange={(value) => {
        onEventChangeDate(value);
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
