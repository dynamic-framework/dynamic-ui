import type { Options } from 'currency.js';
import type { EndIcon, LabelIcon, StartIcon } from './interface';
type Props = LabelIcon & StartIcon & EndIcon & {
    id: string;
    name?: string;
    label: string;
    placeholder?: string;
    value?: number;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isLoading?: boolean;
    hint?: string;
    isInvalid?: boolean;
    isValid?: boolean;
    minValue?: number;
    maxValue?: number;
    currencyOptions: Options;
    currencyCode?: string;
    onChange?: (value?: number) => void;
    onBlur?: (value?: number) => void;
    onFocus?: (value?: number) => void;
};
export default function DInputCurrencyBase({ id, name, label, placeholder, value, isDisabled, isReadOnly, isLoading, hint, isInvalid, isValid, minValue, maxValue, currencyOptions, currencyCode, onChange, onBlur, onFocus, ...rest }: Props): import("react/jsx-runtime").JSX.Element;
export {};
