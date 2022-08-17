import {
  MAlert,
  MButton,
  MListItem,
  MSelect,
} from '@modyolabs/react-design-system';
import { useTranslation } from 'react-i18next';

import PaymentPanel from './PaymentPanel';
import ModalAccountSelector from './ModalAccountSelector';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getAccounts, getAccountSelected, getCardToPay } from '../store/selectors';
import type { Account } from '../store/slice';
import { setAccountSelected } from '../store/slice';

export default function Payment() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const cardToPay = useAppSelector(getCardToPay);
  const accounts = useAppSelector(getAccounts);
  const accountSelected = useAppSelector(getAccountSelected);
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
            <MButton
              class="account-selector d-block d-lg-none mb-3"
              text={t('payFrom', {
                product: `${accountSelected.type} ${accountSelected.mask}`,
              })}
              theme="info"
              iconRight="chevron-down"
              isPill
              data-bs-toggle="modal"
              data-bs-target="#accountSelector"
              variant="outline"
            />
          )}
          <MSelect
            class="mb-3 d-none d-lg-block"
            mId="selectAccount"
            variant="transparent"
            theme="info"
            labelExtractor={({ type, mask }: Account) => t('payFrom', {
              product: `${type} ${mask}`,
            })}
            options={accounts}
            onMChange={
              ({ detail: account }: CustomEvent<Account>) => dispatch(setAccountSelected(account))
            }
          />
          {(!!cardToPay?.totalPayment && accountSelected) && (
            <>
              <MListItem value="12/31/22" text={t('payUntil')} class="mb-2 p-1" />
              <MListItem value={cardToPay.totalPayment} text={t('toBePayed')} class="p-1" />
            </>
          )}
        </div>
        <PaymentPanel />
      </div>
      {cardToPay.minimumPayment <= 0 && (
        <div className="custom-alert fixed-bottom p-3 w-100">
          <MAlert icon close theme="info">
            {t('alert.noPay')}
          </MAlert>
        </div>
      )}
      {accountSelected && <ModalAccountSelector />}
    </>
  );
}
