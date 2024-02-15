import type { ReactDatePickerProps } from 'react-datepicker';
import type { BaseProps, FamilyIconProps } from '../interface';
type Props<CustomModifierNames extends string = never, WithRange extends boolean | undefined = undefined> = BaseProps & FamilyIconProps & Omit<ReactDatePickerProps<CustomModifierNames, WithRange>, 'selectsRange' | 'locale'> & {
    date: string;
    locale?: Locale;
    headerPrevYearAriaLabel?: string;
    headerNextYearAriaLabel?: string;
    iconPrevMonth?: string;
    iconNextMonth?: string;
};
export default function DMonthPicker<CustomModifierNames extends string = never, WithRange extends boolean | undefined = undefined>({ onChange, date, locale, className, calendarClassName, headerPrevYearAriaLabel, headerNextYearAriaLabel, iconFamilyClass, iconFamilyPrefix, iconPrevMonth: iconPrevMonthProp, iconNextMonth: iconNextMonthProp, ...props }: Props<CustomModifierNames, WithRange>): import("react/jsx-runtime").JSX.Element;
export {};
