import { MText, MButton, MAlert, MInput } from '@modyo/react-design-system';
import { useState } from 'react';

export default function App() {
  const [value, setValue] = useState('initial');
  return (
    <div>
      <h1>Hello</h1>
      <MText>world! from react</MText>
      <MButton
        text="click me!"
        onModButtonClick={() => (
          console.log('button-clicked')
        )}
      />
      <br />
      <MAlert
        header="the title"
        body="body prop text"
        actions={[
          { id: 'action 1', text: 'Action 1' },
          { id: 'action 2', text: 'Action 2' },
        ]}
        onModActionClick={({ detail: alertAction }) => (
          console.log('action-clicked', alertAction)
        )}
      >
        children text
      </MAlert>
      <br />
      <MInput
        id="input-1"
        placeholder="the placeholder"
        type="text"
        value={value}
        onModChange={({ detail }) => setValue(detail)}
      />
      <MText>
        the new value is: {value}
      </MText>
    </div>
  );
}
