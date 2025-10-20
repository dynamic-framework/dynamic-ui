/// <reference types="@testing-library/jest-dom" />

import { render } from '@testing-library/react';
import DBox from '.';

describe('DBox', () => {
  it('should render children', () => {
    const { getByText } = render(<DBox>Hello</DBox>);
    expect(getByText('Hello')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    const { container } = render(<DBox className="custom-class">Hello</DBox>);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('should apply custom style', () => {
    const { container } = render(<DBox style={{ color: 'red' }}>Hello</DBox>);
    expect(container.firstChild).toHaveStyle('color: red');
  });

  it('should pass dataAttributes', () => {
    const { container } = render(<DBox dataAttributes={{ 'data-testid': 'custom-box' }}>Hello</DBox>);
    expect(container.firstChild).toHaveAttribute('data-testid', 'custom-box');
  });
});
