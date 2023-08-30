import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { DBadge } from './d-badge';
it('should render badge', async () => {
  const props = {
    theme: 'primary',
    text: 'Test',
  };
  const page = await newSpecPage({
    components: [DBadge],
    template: () => (h("d-badge", Object.assign({}, props))),
  });
  expect(page.root).toEqualHtml(`
    <d-badge>
      <span class="badge badge-primary">
        <span>
          Test
        </span>
      </span>
    </d-badge>
  `);
});
//# sourceMappingURL=d-badge.spec.js.map
