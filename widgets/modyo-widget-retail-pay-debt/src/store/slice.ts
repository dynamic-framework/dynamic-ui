import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type Account = {
  id: number;
  value: number;
  mask: string;
  type: string;
  currency: string;
};

type UserOptions = {
  hasPaymentAlternatives: boolean;
  hasExternalPayment: boolean;
  canPayOtherAmount: boolean;
  canPayMultipleCurrencies: boolean;
  canPayWithoutDebt: boolean;
};

export type Day = {
  id: string;
  name: string;
  checked: boolean;
};

type Card = {
  id: number;
  franchise: string;
  mask: string;
  debt: Record<string, Debt>;
  date: string;
};

export type TransactionResult = {
  status: number;
  date?: string;
  transactionID?: string;
  error?: {
    message: string;
    solution: string;
  }
};

type Debt = {
  totalPayment: number;
  minimumPayment: number;
};

type WidgetState = {
  cardToPay: Card;
  accounts: Array<Account>;
  accountSelected?: Account;
  amountUsed?: number | undefined;
  isPaid?: boolean;
  schedule: Schedule;
  startRepeat: StartRepeat;
  endRepeat: EndRepeat;
  selectedCurrency: string;
  result?: TransactionResult;
  user: UserOptions;
};

export type Schedule = {
  isScheduled: boolean;
  date: string | null;
  dateShow: string | null;
};

export type StartRepeat = {
  enabled: boolean;
  frequency: string | null;
  option: unknown;
};

export type EndRepeat = {
  enabled: boolean;
  frequency: string | null;
  option: unknown;
};

const initialState = {
  cardToPay: {
    id: 1,
    franchise: 'Visa',
    mask: '*** 456',
    debt: {
      USD: {
        totalPayment: 2000,
        minimumPayment: 140,
      },
      EUR: {
        totalPayment: 300,
        minimumPayment: 20,
      },
    },
    date: new Date().toISOString().split('T')[0],
  },
  user: {
    hasPaymentAlternatives: false,
    hasExternalPayment: false,
    canPayOtherAmount: false,
    canPayMultipleCurrencies: false,
    canPayWithoutDebt: false,
  },
  accounts: [],
  schedule: {
    isScheduled: false,
    date: null,
    dateShow: null,
  },
  startRepeat: {
    enabled: false,
    frequency: null,
    option: null,
  },
  endRepeat: {
    enabled: false,
    frequency: null,
    option: null,
  },
  result: {
    status: 200,
    error: {
      message: '[Error message]',
      solution: '[Error solution]',
    },
  },
  selectedCurrency: 'USD',
} as WidgetState;

const slice = createSlice({
  name: 'widget',
  initialState,
  reducers: {
    setAccounts(state, action: PayloadAction<Array<Account>>) {
      state.accounts = action.payload;
    },
    setAccountSelected(state, action: PayloadAction<Account | undefined>) {
      state.accountSelected = action.payload;
    },
    setAmountUsed(state, action: PayloadAction<number | undefined>) {
      state.amountUsed = action.payload;
    },
    setIsPaid(state, action: PayloadAction<boolean>) {
      state.isPaid = action.payload;
    },
    setSchedule(state, action: PayloadAction<Schedule>) {
      state.schedule = action.payload;
    },
    setAutoRepeat(state, action: PayloadAction<StartRepeat>) {
      state.startRepeat = action.payload;
    },
    setEndRepeat(state, action: PayloadAction<EndRepeat>) {
      state.endRepeat = action.payload;
    },
    setResult(state, action: PayloadAction<TransactionResult>) {
      state.result = action.payload;
    },
    setUserPayment(state, action: PayloadAction<UserOptions>) {
      state.user = action.payload;
    },
    setSelectedCurrency(state, action: PayloadAction<string>) {
      state.selectedCurrency = action.payload;
    },
  },
});

export const {
  setAccounts,
  setAccountSelected,
  setAmountUsed,
  setIsPaid,
  setResult,
  setSchedule,
  setAutoRepeat,
  setEndRepeat,
  setUserPayment,
  setSelectedCurrency,
} = slice.actions;
export default slice.reducer;
