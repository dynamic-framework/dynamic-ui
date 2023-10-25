import {
  useState,
  useEffect,
  useCallback,
} from 'react';
import classNames from 'classnames';

import type { ChangeEvent } from 'react';
import type { BaseProps } from '../interface';

type Props =
& BaseProps
& {
  label?: string;
  id: string;
  name?: string;
  isChecked?: boolean;
  isDisabled?: boolean;
  isReadonly?: boolean;
  onChange?: (isChecked: boolean) => void;
};

export default function DInputSwitch(
  {
    label,
    id,
    name,
    isChecked,
    isDisabled,
    isReadonly,
    className,
    style,
    onChange,
  }: Props,
) {
  const [internalIsChecked, setInternalIsChecked] = useState<boolean | undefined>(isChecked);

  useEffect(() => {
    setInternalIsChecked(isChecked);
  }, [isChecked]);

  const changeHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.checked;
    setInternalIsChecked(value);
    onChange?.(value);
  }, [onChange]);

  return (
    <div className="form-check form-switch">
      <input
        id={id}
        name={name}
        onChange={isReadonly ? () => false : changeHandler}
        className={classNames('form-check-input', className)}
        style={style}
        type="checkbox"
        role="switch"
        checked={internalIsChecked}
        disabled={isDisabled}
      />
      {label && (
        <label
          className="form-check-label"
          htmlFor={id}
        >
          {label}
        </label>
      )}
    </div>
  );
}
