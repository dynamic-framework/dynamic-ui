import { useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import {
  Day,
  setAutoRepeat,
  setEndRepeat,
  setSchedule,
} from '../store/slice';

export default function useSchedule(onAccept: (accepted: boolean) => void) {
  const weekDaysInitial = {
    saturday: { id: 'saturday', name: 'S', checked: false },
    monday: { id: 'monday', name: 'M', checked: false },
    tuesday: { id: 'tuesday', name: 'T', checked: false },
    wednesday: { id: 'wednesday', name: 'W', checked: false },
    thursday: { id: 'thursday', name: 'T', checked: false },
    friday: { id: 'friday', name: 'F', checked: false },
    sunday: { id: 'sunday', name: 'S', checked: false },
  };

  const monthlyCycles = [
    {
      label: 'Every month.',
      value: '1-month',
    },
    {
      label: 'Every other month.',
      value: '2-month',
    },
    {
      label: 'Every 3 months.',
      value: '3-month',
    },
    {
      label: 'Every 6 months.',
      value: '6-month',
    },
    {
      label: 'Every 12 months',
      value: '12-month',
    },
  ];

  const dispatch = useAppDispatch();
  const [scheduleDay, setScheduleDay] = useState(new Date());

  const [toggleAutoRepeat, setToggleAutoRepeat] = useState(false);
  const [autoRepeatType, setAutoRepeatType] = useState('weekly');

  const [toggleEndRepeat, setToggleEndRepeat] = useState(false);
  const [endRepeatType, setEndRepeatType] = useState('oneYear');

  const [weekDays, setWeekDays] = useState<Record<string, Day>>(weekDaysInitial);
  const [occurencies, setOccurencies] = useState(1);

  const handleAutoRepeatType = ({ detail }: CustomEvent) => setAutoRepeatType(detail as string);
  const handleEndRepeatType = ({ detail }: CustomEvent) => setEndRepeatType(detail as string);

  function handleWeekDays(day: Day) {
    setWeekDays((prev) => ({
      ...prev,
      [day.id]: {
        ...day,
        checked: !day.checked,
      },
    }));
  }

  function handleOccurencies(action: boolean) {
    const newRepeat = occurencies + (action ? 1 : -1);
    setOccurencies(newRepeat < 1 ? 1 : newRepeat);
  }

  const [date, setDate] = useState(new Date());

  function scheduleDate() {
    const newSchedule = {
      isScheduled: true,
      date: date.toISOString(),
      dateShow: date.toISOString().split('T')[0], // TODO: add date formatter
    };
    dispatch(setSchedule(newSchedule));

    if (toggleAutoRepeat) {
      dispatch(setAutoRepeat({
        enabled: toggleAutoRepeat,
        frequency: autoRepeatType,
        option: null,
      }));
    }

    if (toggleEndRepeat) {
      dispatch(setEndRepeat({
        enabled: toggleEndRepeat,
        frequency: endRepeatType,
        option: null,
      }));
    }

    onAccept(true);
  }

  return {
    scheduleDay,
    setScheduleDay,
    toggleAutoRepeat,
    setToggleAutoRepeat,
    autoRepeatType,
    handleAutoRepeatType,
    weekDays,
    handleWeekDays,
    monthlyCycles,
    toggleEndRepeat,
    setToggleEndRepeat,
    endRepeatType,
    handleEndRepeatType,
    occurencies,
    handleOccurencies,
    scheduleDate,
  };
}
