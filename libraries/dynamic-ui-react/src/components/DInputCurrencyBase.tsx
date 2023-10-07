import {
  ChangeEvent,
  FocusEvent,
  WheelEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import currency from 'currency.js';
import type { Options } from 'currency.js';
import { PREFIX_BS } from '../interfaces/component-config';
import {
  CustomStyles,
  EndIcon,
  LabelIcon,
  StartIcon,
} from '../interfaces/component-interface';
import DInput from './DInput';

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
  onChange?: (value: number | undefined) => void;
  onBlur?: (value: number | undefined) => void;
  onFocus?: (value: number | undefined) => void;
};

export default function DInputCurrencyBase({
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
}: Props) {
  const [internalValueAsNumber, setInternalValueAsNumber] = useState<number | undefined>(value);
  const [internalValueAsFormat, setInternalValueAsFormat] = useState<string>('');
  const [internalType, setInternalType] = useState<'text' | 'number'>('text');
  const [internalIsInvalid, setInternalIsInvalid] = useState<boolean>(false);
  const currencyBaseInputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (event: ChangeEvent) => {
    event.stopPropagation();
    const eventDetail = event.target;
    const newValueAsNumber = typeof eventDetail === 'string' && eventDetail !== ''
      ? parseFloat(eventDetail)
      : undefined;
    const newValueAsFormat = newValueAsNumber !== undefined
      ? currency(newValueAsNumber, { ...currencyOptions, symbol: '' }).format()
      : '';
    setInternalValueAsNumber(newValueAsNumber);
    setInternalValueAsFormat(newValueAsFormat);
    onChange?.(newValueAsNumber);
  };

  const blurHandler = (event: FocusEvent) => {
    event.stopPropagation();
    setInternalType('text');
    const newValueAsFormat = internalValueAsNumber !== undefined
      ? currency(internalValueAsNumber, { ...currencyOptions, symbol: '' }).format()
      : '';
    setInternalValueAsFormat(newValueAsFormat);
    onBlur?.(internalValueAsNumber);
  };

  const focusHandler = (event: FocusEvent) => {
    event.stopPropagation();
    setInternalType('number');
    const newValueAsFormat = internalValueAsNumber !== undefined
      ? currency(internalValueAsNumber, { ...currencyOptions, symbol: '' }).format()
      : '';
    setInternalValueAsFormat(newValueAsFormat);
    onFocus?.(internalValueAsNumber);
  };

  const wheelHandler = (event: WheelEvent) => {
    event.stopPropagation();
    currencyBaseInputRef.current?.blur();
  };

  const isValidValue = useCallback((internalValue?: number) => {
    if (internalValue === undefined) {
      return true;
    }

    if (internalType === 'number') {
      return (
        (minValue !== undefined ? internalValue >= minValue : true)
        && (maxValue !== undefined ? internalValue <= maxValue : true)
      );
    }

    return true;
  }, [internalType, maxValue, minValue]);

  const valueAsType = () => {
    if (internalType === 'number') {
      return internalValueAsNumber;
    }
    return internalValueAsFormat;
  };

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
      ref={currencyBaseInputRef}
      style={generateStyleVariables}
      id={id}
      name={name}
      label={label}
      placeholder={placeholder}
      value={valueAsType()}
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
