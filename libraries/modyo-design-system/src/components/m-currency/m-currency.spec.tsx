import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { MCurrency } from './m-currency';

it('should render base currency', async () => {
  const props = {
    mId: 'currencyTest',
    value: 0,
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
          <input aria-describedby="${props.mId}-add" aria-label="" class="form-control" id="${props.mId}" placeholder="" type="number" value="${props.value}">
        </div>
      </div>
    </m-currency>
  `);
});
