import type { FocusEvent, MouseEvent } from 'react';
import type { EndIcon, LabelIcon, StartIcon } from './interface';
export type DefaultOption = {
    value: string | number;
    label: string;
};
export type Props<T> = LabelIcon & StartIcon & EndIcon & {
    id: string;
    name?: string;
    label?: string;
    className?: string;
    isDisabled?: boolean;
    isLoading?: boolean;
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
export default function DInputSelect<T extends object = DefaultOption>({ id, name, label, className, options, labelIcon, labelIconFamilyClass, labelIconFamilyPrefix, isDisabled, isLoading, iconStart, iconStartFamilyClass, iconStartFamilyPrefix, iconEnd, iconEndFamilyClass, iconEndFamilyPrefix, hint, selectedOption, valueExtractor, labelExtractor, onChange, onBlur, onIconStartClick, onIconEndClick, }: Props<T>): import("react/jsx-runtime").JSX.Element;
