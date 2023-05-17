import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { MFormSwitch } from './m-form-switch';

it('should render base switch', async () => {
  const props = {
    mId: 'switchTest',
    label: 'toggle',
  };
  const page = await newSpecPage({
    components: [MFormSwitch],
    template: () => (
      <m-form-switch
        {...props}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
    <m-form-switch class="form-switch-box">
    <div class="form-check form-check-reverse form-switch">
      <label class="form-switch-box-label" htmlfor="${props.mId}">
        <div class="d-flex flex-grow-1 gap-3 justify-content-between align-items-center">
          <span class="form-check-label">
            ${props.label}
          </span>
          <span class="form-check-label fw-bold"></span>
        </div>
        <input class="form-check-input form-check-switch" id="${props.mId}" role="switch" type="checkbox">
      </label>
    </div>
  </m-form-switch>
  `);
});
