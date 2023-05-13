/* eslint-disable react/jsx-props-no-spreading */
import { ComponentProps } from 'react';
import { CurrencyEvent, MCurrencyBaseCustomEvent } from '@modyo-dynamic/modyo-design-system';
import { MCurrencyBase } from './proxies';
import { useLiquidContext } from '../contexts';

type Props = {
  onChange: (value: CurrencyEvent) => void;
} & Omit<ComponentProps<typeof MCurrencyBase>, 'currencyOptions' | 'onChange' | 'onMChange'>;

export default function MCurrencyInput({
  onChange,
  ...otherProps
}: Props) {
  const { currency } = useLiquidContext();

  return (
    <MCurrencyBase
      currencyOptions={currency}
      onMChange={({ detail }: MCurrencyBaseCustomEvent<CurrencyEvent>) => onChange(detail)}
      {...otherProps}
    />
  );
}
