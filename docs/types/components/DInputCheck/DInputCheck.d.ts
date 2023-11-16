import type { ChangeEvent } from 'react';
import type { BaseProps, InputCheckType } from '../interface';
type Props = BaseProps & {
    type: InputCheckType;
    name?: string;
    label?: string;
    ariaLabel?: string;
    checked?: boolean;
    id: string;
    disabled?: boolean;
    indeterminate?: boolean;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
export default function DInputCheck({ type, name, label, ariaLabel, checked, id, disabled, indeterminate, value, onChange, className, style, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
