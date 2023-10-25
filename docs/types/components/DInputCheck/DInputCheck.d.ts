import type { ChangeEvent } from 'react';
import type { BaseProps, InputCheckType } from '../interface';
type Props = BaseProps & {
    type: InputCheckType;
    name?: string;
    label?: string;
    isChecked?: boolean;
    id: string;
    isDisabled?: boolean;
    isIndeterminate?: boolean;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
export default function DInputCheck({ type, name, label, isChecked, id, isDisabled, isIndeterminate, value, onChange, className, style, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
