import { MApp } from '@modyolabs/react-design-system';

import useAccounts from './hooks/useAccounts';
import PaymentResult from './components/PaymentResult';
import Payment from './components/Payment';
import { useAppSelector } from './store/hooks';
import { getIsPaid } from './store/selectors/widget';

export default function App() {
  useAccounts();
  const isPaid = useAppSelector(getIsPaid);

  return (
    <MApp>
      {!isPaid ? <Payment /> : <PaymentResult />}
    </MApp>
  );
}
