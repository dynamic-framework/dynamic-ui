import { useCallback } from 'react';
import classNames from 'classnames';

import type { MouseEvent } from 'react';

import DInputSwitch from '../DInputSwitch';

import type { BaseProps } from '../interface';

type Props = BaseProps & {
  id: string;
  name?: string;
  label: string;
  hint: string;
  checked?: boolean;
  disabled?: boolean;
  onClick?: (isChecked: boolean | undefined) => void;
};

export default function DQuickActionSwitch(
  {
    id,
    name,
    label,
    hint,
    checked,
    disabled,
    className,
    style,
    onClick,
  }: Props,
) {
  const clickHandler = useCallback((event: MouseEvent) => {
    event.stopPropagation();
    onClick?.(checked);
  }, [checked, onClick]);

  return (
    <button
      className={classNames('d-quick-action-switch', className)}
      type="button"
      onClick={clickHandler}
      style={style}
    >
      <div className="d-quick-action-switch-content">
        <DInputSwitch
          id={id}
          name={name}
          disabled={disabled}
          checked={checked}
          readonly
          label={label}
        />
      </div>
      <div className="d-quick-action-switch-hint">
        {hint}
      </div>
    </button>
  );
}
