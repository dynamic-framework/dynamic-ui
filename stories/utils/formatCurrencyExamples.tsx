import { formatCurrency } from '../../src';

export function ExampleRoot() {
  const values = [100, 234.12, -233].map((amount) => formatCurrency(amount, {
    symbol: '$',
    precision: 2,
    separator: ',',
    decimal: '.',
  }));

  return (
    <div className="p-3">
      {values.map((value) => (
        <pre key={value}>{value}</pre>
      ))}
    </div>
  );
}
