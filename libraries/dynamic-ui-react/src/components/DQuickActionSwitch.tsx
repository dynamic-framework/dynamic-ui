import { useCallback } from 'react';

import type { MouseEvent } from 'react';

import DInputSwitch from './DInputSwitch';

type Props = {
  id: string;
  name?: string;
  label: string;
  hint: string;
  isChecked?: boolean;
  isDisabled?: boolean;
  onClick?: (isChecked: boolean | undefined) => void;
};

export default function DQuickActionSwitch(
  {
    id,
    name,
    label,
    hint,
    isChecked,
    isDisabled,
    onClick,
  }: Props,
) {
  const clickHandler = useCallback((event: MouseEvent) => {
    event.stopPropagation();
    onClick?.(isChecked);
  }, [isChecked, onClick]);

  return (
    <button
      className="d-quick-action-switch"
      type="button"
      onClick={clickHandler}
    >
      <div className="d-quick-action-switch-content">
        <DInputSwitch
          id={id}
          name={name}
          isDisabled={isDisabled}
          isChecked={isChecked}
          isReadonly
        />
        <label
          className="d-quick-action-switch-label"
          htmlFor={id}
        >
          {label}
        </label>
      </div>
      <div className="d-quick-action-switch-hint">
        {hint}
      </div>
    </button>
  );
}
