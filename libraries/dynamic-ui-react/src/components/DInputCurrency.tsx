import { ComponentProps } from 'react';
import DInputCurrencyBase from './DInputCurrencyBase';
import { useLiquidContext } from '../contexts';

type Props = {
  onChange: (value: number | undefined) => void;
  onBlur?: (value: number | undefined) => void;
  onFocus?: (value: number | undefined) => void;
} & Omit<ComponentProps<typeof DInputCurrencyBase>, 'currencyOptions' | 'onChange'>;

export default function DInputCurrency({
  onChange,
  onBlur,
  onFocus,
  ...otherProps
}: Props) {
  const { currency } = useLiquidContext();

  return (
    <DInputCurrencyBase
      currencyOptions={currency}
      onChange={(value) => onChange(value)}
      {...onBlur && {
        onBlur: (value) => onBlur(value),
      }}
      {...onFocus && {
        onFocus: (value) => onFocus(value),
      }}
      {...otherProps}
    />
  );
}
