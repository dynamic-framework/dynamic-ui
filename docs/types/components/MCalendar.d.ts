import { ReactDatePickerProps } from 'react-datepicker';
import type { FC } from 'react';
export declare interface CalendarProps {
    date: string;
    setDate: (date: string | [string | null, string | null] | null) => void;
    calendarContainer?: FC;
    inline?: boolean;
    withPortal?: boolean;
    minDate?: string;
    showTimeInput?: boolean;
    calendarStartDay?: number;
    timeInputLabel?: string;
    className?: string;
    calendarClassName?: ReactDatePickerProps['calendarClassName'];
    dateFormat?: string | string[];
    selectsRange?: boolean;
    selectsStart?: boolean;
    selectsEnd?: boolean;
    startDate?: Date | null;
    endDate?: Date | null;
    autoFocus?: boolean;
    fixedHeight?: boolean;
    monthsShown?: number;
}
export default function MCalendar({ setDate, date, calendarContainer, inline, withPortal, minDate, showTimeInput, calendarStartDay, timeInputLabel, dateFormat, className, calendarClassName, selectsRange, selectsStart, selectsEnd, startDate, endDate, autoFocus, monthsShown, fixedHeight, }: CalendarProps): import("react/jsx-runtime").JSX.Element;
