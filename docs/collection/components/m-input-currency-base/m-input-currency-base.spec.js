import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
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
    template: () => (h("m-currency-base", Object.assign({}, props))),
  });
  expect(page.root).toEqualHtml(`
    <m-currency-base mid="currencyTest" value="0"></m-currency-base>
  `);
});
//# sourceMappingURL=m-input-currency-base.spec.js.map
