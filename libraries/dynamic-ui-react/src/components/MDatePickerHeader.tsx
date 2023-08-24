/* eslint-disable react/jsx-props-no-spreading */
import { DateTime } from 'luxon';
import { ComponentProps } from 'react';
import { ButtonVariant, ComponentSize } from '@dynamic-framework/ui';
import { MButton } from './proxies';
import MMonthPicker from './MMonthPicker';
import { useLiquidContext } from '../contexts';

export type MDatePickerHeaderProps = {
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
} & Omit<ComponentProps<typeof MButton>,
| 'iconStart'
| 'onMClick'
| 'isDisabled'
>;

export default function MDatePickerHeader({
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
}: MDatePickerHeaderProps) {
  const { language } = useLiquidContext();
  const lang = language || 'en';

  return (
    <div className="d-flex align-items-center justify-content-between m-datepicker-header">
      <MButton
        iconStart={decreaseMonthIcon}
        size={iconSize}
        variant={buttonVariant}
        theme={buttonTheme}
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
        {...lang && { locale: lang }}
      />
      <MButton
        iconStart={increaseMonthIcon}
        size={iconSize}
        variant={buttonVariant}
        theme={buttonTheme}
        onMClick={increaseMonth}
        isDisabled={nextMonthButtonDisabled}
      />
    </div>
  );
}
