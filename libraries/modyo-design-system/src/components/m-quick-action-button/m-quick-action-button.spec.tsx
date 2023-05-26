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
      <button class="quick-action-button">
        <img alt="" class="quick-action-button-representative-image" src="https://i.pravatar.cc/150?img=2">
        <div class="quick-action-button-content">
          <div class="quick-action-button-text">
            <span class="quick-action-button-line1">
              Jessica Rabit
            </span>
            <small class="quick-action-button-line2">
              Toon Bank **** 721
            </small>
          </div>
        </div>
        <m-icon class="quick-action-button-action-icon" icon="chevron-right" size="var(--bs-m-quick-action-button-action-icon-size)"></m-icon>
      </button>
    </m-quick-action-button>
  `);
});
