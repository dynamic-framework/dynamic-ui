/* eslint-disable react/jsx-props-no-spreading */
import {
  ComponentProps, Ref, forwardRef, useImperativeHandle,
} from 'react';
import { DInput } from './proxies';

type MDatePickerInputProps = {
  value?: string;
  onEventClick?: () => void;
} & Omit<ComponentProps<typeof DInput>,
| 'type'
| 'isReadOnly'
| 'onEventIconEndClick'
| 'value'
>;

function DDatePickerInput(
  {
    value,
    onEventClick,
    innerId,
    iconEnd,
    ...props
  }: MDatePickerInputProps,
  ref: Ref<unknown>,
) {
  useImperativeHandle(ref, () => ({}), []);
  return (
    <div
      role="button"
      onClick={onEventClick}
      onKeyDown={() => {}}
      tabIndex={-1}
    >
      <DInput
        isReadOnly
        type="text"
        innerId={innerId}
        value={value}
        onEventIconEndClick={onEventClick}
        iconEnd={iconEnd}
        {...props}
      />
    </div>
  );
}

export default forwardRef(DDatePickerInput);
