import { format, getMonth, getYear } from 'date-fns';
import classNames from 'classnames';

import type { ComponentProps } from 'react';

import DButton from '../DButton';
import DSelect from '../DSelect';

import type {
  BaseProps,
  ButtonVariant,
  ComponentSize,
  FamilyIconProps,
} from '../interface';

type Props =
& BaseProps
& FamilyIconProps
& {
  locale?: Locale;
  date: Date;
  decreaseMonth: () => void;
  increaseMonth: () => void;
  changeMonth: (monthNumber: number) => void;
  changeYear: (yearNumber: number) => void;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
  iconPrevMonth: string;
  iconNextMonth: string;
  prevMonthAriaLabel?: string;
  nextMonthAriaLabel?: string;
  iconSize: ComponentSize;
  buttonVariant: ButtonVariant;
  buttonTheme: string;
} & Omit<ComponentProps<typeof DButton>,
| 'iconStart'
| 'onClick'
| 'disabled'
>;

export default function DDatePickerHeader(
  {
    date,
    changeYear,
    changeMonth,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
    iconPrevMonth,
    iconNextMonth,
    iconFamilyClass,
    iconFamilyPrefix,
    iconMaterialStyle,
    prevMonthAriaLabel = 'decrease month',
    nextMonthAriaLabel = 'increase month',
    iconSize,
    buttonVariant,
    buttonTheme,
    locale,
    style,
    className,
  }: Props,
) {
  const arrayYears = Array.from({ length: 51 }, (_, index) => 1990 + index);
  const years = arrayYears.map((year) => ({ label: year.toString(), value: year }));
  const defaultYear = years.find((year) => year.value === getYear(date));

  const arrayMonths = Array.from({ length: 12 }, (_, i) => format(new Date(2000, i), 'LLLL', { locale }));
  const months = arrayMonths.map((month, i) => ({ label: month, value: i }));
  const defaultMonth = {
    label: arrayMonths[getMonth(date)],
    value: getMonth(date),
  };

  return (
    <div
      className={classNames(
        'd-flex align-items-center d-datepicker-header',
        className,
      )}
      style={style}
    >
      <DButton
        iconStart={iconPrevMonth}
        iconStartFamilyClass={iconFamilyClass}
        iconStartFamilyPrefix={iconFamilyPrefix}
        iconStartMaterialStyle={iconMaterialStyle}
        size={iconSize}
        variant={buttonVariant}
        theme={buttonTheme}
        onClick={decreaseMonth}
        disabled={prevMonthButtonDisabled}
        ariaLabel={prevMonthAriaLabel}
      />
      <div className="d-flex justify-content-center flex-grow-1">
        <DSelect
          className="month-select"
          options={months}
          value={defaultMonth}
          defaultValue={defaultMonth}
          onChange={(month) => changeMonth(month?.value || 0)}
          searchable={false}
        />
        <DSelect
          className="year-select"
          options={years}
          value={defaultYear}
          defaultValue={defaultYear}
          onChange={(year) => changeYear(Number(year?.value))}
          searchable={false}
        />
      </div>
      <DButton
        iconStart={iconNextMonth}
        iconStartFamilyClass={iconFamilyClass}
        iconStartFamilyPrefix={iconFamilyPrefix}
        iconStartMaterialStyle={iconMaterialStyle}
        size={iconSize}
        variant={buttonVariant}
        theme={buttonTheme}
        onClick={increaseMonth}
        disabled={nextMonthButtonDisabled}
        ariaLabel={nextMonthAriaLabel}
      />
    </div>
  );
}
