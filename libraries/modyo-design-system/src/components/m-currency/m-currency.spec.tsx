import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import currency from 'currency.js';

import { MCurrency } from './m-currency';

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
    components: [MCurrency],
    template: () => (
      <m-currency
        {...props}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
  <m-currency class="form-control-layout form-control-layout-currency">
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
    </m-currency>
  `);
});
