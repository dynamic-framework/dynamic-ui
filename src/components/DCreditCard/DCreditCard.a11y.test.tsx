/// <reference types="@testing-library/jest-dom" />

import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DCreditCard from '.';

describe('<DCreditCard /> a11y', () => {
  it('should have no violations with default props', async () => {
    const { container } = render(
      <DCreditCard
        number="1234 5678 9012 3456"
        name="John Doe"
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with mastercard brand and no chip', async () => {
    const { container } = render(
      <DCreditCard
        number="1234 5678 9012 3456"
        name="Jane Doe"
        brand="mastercard"
        isChipVisible={false}
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with vertical orientation', async () => {
    const { container } = render(
      <DCreditCard
        number="1234 5678 9012 3456"
        name="Jane Doe"
        isVertical
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
