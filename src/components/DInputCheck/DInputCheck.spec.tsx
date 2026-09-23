/// <reference types="@testing-library/jest-dom" />

import { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
        value=""
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
        value=""
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

  it('applies indeterminate state for checkbox', () => {
    render(
      <DInputCheck
        type="checkbox"
        indeterminate
        ariaLabel="indeterminate-check"
      />,
    );
    const input = screen.getByLabelText<HTMLInputElement>('indeterminate-check');
    expect(input.indeterminate).toBe(true);
  });

  it('ignores indeterminate state for radio', () => {
    render(
      <DInputCheck
        type="radio"
        indeterminate
        ariaLabel="indeterminate-radio"
      />,
    );
    const input = screen.getByLabelText<HTMLInputElement>('indeterminate-radio');
    expect(input.indeterminate).toBe(false);
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
  // A label may carry a link or a button — the terms-and-conditions pattern. The
  // three tests below pin that contract down: the markup renders, the accessible
  // name stays the one given explicitly, and activating the nested control does
  // not also activate the checkbox (the HTML spec skips a label's activation
  // behaviour for events targeted at interactive content descendants).
  it('renders a ReactNode label as markup', () => {
    render(
      <DInputCheck
        type="checkbox"
        ariaLabel="Accept the terms and conditions"
        label={(
          <>
            I accept the
            {' '}
            <a href="#terms">terms and conditions</a>
          </>
        )}
      />,
    );

    expect(screen.getByRole('link', { name: 'terms and conditions' })).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toHaveAccessibleName('Accept the terms and conditions');
  });

  it('leaves the control untouched when a link inside the label is clicked', () => {
    const onChange = jest.fn();

    render(
      <DInputCheck
        type="checkbox"
        ariaLabel="Accept the terms and conditions"
        label={(
          <>
            I accept the
            {' '}
            <a href="#terms">terms and conditions</a>
          </>
        )}
        onChange={onChange}
      />,
    );

    fireEvent.click(screen.getByRole('link', { name: 'terms and conditions' }));

    expect(onChange).not.toHaveBeenCalled();
  });

  // A `<button>` is a labelable element and so a forbidden descendant of
  // `<label>`; the conforming trigger for a label is a link or a span carrying
  // a role, which is what this fixture uses.
  it('runs a custom trigger inside the label without toggling the control', () => {
    const onChange = jest.fn();
    const onInfoClick = jest.fn();

    render(
      <DInputCheck
        type="checkbox"
        ariaLabel="Accept the terms and conditions"
        label={(
          <>
            I accept the terms
            {' '}
            <span
              role="button"
              tabIndex={0}
              onClick={onInfoClick}
              onKeyDown={onInfoClick}
            >
              More info
            </span>
          </>
        )}
        onChange={onChange}
      />,
    );

    fireEvent.click(screen.getByRole('button', { name: 'More info' }));

    expect(onInfoClick).toHaveBeenCalledTimes(1);
    expect(onChange).not.toHaveBeenCalled();
  });

  it('toggles the control when the plain text of the label is clicked', () => {
    const onChange = jest.fn();

    const { container } = render(
      <DInputCheck
        type="checkbox"
        ariaLabel="Accept the terms and conditions"
        label={(
          <>
            I accept the
            {' '}
            <a href="#terms">terms and conditions</a>
          </>
        )}
        onChange={onChange}
      />,
    );

    fireEvent.click(container.querySelector('label') as HTMLLabelElement);

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('renders a numeric label instead of dropping it as falsy', () => {
    const { container } = render(<DInputCheck type="checkbox" label={0} />);

    expect(container.querySelector('label')).toHaveTextContent('0');
    expect(screen.getByRole('checkbox')).toHaveAccessibleName('0');
  });

  it('does not warn for a node label named by the forwarded native aria-label', () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});

    render(
      <DInputCheck
        type="checkbox"
        aria-label="Accept the terms and conditions"
        label={<span>I accept the terms</span>}
      />,
    );

    expect(warn).not.toHaveBeenCalled();
    warn.mockRestore();
  });

  // `{...props}` is spread after `aria-label={ariaLabel}`, so a native
  // `aria-label` wins — including an explicitly undefined one, which leaves the
  // control unnamed however non-empty `ariaLabel` was.
  it('warns when a native aria-label overrides ariaLabel with nothing', () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});

    render(
      <DInputCheck
        type="checkbox"
        ariaLabel="Accept the terms"
        aria-label={undefined}
        label={<span>I accept the terms</span>}
      />,
    );

    expect(screen.getByRole('checkbox')).not.toHaveAttribute('aria-label');
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('DInputCheck'));
    warn.mockRestore();
  });

  it('does not warn for a node label named by aria-labelledby', () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});

    render(
      <>
        <span id="termsName">Accept the terms and conditions</span>
        <DInputCheck
          type="checkbox"
          aria-labelledby="termsName"
          label={<span>I accept the terms</span>}
        />
      </>,
    );

    expect(warn).not.toHaveBeenCalled();
    warn.mockRestore();
  });

  describe('controlled and uncontrolled modes', () => {
    it('reverts to the prop when the parent rejects the change', async () => {
      function Rejecting() {
        const [checked] = useState(false);
        return (
          <DInputCheck
            type="checkbox"
            ariaLabel="Approver"
            checked={checked}
            onChange={() => {}}
          />
        );
      }

      render(<Rejecting />);
      const input = screen.getByRole('checkbox');

      await userEvent.click(input);

      expect(input).not.toBeChecked();
    });

    it('follows the prop when the parent accepts the change', async () => {
      function Accepting() {
        const [checked, setChecked] = useState(false);
        return (
          <DInputCheck
            type="checkbox"
            ariaLabel="Approver"
            checked={checked}
            onChange={(event) => setChecked(event.target.checked)}
          />
        );
      }

      render(<Accepting />);
      const input = screen.getByRole('checkbox');

      await userEvent.click(input);
      expect(input).toBeChecked();

      await userEvent.click(input);
      expect(input).not.toBeChecked();
    });

    it('toggles on its own when no checked prop is passed', async () => {
      render(<DInputCheck type="checkbox" ariaLabel="Filter" />);
      const input = screen.getByRole('checkbox');

      await userEvent.click(input);
      expect(input).toBeChecked();

      await userEvent.click(input);
      expect(input).not.toBeChecked();
    });

    it('starts from defaultChecked and keeps toggling', async () => {
      render(<DInputCheck type="checkbox" ariaLabel="Filter" defaultChecked />);
      const input = screen.getByRole('checkbox');

      expect(input).toBeChecked();

      await userEvent.click(input);
      expect(input).not.toBeChecked();
    });

    it('keeps a checked without onChange as a starting value, not a lock', async () => {
      render(
        <>
          <DInputCheck type="radio" name="plan" ariaLabel="Basic" />
          <DInputCheck type="radio" name="plan" ariaLabel="Pro" checked />
        </>,
      );
      const basic = screen.getByLabelText('Basic');
      const pro = screen.getByLabelText('Pro');

      expect(pro).toBeChecked();

      await userEvent.click(basic);

      expect(basic).toBeChecked();
      expect(pro).not.toBeChecked();
    });

    it('still applies a checked without onChange that is flipped from outside', async () => {
      function External() {
        const [checked, setChecked] = useState(false);
        return (
          <>
            <button type="button" onClick={() => setChecked(true)}>select all</button>
            <DInputCheck type="checkbox" ariaLabel="Row" checked={checked} />
          </>
        );
      }

      render(<External />);
      const input = screen.getByRole('checkbox');
      expect(input).not.toBeChecked();

      await userEvent.click(screen.getByText('select all'));

      expect(input).toBeChecked();
    });

    it('keeps indeterminate through a rejected change', async () => {
      function Rejecting() {
        const [checked] = useState(false);
        return (
          <DInputCheck
            type="checkbox"
            ariaLabel="All rows"
            checked={checked}
            indeterminate
            onChange={() => {}}
          />
        );
      }

      render(<Rejecting />);
      const input = screen.getByRole('checkbox');

      await userEvent.click(input);

      // Activating the checkbox clears the DOM flag and the prop never moved,
      // so nothing else would put the mixed state back.
      expect((input as HTMLInputElement).indeterminate).toBe(true);
      expect(input).not.toBeChecked();
    });

    it('drops indeterminate when the parent accepts and clears it', async () => {
      function Accepting() {
        const [state, setState] = useState({ checked: false, indeterminate: true });
        return (
          <DInputCheck
            type="checkbox"
            ariaLabel="All rows"
            checked={state.checked}
            indeterminate={state.indeterminate}
            onChange={(event) => setState({
              checked: event.target.checked,
              indeterminate: false,
            })}
          />
        );
      }

      render(<Accepting />);
      const input = screen.getByRole('checkbox');

      await userEvent.click(input);

      expect((input as HTMLInputElement).indeterminate).toBe(false);
      expect(input).toBeChecked();
    });

    it('hands onChange the indeterminate the browser left', async () => {
      let seen: boolean | undefined;

      render(
        <DInputCheck
          type="checkbox"
          ariaLabel="All rows"
          indeterminate
          onChange={(event) => { seen = event.target.indeterminate; }}
        />,
      );

      await userEvent.click(screen.getByRole('checkbox'));

      expect(seen).toBe(false);
    });

    it('keeps indeterminate working alongside checked', () => {
      render(
        <DInputCheck
          type="checkbox"
          ariaLabel="All rows"
          checked
          indeterminate
          onChange={() => {}}
        />,
      );
      const input = screen.getByRole('checkbox');

      expect((input as HTMLInputElement).indeterminate).toBe(true);
      expect(input).toBeChecked();
    });
  });
});
