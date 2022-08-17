import { MButton, MModal } from '@modyolabs/react-design-system';
import { useAppSelector } from '../store/hooks';
import { getAccountSelected, getAmountUsed, getCardToPay } from '../store/selectors/widget';

interface Props {
  onAccept: (accepted: boolean) => void;
}

export default function ModalSchedule(
  {
    onAccept,
  }: Props,
) {
  const cardToPay = useAppSelector(getCardToPay);
  const accountSelected = useAppSelector(getAccountSelected);
  const amountUsed = useAppSelector(getAmountUsed);

  return (
    <MModal
      mId="modalSchedulePayment"
      centered
      static
      noCloseButton
    >
      <div slot="header" className="m-3">
        {amountUsed && (
          `Schedule ${amountUsed}`
        )}
      </div>
      <div
        slot="body"
        className="d-flex flex-column justify-content-center align-items-center mx-3"
      >
        {accountSelected?.id && (
          `You are scheduling to pay ${cardToPay.franchise} ${cardToPay.mask} from your ${accountSelected.type} ${accountSelected.mask}`
        )}
      </div>
      <div slot="footer" className="d-flex flex-column align-items-center w-100 m-3">
        <MButton
          data-bs-dismiss="modal"
          class="mb-2"
          text="Schedule"
          theme="primary"
          isPill
          onClick={() => onAccept(true)}
        />
        <MButton
          data-bs-dismiss="modal"
          class="mb-2"
          text="Cancel"
          theme="primary"
          variant="outline"
          isPill
          onClick={() => onAccept(false)}
        />
      </div>
    </MModal>
  );
}
