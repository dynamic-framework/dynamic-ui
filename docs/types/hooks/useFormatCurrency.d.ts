export default function useFormatCurrency(...args: Array<number>): {
    format: (value: number) => string;
    values: string[];
};
