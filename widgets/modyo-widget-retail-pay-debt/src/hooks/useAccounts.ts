import { useEffect, useState } from 'react';

export type Account = {
  id: number;
  value: number;
  mask: string;
  type: string;
};

const ACCOUNTS = [
  {
    id: 1,
    value: 1200,
    mask: '+++ 654',
    type: 'Saving',
  },
  {
    id: 2,
    value: 1500,
    mask: '+++ 653',
    type: 'Checking',
  },
  {
    id: 3,
    value: 1000,
    mask: '+++ 876',
    type: 'Current',
  },
];

export default function useAccounts() {
  const [accounts, setAccounts] = useState<Array<Account>>([]);
  const [accountSelected, setAccountSelected] = useState<Account | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setAccounts(ACCOUNTS);
      setAccountSelected(ACCOUNTS[2]);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [setAccountSelected, setAccounts]);

  return {
    loading,
    accounts,
    accountSelected,
    setAccountSelected,
    isPaid,
    setIsPaid,
  };
}
