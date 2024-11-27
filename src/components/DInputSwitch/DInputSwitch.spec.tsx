import { render } from '@testing-library/react';
import DInputSwitch from './DInputSwitch';

it('should render base switch', () => {
  const props = {
    id: 'switchTest',
    label: 'toggle',
  };

  const { container } = render(
    <DInputSwitch
      {...props}
    />,
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="form-check form-switch"
      >
        <input
          class="form-check-input"
          id="switchTest"
          role="switch"
          type="checkbox"
        />
        <label
          class="form-check-label"
          for="switchTest"
        >
          toggle
        </label>
      </div>
    </div>
  `);
});
