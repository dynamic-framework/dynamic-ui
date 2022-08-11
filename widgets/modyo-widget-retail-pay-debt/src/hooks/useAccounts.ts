import { useEffect } from 'react';
import { useAppContext } from '../providers/AppContext';

const ACCOUNTS = [
  {
    id: 1,
    value: 1200,
    mask: '*** 654',
    type: 'Saving',
  },
  {
    id: 2,
    value: 1500,
    mask: '*** 653',
    type: 'Checking',
  },
  {
    id: 3,
    value: 1000,
    mask: '*** 876',
    type: 'Current',
  },
];

const CARD_TO_PAY = {
  id: 1,
  franchise: 'Visa',
  mask: '*** 456',
  totalPayment: 3250,
  minimumPayment: 240,
};

export default function useAccounts() {
  const {
    setCardToPay,
    setAccounts,
    setAccountSelected,
  } = useAppContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      setCardToPay(CARD_TO_PAY);
      setAccounts(ACCOUNTS);
      setAccountSelected(ACCOUNTS[2]);
    }, 1000);
    return () => clearTimeout(timer);
  }, [setAccountSelected, setAccounts, setCardToPay]);
}
