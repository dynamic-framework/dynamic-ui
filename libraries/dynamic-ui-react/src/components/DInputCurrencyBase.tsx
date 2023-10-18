import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import currency from 'currency.js';

import type {
  ChangeEvent,
  FocusEvent,
  WheelEvent,
} from 'react';
import type { Options } from 'currency.js';

import DInput from './DInput';
import { PREFIX_BS } from './config';

import type {
  CustomStyles,
  EndIcon,
  LabelIcon,
  StartIcon,
} from './interface';

type Props = LabelIcon
& StartIcon
& EndIcon
& {
  id: string;
  name?: string;
  label: string;
  placeholder?: string;
  value?: number;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isLoading?: boolean;
  hint?: string;
  isInvalid?: boolean;
  isValid?: boolean;
  minValue?: number;
  maxValue?: number;
  currencyOptions: Options;
  currencyCode?: string;
  onChange?: (value?: number) => void;
  onBlur?: (value?: number) => void;
  onFocus?: (value?: number) => void;
};

export default function DInputCurrencyBase(
  {
    id,
    name,
    label = '',
    placeholder = '',
    value,
    isDisabled = false,
    isReadOnly = false,
    isLoading = false,
    hint,
    isInvalid = false,
    isValid = false,
    minValue,
    maxValue,
    currencyOptions,
    currencyCode,
    onChange,
    onBlur,
    onFocus,
    ...rest
  }: Props,
) {
  const [internalValueAsNumber, setInternalValueAsNumber] = useState<number | undefined>(value);
  const [internalValueAsFormat, setInternalValueAsFormat] = useState<string>('');
  const [internalType, setInternalType] = useState<'text' | 'number'>('text');
  const [internalIsInvalid, setInternalIsInvalid] = useState<boolean>(false);
  const currencyInputRef = useRef<HTMLInputElement>(null);

  const changeHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    const eventValue = event.target.value;
    const valueAsNumber = eventValue ? parseFloat(eventValue) : undefined;
    const valueAsFormat = valueAsNumber !== undefined
      ? currency(valueAsNumber, { ...currencyOptions, symbol: '' }).format()
      : '';
    setInternalValueAsNumber(valueAsNumber);
    setInternalValueAsFormat(valueAsFormat);
    onChange?.(valueAsNumber);
  }, [currencyOptions, onChange]);

  const blurHandler = useCallback((event: FocusEvent) => {
    event.stopPropagation();
    setInternalType('text');
    setInternalValueAsFormat(
      internalValueAsNumber !== undefined
        ? currency(internalValueAsNumber, { ...currencyOptions, symbol: '' }).format()
        : '',
    );
    onBlur?.(internalValueAsNumber);
  }, [currencyOptions, internalValueAsNumber, onBlur]);

  const focusHandler = useCallback((event: FocusEvent) => {
    event.stopPropagation();
    setInternalType('number');
    setInternalValueAsFormat(
      internalValueAsNumber !== undefined
        ? currency(internalValueAsNumber, { ...currencyOptions, symbol: '' }).format()
        : '',
    );
    onFocus?.(internalValueAsNumber);
  }, [currencyOptions, internalValueAsNumber, onFocus]);

  const wheelHandler = useCallback((event: WheelEvent) => {
    event.stopPropagation();
    currencyInputRef.current?.blur();
  }, []);

  const isValidValue = useCallback((internalValue?: number) => {
    if (internalValue === undefined) {
      return true;
    }
    if (internalType === 'number') {
      return (
        (minValue === undefined || internalValue >= minValue)
        && (maxValue === undefined || internalValue <= maxValue)
      );
    }
    return true;
  }, [internalType, maxValue, minValue]);

  const valueAsType = useMemo(() => {
    if (internalType === 'number') {
      return internalValueAsNumber;
    }
    return internalValueAsFormat;
  }, [internalType, internalValueAsFormat, internalValueAsNumber]);

  useEffect(() => {
    setInternalIsInvalid(!isValidValue(value));
  }, [isValidValue, value]);

  useEffect(() => {
    setInternalValueAsNumber(value);
  }, [value]);

  const generateStyleVariables = useMemo<CustomStyles>(() => ({
    [`--${PREFIX_BS}input-currency-component-symbol-color`]: `var(--${PREFIX_BS}secondary)`,
    [`--${PREFIX_BS}input-currency-symbol-color`]: `var(--${PREFIX_BS}input-currency-component-symbol-color)`,
  }), []);

  const generateSymbolStyleVariables = useMemo(() => ({
    color: `var(--${PREFIX_BS}m-input-currency-symbol-color)`,
  }), []);

  return (
    <DInput
      ref={currencyInputRef}
      style={generateStyleVariables}
      id={id}
      name={name}
      label={label}
      placeholder={placeholder}
      value={valueAsType}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      isLoading={isLoading}
      hint={hint}
      isInvalid={isInvalid || internalIsInvalid}
      isValid={isValid}
      type={internalType}
      innerInputMode="decimal"
      pattern="^[0-9]"
      onChange={changeHandler}
      onBlur={blurHandler}
      onFocus={focusHandler}
      onWheel={wheelHandler}
      inputStart={(
        <span
          slot="input-start"
          style={generateSymbolStyleVariables}
        >
          {currencyCode || currencyOptions.symbol}
        </span>
      )}
      {...rest}
    />
  );
}
