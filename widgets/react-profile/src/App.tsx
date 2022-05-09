import { MText, MButton, MAlert } from '@modyo/react-design-system';

export default function App() {
  return (
    <div>
      <h1>Hello</h1>
      <MText>world!</MText>
      <MButton
        text="click me!"
        onButtonClick={() => (
          console.log('button-clicked')
        )}
      />
      <MAlert
        title="the title"
        body="body prop text"
        actions={[
          { id: 'action 1', text: 'Action 1' },
          { id: 'action 2', text: 'Action 2' },
        ]}
        onActionClick={({ detail: alertAction }) => (
          console.log('action-clicked', alertAction)
        )}
      >
        children text
      </MAlert>
    </div>
  );
}
