import type { BaseProps } from '../interface';
type Props = BaseProps & {
    id?: string;
    name?: string;
    label: string;
    hint: string;
    checked?: boolean;
    disabled?: boolean;
    onClick?: (isChecked: boolean | undefined) => void;
};
/**
 * @deprecated
 */
export default function DQuickActionSwitch({ id: idProp, name, label, hint, checked, disabled, className, style, dataAttributes, onClick, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
