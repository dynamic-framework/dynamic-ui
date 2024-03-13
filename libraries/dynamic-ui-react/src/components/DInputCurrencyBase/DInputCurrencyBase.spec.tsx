import { render } from '@testing-library/react';
import DInputCurrencyBase from './DInputCurrencyBase';

it('should render base currency', () => {
  const props = {
    id: 'currencyTest',
    label: 'labelTest',
    value: 0,
    placeholder: undefined,
    currencyOptions: {
      separator: ',',
      symbol: '$',
    },
  };

  const { container } = render(
    <DInputCurrencyBase
      {...props}
    />,
  );

  expect(container).toMatchInlineSnapshot(`
  <div>
    <div
      style="--bs-input-currency-component-symbol-color: var(--bs-secondary); --bs-input-currency-symbol-color: var(--bs-input-currency-component-symbol-color);"
    >
      <label
        for="currencyTest"
      >
        labelTest
      </label>
      <div
        class="input-group"
      >
        <div
          class="input-group-text"
        >
          <span
            slot="input-start"
          >
            $
          </span>
        </div>
        <input
          class="form-control"
          id="currencyTest"
          inputmode="decimal"
          pattern="^[0-9]"
          type="text"
          value="0.00"
        />
      </div>
    </div>
  </div>
  `);
});
