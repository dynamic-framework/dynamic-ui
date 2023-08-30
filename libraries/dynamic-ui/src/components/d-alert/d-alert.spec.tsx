import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { DAlert } from './d-alert';
import { AlertType } from './d-alert-interface';

it('should render info alert', async () => {
  const props = {
    theme: 'info',
    text: 'Test',
  };
  const page = await newSpecPage({
    components: [DAlert],
    template: () => (
      <d-alert
        type={props.theme as AlertType}
      >
        Test
      </d-alert>
    ),
  });
  expect(page.root).toEqualHtml(`
    <d-alert>
      <div class="alert alert-info" role="alert" style="--bs-alert-component-separator-opacity: 0.3;">
        <div class="alert-text">
          Test
        </div>
      </div>
    </d-alert>
  `);
});
