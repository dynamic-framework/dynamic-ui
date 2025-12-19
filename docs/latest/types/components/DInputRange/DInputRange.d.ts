/// <reference types="react" />
import type { BaseProps } from '../interface';
declare const ForwardedDInputRange: import("react").ForwardRefExoticComponent<Omit<Omit<Omit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref">, "type">, "label" | keyof BaseProps | "ariaLabel" | "filledValue"> & BaseProps & {
    label?: string | undefined;
    ariaLabel?: string | undefined;
    filledValue?: boolean | undefined;
} & import("react").RefAttributes<HTMLInputElement>>;
export default ForwardedDInputRange;
