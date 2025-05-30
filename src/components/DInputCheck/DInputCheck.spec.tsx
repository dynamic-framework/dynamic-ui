/// <reference types="@testing-library/jest-dom" />

import { fireEvent, render, screen } from '@testing-library/react';
import DInputCheck from '.';

import { InputCheckType } from '../interface';

describe('<DInputCheck />', () => {
  it('should render base checkbox', () => {
    const props = {
      id: 'checkTest',
      type: 'checkbox',
    };

    const { container } = render(
      <DInputCheck
        id={props.id}
        type={props.type as InputCheckType}
      />,
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <input
          class="form-check-input"
          id="checkTest"
          type="checkbox"
          value=""
        />
      </div>
    `);
  });

  it('should render base radio', () => {
    const props = {
      id: 'radioTest',
      type: 'radio',
    };

    const { container } = render(
      <DInputCheck
        id={props.id}
        type={props.type as InputCheckType}
      />,
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <input
          class="form-check-input"
          id="radioTest"
          type="radio"
          value=""
        />
      </div>
    `);
  });

  it('renders input without label', () => {
    render(<DInputCheck type="checkbox" ariaLabel="test-check" />);
    const input = screen.getByLabelText('test-check');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'checkbox');
  });

  it('renders with label and hint', () => {
    render(
      <DInputCheck
        type="checkbox"
        label="Accept terms"
        hint="You must accept"
        ariaLabel="terms"
      />,
    );
    expect(screen.getByText('Accept terms')).toBeInTheDocument();
    expect(screen.getByText('You must accept')).toBeInTheDocument();
  });

  it('handles checked prop', () => {
    render(
      <DInputCheck
        type="checkbox"
        checked
        ariaLabel="check-me"
      />,
    );
    const input = screen.getByLabelText('check-me');
    expect(input).toBeChecked();
  });

  it('handles disabled state', () => {
    render(
      <DInputCheck
        type="checkbox"
        disabled
        ariaLabel="disabled-check"
      />,
    );
    const input = screen.getByLabelText('disabled-check');
    expect(input).toBeDisabled();
  });

  it('calls onChange when clicked', () => {
    const handleChange = jest.fn();
    render(
      <DInputCheck
        type="checkbox"
        onChange={handleChange}
        ariaLabel="toggle-check"
      />,
    );
    const input = screen.getByLabelText('toggle-check');
    fireEvent.click(input);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('applies valid and invalid class', () => {
    const { rerender } = render(
      <DInputCheck
        type="checkbox"
        invalid
        ariaLabel="invalid-check"
      />,
    );
    const input = screen.getByLabelText('invalid-check');
    expect(input).toHaveClass('is-invalid');

    rerender(
      <DInputCheck
        type="checkbox"
        valid
        ariaLabel="valid-check"
      />,
    );
    expect(screen.getByLabelText('valid-check')).toHaveClass('is-valid');
  });

  it('applies aria-describedby when hint is present', () => {
    render(
      <DInputCheck
        type="checkbox"
        hint="Helpful hint"
        label="Hinted"
      />,
    );
    const input = screen.getByRole('checkbox');
    const hint = screen.getByText('Helpful hint');
    expect(input).toHaveAttribute('aria-describedby', hint.id);
  });

  it('applies custom data attributes to wrapper div', () => {
    render(
      <DInputCheck
        type="checkbox"
        label="With Data Attr"
        dataAttributes={{ 'data-testid': 'custom-wrapper' }}
      />,
    );
    const wrapper = screen.getByTestId('custom-wrapper');
    expect(wrapper).toBeInTheDocument();
  });
});
