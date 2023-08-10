import { MInput } from './proxies';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function MDatePickerTime({
  value,
  onChange,
}: Props) {
  return (
    <div className="p-3 d-flex align-items-center gap-2 flex-column m-datepicker-time">
      <p className="fw-bold text-light-emphasis sp">Selecciona una hora</p>
      <MInput
        value={value}
        onMChange={(time) => onChange(time as unknown as string)}
        mId="time"
        type="time"
      />
    </div>
  );
}
