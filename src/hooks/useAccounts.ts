import { useEffect } from 'react';
import { useAppContext } from '../providers/AppContext';

const ACCOUNTS = [
  {
    id: 1,
    value: 1200,
    mask: '+++ 654',
    type: 'Saving',
    totalPayment: 4956,
    minimumPayment: 200,
  },
  {
    id: 2,
    value: 1500,
    mask: '+++ 653',
    type: 'Checking',
    totalPayment: 3250,
    minimumPayment: 240,
  },
  {
    id: 3,
    value: 1000,
    mask: '+++ 876',
    type: 'Current',
    totalPayment: 6853,
    minimumPayment: 343,
  },
];

export default function useAccounts() {
  const {
    setAccounts,
    setAccountSelected,
  } = useAppContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      setAccounts(ACCOUNTS);
      setAccountSelected(ACCOUNTS[2]);
    }, 1000);
    return () => clearTimeout(timer);
  }, [setAccountSelected, setAccounts]);
}
