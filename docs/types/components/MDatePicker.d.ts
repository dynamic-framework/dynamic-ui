import { ReactDatePickerProps } from 'react-datepicker';
import { ButtonVariant, ComponentSize } from '@dynamic-framework/ui';
declare type CalendarProps = Omit<ReactDatePickerProps, 'onChange' | 'selectsRange'> & {
    date: string;
    setDate: (value: Date | [Date | null, Date | null] | null) => void;
    selectsRange?: boolean;
    withMonthSelector?: boolean;
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
};
export default function MDatePicker({ setDate, date, selectsRange, withMonthSelector, inputLabel, inputIcon, inputId, timeId, timeLabel, headerDecreaseMonthIcon, headerIncreaseMonthIcon, headerIconSize, headerButtonVariant, headerButtonTheme, ...props }: CalendarProps): import("react/jsx-runtime").JSX.Element;
export {};