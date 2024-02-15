import { useCallback, useMemo } from 'react';
import DatePicker from 'react-datepicker';
import { parseISO } from 'date-fns';

import type { Locale } from 'date-fns';

import type {
  ReactDatePickerCustomHeaderProps,
  ReactDatePickerProps,
} from 'react-datepicker';

import DDatePickerTime from '../DDatePickerTime';
import DDatePickerInput from '../DDatePickerInput';
import DDatePickerHeader from '../DDatePickerHeader';

import type {
  BaseProps,
  ButtonVariant,
  ComponentSize,
  FamilyIconProps,
} from '../interface';
import { useDContext } from '../../contexts';

type Props<
  CustomModifierNames extends string = never,
  WithRange extends boolean | undefined = undefined,
> =
& BaseProps
& FamilyIconProps
& Omit<ReactDatePickerProps<CustomModifierNames, WithRange>, 'selected' | 'selectsRange' | 'locale'>
& {
  date?: string | null;
  withMonthSelector?: boolean;
  selectsRange?: boolean;
  inputLabel?: string;
  inputAriaLabel?: string;
  inputActionAriaLabel?: string;
  iconInput?: string;
  inputId?: string;
  timeId?: string;
  timeLabel?: string;
  iconHeaderPrevMonth?: string;
  iconHeaderNextMonth?: string;
  headerPrevMonthAriaLabel?: string;
  headerNextMonthAriaLabel?: string;
  headerIconSize?: ComponentSize;
  headerButtonVariant?: ButtonVariant;
  headerButtonTheme?: string;
  locale?: Locale;
};

export default function DDatePicker<
  CustomModifierNames extends string = never,
  WithRange extends boolean | undefined = undefined,
>(
  {
    date,
    selectsRange = false,
    withMonthSelector,
    inputLabel,
    inputAriaLabel,
    inputActionAriaLabel = 'open calendar',
    inputId = 'input-calendar',
    timeId = 'input-time',
    timeLabel,
    iconInput: propIconInput,
    iconHeaderPrevMonth: propIconHeaderPrevMonth,
    iconHeaderNextMonth: propIconHeaderNextMonth,
    iconMaterialStyle: propIconMaterialStyle,
    iconFamilyClass,
    iconFamilyPrefix,
    headerPrevMonthAriaLabel = 'decrease month',
    headerNextMonthAriaLabel = 'increase month',
    headerIconSize = 'sm',
    headerButtonVariant = 'link',
    headerButtonTheme = 'dark',
    locale,
    className,
    style,
    ...props
  }: Props<CustomModifierNames, WithRange>,
) {
  const {
    iconMap: {
      calendar,
      chevronLeft,
      chevronRight,
    },
  } = useDContext();
  const selected = useMemo(() => (date ? parseISO(date) : null), [date]);
  const iconInput = useMemo(() => propIconInput || calendar, [calendar, propIconInput]);
  const iconPrevMonth = useMemo(
    () => propIconHeaderPrevMonth || chevronLeft,
    [chevronLeft, propIconHeaderPrevMonth],
  );
  const iconNextMonth = useMemo(
    () => propIconHeaderNextMonth || chevronRight,
    [chevronRight, propIconHeaderNextMonth],
  );

  const DatePickerHeader = useCallback((headerProps: ReactDatePickerCustomHeaderProps) => (
    <DDatePickerHeader
      {...headerProps}
      {...locale && { locale }}
      iconPrevMonth={iconPrevMonth}
      iconNextMonth={iconNextMonth}
      iconMaterialStyle={propIconMaterialStyle}
      prevMonthAriaLabel={headerPrevMonthAriaLabel}
      nextMonthAriaLabel={headerNextMonthAriaLabel}
      iconSize={headerIconSize}
      buttonVariant={headerButtonVariant}
      buttonTheme={headerButtonTheme}
      withMonthSelector={!!withMonthSelector}
    />
  ), [
    headerButtonTheme,
    headerButtonVariant,
    headerPrevMonthAriaLabel,
    headerIconSize,
    headerNextMonthAriaLabel,
    withMonthSelector,
    locale,
    iconPrevMonth,
    iconNextMonth,
    propIconMaterialStyle,
  ]);

  return (
    <DatePicker<string, boolean>
      selected={selected}
      calendarClassName="d-date-picker"
      renderCustomHeader={(headerProps) => <DatePickerHeader {...headerProps} />}
      customInput={(
        <DDatePickerInput
          id={inputId}
          aria-label={inputAriaLabel}
          iconEndAriaLabel={inputActionAriaLabel}
          iconMaterialStyle={propIconMaterialStyle}
          iconEnd={iconInput}
          className={className}
          style={style}
        />
      )}
      customTimeInput={<DDatePickerTime id={timeId} label={timeLabel} />}
      selectsRange={selectsRange}
      {...locale && { locale }}
      {...props}
    />
  );
}
