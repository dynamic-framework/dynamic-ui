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
    template: () => (
      <m-quick-action-switch
        {...shortcut}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
    <m-quick-action-switch value="value">
      <label class="m-quick-action-switch" htmlfor="component">
        <div class="m-quick-action-switch-content">
          <m-input-switch mid="component" name="name"></m-input-switch>
          <span class="m-quick-action-switch-label">
            total
          </span>
        </div>
        <div class="m-quick-action-switch-hint">
          $ 7.432.450
        </div>
      </label>
    </m-quick-action-switch>
  `);
});
