/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/jsx-props-no-spreading */
import { useMemo, useState } from 'react';
import {
  MButton,
  MFormSwitch,
  MShortcutToggle,
  MSkeleton,
  MAlert,
  MCurrency,
} from '@modyolabs/react-design-system';
import { useTranslation } from 'react-i18next';

import ModalPaymentAlternatives from './ModalPaymentAlternatives';
import ModalSchedule from './ModalSchedule';
import usePaymentInput from '../hooks/usePaymentInput';
import ModalConfirmPayment from './ModalConfirmPayment';
import { useAppSelector } from '../store/hooks';
import {
  getAccountSelected, getCardToPay, getSchedule, getUser,
} from '../store/selectors';
import useFormatCurrency from '../hooks/useFormatCurrency';

export default function PaymentPanel() {
  const { t } = useTranslation();
  const accountSelected = useAppSelector(getAccountSelected);
  const cardToPay = useAppSelector(getCardToPay);
  const schedule = useAppSelector(getSchedule);
  const user = useAppSelector(getUser);

  const {
    amountAvailable,
    amount,
    setAmount,
  } = usePaymentInput(accountSelected?.value);
  const [isScheduled, setIsScheduled] = useState(false);
  const [shortcut, setShortcut] = useState('');
  const {
    format,
    values: [
      minimumPayment,
      totalPayment,
    ],
  } = useFormatCurrency(
    cardToPay.minimumPayment,
    cardToPay.totalPayment,
  );

  const setSelectedOption = ({ detail }: CustomEvent, value: number) => {
    setShortcut(detail as string);
    setAmount(value);
  };

  const buttonPaymentAmountMessage = useMemo(() => {
    if (isScheduled) {
      return t('button.schedule');
    }
    if (!amount) {
      return t('button.pay');
    }
    return t('button.payAmount', { amount: format(amount ?? 0) });
  }, [isScheduled, amount, t, format]);

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
      <div className="pt-4">
        <div className="d-flex flex-column justify-content-between pb-2 mx-auto amount-options">
          <p className="px-3 text-gray fw-semibold">Amount</p>
          <MShortcutToggle
            class="d-block"
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
            class="d-block"
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
          {
            user.canPayOtherAmount && (
              <>
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
                      shortcut === 'otherAmount' ? 'd-block m-2' : 'd-none'
                    }
                  mId="debtInput"
                  theme="info"
                  placeholder={t('currencyInput.placeholder')}
                  iconLabel="currency-dollar"
                  hintIconStart="info-circle"
                  minValue={cardToPay.minimumPayment}
                  maxValue={accountSelected?.value}
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                  onMChange={({ detail: { amount: value } }) => setAmount(value)}
                  value={amount}
                />
              </>
            )
          }
          {
            user.hasPaymentAlternatives && (
              <MShortcutToggle
                class="d-block"
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
            )
          }
        </div>
      </div>
      <div className="pb-4 text-center">
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
        </div>
        <MButton
          className="more-options-btn"
          variant="text"
          theme="info"
          text={t('collapse.options')}
          iconRight="chevron-down"
          data-bs-toggle="collapse"
          data-bs-target="#moreOptions"
          aria-expanded="false"
          aria-controls="collapseExample"
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
          text={buttonPaymentAmountMessage}
          theme="primary-gradient"
          isPill
          iconRight="check-lg"
        />
      </div>
      <ModalPaymentAlternatives />
      <ModalSchedule onAccept={setIsScheduled} />
      <ModalConfirmPayment />
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
