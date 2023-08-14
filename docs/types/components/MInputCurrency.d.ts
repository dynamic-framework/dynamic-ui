import { ComponentProps } from 'react';
import { MInputCurrencyBase } from './proxies';
declare type Props = {
    onChange: (value: number) => void;
    onBlur: (value: number) => void;
    onFocus: (value: number) => void;
} & Omit<ComponentProps<typeof MInputCurrencyBase>, 'currencyOptions' | 'onChange' | 'onMChange'>;
export default function MInputCurrency({ onChange, onBlur, onFocus, ...otherProps }: Props): import("react/jsx-runtime").JSX.Element;
export {};
