import { fireEvent, render, screen } from '@testing-library/react';
import DInputCurrencyBase from './DInputCurrencyBase';

const currencyOptions = {
  symbol: '£',
  decimal: '.',
  separator: ',',
};

describe('<DInputCurrencyBase />', () => {
  it('should render base currency', () => {
    const props = {
      id: 'currencyTest',
      label: 'labelTest',
      value: 0,
      placeholder: undefined,
      currencyOptions: {
        separator: ',',
        symbol: '$',
      },
    };

    const { container } = render(
      <DInputCurrencyBase
        {...props}
      />,
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

  it('renders with provided currency symbol', () => {
    render(
      <DInputCurrencyBase currencyOptions={currencyOptions} />,
    );

    expect(screen.getByText('£')).toBeInTheDocument();
  });

  it('renders with currencyCode override', () => {
    render(
      <DInputCurrencyBase
        currencyOptions={currencyOptions}
        currencyCode="¥"
      />,
    );

    expect(screen.getByText('¥')).toBeInTheDocument();
  });

  it('calls onChange with correct numeric value', () => {
    const handleChange = jest.fn();

    render(
      <DInputCurrencyBase
        currencyOptions={currencyOptions}
        onChange={handleChange}
      />,
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '999.99' } });
    expect(handleChange).toHaveBeenCalledWith(999.99);
  });

  it('triggers onFocus and onBlur', () => {
    const handleFocus = jest.fn();
    const handleBlur = jest.fn();

    render(
      <DInputCurrencyBase
        currencyOptions={currencyOptions}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />,
    );

    const input = screen.getByRole('textbox');
    fireEvent.focus(input);
    fireEvent.blur(input);
    expect(handleFocus).toHaveBeenCalled();
    expect(handleBlur).toHaveBeenCalled();
  });
});
