import React from 'react'
import {
  MCurrency,
  MButton
} from '@modyolabs/react-design-system';
const PaymentPanel = () => {
  return (
    <>
      <div className='p-4 bg-white text-center rounded'>
        <MCurrency
          class='pb-4'
          mId='debtInput'
          placeholder='How much?'
          theme='info'
          hint='$ 123,451 remaining'
          iconLabel='currency-dollar'
          hintIconStart='info-circle'
          maxValue={0}
          variant="prime"
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
          <MButton text='Pay _/' theme='primary' isPill iconRight='_' iconLeft='_'/>
        </div>
      </div>
    </>
  )
}

export default PaymentPanel