import React from 'react';
import DatePicker from 'react-datepicker';
import { DateTime } from 'luxon';
import 'react-datepicker/dist/react-datepicker.css';

export declare interface CalendarProps {
  date: string;
  setDate: (date: string) => void;
  calendarContainer?: React.FC;
  inline?: boolean;
  withPortal?: boolean;
  minDate?: string;
  showTimeInput?: boolean;
  calendarStartDay?: number;
  timeInputLabel?: string;
  className?: string;
  dateFormat?: string | string[];
}

export default function MCalendar({
  setDate,
  date,
  calendarContainer,
  inline,
  withPortal,
  minDate,
  showTimeInput,
  calendarStartDay,
  timeInputLabel,
  dateFormat,
  className,
}: CalendarProps) {
  const dateJS = (value: string) => DateTime.fromISO(value).toJSDate();

  return (
    <DatePicker
      selected={dateJS(date)}
      onChange={(value: Date) => setDate(DateTime.fromJSDate(value).toISO())}
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      calendarContainer={calendarContainer}
      inline={inline}
      withPortal={withPortal}
      minDate={minDate ? dateJS(minDate) : undefined}
      showTimeInput={showTimeInput}
      calendarStartDay={calendarStartDay}
      timeInputLabel={timeInputLabel}
      dateFormat={dateFormat}
      className={className}
    />
  );
}
