/* eslint-disable react/jsx-props-no-spreading */
import DatePicker, { ReactDatePickerProps, registerLocale } from 'react-datepicker';
import { DateTime } from 'luxon';

import es from 'date-fns/locale/es';
import enUS from 'date-fns/locale/en-US';

import { format } from 'date-fns';
import { useLiquidContext } from '../contexts';
import { MButton } from './proxies';

registerLocale('es', es);
registerLocale('en', enUS);

type CalendarProps = Omit<ReactDatePickerProps, 'onChange' | 'selectsRange' > & {
  date: string;
  setDate: (value: Date | null) => void;
};

export default function MMonthPicker({
  setDate,
  date,
  ...props
}: CalendarProps) {
  const dateJS = (value: string) => DateTime.fromISO(value).toJSDate();
  const { language } = useLiquidContext();
  const lang = language === 'en' ? enUS : es;

  return (
    <DatePicker
      showMonthYearPicker
      selected={dateJS(date)}
      calendarClassName="m-month-picker"
      onChange={(value) => {
        setDate(value);
      }}
      customInput={(
        <p className="fw-bold text-capitalize">
          {`${format(new Date(date), 'MMMM', { locale: lang })} ${DateTime.fromISO(date).year}`}
        </p>
      )}
      renderCustomHeader={({
        monthDate,
        decreaseYear,
        increaseYear,
        prevYearButtonDisabled,
        nextYearButtonDisabled,
      }) => (
        <div className="d-flex align-items-center justify-content-between gap-4 fs-6 bg-dark">
          <MButton
            iconStart="chevron-left"
            size="sm"
            variant="link"
            theme="light"
            onMClick={decreaseYear}
            isDisabled={prevYearButtonDisabled}
          />
          <p className="fs-6 fw-bold">
            { monthDate.getFullYear() }
          </p>
          <MButton
            iconStart="chevron-right"
            size="sm"
            variant="link"
            theme="light"
            onMClick={increaseYear}
            isDisabled={nextYearButtonDisabled}
          />
        </div>
      )}
      {...props}
    />
  );
}
