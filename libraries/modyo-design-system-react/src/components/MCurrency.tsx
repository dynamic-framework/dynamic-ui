/* eslint-disable react/jsx-props-no-spreading */
import { ComponentProps } from 'react';
import { MCurrencyBase } from './proxies';
import { useLiquidContext } from '../contexts';

type Props = {
  onChange: (value: number | undefined) => void;
} & Omit<ComponentProps<typeof MCurrencyBase>, 'currencyOptions'>;

export default function MCurrencyInput({
  onChange,
  ...otherProps
}: Props) {
  const { currency } = useLiquidContext();

  return (
    <MCurrencyBase
      currencyOptions={currency}
      onMChange={({ detail: { amount } }) => onChange(amount)}
      {...otherProps}
    />
  );
}
