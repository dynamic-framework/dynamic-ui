import {
  useState,
  useEffect,
  useMemo,
  CSSProperties,
  useCallback,
  ChangeEvent,
} from 'react';
import { PREFIX_BS } from '../interfaces/component-config';
import {
  CustomStyles,
  LabelIcon,
  StartIcon,
} from '../interfaces/component-interface';
import DInput from './DInput';

type Props = LabelIcon
& StartIcon
& {
  id: string;
  name?: string;
  label?: string;
  value: number;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isLoading?: boolean;
  iconEnd?: string;
  hint?: string;
  isInvalid?: boolean;
  isValid?: boolean;
  minValue: number;
  maxValue: number;
  style?: CSSProperties;
  className?: string;
  onChange?: (newNumber: number) => void;
};

export default function DInputCounter({
  id,
  name,
  label = '',
  value,
  isDisabled = false,
  isReadOnly = false,
  isLoading = false,
  iconStart = 'dash-square',
  iconEnd = 'plus-square',
  hint,
  isInvalid = false,
  isValid = false,
  minValue,
  maxValue,
  style,
  className,
  onChange,
  ...rest
}: Props) {
  const [internalIsInvalid, setInternalIsInvalid] = useState(false);
  const [internalValue, setInternalValue] = useState(value);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  useEffect(() => {
    onChange?.(internalValue);
  }, [internalValue, onChange]);

  const changeHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    const newValue = parseInt(event.target.value || '0', 10);
    setInternalValue(newValue);
  }, []);

  const clickHandler = useCallback((action: boolean) => {
    const currentValue = internalValue;
    if (action) {
      const temp = Number(currentValue) + 1;
      setInternalValue(temp <= maxValue ? temp : maxValue);
    } else {
      const temp = Number(currentValue) - 1;
      setInternalValue(temp >= minValue ? temp : minValue);
    }
  }, [internalValue, maxValue, minValue]);

  const generateStyleVariables = useMemo<CustomStyles | CSSProperties>(() => ({
    ...style,
    [`--${PREFIX_BS}input-component-form-control-text-align`]: 'center',
  }), [style]);

  useEffect(() => {
    setInternalIsInvalid(!(internalValue >= minValue && internalValue <= maxValue));
  }, [internalValue, minValue, maxValue]);

  return (
    <DInput
      id={id}
      style={generateStyleVariables}
      className={className}
      name={name}
      label={label}
      value={internalValue}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      isLoading={isLoading}
      hint={hint}
      iconStart={iconStart}
      iconEnd={iconEnd}
      isInvalid={internalIsInvalid || isInvalid}
      isValid={isValid}
      type="number"
      onChange={changeHandler}
      onIconStartClick={() => clickHandler(false)}
      onIconEndClick={() => clickHandler(true)}
      {...rest}
    />
  );
}
