import { render } from '@testing-library/react';
import DDatePicker from './DDatePicker';

it('should render datepicker', () => {
  const props = {
    onChange: jest.fn(),
    id: 'datepicker',
  };

  const { container } = render(
    <DDatePicker {...props} />,
  );

  const input = container.querySelector('#datepicker');
  const button = container.querySelector('button[aria-label="open calendar"]');
  const icon = button?.querySelector('.d-icon');

  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute('type', 'text');
  expect(button).toBeInTheDocument();
  expect(icon).toBeInTheDocument();
  expect(icon?.querySelector('svg')).toBeInTheDocument();
});
