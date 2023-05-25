import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { MInputSelect } from './m-input-select';

it('should render my component', async () => {
  const select = { mId: 'Random-id' };

  const page = await newSpecPage({
    components: [MInputSelect],
    template: () => (
      <m-input-select
        {...select}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
    <m-input-select>
      <div class="m-input">
        <div class="m-input-control">
          <div class="input-group">
            <select aria-describedby="Random-idAdd Random-idHint" aria-label="" class="form-select" id="Random-id"></select>
          </div>
        </div>
      </div>
    </m-input-select>
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
      <m-input-select
        {...select}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
    <m-input-select>
      <div class="m-input">
        <div class="m-input-control">
          <div class="input-group">
            <select aria-describedby="Random-idAdd Random-idHint" aria-label="" class="form-select" id="Random-id">
              <option value="valueA">
                Option A
              </option>
              <option value="valueB">
                Option B
              </option>
            </select>
          </div>
        </div>
      </div>
    </m-input-select>
  `);
});
