import type { ComponentProps } from 'react';

import DInput from '../DInput';

type Props = {
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
    ...props
  }: Props,
) {
  return (
    <div className="d-flex align-items-center gap-2 flex-column d-datepicker-time">
      {label && (
        <p className="d-datepicker-time-label">{label}</p>
      )}
      <DInput
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
