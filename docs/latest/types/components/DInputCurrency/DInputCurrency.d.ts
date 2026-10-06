/// <reference types="react" />
type NonDInputProps = {
    value?: number;
    minValue?: number;
    maxValue?: number;
    /**
     * When `true` (default) a value outside `minValue`/`maxValue` is brought
     * into range on mount, when it changes and on blur, and `onChange` receives
     * the clamped number. When `false` the entered value is kept and the input
     * is marked invalid while it is out of range, unless `invalid` is set.
     */
    clamp?: boolean;
    currencyCode?: string;
    onChange?: (value?: number) => void;
};
declare const ForwardedDInputCurrency: import("react").ForwardRefExoticComponent<Omit<Omit<Omit<Omit<Omit<Omit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref">, "onChange" | "value">, "label" | "onChange" | "invalid" | "value" | "size" | "floatingLabel" | keyof import("../interface").BaseProps | keyof import("../interface").FamilyIconProps | keyof import("../interface").StartIconProps | keyof import("../interface").EndIconProps | "loading" | "hint" | "valid" | "inputStart" | "inputEnd" | "readonly" | "onIconStartClick" | "onIconEndClick"> & import("../interface").BaseProps & import("../interface").FamilyIconProps & import("../interface").StartIconProps & import("../interface").EndIconProps & {
    value?: string | undefined;
    label?: import("react").ReactNode;
    loading?: boolean | undefined;
    hint?: string | undefined;
    size?: import("../interface").ComponentSize | undefined;
    invalid?: boolean | undefined;
    valid?: boolean | undefined;
    floatingLabel?: boolean | undefined;
    inputStart?: import("react").ReactNode;
    inputEnd?: import("react").ReactNode;
    readonly?: boolean | undefined;
    onChange?: ((value: string) => void) | undefined;
    onIconStartClick?: ((value?: string | undefined) => void) | undefined;
    onIconEndClick?: ((value?: string | undefined) => void) | undefined;
} & import("react").RefAttributes<HTMLInputElement>, "ref">, "onChange" | "value" | "type">, keyof NonDInputProps> & NonDInputProps & import("react").RefAttributes<HTMLInputElement>>;
export default ForwardedDInputCurrency;
