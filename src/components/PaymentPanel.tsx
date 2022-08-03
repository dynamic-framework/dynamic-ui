import { useEffect, useState } from 'react';
import {
  MCurrency,
  MButton
} from '@modyolabs/react-design-system';
const PaymentPanel = ({ base = 1000 }) => {
  const [amountAvailable, setAmountAvailable] = useState(base);
  const [amountUsed, setAmountUsed] = useState(undefined);
  const [theme, setTheme] = useState('info');

  const handlerChange = ({ detail: { amount } }: CustomEvent) => {
    setAmountUsed(amount);
  };

  useEffect(() => {
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
          <div className="col-4">
            Minimum
          </div>
          <div className="col-4">
            Total
          </div>
          <div className="col-4">
            Payments Alternatives
          </div>
        </div>
        <div className="pb-4">
          More options
        </div>
        <div className="d-flex justify-content-center pt-4">
          <MButton text='Pay _/' theme='primary' isPill iconRight='_' iconLeft='_' />
        </div>
      </div>
    </>
  )
}

export default PaymentPanel