import { DContextProvider, useFormatCurrency } from '../../src';

function ExampleOfUse() {
  const { values } = useFormatCurrency(100, 234.12, -233);
  return (
    <div className="p-3">
      {values.map((value) => (
        <pre key={value}>{value}</pre>
      ))}
    </div>
  );
}

export function ExampleRoot() {
  return (
    <DContextProvider>
      <ExampleOfUse />
    </DContextProvider>
  );
}
