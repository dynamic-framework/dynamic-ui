import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { DProgress } from './d-progress';
it('should render my component', async () => {
  const progress = { currentValue: 33 };
  const page = await newSpecPage({
    components: [DProgress],
    template: () => (h("d-progress", Object.assign({}, progress))),
  });
  expect(page.root).toEqualHtml(`
    <d-progress>
      <div class="progress">
        <div aria-label="Progress bar" aria-valuemax="100" aria-valuemin="0" aria-valuenow="33" class="progress-bar" role="progressbar" style="width: 33%;">
          33%
        </div>
      </div>
    </d-progress>
  `);
});
//# sourceMappingURL=d-progress.spec.js.map
