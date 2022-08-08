import { MButton, MListItem, MModal } from '@modyolabs/react-design-system'
import React from 'react'

interface Props {
  accounts: Array<any>;
  onSelect: (account: any) => void;
}

const ModalAccountSelector = (
  {
    accounts,
    onSelect
  }: Props
) => {
  return (
    <MModal
      mId='accountSelector'
      centered
      static
    >
      <div
        slot='body'
        className='d-flex flex-column justify-content-center align-items-center'>
        {accounts.map((account) => (
          <MListItem
            key={account.id}
            variant='selectable'
            class='w-100'
            icon=""
            value={account.value}
            selectableProps={{
              id: `account${account.id}`,
              name: 'radioAccounts'
            }}
            text={`{${account.type}}`}
            subtext={`··· ${account.last}`}
            onClick={() => onSelect(account)}
          />
        ))}
        <MButton
          data-bs-dismiss="modal"
          class='my-4'
          text='Confirm'
          theme='primary'
          isPill
        />
      </div>
    </MModal>
  )
}

export default ModalAccountSelector
