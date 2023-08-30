import { ComponentProps } from 'react';
import { DInputCurrencyBase } from './proxies';
declare type Props = {
    onEventChange: (value: number) => void;
    onEventBlur?: (value: number) => void;
    onEventFocus?: (value: number) => void;
} & Omit<ComponentProps<typeof DInputCurrencyBase>, 'currencyOptions' | 'onChange' | 'onEventChange'>;
export default function DInputCurrency({ onEventChange, onEventBlur, onEventFocus, ...otherProps }: Props): import("react/jsx-runtime").JSX.Element;
export {};
