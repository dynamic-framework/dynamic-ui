import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import { DateTime } from 'luxon';

import { useLiquidContext } from '../contexts';
import DButton from './DButton';

type CalendarProps = Omit<ReactDatePickerProps, 'onChange' | 'selectsRange' > & {
  date: string;
  onChangeDate: (value: Date | null) => void;
};

export default function DMonthPicker(
  {
    onChangeDate,
    date,
    ...props
  }: CalendarProps,
) {
  const dateJS = (value: string) => DateTime.fromISO(value).toJSDate();
  const { language } = useLiquidContext();
  const lang = language || 'en';
  return (
    <DatePicker
      showMonthYearPicker
      selected={dateJS(date)}
      calendarClassName="d-month-picker"
      onChange={(value) => {
        onChangeDate(value);
      }}
      customInput={(
        <p className="fw-bold text-capitalize">
          {DateTime.fromISO(date).setLocale(lang).toFormat('MMMM yyyy')}
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
          <DButton
            iconStart="chevron-left"
            size="sm"
            variant="link"
            theme="light"
            onClick={decreaseYear}
            isDisabled={prevYearButtonDisabled}
          />
          <p className="fs-6 fw-bold">
            { monthDate.getFullYear() }
          </p>
          <DButton
            iconStart="chevron-right"
            size="sm"
            variant="link"
            theme="light"
            onClick={increaseYear}
            isDisabled={nextYearButtonDisabled}
          />
        </div>
      )}
      {...props}
    />
  );
}
