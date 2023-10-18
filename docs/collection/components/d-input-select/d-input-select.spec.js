import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { DInputSelect } from './d-input-select';
it('should render my component', async () => {
  const select = { innerId: 'Random-id' };
  const page = await newSpecPage({
    components: [DInputSelect],
    template: () => (h("d-input-select", Object.assign({}, select))),
  });
  expect(page.root).toEqualHtml(`
    <d-input-select>
      <div class="d-input">
        <div class="d-input-control">
          <div class="input-group">
            <select aria-describedby="Random-idAdd Random-idHint" aria-label="" class="form-select" id="Random-id"></select>
          </div>
        </div>
      </div>
    </d-input-select>
  `);
});
it('should render my component with options', async () => {
  const options = [
    { label: 'Option A', value: 'valueA' },
    { label: 'Option B', value: 'valueB' },
  ];
  const select = { innerId: 'Random-id', options };
  const page = await newSpecPage({
    components: [DInputSelect],
    template: () => (h("d-input-select", Object.assign({}, select))),
  });
  expect(page.root).toEqualHtml(`
    <d-input-select>
      <div class="d-input">
        <div class="d-input-control">
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
    </d-input-select>
  `);
});
//# sourceMappingURL=d-input-select.spec.js.map
