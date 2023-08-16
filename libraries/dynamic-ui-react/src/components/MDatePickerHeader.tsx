/* eslint-disable react/jsx-props-no-spreading */
import { DateTime } from 'luxon';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import { MButton } from './proxies';

type Props = {
  monthDate: Date;
  decreaseMonth: () => void;
  increaseMonth: () => void;
  changeMonth: (monthNumber: number) => void;
  changeYear: (yearNumber: number) => void;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
  withMonthSelector: boolean;
};

export default function MDatePickerHeader({
  monthDate,
  changeMonth,
  changeYear,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
  withMonthSelector,
}: Props) {
  // Review - Inner state month to set selected
  const [selectedInnerDate, setSelectedInnerDate] = useState(new Date());

  return (
    <div className="d-flex align-items-center justify-content-center gap-4 fs-6">
      <MButton
        iconStart="chevron-left"
        size="sm"
        variant="link"
        theme="dark"
        onMClick={decreaseMonth}
        isDisabled={prevMonthButtonDisabled}
      />
      <DatePicker
        {...!withMonthSelector && { readOnly: true }}
        selected={selectedInnerDate}
        showMonthYearPicker
        calendarClassName="m-month-picker"
        onChange={(value) => {
          if (value) {
            changeMonth(value.getMonth());
            changeYear(value.getFullYear());
            setSelectedInnerDate(value);
          }
        }}
        customInput={(
          <p className="fw-bold">
            {`${DateTime.fromJSDate(monthDate).monthLong} ${DateTime.fromJSDate(monthDate).year}`}
          </p>
        )}
      />
      <MButton
        iconStart="chevron-right"
        size="sm"
        variant="link"
        theme="dark"
        onMClick={increaseMonth}
        isDisabled={nextMonthButtonDisabled}
      />
    </div>
  );
}
