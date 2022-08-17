import { createDraftSafeSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

const getState = (state: RootState) => state.widget;

export const getCardToPay = createDraftSafeSelector(
  getState,
  (widget) => widget.cardToPay,
);

export const getAccounts = createDraftSafeSelector(
  getState,
  (widget) => widget.accounts,
);

export const getAccountSelected = createDraftSafeSelector(
  getState,
  (widget) => widget.accountSelected,
);

export const getAmountUsed = createDraftSafeSelector(
  getState,
  (widget) => widget.amountUsed,
);

export const getIsPaid = createDraftSafeSelector(
  getState,
  (widget) => widget.isPaid,
);
