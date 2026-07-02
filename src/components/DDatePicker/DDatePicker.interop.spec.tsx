import { render, screen } from '@testing-library/react';
import type { DatePickerProps } from 'react-datepicker';

import DDatePicker from './DDatePicker';

jest.mock('react-datepicker', () => ({
  __esModule: true,
  default: {
    default: jest.fn((props: DatePickerProps) => (
      <div data-testid="mock-react-datepicker" data-calendar-class={props.calendarClassName}>
        {props.customInput}
        {props.customTimeInput}
      </div>
    )),
  },
}));

it('should render when react-datepicker is resolved as a module object with default export', () => {
  render(<DDatePicker onChange={jest.fn()} id="datepicker-module-object" />);

  // Verify the mocked component renders
  expect(screen.getByTestId('mock-react-datepicker')).toBeInTheDocument();
  // Verify the custom input renders
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});
