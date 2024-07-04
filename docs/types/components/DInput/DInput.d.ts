import type { ReactNode } from 'react';
import type { BaseProps, ComponentSize, EndIconProps, FamilyIconProps, LabelIconProps, StartIconProps, StateIcons } from '../interface';
declare const ForwardedDInput: import("react").ForwardRefExoticComponent<Omit<Omit<Omit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref">, "value" | "onChange">, "value" | "loading" | "label" | "invalid" | "size" | "onChange" | keyof BaseProps | keyof FamilyIconProps | keyof LabelIconProps | keyof StartIconProps | keyof EndIconProps | keyof StateIcons | "hint" | "valid" | "floatingLabel" | "inputStart" | "inputEnd" | "onIconStartClick" | "onIconEndClick"> & BaseProps & FamilyIconProps & LabelIconProps & StartIconProps & EndIconProps & StateIcons & {
    value?: string | undefined;
    label?: string | undefined;
    loading?: boolean | undefined;
    hint?: string | undefined;
    size?: ComponentSize | undefined;
    invalid?: boolean | undefined;
    valid?: boolean | undefined;
    floatingLabel?: boolean | undefined;
    inputStart?: ReactNode;
    inputEnd?: ReactNode;
    onChange?: ((value: string) => void) | undefined;
    onIconStartClick?: ((value?: string) => void) | undefined;
    onIconEndClick?: ((value?: string) => void) | undefined;
} & import("react").RefAttributes<HTMLInputElement>>;
export default ForwardedDInput;
