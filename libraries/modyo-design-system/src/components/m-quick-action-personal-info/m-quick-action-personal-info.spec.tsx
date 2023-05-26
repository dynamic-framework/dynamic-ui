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
    <m-quick-action-personal-info>
      <button class="quick-action">
        <img alt="" class="quick-action-picture" src="https://i.pravatar.cc/150?img=2">
        <div class="quick-action-content">
          <div class="quick-action-text">
            <span class="quick-action-title">
              Jessica Rabit
            </span>
            <small class="quick-action-subtitle">
              Toon Bank **** 721
            </small>
          </div>
        </div>
        <m-icon class="quick-action-action-icon" icon="chevron-right"></m-icon>
      </button>
    </m-quick-action-personal-info>
  `);
});
