import { ReactDatePickerProps } from 'react-datepicker';
declare type CalendarProps = Omit<ReactDatePickerProps, 'onChange' | 'selectsRange'> & {
    date: string;
    onEventChangeDate: (value: Date | null) => void;
};
export default function DMonthPicker({ onEventChangeDate, date, ...props }: CalendarProps): import("react/jsx-runtime").JSX.Element;
export {};
