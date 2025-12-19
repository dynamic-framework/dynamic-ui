import type { FocusEvent, MouseEvent } from 'react';
import type { BaseProps, ComponentSize, EndIconProps, FamilyIconProps, LabelIconProps, StartIconProps } from '../interface';
export type DefaultOption = {
    value: string | number;
    label: string;
};
export type Props<T> = BaseProps & FamilyIconProps & LabelIconProps & StartIconProps & EndIconProps & {
    id?: string;
    name?: string;
    label?: string;
    disabled?: boolean;
    loading?: boolean;
    invalid?: boolean;
    valid?: boolean;
    hint?: string;
    floatingLabel?: boolean;
    onBlur?: (event: FocusEvent) => void;
    onIconStartClick?: (event: MouseEvent) => void;
    onIconEndClick?: (event: MouseEvent) => void;
    options: Array<T>;
    value?: string | number;
    size?: ComponentSize;
    onChange?: (selectedOption: T) => void;
    valueExtractor?: (item: T) => string | number;
    labelExtractor?: (item: T) => string;
};
export default function DInputSelect<T extends object = DefaultOption>({ id: idProp, name, label, className, style, options, labelIcon, labelIconFamilyClass, labelIconFamilyPrefix, disabled, loading, iconStart, iconStartFamilyClass, iconStartFamilyPrefix, iconStartAriaLabel, iconEnd, iconEndFamilyClass, iconEndFamilyPrefix, iconEndAriaLabel, hint, value, size, floatingLabel, invalid, valid, dataAttributes, valueExtractor, labelExtractor, onChange, onBlur, onIconStartClick, onIconEndClick, }: Props<T>): import("react/jsx-runtime").JSX.Element;
