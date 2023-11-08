import { render } from '@testing-library/react';
import DToast from './DToast';

import { ToastType } from '../interface';

it('should render info alert', () => {
  const props = {
    theme: 'info',
    text: 'Test',
    id: 'alertID',
  };

  const { container } = render(
    <DToast
      id={props.id}
      type={props.theme as ToastType}
    >
      {props.text}
    </DToast>,
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="alert alert-info"
        id="alertID"
        role="alert"
        style="--bs-alert-component-separator-opacity: 0.3;"
      >
        <div
          class="alert-text"
        >
          Test
        </div>
      </div>
    </div>
  `);
});
