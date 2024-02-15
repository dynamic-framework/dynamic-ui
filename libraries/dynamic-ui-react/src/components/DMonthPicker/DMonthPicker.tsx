import { useMemo } from 'react';
import DatePicker from 'react-datepicker';
import { format, parseISO } from 'date-fns';

import type { ReactDatePickerProps } from 'react-datepicker';

import classNames from 'classnames';
import DButton from '../DButton';

import type { BaseProps, FamilyIconProps } from '../interface';
import { useDContext } from '../../contexts';

type Props<
  CustomModifierNames extends string = never,
  WithRange extends boolean | undefined = undefined,
> = BaseProps
& FamilyIconProps
& Omit<ReactDatePickerProps<CustomModifierNames, WithRange>, 'selectsRange' | 'locale'> & {
  date: string;
  locale?: Locale;
  headerPrevYearAriaLabel?: string;
  headerNextYearAriaLabel?: string;
  iconPrevMonth?: string;
  iconNextMonth?: string;
};

export default function DMonthPicker<
  CustomModifierNames extends string = never,
  WithRange extends boolean | undefined = undefined,
>(
  {
    onChange,
    date,
    locale,
    className,
    calendarClassName,
    headerPrevYearAriaLabel = 'decrease year',
    headerNextYearAriaLabel = 'increase year',
    iconFamilyClass,
    iconFamilyPrefix,
    iconPrevMonth: propIconPrevMonth,
    iconNextMonth: propIconNextMonth,
    ...props
  }: Props<CustomModifierNames, WithRange>,
) {
  const selected = useMemo(() => parseISO(date), [date]);
  const {
    iconMap: {
      chevronLeft,
      chevronRight,
    },
  } = useDContext();
  const iconPrevMonth = useMemo(
    () => propIconPrevMonth || chevronLeft,
    [chevronLeft, propIconPrevMonth],
  );
  const iconNextMonth = useMemo(
    () => propIconNextMonth || chevronRight,
    [chevronRight, propIconNextMonth],
  );

  const dateFormatted = useMemo(() => (
    format(new Date(date), 'MMMM yyyy', { locale })
  ), [date, locale]);

  return (
    <DatePicker<CustomModifierNames, WithRange>
      showMonthYearPicker
      selected={selected}
      className={className}
      calendarClassName={classNames('d-month-picker', calendarClassName)}
      onChange={onChange}
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
            iconStart={iconPrevMonth}
            size="sm"
            variant="link"
            theme="light"
            onClick={decreaseYear}
            disabled={prevYearButtonDisabled}
            ariaLabel={headerPrevYearAriaLabel}
            iconStartFamilyClass={iconFamilyClass}
            iconStartFamilyPrefix={iconFamilyPrefix}
          />
          <p className="fs-6 fw-bold">
            {monthDate.getFullYear()}
          </p>
          <DButton
            iconStart={iconNextMonth}
            size="sm"
            variant="link"
            theme="light"
            onClick={increaseYear}
            disabled={nextYearButtonDisabled}
            ariaLabel={headerNextYearAriaLabel}
            iconEndFamilyClass={iconFamilyPrefix}
            iconEndFamilyPrefix={iconFamilyPrefix}
          />
        </div>
      )}
      {...props}
    />
  );
}
