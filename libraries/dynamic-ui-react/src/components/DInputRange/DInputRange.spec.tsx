import { render } from '@testing-library/react';

import DInputRange from './DInputRange';

it('should render base range', () => {
  const props = {
    id: 'range',
    min: 0,
    max: 10,
    step: 2,
    value: 4,
    label: 'Range',
    readOnly: true,
  };

  const { container } = render(
    <DInputRange
      {...props}
    />,
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <label
        class="form-label"
        for="range"
      >
        Range
      </label>
      <input
        class="form-range"
        id="range"
        max="10"
        min="0"
        readonly=""
        step="2"
        style="--bs-form-range-component-value: 40%;"
        type="range"
        value="4"
      />
    </div>
  `);
});
