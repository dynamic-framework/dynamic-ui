import { MCalendar, MCounter } from '@modyolabs/react-design-system';

interface Props {
  frequency: string;
  option: { [key: string]: string | boolean | number | Date };
  setOption: (option: any) => void;
}
export default function RepeatOptionEnd({
  frequency,
  option,
  setOption,
}: Props) {
  const handleDate = (date: Date) => {
    setOption((prev: any) => (
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      {
        ...prev,
        value: date,
      }
    ));
  };

  const handleOccurrences = ({ detail }: CustomEvent) => {
    setOption((prev: any) => (
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      {
        ...prev,
        value: detail as number,
      }
    ));
  };

  return (
    <div className="d-flex w-100">
      {frequency === 'date' && (
        <MCalendar
          date={option.value as Date}
          setDate={handleDate}
          withPortal
        />
      )}
      {frequency === 'occurrences' && (
        <MCounter
          className="w-100"
          mId="counterOccurrences"
          min={1}
          max={100}
          value={option.value as number}
          onMClick={handleOccurrences}
          onMInput={handleOccurrences}
        />
      )}
    </div>
  );
}
