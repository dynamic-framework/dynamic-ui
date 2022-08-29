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
    <MApp>
      {!isPaid ? <Payment /> : <PaymentResult />}
    </MApp>
  );
}
