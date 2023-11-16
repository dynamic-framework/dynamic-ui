import type { BaseProps } from '../interface';
type Props = BaseProps & {
    label?: string;
    ariaLabel?: string;
    id: string;
    name?: string;
    checked?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    onChange?: (isChecked: boolean) => void;
};
export default function DInputSwitch({ label, ariaLabel, id, name, checked, disabled, readonly, className, style, onChange, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
