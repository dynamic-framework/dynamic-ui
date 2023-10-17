import { useCallback, useEffect, useRef } from 'react';

import type { ChangeEvent } from 'react';

type Props = {
  id: string;
  name: string;
  value: string;
  line1: string;
  line2: string;
  isSelected?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function DQuickActionSelect(
  {
    id,
    name,
    value,
    line1,
    line2,
    isSelected = false,
    onChange,
  }: Props,
) {
  const innerRef = useRef<HTMLInputElement>(null);
  const changeHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    onChange?.(event);
  }, [onChange]);

  useEffect(() => {
    if (innerRef.current) {
      innerRef.current.checked = isSelected;
    }
  }, [isSelected]);

  return (
    <label
      className="d-quick-action-select"
      htmlFor={id}
    >
      <input
        ref={innerRef}
        id={id}
        type="radio"
        name={name}
        value={value}
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
