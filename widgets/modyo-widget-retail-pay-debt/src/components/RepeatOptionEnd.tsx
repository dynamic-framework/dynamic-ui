import { MCalendar, MCounter } from '@modyolabs/react-design-system';
import { DateTime } from 'luxon';
import { Dispatch, SetStateAction } from 'react';
import { OptionRepeat } from '../store/slice';

const REPEAT_END_OPTIONS = {
  oneYear: { id: 'year', name: 'Year' },
  date: { id: 'date', name: 'Date', value: DateTime.now().toISO() },
  occurrences: { id: 'occurrences', name: 'Occurrences', value: 1 },
};

interface Props {
  frequency: string;
  option: OptionRepeat;
  setOption: Dispatch<SetStateAction<OptionRepeat>>;
}

export default function RepeatOptionEnd({
  frequency,
  option,
  setOption,
}: Props) {
  const handleDate = (newDate: string) => {
    setOption({
      date: {
        ...REPEAT_END_OPTIONS.date,
        value: newDate,
      },
    });
  };

  const handleOccurrences = ({ detail }: CustomEvent<string>) => {
    setOption({
      occurrences: {
        ...REPEAT_END_OPTIONS.occurrences,
        value: Number.parseInt(detail, 10),
      },
    });
  };

  return (
    <div className="d-flex w-100 repeat-end-container">
      {frequency === 'date' && (
        <MCalendar
          className="input-date"
          date={option.date?.value as string ?? REPEAT_END_OPTIONS.date.value}
          setDate={handleDate}
          minDate={DateTime.now().toISO()}
          showTimeInput
          timeInputLabel=""
          dateFormat="MM/dd/yy, HH:mm a"
          withPortal
        />
      )}
      {frequency === 'occurrences' && (
        <MCounter
          className="w-100"
          mId="counterOccurrences"
          min={1}
          max={100}
          value={option.occurrences?.value as number ?? REPEAT_END_OPTIONS.occurrences.value}
          onMClick={handleOccurrences}
          onMInput={handleOccurrences}
        />
      )}
    </div>
  );
}
