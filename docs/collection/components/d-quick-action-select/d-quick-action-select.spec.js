import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { DQuickActionSelect } from './d-quick-action-select';
it('should render my component', async () => {
  const shortcut = {
    innerId: 'component',
    name: 'name',
    line1: 'total',
    line2: '$ 7.432.450',
    value: 'value',
  };
  const page = await newSpecPage({
    components: [DQuickActionSelect],
    template: () => (h("d-quick-action-select", Object.assign({}, shortcut))),
  });
  expect(page.root).toEqualHtml(`
    <d-quick-action-select>
      <label class="d-quick-action-select" htmlfor="component">
        <input id="component" name="name" type="radio" value="value">
        <span class="d-quick-action-select-line1">
          total
        </span>
        <span class="d-quick-action-select-line2">
          $ 7.432.450
        </span>
      </label>
    </d-quick-action-select>
  `);
});
//# sourceMappingURL=d-quick-action-select.spec.js.map
