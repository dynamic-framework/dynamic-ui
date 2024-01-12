import type { ReactDatePickerProps } from 'react-datepicker';
import type { BaseProps } from '../interface';
type Props = BaseProps & Omit<ReactDatePickerProps, 'onChange' | 'selectsRange' | 'locale'> & {
    date: string;
    onChangeDate: (value: Date | null) => void;
    locale?: Locale;
    headerPrevYearAriaLabel?: string;
    headerNextYearAriaLabel?: string;
};
export default function DMonthPicker({ onChangeDate, date, locale, className, calendarClassName, headerPrevYearAriaLabel, headerNextYearAriaLabel, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
