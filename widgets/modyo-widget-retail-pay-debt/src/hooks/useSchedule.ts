import { useState } from 'react';
import { useModalContext } from '@modyolabs/react-design-system';

import { DateTime } from 'luxon';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getSchedule } from '../store/selectors';
import {
  setAutoRepeat,
  setEndRepeat,
  setSchedule,
} from '../store/slice';
import useRepeatEnd from './useRepeatEnd';
import useRepeatStart from './useRepeatStart';

export default function useSchedule(onAccept: (accepted: boolean) => void) {
  const dispatch = useAppDispatch();
  const schedule = useAppSelector(getSchedule);
  const { closeModal } = useModalContext();
  const [scheduleDay, setScheduleDay] = useState(schedule?.date ?? DateTime.now().toISO());

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
      date: scheduleDay,
    };

    dispatch(setSchedule(newSchedule));

    if (newSchedule.isScheduled) {
      if (toggleStart) {
        dispatch(setAutoRepeat({
          enabled: toggleStart,
          frequency: frequencyStart,
          option: optionStart,
        }));
      } else {
        dispatch(setAutoRepeat({
          enabled: toggleStart,
          frequency: null,
          option: {},
        }));
      }

      if (toggleEnd) {
        dispatch(setEndRepeat({
          enabled: toggleEnd,
          frequency: frequencyEnd,
          option: optionEnd,
        }));
      } else {
        dispatch(setEndRepeat({
          enabled: toggleEnd,
          frequency: null,
          option: {},
        }));
      }
    }
    onAccept(true);
    closeModal();
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
