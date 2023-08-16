/* eslint-disable react/jsx-props-no-spreading */
import DatePicker, { ReactDatePickerProps, registerLocale } from 'react-datepicker';
import { DateTime } from 'luxon';

import { createElement } from 'react';

import es from 'date-fns/locale/es';
import { useLiquidContext } from '../contexts';

import MDatePickerTime from './MDatePickerTime';
import MDatePickerInput from './MDatePickerInput';
import MDatePickerHeader from './MDatePickerHeader';

registerLocale('es', es);

type CalendarProps = Omit<ReactDatePickerProps, 'onChange' | 'selectsRange'> & {
  date: string;
  setDate: (value: Date | [Date | null, Date | null] | null) => void;
  selectsRange: boolean;
  withMonthSelector: boolean;
};

export default function MDatePicker({
  setDate,
  date,
  selectsRange,
  withMonthSelector,
  ...props
}: CalendarProps) {
  const dateJS = (value: string) => DateTime.fromISO(value).toJSDate();
  const { language } = useLiquidContext();
  const lang = language === 'en' ? undefined : 'es';

  return (
    <DatePicker
      selected={dateJS(date)}
      calendarClassName="m-date-picker"
      onChange={(value) => {
        setDate(value);
      }}
      renderCustomHeader={(data) => createElement(MDatePickerHeader, {
        ...data,
        withMonthSelector,
      })}
      customInput={createElement(MDatePickerInput)}
      customTimeInput={createElement(MDatePickerTime)}
      selectsRange={selectsRange}
      {...lang && { locale: lang }}
      {...props}
    />
  );
}
