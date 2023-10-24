import { useCallback } from 'react';

import { useDContext } from '../contexts';
import formatCurrency from '../utils/format-currency';

export default function useFormatCurrency(...args: Array<number>) {
  const { currency } = useDContext();

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
