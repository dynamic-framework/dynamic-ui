import { MButton, MModal } from '@modyolabs/react-design-system';
import { useTranslation } from 'react-i18next';

import type { Account, Card } from '../providers/AppContext';

interface Props {
  accountSelected?: Account,
  amountUsed?: number,
  onAccept: (accepted: boolean) => void;
  cardToPay: Card;
}

export default function ModalSchedule(
  {
    cardToPay,
    accountSelected,
    amountUsed,
    onAccept,
  }: Props,
) {
  const { t } = useTranslation();

  return (
    <MModal
      mId="modalSchedulePayment"
      centered
      static
      noCloseButton
    >
      <div slot="header" className="m-3">
        {amountUsed && (
          t('modal.schedule.title', { amount: amountUsed })
        )}
      </div>
      <div
        slot="body"
        className="d-flex flex-column justify-content-center align-items-center mx-3"
      >
        {accountSelected?.id && (
          t('modal.schedule.text', {
            card: `${cardToPay.franchise} ${cardToPay.mask}`,
            product: `${accountSelected.type} ${accountSelected.mask}`,
          })
        )}
      </div>
      <div slot="footer" className="d-flex flex-column align-items-center w-100 m-3">
        <MButton
          data-bs-dismiss="modal"
          class="mb-2 w-50"
          text={t('button.schedule')}
          theme="primary"
          isPill
          onClick={() => onAccept(true)}
        />
        <MButton
          data-bs-dismiss="modal"
          class="w-50"
          text={t('button.cancel')}
          theme="primary"
          variant="outline"
          isPill
          onClick={() => onAccept(false)}
        />
      </div>
    </MModal>
  );
}
