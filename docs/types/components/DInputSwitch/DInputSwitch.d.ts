import type { BaseProps } from '../interface';
type Props = BaseProps & {
    id?: string;
    label?: string;
    ariaLabel?: string;
    name?: string;
    checked?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    onChange?: (isChecked: boolean) => void;
};
export default function DInputSwitch({ id: idProp, label, ariaLabel, name, checked, disabled, readonly, className, style, onChange, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
