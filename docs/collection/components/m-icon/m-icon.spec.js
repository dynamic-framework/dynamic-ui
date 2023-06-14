import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { MIcon } from './m-icon';
it('should render my component', async () => {
  const icon = { icon: 'heart' };
  const page = await newSpecPage({
    components: [MIcon],
    template: () => (h("m-icon", Object.assign({}, icon))),
  });
  expect(page.root).toEqualHtml(`
    <m-icon>
      <i class="bi bi-heart m-icon" style="--bs-m-icon-component-size: 1.5rem; --bs-m-icon-component-loading-duration: 1.8s; --bs-m-icon-component-padding: 0;"></i>
    </m-icon>
  `);
});
//# sourceMappingURL=m-icon.spec.js.map
