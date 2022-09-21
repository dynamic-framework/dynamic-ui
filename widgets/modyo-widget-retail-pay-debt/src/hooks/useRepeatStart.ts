import { useState } from 'react';

import { useAppSelector } from '../store/hooks';
import { getAutoRepeat } from '../store/selectors';

export default function useStartRepeatOption() {
  const { enabled, frequency, option } = useAppSelector(getAutoRepeat);

  const [toggleStart, setToggleStart] = useState(enabled ?? false);
  const [frequencyStart, setFrequencyStart] = useState(frequency ?? 'weekly');
  const [optionStart, setOptionStart] = useState(option);

  const handleRepeatStart = ({ detail }: CustomEvent) => {
    setFrequencyStart(detail as string);
    setOptionStart({});
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
