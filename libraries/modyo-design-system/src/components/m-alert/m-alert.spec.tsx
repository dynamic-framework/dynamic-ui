import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { MAlert } from './m-alert';

it('should render info alert', async () => {
  const props = {
    theme: 'info',
    text: 'Test',
  };
  const page = await newSpecPage({
    components: [MAlert],
    template: () => (
      <m-alert
        theme={props.theme}
      >
        Test
      </m-alert>
    ),
  });
  expect(page.root).toEqualHtml(`
    <m-alert>
      <div class="alert alert-${props.theme}" role="alert">
        <div class="alert-text flex-grow-1">
          ${props.text}
        </div>
      </div>
    </m-alert>
  `);
});
