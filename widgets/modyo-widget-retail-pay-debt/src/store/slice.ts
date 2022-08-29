import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type Account = {
  id: number;
  value: number;
  mask: string;
  type: string;
  currency: string;
};

type Card = {
  id: number;
  franchise: string;
  mask: string;
  totalPayment: number;
  minimumPayment: number;
  date: string;
};

type WidgetState = {
  cardToPay: Card;
  accounts: Array<Account>;
  accountSelected?: Account;
  amountUsed?: number | undefined;
  isPaid?: boolean;
  schedule?: Schedule;
  recurring?: Recurring;
  selectedCurrency: string;
  result?: {
    status: number;
    date?: string;
    transactionID?: string;
    error?: {
      message: string,
      solution: string,
    }
  }
};

type Schedule = {
  isScheduled: boolean;
  date: string | null;
  dateShow: string | null;
};

type Recurring = {
  isRecurring: boolean;
  start: {
    frequency: string | null;
    option: any;
  },
  end: {
    frequency: string | null;
    option: any;
  },
};

const initialState = {
  cardToPay: {
    id: 1,
    franchise: 'Visa',
    mask: '*** 456',
    totalPayment: 3250,
    minimumPayment: 240,
    date: new Date().toISOString().split('T')[0],
  },
  accounts: [],
  schedule: {
    isScheduled: false,
    date: null,
    dateShow: null,
  },
  recurring: {
    isRecurring: false,
    start: {
      frequency: null,
      option: null,
    },
    end: {
      frequency: null,
      option: null,
    },
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
    setRecurring(state, action: PayloadAction<Recurring>) {
      state.recurring = action.payload;
    },
    setResult(state, action: PayloadAction<any>) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      state.result = action.payload;
    },
  },
});

export const {
  setAccounts,
  setAccountSelected,
  setAmountUsed,
  setIsPaid,
  setSchedule,
  setRecurring,
} = slice.actions;
export default slice.reducer;
