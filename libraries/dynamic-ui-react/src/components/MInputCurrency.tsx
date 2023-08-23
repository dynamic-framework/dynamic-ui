/* eslint-disable react/jsx-props-no-spreading */
import { ComponentProps } from 'react';
import { MInputCurrencyBase } from './proxies';
import { useLiquidContext } from '../contexts';

type Props = {
  onChange: (value: number) => void;
  onBlur?: (value: number) => void;
  onFocus?: (value: number) => void;
} & Omit<ComponentProps<typeof MInputCurrencyBase>, 'currencyOptions' | 'onChange' | 'onMChange'>;

export default function MInputCurrency({
  onChange,
  onBlur,
  onFocus,
  ...otherProps
}: Props) {
  const { currency } = useLiquidContext();

  return (
    <MInputCurrencyBase
      currencyOptions={currency}
      onMChange={({ detail }: CustomEvent<number>) => onChange(detail)}
      {...onBlur && {
        onMBlur: ({ detail }: CustomEvent<number>) => onBlur(detail),
      }}
      {...onFocus && {
        onMFocus: ({ detail }: CustomEvent<number>) => onFocus(detail),
      }}
      {...otherProps}
    />
  );
}
