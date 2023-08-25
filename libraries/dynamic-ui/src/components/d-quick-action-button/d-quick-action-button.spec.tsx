import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { DQuickActionButton } from './d-quick-action-button';

it('should render my component', async () => {
  const quick = {
    line1: 'Jessica Rabit',
    line2: 'Toon Bank **** 721',
    representativeImage: 'https://i.pravatar.cc/150?img=2',
  };

  const page = await newSpecPage({
    components: [DQuickActionButton],
    template: () => (
      <d-quick-action-button
        {...quick}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
    <d-quick-action-button>
      <button class="d-quick-action-button">
        <img alt="" class="d-quick-action-button-representative-image" src="https://i.pravatar.cc/150?img=2">
        <div class="d-quick-action-button-content">
          <div class="d-quick-action-button-text">
            <span class="d-quick-action-button-line1">
              Jessica Rabit
            </span>
            <small class="d-quick-action-button-line2">
              Toon Bank **** 721
            </small>
          </div>
        </div>
      </button>
    </d-quick-action-button>
  `);
});
