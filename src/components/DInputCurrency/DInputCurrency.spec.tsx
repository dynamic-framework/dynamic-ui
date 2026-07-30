import { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import DInputCurrency from '.';
import { DContextProvider } from '../../contexts';

function ControlledDInputCurrency({
  initialValue,
  minValue,
  maxValue,
  onChange,
}: {
  initialValue?: number;
  minValue?: number;
  maxValue?: number;
  onChange: (value?: number) => void;
}) {
  const [value, setValue] = useState<number | undefined>(initialValue);

  return (
    <DInputCurrency
      value={value}
      minValue={minValue}
      maxValue={maxValue}
      onChange={(newValue) => {
        setValue(newValue);
        onChange(newValue);
      }}
    />
  );
}

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
                style="color: var(--bs-input-currency-symbol-color);"
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

  it('clamps the value to maxValue on blur', () => {
    const handleChange = jest.fn();

    render(
      <ControlledDInputCurrency
        initialValue={50}
        minValue={0}
        maxValue={100}
        onChange={handleChange}
      />,
    );

    const input = screen.getByRole('textbox');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: '500' } });
    fireEvent.blur(input);

    expect(handleChange).toHaveBeenLastCalledWith(100);
    expect(input).toHaveValue('100.00');
  });

  it('clamps the value to minValue on blur', () => {
    const handleChange = jest.fn();

    render(
      <ControlledDInputCurrency
        initialValue={50}
        minValue={0}
        maxValue={100}
        onChange={handleChange}
      />,
    );

    const input = screen.getByRole('textbox');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: '-20' } });
    fireEvent.blur(input);

    expect(handleChange).toHaveBeenLastCalledWith(0);
    expect(input).toHaveValue('0.00');
  });

  it('does not clamp the value when minValue/maxValue are not defined', () => {
    const handleChange = jest.fn();

    render(
      <ControlledDInputCurrency
        initialValue={50}
        onChange={handleChange}
      />,
    );

    const input = screen.getByRole('textbox');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: '999999' } });
    fireEvent.blur(input);

    expect(handleChange).toHaveBeenCalledWith(999999);
    expect(input).toHaveValue('999,999.00');
  });

  it('leaves invalid/valid state fully controlled by the consumer', () => {
    render(
      <DInputCurrency
        value={500}
        minValue={0}
        maxValue={100}
        invalid
      />,
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('is-invalid');
  });
});
