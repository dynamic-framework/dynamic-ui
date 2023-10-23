import {
  useState,
  useEffect,
  useMemo,
  useCallback,
  forwardRef,
} from 'react';

import type {
  ForwardedRef,
  ComponentPropsWithoutRef,
  CSSProperties,
} from 'react';

import DInput from './DInput';
import { PREFIX_BS } from './config';

import type {
  CustomStyles,
} from './interface';
import type { Merge } from '../types';
import useProvidedRefOrCreate from '../hooks/useProvidedRefOrCreate';

type NonDInputProps = {
  value?: number;
  minValue: number;
  maxValue: number;
  onChange?: (value?: number) => void;
};

type Props = Merge<Omit<ComponentPropsWithoutRef<typeof DInput>, 'value' | 'type' | 'onChange'>, NonDInputProps>;

function DInputCounter(
  {
    minValue,
    maxValue,
    value = minValue,
    invalid,
    iconStart = 'dash-square',
    iconEnd = 'plus-square',
    style,
    onChange,
    ...props
  }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const inputRef = useProvidedRefOrCreate(ref as React.RefObject<HTMLInputElement>);
  const [internalIsInvalid, setInternalIsInvalid] = useState(false);
  const [internalValue, setInternalValue] = useState<number>(value);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  useEffect(() => {
    onChange?.(Number(internalValue));
  }, [onChange, internalValue]);

  const handleOnChange = useCallback((newValue?: string) => {
    setInternalValue(Number(newValue || '0'));
  }, []);

  const handleOnIconStartClick = useCallback(() => {
    setInternalValue((prevInternalValue) => {
      const newValue = prevInternalValue - 1;
      return newValue >= minValue ? newValue : minValue;
    });
  }, [minValue]);

  const handleOnIconEndClick = useCallback(() => {
    setInternalValue((prevInternalValue) => {
      const newValue = prevInternalValue + 1;
      return newValue <= maxValue ? newValue : maxValue;
    });
  }, [maxValue]);

  const generateStyleVariables = useMemo<CustomStyles | CSSProperties>(() => ({
    ...style,
    [`--${PREFIX_BS}input-component-form-control-text-align`]: 'center',
  }), [style]);

  const valueString = useMemo(() => (
    internalValue.toString()
  ), [internalValue]);

  useEffect(() => {
    setInternalIsInvalid(!(internalValue >= minValue && internalValue <= maxValue));
  }, [internalValue, minValue, maxValue]);

  return (
    <DInput
      ref={inputRef}
      value={valueString}
      style={generateStyleVariables}
      iconStart={iconStart}
      iconEnd={iconEnd}
      invalid={internalIsInvalid || invalid}
      type="number"
      onChange={handleOnChange}
      onIconStartClick={handleOnIconStartClick}
      onIconEndClick={handleOnIconEndClick}
      {...props}
    />
  );
}

const ForwardedDInputCounter = forwardRef<HTMLInputElement, Props>(DInputCounter);
ForwardedDInputCounter.displayName = 'DInputCounter';
export default ForwardedDInputCounter;
