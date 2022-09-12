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
}

export default function MCalendar({
  setDate,
  date,
  calendarContainer,
  inline,
  withPortal,
}: CalendarProps) {
  const dateJS = DateTime.fromISO(date).toJSDate();

  return (
    <DatePicker
      selected={dateJS}
      onChange={(value: Date) => setDate(DateTime.fromJSDate(value).toISO())}
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      calendarContainer={calendarContainer}
      inline={inline}
      withPortal={withPortal}
    />
  );
}
