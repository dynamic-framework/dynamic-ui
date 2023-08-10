import { MInputCustomEvent } from '@dynamic-framework/ui';
import { MInput } from './proxies';

type Props = {
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: (event: MInputCustomEvent<MouseEvent> | any) => void;
};

export default function MDatePickerInput({
  value,
  onClick,
}: Props) {
  return (
    <div
      role="button"
      onClick={onClick}
      onKeyDown={() => {}}
      tabIndex={0}
    >
      <MInput
        isReadOnly
        className="m-calendar-input"
        type="text"
        mId="calendar"
        value={value}
        onMIconEndClick={onClick}
        iconEnd="calendar"
      />
    </div>
  );
}
