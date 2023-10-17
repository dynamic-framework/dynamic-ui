import type { ComponentProps } from 'react';

import DInputCurrencyBase from './DInputCurrencyBase';
import { useLiquidContext } from '../contexts';

type Props = Omit<ComponentProps<typeof DInputCurrencyBase>, 'currencyOptions'>;

export default function DInputCurrency(
  props: Props,
) {
  const { currency } = useLiquidContext();
  return (
    <DInputCurrencyBase
      currencyOptions={currency}
      {...props}
    />
  );
}
