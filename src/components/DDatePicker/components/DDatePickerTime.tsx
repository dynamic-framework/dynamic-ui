import { ComponentProps } from 'react';
import DInput from '../../DInput';

type Props = Pick<ComponentProps<typeof DInput>,
| 'id'
| 'value'
| 'onChange'
| 'aria-label'
>;

export default function DDatePickerTime(
  {
    ...rest
  }: Props,
) {
  return (
    <DInput
      className="d-datepicker-time"
      type="time"
      {...rest}
    />
  );
}
