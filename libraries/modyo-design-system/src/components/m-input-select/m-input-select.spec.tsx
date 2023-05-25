import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { MInputSelect } from './m-input-select';

it('should render my component', async () => {
  const select = { mId: 'Random-id' };

  const page = await newSpecPage({
    components: [MInputSelect],
    template: () => (
      <m-select
        {...select}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
  <m-select class="form-control-layout form-control-layout-pill form-control-layout-prime">
    <div class="form-control-input w-100">
      <div class="input-group">
        <select
          aria-describedby="${select.mId}-start"
          class="form-select no-icons"
          id="${select.mId}"
        >
        </select>
      </div>
    </div>
  </m-select>
  `);
});

it('should render my component with options', async () => {
  const options = [
    { label: 'Option A', value: 'valueA' },
    { label: 'Option B', value: 'valueB' },
  ];

  const select = { mId: 'Random-id', options };

  const page = await newSpecPage({
    components: [MInputSelect],
    template: () => (
      <m-select
        {...select}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
  <m-select class="form-control-layout form-control-layout-pill form-control-layout-prime">
    <div class="form-control-input w-100">
      <div class="input-group">
        <select
          aria-describedby="${select.mId}-start"
          class="form-select no-icons"
          id="${select.mId}"
        >
          <option value=${options[0].value}>
            ${options[0].label}
          </option>
          <option value="${options[1].value}">
            ${options[1].label}
          </option>
        </select>
      </div>
    </div>
  </m-select>
  `);
});
