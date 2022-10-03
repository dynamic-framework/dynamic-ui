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
    <m-badge class="d-inline-block">
      <span class="badge bg-${props.theme}">
        ${props.text}
      </span>
    </m-badge>
  `);
});
