import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DDatePicker from './DDatePicker';

describe('<DDatePicker /> a11y', () => {
  it('should have no violations with default props', async () => {
    const props = {
      onChange: jest.fn(),
      id: 'datepicker',
      inputAriaLabel: 'Select a date',
    };

    const { container } = render(
      <DDatePicker {...props} />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with a label and hint', async () => {
    const props = {
      onChange: jest.fn(),
      id: 'datepicker-label',
      inputLabel: 'Birth date',
      inputHint: 'Select your date of birth',
      inputAriaLabel: 'Birth date',
    };

    const { container } = render(
      <DDatePicker {...props} />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations when invalid', async () => {
    const props = {
      onChange: jest.fn(),
      id: 'datepicker-invalid',
      inputLabel: 'Start date',
      inputAriaLabel: 'Start date',
      invalid: true,
    };

    const { container } = render(
      <DDatePicker {...props} />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
