import { useState } from 'react';

import { MApp, MInput } from '@modyo/react-design-system';

// import Buttons from './Buttons';

export default function App() {
  const [value, setValue] = useState('');
  return (
    <MApp>
      <br />
      <br />
      <MInput
        mId="input-1"
        placeholder="Placeholder"
        value={value}
        iconStart="@"
        iconEnd="@"
        hint="hint to display, also used to display validity feedback"
        hintIconStart="@"
        hintIconEnd="@"
      />
      {/* <Buttons pill /> */}
    </MApp>
  );
}
