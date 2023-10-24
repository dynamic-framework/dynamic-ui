import { forwardRef, useImperativeHandle } from 'react';

import type { ComponentProps, Ref } from 'react';

import DInput from './DInput';

type Props = {
  value?: string;
  onClick?: () => void;
} & Omit<ComponentProps<typeof DInput>,
| 'type'
| 'isReadOnly'
| 'onIconEndClick'
| 'value'
>;

function DDatePickerInput(
  {
    value,
    onClick,
    id,
    iconEnd,
    ...props
  }: Props,
  ref: Ref<unknown>,
) {
  useImperativeHandle(ref, () => ({}), []);
  return (
    <div
      role="button"
      onClick={onClick}
      onKeyDown={() => {}}
      tabIndex={-1}
    >
      <DInput
        readOnly
        type="text"
        id={id}
        value={value}
        onIconEndClick={onClick}
        iconEnd={iconEnd}
        {...props}
      />
    </div>
  );
}

const ForwardedDDatePickerInput = forwardRef(DDatePickerInput);
ForwardedDDatePickerInput.displayName = 'DDatePickerInput';
export default ForwardedDDatePickerInput;
