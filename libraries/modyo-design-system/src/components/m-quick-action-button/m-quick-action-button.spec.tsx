import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { MQuickActionButton } from './m-quick-action-button';

it('should render my component', async () => {
  const quick = {
    line1: 'Jessica Rabit',
    line2: 'Toon Bank **** 721',
    representativeImage: 'https://i.pravatar.cc/150?img=2',
  };

  const page = await newSpecPage({
    components: [MQuickActionButton],
    template: () => (
      <m-quick-action-button
        {...quick}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
    <m-quick-action-button>
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
    </m-quick-action-button>
  `);
});
