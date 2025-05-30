import { fireEvent, render, screen } from '@testing-library/react';
import DInputCurrency from '.';
import { DContextProvider } from '../../contexts';

describe('<DInputCurrency />', () => {
  it('should render base currency', () => {
    const props = {
      id: 'currencyTest',
      label: 'labelTest',
      value: 0,
      placeholder: undefined,
    };

    const { container } = render(
      <DContextProvider>
        <DInputCurrency
          {...props}
        />
      </DContextProvider>,
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          style="--bs-input-currency-component-symbol-color: var(--bs-secondary); --bs-input-currency-symbol-color: var(--bs-input-currency-component-symbol-color);"
        >
          <label
            for="currencyTest"
          >
            labelTest
          </label>
          <div
            class="input-group"
          >
            <div
              class="input-group-text"
              id="currencyTestInputStart"
            >
              <span
                slot="input-start"
              >
                $
              </span>
            </div>
            <input
              aria-describedby="currencyTestInputStart"
              class="form-control"
              id="currencyTest"
              inputmode="decimal"
              type="text"
              value="0.00"
            />
          </div>
        </div>
      </div>
    `);
  });

  it('renders with default currency symbol', () => {
    render(
      <DInputCurrency />,
    );

    expect(screen.getByText('$')).toBeInTheDocument();
  });

  it('renders with custom currency code', () => {
    render(
      <DInputCurrency currencyCode="€" />,
    );

    expect(screen.getByText('€')).toBeInTheDocument();
  });

  it('fires onChange with correct numeric value', () => {
    const handleChange = jest.fn();

    render(
      <DInputCurrency onChange={handleChange} />,
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '123.45' } });
    expect(handleChange).toHaveBeenCalledWith(123.45);
  });

  it('calls onFocus and onBlur handlers', () => {
    const handleFocus = jest.fn();
    const handleBlur = jest.fn();

    render(
      <DInputCurrency
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={1234.56}
      />,
    );

    const input = screen.getByRole('textbox');
    fireEvent.focus(input);
    fireEvent.blur(input);
    expect(handleFocus).toHaveBeenCalled();
    expect(handleBlur).toHaveBeenCalled();

    expect(input).toHaveValue('1,234.56');
  });
});
