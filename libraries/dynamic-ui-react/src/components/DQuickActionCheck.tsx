import { useCallback } from 'react';
import classNames from 'classnames';

import type { ChangeEvent } from 'react';

import DInputCheck from './DInputCheck';

type Props = {
  id: string;
  name: string;
  value: string;
  line1: string;
  line2: string;
  line3: string;
  className?: string;
  isChecked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function DQuickActionCheck(
  {
    id,
    name,
    value,
    line1,
    line2,
    line3,
    className,
    isChecked,
    onChange,
  }: Props,
) {
  const changeHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    onChange?.(event);
  }, [onChange]);

  return (
    <label
      className={classNames('d-quick-action-check', className)}
      htmlFor={id}
    >
      <DInputCheck
        id={id}
        type="radio"
        name={name}
        value={value}
        isChecked={isChecked}
        onChange={changeHandler}
      />
      <div className="d-quick-action-check-detail">
        <span className="d-quick-action-check-line1">
          {line1}
        </span>
        <span className="d-quick-action-check-line2">
          {line2}
        </span>
      </div>
      <span className="d-quick-action-check-line3">
        {line3}
      </span>
    </label>
  );
}
