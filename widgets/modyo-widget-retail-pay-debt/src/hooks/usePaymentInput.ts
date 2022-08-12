import { useEffect, useState } from 'react';
import { useAppContext } from '../providers/AppContext';

export default function usePaymentInput(defaultAmountAvailable = 0) {
  const {
    amountUsed,
    setAmountUsed,
  } = useAppContext();

  const [amountAvailable, setAmountAvailable] = useState<number>(defaultAmountAvailable);

  useEffect(() => {
    setAmountAvailable(defaultAmountAvailable);
  }, [defaultAmountAvailable]);

  useEffect(() => {
    if (amountUsed !== undefined) {
      if (amountUsed === 0) {
        setAmountAvailable(defaultAmountAvailable);
      } else {
        setAmountAvailable(defaultAmountAvailable - amountUsed);
      }
    }
  }, [amountUsed, defaultAmountAvailable]);

  return {
    amountAvailable,
    amountUsed,
    setAmountUsed,
  };
}
