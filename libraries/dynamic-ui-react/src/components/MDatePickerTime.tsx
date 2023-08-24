/* eslint-disable react/jsx-props-no-spreading */
import { ComponentProps, FormEventHandler } from 'react';
import { MInput } from './proxies';

export type InnerDatePickerTimeProps = {
  value?: string | number ;
  onChange?: ((value: string) => void) & FormEventHandler<HTMLMInputElement>
};

type MDatePickerTimeProps = InnerDatePickerTimeProps & Omit<ComponentProps<typeof MInput>,
| 'type'
| 'isReadOnly'
| 'onMChange'
| 'value'
>;

export default function MDatePickerTime({
  value,
  onChange,
  mId,
  label,
  ...props
}: MDatePickerTimeProps) {
  return (
    <div className="p-3 d-flex align-items-center gap-2 flex-column m-datepicker-time">
      { label && (
        <p className="fw-bold text-light-emphasis small">{label}</p>
      )}
      <MInput
        {...onChange && {
          onMChange: (time) => onChange(time as unknown as string),
        }}
        type="time"
        mId={mId}
        value={value}
        {...props}
      />
    </div>
  );
}
