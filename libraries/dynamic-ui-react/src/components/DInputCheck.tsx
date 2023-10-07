import {
  ChangeEvent,
  useCallback,
  useState,
} from 'react';
import { FormCheckType } from '../interfaces/DInputCheckInterface';

type Props = {
  type: FormCheckType;
  name?: string;
  label?: string;
  isChecked?: boolean;
  id: string;
  isDisabled?: boolean;
  isIndeterminate?: boolean;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function DInputCheck({
  label,
  id,
  isChecked = false,
  isDisabled = false,
  onChange,
  ...rest
}: Props) {
  const [internalChecked, setInternalChecked] = useState<boolean>(isChecked);
  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setInternalChecked(checked);
    onChange?.(event);
  }, [onChange]);

  if (!label) {
    return (
      <input
        onChange={(event) => handleChange(event)}
        className="form-check-input"
        id={id}
        checked={internalChecked}
        disabled={isDisabled}
        {...rest}
      />
    );
  }

  return (
    <div className="form-check">
      <input
        onChange={(event) => handleChange(event)}
        className="form-check-input"
        id={id}
        checked={internalChecked}
        disabled={isDisabled}
        {...rest}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
