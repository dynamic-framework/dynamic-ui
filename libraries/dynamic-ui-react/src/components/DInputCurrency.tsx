/* eslint-disable react/jsx-props-no-spreading */
import { ComponentProps } from 'react';
import { DInputCurrencyBase } from './proxies';
import { useLiquidContext } from '../contexts';

type Props = {
  onEventChange: (value: number) => void;
  onEventBlur?: (value: number) => void;
  onEventFocus?: (value: number) => void;
} & Omit<ComponentProps<typeof DInputCurrencyBase>, 'currencyOptions' | 'onChange' | 'onEventChange'>;

export default function DInputCurrency({
  onEventChange,
  onEventBlur,
  onEventFocus,
  ...otherProps
}: Props) {
  const { currency } = useLiquidContext();

  return (
    <DInputCurrencyBase
      currencyOptions={currency}
      onEventChange={({ detail }: CustomEvent<number>) => onEventChange(detail)}
      {...onEventBlur && {
        onEventBlur: ({ detail }: CustomEvent<number>) => onEventBlur(detail),
      }}
      {...onEventFocus && {
        onEventFocus: ({ detail }: CustomEvent<number>) => onEventFocus(detail),
      }}
      {...otherProps}
    />
  );
}
