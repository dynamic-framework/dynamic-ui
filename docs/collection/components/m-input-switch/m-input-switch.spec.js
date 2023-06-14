import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { MInputSwitch } from './m-input-switch';
it('should render base switch', async () => {
  const props = {
    mId: 'switchTest',
    label: 'toggle',
  };
  const page = await newSpecPage({
    components: [MInputSwitch],
    template: () => (h("m-form-switch", Object.assign({}, props))),
  });
  expect(page.root).toEqualHtml(`
    <m-form-switch label="toggle" mid="switchTest"></m-form-switch>
  `);
});
//# sourceMappingURL=m-input-switch.spec.js.map
