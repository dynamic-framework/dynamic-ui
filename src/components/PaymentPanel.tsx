/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import {
  MCurrency,
  MButton,
  MFormSwitch,
  MShortcutToggle,
  MSkeleton,
} from '@modyolabs/react-design-system';

import { useTranslation } from 'react-i18next';
import ModalPaymentAlternatives from './ModalPaymentAlternatives';
import ModalSchedule from './ModalSchedule';
import ModalRecurrentPay from './ModalRecurrentPay';
import usePaymentInput from '../hooks/usePaymentInput';
import { useAppContext } from '../providers/AppContext';
import ModalConfirmPayment from './ModalConfirmPayment';

export default function PaymentPanel() {
  const { t } = useTranslation();
  const {
    accountSelected,
    cardToPay,
    setIsPaid,
  } = useAppContext();

  const {
    amountAvailable,
    amountUsed,
    setAmountUsed,
  } = usePaymentInput(accountSelected?.value);
  const [isScheduled, setIsScheduled] = useState(false);
  const [isRecurrent, setIsRecurrent] = useState(false);

  if (!accountSelected) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center gap-3 w-100">
        <MSkeleton viewBox="0 0 320 68" backgroundColor="#e9e9ff" foregroundColor="#f8f8fb">
          <rect x="35" y="0" rx="8" ry="8" width="247" height="67" />
        </MSkeleton>
        <div className="bg-white rounded py-4 w-100">
          <MSkeleton viewBox="0 0 320 355" backgroundColor="#e9e9ff" foregroundColor="#f8f8fb">
            <rect x="35" y="0" rx="8" ry="8" width="247" height="67" />
            <rect x="80" y="77" rx="8" ry="8" width="164" height="18" />
            <rect x="35" y="110" rx="8" ry="8" width="68" height="54" />
            <rect x="124" y="110" rx="8" ry="8" width="68" height="54" />
            <rect x="210" y="110" rx="8" ry="8" width="68" height="54" />
          </MSkeleton>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="p-4 bg-white text-center rounded">
        <MCurrency
          class="pb-4"
          mId="debtInput"
          theme="info"
          placeholder={t('currencyInput.placeholder')}
          hint={
            amountAvailable > 0
              ? t('currencyInput.remainingValid', { remaining: amountAvailable })
              : t('currencyInput.remainingInvalid')
          }
          iconLabel="currency-dollar"
          hintIconStart="info-circle"
          minValue={0}
          maxValue={accountSelected?.value}
          variant="prime"
          onMChange={({ detail: { amount } }) => setAmountUsed(amount)}
          value={amountUsed}
        />
        <div className="row g-0 m-0 p-0 pt-4 pb-2">
          <div className="col-12 justify-content-between scroll-h pb-2 mx-auto">
            <MShortcutToggle
              key="1"
              {...cardToPay.minimumPayment === 0 && { state: 'disabled' }}
              mId="minimumOption"
              name="paymentOption"
              label={t('shortCutToggle.minimum')}
              text={cardToPay.minimumPayment.toString()}
              value="minimumOption"
              onMChange={() => setAmountUsed(cardToPay.minimumPayment)}
            />
            <MShortcutToggle
              key="2"
              {...cardToPay.minimumPayment === 0 && { state: 'disabled' }}
              mId="totalOption"
              name="paymentOption"
              label={t('shortCutToggle.total')}
              text={cardToPay.totalPayment.toString()}
              value="totalOption"
              onMChange={() => setAmountUsed(cardToPay.totalPayment)}
            />
            <MShortcutToggle
              key="3"
              mId="alternativeOption"
              name="paymentOption"
              label={t('shortCutToggle.paymentAlternative')}
              text="..."
              {...cardToPay.minimumPayment === 0 && { state: 'disabled' }}
              {...cardToPay.minimumPayment > 0 && {
                'data-bs-toggle': 'modal',
                'data-bs-target': '#paymentAlt',
              }}
              value="alternativeOption"
            />
          </div>
        </div>
        <div className="pb-4">
          <div
            className="collapse"
            id="moreOptions"
          >
            <div
              className="px-3 py-2 border rounded-1 mb-2"
              data-bs-toggle="modal"
              data-bs-target="#modalSchedulePayment"
            >
              <MFormSwitch
                class="d-inline-flex"
                mId="schedulePayment"
                label={t('collapse.schedule')}
                isDisabled
                isChecked={isScheduled}
                {...isScheduled && ({ labelOn: t('collapse.yesLabel') })}
                {...!isScheduled && ({ labelOff: t('collapse.noLabel') })}
              />
              <small
                className="d-block text-info text-start"
              >
                {isScheduled
                  ? t('collapse.yesScheduleLabel')
                  : t('collapse.noScheduleLabel')}
              </small>
            </div>
            <div
              className="px-3 py-2 border rounded-1 mb-2"
              data-bs-toggle="modal"
              data-bs-target="#modalRecurrentPayment"
            >
              <MFormSwitch
                class="d-inline-flex"
                mId="recurrentPayment"
                label={t('collapse.recurrent')}
                isDisabled
                isChecked={isRecurrent}
                {...isRecurrent && ({ labelOn: t('collapse.yesLabel') })}
                {...!isRecurrent && ({ labelOff: t('collapse.noLabel') })}
              />
              <small
                className="d-block text-info text-start"
              >
                {isRecurrent
                  ? t('collapse.yesRecurrentLabel')
                  : t('collapse.noRecurrentLabel')}
              </small>
            </div>
          </div>
          <MButton
            className="more-options-btn"
            variant="text"
            theme="info"
            text={t('collapse.moreOptions')}
            iconRight="chevron-down"
            data-bs-toggle="collapse"
            data-bs-target="#moreOptions"
            aria-expanded="false"
            aria-controls="collapseExample"
            data-bs-delay="{'show':1000,'hide':1000}"
          />
        </div>
        <div
          className="d-flex justify-content-center"
        >
          <MButton
            {...cardToPay.minimumPayment === 0 && { state: 'disabled' }}
            data-bs-toggle="modal"
            data-bs-target="#modalConfirmPayment"
            text={t('button.pay')}
            theme="primary-gradient"
            isPill
            iconRight="check-lg"
          />
        </div>
      </div>
      <ModalPaymentAlternatives />
      <ModalSchedule
        cardToPay={cardToPay}
        accountSelected={accountSelected}
        amountUsed={amountUsed}
        onAccept={setIsScheduled}
      />
      <ModalRecurrentPay onAccept={setIsRecurrent} />
      <ModalConfirmPayment
        setIsPaid={setIsPaid}
        amountUsed={amountUsed}
        accountSelected={accountSelected}
        cardToPay={cardToPay}
      />
    </>
  );
}
