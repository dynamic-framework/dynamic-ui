import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { MIcon } from './m-icon';

it('should render my component', async () => {
  const icon = { icon: 'heart' };

  const page = await newSpecPage({
    components: [MIcon],
    template: () => (
      <m-icon
        {...icon}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
    <m-icon>
        <i class="bi bi-heart m-icon" style="--bs-m-icon-component-size: 1rem; --bs-m-icon-component-loading-duration: 1.8s; --bs-m-icon-component-padding: 0;"></i>
    </m-icon>
  `);
});
