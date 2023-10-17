import {
  useCallback,
  useEffect,
  useRef,
} from 'react';

import type { ChangeEvent } from 'react';

import type { InputCheckType } from './interface';

type Props = {
  type: InputCheckType;
  name?: string;
  label?: string;
  isChecked?: boolean;
  id: string;
  isDisabled?: boolean;
  isIndeterminate?: boolean;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function DInputCheck(
  {
    type,
    name,
    label,
    isChecked = false,
    id,
    isDisabled = false,
    isIndeterminate,
    value,
    onChange,
  }: Props,
) {
  const innerRef = useRef<HTMLInputElement>(null);
  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);
  }, [onChange]);

  useEffect(() => {
    if (innerRef.current) {
      innerRef.current.indeterminate = Boolean(isIndeterminate);
    }
  }, [isIndeterminate]);

  useEffect(() => {
    if (innerRef.current) {
      innerRef.current.checked = isChecked;
    }
  }, [isChecked]);

  if (!label) {
    return (
      <input
        ref={innerRef}
        onChange={handleChange}
        className="form-check-input"
        id={id}
        disabled={isDisabled}
        type={type}
        name={name}
        value={value}
      />
    );
  }

  return (
    <div className="form-check">
      <input
        ref={innerRef}
        onChange={handleChange}
        className="form-check-input"
        id={id}
        disabled={isDisabled}
        type={type}
        name={name}
        value={value}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
