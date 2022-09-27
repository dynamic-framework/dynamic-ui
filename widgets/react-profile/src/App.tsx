import { MApp, MCalendar, MSkeleton } from '@modyolabs/modyo-design-system-react';
import Inputs from './Inputs';

import Buttons from './Buttons';
import { useState } from 'react';

export default function App() {

  const [startDate, setStartDate] = useState('');

  return (
    <MApp>
      <br />
      <br />
      <MSkeleton>
        <>
          <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
        </>
      </MSkeleton>
      <MCalendar date={startDate} setDate={setStartDate} />
      <Inputs />
      <Buttons pill />
    </MApp>
  );
}
