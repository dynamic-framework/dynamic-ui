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

function App() {
  const [accounts, setAccounts] = useState([{
    id: 1,
    name: 'Savings ···  245'
  },
  {
    id: 2,
    name: 'Savings ···  345'
  }])

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
            text='From: Savings ···  245'
            theme='info'
            iconRight='chevron-down'
            isPill
            data-bs-toggle="modal"
            data-bs-target="#accountSelector"
            variant='outline'/>

          <MSelect
            class='mb-3 d-none d-lg-block'
            mId='selectAccount'
            variant='transparent'
            theme="info"
          >
            {
              accounts.map(({ id, name }) => (
                <option key={id} value={id}>From: {name}</option>
              ))
            }
          </MSelect>

          <MListItem value="12/31/22" text="Pay until" class='mb-2 p-1' />
          <MListItem value="$4,956.00" text="To be payed" class="p-1" />
        </div>
        <PaymentPanel />
      </div>
      <div className="alerta fixed-bottom p-3 w-100">
        <MAlert icon close theme='info' >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </MAlert>
      </div>
      <ModalAccountSelector />

    </MApp>
  );
}

export default App;
