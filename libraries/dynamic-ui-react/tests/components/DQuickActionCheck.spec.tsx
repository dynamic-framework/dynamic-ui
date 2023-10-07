import { render } from '@testing-library/react';
import DQuickActionCheck from '../../src/components/DQuickActionCheck';

it('should render my component', () => {
  const shortcut = {
    id: 'component',
    name: 'name',
    value: 'value',
    line1: 'Saving account',
    line2: '*** 654',
    line3: '$ 7.432.450',
  };

  const { container } = render(
    <DQuickActionCheck
      {...shortcut}
    />
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <label
        class="d-quick-action-check"
        for="component"
      >
        <input
          class="form-check-input"
          id="component"
          name="name"
          type="radio"
          value="value"
        />
        <div
          class="d-quick-action-check-detail"
        >
          <span
            class="d-quick-action-check-line1"
          >
            Saving account
          </span>
          <span
            class="d-quick-action-check-line2"
          >
            *** 654
          </span>
        </div>
        <span
          class="d-quick-action-check-line3"
        >
          $ 7.432.450
        </span>
      </label>
    </div>
  `);
});
