import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { DChip } from './d-chip';

it('should render badge', async () => {
  const props = {
    theme: 'primary',
    text: 'Test',
    showClose: true,
  };
  const page = await newSpecPage({
    components: [DChip],
    template: () => (
      <d-chip
        {...props}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
    <d-chip>
      <span class="d-chip d-chip-primary">
        <span>
          Test
        </span>
        <button class="d-chip-icon-container" type="button">
          <d-icon icon="x-lg"></d-icon>
        </button>
      </span>
    </d-chip>
  `);
});
