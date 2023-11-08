import { render } from '@testing-library/react';
import DAlertBox from './DAlertBox';

import { AlertBoxTheme } from '../interface';

it('should render info alert', () => {
  const props = {
    theme: 'box-secondary',
    text: 'Test',
    id: 'alertID',
  };

  const { container } = render(
    <DAlertBox
      id={props.id}
      theme={props.theme as AlertBoxTheme}
    >
      {props.text}
    </DAlertBox>,
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="alert alert-box alert-box-secondary"
        id="alertID"
        role="alert"
      >
        <i
          class="d-icon bi bi-info-circle alert-icon"
          style="--bs-icon-component-size: 1.5rem; --bs-icon-component-loading-duration: 1.8s; --bs-icon-component-padding: 0;"
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
