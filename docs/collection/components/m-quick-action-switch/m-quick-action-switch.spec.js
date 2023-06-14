import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { MQuickActionSwitch } from './m-quick-action-switch';
it('should render my component', async () => {
  const shortcut = {
    mId: 'component',
    name: 'name',
    label: 'total',
    hint: '$ 7.432.450',
    value: 'value',
  };
  const page = await newSpecPage({
    components: [MQuickActionSwitch],
    template: () => (h("m-quick-action-switch", Object.assign({}, shortcut))),
  });
  expect(page.root).toEqualHtml(`
    <m-quick-action-switch value="value">
      <button class="m-quick-action-switch">
        <div class="m-quick-action-switch-content">
          <m-input-switch isreadonly="" mid="component" name="name"></m-input-switch>
          <label class="m-quick-action-switch-label" htmlfor="component">
            total
          </label>
        </div>
        <div class="m-quick-action-switch-hint">
          $ 7.432.450
        </div>
      </button>
    </m-quick-action-switch>
  `);
});
//# sourceMappingURL=m-quick-action-switch.spec.js.map
