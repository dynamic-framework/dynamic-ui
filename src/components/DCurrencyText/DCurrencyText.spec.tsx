/// <reference types="@testing-library/jest-dom" />

import { render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import DCurrencyText from '.';

describe('<DCurrencyText />', () => {
  it('should render a currency text', () => {
    const props: ComponentProps<typeof DCurrencyText> = {
      value: 1234,
    };

    const { container } = render(
      <DCurrencyText {...props} />,
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <span>
          $1,234.00
        </span>
      </div>
    `);
  });

  it('should render formatted currency', () => {
    render(
      <DCurrencyText
        value={1234.56}
      />,
    );

    expect(screen.getByText('$1,234.56')).toBeInTheDocument();
  });

  it('should apply className and style', () => {
    render(
      <DCurrencyText
        value={100}
        className="test-class"
        style={{ color: 'red' }}
      />,
    );

    const element = screen.getByText('$100.00');
    expect(element).toHaveClass('test-class');
    expect(element).toHaveStyle('color: red');
  });

  it('should spread data attributes', () => {
    render(
      <DCurrencyText
        value={50}
        dataAttributes={{ 'data-testid': 'currency-text' }}
      />,
    );
    expect(screen.getByTestId('currency-text')).toBeInTheDocument();
  });
});
