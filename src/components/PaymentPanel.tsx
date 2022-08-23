/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import {
  MCurrency,
  MButton,
  MFormSwitch,
  MShortcutToggle,
  MSkeleton,
  MAlert,
} from '@modyolabs/react-design-system';
import { useTranslation } from 'react-i18next';

import ModalPaymentAlternatives from './ModalPaymentAlternatives';
import ModalSchedule from './ModalSchedule';
import ModalRecurrentPay from './ModalRecurrentPay';
import usePaymentInput from '../hooks/usePaymentInput';
import ModalConfirmPayment from './ModalConfirmPayment';
import { useAppSelector } from '../store/hooks';
import {
  getAccountSelected, getCardToPay, getSchedule, getRecurring,
} from '../store/selectors';
import useFormatCurrency from '../hooks/useFormatCurrency';

export default function PaymentPanel() {
  const { t } = useTranslation();
  const accountSelected = useAppSelector(getAccountSelected);
  const cardToPay = useAppSelector(getCardToPay);
  const schedule: any = useAppSelector(getSchedule);
  const recurring: any = useAppSelector(getRecurring);

  const {
    amountAvailable,
    amount,
    setAmount,
  } = usePaymentInput(accountSelected?.value);
  const [isScheduled, setIsScheduled] = useState(false);
  const [isRecurrent, setIsRecurrent] = useState(false);
  const [shortcut, setShortcut] = useState('');
  const {
    format,
    values: [
      minimumPayment,
      totalPayment,
      availableFormatted,
    ],
  } = useFormatCurrency(
    cardToPay.minimumPayment,
    cardToPay.totalPayment,
    amountAvailable,
  );

  const setSelectedOption = ({ detail }: CustomEvent, value: number) => {
    setShortcut(detail as string);
    setAmount(value);
  };

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
        <div className="row g-0 m-0 p-0 pt-4 pb-2">
          <div className="col-12 flex-column justify-content-between pb-2 mx-auto amount-options">
            <MShortcutToggle
              key="1"
              {...cardToPay.minimumPayment === 0 && { state: 'disabled' }}
              {...cardToPay.minimumPayment === amount && { isChecked: true }}
              mId="minimumOption"
              name="paymentOption"
              label={t('shortCutToggle.minimum')}
              text={minimumPayment}
              value="minimumOption"
              onMChange={(e: CustomEvent) => setSelectedOption(e, cardToPay.minimumPayment)}
            />
            <MShortcutToggle
              key="2"
              {...cardToPay.totalPayment === 0 && { state: 'disabled' }}
              {...cardToPay.totalPayment === amount && { isChecked: true }}
              mId="totalOption"
              name="paymentOption"
              label={t('shortCutToggle.total')}
              text={totalPayment}
              value="totalOption"
              onMChange={(e: CustomEvent) => setSelectedOption(e, cardToPay.totalPayment)}
            />
            <MShortcutToggle
              className={
                shortcut !== 'otherAmount' ? 'd-block' : 'd-none'
              }
              key="3"
              {...cardToPay.totalPayment === 0 && { state: 'disabled' }}
              mId="otherAmountOption"
              name="paymentOption"
              label={t('shortCutToggle.other')}
              text={t('shortCutToggle.amount')}
              value="otherAmount"
              onMChange={(e: CustomEvent) => setSelectedOption(e, cardToPay.minimumPayment)}
            />
            <MCurrency
              className={
                shortcut === 'otherAmount' ? 'd-block' : 'd-none'
              }
              mId="debtInput"
              theme="info"
              placeholder={t('currencyInput.placeholder')}
              hint={
                amountAvailable >= 0
                  ? t('currencyInput.remainingValid', { remaining: availableFormatted })
                  : t('currencyInput.remainingInvalid', { amount: format(amount ?? 0) })
              }
              iconLabel="currency-dollar"
              hintIconStart="info-circle"
              minValue={cardToPay.minimumPayment}
              maxValue={accountSelected?.value}
              // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
              onMChange={({ detail: { amount: value } }) => setAmount(value)}
              value={amount}
            />
            <MShortcutToggle
              key="4"
              mId="alternativeOption"
              name="paymentOption"
              label={t('shortCutToggle.paymentAlternatives')}
              text="..."
              {...cardToPay.minimumPayment === 0 && { state: 'disabled' }}
              {...cardToPay.minimumPayment > 0 && {
                'data-bs-toggle': 'modal',
                'data-bs-target': '#paymentAlt',
              }}
              value="alternativeOption"
              onMChange={({ detail }: CustomEvent) => setShortcut(detail as string)}
              white
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
              {...(cardToPay.minimumPayment > 0 && amount && amountAvailable >= 0) && {
                'data-bs-toggle': 'modal',
                'data-bs-target': '#modalSchedulePayment',
              }}
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
                  ? t('collapse.yesScheduleLabel', { date: schedule.dateShow })
                  : t('collapse.noScheduleLabel')}
              </small>
            </div>
            <div
              className="px-3 py-2 border rounded-1 mb-2"
              {...(cardToPay.minimumPayment > 0 && amount && amountAvailable >= 0) && {
                'data-bs-toggle': 'modal',
                'data-bs-target': '#modalRecurrentPayment',
              }}
            >
              <MFormSwitch
                class="d-inline-flex"
                mId="recurrentPayment"
                label={t('collapse.recurring')}
                isDisabled
                isChecked={isRecurrent}
                {...isRecurrent && ({ labelOn: t('collapse.yesLabel') })}
                {...!isRecurrent && ({ labelOff: t('collapse.noLabel') })}
              />
              <small
                className="d-block text-info text-start"
              >
                {isRecurrent
                  ? t('collapse.yesRecurrentLabel', { frequency: recurring.start.frequency })
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
          {/* Pointer events?  */}
          <MButton
            {...(cardToPay.minimumPayment === 0 || !amount || amountAvailable < 0) && { state: 'disabled' }}
            {...(cardToPay.minimumPayment > 0 && amount && amountAvailable >= 0) && {
              'data-bs-toggle': 'modal',
              'data-bs-target': '#modalConfirmPayment',
            }}
            text={
              isScheduled ? t('button.schedule') : t('button.pay')
            }
            theme="primary-gradient"
            isPill
            iconRight="check-lg"
          />
        </div>
      </div>
      <ModalPaymentAlternatives />
      <ModalSchedule onAccept={setIsScheduled} />
      <ModalRecurrentPay onAccept={setIsRecurrent} />
      <ModalConfirmPayment isScheduled={isScheduled} />
      {/* TODO: Add schedule option to store */}
      {isScheduled && (
        <MAlert
          className="custom-alert fixed-bottom p-3 w-100"
          theme="info"
          close
        >
          {t('alert.schedule', { amount, date: schedule.dateShow })}
        </MAlert>
      )}
    </>
  );
}
