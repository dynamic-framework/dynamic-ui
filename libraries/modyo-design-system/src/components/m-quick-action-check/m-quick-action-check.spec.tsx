import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { MQuickActionCheck } from './m-quick-action-check';

it('should render my component', async () => {
  const shortcut = {
    mId: 'component',
    name: 'name',
    value: 'value',
    line1: 'Saving account',
    line2: '*** 654',
    line3: '$ 7.432.450',
  };

  const page = await newSpecPage({
    components: [MQuickActionCheck],
    template: () => (
      <m-quick-action-check
        {...shortcut}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
    <m-quick-action-check>
      <label class="m-quick-action-check" htmlfor="component">
        <m-input-check mid="component" name="name" type="radio" value="value"></m-input-check>
        <div class="quick-action-check-detail">
          <span class="quick-action-check-line1">
            Saving account
          </span>
          <span class="quick-action-check-line2">
            *** 654
          </span>
        </div>
        <span class="quick-action-check-line3">
          *** 654
        </span>
      </label>
    </m-quick-action-check>
  `);
});
