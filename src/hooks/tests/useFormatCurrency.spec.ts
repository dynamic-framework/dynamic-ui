import { renderHook } from '@testing-library/react';
import { CurrencyProps, useDContext } from '../../contexts';
import useFormatCurrency from '../useFormatCurrency';

jest.mock('../../contexts', () => ({
  useDContext: jest.fn(),
}));

describe('useFormatCurrency', () => {
  const mockCurrency: CurrencyProps = {
    symbol: '$',
    precision: 2,
    separator: ',',
    decimal: '.',
  };

  beforeEach(() => {
    (useDContext as jest.Mock).mockReturnValue({ currency: mockCurrency });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return formatted values for provided arguments', () => {
    const { result } = renderHook(() => useFormatCurrency(10, 20, 30, 1000));
    expect(result.current.values).toEqual(['$10.00', '$20.00', '$30.00', '$1,000.00']);
  });

  it('should use default currency from context if no currencyOptions provided', () => {
    const { result } = renderHook(() => useFormatCurrency(5));
    expect(result.current.format(15)).toBe('$15.00');
  });

  it('should use provided currencyOptions in format', () => {
    const customCurrency: CurrencyProps = {
      symbol: '€',
      decimal: '.',
      precision: 2,
      separator: ',',
    };

    const { result } = renderHook(() => useFormatCurrency());
    expect(result.current.format(100, customCurrency)).toBe('€100.00');
  });

  it('should memoize format function when currency does not change', () => {
    const { result, rerender } = renderHook(() => useFormatCurrency(1));
    const formatFn = result.current.format;
    rerender();
    expect(result.current.format).toBe(formatFn);
  });

  it('should return empty array when no arguments are provided', () => {
    const { result } = renderHook(() => useFormatCurrency());
    expect(result.current.values).toEqual([]);
  });

  it('should format undefined and null arguments as $0.00', () => {
    // eslint-disable-next-line max-len
    const { result } = renderHook(() => useFormatCurrency(undefined as unknown as number, null as unknown as number, 5));
    expect(result.current.values).toEqual(['$0.00', '$0.00', '$5.00']);
  });

  it('should format 0 as $0.00', () => {
    const { result } = renderHook(() => useFormatCurrency(0));
    expect(result.current.values).toEqual(['$0.00']);
  });

  it('should not have values formatted', () => {
    const { result } = renderHook(() => useFormatCurrency());
    expect(result.current.values.length).toEqual(0);
  });
});
