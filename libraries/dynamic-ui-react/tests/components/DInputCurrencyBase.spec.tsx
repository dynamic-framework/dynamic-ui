import { render } from '@testing-library/react';
import DInputCurrencyBase from '../../src/components/DInputCurrencyBase';

it('should render base currency', () => {
  const props = {
    id: 'currencyTest',
    value: 0,
    placeholder: undefined,
    currencyOptions: {
      separator: ',',
      symbol: '$',
    },
  };

  const { container } = render(
    <DInputCurrencyBase
      id={props.id}
      value={props.value}
      placeholder={props.placeholder}
      currencyOptions={props.currencyOptions}
    />
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <d-input-currency-base
        currencyoptions="[object Object]"
        id="currencyTest"
        placeholder=""
        value="0"
      />
    </div>
  `);
});
