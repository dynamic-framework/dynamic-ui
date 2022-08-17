import { MButton, MModal } from '@modyolabs/react-design-system';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setIsPaid } from '../store/slices/widget';
import { getAccountSelected, getAmountUsed, getCardToPay } from '../store/selectors/widget';

export default function ModalConfirmPayment() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const amountUsed = useAppSelector(getAmountUsed);
  const cardToPay = useAppSelector(getCardToPay);
  const accountSelected = useAppSelector(getAccountSelected);

  return (
    <MModal
      mId="modalConfirmPayment"
      centered
      static
      closeText="Cancel"
    >
      <div slot="header" className="p-3">
        <h5>
          {amountUsed && (
            t('modal.pay.title', { amount: amountUsed })
          )}
        </h5>
      </div>
      <div
        slot="body"
        className="d-flex flex-column justify-content-center align-items-start px-3 gap-3"
      >
        {accountSelected?.id && (
          t('modal.pay.text', {
            card: `${cardToPay.franchise} ${cardToPay.mask}`,
            product: `${accountSelected.type} ${accountSelected.mask}`,
          })
        )}
      </div>
      <div slot="footer" className="d-flex align-items-center w-100 m-3">
        <MButton
          data-bs-dismiss="modal"
          class="mb-2 w-50"
          text={t('button.cancel')}
          theme="primary"
          variant="outline"
          isPill
        />
        <MButton
          data-bs-dismiss="modal"
          class="mb-2 w-50"
          text={t('button.pay')}
          theme="primary"
          isPill
          onClick={() => dispatch(setIsPaid(true))}
        />
      </div>
    </MModal>
  );
}
