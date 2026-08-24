import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DInputPassword from './DInputPassword';

describe('<DInputPassword /> a11y', () => {
  it('has no violations with default props', async () => {
    const { container } = render(
      <DInputPassword id="passwordId" label="Password" />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no violations with a value set', async () => {
    const { container } = render(
      <DInputPassword id="passwordId" label="Password" value="Value" />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no violations when disabled', async () => {
    const { container } = render(
      <DInputPassword id="passwordId" label="Password" disabled />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no violations when invalid', async () => {
    const { container } = render(
      <DInputPassword id="passwordId" label="Password" invalid />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
