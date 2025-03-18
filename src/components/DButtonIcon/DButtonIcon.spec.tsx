import { render } from '@testing-library/react';
import DButtonIcon from './DButtonIcon';

it('should render base icon button', () => {
  const props = { icon: 'x-lg' };

  const { container } = render(
    <DButtonIcon {...props} />,
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <button
        class="btn d-button-icon btn-primary"
        type="button"
      >
        <i
          class="d-icon bi bi-x-lg"
          style="--bs-icon-component-loading-duration: 1.8s; --bs-icon-component-padding: 0;"
        />
      </button>
    </div>
  `);
});
