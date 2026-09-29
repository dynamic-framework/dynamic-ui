import { StrictMode, useState } from 'react';
import {
  act,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import type { Options } from 'currency.js';
import useInputCurrency from '../useInputCurrency';

const MAX = 3000000;
const STABLE_OPTIONS: Options = {
  symbol: '$', decimal: ',', separator: '.', precision: 2,
};

type WidgetProps = {
  initial?: number;
  clamp?: boolean;
  inlineOptions?: boolean;
  onChangeSpy: jest.Mock;
};

let setAmountFromOutside: (value?: number) => void = () => {};
let rerenderParent: () => void = () => {};

function Widget({
  initial, clamp, inlineOptions = false, onChangeSpy,
}: WidgetProps) {
  const [amount, setAmount] = useState<number | undefined>(initial);
  const [, force] = useState(0);
  setAmountFromOutside = setAmount;
  rerenderParent = () => force((n) => n + 1);
  const options = inlineOptions
    ? {
      symbol: '$', decimal: ',', separator: '.', precision: 2,
    }
    : STABLE_OPTIONS;
  const {
    inputRef,
    innerValue,
    innerType,
    isOverMax,
    isUnderMin,
    handleOnFocus,
    handleOnChange,
    handleOnBlur,
  } = useInputCurrency(
    options,
    amount,
    undefined,
    (value) => {
      onChangeSpy(value);
      setAmount(value);
    },
    undefined,
    undefined,
    0,
    MAX,
    clamp,
  );
  return (
    <>
      <input
        aria-label="Monto"
        ref={inputRef}
        type={innerType}
        value={innerValue}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onChange={(event) => handleOnChange(event.target.value)}
      />
      <output data-testid="amount">{String(amount)}</output>
      <output data-testid="flags">{`${String(isOverMax)}/${String(isUnderMin)}`}</output>
    </>
  );
}

const input = () => screen.getByLabelText<HTMLInputElement>('Monto');
const amount = () => screen.getByTestId('amount').textContent;
const flags = () => screen.getByTestId('flags').textContent;

describe('useInputCurrency range handling', () => {
  describe.each([
    ['stable options', false],
    ['inline options', true],
  ])('with clamp (default) and %s', (_, inlineOptions) => {
    it('clamps a value that arrives on mount and reports it', () => {
      const onChangeSpy = jest.fn();
      render(<Widget initial={5000000} inlineOptions={inlineOptions} onChangeSpy={onChangeSpy} />);
      expect(input().value).toBe('3.000.000,00');
      expect(amount()).toBe('3000000');
      expect(onChangeSpy).toHaveBeenCalledWith(3000000);

      act(() => rerenderParent());
      expect(input().value).toBe('3.000.000,00');
    });

    it('clamps a value that arrives after mount and reports it', () => {
      const onChangeSpy = jest.fn();
      render(<Widget inlineOptions={inlineOptions} onChangeSpy={onChangeSpy} />);
      act(() => setAmountFromOutside(5000000));
      expect(input().value).toBe('3.000.000,00');
      expect(amount()).toBe('3000000');
      expect(onChangeSpy).toHaveBeenLastCalledWith(3000000);
    });

    it('keeps the typed number while editing and clamps it on blur', () => {
      const onChangeSpy = jest.fn();
      render(<Widget inlineOptions={inlineOptions} onChangeSpy={onChangeSpy} />);
      fireEvent.focus(input());
      fireEvent.change(input(), { target: { value: '5000000' } });
      expect(input().value).toBe('5000000');
      expect(flags()).toBe('true/false');

      fireEvent.blur(input());
      expect(input().value).toBe('3.000.000,00');
      expect(amount()).toBe('3000000');
      expect(onChangeSpy).toHaveBeenLastCalledWith(3000000);
      expect(flags()).toBe('false/false');
    });
  });

  describe('with clamp={false}', () => {
    it('keeps an out-of-range value on mount, after mount and on blur, and flags it', () => {
      const onChangeSpy = jest.fn();
      render(<Widget initial={5000000} clamp={false} inlineOptions onChangeSpy={onChangeSpy} />);
      expect(input().value).toBe('5.000.000,00');
      expect(amount()).toBe('5000000');
      expect(onChangeSpy).not.toHaveBeenCalled();
      expect(flags()).toBe('true/false');

      act(() => rerenderParent());
      expect(input().value).toBe('5.000.000,00');

      act(() => setAmountFromOutside(-10));
      expect(input().value).toBe('-10,00');
      expect(flags()).toBe('false/true');

      fireEvent.focus(input());
      fireEvent.change(input(), { target: { value: '4000000' } });
      fireEvent.blur(input());
      expect(input().value).toBe('4.000.000,00');
      expect(amount()).toBe('4000000');
      expect(flags()).toBe('true/false');
    });
  });

  it('does not loop or diverge under StrictMode', () => {
    const onChangeSpy = jest.fn();
    render(
      <StrictMode>
        <Widget initial={5000000} onChangeSpy={onChangeSpy} />
      </StrictMode>,
    );
    expect(input().value).toBe('3.000.000,00');
    expect(amount()).toBe('3000000');
    expect(onChangeSpy).toHaveBeenCalledTimes(1);
    expect(onChangeSpy).toHaveBeenCalledWith(3000000);
  });

  it('reformats the value when the formatting options change', () => {
    function WithOptions({ decimal }: { decimal: string }) {
      const { innerValue } = useInputCurrency(
        {
          symbol: '$', decimal, separator: decimal === ',' ? '.' : ',', precision: 2,
        },
        1234.5,
      );
      return <output data-testid="formatted">{innerValue}</output>;
    }
    const { rerender } = render(<WithOptions decimal="," />);
    expect(screen.getByTestId('formatted').textContent).toBe('1.234,50');
    rerender(<WithOptions decimal="." />);
    expect(screen.getByTestId('formatted').textContent).toBe('1,234.50');
  });
});
