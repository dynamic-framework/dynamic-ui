import {
  MAlert,
  MButton,
  MIcon,
  MListItem,
  useFormatCurrency,
} from '@modyolabs/react-design-system';
import { DateTime } from 'luxon';
import { useTranslation } from 'react-i18next';

import { useAppSelector } from '../store/hooks';
import {
  getAmountUsed, getCardToPay, getResult, getSchedule,
} from '../store/selectors';

export default function PaymentResult() {
  const cardToPay = useAppSelector(getCardToPay);
  const amountUsed = useAppSelector(getAmountUsed);
  const result = useAppSelector(getResult);
  const schedule = useAppSelector(getSchedule);

  const { values: [amountUsedFormatted] } = useFormatCurrency(amountUsed);

  const { t } = useTranslation();

  const resultTransaction = result?.status === 200;

  const handleSharing = async () => {
    const shareData = {
      title: `Payment ${cardToPay.franchise} ${cardToPay.mask}`,
      text: `Your payment was ${resultTransaction ? 'successful' : 'failed'}`,
      url: 'https://newdynamic.modyo.cloud/private',
    };
    if (navigator.share) {
      await navigator
        .share(shareData)
        .then(() => console.log('Hooray! Your content was shared to tha world'));
    } else {
      console.log(
        'Web share is currently not supported on this browser. Please provide a callback',
      );
    }
  };

  return (
    <div className="col-12 col-md-6 h-100">
      <div className="d-flex justify-content-between align-items-center py-4 px-1">
        <MButton className="btn-icon d-md-none" iconLeft="arrow-left" isPill theme="info" variant="text" />
        <h6 className="fw-bold m-0 flex-grow-1 text-center">
          {t('result.title')}
        </h6>
        <MButton onClick={handleSharing} iconLeft="share" isPill theme="tertiary" variant="ghost" />
      </div>
      <div className="d-flex flex-column align-items-center gap-4">
        <div className="rounded bg-white d-flex flex-column m-4 p-4 gap-4">
          <div className={`d-flex flex-column gap-3 text-center w-50 mx-auto text-${resultTransaction ? 'success' : 'danger'}`}>
            <MIcon
              icon={resultTransaction ? 'check-circle-fill' : 'x-circle-fill'}
              size="3rem"
            />
            <h5 className="text-dark fw-semibold m-0">
              {schedule?.isScheduled && (
                t(resultTransaction ? 'result.scheduleSuccess' : 'result.scheduleFailed')
              )}
              {!schedule?.isScheduled && (
                t(resultTransaction ? 'result.paySuccess' : 'result.payFailed')
              )}
            </h5>
          </div>
          {resultTransaction && (
            <div className="d-block">
              <div className="d-flex flex-column gap-1 text-center p-3">
                {schedule?.isScheduled && (
                  <>
                    <span className="text-gray fw-bold">
                      {t('result.scheduledOn', { amount: amountUsedFormatted, date: schedule.date })}
                    </span>
                    <small className="text-dark">
                      {t('result.scheduledToPay')}
                    </small>
                  </>
                )}
                {!schedule?.isScheduled && (
                  <>
                    <span className="text-gray fw-bold">{`${amountUsedFormatted}`}</span>
                    <small className="text-dark">
                      {t('result.moneyPaid')}
                    </small>
                  </>
                )}
              </div>
              <div
                className="d-flex flex-column gap-2 small bg-light px-2 py-3 rounded-1"
              >
                <MListItem
                  text={t('result.paidTo')}
                  value={`${cardToPay.franchise} ${cardToPay.mask}`}
                />
                <MListItem
                  text={t('result.transactionId')}
                  value={result.transactionID}
                />
                <MListItem
                  text={t('result.timeDate')}
                  value={DateTime.fromISO(result.date).toFormat('MM/dd/yy, hh:mm a')}
                />
              </div>
              <div
                className="d-flex gap-3 align-items-center justify-content-center mx-4 mt-4 small"
              >
                <MIcon
                  className="text-gray-light"
                  icon="shield-check"
                  size="1.3rem"
                />
                <p
                  className="m-0"
                >
                  {t('result.terms.text')}
                  <span
                    className="text-secondary ms-1"
                  >
                    {t('result.terms.link')}
                  </span>
                </p>
              </div>
            </div>
          )}
          {!resultTransaction && (
            <>
              <hr className="m-0 text-gray-light" />
              <div className="d-flex flex-column gap-1 px-3">
                <p className="text-dark m-0">
                  {t(
                    schedule?.isScheduled ? 'result.scheduleErrorMessage' : 'result.payErrorMessage',
                    {
                      message: result?.error?.message,
                    },
                  )}
                </p>
              </div>
              <MAlert
                className="px-3 w-100"
                theme="info"
              >
                {t('result.errorSolution', { solution: result?.error?.solution })}
              </MAlert>
            </>
          )}
        </div>
        <div className="d-flex flex-column w-50">
          {!resultTransaction && (
            <MButton
              className="btn-result"
              text={t('button.retry')}
              theme="primary"
              variant="outline"
              isPill
            />
          )}

          <MButton
            className="btn-result"
            text={t('button.back')}
            theme="primary"
            variant="outline"
            isPill
          />
        </div>
      </div>
    </div>
  );
}
