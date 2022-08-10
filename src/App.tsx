import { MApp } from '@modyolabs/react-design-system';

import useAccounts from './hooks/useAccounts';
import PaymentResult from './components/PaymentResult';
import Payment from './components/Payment';
import { useAppContext } from './providers/AppContext';

export default function App() {
  useAccounts();
  const { isPaid } = useAppContext();

  return (
    <MApp>
      {!isPaid ? <Payment /> : <PaymentResult />}
    </MApp>
  );
}
