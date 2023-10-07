import {
  ChangeEvent,
  useEffect,
  useState,
} from 'react';
import DInput from './DInput';
import { LabelIcon } from '../interfaces/component-interface';

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
  onChange?: (event: ChangeEvent) => void;
  onClick?: (newValue: string | undefined) => void;
};

export default function DInputSearch({
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
}: Props) {
  const [innerValue, setInnerValue] = useState(value);

  useEffect(() => {
    setInnerValue(value);
  }, [value]);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setInnerValue(event.target.value);
    onChange?.(event);
  };

  const clickHandler = () => {
    onClick?.(innerValue);
  };

  return (
    <DInput
      id={id}
      name={name}
      label={label}
      placeholder={placeholder}
      value={innerValue}
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
