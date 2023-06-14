import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { MProgressBar } from './m-progress-bar';
it('should render my component', async () => {
  const progress = { currentValue: 33 };
  const page = await newSpecPage({
    components: [MProgressBar],
    template: () => (h("m-progress-bar", Object.assign({}, progress))),
  });
  expect(page.root).toEqualHtml(`
    <m-progress-bar>
      <div class="m-progress-bar progress">
        <div aria-label="Progress bar" aria-valuemax="100" aria-valuemin="0" aria-valuenow="33" class="progress-bar" role="progressbar" style="width: 33%;">
          33%
        </div>
      </div>
    </m-progress-bar>
  `);
});
//# sourceMappingURL=m-progress-bar.spec.js.map
