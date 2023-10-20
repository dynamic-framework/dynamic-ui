import { useMemo } from 'react';
import DatePicker from 'react-datepicker';
import { DateTime } from 'luxon';

import type { ReactDatePickerProps } from 'react-datepicker';

import DButton from './DButton';
import { useDContext } from '../contexts';

type Props = Omit<ReactDatePickerProps, 'onChange' | 'selectsRange' > & {
  date: string;
  onChangeDate: (value: Date | null) => void;
};

export default function DMonthPicker(
  {
    onChangeDate,
    date,
    ...props
  }: Props,
) {
  const { language } = useDContext();
  const selected = useMemo(() => DateTime.fromISO(date).toJSDate(), [date]);
  const locale = useMemo(() => language || 'en', [language]);
  const dateFormatted = useMemo(() => (
    DateTime.fromISO(date).setLocale(locale).toFormat('MMMM yyyy')
  ), [date, locale]);
  return (
    <DatePicker
      showMonthYearPicker
      selected={selected}
      calendarClassName="d-month-picker"
      onChange={onChangeDate}
      customInput={(
        <p className="fw-bold text-capitalize">
          {dateFormatted}
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
            {monthDate.getFullYear()}
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
