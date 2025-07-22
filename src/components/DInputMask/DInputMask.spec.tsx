import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';

import DInputMask from '.';

const phoneMask = '+7 (___) ___-__-__';

describe('<DInputMask />', () => {
  it('should render my component', () => {
    const input = {
      id: 'inputId',
      label: 'Label',
      placeholder: 'Input',
      mask: '(+56)_ ____ ____',
      replacement: { _: /\d/ },
      showMask: true,
    };

    const { container } = render(
      <DInputMask {...input} />,
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div>
          <label
            for="inputId"
          >
            Label
          </label>
          <div
            class="input-group"
          >
            <input
              class="form-control"
              id="inputId"
              placeholder="Input"
            />
          </div>
        </div>
      </div>
    `);
  });

  it('renders masked input', () => {
    render(
      <DInputMask
        mask={phoneMask}
        replacement={{ _: /\d/ }}
        showMask
      />,
    );

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('+7 (___) ___-__-__');
  });

  it('allows user to input numbers matching the mask', () => {
    render(
      <DInputMask
        mask={phoneMask}
        replacement={{ _: /\d/ }}
      />,
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '+7 (123) 456-78-90' } });
    expect(input).toHaveValue('+7 (123) 456-78-90');
  });

  it('calls onChange handler when typing', () => {
    const handleChange = jest.fn();

    render(
      <DInputMask
        mask={phoneMask}
        replacement={{ _: /\d/ }}
        onChange={handleChange}
      />,
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '+7 (111) 222-33-44' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('forwards ref correctly', () => {
    const ref = { current: null } as React.RefObject<HTMLInputElement | null>;
    render(
      <DInputMask
        mask={phoneMask}
        replacement={{ _: /\d/ }}
        ref={ref}
      />,
    );

    expect(ref.current).not.toBeNull();
    if (ref.current) {
      expect(ref.current.tagName).toBe('INPUT');
    }
  });
});
