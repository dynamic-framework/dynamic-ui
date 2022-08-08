import { useState } from 'react';

import {
  MApp,
  MSelect,
  MListItem,
  MButton,
  MAlert
} from '@modyolabs/react-design-system';

import ModalAccountSelector from './components/ModalAccountSelector';
import PaymentPanel from './components/PaymentPanel';

const ACCOUNTS = [
  {
    id: 1,
    value: '$ 1,200.00',
    valueNumber: 1200,
    last: 654,
    type: 'Saving'
  },
  {
    id: 2,
    value: '$ 1,500.00',
    valueNumber: 1500,
    type: 'Checking',
    last: 653
  },
  {
    id: 3,
    value: '$ 1,000.00',
    valueNumber: 1000,
    type: 'Current',
    last: 876,
  }
];

function App() {
  const [account, setAccount] = useState(ACCOUNTS[0]);

  return (
    <MApp>
      <div className="container pb-5 mb-5">
        <div className='pb-3 px-4'>
          <div className='d-flex justify-content-between align-items-center mb-5 mt-4'>
            <MButton iconLeft='arrow-left' isPill theme='info' variant='text'></MButton>
            <h6 className='fw-bold m-0 flex-grow-1 text-center'>Paying Visa ···456</h6>
          </div>
          <MButton
            class='account-selector d-block d-lg-none mb-3'
            text={`From: ${account.type} ... ${account.last}`}
            theme='info'
            iconRight='chevron-down'
            isPill
            data-bs-toggle="modal"
            data-bs-target="#accountSelector"
            variant='outline'
          />
          <MSelect
            class='mb-3 d-none d-lg-block'
            mId='selectAccount'
            variant='transparent'
            theme="info"
          >
            {ACCOUNTS.map(({ id, type, last }) => (
              <option key={id} value={id}>From: {type} ... {last}</option>
            ))}
          </MSelect>
          <MListItem value="12/31/22" text="Pay until" class='mb-2 p-1' />
          <MListItem value="$4,956.00" text="To be payed" class="p-1" />
        </div>
        <PaymentPanel base={account.valueNumber} />
      </div>
      <div className="alerta fixed-bottom p-3 w-100">
        <MAlert icon close theme='info' >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </MAlert>
      </div>
      <ModalAccountSelector accounts={ACCOUNTS} onSelect={setAccount} />

    </MApp>
  );
}

export default App;
