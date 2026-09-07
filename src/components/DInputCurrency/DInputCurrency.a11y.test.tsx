import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DInputCurrency from '.';
import { DContextProvider } from '../../contexts';

describe('<DInputCurrency /> a11y', () => {
  it('has no violations with default props', async () => {
    const { container } = render(
      <DContextProvider>
        <DInputCurrency id="currencyTest" label="Amount" value={0} />
      </DContextProvider>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no violations with a custom currency code', async () => {
    const { container } = render(
      <DContextProvider>
        <DInputCurrency id="currencyTest" label="Amount" currencyCode="€" />
      </DContextProvider>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no violations when invalid', async () => {
    const { container } = render(
      <DContextProvider>
        <DInputCurrency
          id="currencyTest"
          label="Amount"
          value={500}
          minValue={0}
          maxValue={100}
          invalid
        />
      </DContextProvider>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no violations when disabled', async () => {
    const { container } = render(
      <DContextProvider>
        <DInputCurrency id="currencyTest" label="Amount" value={100} disabled />
      </DContextProvider>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
