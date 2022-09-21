import { useTranslation } from 'react-i18next';
import {
  MButton,
  MModal,
  MQuickAction,
  useModalContext,
} from '@modyolabs/react-design-system';

export default function ModalPaymentAlternatives() {
  const { t } = useTranslation();
  const { closeModal } = useModalContext();

  return (
    <MModal
      name="paymentAlternatives"
      centered
      static
    >
      <div
        slot="body"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <MQuickAction
          variant="extended"
          class="w-100"
          icon=""
          text={t('modal.paymentAlternatives.skip')}
          subtext={t('modal.paymentAlternatives.skipLabel')}
        />
        <MQuickAction
          variant="extended"
          class="w-100"
          icon=""
          text={t('modal.paymentAlternatives.flexible')}
          subtext={t('modal.paymentAlternatives.flexibleLabel')}
        />
        <MQuickAction
          variant="extended"
          class="w-100"
          icon=""
          text={t('modal.paymentAlternatives.renegotiate')}
          subtext={t('modal.paymentAlternatives.renegotiateLabel')}
        />
        <MButton
          class="mt-4 mb-3 w-50"
          text={t('button.cancel')}
          theme="primary"
          isPill
          onClick={() => closeModal()}
        />
      </div>
    </MModal>
  );
}
