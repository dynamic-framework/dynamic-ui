import { MButton, MModal, MSegmentControl, MSegmentControlItem } from '@modyolabs/react-design-system'
import React from 'react'

const ModalRecurrentPay = () => {
  return (
    <MModal
      mId='recurrentPayment'
      centered
      static
      closeText="Cancel"
    >
      <div slot="header" className='p-3'>
        <h5>Recurrent</h5>
      </div>
      <div
        slot='body'
        className='d-flex flex-column justify-content-center align-items-start px-3 gap-3'>
          <div>
            <small className='text-info px-2 py-1'>Recurrent</small>
            <MSegmentControl>
              <MSegmentControlItem
                checked
                name='repeatTime'
                mId='weekly'
                value='8'
                label='Weekly'
              />
              <MSegmentControlItem
                name='repeatTime'
                mId='monthly'
                value='30'
                label='Monthly'
              />
              <MSegmentControlItem
                name='repeatTime'
                mId='custom'
                value='custom'
                label='Custom'
              />
            </MSegmentControl>
          </div>
          <div>
            <small className='text-dark px-2 py-1'>
              On
            </small>
          </div>
          <div>
            <small className='text-info px-2 py-1'>Ends</small>
            <MSegmentControl>
              <MSegmentControlItem
                checked
                name='endTime'
                mId='never'
                value='never'
                label='Never'
              />
              <MSegmentControlItem
                name='endTime'
                mId='date'
                value='date'
                label='Date'
              />
              <MSegmentControlItem
                name='endTime'
                mId='occurrencies'
                value='occurrencies'
                label='Occurencies'
              />
            </MSegmentControl>
          </div>
      </div>
      <div slot="footer" className='w-100 text-center'>
        <MButton
          class='mb-2'
          text='Confirm'
          theme='primary'
          isPill />
      </div>
    </MModal>

  )
}

export default ModalRecurrentPay