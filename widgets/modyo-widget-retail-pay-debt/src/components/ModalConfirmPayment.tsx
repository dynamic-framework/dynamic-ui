import { MButton, MModal, useFormatCurrency } from '@modyolabs/react-design-system';
import type { ModalProps } from '@modyolabs/react-design-system';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setIsPaid, setResult } from '../store/slice';
import {
  getAccountSelected,
  getAmountUsed,
  getCardToPay,
  getSchedule,
} from '../store/selectors';

export default function ModalConfirmPayment({ closeModal }: ModalProps) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const amountUsed = useAppSelector(getAmountUsed);
  const cardToPay = useAppSelector(getCardToPay);
  const accountSelected = useAppSelector(getAccountSelected);
  const isScheduled = useAppSelector(getSchedule)?.isScheduled;

  const { values: [amountUsedFormatted] } = useFormatCurrency(amountUsed);

  function handlePaid() {
    const rand = Math.round(Math.random());
    const transactionResult = {
      status: rand ? 200 : 300,
      date: new Date().toISOString(),
      ...(rand && {
        transactionID: `${Math.floor(Math.random() * 1000001)}`,
      }),
      ...(!rand && {
        error: {
          message: 'error network.',
          solution: 'Try again in a while',
        },
      }),
    };
    dispatch(setResult(transactionResult));
    dispatch(setIsPaid(true));
    closeModal();
  }

  const isPaypalAccount = accountSelected?.type === 'Paypal';

  const confirmationHeader = () => {
    if (isPaypalAccount) {
      return t('modal.paypal.title');
    }
    if (isScheduled) {
      return t('modal.schedule.title', { amount: amountUsedFormatted });
    }
    return t('modal.pay.title', { amount: amountUsedFormatted });
  };

  const confirmationBody = () => {
    if (!accountSelected) {
      return '';
    }
    const cardDetail = {
      card: `${cardToPay.franchise} ${cardToPay.mask}`,
      product: `${accountSelected.type} ${accountSelected.mask}`,
    };
    if (isPaypalAccount) {
      return t('modal.paypal.text', { ...cardDetail });
    }
    if (isScheduled) {
      return t('modal.schedule.text', cardDetail);
    }
    return t('modal.pay.text', cardDetail);
  };

  const continueButton = () => {
    if (isScheduled) {
      return t('button.schedule');
    }
    if (isPaypalAccount) {
      return t('button.continue');
    }
    return t('button.pay');
  };

  return (
    <MModal
      name="modalConfirmPayment"
      centered
      static
    >
      <div slot="header" className="p-3">
        <h5 className="fw-semibold m-0">
          {confirmationHeader()}
        </h5>
      </div>
      <div
        slot="body"
        className="d-flex flex-column justify-content-center align-items-start px-3 gap-3"
      >
        {confirmationBody()}
      </div>
      <div
        slot="footer"
        className={`d-flex align-items-center w-100 m-3 ${(isScheduled || isPaypalAccount) ? 'flex-column-reverse' : ''}`}
      >
        <MButton
          class="mb-2 w-50"
          text={t('button.cancel')}
          theme="primary"
          variant="outline"
          isPill
          onClick={() => closeModal()}
        />
        <MButton
          class="mb-2 w-50"
          text={continueButton()}
          theme="primary"
          isPill
          onClick={() => handlePaid()}
        />
      </div>
    </MModal>
  );
}
