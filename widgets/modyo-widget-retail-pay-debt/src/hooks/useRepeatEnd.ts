import { useState } from 'react';
import { useAppSelector } from '../store/hooks';
import { getEndRepeat } from '../store/selectors';

export default function useRepeatEnd() {
  const { enabled, frequency, option } = useAppSelector(getEndRepeat);

  const [toggleEnd, setToggleEnd] = useState(enabled ?? false);
  const [frequencyEnd, setFrequencyEnd] = useState(frequency ?? 'oneYear');
  const [optionEnd, setOptionEnd] = useState(option);

  const handleRepeatEnd = ({ detail }: CustomEvent) => {
    setFrequencyEnd(detail as string);
    setOptionEnd({});
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
