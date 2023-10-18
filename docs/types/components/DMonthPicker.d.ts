import type { ReactDatePickerProps } from 'react-datepicker';
type Props = Omit<ReactDatePickerProps, 'onChange' | 'selectsRange'> & {
    date: string;
    onChangeDate: (value: Date | null) => void;
};
export default function DMonthPicker({ onChangeDate, date, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
