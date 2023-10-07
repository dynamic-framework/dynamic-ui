import {
  useState,
  useEffect,
  ChangeEvent,
} from 'react';

interface DInputSwitchProps {
  label?: string;
  id: string;
  name?: string;
  isChecked?: boolean;
  isDisabled?: boolean;
  isReadonly?: boolean;
  onChange?: (isChecked: boolean) => void;
}

export default function DInputSwitch({
  label,
  id,
  name,
  isChecked,
  isDisabled,
  isReadonly,
  onChange,
}: DInputSwitchProps) {
  const [internalIsChecked, setInternalIsChecked] = useState<boolean | undefined>(isChecked);

  useEffect(() => {
    setInternalIsChecked(isChecked);
  }, [isChecked]);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked;
    setInternalIsChecked(value);
    onChange?.(value);
  };

  return (
    <div className="form-check form-switch">
      <input
        id={id}
        name={name}
        onChange={isReadonly ? () => false : changeHandler}
        className="form-check-input"
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
