import { render } from '@testing-library/react';
import DAlert from './DAlert';

import { AlertTheme } from '../interface';

it('should render info alert', () => {
  const props = {
    theme: 'info',
    text: 'Test',
    id: 'alertID',
  };

  const { container } = render(
    <DAlert
      id={props.id}
      theme={props.theme as AlertTheme}
    >
      {props.text}
    </DAlert>,
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="alert alert-info"
        id="alertID"
        role="alert"
      >
        <i
          class="d-icon bi bi-info-circle alert-icon"
          style="--bs-icon-component-loading-duration: 1.8s; --bs-icon-component-padding: 0;"
        />
        <div
          class="alert-text"
        >
          Test
        </div>
      </div>
    </div>
  `);
});
