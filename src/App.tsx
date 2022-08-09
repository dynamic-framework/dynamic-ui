import {
  MApp,
  MSelect,
  MListItem,
  MButton,
  MAlert,
} from '@modyolabs/react-design-system';

import ModalAccountSelector from './components/ModalAccountSelector';
import PaymentPanel from './components/PaymentPanel';
import useAccounts, { Account } from './hooks/useAccounts';
import PaymentResult from './components/PaymentResult';

const TOTAL_PAYMENT = 4956;
const MINIMUM_PAYMENT = 200;

export default function App() {
  const {
    accounts,
    accountSelected,
    setAccountSelected,
    isPaid,
    setIsPaid,
  } = useAccounts();

  return (
    <MApp>
      { !isPaid ? (
        <>
          <div className="container pb-5 mb-5">
            <div className="pb-3 px-4">
              <div className="d-flex justify-content-between align-items-center mb-5 mt-4">
                <MButton iconLeft="arrow-left" isPill theme="info" variant="text" />
                <h6 className="fw-bold m-0 flex-grow-1 text-center">Paying Visa ···456</h6>
              </div>
              {accountSelected && (
              <MButton
                class="account-selector d-block d-lg-none mb-3"
                text={`From: ${accountSelected.type} ${accountSelected.mask}`}
                theme="info"
                iconRight="chevron-down"
                isPill
                data-bs-toggle="modal"
                data-bs-target="#accountSelector"
                variant="outline"
              />
              )}
              <MSelect
                class="mb-3 d-none d-lg-block"
                mId="selectAccount"
                variant="transparent"
                theme="info"
                labelExtractor={({ type, mask }: Account) => `From: ${type} ${mask}`}
                options={accounts}
                onMChange={
                  ({ detail: account }: CustomEvent<Account>) => setAccountSelected(account)
                }
              />
              <MListItem value="12/31/22" text="Pay until" class="mb-2 p-1" />
              <MListItem value={TOTAL_PAYMENT} text="To be payed" class="p-1" />
            </div>
            <PaymentPanel
              base={accountSelected?.value}
              minimumPayment={MINIMUM_PAYMENT}
              setIsPaid={setIsPaid}
            />
          </div>
          { MINIMUM_PAYMENT <= 0 && (
          <div className="alerta fixed-bottom p-3 w-100">
            <MAlert icon close theme="info">
              You have nothing to pay yet
            </MAlert>
          </div>
          )}
          {accountSelected && (
          <ModalAccountSelector
            accounts={accounts}
            selected={accountSelected}
            onSelect={setAccountSelected}
          />
          )}
        </>
      )
        : <PaymentResult />}
    </MApp>
  );
}
