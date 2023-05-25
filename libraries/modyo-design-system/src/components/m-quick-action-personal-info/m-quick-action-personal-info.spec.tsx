import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { MQuickActionPersonalInfo } from './m-quick-action-personal-info';

it('should render my component', async () => {
  const quick = {
    name: 'Jessica Rabit',
    bank: 'Toon Bank',
    account: '**** 721',
    image: 'https://i.pravatar.cc/150?img=2',
  };

  const page = await newSpecPage({
    components: [MQuickActionPersonalInfo],
    template: () => (
      <m-quick-action-personal-info
        {...quick}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
    <m-quick-action class="quick-action-host">
      <button class="quick-action quick-action-variant-extended">
        <div class="quick-action-picture">
          <m-icon class="quick-action-icon" icon="heart-fill"></m-icon>
        </div>
        <div class="quick-action-content">
          <div class="quick-action-text">
            <span class="quick-action-title">
              ${quick.name}
            </span>
          </div>
          <m-icon class="quick-action-link" icon="chevron-right" size="1.125rem"></m-icon>
        </div>
      </button>
    </m-quick-action>
  `);
});
