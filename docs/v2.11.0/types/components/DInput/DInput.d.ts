import type { ReactNode } from 'react';
import type { BaseProps, ComponentSize, EndIconProps, FamilyIconProps, StartIconProps } from '../interface';
declare const ForwardedDInput: import("react").ForwardRefExoticComponent<Omit<Omit<Omit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref">, "onChange" | "value">, "label" | "onChange" | "invalid" | "value" | "size" | "floatingLabel" | keyof BaseProps | keyof FamilyIconProps | keyof StartIconProps | keyof EndIconProps | "loading" | "hint" | "valid" | "inputStart" | "inputEnd" | "readonly" | "onIconStartClick" | "onIconEndClick"> & BaseProps & FamilyIconProps & StartIconProps & EndIconProps & {
    value?: string | undefined;
    /**
     * The label of the control. Any node is accepted, so it can carry a link, an
     * info trigger or other markup — the terms-and-conditions pattern.
     *
     * Text doubles as the control's accessible name. A richer label does not, so
     * pass `aria-label` alongside it; a development-only warning says so when it
     * is missing. A rich label also does not fit `floatingLabel`, whose layout
     * animates a single line of text.
     */
    label?: ReactNode;
    loading?: boolean | undefined;
    hint?: string | undefined;
    size?: ComponentSize | undefined;
    invalid?: boolean | undefined;
    valid?: boolean | undefined;
    floatingLabel?: boolean | undefined;
    inputStart?: ReactNode;
    inputEnd?: ReactNode;
    readonly?: boolean | undefined;
    onChange?: ((value: string) => void) | undefined;
    onIconStartClick?: ((value?: string) => void) | undefined;
    onIconEndClick?: ((value?: string) => void) | undefined;
} & import("react").RefAttributes<HTMLInputElement>>;
export default ForwardedDInput;
