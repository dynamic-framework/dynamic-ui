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
    class="df-field"
    style="--df-input-currency-component-symbol-color: var(--df-secondary); --df-input-currency-symbol-color: var(--df-input-currency-component-symbol-color);"
  >
    <label
      class="df-label"
      for="currencyTest"
    >
      labelTest
    </label>
    <div
      class="df-input-group"
    >
      <div
        class="df-input-group-addon"
        id="currencyTestInputStart"
      >
        <span
          slot="input-start"
          style="color: var(--df-input-currency-symbol-color);"
        >
          $
        </span>
      </div>
      <input
        aria-describedby="currencyTestInputStart"
        class="df-input"
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
