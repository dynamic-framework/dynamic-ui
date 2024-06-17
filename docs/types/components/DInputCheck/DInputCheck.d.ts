import type { ChangeEvent } from 'react';
import type { BaseProps, InputCheckType } from '../interface';
type Props = BaseProps & {
    id?: string;
    type: InputCheckType;
    name?: string;
    label?: string;
    ariaLabel?: string;
    checked?: boolean;
    disabled?: boolean;
    indeterminate?: boolean;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
export default function DInputCheck({ id: idProp, type, name, label, ariaLabel, checked, disabled, indeterminate, value, onChange, className, style, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
