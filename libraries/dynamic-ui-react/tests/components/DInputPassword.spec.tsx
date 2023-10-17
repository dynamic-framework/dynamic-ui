import { render } from '@testing-library/react';
import DInputPassword from '../../src/components/DInputPassword';

it('should render my component', () => {
  const search = {
    id: 'passwordId',
    label: 'Label',
    value: 'Value',
    placeholder: 'Password',
  };

  const { container } = render(
    <DInputPassword
      id={search.id}
      label={search.label}
      value={search.value}
      placeholder={search.placeholder}
    />
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="d-input"
      >
        <label
          for="passwordId"
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
              aria-describedby="passwordIdAdd passwordIdHint"
              aria-label="Label"
              class="form-control"
              id="passwordId"
              placeholder="Password"
              type="password"
              value="Value"
            />
            <button
              class="input-group-text"
              id="passwordIdEnd"
              type="button"
            >
              <i
                class="d-icon d-input-icon bi bi-eye-slash"
                style="--bs-icon-component-size: 1.5rem; --bs-icon-component-loading-duration: 1.8s; --bs-icon-component-padding: 0;"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  `);
});