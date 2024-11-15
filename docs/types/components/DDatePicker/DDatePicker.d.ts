import type { Locale } from 'date-fns';
import type { ReactDatePickerProps } from 'react-datepicker';
import type { BaseProps, ButtonVariant, ComponentSize, FamilyIconProps } from '../interface';
type Props<CustomModifierNames extends string = never, WithRange extends boolean | undefined = undefined> = BaseProps & FamilyIconProps & Pick<ReactDatePickerProps<CustomModifierNames, WithRange>, 'formatWeekDay' | 'onChange' | 'autoFocus' | 'inline' | 'withPortal' | 'minDate' | 'showTimeInput' | 'calendarStartDay' | 'dateFormat' | 'selectsStart' | 'selectsEnd' | 'startDate' | 'endDate' | 'fixedHeight' | 'renderCustomHeader'> & {
    date?: string | null;
    selectsRange?: boolean;
    inputLabel?: string;
    inputHint?: string;
    inputAriaLabel?: string;
    inputActionAriaLabel?: string;
    iconInput?: string;
    inputId?: string;
    timeId?: string;
    timeLabel?: string;
    iconHeaderPrevMonth?: string;
    iconHeaderNextMonth?: string;
    iconHeaderSize?: ComponentSize;
    headerPrevMonthAriaLabel?: string;
    headerNextMonthAriaLabel?: string;
    headerButtonVariant?: ButtonVariant;
    headerButtonTheme?: string;
    locale?: Locale;
    minYearSelect?: number;
    maxYearSelect?: number;
    invalid?: boolean;
    valid?: boolean;
    placeholder?: string;
};
/**
 * @deprecated
 */
export default function DDatePicker<CustomModifierNames extends string = never, WithRange extends boolean | undefined = undefined>({ date, selectsRange, inputLabel, inputHint, inputAriaLabel, inputActionAriaLabel, inputId, timeId, timeLabel, iconInput: iconInputProp, iconHeaderPrevMonth: iconHeaderPrevMonthProp, iconHeaderNextMonth: iconHeaderNextMonthProp, iconMaterialStyle: iconMaterialStyleProp, iconFamilyClass, iconFamilyPrefix, minYearSelect, maxYearSelect, iconHeaderSize, headerPrevMonthAriaLabel, headerNextMonthAriaLabel, headerButtonVariant, headerButtonTheme, invalid, valid, renderCustomHeader: renderCustomHeaderProp, locale, className, formatWeekDay: formatWeekDayProp, style, dataAttributes, placeholder, ...props }: Props<CustomModifierNames, WithRange>): import("react/jsx-runtime").JSX.Element;
export {};