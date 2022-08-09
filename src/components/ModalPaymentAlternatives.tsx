import { MButton, MModal, MQuickAction } from '@modyolabs/react-design-system';

export default function ModalPaymentAlternatives() {
  return (
    <MModal
      mId="paymentAlt"
      centered
      static
    >
      <div
        slot="body"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <MQuickAction
          variant="extended"
          data-bs-dismiss="modal"
          class="w-100"
          icon=""
          text="Skip installement"
          subtext="2 grace month remaining"
        />
        <MQuickAction
          variant="extended"
          data-bs-dismiss="modal"
          class="w-100"
          icon=""
          text="Flexible payment"
          subtext="Pay debt in installements"
        />
        <MQuickAction
          variant="extended"
          data-bs-dismiss="modal"
          class="w-100"
          icon=""
          text="Renegotiate debt"
          subtext="Pay your total future debt"
        />
        <MButton
          data-bs-dismiss="modal"
          class="my-4"
          text="Cancel"
          theme="primary"
          isPill
        />
      </div>
    </MModal>
  );
}
