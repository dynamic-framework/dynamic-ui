/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from 'react';
import { useAppSelector } from '../store/hooks';
import { getEndRepeat } from '../store/selectors';

export default function useRepeatEnd() {
  // START

  const initialEndRepeat = {
    oneYear: { id: 'year', name: 'Year', checked: true },
    date: { id: 'date', name: 'Date', value: new Date() },
    occurrences: { id: 'occurrences', name: 'Occurrences', value: 1 },
  };

  const { enabled, frequency, option } = useAppSelector(getEndRepeat);

  const [toggleEnd, setToggleEnd] = useState(enabled ?? false);
  const [frequencyEnd, setFrequencyEnd] = useState(frequency ?? 'oneYear');
  const [optionEnd, setOptionEnd] = useState(
    option ?? { ...initialEndRepeat.oneYear },
  );

  const handleRepeatEnd = ({ detail }: CustomEvent) => {
    setFrequencyEnd(detail as string);
    setOptionEnd(initialEndRepeat[detail as keyof object]);
  };

  return {
    toggleEnd,
    setToggleEnd,
    frequencyEnd,
    setFrequencyEnd,
    optionEnd,
    setOptionEnd,
    handleRepeatEnd,
  };
}
