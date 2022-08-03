import React from 'react'
import {
  MCurrency,
} from '@modyolabs/react-design-system';
const PaymentPanel = () => {
  return (
    <div className='pt-4 bg-white text-center g-0 m-0 mb-5'>
      <MCurrency
        mId='debtInput'
        placeholder='How much?'
        theme='info'
        hint='$ 123,451 remaining'
        iconLabel='currency-dollar'
        hintIconStart='info-circle'
        maxValue={0}
        variant="prime"
      />
    </div>
  )
}

export default PaymentPanel