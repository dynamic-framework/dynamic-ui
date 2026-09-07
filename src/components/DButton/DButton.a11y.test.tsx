import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DButton from './DButton';

jest.mock('../../utils/getCssVariable', () => ({
  __esModule: true,
  default: () => '',
}));

describe('<DButton /> a11y', () => {
  it('Should not have accessibility violations (default button)', async () => {
    const { container } = render(
      <DButton text="Submit" />,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('Should not have accessibility violations (loading state)', async () => {
    const { container } = render(
      <DButton text="Submit" loading loadingAriaLabel="Loading" />,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('Should not have accessibility violations (disabled state)', async () => {
    const { container } = render(
      <DButton text="Submit" disabled />,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('Should not have accessibility violations (rendered as link)', async () => {
    const { container } = render(
      <DButton text="Go" href="https://example.com" />,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
