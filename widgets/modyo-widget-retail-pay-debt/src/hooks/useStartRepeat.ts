/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { getAutoRepeat, getSchedule } from '../store/selectors';
import { Day, setAutoRepeat, setEndRepeat } from '../store/slice';

export default function useStartRepeat() {
  const dispatch = useAppDispatch();

  const schedule = useAppSelector(getSchedule);

  const initialStartRepeat = {
    weekly: {
      saturday: { id: 'saturday', name: 'S', checked: false },
      monday: { id: 'monday', name: 'M', checked: false },
      tuesday: { id: 'tuesday', name: 'T', checked: false },
      wednesday: { id: 'wednesday', name: 'W', checked: false },
      thursday: { id: 'thursday', name: 'T', checked: false },
      friday: { id: 'friday', name: 'F', checked: false },
      sunday: { id: 'sunday', name: 'S', checked: false },
    },
    monthly: {
      '1-month': { id: '1-month', name: 'Every month' },
      '2-month': { id: '2-month', name: 'Every other month' },
      '3-month': { id: '3-month', name: 'Every 3 months' },
      '6-month': { id: '6-month', name: 'Every 6 months' },
      '12-month': { id: '12-month', name: 'Every 12 months' },
    },
    custom: {
      custom: { id: 'custom', name: 'Custom' },
    },
  };

  // type StartRepeatKey = keyof typeof initialStartRepeat;
  const startRepeat = useAppSelector(getAutoRepeat);

  const [toggleAutoRepeat, setToggleAutoRepeat] = useState(startRepeat.enabled);
  const [autoRepeatType, setAutoRepeatType] = useState(startRepeat.frequency);
  const [autoRepeatOptions, setAutoRepeatOptions] = useState(startRepeat.option);

  const handleAutoRepeatType = ({ detail }: CustomEvent) => {
    setAutoRepeatType(detail as string);
    setAutoRepeatOptions(initialStartRepeat[detail as keyof object]);
  };

  useEffect(() => {
    setToggleAutoRepeat(toggleAutoRepeat);
  }, [toggleAutoRepeat]);

  const [weekDays, setWeekDays] = useState<Record<string, Day>>(initialStartRepeat.weekly);

  function handleWeekDays(day: Day) {
    setWeekDays((prev) => ({
      ...prev,
      [day.id]: {
        ...day,
        checked: !day.checked,
      },
    }));
  }

  // End Repeat

  const [toggleEndRepeat, setToggleEndRepeat] = useState(false);
  const [endRepeatType, setEndRepeatType] = useState('oneYear');
  const [endRepeatOption, setEndRepeatOption] = useState();

  const [occurrences, setOccurrences] = useState(1);

  const handleEndRepeatType = ({ detail }: CustomEvent) => setEndRepeatType(detail as string);

  function handleOccurrences(value: number) {
    setOccurrences(value);
  }

  const setRecurring = () => {
    if (schedule.isScheduled) {
      if (toggleAutoRepeat) {
        dispatch(setAutoRepeat({
          enabled: toggleAutoRepeat,
          frequency: autoRepeatType,
          option: autoRepeatOptions,
        }));
      }

      if (toggleEndRepeat) {
        dispatch(setEndRepeat({
          enabled: toggleEndRepeat,
          frequency: endRepeatType,
          option: null,
        }));
      }
    }
  };

  // useEffect(() => {
  //   setAutoRepeatOptions(weekDays);
  // }, [weekDays]);

  return {
    toggleAutoRepeat,
    setToggleAutoRepeat,
    autoRepeatType,
    autoRepeatOptions,
    handleAutoRepeatType,
    initialStartRepeat,
    weekDays,
    handleWeekDays,
    // End Repeat
    toggleEndRepeat,
    setToggleEndRepeat,
    endRepeatType,
    setEndRepeatType,
    endRepeatOption,
    setEndRepeatOption,
    occurrences,
    setOccurrences,
    handleEndRepeatType,
    handleOccurrences,
    // Set recurring
    setRecurring,
  };
}
