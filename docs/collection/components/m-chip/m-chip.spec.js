import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { MChip } from './m-chip';
it('should render badge', async () => {
  const props = {
    theme: 'primary',
    text: 'Test',
    showClose: true,
  };
  const page = await newSpecPage({
    components: [MChip],
    template: () => (h("m-badge", Object.assign({}, props))),
  });
  expect(page.root).toEqualHtml(`
    <m-badge showclose="" text="Test" theme="primary"></m-badge>
  `);
});
//# sourceMappingURL=m-chip.spec.js.map
