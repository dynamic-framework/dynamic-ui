/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/jsx-props-no-spreading */
import { useMemo, useState } from 'react';
import {
  MButton,
  MFormSwitch,
  MShortcutToggle,
  MAlert,
  MCurrency,
  MHint,
} from '@modyolabs/react-design-system';
import { useTranslation } from 'react-i18next';

import ModalPaymentAlternatives from './ModalPaymentAlternatives';
import ModalSchedule from './ModalSchedule';
import usePaymentInput from '../hooks/usePaymentInput';
import ModalConfirmPayment from './ModalConfirmPayment';
import { useAppSelector } from '../store/hooks';
import {
  getAccountSelected,
  getAutoRepeat,
  getDebt,
  getSchedule,
  getSelectedCurrency,
  getUser,
} from '../store/selectors';
import useFormatCurrency from '../hooks/useFormatCurrency';

export default function PaymentPanel() {
  const { t } = useTranslation();
  const accountSelected = useAppSelector(getAccountSelected);
  const schedule = useAppSelector(getSchedule);
  const recurringStart = useAppSelector(getAutoRepeat);
  const user = useAppSelector(getUser);
  const debt = useAppSelector(getDebt);
  const selectedCurrency = useAppSelector(getSelectedCurrency);

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
    debt.minimumPayment,
    debt.totalPayment,
  );

  const paySameCurrency = useMemo(
    () => selectedCurrency === accountSelected?.currency,
    [selectedCurrency, accountSelected],
  );

  const setSelectedOption = ({ detail }: CustomEvent, value: number) => {
    setShortcut(detail as string);
    setAmount(value);
  };

  const buttonPaymentAmountMessage = useMemo(() => {
    if (user.canPayWithoutDebt) {
      return t('button.back');
    }
    if (isScheduled) {
      return t('button.schedule');
    }
    if (!amount) {
      return t('button.pay');
    }
    return t('button.payAmount', { amount: format(amount ?? 0) });
  }, [isScheduled, amount, t, format, user]);

  const alertMessageSchedule = useMemo(() => {
    if (isScheduled && recurringStart.enabled) {
      return t('alert.scheduleAndRecurring', { amount, date: schedule.dateShow, repeatType: recurringStart.frequency });
    }
    return t('alert.schedule', { amount, date: schedule.dateShow });
  }, [amount, schedule, isScheduled, recurringStart, t]);

  const hintCurrency = useMemo(() => {
    if (amount && amount > debt.totalPayment) {
      return {
        message: 'You are paying more than the billed amount',
        icon: 'emoji-smile',
      };
    }
    if (amount && accountSelected && amount > accountSelected?.value) {
      return {
        message: 'You don’t have enough funds to pay this amount',
        icon: 'emoji-smile',
      };
    }
    if (amount === 0) {
      return {
        message: 'Enter an amount to pay',
        icon: 'info-circle',
      };
    }
    return {
      message: '',
      icon: '',
    };
  }, [accountSelected, amount, debt]);

  if (!accountSelected) {
    return (null);
  }

  return (
    <>
      <div className="pt-4">
        <div className="d-flex flex-column justify-content-between pb-2 mx-auto amount-options">
          <p className="px-3 mb-1 text-gray fw-semibold">Amount</p>
          <MShortcutToggle
            class="d-block"
            key="1"
            {...debt.minimumPayment === 0 && { state: 'disabled' }}
            {...debt.minimumPayment === amount && { isChecked: true }}
            mId="minimumOption"
            name="paymentOption"
            label={t('shortCutToggle.minimum')}
            text={minimumPayment}
            {...!paySameCurrency && {
              subtext: `(${accountSelected.currency} ${debt.minimumPayment * 1.02})`,
            }}
            value="minimumOption"
            onMChange={(e: CustomEvent) => setSelectedOption(e, debt.minimumPayment)}
          />
          <MShortcutToggle
            class="d-block"
            key="2"
            {...debt.totalPayment === 0 && { state: 'disabled' }}
            {...debt.totalPayment === amount && { isChecked: true }}
            {...!paySameCurrency && {
              subtext: `(${accountSelected.currency} ${debt.totalPayment * 1.02})`,
            }}
            mId="totalOption"
            name="paymentOption"
            label={t('shortCutToggle.total')}
            text={totalPayment}
            value="totalOption"
            onMChange={(e: CustomEvent) => setSelectedOption(e, debt.totalPayment)}
          />
          {
            user.canPayOtherAmount && (
              <>
                <MShortcutToggle
                  className={
                      shortcut !== 'otherAmount' ? 'd-block' : 'd-none'
                    }
                  key="3"
                  {...debt.totalPayment === 0 && { state: 'disabled' }}
                  mId="otherAmountOption"
                  name="paymentOption"
                  label={t('shortCutToggle.other')}
                  text={t('shortCutToggle.amount')}
                  value="otherAmount"
                  onMChange={(e: CustomEvent) => setSelectedOption(e, 0)}
                />
                <MCurrency
                  className={
                    shortcut === 'otherAmount' ? 'd-block m-2' : 'd-none'
                  }
                  mId="debtInput"
                  theme="info"
                  selectOptions={!paySameCurrency ? [
                    { value: accountSelected.currency, label: accountSelected.currency },
                  ] : []}
                  placeholder={t('currencyInput.placeholder')}
                  iconLabel="currency-dollar"
                  hint={hintCurrency.message}
                  hintIconStart={hintCurrency.icon}
                  minValue={debt.minimumPayment}
                  maxValue={accountSelected?.value}
                  onMChange={({ detail: { amount: value } }) => setAmount(value as number)}
                  value={amount}
                />
              </>
            )
          }
          {
            ((shortcut === 'totalOption' && accountSelected?.value < debt.totalPayment)
            || (shortcut === 'minimumOption' && accountSelected?.value < debt.minimumPayment)) && (
              <MHint
                text="You don’t have enough funds to pay this amount"
                iconStart="info-circle"
                theme="danger"
              />
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
                {...debt.minimumPayment === 0 && { state: 'disabled' }}
                {...debt.minimumPayment > 0 && {
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
            {...(debt.minimumPayment > 0 && amount && amountAvailable >= 0) && {
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
          {...(debt.minimumPayment === 0 || !amount || amountAvailable < 0) && !user.canPayWithoutDebt && { state: 'disabled' }}
          {...(debt.minimumPayment > 0 && amount && amountAvailable >= 0) && {
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
          {alertMessageSchedule}
        </MAlert>
      )}
    </>
  );
}
