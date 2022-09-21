import currency from 'currency.js';
import type { Options } from 'currency.js';

export default function formatCurrency(
  amount: number,
  options: Options,
): string {
  return currency(amount, options).format();
}
