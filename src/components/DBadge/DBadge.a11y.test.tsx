import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DBadge from './DBadge';

describe('<DBadge /> a11y', () => {
  it('has no violations with default props', async () => {
    const { container } = render(<DBadge text="Badge content" />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no violations with soft color and rounded', async () => {
    const { container } = render(
      <DBadge
        text="Badge content"
        color="info"
        soft
        rounded
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no violations with iconStart and iconEnd', async () => {
    const { container } = render(
      <DBadge
        text="Badge content"
        iconStart="Star"
        iconEnd="Star"
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no violations with responsive size object', async () => {
    const { container } = render(
      <DBadge text="Badge content" size={{ xs: 'sm', md: 'lg' }} />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
