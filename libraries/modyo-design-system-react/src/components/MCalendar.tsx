import React from 'react';
import DatePicker, { ReactDatePickerProps, registerLocale } from 'react-datepicker';
import { DateTime } from 'luxon';
import { liquidParser } from '@modyo-dynamic/modyo-design-system';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';

registerLocale('es', es);

export declare interface CalendarProps {
  date: string;
  setDate: (date: string | [string | null, string | null] | null) => void;
  calendarContainer?: React.FC;
  inline?: boolean;
  withPortal?: boolean;
  minDate?: string;
  showTimeInput?: boolean;
  calendarStartDay?: number;
  timeInputLabel?: string;
  className?: string;
  calendarClassName?: ReactDatePickerProps['calendarClassName'],
  dateFormat?: string | string[];
  selectsRange?: boolean;
  selectsStart?: boolean;
  selectsEnd?: boolean;
  startDate?: Date | null;
  endDate?: Date | null;
  autoFocus?: boolean;
  fixedHeight?: boolean;
  monthsShown?: number;
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
  calendarClassName,
  selectsRange,
  selectsStart,
  selectsEnd,
  startDate,
  endDate,
  autoFocus,
  monthsShown,
  fixedHeight,
}: CalendarProps) {
  const dateJS = (value: string) => DateTime.fromISO(value).toJSDate();

  const LANG = liquidParser.parse('{{site.language}}') === 'en' ? undefined : 'es';

  return (
    <DatePicker
      selected={dateJS(date)}
      onChange={(value) => {
        if (Array.isArray(value)) {
          const [start, end] = value as [Date | null, Date | null];
          setDate([
            start ? DateTime.fromJSDate(start).toISO() : null,
            end ? DateTime.fromJSDate(end).toISO() : null,
          ]);
        } else {
          setDate(value ? DateTime.fromJSDate(value).toISO() : null);
        }
      }}
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
      calendarClassName={calendarClassName}
      selectsRange={selectsRange}
      selectsEnd={selectsEnd}
      selectsStart={selectsStart}
      startDate={startDate}
      endDate={endDate}
      autoFocus={autoFocus}
      monthsShown={monthsShown}
      fixedHeight={fixedHeight}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...LANG && { locale: LANG }}
    />
  );
}
