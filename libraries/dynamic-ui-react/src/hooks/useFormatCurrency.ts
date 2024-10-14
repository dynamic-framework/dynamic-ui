import { useCallback } from 'react';

import { CurrencyProps, useDContext } from '../contexts';
import formatCurrency from '../utils/formatCurrency';

export default function useFormatCurrency(...args: Array<number>) {
  const { currency } = useDContext();

  const format = useCallback(
    (
      value: number,
      currencyOptions?: CurrencyProps,
    ) => formatCurrency(value, currencyOptions || currency),
    [currency],
  );

  const values = (args || []).map((value) => (
    formatCurrency(value ?? 0, currency)
  ));

  return {
    format,
    values,
  };
}
