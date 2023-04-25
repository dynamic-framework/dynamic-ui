/* eslint-disable react/jsx-props-no-spreading */
import { CurrencyVariant, liquidParser } from '@modyo-dynamic/modyo-design-system';
import { MCurrency } from './proxies';

type Props = {
  id: string;
  label: string;
  labelIcon?: string;
  placeholder?: string;
  value?: number;
  minValue?: number;
  maxValue?: number;
  theme?: string;
  variant?: CurrencyVariant;
  onChange?: (value: any) => void;
};

export default function MCurrencyInput({
  id,
  label,
  labelIcon,
  placeholder,
  value,
  minValue,
  maxValue,
  theme,
  variant,
  onChange,
}: Props) {
  const currencyOptions = {
    symbol: liquidParser.parse('{{currency-symbol}}'),
    precision: Number(liquidParser.parse('{{currency-precision}}')),
    separator: liquidParser.parse('{{currency-separator}}'),
    decimal: liquidParser.parse('{{currency-decimal}}'),
  };

  return (
    <MCurrency
      mId={id}
      label={label}
      currencyOptions={currencyOptions}
      {...labelIcon && { labelIcon }}
      {...placeholder && { placeholder }}
      {...value && { value }}
      {...minValue && { minValue }}
      {...maxValue && { maxValue }}
      {...theme && { theme }}
      {...variant && { variant }}
    />
  );
}
