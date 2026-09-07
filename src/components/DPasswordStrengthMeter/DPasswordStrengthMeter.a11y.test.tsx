import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DPasswordStrengthMeter from './DPasswordStrengthMeter';

describe('<DPasswordStrengthMeter /> a11y', () => {
  it('should have no violations with default props', async () => {
    const { container } = render(
      <DPasswordStrengthMeter
        id="passwordId"
        label="Password"
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations when disabled', async () => {
    const { container } = render(
      <DPasswordStrengthMeter
        id="passwordId"
        label="Password"
        disabled
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations when invalid with a value', async () => {
    const { container } = render(
      <DPasswordStrengthMeter
        id="passwordId"
        label="Password"
        value="Abc123!"
        invalid
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
