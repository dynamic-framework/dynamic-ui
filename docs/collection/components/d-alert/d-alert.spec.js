import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { DAlert } from './d-alert';
it('should render info alert', async () => {
  const props = {
    theme: 'info',
    text: 'Test',
  };
  const page = await newSpecPage({
    components: [DAlert],
    template: () => (h("d-alert", { type: props.theme }, "Test")),
  });
  expect(page.root).toEqualHtml(`
    <d-alert>
      <div class="alert alert-info" role="alert" style="--bs-alert-component-separator-opacity: 0.3;">
        <div class="alert-text">
          Test
        </div>
      </div>
    </d-alert>
  `);
});
//# sourceMappingURL=d-alert.spec.js.map
