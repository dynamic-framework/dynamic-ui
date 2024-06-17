import {
  useState,
  useEffect,
  useCallback,
  useId,
  useMemo,
} from 'react';
import classNames from 'classnames';
import type { ChangeEvent } from 'react';

import type { BaseProps } from '../interface';

type Props =
& BaseProps
& {
  id?: string;
  label?: string;
  ariaLabel?: string;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  onChange?: (isChecked: boolean) => void;
};

export default function DInputSwitch(
  {
    id: idProp,
    label,
    ariaLabel,
    name,
    checked,
    disabled,
    readonly,
    className,
    style,
    onChange,
  }: Props,
) {
  const innerId = useId();
  const id = useMemo(() => idProp || innerId, [idProp, innerId]);
  const [internalIsChecked, setInternalIsChecked] = useState<boolean | undefined>(checked);

  useEffect(() => {
    setInternalIsChecked(checked);
  }, [checked]);

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
        onChange={readonly ? () => false : changeHandler}
        className={classNames('form-check-input', className)}
        style={style}
        type="checkbox"
        role="switch"
        checked={internalIsChecked}
        disabled={disabled}
        aria-label={ariaLabel}
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
