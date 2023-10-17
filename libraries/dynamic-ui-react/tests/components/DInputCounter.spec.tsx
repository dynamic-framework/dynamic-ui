import { render } from '@testing-library/react';
import DInputCounter from '../../src/components/DInputCounter';

it('should render base counter', () => {
  const props = {
    id: 'counter',
    minValue: 0,
    maxValue: 10,
    value: 0,
  };

  const { container } = render(
    <DInputCounter
      id={props.id}
      minValue={props.minValue}
      maxValue={props.maxValue}
      value={props.value}
    />
  );

  expect(container).toMatchInlineSnapshot(`
  <div>
    <div
      class="d-input"
      style="--bs-input-component-form-control-text-align: center;"
    >
      <div
        class="d-input-control"
      >
        <div
          class="input-group"
        >
          <button
            class="input-group-text"
            id="counterStart"
            type="button"
          >
            <i
              class="d-icon d-input-icon bi bi-dash-square"
              style="--bs-icon-component-size: 1.5rem; --bs-icon-component-loading-duration: 1.8s; --bs-icon-component-padding: 0;"
            />
          </button>
          <input
            aria-describedby="counterAdd counterHint"
            aria-label=""
            class="form-control"
            id="counter"
            placeholder=""
            type="number"
            value="0"
          />
          <button
            class="input-group-text"
            id="counterEnd"
            type="button"
          >
            <i
              class="d-icon d-input-icon bi bi-plus-square"
              style="--bs-icon-component-size: 1.5rem; --bs-icon-component-loading-duration: 1.8s; --bs-icon-component-padding: 0;"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
  `);
});