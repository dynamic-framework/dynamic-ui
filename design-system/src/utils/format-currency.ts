import Dinero from 'dinero.js';

export default function formatCurrency(
  amount: number,
  language = 'en-US',
  currency: Dinero.Currency = 'USD',
  hasDecimals = true,
) {
  return Dinero({
    currency,
    amount,
    precision: 2,
  })
    .setLocale(language)
    .toFormat(hasDecimals ? '$0,0.00' : '$0,0');
}
