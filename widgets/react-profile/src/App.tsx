import { MText, MButton, MAlert, MInput, MCard } from '@modyo/react-design-system';
import { useState } from 'react';

export default function App() {
  const [value, setValue] = useState('initial');
  return (
    <div>
      <MButton
        text="click me!"
        onModButtonClick={() => (
          console.log('button-clicked')
        )}
      />
      <br />
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
      <br />
      <MCard
        header="card header"
        theme="warning"
      >
        card w/o shadow
      </MCard>
      <br />
      <br />
      <MCard
        header="card header"
        style={{
          '--bs-primary-rgb': '255, 0, 0',
        }}
      >
        card w style
      </MCard>
      <br />
      <br />
      <MInput
        id="input-1"
        placeholder="the placeholder"
        type="text"
        value={value}
        onModChange={({ detail }) => setValue(detail)}
      />
      <br />
      <br />
      <MText
        style={{
          '--bs-dark-rgb': '255, 0, 0',
        }}
      >
        the new value is: {value}
      </MText>
    </div>
  );
}
