import { useEffect } from 'react';
import { useAppDispatch } from '../store/hooks';
import { setAccounts, setAccountSelected } from '../store/slices/widget';

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
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setAccounts(ACCOUNTS));
      dispatch(setAccountSelected(ACCOUNTS[2]));
    }, 1000);
    return () => clearTimeout(timer);
  }, [dispatch]);
}
