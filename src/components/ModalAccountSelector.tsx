import { useState } from 'react';

import { MButton, MListItem, MModal } from '@modyolabs/react-design-system';

import type { Account } from '../hooks/useAccounts';

interface Props {
  accounts: Array<Account>;
  selected: Account;
  onSelect: (account: Account) => void;
}

export default function ModalAccountSelector(
  {
    accounts,
    selected,
    onSelect,
  }: Props,
) {
  const [value, setValue] = useState<Account>(selected);
  return (
    <MModal
      mId="accountSelector"
      centered
      static
    >
      <div
        slot="body"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        {accounts.map((account) => (
          <MListItem
            key={account.id}
            variant="selectable"
            class="w-100"
            value={account.value}
            selectableProps={{
              id: `account${account.id}`,
              name: 'radioAccounts',
              value: account.id,
              checked: value.id === account.id,
            }}
            text={`{${account.type}}`}
            subtext={account.mask}
            onClick={() => setValue(account)}
          />
        ))}
        <MButton
          data-bs-dismiss="modal"
          class="my-4"
          text="Confirm"
          theme="primary"
          isPill
          onClick={() => onSelect(value)}
        />
      </div>
    </MModal>
  );
}
