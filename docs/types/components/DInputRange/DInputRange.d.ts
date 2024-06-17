/// <reference types="react" />
import type { BaseProps, LabelIconProps } from '../interface';
declare const ForwardedDInputRange: import("react").ForwardRefExoticComponent<Omit<Omit<Omit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref">, "type">, "label" | "ariaLabel" | keyof BaseProps | keyof LabelIconProps | "filledValue"> & BaseProps & LabelIconProps & {
    label?: string | undefined;
    ariaLabel?: string | undefined;
    filledValue?: boolean | undefined;
} & import("react").RefAttributes<HTMLInputElement>>;
export default ForwardedDInputRange;
