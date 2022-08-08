import { useEffect, useState } from 'react';
import {
  MCurrency,
  MButton,
  MFormSwitch,
  MShortcutToggle,
} from '@modyolabs/react-design-system';
import ModalPaymentAlternatives from './ModalPaymentAlternatives';
import ModalSchedule from './ModalSchedule';
const PaymentPanel = ({ base = 1000 }) => {
  const [amountAvailable, setAmountAvailable] = useState(base);
  const [amountUsed, setAmountUsed] = useState(undefined);
  const [theme, setTheme] = useState('info');

  const [paymentOptions, setPaymentOptions] = useState([
    {
      id: '1',
      label: 'Minimum',
      text: '$100',
      name: 'paymentOption',
      value: '1',
    },
    {
      id: '2',
      label: 'Total',
      text: '$4,000',
      name: 'paymentOption',
      value: '2',
    },
    {
      id: '3',
      label: 'Payment Alternatives',
      text: '...',
      name: 'paymentOption',
      value: '3',
    },
  ]);

  const handlerChange = ({ detail: { amount } }: CustomEvent) => {
    setAmountUsed(amount);
  };

  const handlerPaymentOption = ({ detail }: CustomEvent) => {
    console.log('Payment option selected:', detail);
  };

  useEffect(() => {
    console.log(amountUsed);

    if (amountUsed) {
      if (amountUsed === 0) {
        setAmountAvailable(base);
        setTheme('info');
      } else {
        setAmountAvailable(base - amountUsed);
      }
    }
  }, [amountUsed]);

  useEffect(() => {
    if (amountAvailable >= 0) {
      setTheme('info')
    } else {
      setTheme('danger')
    }
  }, [amountAvailable]);

  return (
    <>
      <div className='p-4 bg-white text-center rounded'>
        <MCurrency
          class='pb-4'
          mId='debtInput'
          placeholder='How much?'
          theme={theme}
          hint={`${amountAvailable}`}
          iconLabel='currency-dollar'
          hintIconStart='info-circle'
          minValue={0}
          maxValue={base}
          variant="prime"
          onMChange={handlerChange}
          value={amountUsed}
        />
        <div className="row g-0 m-0 p-0 pt-4 pb-2">
          <div className="col-12 scroll-h pb-2 mx-auto">
            {
              paymentOptions.map(({ id, label, text, value, name }) => {
                return (
                  <MShortcutToggle
                    key={id}
                    mId={id}
                    name={name}
                    label={label}
                    text={text}
                    value={value}
                    onMChange={handlerPaymentOption}
                  />
                )
              })
            }
          </div>
        </div>
        <div className="pb-4">
          <div
            className="collapse"
            id="moreOptions">
            <div
              className="px-3 py-2 border rounded-1 mb-2">
              <MFormSwitch
                data-bs-toggle="modal"
                data-bs-target="#modalSchedulePayment"
                class='d-inline-flex'
                mId='schedulePayment'
                label='Schedule'
              />
              <p
                className='small m-0 text-info'
              >
                This payment will be instant
              </p>
            </div>
            <div
              className="px-3 py-2 border rounded-1 mb-2"
            >
              <MFormSwitch
                class='d-inline-flex'
                mId='reucrrentPayment'
                label='Recurrent'
              />
              <p
                className='small m-0 text-info'>
                This payment will not autorepeat
              </p>
            </div>
          </div>
          <MButton
            variant='text'
            theme='info'
            text='More Options'
            iconRight='chevron-down'
            data-bs-toggle="collapse"
            data-bs-target="#moreOptions"
            aria-expanded="false"
            aria-controls="collapseExample" />
        </div>
        <div
          className="d-flex justify-content-center pt-4">
          <MButton
            text='Pay'
            theme='primary-gradient'
            isPill
            iconRight='check-lg'
          />
        </div>
      </div>
      <ModalPaymentAlternatives />
      <ModalSchedule />
    </>
  )
}

export default PaymentPanel