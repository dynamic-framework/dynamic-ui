import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { MBadge } from './m-badge';

it('should render badge', async () => {
  const props = {
    theme: 'primary',
    text: 'Test',
  };
  const page = await newSpecPage({
    components: [MBadge],
    template: () => (
      <m-badge
        {...props}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
    <m-badge>
      <span class="badge badge-primary m-badge">
        <span>
          Test
        </span>
      </span>
    </m-badge>
  `);
});
