/* eslint-disable react/jsx-props-no-spreading */
import {
  MAlert,
  MButton,
  MIcon,
  MListItem,
  MSelect,
  useFormatCurrency,
  useModalContext,
} from '@modyolabs/react-design-system';
import { useTranslation } from 'react-i18next';

import { useMemo } from 'react';
import PaymentPanel from './PaymentPanel';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  getAccounts,
  getAccountSelected,
  getCardToPay,
  getDebt,
  getUser,
  getCurrencies,
} from '../store/selectors';
import type { Account } from '../store/slice';
import { setAccountSelected } from '../store/slice';
import SkeletonLoader from './SkeletonLoader';
import CurrenciesSelector from './CurrenciesSelector';

export default function Payment() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { openModal } = useModalContext();
  const cardToPay = useAppSelector(getCardToPay);
  const accounts = useAppSelector(getAccounts);
  const accountSelected = useAppSelector(getAccountSelected);
  const user = useAppSelector(getUser);
  const debt = useAppSelector(getDebt);
  const currencies = useAppSelector(getCurrencies);
  const isPaypal = useMemo(() => accountSelected?.type === 'Paypal', [accountSelected]);

  const {
    values: [
      totalPayment,
      amountAvailable,
    ],
  } = useFormatCurrency(
    debt.totalPayment,
    accountSelected?.value ?? 0,
  );

  return (
    <>
      <div className="container pb-5 mb-5">
        <div className="pb-3 px-4">
          <div className="d-flex justify-content-between align-items-center my-4">
            <MButton className="btn-icon" iconLeft="arrow-left" isPill theme="info" variant="text" />
            <h6 className="fw-bold m-0 flex-grow-1 text-center">
              {t('cardToPay', {
                card: `${cardToPay.franchise} ${cardToPay.mask}`,
              })}
            </h6>
          </div>
          {!accountSelected && <SkeletonLoader />}
          {accountSelected && (
            <>
              {currencies.length >= 2 && <CurrenciesSelector />}
              <div className="d-flex flex-column gap-2 bg-light p-3 rounded-1">
                <MListItem value={cardToPay.date} text={t('nextPayment')} class="p-1" />
                <MListItem value={totalPayment} text={t('balance')} class="p-1" />
                {/* TODO Conversion rate */}
                {currencies.length >= 2 && <MListItem value="€1 = USD $1,4" text="Conversion rate" class="p-1" />}
              </div>
              <div className="m-3 pt-3">
                {!user.canPayWithoutDebt && (
                  <div className="d-flex flex-column d-lg-none">
                    <p className="fw-semibold text-info mb-0 px-2 pb-2 text-gray">Pay from</p>
                    <MButton
                      class="account-selector"
                      text={`${accountSelected.type} ${accountSelected.mask}`}
                      {...isPaypal && {
                        iconLeft: 'paypal',
                      }}
                      theme="info"
                      iconRight="chevron-down"
                      variant="outline"
                      onClick={() => openModal('accountSelector')}
                    />
                  </div>
                )}
                <MSelect
                  class="mb-1 d-none d-lg-block selectAccount"
                  mId="selectAccount"
                  variant="full"
                  theme="info"
                  label="Pay From"
                  {...isPaypal && {
                    iconStart: 'paypal',
                  }}
                  labelExtractor={({ type, mask }: Account) => `${type} ${mask}`}
                  options={accounts}
                  onMChange={
                    // eslint-disable-next-line max-len
                    ({ detail: account }: CustomEvent<Account>) => dispatch(setAccountSelected(account))
                  }
                />
                { !isPaypal && (
                  <small className="text-gray d-flex gap-2 align-items-center p-1">
                    <MIcon icon="info-circle" />
                    <span>{`${amountAvailable} available`}</span>
                  </small>
                )}
                <PaymentPanel />
              </div>
            </>
          )}
        </div>
      </div>
      {debt.minimumPayment <= 0 && (
        <div className="custom-alert fixed-bottom p-3 w-100">
          <MAlert icon close theme="info">
            {t('alert.notPay')}
          </MAlert>
        </div>
      )}
    </>
  );
}
