import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { MAlert } from './m-alert';
import { AlertType } from './m-alert-interface';

it('should render info alert', async () => {
  const props = {
    theme: 'info',
    text: 'Test',
  };
  const page = await newSpecPage({
    components: [MAlert],
    template: () => (
      <m-alert
        type={props.theme as AlertType}
      >
        Test
      </m-alert>
    ),
  });
  expect(page.root).toEqualHtml(`
    <m-alert>
      <div class="alert alert-info m-alert" role="alert" style="--bs-m-alert-component-separator-opacity: 0.3;">
        <div class="m-alert-text">
          Test
        </div>
      </div>
    </m-alert>
  `);
});
