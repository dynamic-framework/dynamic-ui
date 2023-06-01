import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { MQuickActionSelect } from './m-quick-action-select';

it('should render my component', async () => {
  const shortcut = {
    name: 'paymentOption',
    label: 'Minimum',
    text: '300',
    value: '300',
    mId: 'Random-id',
    subtext: '',
  };

  const page = await newSpecPage({
    components: [MQuickActionSelect],
    template: () => (
      <m-quick-action-select
        {...shortcut}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
    <m-quick-action-select label="Minimum" subtext="" text="300">
      <label class="m-quick-action-select" htmlfor="Random-id">
        <input id="Random-id" name="paymentOption" type="radio" value="300">
        <span class="quick-action-select-line1"></span>
        <span class="quick-action-select-line2"></span>
      </label>
    </m-quick-action-select>
  `);
});
