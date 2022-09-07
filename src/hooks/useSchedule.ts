/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from 'react';
import { useAppDispatch } from '../store/hooks';

import {
  setAutoRepeat,
  setEndRepeat,
  setSchedule,
} from '../store/slice';
import useRepeatEnd from './useRepeatEnd';
import useRepeatStart from './useRepeatStart';

export default function useSchedule(onAccept: (accepted: boolean) => void) {
  const dispatch = useAppDispatch();
  const [scheduleDay, setScheduleDay] = useState(new Date());

  const {
    toggleStart,
    setToggleStart,
    frequencyStart,
    setFrequencyStart,
    optionStart,
    setOptionStart,
    handleRepeatStart,
  } = useRepeatStart();

  const {
    toggleEnd,
    setToggleEnd,
    frequencyEnd,
    setFrequencyEnd,
    optionEnd,
    setOptionEnd,
    handleRepeatEnd,
  } = useRepeatEnd();

  const scheduleDate = () => {
    const newSchedule = {
      isScheduled: true,
      date: scheduleDay.toISOString(),
      dateShow: scheduleDay.toISOString().split('T')[0], // TODO: add date formatter
    };

    dispatch(setSchedule(newSchedule));

    if (newSchedule.isScheduled) {
      if (toggleStart) {
        dispatch(setAutoRepeat({
          enabled: toggleStart,
          frequency: frequencyStart,
          option: optionStart,
        }));
      }

      if (toggleEnd) {
        dispatch(setEndRepeat({
          enabled: toggleEnd,
          frequency: frequencyEnd,
          option: optionEnd,
        }));
      }
    }
    onAccept(true);
  };

  return {
    scheduleDay,
    setScheduleDay,
    scheduleDate,
    toggleStart,
    setToggleStart,
    frequencyStart,
    setFrequencyStart,
    optionStart,
    setOptionStart,
    handleRepeatStart,
    toggleEnd,
    setToggleEnd,
    frequencyEnd,
    setFrequencyEnd,
    optionEnd,
    setOptionEnd,
    handleRepeatEnd,
  };
}
