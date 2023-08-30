import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { DQuickActionSwitch } from './d-quick-action-switch';
it('should render my component', async () => {
  const shortcut = {
    innerId: 'component',
    name: 'name',
    label: 'total',
    hint: '$ 7.432.450',
    value: 'value',
  };
  const page = await newSpecPage({
    components: [DQuickActionSwitch],
    template: () => (h("d-quick-action-switch", Object.assign({}, shortcut))),
  });
  expect(page.root).toEqualHtml(`
    <d-quick-action-switch value="value">
      <button class="d-quick-action-switch">
        <div class="d-quick-action-switch-content">
          <d-input-switch isreadonly="" innerid="component" name="name"></d-input-switch>
          <label class="d-quick-action-switch-label" htmlfor="component">
            total
          </label>
        </div>
        <div class="d-quick-action-switch-hint">
          $ 7.432.450
        </div>
      </button>
    </d-quick-action-switch>
  `);
});
//# sourceMappingURL=d-quick-action-switch.spec.js.map
