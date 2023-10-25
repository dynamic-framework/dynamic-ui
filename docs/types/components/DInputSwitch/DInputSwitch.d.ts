import type { BaseProps } from '../interface';
type Props = BaseProps & {
    label?: string;
    id: string;
    name?: string;
    isChecked?: boolean;
    isDisabled?: boolean;
    isReadonly?: boolean;
    onChange?: (isChecked: boolean) => void;
};
export default function DInputSwitch({ label, id, name, isChecked, isDisabled, isReadonly, className, style, onChange, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
