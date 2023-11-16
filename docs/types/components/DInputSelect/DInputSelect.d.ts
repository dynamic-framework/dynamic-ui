import type { FocusEvent, MouseEvent } from 'react';
import type { BaseProps, EndIconProps, LabelIconProps, StartIconProps } from '../interface';
export type DefaultOption = {
    value: string | number;
    label: string;
};
export type Props<T> = BaseProps & LabelIconProps & StartIconProps & EndIconProps & {
    id: string;
    name?: string;
    label?: string;
    disabled?: boolean;
    loading?: boolean;
    hint?: string;
    onBlur?: (event: FocusEvent) => void;
    onIconStartClick?: (event: MouseEvent) => void;
    onIconEndClick?: (event: MouseEvent) => void;
    options: Array<T>;
    selectedOption?: T;
    onChange?: (selectedItem: T | undefined) => void;
    valueExtractor?: (item: T) => string | number;
    labelExtractor?: (item: T) => string;
};
export default function DInputSelect<T extends object = DefaultOption>({ id, name, label, className, style, options, labelIcon, labelIconFamilyClass, labelIconFamilyPrefix, disabled, loading, iconStart, iconStartFamilyClass, iconStartFamilyPrefix, iconStartAriaLabel, iconEnd, iconEndFamilyClass, iconEndFamilyPrefix, iconEndAriaLabel, hint, selectedOption, valueExtractor, labelExtractor, onChange, onBlur, onIconStartClick, onIconEndClick, }: Props<T>): import("react/jsx-runtime").JSX.Element;
