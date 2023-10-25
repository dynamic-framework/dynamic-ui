import type { ReactNode } from 'react';
import type { BaseProps, EndIconProps, FamilyIconProps, LabelIconProps, StartIconProps } from '../interface';
declare const ForwardedDInput: import("react").ForwardRefExoticComponent<Omit<Omit<Omit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref">, "value" | "onChange">, "value" | "loading" | "label" | "invalid" | "onChange" | keyof BaseProps | keyof FamilyIconProps | keyof LabelIconProps | keyof StartIconProps | keyof EndIconProps | "hint" | "valid" | "inputStart" | "onIconStartClick" | "onIconEndClick"> & BaseProps & FamilyIconProps & LabelIconProps & StartIconProps & EndIconProps & {
    value?: string | undefined;
    label?: string | undefined;
    loading?: boolean | undefined;
    hint?: string | undefined;
    invalid?: boolean | undefined;
    valid?: boolean | undefined;
    inputStart?: ReactNode;
    onChange?: ((value?: string) => void) | undefined;
    onIconStartClick?: ((value?: string) => void) | undefined;
    onIconEndClick?: ((value?: string) => void) | undefined;
} & import("react").RefAttributes<HTMLInputElement>>;
export default ForwardedDInput;
