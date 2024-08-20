import { useCallback, useId, useMemo } from 'react';
import classNames from 'classnames';

import type { MouseEvent } from 'react';

import DInputSwitch from '../DInputSwitch';

import type { BaseProps } from '../interface';

type Props = BaseProps & {
  id?: string;
  name?: string;
  label: string;
  hint: string;
  checked?: boolean;
  disabled?: boolean;
  onClick?: (isChecked: boolean | undefined) => void;
};

export default function DQuickActionSwitch(
  {
    id: idProp,
    name,
    label,
    hint,
    checked,
    disabled,
    className,
    style,
    dataAttributes,
    onClick,
  }: Props,
) {
  const innerId = useId();
  const id = useMemo(() => idProp || innerId, [idProp, innerId]);

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
      {...dataAttributes}
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
