import React from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export declare interface CalendarProps {
  date: Date,
  setDate: Function,
  calendarContainer?: React.FC
}

export const MCalendar = ({setDate, date, calendarContainer }: CalendarProps) => {
  return (
    <DatePicker
      selected={date}
      onChange={(date:Date) => setDate(date)}
      calendarContainer={calendarContainer}
    />
  );
}
