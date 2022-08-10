import {
  PropsWithChildren,
  createContext,
  useState,
  useMemo,
  Dispatch,
  useContext,
} from 'react';

export type Account = {
  id: number;
  value: number;
  mask: string;
  type: string;
  totalPayment: number;
  minimumPayment: number;
};

type AppContextType = {
  accounts: Array<Account>;
  setAccounts: Dispatch<Array<Account>>;
  accountSelected?: Account;
  setAccountSelected: Dispatch<Account | undefined>;
  amountUsed?: number | undefined;
  setAmountUsed: Dispatch<number | undefined>;
  isPaid: boolean;
  setIsPaid: Dispatch<boolean>;
};

const AppContext = createContext<AppContextType | null>(null);

export const useAppContext = () => useContext(AppContext) as AppContextType;

export default function AppContextProvider({ children }: PropsWithChildren) {
  const [accounts, setAccounts] = useState<Array<Account>>([]);
  const [accountSelected, setAccountSelected] = useState<Account | undefined>(undefined);
  const [amountUsed, setAmountUsed] = useState<number | undefined>(undefined);
  const [isPaid, setIsPaid] = useState<boolean>(false);

  const value = useMemo(() => ({
    accounts,
    setAccounts,
    accountSelected,
    setAccountSelected,
    amountUsed,
    setAmountUsed,
    isPaid,
    setIsPaid,
  }), [accountSelected, accounts, amountUsed, isPaid]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}
