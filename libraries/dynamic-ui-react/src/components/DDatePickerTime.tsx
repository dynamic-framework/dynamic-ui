/* eslint-disable react/jsx-props-no-spreading */
import { ComponentProps, FormEventHandler } from 'react';
import { DInput } from './proxies';

type Props = {
  value?: string | number ;
  onEventChange?: ((value: string) => void) & FormEventHandler<HTMLDInputElement>
} & Omit<ComponentProps<typeof DInput>,
| 'type'
| 'isReadOnly'
| 'onEventChange'
| 'value'
>;

export default function DDatePickerTime({
  value,
  onEventChange,
  innerId,
  label,
  ...props
}: Props) {
  return (
    <div className="d-flex align-items-center gap-2 flex-column d-datepicker-time">
      {label && (
        <p className="d-datepicker-time-label">{label}</p>
      )}
      <DInput
        {...onEventChange && {
          onEventChange: (time) => onEventChange(time as unknown as string),
        }}
        type="time"
        innerId={innerId}
        value={value}
        {...props}
      />
    </div>
  );
}
