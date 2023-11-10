import { useCallback } from 'react';
import { getMonth, getYear } from 'date-fns';
import classNames from 'classnames';

import type { ComponentProps } from 'react';

import DButton from '../DButton';
import DMonthPicker from '../DMonthPicker';

import type { BaseProps, ButtonVariant, ComponentSize } from '../interface';

type Props =
& BaseProps
& {
  locale?: Locale;
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

export default function DDatePickerHeader(
  {
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
    locale,
    style,
    className,
  }: Props,
) {
  const onChangeDate = useCallback((value: Date | null) => {
    if (value) {
      changeMonth(getMonth(value));
      changeYear(getYear(value));
    }
  }, [changeMonth, changeYear]);

  return (
    <div
      className={classNames(
        'd-flex align-items-center justify-content-between d-datepicker-header',
        className,
      )}
      style={style}
    >
      <DButton
        iconStart={decreaseMonthIcon}
        size={iconSize}
        variant={buttonVariant}
        theme={buttonTheme}
        onClick={decreaseMonth}
        disabled={prevMonthButtonDisabled}
      />
      <DMonthPicker
        {...!withMonthSelector && { readOnly: true }}
        date={monthDate.toISOString()}
        onChangeDate={onChangeDate}
        {...locale && { locale }}
      />
      <DButton
        iconStart={increaseMonthIcon}
        size={iconSize}
        variant={buttonVariant}
        theme={buttonTheme}
        onClick={increaseMonth}
        disabled={nextMonthButtonDisabled}
      />
    </div>
  );
}
