import { Dispatch, SetStateAction } from 'react';

import { MFormCheck, MSelect } from '@modyolabs/react-design-system';

import { OptionRepeat, OptionRepeatValue } from '../store/slice';

const REPEAT_START_OPTIONS = {
  weekly: [
    { id: 'saturday', name: 'S' },
    { id: 'monday', name: 'M' },
    { id: 'tuesday', name: 'T' },
    { id: 'wednesday', name: 'W' },
    { id: 'thursday', name: 'T' },
    { id: 'friday', name: 'F' },
    { id: 'sunday', name: 'S' },
  ],
  monthly: [
    { id: '1-month', name: 'Every month' },
    { id: '2-month', name: 'Every other month' },
    { id: '3-month', name: 'Every 3 months' },
    { id: '6-month', name: 'Every 6 months' },
    { id: '12-month', name: 'Every 12 months' },
  ],
  custom: [
    { id: 'custom', name: 'Custom', checked: true },
  ],
};

interface Props {
  frequency: string;
  option: OptionRepeat;
  setOption: Dispatch<SetStateAction<OptionRepeat>>;
}

export default function StartRepeatOptions({
  frequency,
  option,
  setOption,
}: Props) {
  const handleWeekDays = (day: OptionRepeatValue): void => {
    setOption((prev: OptionRepeat) => {
      if (prev[day.id]) {
        const {
          [day.id]: ignored,
          ...otherDays
        } = prev;
        return otherDays;
      }
      return {
        ...prev,
        [day.id]: day,
      };
    });
  };

  const handleMonthly = (month: OptionRepeatValue): void => {
    setOption({ [month.id]: month });
  };

  return (
    <div className="d-flex flex-column w-100 mb-4">
      {frequency === 'weekly' && (
        <div className="d-flex justify-content-between w-100 m-2">
          {REPEAT_START_OPTIONS[frequency].map((day: OptionRepeatValue) => (
            <MFormCheck
              key={day.id}
              type="checkbox"
              mId={day.id}
              value={day.name}
              label={day.name}
              isButton
              checked={!!option[day.id]}
              onMChange={() => handleWeekDays(day)}
            />
          ))}
        </div>
      )}
      {frequency === 'monthly' && (
        <MSelect
          className="w-100"
          mId="selectMonthlyRecurring"
          options={REPEAT_START_OPTIONS[frequency]}
          variant="full"
          theme="info"
          onMChange={({ detail }: CustomEvent<OptionRepeatValue>) => {
            handleMonthly(detail);
          }}
          labelExtractor={(item: OptionRepeatValue) => item.name}
          valueExtractor={(item: OptionRepeatValue) => item.id}
        />
      )}
      {frequency === 'custom' && (
        <small>{option.custom.name}</small>
      )}
    </div>
  );
}
