import { forwardRef } from 'react';

import type {
  ForwardedRef,
  ComponentPropsWithoutRef,
} from 'react';
import type { Options } from 'currency.js';

import DInput from './DInput';
import useInputCurrency from '../hooks/useInputCurrency';

import type { Merge } from '../types';

type NonDInputProps = {
  value?: number;
  minValue?: number;
  maxValue?: number;
  currencyOptions: Options;
  currencyCode?: string;
  onChange?: (value?: number) => void;
};

type Props = Merge<Omit<ComponentPropsWithoutRef<typeof DInput>, 'value' | 'type' | 'onChange'>, NonDInputProps>;

function DInputCurrencyBase(
  {
    value,
    minValue,
    maxValue,
    currencyOptions,
    currencyCode,
    invalid,
    onFocus,
    onBlur,
    onChange,
    ...inputProps
  }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const {
    inputRef,
    innerValue,
    innerType,
    handleOnFocus,
    handleOnChange,
    handleOnBlur,
    handleOnWheel,
    generateStyleVariables,
    generateSymbolStyleVariables,
  } = useInputCurrency(
    currencyOptions,
    value,
    onFocus,
    onChange,
    onBlur,
    ref,
  );

  return (
    <DInput
      ref={inputRef}
      value={innerValue}
      onChange={handleOnChange}
      style={generateStyleVariables}
      inputMode="decimal"
      pattern="^[0-9]"
      type={innerType}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      onWheel={handleOnWheel}
      inputStart={(
        <span
          slot="input-start"
          style={generateSymbolStyleVariables}
        >
          {currencyCode || currencyOptions.symbol}
        </span>
      )}
      {...inputProps}
    />
  );
}

const ForwardedDInputCurrencyBase = forwardRef<HTMLInputElement, Props>(DInputCurrencyBase);
ForwardedDInputCurrencyBase.displayName = 'DInputCurrencyBase';
export default ForwardedDInputCurrencyBase;
