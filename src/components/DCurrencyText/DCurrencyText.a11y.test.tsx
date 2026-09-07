/// <reference types="@testing-library/jest-dom" />

import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DCurrencyText from '.';

describe('<DCurrencyText /> a11y', () => {
  it('should have no violations with a positive value', async () => {
    const { container } = render(
      <DCurrencyText value={1234.56} />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with a negative value', async () => {
    const { container } = render(
      <DCurrencyText value={-500} />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with className and style applied', async () => {
    const { container } = render(
      <DCurrencyText
        value={100}
        className="test-class"
        style={{ color: 'red' }}
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
