import {
  MAlert,
  MButton,
  MIcon,
  MListItem,
  MSelect,
} from '@modyolabs/react-design-system';
import { useTranslation } from 'react-i18next';

import PaymentPanel from './PaymentPanel';
import ModalAccountSelector from './ModalAccountSelector';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  getAccounts, getAccountSelected, getCardToPay, getCurrencies, getUser,
} from '../store/selectors';
import type { Account } from '../store/slice';
import { setAccountSelected } from '../store/slice';
import useFormatCurrency from '../hooks/useFormatCurrency';

export default function Payment() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const cardToPay = useAppSelector(getCardToPay);
  const accounts = useAppSelector(getAccounts);
  const accountSelected = useAppSelector(getAccountSelected);
  const hasMultipleCurrencies = useAppSelector(getCurrencies);
  const user = useAppSelector(getUser);

  const {
    values: [
      totalPayment,
      amountAvailable,
    ],
  } = useFormatCurrency(
    cardToPay.totalPayment,
    accountSelected?.value ?? 0,
  );

  const dateToPayCard = Intl.DateTimeFormat('en-US', {
    year: '2-digit',
    month: 'numeric',
    day: 'numeric',
  }).format(cardToPay.date);

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
          {accountSelected && (
            <div className="d-flex flex-column gap-2 bg-light p-3 rounded-1">
              <MListItem value={dateToPayCard} text={t('nextPayment')} class="p-1" />
              <MListItem value={totalPayment} text={t('balance')} class="p-1" />
              { hasMultipleCurrencies && <MListItem value="€1 = USD $1,4" text="Convertion rate" class="p-1" /> }
            </div>
          )}
          <div className="m-3 pt-3">
            {accountSelected && (
              <>
                { !user.canPayWithoutDebt && (
                  <div className="d-flex flex-column d-lg-none">
                    <p className="fw-semibold text-info mb-0 px-2 pb-2 text-gray">Pay from</p>
                    <MButton
                      class="account-selector"
                      text={t('payFrom', {
                        product: `${accountSelected.type} ${accountSelected.mask}`,
                      })}
                      theme="info"
                      iconRight="chevron-down"
                      data-bs-toggle="modal"
                      data-bs-target="#accountSelector"
                      variant="outline"
                    />
                    <small className="text-gray d-flex gap-2 align-items-center p-1">
                      <MIcon icon="info-circle" />
                      <span>{`${amountAvailable} available`}</span>
                    </small>
                  </div>
                )}
                <MSelect
                  class="mb-3 d-none d-lg-block"
                  mId="selectAccount"
                  variant="full"
                  theme="info"
                  label="Pay From"
                  hint="Available"
                  labelExtractor={({ type, mask }: Account) => t('payFrom', {
                    product: `${type} ${mask}`,
                  })}
                  options={accounts}
                  onMChange={
                    ({ detail: account }:
                    CustomEvent<Account>) => dispatch(setAccountSelected(account))
                  }
                />
              </>
            )}
            <PaymentPanel />
          </div>
        </div>
      </div>
      {cardToPay.minimumPayment <= 0 && (
        <div className="custom-alert fixed-bottom p-3 w-100">
          <MAlert icon close theme="info">
            {t('alert.notPay')}
          </MAlert>
        </div>
      )}
      {accountSelected && <ModalAccountSelector />}
    </>
  );
}
