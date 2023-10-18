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
    onChange?: (value: string) => void;
};
export default function DInputPassword({ id, name, label, placeholder, value, isDisabled, isReadOnly, isLoading, hint, isInvalid, isValid, onChange, ...rest }: Props): import("react/jsx-runtime").JSX.Element;
export {};
