/// <reference types="@testing-library/jest-dom" />

import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import DCreditCard from '.';

describe('<Card />', () => {
  it('should render a card with a body', () => {
    const props: ComponentProps<typeof DCreditCard> = {
      number: '123',
      className: 'custom-card',
      isChipVisible: true,
    };

    const { container } = render(
      <DCreditCard {...props} />,
    );

    const card = container.querySelector('.d-credit-card');
    const cardNumber = container.querySelector('.d-credit-card-number');
    const logo = container.querySelector('.d-credit-card-logo');
    const chip = container.querySelector('.d-credit-card-chip-image');

    expect(card).toBeInTheDocument();
    expect(card).toHaveClass('custom-card');
    expect(cardNumber).toHaveTextContent('123');
    expect(logo).toBeInTheDocument();
    expect(chip).toBeInTheDocument();
  });

  it('should render mastercard logo when brand is mastercard and no custom logo provided', () => {
    const { container } = render(
      <DCreditCard number="123" brand="mastercard" />,
    );

    const logo = container.querySelector('.d-credit-card-logo');
    expect(logo).toBeInTheDocument();
    expect(logo?.getAttribute('src')).toBe(
      'https://cdn.modyo.cloud/uploads/f686b9aa-65ab-4369-9db3-89ceece84f29/original/mastercard.png',
    );
  });
});
