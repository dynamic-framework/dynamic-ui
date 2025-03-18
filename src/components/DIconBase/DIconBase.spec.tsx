import { render } from '@testing-library/react';
import DIconBase from './DIconBase';

it('should render my component', () => {
  const icon = { icon: 'heart' };

  const { container } = render(
    <DIconBase {...icon} />,
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <i
        class="d-icon bi bi-heart"
        style="--bs-icon-component-loading-duration: 1.8s; --bs-icon-component-padding: 0;"
      />
    </div>
  `);
});
