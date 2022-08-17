/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import {
  MCurrency,
  MButton,
  MFormSwitch,
  MShortcutToggle,
} from '@modyolabs/react-design-system';

import ModalPaymentAlternatives from './ModalPaymentAlternatives';
import ModalSchedule from './ModalSchedule';
import ModalRecurrentPay from './ModalRecurrentPay';
import usePaymentInput from '../hooks/usePaymentInput';
import ModalConfirmPayment from './ModalConfirmPayment';
import { useAppSelector } from '../store/hooks';
import { getAccountSelected, getCardToPay } from '../store/selectors/widget';

export default function PaymentPanel() {
  const accountSelected = useAppSelector(getAccountSelected);
  const cardToPay = useAppSelector(getCardToPay);

  const {
    amountAvailable,
    amount,
    setAmount,
  } = usePaymentInput(accountSelected?.value);
  const [isScheduled, setIsScheduled] = useState(false);
  const [isRecurrent, setIsRecurrent] = useState(false);

  if (!accountSelected) {
    return <div>placeholder</div>;
  }

  return (
    <>
      <div className="p-4 bg-white text-center rounded">
        <MCurrency
          class="pb-4"
          mId="debtInput"
          theme="info"
          placeholder="How much?"
          hint={`$ ${amountAvailable} remaining`}
          iconLabel="currency-dollar"
          hintIconStart="info-circle"
          minValue={0}
          maxValue={accountSelected?.value}
          variant="prime"
          onMChange={({ detail: { amount: value } }) => setAmount(value)}
          value={amount}
        />
        <div className="row g-0 m-0 p-0 pt-4 pb-2">
          <div className="col-12 justify-content-between scroll-h pb-2 mx-auto">
            <MShortcutToggle
              key="1"
              {...cardToPay.minimumPayment === 0 && { state: 'disabled' }}
              mId="minimumOption"
              name="paymentOption"
              label="Minimum"
              text={cardToPay.minimumPayment.toString()}
              value="minimumOption"
              onMChange={() => setAmount(cardToPay.minimumPayment)}
            />
            <MShortcutToggle
              key="2"
              {...cardToPay.minimumPayment === 0 && { state: 'disabled' }}
              mId="totalOption"
              name="paymentOption"
              label="Total"
              text={cardToPay.totalPayment.toString()}
              value="totalOption"
              onMChange={() => setAmount(cardToPay.totalPayment)}
            />
            <MShortcutToggle
              key="3"
              mId="alternativeOption"
              name="paymentOption"
              label="Payment Alternatives"
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
                label="Schedule"
                isDisabled
                isChecked={isScheduled}
              />
              <p
                className="small m-0 text-info"
              >
                This payment will be instant
              </p>
            </div>
            <div
              className="px-3 py-2 border rounded-1 mb-2"
              data-bs-toggle="modal"
              data-bs-target="#modalRecurrentPayment"
            >
              <MFormSwitch
                class="d-inline-flex"
                mId="recurrentPayment"
                label="Recurrent"
                isDisabled
                isChecked={isRecurrent}
              />
              <p
                className="small m-0 text-info"
              >
                This payment will not autorepeat
              </p>
            </div>
          </div>
          <MButton
            variant="text"
            theme="info"
            text="More Options"
            iconRight="chevron-down"
            data-bs-toggle="collapse"
            data-bs-target="#moreOptions"
            aria-expanded="false"
            aria-controls="collapseExample"
          />
        </div>
        <div
          className="d-flex justify-content-center pt-4"
        >
          <MButton
            {...cardToPay.minimumPayment === 0 && { state: 'disabled' }}
            data-bs-toggle="modal"
            data-bs-target="#modalConfirmPayment"
            text="Pay"
            theme="primary-gradient"
            isPill
            iconRight="check-lg"
          />
        </div>
      </div>
      <ModalPaymentAlternatives />
      <ModalSchedule onAccept={setIsScheduled} />
      <ModalRecurrentPay onAccept={setIsRecurrent} />
      <ModalConfirmPayment />
    </>
  );
}
