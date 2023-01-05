import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { MApp } from './m-app';

it('should render badge', async () => {
  const page = await newSpecPage({
    components: [MApp],
    template: () => (
      <m-app>
        <div>
          Hello
        </div>
      </m-app>
    ),
  });
  expect(page.root).toEqualHtml(`
    <m-app class="m-app">
      <div>
        Hello
      </div>
    </m-app>
  `);
});
