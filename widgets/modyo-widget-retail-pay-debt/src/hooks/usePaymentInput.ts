import { useEffect, useState, useRef } from 'react';
import debounce from 'lodash.debounce';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getAmountUsed } from '../store/selectors';
import { setAmountUsed } from '../store/slice';

export default function usePaymentInput(defaultAmountAvailable = 0) {
  const dispatch = useAppDispatch();
  const amountUsed = useAppSelector(getAmountUsed);
  const [amount, setAmount] = useState<number | undefined>(amountUsed);
  const [amountAvailable, setAmountAvailable] = useState<number>(defaultAmountAvailable);

  const debounceSetAmount = useRef(debounce((value: number | undefined) => {
    dispatch(setAmountUsed(value));
  }, 500));

  useEffect(() => {
    debounceSetAmount.current(amount);
  }, [amount]);

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
    amount,
    setAmount,
  };
}
