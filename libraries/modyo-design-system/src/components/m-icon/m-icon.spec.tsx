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
      <i 
        class="bi bi-${icon.icon} m-icon" 
        style="--bs-m-icon-font-size: inherit; --bs-m-icon-animation-duration: 1.8s;">
      </i>
    </m-icon>
  `);
});
