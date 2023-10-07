import { ChangeEvent } from 'react';

type Props = {
  id: string;
  name: string;
  value: string;
  line1: string;
  line2: string;
  isSelected?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function DQuickActionSelect({
  id,
  name,
  value,
  line1,
  line2,
  isSelected,
  onChange,
}: Props) {
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);
  };

  return (
    <label
      className="d-quick-action-select"
      htmlFor={id}
    >
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={isSelected}
        onChange={changeHandler}
      />
      <span className="d-quick-action-select-line1">
        {line1}
      </span>
      <span className="d-quick-action-select-line2">
        {line2}
      </span>
    </label>
  );
}
