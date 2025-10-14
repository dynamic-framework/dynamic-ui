import { useCallback, useMemo } from 'react';
import classNames from 'classnames';
import {
  format,
  getMonth,
  getYear,
  Locale,
} from 'date-fns';
import type { ComponentProps } from 'react';
import type { ReactDatePickerCustomHeaderProps } from 'react-datepicker';

import DButton from '../../DButton';
import DSelect from '../../DSelect';
import type {
  BaseProps,
  ButtonVariant,
  ComponentColor,
  ComponentSize,
  FamilyIconProps,
} from '../../interface';
import { useDContext } from '../../../contexts';

export enum PickerType {
  Default = 'default',
  Quarter = 'quarter',
  Month = 'month',
  Year = 'year',
}

type Props =
& BaseProps
& FamilyIconProps
& ReactDatePickerCustomHeaderProps
& {
  changeMonth: (monthNumber: number) => void;
  changeYear: (yearNumber: number) => void;
  decreaseMonth: () => void;
  increaseMonth: () => void;
  decreaseYear: () => void;
  increaseYear: () => void;
  pickerType?: PickerType;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
  prevYearButtonDisabled: boolean;
  nextYearButtonDisabled: boolean;
  iconPrev?: string;
  iconNext?: string;
  prevMonthAriaLabel?: string;
  nextMonthAriaLabel?: string;
  prevYearAriaLabel?: string;
  nextYearAriaLabel?: string;
  iconSize?: ComponentSize;
  buttonVariant?: ButtonVariant;
  buttonColor?: ComponentColor;
  minYearSelect?: number;
  maxYearSelect?: number;
  showHeaderSelectors?: boolean;
  monthsShown?: number;
  locale?: Locale;
} & Omit<ComponentProps<typeof DButton>,
| 'iconStart'
| 'onClick'
| 'disabled'
>;

export default function DDatePickerHeaderSelector(
  {
    date,
    changeYear,
    changeMonth,
    decreaseMonth,
    increaseMonth,
    decreaseYear,
    increaseYear,
    monthDate,
    pickerType,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
    monthsShown = 1,
    iconPrev,
    iconNext,
    prevYearButtonDisabled,
    nextYearButtonDisabled,
    iconFamilyClass,
    iconFamilyPrefix,
    iconMaterialStyle = false,
    prevMonthAriaLabel = 'decrease month',
    nextMonthAriaLabel = 'increase month',
    prevYearAriaLabel = 'decrease year',
    nextYearAriaLabel = 'increase year',
    iconSize,
    buttonVariant = 'link',
    buttonColor = 'dark',
    style,
    className,
    minYearSelect = 1900,
    maxYearSelect = 2100,
    showHeaderSelectors = false,
    customHeaderCount,
    locale,
  }: Props,
) {
  const {
    iconMap: {
      chevronLeft,
      chevronRight,
    },
  } = useDContext();

  const arrayYears = useMemo(() => Array.from(
    { length: maxYearSelect - minYearSelect + 1 },
    (_, index) => minYearSelect + index,
  ), [maxYearSelect, minYearSelect]);

  const years = useMemo(() => arrayYears.map((year) => ({
    label: year.toString(),
    value: year,
  })), [arrayYears]);

  const defaultYear = useMemo(
    () => years.find((year) => year.value === getYear(monthDate)),
    [monthDate, years],
  );

  const arrayMonths = useMemo(() => Array.from(
    { length: 12 },
    (_, i) => format(new Date(2000, i), 'LLLL', { locale }),
  ), [locale]);

  const months = useMemo(() => arrayMonths.map((month, i) => ({
    label: month,
    value: i,
  })), [arrayMonths]);

  const defaultMonth = useMemo(() => ({
    label: arrayMonths[getMonth(monthDate)],
    value: getMonth(monthDate),
  }), [arrayMonths, monthDate]);

  const getYearRange = useCallback(() => {
    const blockIndex = Math.floor((date.getFullYear() - 1) / 12);
    const startYear = blockIndex * 12 + 1;
    const endYear = startYear + 11;
    return [startYear, endYear];
  }, [date]);

  const [startYear, endYear] = getYearRange();

  if (pickerType === PickerType.Year) {
    return (
      <div
        className={classNames(
          'react-datepicker__header-selector react-datepicker__header-year-selector',
          className,
        )}
        style={style}
      >
        <DButton
          iconStart={iconPrev || chevronLeft}
          iconStartFamilyClass={iconFamilyClass}
          iconStartFamilyPrefix={iconFamilyPrefix}
          iconStartMaterialStyle={iconMaterialStyle}
          size={iconSize}
          variant={buttonVariant}
          color={buttonColor}
          onClick={decreaseYear}
          disabled={prevYearButtonDisabled}
          ariaLabel={prevYearAriaLabel}
          className="header-button"
        />
        <p>{`${startYear} - ${endYear}`}</p>
        <DButton
          iconStart={iconNext || chevronRight}
          iconStartFamilyClass={iconFamilyClass}
          iconStartFamilyPrefix={iconFamilyPrefix}
          iconStartMaterialStyle={iconMaterialStyle}
          size={iconSize}
          variant={buttonVariant}
          color={buttonColor}
          onClick={increaseYear}
          disabled={nextYearButtonDisabled}
          ariaLabel={nextYearAriaLabel}
          className="header-button"
        />
      </div>
    );
  }

  if (pickerType === PickerType.Quarter || pickerType === PickerType.Month) {
    return (
      <div
        className={classNames(
          `react-datepicker__header-selector react-datepicker__header-${pickerType}-selector`,
          className,
        )}
        style={style}
      >
        <DButton
          iconStart={iconPrev || chevronLeft}
          iconStartFamilyClass={iconFamilyClass}
          iconStartFamilyPrefix={iconFamilyPrefix}
          iconStartMaterialStyle={iconMaterialStyle}
          size={iconSize}
          variant={buttonVariant}
          color={buttonColor}
          onClick={decreaseYear}
          disabled={prevMonthButtonDisabled}
          ariaLabel={prevMonthAriaLabel}
          className="header-button"
          style={{ visibility: customHeaderCount === 0 ? 'visible' : 'hidden' }}
        />
        <div className="d-flex justify-content-center flex-grow-1">
          {showHeaderSelectors ? (
            <DSelect
              options={years}
              value={defaultYear}
              defaultValue={defaultYear}
              onChange={(year) => changeYear(Number(year?.value))}
              searchable={false}
            />
          ) : (
            <p>{defaultYear?.label}</p>
          )}
        </div>
        <DButton
          iconStart={iconNext || chevronRight}
          iconStartFamilyClass={iconFamilyClass}
          iconStartFamilyPrefix={iconFamilyPrefix}
          iconStartMaterialStyle={iconMaterialStyle}
          size={iconSize}
          variant={buttonVariant}
          color={buttonColor}
          onClick={increaseYear}
          disabled={nextMonthButtonDisabled}
          ariaLabel={nextMonthAriaLabel}
          className="header-button"
          style={{ visibility: customHeaderCount === monthsShown - 1 ? 'visible' : 'hidden' }}
        />
      </div>
    );
  }

  return (
    <div
      className={classNames(
        'react-datepicker__header-selector react-datepicker__header-day-selector',
        className,
      )}
      style={style}
    >
      <DButton
        iconStart={iconPrev || chevronLeft}
        iconStartFamilyClass={iconFamilyClass}
        iconStartFamilyPrefix={iconFamilyPrefix}
        iconStartMaterialStyle={iconMaterialStyle}
        size={iconSize}
        variant={buttonVariant}
        color={buttonColor}
        onClick={decreaseMonth}
        disabled={prevMonthButtonDisabled}
        ariaLabel={prevMonthAriaLabel}
        className="header-button"
        style={{ visibility: customHeaderCount === 0 ? 'visible' : 'hidden' }}
      />
      {showHeaderSelectors ? (
        <>
          <DSelect
            options={months}
            value={defaultMonth}
            defaultValue={defaultMonth}
            onChange={(month) => changeMonth(month?.value || 0)}
            searchable={false}
            className="custom-month-selector"
          />
          <DSelect
            options={years}
            value={defaultYear}
            defaultValue={defaultYear}
            onChange={(year) => changeYear(Number(year?.value))}
            searchable={false}
            className="custom-year-selector"
          />
        </>
      ) : (
        <p>{`${defaultMonth.label} ${defaultYear?.label}`}</p>
      )}
      <DButton
        iconStart={iconNext || chevronRight}
        iconStartFamilyClass={iconFamilyClass}
        iconStartFamilyPrefix={iconFamilyPrefix}
        iconStartMaterialStyle={iconMaterialStyle}
        size={iconSize}
        variant={buttonVariant}
        color={buttonColor}
        onClick={increaseMonth}
        disabled={nextMonthButtonDisabled}
        ariaLabel={nextMonthAriaLabel}
        className="header-button"
        style={{ visibility: customHeaderCount === monthsShown - 1 ? 'visible' : 'hidden' }}
      />
    </div>
  );
}
