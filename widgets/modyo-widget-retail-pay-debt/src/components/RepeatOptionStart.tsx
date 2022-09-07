/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { MFormCheck, MSelect } from '@modyolabs/react-design-system';
import { Day } from '../store/slice';

interface Props {
  frequency: string;
  option: { [name: string]: { [key: string]: string | boolean } };
  setOption: (option: any) => void;
}

export default function StartRepeatOptions({
  frequency,
  option,
  setOption,
}: Props) {
  const handleWeekDays = (day: Day): void => {
    setOption((prev: any) => ({
      ...prev,
      [day.id]: {
        ...day,
        checked: !day.checked,
      },
    }));
  };

  const handleMonthly = (id: any): void => {
    let newOption = {};
    // eslint-disable-next-line array-callback-return
    Object.values(option).map((a) => {
      newOption = {
        ...newOption,
        [`${a.id}`]: {
          ...a,
          checked: a.id === id,
        },
      };
    });
    setOption(newOption);
  };

  return (
    <div className="d-flex flex-column w-100 mb-4">
      {frequency === 'weekly' && (
        <div className="d-flex justify-content-between w-100 m-2">
          {Object.values(option).map((day: any) => (
            <MFormCheck
              key={day.id}
              type="checkbox"
              mId={day.id}
              value={day.name}
              label={day.name}
              isButton
              checked={day.checked}
              onMChange={() => handleWeekDays(day)}
            />
          ))}
        </div>
      )}
      {frequency === 'monthly' && (
        <MSelect
          className="w-100"
          mId="selectMonthlyRecurring"
          options={Object.values(option)}
          variant="full"
          theme="info"
          onMChange={({ detail }: CustomEvent<{ id: string, name: string }>) => {
            handleMonthly(detail.id);
          }}
          labelExtractor={(item) => item?.name}
          valueExtractor={(item) => item?.id}
        />
      )}
      {frequency === 'custom' && (
        <small>{option.custom.name}</small>
      )}
    </div>
  );
}
