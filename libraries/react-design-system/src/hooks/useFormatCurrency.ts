import { useCallback } from 'react';
import { formatCurrency } from '@modyolabs/design-system';

import { useLiquidContext } from '../contexts';

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
