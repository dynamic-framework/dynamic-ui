import { DateTime } from 'luxon';
import { MButton } from './proxies';

type Props = {
  monthDate: Date;
  decreaseMonth: () => void;
  increaseMonth: () => void;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
};

export default function MDatePickerHeader({
  monthDate,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
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
      <p className="fw-bold">
        {`${DateTime.fromJSDate(monthDate).monthLong} ${DateTime.fromJSDate(monthDate).year}`}
      </p>
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
