import {
  useCallback,
  useEffect,
  useRef,
} from 'react';
import classNames from 'classnames';

import type { ChangeEvent } from 'react';

import type { BaseProps, InputCheckType } from '../interface';

type Props =
& BaseProps
& {
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
    className,
    style,
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
        className={classNames('form-check-input', className)}
        style={style}
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
        className={classNames('form-check-input', className)}
        style={style}
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
