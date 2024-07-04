import { useCallback } from 'react';
import classNames from 'classnames';

import DIcon from '../DIcon';
import { BaseProps } from '../interface';

type Props = BaseProps & {
  field: string,
  label: string,
  value?: string,
  onChange: (value: string) => void,
};

export default function DTableHead(
  {
    className,
    style,
    field,
    label,
    value = '',
    onChange,
  }: Props,
) {
  const handleOnChange = useCallback(() => {
    if (value === field) {
      return onChange(`-${field}`);
    }

    if (value === `-${field}`) {
      return onChange('');
    }

    return onChange(field);
  }, [field, value, onChange]);

  return (
    <th
      style={style}
      className={classNames('d-table-head', className)}
    >
      <button
        type="button"
        onClick={handleOnChange}
      >
        {label}
        {value && value.includes(field) && (
          <DIcon
            icon={value === field ? 'arrow-up' : 'arrow-down'}
          />
        )}
      </button>
    </th>
  );
}
