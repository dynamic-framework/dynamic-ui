import { useState } from 'react';
import { MButton, MListItem, MModal } from '@modyolabs/react-design-system';
import { useTranslation } from 'react-i18next';

import { useAppContext } from '../providers/AppContext';
import type { Account } from '../providers/AppContext';

export default function ModalAccountSelector() {
  const {
    accounts,
    accountSelected,
    setAccountSelected,
  } = useAppContext();
  const [value, setValue] = useState<Account | undefined>(accountSelected);
  const { t } = useTranslation();

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
              checked: value?.id === account.id,
            }}
            text={`${account.type}`}
            subtext={account.mask}
            onClick={() => setValue(account)}
          />
        ))}
        <MButton
          data-bs-dismiss="modal"
          class="my-4"
          text={t('button.confirm')}
          theme="primary"
          isPill
          onClick={() => setAccountSelected(value)}
        />
      </div>
    </MModal>
  );
}
