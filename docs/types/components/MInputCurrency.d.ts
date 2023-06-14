import { ComponentProps } from 'react';
import { MInputCurrencyBase } from './proxies';
declare type Props = {
    onChange: (value: number) => void;
} & Omit<ComponentProps<typeof MInputCurrencyBase>, 'currencyOptions' | 'onChange' | 'onMChange'>;
export default function MInputCurrency({ onChange, ...otherProps }: Props): JSX.Element;
export {};
