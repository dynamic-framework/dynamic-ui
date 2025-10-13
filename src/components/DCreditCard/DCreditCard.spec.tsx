/// <reference types="@testing-library/jest-dom" />

import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import DCreditCard from '.';

describe('<Card />', () => {
  it('should render a card with a body', () => {
    const props: ComponentProps<typeof DCreditCard> = {
      className: 'custom-card',
      children: <>Card body</>,
    };

    const { container } = render(
      <DCreditCard {...props} />,
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="d-credit-card custom-card"
        >
          Card body
        </div>
      </div>
    `);
  });
});
