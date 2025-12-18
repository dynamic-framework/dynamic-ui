/* eslint-disable max-len */
import { act, renderHook } from '@testing-library/react';
import type { Options } from 'currency.js';
import useInputCurrency from '../useInputCurrency';

const currencyOptions: Options = {
  symbol: '$',
  decimal: '.',
  separator: ',',
  precision: 2,
};

describe('useInputCurrency', () => {
  it('should initialize with formatted value', () => {
    const { result } = renderHook(() => useInputCurrency(currencyOptions, 1234.56));
    expect(result.current.innerValue).toBe('1,234.56');
    expect(result.current.innerType).toBe('text');
  });

  it('should switch type to number on focus and back to text on blur', () => {
    const { result } = renderHook(() => useInputCurrency(currencyOptions, 100));
    act(() => {
      result.current.handleOnFocus({ stopPropagation: jest.fn() } as never);
    });
    expect(result.current.innerType).toBe('number');

    act(() => {
      result.current.handleOnBlur({ stopPropagation: jest.fn() } as never);
    });
    expect(result.current.innerType).toBe('text');
  });

  it('should call onChange callback when value changes', () => {
    const onChange = jest.fn();
    const { result } = renderHook(() => useInputCurrency(currencyOptions, 100, undefined, onChange));
    act(() => {
      result.current.handleOnChange('300');
    });
    expect(onChange).toHaveBeenCalledWith(300);
  });

  it('should handle empty string and undefined as value', () => {
    const { result } = renderHook(() => useInputCurrency(currencyOptions));

    act(() => {
      result.current.handleOnChange('');
    });
    expect(result.current.innerValue).toBe('');

    act(() => {
      result.current.handleOnChange(undefined);
    });
    expect(result.current.innerValue).toBe('');
  });

  it('should update inner value when prop value changes', () => {
    const { result, rerender } = renderHook(
      ({ value }) => useInputCurrency(currencyOptions, value),
      { initialProps: { value: 100 } },
    );
    expect(result.current.innerValue).toBe('100.00');

    rerender({ value: 200 });
    expect(result.current.innerValue).toBe('200.00');
  });

  it('should generate style variables', () => {
    const { result } = renderHook(() => useInputCurrency(currencyOptions, 100));
    expect(result.current.generateStyleVariables).toHaveProperty('--bs-input-currency-component-symbol-color');
    expect(result.current.generateSymbolStyleVariables).toHaveProperty('color');
  });

  it('should call onFocus callback when input is focused', () => {
    const onFocus = jest.fn();
    const { result } = renderHook(() => useInputCurrency(currencyOptions, 100, onFocus));
    const event = { stopPropagation: jest.fn() } as never;
    act(() => {
      result.current.handleOnFocus(event);
    });
    expect(onFocus).toHaveBeenCalledWith(event);
  });

  it('should call onBlur callback when input is blurred', () => {
    const onBlur = jest.fn();
    const { result } = renderHook(() => useInputCurrency(currencyOptions, 100, undefined, undefined, onBlur));
    const event = { stopPropagation: jest.fn() } as never;
    act(() => {
      result.current.handleOnBlur(event);
    });
    expect(onBlur).toHaveBeenCalledWith(event);
  });

  it('inputRef should have a current property (RefObject)', () => {
    const { result } = renderHook(() => useInputCurrency(currencyOptions, 100));
    expect(result.current.inputRef).toHaveProperty('current');
  });
});
