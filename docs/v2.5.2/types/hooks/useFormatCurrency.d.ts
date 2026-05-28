import { CurrencyProps } from '../contexts';
export default function useFormatCurrency(...args: Array<number>): {
    format: (value: number, currencyOptions?: CurrencyProps) => string;
    values: string[];
};
