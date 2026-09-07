/// <reference types="react" />
import type { BaseProps } from '../interface';
type Props = BaseProps & {
    id?: string;
    label?: string;
    ariaLabel?: string;
    name?: string;
    checked?: boolean;
    disabled?: boolean;
    inputClassName?: string;
    invalid?: boolean;
    valid?: boolean;
    hint?: string;
    readonly?: boolean;
    onChange?: (isChecked: boolean) => void;
};
export default function DInputSwitch({ id: idProp, label, ariaLabel, name, checked, disabled, invalid, valid, hint, readonly, className, style, dataAttributes, inputClassName, onChange, }: Props): import("react").JSX.Element;
export {};
