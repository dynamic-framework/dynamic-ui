import { ReactDatePickerProps } from 'react-datepicker';
declare type CalendarProps = Omit<ReactDatePickerProps, 'onChange' | 'selectsRange'> & {
    date: string;
    setDate: (value: Date | null) => void;
};
export default function MMonthPicker({ setDate, date, ...props }: CalendarProps): import("react/jsx-runtime").JSX.Element;
export {};
