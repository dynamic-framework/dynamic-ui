import type { FocusEvent, MouseEvent, ReactNode } from 'react';
import type { BaseProps, ComponentSize, EndIconProps, FamilyIconProps, StartIconProps } from '../interface';
export type DefaultOption = {
    value: string | number;
    label: string;
};
export type Props<T> = BaseProps & FamilyIconProps & StartIconProps & EndIconProps & {
    id?: string;
    name?: string;
    /**
     * The label of the control. Any node is accepted, so it can carry a link, an
     * info trigger or other markup.
     *
     * Text doubles as the control's accessible name. A richer label does not, so
     * pass `ariaLabel` alongside it; a development-only warning says so when it
     * is missing. A rich label also does not fit `floatingLabel`, whose layout
     * animates a single line of text.
     */
    label?: ReactNode;
    /**
     * Accessible name of the control, needed when `label` is not plain text.
     * Without it the name becomes whatever the label subtree computes to, which
     * for a label carrying a link or an icon reads as the wrong name or as none.
     */
    ariaLabel?: string;
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
export default function DInputSelect<T extends object = DefaultOption>({ id: idProp, name, label, ariaLabel, className, style, options, disabled, loading, iconStart, iconStartFamilyClass, iconStartFamilyPrefix, iconStartAriaLabel, iconEnd, iconEndFamilyClass, iconEndFamilyPrefix, iconEndAriaLabel, hint, value, size, floatingLabel, invalid, valid, dataAttributes, valueExtractor, labelExtractor, onChange, onBlur, onIconStartClick, onIconEndClick, }: Props<T>): import("react").JSX.Element;
