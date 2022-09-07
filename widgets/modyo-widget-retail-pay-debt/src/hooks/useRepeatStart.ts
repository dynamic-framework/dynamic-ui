/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from 'react';
import { useAppSelector } from '../store/hooks';
import { getAutoRepeat } from '../store/selectors';

export default function useStartRepeatOption() {
  // START

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
      '1-month': { id: '1-month', name: 'Every month', checked: true },
      '2-month': { id: '2-month', name: 'Every other month', checked: false },
      '3-month': { id: '3-month', name: 'Every 3 months', checked: false },
      '6-month': { id: '6-month', name: 'Every 6 months', checked: false },
      '12-month': { id: '12-month', name: 'Every 12 months', checked: false },
    },
    custom: {
      custom: { id: 'custom', name: 'Custom', checked: true },
    },
  };

  const { enabled, frequency, option } = useAppSelector(getAutoRepeat);

  const [toggleStart, setToggleStart] = useState(enabled ?? false);
  const [frequencyStart, setFrequencyStart] = useState(frequency ?? 'weekly');
  const [optionStart, setOptionStart] = useState(
    option ?? { ...initialStartRepeat.weekly },
  );

  const handleRepeatStart = ({ detail }: CustomEvent) => {
    setFrequencyStart(detail as string);
    setOptionStart(initialStartRepeat[detail as keyof object]);
  };
  return {
    toggleStart,
    setToggleStart,
    frequencyStart,
    setFrequencyStart,
    optionStart,
    setOptionStart,
    handleRepeatStart,
  };
}
