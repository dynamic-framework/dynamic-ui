import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DOtp from './DOtp';

describe('DOtp', () => {
  it('should render title, pin input and submit button', () => {
    render(<DOtp action={() => {}} />);

    expect(screen.getByText(
      'We will send you a 6-digit code to your associated phone number so you can continue with your request.',
    )).toBeInTheDocument();
    expect(screen.getAllByRole('textbox')).toHaveLength(6);
    expect(screen.getByText('Authorize and continue')).toBeInTheDocument();
  });

  it('should call action when a complete otp is submitted', async () => {
    const user = userEvent.setup();
    const action = jest.fn();
    render(<DOtp action={action} />);

    const inputs = screen.getAllByRole('textbox');
    await user.type(inputs[0], '123456');
    await user.click(screen.getByText('Authorize and continue'));

    expect(action).toHaveBeenCalledTimes(1);
  });

  it('should show the invalid state and not call action when otp is too short', async () => {
    const user = userEvent.setup();
    const action = jest.fn();
    render(<DOtp action={action} />);

    const inputs = screen.getAllByRole('textbox');
    await user.type(inputs[0], '123');
    await user.click(screen.getByText('Authorize and continue'));

    expect(action).not.toHaveBeenCalled();
    expect(inputs[0]).toHaveClass('is-invalid');
    expect(screen.getByText('Invalid code, please try again.')).toBeInTheDocument();
  });

  // Regression test: DInputPin (uncontrolled) can re-notify onChange with
  // the same otp string across renders even without a new keystroke. This
  // must not clear an `invalid` state that a previous submit() just set.
  it('should keep showing the invalid state after a submit, even if DInputPin re-fires onChange', async () => {
    const user = userEvent.setup();
    const action = jest.fn();
    render(<DOtp action={action} />);

    const inputs = screen.getAllByRole('textbox');
    await user.type(inputs[0], '123');
    await user.click(screen.getByText('Authorize and continue'));

    // Give any pending effects (like DInputPin's onChange notification
    // effect) a chance to run before asserting the invalid state persists.
    await new Promise((resolve) => { setTimeout(resolve, 50); });

    expect(inputs[0]).toHaveClass('is-invalid');
    expect(screen.getByText('Invalid code, please try again.')).toBeInTheDocument();
  });
});
