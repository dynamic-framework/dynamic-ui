import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import currency from 'currency.js';

import { MInputCurrencyBase } from './m-input-currency-base';

it('should render base currency', async () => {
  const props = {
    mId: 'currencyTest',
    value: 0,
    placeholder: undefined,
    currencyOptions: {
      separator: ',',
      symbol: '$',
    },
  };
  const page = await newSpecPage({
    components: [MInputCurrencyBase],
    template: () => (
      <m-currency-base
        {...props}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
  <m-currency-base class="form-control-layout form-control-layout-currency">
      <div class="form-control-input">
        <div class="input-group">
          <input
            type="text"
            aria-describedby="${props.mId}-add"
            aria-label="" class="form-control"
            id="${props.mId}"
            placeholder="${props.placeholder !== undefined ? props.placeholder : currency(0, props.currencyOptions).format()}"
            value="${props.value !== undefined ? currency(props.value, props.currencyOptions).format() : ''}"
          >
        </div>
      </div>
    </m-currency-base>
  `);
});
