import type { BaseProps } from '../interface';
type Props = BaseProps & {
    id?: string;
    label?: string;
    ariaLabel?: string;
    name?: string;
    checked?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    valid?: boolean;
    readonly?: boolean;
    onChange?: (isChecked: boolean) => void;
};
export default function DInputSwitch({ id: idProp, label, ariaLabel, name, checked, disabled, invalid, valid, readonly, className, style, dataAttributes, onChange, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
