import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { MPin } from './m-pin';

it('should render my component', async () => {
  const pin = { mId: 'myPin' };

  const page = await newSpecPage({
    components: [MPin],
    template: () => (
      <m-pin
        {...pin}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
  <m-pin class="form-control-layout form-control-layout-pin">
    <form class="form-control-input" id="${pin.mId}">
      <input autocomplete="off" class="pin-item" id="pin-index-0" inputmode="text" maxlength="1" name="pin-0" placeholder="•" required type="text">
      <input autocomplete="off" class="pin-item" id="pin-index-1" inputmode="text" maxlength="1" name="pin-1" placeholder="•" required type="text">
      <input autocomplete="off" class="pin-item" id="pin-index-2" inputmode="text" maxlength="1" name="pin-2" placeholder="•" required type="text">
      <input autocomplete="off" class="pin-item" id="pin-index-3" inputmode="text" maxlength="1" name="pin-3" placeholder="•" required type="text">
    </form>
  </m-pin>
  `);
});
