import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { MInput } from './m-input';
it('should render my component', async () => {
  const input = {
    mId: 'inputId',
    label: 'Label',
    value: 'Value',
    placeholder: 'Input',
  };
  const page = await newSpecPage({
    components: [MInput],
    template: () => (h("m-input", Object.assign({}, input))),
  });
  expect(page.root).toEqualHtml(`
    <m-input>
      <div class="m-input">
        <label htmlfor="${input.mId}">
          ${input.label}
        </label>
        <div class="m-input-control">
          <div class="input-group">
            <input
              aria-describedby="${input.mId}Add inputIdHint"
              aria-label="${input.label}"
              placeholder="${input.placeholder}"
              value="${input.value}"
              class="form-control"
              type="text"
              id=${input.mId}
            >
          </div>
        </div>
      </div>
    </m-input>
  `);
});
//# sourceMappingURL=m-input.spec.js.map
