import { MButton, MModal } from '@modyolabs/react-design-system'
import React from 'react'

const ModalSchedule = () => {
  return (
    <MModal
      mId='modalSchedulePayment'
      centered
      static
    >
      <div slot='header' className='m-3'>
        Schedule $ammount
      </div>
      <div
        slot='body'
        className='d-flex flex-column justify-content-center align-items-center mx-3'>
        You are scheduling to pay target2Pay from your Savings Account ··· 345
      </div>
      <div slot='footer' className='d-flex flex-column align-items-center w-100 m-3'>
        <MButton
          class='mb-2'
          text='Schedule'
          theme='primary'
          isPill />

        <MButton
          data-bs-dismiss="modal"
          class='mb-2'
          text='Cancel'
          theme='primary'
          variant='outline'
          isPill />
      </div>
    </MModal>
  )
}

export default ModalSchedule