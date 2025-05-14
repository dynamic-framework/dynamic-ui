import type { ComponentProps } from 'react';
import type { ReactDatePickerCustomHeaderProps } from 'react-datepicker';
import DButton from '../../DButton';
import type { BaseProps, ButtonVariant, ComponentSize, FamilyIconProps } from '../../interface';
export declare enum PickerType {
    Default = "default",
    Quarter = "quarter",
    Month = "month",
    Year = "year"
}
type Props = BaseProps & FamilyIconProps & ReactDatePickerCustomHeaderProps & {
    changeMonth: (monthNumber: number) => void;
    changeYear: (yearNumber: number) => void;
    decreaseMonth: () => void;
    increaseMonth: () => void;
    decreaseYear: () => void;
    increaseYear: () => void;
    pickerType?: PickerType;
    prevMonthButtonDisabled: boolean;
    nextMonthButtonDisabled: boolean;
    prevYearButtonDisabled: boolean;
    nextYearButtonDisabled: boolean;
    iconPrev?: string;
    iconNext?: string;
    prevMonthAriaLabel?: string;
    nextMonthAriaLabel?: string;
    prevYearAriaLabel?: string;
    nextYearAriaLabel?: string;
    iconSize?: ComponentSize;
    buttonVariant?: ButtonVariant;
    buttonTheme?: string;
    minYearSelect?: number;
    maxYearSelect?: number;
    showHeaderSelectors?: boolean;
    monthsShown?: number;
} & Omit<ComponentProps<typeof DButton>, 'iconStart' | 'onClick' | 'disabled'>;
export default function DDatePickerHeaderSelector({ date, changeYear, changeMonth, decreaseMonth, increaseMonth, decreaseYear, increaseYear, monthDate, pickerType, prevMonthButtonDisabled, nextMonthButtonDisabled, monthsShown, iconPrev, iconNext, prevYearButtonDisabled, nextYearButtonDisabled, iconFamilyClass, iconFamilyPrefix, iconMaterialStyle, prevMonthAriaLabel, nextMonthAriaLabel, prevYearAriaLabel, nextYearAriaLabel, iconSize, buttonVariant, buttonTheme, style, className, minYearSelect, maxYearSelect, showHeaderSelectors, customHeaderCount, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
