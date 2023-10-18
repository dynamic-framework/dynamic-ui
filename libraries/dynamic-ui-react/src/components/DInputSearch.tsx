import {
  useCallback,
  useEffect,
  useState,
} from 'react';

import type { ChangeEvent } from 'react';

import DInput from './DInput';

import type { LabelIcon } from './interface';

type Props = LabelIcon & {
  id: string;
  name?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isLoading?: boolean;
  hint?: string;
  isInvalid?: boolean;
  isValid?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (newValue: string | undefined) => void;
};

export default function DInputSearch(
  {
    id,
    name,
    label,
    placeholder,
    value,
    isDisabled,
    isReadOnly,
    isLoading,
    hint,
    isInvalid,
    isValid,
    onChange,
    onClick,
    ...rest
  }: Props,
) {
  const [internalValue, setInternalValue] = useState(value);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const changeHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setInternalValue(event.target.value);
    onChange?.(event);
  }, [onChange]);

  const clickHandler = useCallback(() => {
    onClick?.(internalValue);
  }, [internalValue, onClick]);

  return (
    <DInput
      id={id}
      name={name}
      label={label}
      placeholder={placeholder}
      value={internalValue}
      iconEnd="search"
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      isLoading={isLoading}
      hint={hint}
      isInvalid={isInvalid}
      isValid={isValid}
      onChange={changeHandler}
      onIconEndClick={clickHandler}
      {...rest}
    />
  );
}
