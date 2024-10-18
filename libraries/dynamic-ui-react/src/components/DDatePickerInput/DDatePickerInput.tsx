import { forwardRef } from 'react';

import type { ComponentProps, Ref } from 'react';

import DInput from '../DInput';

import type { BaseProps } from '../interface';

type Props =
& BaseProps
& {
  value?: string;
  onClick?: () => void;
  inputLabel?: string;
  validIcon?: string;
  invalidIcon?: string;
} & Omit<
ComponentProps<typeof DInput>,
| 'type'
| 'onIconEndClick'
| 'value'
>;

function DDatePickerInput(
  {
    value,
    onClick,
    id,
    iconEnd,
    className,
    style,
    inputLabel,
    readOnly: ignored,
    ...props
  }: Props,
  ref: Ref<HTMLInputElement>,
) {
  return (
    <DInput
      ref={ref}
      onClick={onClick}
      readOnly
      type="text"
      id={id}
      value={value}
      onIconEndClick={onClick}
      iconEnd={iconEnd}
      className={className}
      style={style}
      label={inputLabel}
      {...props}
    />
  );
}

const ForwardedDDatePickerInput = forwardRef(DDatePickerInput);
ForwardedDDatePickerInput.displayName = 'DDatePickerInput';
export default ForwardedDDatePickerInput;
