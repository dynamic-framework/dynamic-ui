import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { MCard } from './m-card';

it('should render base card', async () => {
  const props = { text: 'Test' };
  const page = await newSpecPage({
    components: [MCard],
    template: () => (
      <m-card>
        {props.text}
      </m-card>
    ),
  });
  expect(page.root).toEqualHtml(`
    <m-card class="m-card">
      <div class="card bg-primary" part="card">
      <div
        class="card-body"
        part="card-body">
        ${props.text}
      </div>
      </div>
    </m-card>
  `);
});
