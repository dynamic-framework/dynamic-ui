import { liquidParser } from '@modyolabs/design-system';
import { useEffect } from 'react';
import { useAppDispatch } from '../store/hooks';
import { setUserPayment } from '../store/slice';

const OPTIONS = {
  hasPaymentAlternatives: !liquidParser.parse('{{user.paymentAlternatives}}') || true,
  canPayOtherAmount: !liquidParser.parse('{{user.freeAmountAvailable}}') || true,
  canPayMultipleCurrencies: !liquidParser.parse('{{user.payWithMultipleCurrencies}}') || false,
  hasExternalPayment: !liquidParser.parse('{{user.payWithExternal}}') || false,
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
