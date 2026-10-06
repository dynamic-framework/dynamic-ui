/// <reference types="@testing-library/jest-dom" />

import { render, screen } from '@testing-library/react';
import DPasswordStrengthMeter from '.';

describe('<DPasswordStrengthMeter />', () => {
  it('names the password field through the forwarded aria-label', () => {
    render(
      <DPasswordStrengthMeter
        aria-label="New password"
        label={<span>New password</span>}
      />,
    );

    expect(screen.getByLabelText('New password')).toBeInTheDocument();
  });

  // The naming warning comes from the nested input, so it must name a prop this
  // wrapper accepts — and must be the only one, not one of two disagreeing.
  it('warns once, for a prop this component accepts', () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});

    render(<DPasswordStrengthMeter label={<span>New password</span>} />);

    expect(warn).toHaveBeenCalledTimes(1);
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('Pass aria-label with'));
    warn.mockRestore();
  });

  it('does not warn for the default text label', () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});

    render(<DPasswordStrengthMeter />);

    expect(warn).not.toHaveBeenCalled();
    warn.mockRestore();
  });
});
