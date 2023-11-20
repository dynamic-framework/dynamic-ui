import { useCallback, useEffect, useRef } from 'react';
import classNames from 'classnames';

import type { ChangeEvent } from 'react';

import type { BaseProps } from '../interface';

type Props = BaseProps & {
  id: string;
  name: string;
  value: string;
  line1: string;
  line2: string;
  selected?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function DQuickActionSelect(
  {
    id,
    name,
    value,
    line1,
    line2,
    className,
    style,
    selected = false,
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
      innerRef.current.checked = selected;
    }
  }, [selected]);

  return (
    <label
      className={classNames('d-quick-action-select', className)}
      htmlFor={id}
      style={style}
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
