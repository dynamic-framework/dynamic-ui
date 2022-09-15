import { liquidParser } from '@modyolabs/design-system';
import { useEffect } from 'react';
import { useAppDispatch } from '../store/hooks';
import { setUserPayment } from '../store/slice';

const OPTIONS = {
  hasPaymentAlternatives: liquidParser.parse('{{vars.paymentAlternatives}}') === 'true',
  canPayOtherAmount: liquidParser.parse('{{vars.freeAmountAvailable}}') === 'true',
  canPayMultipleCurrencies: liquidParser.parse('{{vars.payWithMultipleCurrencies}}') === 'true',
  hasExternalPayment: liquidParser.parse('{{vars.payWithExternal}}') === 'true',
  canPayWithoutDebt: liquidParser.parse('{{vars.payWithoutDebt}}') === 'true',
};

export default function useClient() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setUserPayment(OPTIONS));
    }, 1000);
    return () => clearTimeout(timer);
  }, [dispatch]);
}
