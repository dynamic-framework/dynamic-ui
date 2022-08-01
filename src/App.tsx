import {
  MApp,
  MSelect,
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
      <div className="py-4 px-3">
        <div className='px-4 pb-3'>
          <MSelect
            mId='selectAccount'
            variant='transparent'
          >
            {
              accounts.map(({id, name}) => (
                <option key={id} value={id}>From: {name}</option>
              ))
            }
          </MSelect>
        </div>
        <PaymentPanel/>
      </div>
    </MApp>
  );
}

export default App;
