import {
  MApp,
  MSelect,
  MListItem,
  MButton
} from '@modyolabs/react-design-system';
import { useState } from 'react';
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
      <div className="container">
        <div className='pb-3 px-4'>
          <div className='d-flex justify-content-between align-items-center mb-5 mt-4'>
            <MButton iconLeft='arrow-left' isPill theme='info' variant='text'></MButton>
            <h6 className='fw-bold m-0 flex-grow-1 text-center'>Paying Visa ···456</h6>
          </div>

          <MSelect
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
          <br />
          <MListItem value="12/31/22" text="Pay until" />
          <MListItem value="$4,956.00" text="To be payed" />
        </div>
        <div className='bg-white rounded p-4'>
          <PaymentPanel />
          <div className="row g-0 m-0 p-0 mb-5">
            <div className="col-4">
              Minimum
            </div>
            <div className="col-4">
              Total
            </div>
            <div className="col-4">
              Payments Alternatives
            </div>
            <div className="col-12">
              More options
            </div>
          </div>
          <div className="row g-0 m-0 p-0">
            <div className="col-12 d-flex justify-content-center">
              <MButton text='Pay _/' theme='primary' isPill iconRight='_' iconLeft='_' />
            </div>
          </div>
        </div>
      </div>
    </MApp>
  );
}

export default App;
