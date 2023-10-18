import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { DIcon } from '../d-icon/d-icon';
import { DInputCounter } from './d-input-counter';
it('should render base counter', async () => {
  const props = {
    innerId: 'counter',
    minValue: 0,
    maxValue: 10,
    value: 0,
  };
  const page = await newSpecPage({
    components: [DInputCounter, DIcon],
    template: () => (h("d-counter", Object.assign({}, props))),
  });
  expect(page.root).toEqualHtml(`
    <d-counter maxvalue="10" innerid="counter" minvalue="0" value="0"></d-counter>
  `);
});
//# sourceMappingURL=d-input-counter.spec.js.map
