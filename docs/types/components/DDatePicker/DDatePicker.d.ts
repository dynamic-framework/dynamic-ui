import type { Locale } from 'date-fns';
import type { ReactDatePickerProps } from 'react-datepicker';
import type { BaseProps, ButtonVariant, ComponentSize } from '../interface';
type Props = BaseProps & Omit<ReactDatePickerProps, 'selected' | 'selectsRange' | 'locale'> & {
    date?: string | null;
    withMonthSelector?: boolean;
    selectsRange?: boolean;
    inputLabel?: string;
    inputIcon?: string;
    inputId?: string;
    timeId?: string;
    timeLabel?: string;
    headerDecreaseMonthIcon?: string;
    headerIncreaseMonthIcon?: string;
    headerIconSize?: ComponentSize;
    headerButtonVariant?: ButtonVariant;
    headerButtonTheme?: string;
    locale?: Locale;
};
export default function DDatePicker({ date, selectsRange, withMonthSelector, inputLabel, inputIcon, inputId, timeId, timeLabel, headerDecreaseMonthIcon, headerIncreaseMonthIcon, headerIconSize, headerButtonVariant, headerButtonTheme, locale, className, style, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
