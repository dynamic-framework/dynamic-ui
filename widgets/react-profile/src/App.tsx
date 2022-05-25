import { MApp, MButton } from '@modyo/react-design-system';
import Buttons from './Buttons';

export default function App() {
  return (
    <MApp>
      <Buttons />
      <Buttons theme="secondary"/>
      <Buttons theme="tertiary" />
      <Buttons theme="success" />
      <Buttons theme="warning" />
      <Buttons theme="danger" />
      <Buttons theme="info" />

      <Buttons variant="block" />
      <Buttons variant="block" theme="secondary"/>
      <Buttons variant="block" theme="tertiary" />
      <Buttons variant="block" theme="success" />
      <Buttons variant="block" theme="warning" />
      <Buttons variant="block" theme="danger" />
      <Buttons variant="block" theme="info" />
    </MApp>
  );
}
