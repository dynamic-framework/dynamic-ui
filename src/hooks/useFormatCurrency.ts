import { formatCurrency } from '@modyolabs/design-system';
import { useCallback } from 'react';

export default function useFormatCurrency(...args: Array<number>) {
  const language = 'en-US';
  const currency = 'USD';
  const hasDecimals = true;

  const format = useCallback(
    (value: number) => formatCurrency(value, language, currency, hasDecimals),
    [language, currency, hasDecimals],
  );

  const values = (args || []).map((value) => (
    formatCurrency(value ?? 0, language, currency, hasDecimals)
  ));

  return {
    format,
    values,
  };
}
