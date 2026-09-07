import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axe from '../../../tests/a11y/axeHelper';
import DOtp from './DOtp';

describe('<DOtp /> a11y', () => {
  it('should have no violations with default props', async () => {
    const { container } = render(<DOtp action={() => {}} />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations in the invalid state', async () => {
    const user = userEvent.setup();
    const { container } = render(<DOtp action={jest.fn()} />);

    const inputs = screen.getAllByRole('textbox');
    await user.type(inputs[0], '123');
    await user.click(screen.getByText('Authorize and continue'));

    expect(inputs[0]).toHaveClass('is-invalid');

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations while the submit action is loading', async () => {
    const user = userEvent.setup();
    let resolveAction: () => void = () => {};
    const action = jest.fn(() => new Promise<void>((resolve) => {
      resolveAction = resolve;
    }));
    const { container } = render(<DOtp action={action} />);

    const inputs = screen.getAllByRole('textbox');
    await user.type(inputs[0], '123456');
    await user.click(screen.getByText('Authorize and continue'));

    const button = screen.getByRole('button', { name: 'Authorize and continue' });
    expect(button).toHaveAttribute('aria-busy', 'true');

    const results = await axe(container);
    expect(results).toHaveNoViolations();

    resolveAction();
    await waitFor(() => {
      expect(button).toHaveAttribute('aria-busy', 'false');
    });
  });

  it('should have no violations with custom texts and otpSize', async () => {
    const { container } = render(
      <DOtp
        action={() => {}}
        otpSize={4}
        seconds={30}
        texts={{
          submit: 'Confirm',
          resend: 'Send again',
          resendText: 'Send again',
          title: 'Enter the 4-digit code we sent you.',
          invalidCode: 'That code is not valid.',
        }}
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
