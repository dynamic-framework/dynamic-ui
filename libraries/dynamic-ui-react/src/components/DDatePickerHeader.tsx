import { DateTime } from 'luxon';
import { ComponentProps } from 'react';
import DButton from './DButton';
import DMonthPicker from './DMonthPicker';
import { useLiquidContext } from '../contexts';
import { ComponentSize } from '../interfaces/component-interface';
import { ButtonVariant } from '../interfaces/DButtonInterface';

type Props = {
  monthDate: Date;
  decreaseMonth: () => void;
  increaseMonth: () => void;
  changeMonth: (monthNumber: number) => void;
  changeYear: (yearNumber: number) => void;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
  withMonthSelector: boolean;
  decreaseMonthIcon: string;
  increaseMonthIcon: string;
  iconSize: ComponentSize;
  buttonVariant: ButtonVariant;
  buttonTheme: string;
} & Omit<ComponentProps<typeof DButton>,
| 'iconStart'
| 'onMClick'
| 'isDisabled'
>;

export default function DDatePickerHeader({
  monthDate,
  changeMonth,
  changeYear,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
  withMonthSelector,
  decreaseMonthIcon,
  increaseMonthIcon,
  iconSize,
  buttonVariant,
  buttonTheme,
}: Props) {
  const { language } = useLiquidContext();
  const lang = language || 'en';

  return (
    <div className="d-flex align-items-center justify-content-between d-datepicker-header">
      <DButton
        iconStart={decreaseMonthIcon}
        size={iconSize}
        variant={buttonVariant}
        theme={buttonTheme}
        onClick={decreaseMonth}
        isDisabled={prevMonthButtonDisabled}
      />
      <DMonthPicker
        {...!withMonthSelector && { readOnly: true }}
        date={monthDate.toISOString()}
        onChangeDate={(value) => {
          if (value) {
            changeMonth(DateTime.fromJSDate(value).month - 1);
            changeYear(DateTime.fromJSDate(value).year);
          }
        }}
        {...lang && { locale: lang }}
      />
      <DButton
        iconStart={increaseMonthIcon}
        size={iconSize}
        variant={buttonVariant}
        theme={buttonTheme}
        onClick={increaseMonth}
        isDisabled={nextMonthButtonDisabled}
      />
    </div>
  );
}
