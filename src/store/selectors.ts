import { createDraftSafeSelector } from '@reduxjs/toolkit';

import { RootState } from './store';

const getState = (state: RootState) => state.widget;

export const getCardToPay = createDraftSafeSelector(
  getState,
  (widget) => widget.cardToPay,
);

export const getAccounts = createDraftSafeSelector(
  getState,
  (widget) => widget.accounts,
);

export const getSelectedCurrency = createDraftSafeSelector(
  getState,
  (widget) => widget.selectedCurrency,
);

export const getDebt = createDraftSafeSelector(
  getState,
  getSelectedCurrency,
  (widget, selectedCurrency) => widget.cardToPay.debt[selectedCurrency as keyof object],
);

export const getCurrencies = createDraftSafeSelector(
  getState,
  (widget) => Object.keys(widget.cardToPay.debt),
);

export const getAccountSelected = createDraftSafeSelector(
  getState,
  (widget) => widget.accountSelected,
);

export const getAmountUsed = createDraftSafeSelector(
  getState,
  (widget) => widget.amountUsed ?? 0,
);

export const getIsPaid = createDraftSafeSelector(
  getState,
  (widget) => widget.isPaid,
);

export const getSchedule = createDraftSafeSelector(
  getState,
  (widget) => widget.schedule,
);

export const getAutoRepeat = createDraftSafeSelector(
  getState,
  (widget) => widget.startRepeat,
);

export const getEndRepeat = createDraftSafeSelector(
  getState,
  (widget) => widget.endRepeat,
);

export const getResult = createDraftSafeSelector(
  getState,
  (widget) => widget.result,
);

export const getUser = createDraftSafeSelector(
  getState,
  (widget) => widget.user,
);
