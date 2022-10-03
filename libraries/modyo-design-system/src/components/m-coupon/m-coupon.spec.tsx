import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { MCoupon } from './m-coupon';

it('should render base coupon', async () => {
  const props = { mId: 'testCoupon' };
  const page = await newSpecPage({
    components: [MCoupon],
    template: () => (
      <m-coupon
        {...props}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
    <m-coupon class="form-control-layout form-control-layout-coupon form-control-theme-primary">
      <div class="form-control-input">
        <div class="input-group">
          <input aria-describedby="${props.mId}-add" aria-label="" class="form-control" id="${props.mId}" placeholder="" type="text">
          <button class="btn btn-text-primary fw-semibold small text-uppercase">
            Apply
          </button>
        </div>
      </div>
    </m-coupon>
  `);
});
