import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { MIcon } from '../m-icon/m-icon';

import { MCounter } from './m-counter';

it('should render base counter', async () => {
  const props = {
    mId: 'counter',
    minValue: 0,
    maxValue: 10,
    value: 0,
  };
  const page = await newSpecPage({
    components: [MCounter, MIcon],
    template: () => (
      <m-counter
        {...props}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
    <m-counter class="form-control-layout form-control-layout-counter form-control-layout-counter-default">
      <div class="form-control-input">
        <div class="input-group">
          <div class="form-control">
            <div class="form-control-spacer"></div>
            <div class="form-control-counter">
              <button class="form-control-counter-btn">
                <m-icon class="m-icon-host" style="--bs-m-icon-component-size: 1rem; --bs-m-icon-component-loading-duration: 1.8s; --bs-m-icon-component-host-size: 1rem;">
                  <i class="bi bi-dash m-icon"></i>
                </m-icon>
              </button>
              <input class="form-control-counter-input" id="${props.mId}" max="${props.maxValue}" min="${props.minValue}" type="number" value="${props.value}" >
              <button class="form-control-counter-btn">
                <m-icon class="m-icon-host" style="--bs-m-icon-component-size: 1rem; --bs-m-icon-component-loading-duration: 1.8s; --bs-m-icon-component-host-size: 1rem;">
                    <i class="bi bi-plus m-icon"></i>
                </m-icon>
              </button>
            </div>
            <div class="form-control-spacer"></div>
          </div>
        </div>
      </div>
    </m-counter>
  `);
});
