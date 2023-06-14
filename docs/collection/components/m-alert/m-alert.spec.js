import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { MAlert } from './m-alert';
it('should render info alert', async () => {
  const props = {
    theme: 'info',
    text: 'Test',
  };
  const page = await newSpecPage({
    components: [MAlert],
    template: () => (h("m-alert", { type: props.theme }, "Test")),
  });
  expect(page.root).toEqualHtml(`
    <m-alert>
      <div class="alert alert-info m-alert" role="alert" style="--bs-m-alert-component-separator-opacity: 0.3;">
        <div class="m-alert-text">
          Test
        </div>
      </div>
    </m-alert>
  `);
});
//# sourceMappingURL=m-alert.spec.js.map
