/* eslint-disable react/jsx-props-no-spreading */
import { DateTime } from 'luxon';
import { MButton } from './proxies';
import MMonthPicker from './MMonthPicker';

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
      <MMonthPicker
        {...!withMonthSelector && { readOnly: true }}
        date={monthDate.toISOString()}
        setDate={(value) => {
          if (value) {
            changeMonth(DateTime.fromJSDate(value).month - 1);
            changeYear(DateTime.fromJSDate(value).year);
          }
        }}
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
