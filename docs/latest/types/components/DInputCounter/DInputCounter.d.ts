/// <reference types="react" />
type NonDInputProps = {
    /**
     * Current value of the counter.
     *
     * Passed together with `onChange` the counter is fully controlled: when the
     * parent rejects a change the counter snaps back to this value.
     *
     * Passed on its own it is taken as the starting value and the counter keeps
     * counting by itself — the historical behaviour. Prefer `defaultValue` for
     * that, it says so out loud.
     */
    value?: number;
    /** Starting value for uncontrolled usage; falls back to `minValue`. */
    defaultValue?: number;
    minValue: number;
    maxValue: number;
    onChange?: (value?: number) => void;
};
declare const ForwardedDInputCounter: import("react").ForwardRefExoticComponent<Omit<Omit<Omit<Omit<Omit<Omit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref">, "onChange" | "value">, "label" | "onChange" | "invalid" | "value" | "size" | "floatingLabel" | keyof import("../interface").BaseProps | keyof import("../interface").FamilyIconProps | keyof import("../interface").StartIconProps | keyof import("../interface").EndIconProps | "loading" | "hint" | "valid" | "inputStart" | "inputEnd" | "readonly" | "onIconStartClick" | "onIconEndClick"> & import("../interface").BaseProps & import("../interface").FamilyIconProps & import("../interface").StartIconProps & import("../interface").EndIconProps & {
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
} & import("react").RefAttributes<HTMLInputElement>, "ref">, "onChange" | "value" | "type" | "validIcon" | "invalidIcon">, keyof NonDInputProps> & NonDInputProps & import("react").RefAttributes<HTMLInputElement>>;
export default ForwardedDInputCounter;
