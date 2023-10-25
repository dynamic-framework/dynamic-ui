import { render } from '@testing-library/react';
import DDatePicker from './DDatePicker';

it('should render datepicker', () => {
  const props = {
    onChange: jest.fn(),
    id: 'datepicker',
  };

  const { container } = render(
    <DDatePicker {...props} />,
  );

  expect(container).toMatchInlineSnapshot(`
  <div>
    <div
      class="react-datepicker-wrapper"
    >
      <div
        class="react-datepicker__input-container"
      >
        <div
          role="button"
          tabindex="-1"
        >
          <div
            class="d-input"
          >
            <div
              class="d-input-control"
            >
              <div
                class="input-group"
              >
                <input
                  aria-label=""
                  class="form-control"
                  id="datepicker"
                  type="text"
                  value=""
                />
                <button
                  class="input-group-text"
                  id="datepickerEnd"
                  type="button"
                >
                  <i
                    class="d-icon d-input-icon bi bi-calendar"
                    style="--bs-icon-component-size: 1.5rem; --bs-icon-component-loading-duration: 1.8s; --bs-icon-component-padding: 0;"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `);
});
