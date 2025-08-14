import formatCurrency from '../formatCurrency';

describe('formatCurrency', () => {
  const options = {
    symbol: '$',
    decimal: '.',
    separator: ',',
    precision: 2,
  };

  it('should format positive number', () => {
    expect(formatCurrency(1234.56, options)).toBe('$1,234.56');
  });

  it('should format zero', () => {
    expect(formatCurrency(0, options)).toBe('$0.00');
  });

  it('should format negative number', () => {
    expect(formatCurrency(-99.99, options)).toBe('-$99.99');
  });

  it('should format with custom symbol', () => {
    const euroOptions = { ...options, symbol: '€' };
    expect(formatCurrency(100, euroOptions)).toBe('€100.00');
  });

  it('should format with no separator', () => {
    const noSepOptions = { ...options, separator: '' };
    expect(formatCurrency(1000, noSepOptions)).toBe('$1000.00');
  });

  it('should format with custom precision', () => {
    const precOptions = { ...options, precision: 0 };
    expect(formatCurrency(1234.56, precOptions)).toBe('$1,235');
  });
});
