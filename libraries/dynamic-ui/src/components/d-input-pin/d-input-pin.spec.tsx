import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { DInputPin } from './d-input-pin';

it('should render my component', async () => {
  const pin = { innerId: 'myPin' };

  const page = await newSpecPage({
    components: [DInputPin],
    template: () => (
      <d-input-pin
        {...pin}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
    <d-input-pin>
      <div class="d-input-pin">
        <form class="d-input-pin-controls" id="myPin">
          <input aria-describedby="myPinState" autocomplete="off" class="form-control" id="pinIndex0" inputmode="text" maxlength="1" name="pin-0" placeholder="•" required="" type="text">
          <input aria-describedby="myPinState" autocomplete="off" class="form-control" id="pinIndex1" inputmode="text" maxlength="1" name="pin-1" placeholder="•" required="" type="text">
          <input aria-describedby="myPinState" autocomplete="off" class="form-control" id="pinIndex2" inputmode="text" maxlength="1" name="pin-2" placeholder="•" required="" type="text">
          <input aria-describedby="myPinState" autocomplete="off" class="form-control" id="pinIndex3" inputmode="text" maxlength="1" name="pin-3" placeholder="•" required="" type="text">
        </form>
      </div>
    </d-input-pin>
  `);
});
