import { render } from '@testing-library/react';
import DAlert from '../../src/components/DAlert';

import { AlertType } from '../../src/components/interface';

it('should render info alert', () => {
  const props = {
    theme: 'info',
    text: 'Test',
    id: 'alertID',
  };

  const { container } = render(
    <DAlert
      id={props.id}
      type={props.theme as AlertType}
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
