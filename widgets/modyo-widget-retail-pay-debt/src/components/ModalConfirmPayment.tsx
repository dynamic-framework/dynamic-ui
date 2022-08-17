import { MButton, MModal } from '@modyolabs/react-design-system';
import { useTranslation } from 'react-i18next';
import type { Account, Card } from '../providers/AppContext';

interface Props {
  setIsPaid: (state: boolean) => void,
  amountUsed: number | undefined,
  accountSelected: Account,
  cardToPay: Card;
}

export default function ModalConfirmPayment(
  {
    setIsPaid,
    amountUsed,
    accountSelected,
    cardToPay,
  }: Props,
) {
  const { t } = useTranslation();

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
          onClick={() => setIsPaid(true)}
        />
      </div>
    </MModal>
  );
}
