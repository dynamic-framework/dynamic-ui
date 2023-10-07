import {
  ComponentProps,
  Ref,
  forwardRef,
  useImperativeHandle,
} from 'react';
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
        isReadOnly
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

export default forwardRef(DDatePickerInput);
