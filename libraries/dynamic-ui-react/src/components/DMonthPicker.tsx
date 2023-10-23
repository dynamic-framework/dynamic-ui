import { useMemo } from 'react';
import DatePicker from 'react-datepicker';

import type { ReactDatePickerProps } from 'react-datepicker';

import { format, parseISO } from 'date-fns';
import DButton from './DButton';

type Props = Omit<ReactDatePickerProps, 'onChange' | 'selectsRange' | 'locale'> & {
  date: string;
  onChangeDate: (value: Date | null) => void;
  locale?: Locale;
};

export default function DMonthPicker(
  {
    onChangeDate,
    date,
    locale,
    ...props
  }: Props,
) {
  const selected = useMemo(() => parseISO(date), [date]);

  const dateFormatted = useMemo(() => (
    format(new Date(date), 'MMMM yyyy', { locale })
  ), [date, locale]);

  return (
    <DatePicker
      showMonthYearPicker
      selected={selected}
      calendarClassName="d-month-picker"
      onChange={onChangeDate}
      {...locale && { locale }}
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
