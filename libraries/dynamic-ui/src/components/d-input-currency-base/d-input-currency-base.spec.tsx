import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { DInputCurrencyBase } from './d-input-currency-base';

it('should render base currency', async () => {
  const props = {
    innerId: 'currencyTest',
    value: 0,
    placeholder: undefined,
    currencyOptions: {
      separator: ',',
      symbol: '$',
    },
  };
  const page = await newSpecPage({
    components: [DInputCurrencyBase],
    template: () => (
      <d-currency-base
        {...props}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
    <d-currency-base innerid="currencyTest" value="0"></d-currency-base>
  `);
});
