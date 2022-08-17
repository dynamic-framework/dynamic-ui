import { useState } from 'react';
import { MButton, MListItem, MModal } from '@modyolabs/react-design-system';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getAccounts, getAccountSelected } from '../store/selectors/widget';
import { setAccountSelected } from '../store/slices/widget';
import type { Account } from '../store/slices/widget';

export default function ModalAccountSelector() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const accounts = useAppSelector(getAccounts);
  const accountSelected = useAppSelector(getAccountSelected);
  const [value, setValue] = useState<Account | undefined>(accountSelected);

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
          class="mt-4 mb-3 w-50"
          text={t('button.confirm')}
          theme="primary"
          isPill
          onClick={() => dispatch(setAccountSelected(value))}
        />
      </div>
    </MModal>
  );
}
