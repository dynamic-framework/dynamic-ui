import { render } from '@testing-library/react';
import DQuickActionSwitch from './DQuickActionSwitch';

it('should render my component', () => {
  const shortcut = {
    id: 'component',
    name: 'name',
    label: 'total',
    hint: '$ 7.432.450',
    value: 'value',
  };

  const { container } = render(
    <DQuickActionSwitch
      {...shortcut}
    />,
  );

  expect(container).toMatchInlineSnapshot(`
  <div>
    <button
      class="d-quick-action-switch"
      type="button"
    >
      <div
        class="d-quick-action-switch-content"
      >
        <div
          class="form-check form-switch"
        >
          <input
            class="form-check-input"
            id="component"
            name="name"
            role="switch"
            type="checkbox"
          />
        </div>
        <label
          class="d-quick-action-switch-label"
          for="component"
        >
          total
        </label>
      </div>
      <div
        class="d-quick-action-switch-hint"
      >
        $ 7.432.450
      </div>
    </button>
  </div>
  `);
});
