import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { MAlert } from './m-alert';

it('should render my component', async () => {
  const theme = 'info';
  const page = await newSpecPage({
    components: [MAlert],
    template: () => (
      <m-alert theme={theme}>
        Test
      </m-alert>
    ),
  });
  expect(page.root).toEqualHtml(`
    <m-alert>
      <div class="alert alert-info" role="alert">
        <div class="alert-text flex-grow-1">
          Test
        </div>
      </div>
    </m-alert>
  `);
});
