export type CurrencyEvent = {
  amount: number | undefined,
  currency: string | undefined
};

export type CurrencyVariant = 'prime';

export type SelectProps = {
  value: string,
  label: string,
};
