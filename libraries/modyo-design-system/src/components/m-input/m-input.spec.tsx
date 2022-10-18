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
    template: () => (
      <m-input
        {...input}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
    <m-input class="form-control-layout">
      <label htmlfor="${input.mId}">
      ${input.label}
      </label>
      <div class="form-control-input">
        <div class="input-group">
          <input
            aria-describedby="${input.mId}-add"
            aria-label="${input.label}"
            placeholder="${input.placeholder}"
            value="${input.value}"
            class="form-control"
            type="text"
            id=${input.mId}
          >
        </div>
      </div>
    </m-input>
  `);
});
