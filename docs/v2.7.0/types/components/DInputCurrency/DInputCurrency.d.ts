/// <reference types="react" />
type NonDInputProps = {
    value?: number;
    minValue?: number;
    maxValue?: number;
    currencyCode?: string;
    onChange?: (value?: number) => void;
};
declare const ForwardedDInputCurrency: import("react").ForwardRefExoticComponent<Omit<Omit<Omit<Omit<Omit<Omit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref">, "value" | "onChange">, "label" | "invalid" | "value" | "onChange" | "size" | keyof import("../interface").BaseProps | keyof import("../interface").FamilyIconProps | keyof import("../interface").StartIconProps | keyof import("../interface").EndIconProps | "loading" | "hint" | "valid" | "floatingLabel" | "inputStart" | "inputEnd" | "readonly" | "onIconStartClick" | "onIconEndClick"> & import("../interface").BaseProps & import("../interface").FamilyIconProps & import("../interface").StartIconProps & import("../interface").EndIconProps & {
    value?: string | undefined;
    label?: string | undefined;
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
} & import("react").RefAttributes<HTMLInputElement>, "ref">, "value" | "onChange" | "type">, keyof NonDInputProps> & NonDInputProps & import("react").RefAttributes<HTMLInputElement>>;
export default ForwardedDInputCurrency;
