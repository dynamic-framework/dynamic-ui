import type { ChangeEvent, ComponentPropsWithoutRef } from 'react';
import type { BaseProps, InputCheckType } from '../interface';
type Props = ComponentPropsWithoutRef<'input'> & BaseProps & {
    id?: string;
    type: InputCheckType;
    name?: string;
    label?: string;
    ariaLabel?: string;
    checked?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    valid?: boolean;
    indeterminate?: boolean;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
export default function DInputCheck({ id: idProp, type, name, label, ariaLabel, checked, disabled, invalid, valid, indeterminate, value, onChange, className, style, dataAttributes, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
