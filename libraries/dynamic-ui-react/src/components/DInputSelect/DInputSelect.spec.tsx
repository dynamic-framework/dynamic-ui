import { render } from '@testing-library/react';
import DInputSelect from './DInputSelect';

it('should render my component with options', () => {
  const select = {
    id: 'Random-id',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ],
  };

  const { container } = render(
    <DInputSelect
      {...select}
    />,
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="d-input"
      >
        <div
          class="d-input-control"
        >
          <div
            class="input-group"
          >
            <select
              aria-describedby="Random-idAdd Random-idHint"
              aria-label=""
              class="form-select"
              id="Random-id"
            >
              <option
                value="1"
              >
                Option 1
              </option>
              <option
                value="2"
              >
                Option 2
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  `);
});
