import { useCallback } from 'react';
import { formatCurrency } from '@modyolabs/design-system';

import { useLiquidContext } from '../contexts';

export default function useFormatCurrency(...args: Array<number>) {
  const {
    language,
    currency,
    currencyWithDecimals,
  } = useLiquidContext();

  const format = useCallback(
    (value: number) => formatCurrency(value, language, currency, currencyWithDecimals),
    [language, currency, currencyWithDecimals],
  );

  const values = (args || []).map((value) => (
    formatCurrency(value ?? 0, language, currency, currencyWithDecimals)
  ));

  return {
    format,
    values,
  };
}
