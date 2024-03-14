import { render } from '@testing-library/react';
import DBadge from './DBadge';

it('should render badge', () => {
  const props = {
    theme: 'primary',
    text: 'Test',
  };

  const { container } = render(
    <DBadge {...props} />,
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <span
        class="badge text-bg-primary"
      >
        <span>
          Test
        </span>
      </span>
    </div>
  `);
});
