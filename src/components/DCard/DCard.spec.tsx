/// <reference types="@testing-library/jest-dom" />

import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import DCard from '.';

describe('<Card />', () => {
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

  it('should render a card with header, body and footer', () => {
    const { container } = render(
      <DCard>
        <DCard.Header>Header</DCard.Header>
        <DCard.Body>Body</DCard.Body>
        <DCard.Footer>Footer</DCard.Footer>
      </DCard>,
    );

    const card = container.querySelector('.card');
    const header = card?.querySelector('.card-header');
    const body = card?.querySelector('.card-body');
    const footer = card?.querySelector('.card-footer');

    expect(header).toHaveTextContent('Header');
    expect(body).toHaveTextContent('Body');
    expect(footer).toHaveTextContent('Footer');
  });

  it('should have a data attribute', () => {
    const { container } = render(
      <DCard dataAttributes={{ 'data-test': 'card' }}>
        Card content
      </DCard>,
    );

    expect(container.querySelector('.card')).toHaveAttribute('data-test', 'card');
  });
});
