import { render } from '@testing-library/react';
import DChip from './DChip';

it('should render badge', () => {
  const props = {
    theme: 'primary',
    text: 'Test',
    showClose: true,
  };

  const { container } = render(
    <DChip {...props} />,
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <span
        class="d-chip d-chip-primary"
      >
        <span>
          ${props.text}
        </span>
        <button
          aria-label="close"
          class="d-chip-icon-container"
          type="button"
        >
          <i
            class="d-icon bi bi-x-lg"
            style="--bs-icon-component-loading-duration: 1.8s; --bs-icon-component-padding: 0;"
          />
        </button>
      </span>
    </div>
  `);
});
