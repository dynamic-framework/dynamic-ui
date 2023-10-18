import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { DInputSwitch } from './d-input-switch';
it('should render base switch', async () => {
  const props = {
    mId: 'switchTest',
    label: 'toggle',
  };
  const page = await newSpecPage({
    components: [DInputSwitch],
    template: () => (h("d-form-switch", Object.assign({}, props))),
  });
  expect(page.root).toEqualHtml(`
    <d-form-switch label="toggle" mid="switchTest"></d-form-switch>
  `);
});
//# sourceMappingURL=d-input-switch.spec.js.map
