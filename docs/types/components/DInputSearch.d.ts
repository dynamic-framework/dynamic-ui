import type { ChangeEvent } from 'react';
import type { LabelIcon } from './interface';
type Props = LabelIcon & {
    id: string;
    name?: string;
    label?: string;
    placeholder?: string;
    value?: string;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isLoading?: boolean;
    hint?: string;
    isInvalid?: boolean;
    isValid?: boolean;
    onChange?: (event: ChangeEvent) => void;
    onClick?: (newValue: string | undefined) => void;
};
export default function DInputSearch({ id, name, label, placeholder, value, isDisabled, isReadOnly, isLoading, hint, isInvalid, isValid, onChange, onClick, ...rest }: Props): import("react/jsx-runtime").JSX.Element;
export {};
