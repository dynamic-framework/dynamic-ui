import { MButton, MModal, MQuickAction } from '@modyolabs/react-design-system';
import { useTranslation } from 'react-i18next';

export default function ModalPaymentAlternatives() {
  const { t } = useTranslation();

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
          text={t('modal.paymentAlternatives.skip')}
          subtext={t('modal.paymentAlternatives.skipLabel')}
        />
        <MQuickAction
          variant="extended"
          data-bs-dismiss="modal"
          class="w-100"
          icon=""
          text={t('modal.paymentAlternatives.flexible')}
          subtext={t('modal.paymentAlternatives.flexibleLabel')}
        />
        <MQuickAction
          variant="extended"
          data-bs-dismiss="modal"
          class="w-100"
          icon=""
          text={t('modal.paymentAlternatives.renegotiate')}
          subtext={t('modal.paymentAlternatives.renegotiateLabel')}
        />
        <MButton
          data-bs-dismiss="modal"
          class="mt-4 mb-3 w-50"
          text={t('button.cancel')}
          theme="primary"
          isPill
        />
      </div>
    </MModal>
  );
}
