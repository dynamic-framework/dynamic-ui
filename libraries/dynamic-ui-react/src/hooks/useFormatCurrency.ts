import { useCallback } from 'react';

import { useLiquidContext } from '../contexts';
import formatCurrency from '../utils/format-currency';

export default function useFormatCurrency(...args: Array<number>) {
  const { currency } = useLiquidContext();

  const format = useCallback(
    (value: number) => formatCurrency(value, currency),
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
