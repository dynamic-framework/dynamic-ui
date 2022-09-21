import { MApp } from '@modyolabs/react-design-system';

import useAccounts from './hooks/useAccounts';
import PaymentResult from './components/PaymentResult';
import Payment from './components/Payment';
import { useAppSelector } from './store/hooks';
import { getIsPaid } from './store/selectors';
import useClient from './hooks/useClient';

export default function App() {
  useAccounts();
  useClient();
  const isPaid = useAppSelector(getIsPaid);

  return (
    <MApp className="h-100">
      <div className={`container mb-5 h-100 ${isPaid ? 'bg-light' : ''}`}>
        <div className="row m-0 p-0 g-0 mx-auto justify-content-center">
          {!isPaid ? <Payment /> : <PaymentResult />}
        </div>
      </div>
    </MApp>
  );
}
