import { render } from '@testing-library/react';

import DInputMask from './DInputMask';

it('should render my component', () => {
  const input = {
    id: 'inputId',
    label: 'Label',
    placeholder: 'Input',
    mask: '(+56)_ ____ ____',
    replacement: { _: /\d/ },
    showMask: true,
  };

  const { container } = render(
    <DInputMask {...input} />,
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="d-input"
      >
        <label
          for="inputId"
        >
          Label
        </label>
        <div
          class="d-input-control"
        >
          <div
            class="input-group"
          >
            <input
              class="form-control"
              id="inputId"
              placeholder="Input"
              value=""
            />
          </div>
        </div>
      </div>
    </div>
  `);
});
