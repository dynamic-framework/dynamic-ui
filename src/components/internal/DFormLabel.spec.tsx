/// <reference types="@testing-library/jest-dom" />

import { render } from '@testing-library/react';
import DFormLabel from './DFormLabel';

describe('<DFormLabel />', () => {
  // React 18 throws on a bigint child and this package supports it, so the
  // label is rendered as its string form rather than passed through.
  it('renders a bigint label as text', () => {
    const { container } = render(
      <DFormLabel htmlFor="x">{BigInt(42)}</DFormLabel>,
    );

    expect(container.querySelector('label')).toHaveTextContent('42');
  });

  it('leaves every other kind of label untouched', () => {
    const { container, rerender } = render(<DFormLabel htmlFor="x">Name</DFormLabel>);
    expect(container.querySelector('label')).toHaveTextContent('Name');

    rerender(<DFormLabel htmlFor="x">{0}</DFormLabel>);
    expect(container.querySelector('label')).toHaveTextContent('0');

    rerender(<DFormLabel htmlFor="x"><a href="#terms">terms</a></DFormLabel>);
    expect(container.querySelector('label a')).toHaveTextContent('terms');
  });

  it('associates the label with its control', () => {
    const { container } = render(<DFormLabel htmlFor="control">Name</DFormLabel>);

    expect(container.querySelector('label')).toHaveAttribute('for', 'control');
  });
});
