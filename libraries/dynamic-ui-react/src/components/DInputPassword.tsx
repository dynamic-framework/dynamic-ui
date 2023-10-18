import { useCallback, useState } from 'react';

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
  onChange?: (value: string) => void;
};

export default function DInputPassword(
  {
    id,
    name,
    label = '',
    placeholder = '',
    value = '',
    isDisabled = false,
    isReadOnly = false,
    isLoading = false,
    hint,
    isInvalid = false,
    isValid = false,
    onChange,
    ...rest
  }: Props,
) {
  const [visible, setVisible] = useState(false);

  const changeHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  }, [onChange]);

  const visibilityHandler = useCallback(() => {
    setVisible((prevVisible) => !prevVisible);
  }, []);

  return (
    <DInput
      id={id}
      name={name}
      label={label}
      placeholder={placeholder}
      value={value}
      iconEnd={!visible ? 'eye-slash' : 'eye'}
      type={!visible ? 'password' : 'text'}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      isLoading={isLoading}
      hint={hint}
      isInvalid={isInvalid}
      isValid={isValid}
      onChange={changeHandler}
      onIconEndClick={visibilityHandler}
      {...rest}
    />
  );
}
