import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { DIcon } from './d-icon';
it('should render my component', async () => {
  const icon = { icon: 'heart' };
  const page = await newSpecPage({
    components: [DIcon],
    template: () => (h("d-icon", Object.assign({}, icon))),
  });
  expect(page.root).toEqualHtml(`
    <d-icon>
      <i class="bi bi-heart d-icon" style="--bs-icon-component-size: 1.5rem; --bs-icon-component-loading-duration: 1.8s; --bs-icon-component-padding: 0;"></i>
    </d-icon>
  `);
});
//# sourceMappingURL=d-icon.spec.js.map
