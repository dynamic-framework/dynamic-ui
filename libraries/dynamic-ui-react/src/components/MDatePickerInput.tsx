/* eslint-disable react/jsx-props-no-spreading */
import {
  ComponentProps, Ref, forwardRef, useImperativeHandle,
} from 'react';
import { MInput } from './proxies';

export type InnerDatePickerProps = {
  value?: string;
  onClick?: () => void;
};

type MDatePickerInputProps = InnerDatePickerProps & Omit<ComponentProps<typeof MInput>,
| 'type'
| 'isReadOnly'
| 'onMIconEndClick'
| 'value'
>;

function MDatePickerInput({
  value,
  onClick,
  mId,
  iconEnd,
  ...props
}: MDatePickerInputProps, ref: Ref<unknown>) {
  useImperativeHandle(ref, () => ({}), []);
  return (
    <div
      role="button"
      onClick={onClick}
      onKeyDown={() => {}}
      tabIndex={-1}
    >
      <MInput
        isReadOnly
        type="text"
        mId={mId}
        value={value}
        onMIconEndClick={onClick}
        iconEnd={iconEnd}
        {...props}
      />
    </div>
  );
}

export default forwardRef(MDatePickerInput);
