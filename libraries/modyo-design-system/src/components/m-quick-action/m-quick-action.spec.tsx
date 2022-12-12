import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { MQuickAction } from './m-quick-action';

it('should render my component', async () => {
  const quick = { text: 'Quick' };

  const page = await newSpecPage({
    components: [MQuickAction],
    template: () => (
      <m-quick-action
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
              ${quick.text}
            </span>
          </div>
          <m-icon class="quick-action-link" icon="chevron-right" size="1.125rem"></m-icon>
        </div>
      </button>
    </m-quick-action>
  `);
});
