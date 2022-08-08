import { MButton, MListItem, MModal, MQuickAction } from '@modyolabs/react-design-system'
import React from 'react'

const ModalAccountSelector = () => {
  return (
    <MModal
      mId='accountSelector'
      centered
      static
    >
      <div
        slot='body'
        className='d-flex flex-column justify-content-center align-items-center'>
        <MListItem
          variant='selectable'
          class='w-100'
          icon=""
          value="$ 1,234.00"
          selectableProps={{
            id: 'account1',
            name: 'radioAccounts'
          }}
          text='{Savings}'
          subtext='··· 654'
        />
        <MListItem
          variant='selectable'
          class='w-100'
          icon=""
          value="$ 1,234.00"
          selectableProps={{
            id: 'account2',
            name: 'radioAccounts'
          }}
          text='{Checking}'
          subtext='···653'
        />
        <MListItem
          variant='selectable'
          class='w-100'
          icon=""
          value="$ 1,234.00"
          selectableProps={{
            id: 'account3',
            name: 'radioAccounts'
          }}
          text='{Current}'
          subtext='···876'
        />
        <MButton
          data-bs-dismiss="modal"
          class='my-4'
          text='Confirm'
          theme='primary'
          isPill />
      </div>
    </MModal>
  )
}

export default ModalAccountSelector