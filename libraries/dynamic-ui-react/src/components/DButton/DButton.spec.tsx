import { render } from '@testing-library/react';
import DButton from './DButton';

it('should render base button', () => {
  const props = { text: 'Test' };

  const { container } = render(
    <DButton {...props} />,
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <button
        aria-label="Test"
        class="btn btn-primary"
        type="button"
      >
        <span>
          ${props.text}
        </span>
      </button>
    </div>
  `);
});

it('should render button pill', () => {
  const props = {
    text: 'Test',
    pill: true,
  };

  const { container } = render(
    <DButton {...props} />,
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <button
        aria-label="Test"
        class="btn btn-primary"
        style="--bs-btn-component-border-radius: var(--bs-border-radius-pill); --bs-btn-component-lg-border-radius: var(--bs-border-radius-pill); --bs-btn-component-sm-border-radius: var(--bs-border-radius-pill);"
        type="button"
      >
        <span>
          ${props.text}
        </span>
      </button>
    </div>
  `);
});
