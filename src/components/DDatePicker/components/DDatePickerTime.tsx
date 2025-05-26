import DInput from '../../DInput';

type Props = {
  id?: string;
  value?: string;
  onChange?: (time: string) => void;
};

export default function DDatePickerTime(
  {
    value,
    onChange,
    id,
  }: Props,
) {
  return (
    <DInput
      className="d-datepicker-time"
      type="time"
      value={value}
      id={id}
      onChange={(time) => {
        onChange?.(time);
      }}
    />
  );
}
