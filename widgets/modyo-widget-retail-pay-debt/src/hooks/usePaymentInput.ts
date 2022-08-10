import { useEffect, useState } from 'react';

export default function usePaymentInput(defaultAmountAvailable = 0) {
  const [amountAvailable, setAmountAvailable] = useState<number>(defaultAmountAvailable);
  const [amountUsed, setAmountUsed] = useState<number | undefined>(undefined);

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
