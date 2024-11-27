import classNames from 'classnames';

import type { ComponentProps } from 'react';

import DInput from '../DInput';

import type { BaseProps } from '../interface';

type Props =
& BaseProps
& {
  value?: string;
  onChange?: (value?: string) => void;
} & Omit<ComponentProps<typeof DInput>,
| 'type'
| 'isReadOnly'
| 'onChange'
| 'value'
>;

export default function DDatePickerTime(
  {
    value,
    onChange,
    id,
    label,
    className,
    style,
    ...props
  }: Props,
) {
  return (
    <div
      className={classNames(
        'd-flex align-items-center gap-2 flex-column d-datepicker-time',
        className,
      )}
      style={style}
    >
      {label && (
        <label
          htmlFor={id}
          className="d-datepicker-time-label"
        >
          {label}
        </label>
      )}
      <DInput
        className="w-100"
        {...onChange && {
          onChange,
        }}
        type="time"
        id={id}
        value={value}
        {...props}
      />
    </div>
  );
}
