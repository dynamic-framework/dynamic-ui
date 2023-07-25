/* eslint-disable react/jsx-props-no-spreading */
import { ComponentProps } from 'react';
import { MInputCurrencyBase } from './proxies';
import { useLiquidContext } from '../contexts';

type Props = {
  onChange: (value: number) => void;
} & Omit<ComponentProps<typeof MInputCurrencyBase>, 'currencyOptions' | 'onChange' | 'onMChange'>;

export default function MInputCurrency({
  onChange,
  ...otherProps
}: Props) {
  const { currency } = useLiquidContext();

  return (
    <MInputCurrencyBase
      currencyOptions={currency}
      onMChange={({ detail }: CustomEvent<number>) => onChange(detail)}
      {...otherProps}
    />
  );
}
