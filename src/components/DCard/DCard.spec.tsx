import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import DCard from '.';

it('should render a card with a body', () => {
  const props: ComponentProps<typeof DCard> = {
    className: 'custom-card',
    children: <>Card body</>,
  };

  const { container } = render(
    <DCard {...props} />,
  );

  expect(container).toMatchInlineSnapshot(`
  <div>
    <div
      class="card custom-card"
    >
      Card body
    </div>
  </div>
`);
});
