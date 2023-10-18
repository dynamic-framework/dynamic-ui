import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { DInput } from './d-input';
it('should render my component', async () => {
  const input = {
    innerId: 'inputId',
    label: 'Label',
    value: 'Value',
    placeholder: 'Input',
  };
  const page = await newSpecPage({
    components: [DInput],
    template: () => (h("d-input", Object.assign({}, input))),
  });
  expect(page.root).toEqualHtml(`
    <d-input>
      <div class="d-input">
        <label htmlfor="${input.innerId}">
          ${input.label}
        </label>
        <div class="d-input-control">
          <div class="input-group">
            <input
              aria-describedby="${input.innerId}Add inputIdHint"
              aria-label="${input.label}"
              placeholder="${input.placeholder}"
              value="${input.value}"
              class="form-control"
              type="text"
              id=${input.innerId}
            >
          </div>
        </div>
      </div>
    </d-input>
  `);
});
//# sourceMappingURL=d-input.spec.js.map
