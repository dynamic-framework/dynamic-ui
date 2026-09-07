import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DBox from '.';

describe('<DBox /> a11y', () => {
  it('has no violations with children', async () => {
    const { container } = render(<DBox>Hello</DBox>);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no violations with custom className and style', async () => {
    const { container } = render(
      <DBox className="custom-class" style={{ color: 'red' }}>
        Hello
      </DBox>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no violations with nested interactive content', async () => {
    const { container } = render(
      <DBox>
        <button type="button">Click me</button>
      </DBox>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
