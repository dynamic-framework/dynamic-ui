import { render } from '@testing-library/react';
import DQuickActionSelect from './DQuickActionSelect';

it('should render my component', () => {
  const shortcut = {
    id: 'component',
    name: 'name',
    line1: 'total',
    line2: '$ 7.432.450',
    value: 'value',
  };

  const { container } = render(
    <DQuickActionSelect
      {...shortcut}
    />,
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <label
        class="d-quick-action-select"
        for="component"
      >
        <input
          id="component"
          name="name"
          type="radio"
          value="value"
        />
        <span
          class="d-quick-action-select-line1"
        >
          total
        </span>
        <span
          class="d-quick-action-select-line2"
        >
          $ 7.432.450
        </span>
      </label>
    </div>
  `);
});
