import { render } from '@testing-library/react';
import DInputCurrencyBase from '../../src/components/DInputCurrencyBase';

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
    />
  );

  expect(container).toMatchInlineSnapshot(`
  <div>
    <div
      class="d-input"
      style="--bs-input-currency-component-symbol-color: var(--bs-secondary); --bs-input-currency-symbol-color: var(--bs-input-currency-component-symbol-color);"
    >
      <label
        for="currencyTest"
      >
        labelTest
      </label>
      <div
        class="d-input-control"
      >
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
            aria-describedby="currencyTestAdd currencyTestHint"
            aria-label="labelTest"
            class="form-control"
            id="currencyTest"
            inputmode="decimal"
            pattern="^[0-9]"
            placeholder=""
            type="text"
            value=""
          />
        </div>
      </div>
    </div>
  </div>
  `);
});
