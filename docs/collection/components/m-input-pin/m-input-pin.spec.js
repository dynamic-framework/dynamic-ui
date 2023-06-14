import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { MInputPin } from './m-input-pin';
it('should render my component', async () => {
  const pin = { mId: 'myPin' };
  const page = await newSpecPage({
    components: [MInputPin],
    template: () => (h("m-input-pin", Object.assign({}, pin))),
  });
  expect(page.root).toEqualHtml(`
    <m-input-pin>
      <div class="m-input-pin">
        <form class="m-input-pin-controls" id="myPin">
          <input aria-describedby="myPinState" autocomplete="off" class="form-control" id="pinIndex0" inputmode="text" maxlength="1" name="pin-0" placeholder="•" required="" type="text">
          <input aria-describedby="myPinState" autocomplete="off" class="form-control" id="pinIndex1" inputmode="text" maxlength="1" name="pin-1" placeholder="•" required="" type="text">
          <input aria-describedby="myPinState" autocomplete="off" class="form-control" id="pinIndex2" inputmode="text" maxlength="1" name="pin-2" placeholder="•" required="" type="text">
          <input aria-describedby="myPinState" autocomplete="off" class="form-control" id="pinIndex3" inputmode="text" maxlength="1" name="pin-3" placeholder="•" required="" type="text">
        </form>
      </div>
    </m-input-pin>
  `);
});
//# sourceMappingURL=m-input-pin.spec.js.map
