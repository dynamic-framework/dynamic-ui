import { formatCurrency } from '@modyolabs/design-system';

export default function useFormatCurrency(...args: Array<number | undefined>) {
  const language = 'en-US';
  const currency = 'USD';
  const hasDecimals = true;

  return args.map((value) => (
    formatCurrency(value ?? 0, language, currency, hasDecimals)
  ));
}
