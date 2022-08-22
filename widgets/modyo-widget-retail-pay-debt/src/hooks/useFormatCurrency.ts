import { formatCurrency } from '@modyolabs/design-system';

export default function useFormatCurrency(...args: Array<number | undefined>) {
  const language = 'en-US';
  const currency = 'USD';
  const hasDecimals = true;

  function format(value: number) {
    return formatCurrency(value, language, currency, hasDecimals);
  }

  let values: Array<string> = [];
  if (args.length > 0) {
    values = args.map((value) => (
      formatCurrency(value ?? 0, language, currency, hasDecimals)
    ));
  }

  return {
    format,
    values,
  };
}
