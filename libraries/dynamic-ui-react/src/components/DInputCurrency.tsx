import { forwardRef } from 'react';

import type {
  ForwardedRef,
  ComponentPropsWithoutRef,
} from 'react';

import DInput from './DInput';
import useInputCurrency from '../hooks/useInputCurrency';
import { useDContext } from '../contexts';

import type { Merge } from '../types';

type NonDInputProps = {
  value?: number;
  minValue?: number;
  maxValue?: number;
  currencyCode?: string;
  onChange?: (value?: number) => void;
};

type Props = Merge<Omit<ComponentPropsWithoutRef<typeof DInput>, 'value' | 'type' | 'onChange'>, NonDInputProps>;

function DInputCurrency(
  {
    value,
    minValue,
    maxValue,
    currencyCode,
    invalid,
    onFocus,
    onBlur,
    onChange,
    ...props
  }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const { currency: currencyOptions } = useDContext();
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
      {...props}
    />
  );
}

const ForwardedDInputCurrencyBase = forwardRef<HTMLInputElement, Props>(DInputCurrency);
ForwardedDInputCurrencyBase.displayName = 'DInputCurrency';
export default ForwardedDInputCurrencyBase;
