/// <reference types="react" />
type NonDInputProps = {
    value?: number;
    minValue: number;
    maxValue: number;
    onChange?: (value?: number) => void;
};
declare const ForwardedDInputCounter: import("react").ForwardRefExoticComponent<Omit<Omit<Omit<Omit<Omit<Omit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref">, "value" | "onChange">, "value" | "loading" | "label" | "invalid" | "size" | "onChange" | keyof import("../interface").BaseProps | keyof import("../interface").FamilyIconProps | keyof import("../interface").LabelIconProps | keyof import("../interface").StartIconProps | keyof import("../interface").EndIconProps | "hint" | "valid" | "floatingLabel" | "inputStart" | "inputEnd" | "onIconStartClick" | "onIconEndClick"> & import("../interface").BaseProps & import("../interface").FamilyIconProps & import("../interface").LabelIconProps & import("../interface").StartIconProps & import("../interface").EndIconProps & {
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
    onChange?: ((value: string) => void) | undefined;
    onIconStartClick?: ((value?: string | undefined) => void) | undefined;
    onIconEndClick?: ((value?: string | undefined) => void) | undefined;
} & import("react").RefAttributes<HTMLInputElement>, "ref">, "type" | "value" | "onChange" | "validIcon" | "invalidIcon">, keyof NonDInputProps> & NonDInputProps & import("react").RefAttributes<HTMLInputElement>>;
export default ForwardedDInputCounter;
