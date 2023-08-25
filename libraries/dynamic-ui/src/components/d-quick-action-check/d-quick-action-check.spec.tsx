import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { DQuickActionCheck } from './d-quick-action-check';

it('should render my component', async () => {
  const shortcut = {
    innerId: 'component',
    name: 'name',
    value: 'value',
    line1: 'Saving account',
    line2: '*** 654',
    line3: '$ 7.432.450',
  };

  const page = await newSpecPage({
    components: [DQuickActionCheck],
    template: () => (
      <d-quick-action-check
        {...shortcut}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
    <d-quick-action-check>
      <label class="d-quick-action-check" htmlfor="component">
        <d-input-check innerId="component" name="name" type="radio" value="value"></d-input-check>
        <div class="quick-action-check-detail">
          <span class="quick-action-check-line1">
            Saving account
          </span>
          <span class="quick-action-check-line2">
            *** 654
          </span>
        </div>
        <span class="quick-action-check-line3">
          $ 7.432.450
        </span>
      </label>
    </d-quick-action-check>
  `);
});
