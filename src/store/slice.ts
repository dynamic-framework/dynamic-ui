import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type Account = {
  id: number;
  value: number;
  mask: string;
  type: string;
};

type Card = {
  id: number;
  franchise: string;
  mask: string;
  totalPayment: number;
  minimumPayment: number;
};

type WidgetState = {
  cardToPay: Card;
  accounts: Array<Account>;
  accountSelected?: Account;
  amountUsed?: number | undefined;
  isPaid?: boolean;
  schedule: unknown;
};

const initialState = {
  cardToPay: {
    id: 1,
    franchise: 'Visa',
    mask: '*** 456',
    totalPayment: 3250,
    minimumPayment: 240,
  },
  accounts: [],
  schedule: {
    is: false,
    date: null,
    repeat: {
      start: null,
      end: null,
    },
  },
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
    setSchedule(state, action: PayloadAction<any>) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      state.schedule = action.payload;
    },
  },
});

export const {
  setAccounts,
  setAccountSelected,
  setAmountUsed,
  setIsPaid,
  setSchedule,
} = slice.actions;
export default slice.reducer;
