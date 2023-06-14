import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { MQuickActionSelect } from './m-quick-action-select';
it('should render my component', async () => {
  const shortcut = {
    mId: 'component',
    name: 'name',
    line1: 'total',
    line2: '$ 7.432.450',
    value: 'value',
  };
  const page = await newSpecPage({
    components: [MQuickActionSelect],
    template: () => (h("m-quick-action-select", Object.assign({}, shortcut))),
  });
  expect(page.root).toEqualHtml(`
    <m-quick-action-select>
      <label class="m-quick-action-select" htmlfor="component">
        <input id="component" name="name" type="radio" value="value">
        <span class="m-quick-action-select-line1">
          total
        </span>
        <span class="m-quick-action-select-line2">
          $ 7.432.450
        </span>
      </label>
    </m-quick-action-select>
  `);
});
//# sourceMappingURL=m-quick-action-select.spec.js.map
