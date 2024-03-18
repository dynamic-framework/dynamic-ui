import { render } from '@testing-library/react';
import DInput from './DInput';

it('should render my component', () => {
  const input = {
    id: 'inputId',
    label: 'Label',
    value: 'Value',
    placeholder: 'Input',
  };

  const { container } = render(
    <DInput {...input} />,
  );

  expect(container).toMatchInlineSnapshot(`
  <div>
    <div>
      <label
        for="inputId"
      >
        Label
      </label>
      <div
        class="input-group"
      >
        <input
          class="form-control"
          id="inputId"
          placeholder="Input"
          value="Value"
        />
      </div>
    </div>
  </div>
  `);
});
