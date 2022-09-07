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
      date: Intl.DateTimeFormat('default', {
        day: 'numeric',
        month: 'numeric',
        year: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      }).format(new Date()),
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

  return (
    <MModal
      name="modalConfirmPayment"
      centered
      static
      noCloseButton
    >
      <div slot="header" className="p-3">
        <h5 className="fw-semibold">
          {amountUsed && (
            t(isScheduled ? 'modal.schedule.title' : 'modal.pay.title', { amount: amountUsedFormatted })
          )}
        </h5>
      </div>
      <div
        slot="body"
        className="d-flex flex-column justify-content-center align-items-start px-3 gap-3"
      >
        {accountSelected?.id && (
          t(isScheduled ? 'modal.schedule.text' : 'modal.pay.text', {
            card: `${cardToPay.franchise} ${cardToPay.mask}`,
            product: `${accountSelected.type} ${accountSelected.mask}`,
          })
        )}
      </div>
      <div slot="footer" className="d-flex align-items-center w-100 m-3">
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
          text={t(isScheduled ? 'button.schedule' : 'button.pay')}
          theme="primary"
          isPill
          onClick={() => handlePaid()}
        />
      </div>
    </MModal>
  );
}
