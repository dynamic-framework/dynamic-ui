import type { ButtonVariant } from '@modyo/design-system';
import { MApp } from '@modyo/react-design-system';

import Buttons from './Buttons';

const THEMES = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];
const VARIANTS: Partial<ButtonVariant[]> = [undefined, 'ghost', 'text', 'outline'];

export default function App() {
  return (
    <MApp>
      {THEMES.map((theme) => (
        VARIANTS.map((variant) => (
          <Buttons theme={theme} variant={variant} />
        ))
      ))}
    </MApp>
  );
}
