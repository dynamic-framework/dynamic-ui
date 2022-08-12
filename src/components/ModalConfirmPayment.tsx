import { MButton, MModal } from '@modyolabs/react-design-system';
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
            `Pay ${amountUsed}`
          )}
        </h5>
      </div>
      <div
        slot="body"
        className="d-flex flex-column justify-content-center align-items-start px-3 gap-3"
      >
        {accountSelected?.id && (
          `You are paying ${cardToPay.franchise} ${cardToPay.mask} from your ${accountSelected.type} ${accountSelected.mask}`
        )}
      </div>
      <div slot="footer" className="d-flex align-items-center w-100 m-3">
        <MButton
          data-bs-dismiss="modal"
          class="mb-2"
          text="Cancel"
          theme="primary"
          variant="outline"
          isPill
        />
        <MButton
          data-bs-dismiss="modal"
          class="mb-2"
          text="Pay"
          theme="primary"
          isPill
          onClick={() => setIsPaid(true)}
        />
      </div>
    </MModal>
  );
}
