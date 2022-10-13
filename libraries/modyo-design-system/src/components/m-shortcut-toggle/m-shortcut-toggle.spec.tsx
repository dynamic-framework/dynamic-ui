import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { MShortcutToggle } from './m-shortcut-toggle';

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
    components: [MShortcutToggle],
    template: () => (
      <m-shortcut-toggle
        {...shortcut}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
  <m-shortcut-toggle>
    <label 
    class="shortcut" 
    htmlfor="${shortcut.mId}"
     >
      <input 
        id="${shortcut.mId}" 
        type="radio" 
        name="${shortcut.name}"
        value="${shortcut.value}"
      >
        <div class="shortcut-toggle">
          <span class="shortcut-label d-block">${shortcut.label}</span>
          <div class="d-block small">
            <span class="shortcut-text">${shortcut.text}</span>
            <span class="shortcut-subtext">${shortcut.subtext}</span>
          </div>
        </div>
    </label>
  </m-shortcut-toggle>
  `);
});
