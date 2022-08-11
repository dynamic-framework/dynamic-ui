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
};

export type Card = {
  id: number;
  franchise: string;
  mask: string;
  totalPayment: number;
  minimumPayment: number;
};

type AppContextType = {
  cardToPay?: Card;
  setCardToPay: Dispatch<Card>;
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
  const [cardToPay, setCardToPay] = useState<Card | undefined>(undefined);
  const [accountSelected, setAccountSelected] = useState<Account | undefined>(undefined);
  const [amountUsed, setAmountUsed] = useState<number | undefined>(undefined);
  const [isPaid, setIsPaid] = useState<boolean>(false);

  const value = useMemo(() => ({
    cardToPay,
    setCardToPay,
    accounts,
    setAccounts,
    accountSelected,
    setAccountSelected,
    amountUsed,
    setAmountUsed,
    isPaid,
    setIsPaid,
  }), [accountSelected, accounts, amountUsed, isPaid, cardToPay]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}
