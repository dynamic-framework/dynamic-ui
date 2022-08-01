import React from 'react'
import {
  MCurrency,
} from '@modyolabs/react-design-system';
const PaymentPanel = () => {
  return (
    <div className='p-4 bg-white text-center'>
      <MCurrency
        mId='debtInput'
        placeholder='How much?'
        theme='light'
        hint='$ 123,451 remaining'
        iconLabel='currency-dollar'
        hintIconStart='info-circle'
      />
    </div>
  )
}

export default PaymentPanel