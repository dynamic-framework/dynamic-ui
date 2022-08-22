import {
  MButton,
  MIcon,
  MListItem,
} from '@modyolabs/react-design-system';
import { useTranslation } from 'react-i18next';
import useFormatCurrency from '../hooks/useFormatCurrency';

import { useAppSelector } from '../store/hooks';
import { getAmountUsed, getCardToPay } from '../store/selectors';

export default function PaymentResult() {
  const cardToPay = useAppSelector(getCardToPay);
  const amountUsed = useAppSelector(getAmountUsed);

  const { values: [amountUsedFormatted] } = useFormatCurrency(amountUsed);

  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center py-4 px-1">
        <MButton iconLeft="arrow-left" isPill theme="info" variant="text" />
        <h6 className="fw-bold m-0 flex-grow-1 text-center">Recipient</h6>
        <MButton iconLeft="share" isPill theme="tertiary" variant="ghost" />
      </div>
      <div className="d-flex flex-column align-items-center gap-4">
        <div className="rounded bg-white d-flex flex-column p-4 gap-4">
          <div className="d-flex flex-column gap-3 text-success text-center w-50 mx-auto">
            <MIcon
              icon="check-circle-fill"
              size="3rem"
            />
            <h5 className="text-dark fw-semibold">
              {t('paid.success')}
            </h5>
          </div>
          <div className="d-flex flex-column gap-1 text-center p-3 border-1 border-bottom">
            <span className="text-gray fw-bold">{`${amountUsedFormatted}`}</span>
            <small className="text-dark">
              {t('paid.moneyPaid')}
            </small>
          </div>
          <div
            className="d-flex flex-column gap-2 small"
          >
            <MListItem
              text={t('paid.paidTo')}
              value={`${cardToPay.franchise} ${cardToPay.mask}`}
            />
            <MListItem
              text={t('paid.transactionId')}
              value="99484733"
            />
            <MListItem
              text={t('paid.timeDate')}
              value="01/03/22 , 11:00 AM"
            />
          </div>
          <div
            className="d-flex gap-3 align-items-center justify-content-center mx-4 small"
          >
            <MIcon
              className="text-gray-light"
              icon="shield-check"
              size="1.3rem"
            />
            <p
              className="m-0"
            >
              {t('paid.terms.text')}
              <span
                className="text-secondary ms-1"
              >
                {t('paid.terms.link')}
              </span>
            </p>
          </div>
        </div>
        <MButton
          className="btn-result"
          text={t('button.back')}
          theme="primary"
          variant="outline"
          isPill
        />
      </div>
    </div>
  );
}
