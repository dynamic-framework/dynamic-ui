import { ComponentProps } from 'react';
import { ButtonVariant, ComponentSize } from '@dynamic-framework/ui';
import { MButton } from './proxies';
export declare type MDatePickerHeaderProps = {
    monthDate: Date;
    decreaseMonth: () => void;
    increaseMonth: () => void;
    changeMonth: (monthNumber: number) => void;
    changeYear: (yearNumber: number) => void;
    prevMonthButtonDisabled: boolean;
    nextMonthButtonDisabled: boolean;
    withMonthSelector: boolean;
    decreaseMonthIcon: string;
    increaseMonthIcon: string;
    iconSize: ComponentSize;
    buttonVariant: ButtonVariant;
    buttonTheme: string;
} & Omit<ComponentProps<typeof MButton>, 'iconStart' | 'onMClick' | 'isDisabled'>;
export default function MDatePickerHeader({ monthDate, changeMonth, changeYear, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled, withMonthSelector, decreaseMonthIcon, increaseMonthIcon, iconSize, buttonVariant, buttonTheme, }: MDatePickerHeaderProps): import("react/jsx-runtime").JSX.Element;
