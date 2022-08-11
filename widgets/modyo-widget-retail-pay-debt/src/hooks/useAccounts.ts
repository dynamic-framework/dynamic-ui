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
