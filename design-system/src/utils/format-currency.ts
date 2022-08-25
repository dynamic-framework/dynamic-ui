import Dinero from 'dinero.js';

export default function formatCurrency(
  amount: number,
  language = 'en-US',
  currency: Dinero.Currency = 'USD',
  hasDecimals = true,
  precision = 2,
): string {
  return Dinero({
    currency,
    amount,
    precision,
  })
    .setLocale(language)
    .toFormat(hasDecimals ? '$0,0.00' : '$0,0');
}
