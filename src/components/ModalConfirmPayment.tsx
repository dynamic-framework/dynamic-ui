import { MButton, MModal } from '@modyolabs/react-design-system';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setIsPaid } from '../store/slices/widget';
import { getAccountSelected, getAmountUsed, getCardToPay } from '../store/selectors/widget';

export default function ModalConfirmPayment() {
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
          onClick={() => dispatch(setIsPaid(true))}
        />
      </div>
    </MModal>
  );
}
