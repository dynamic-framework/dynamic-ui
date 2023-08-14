import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { MQuickActionButton } from './m-quick-action-button';
it('should render my component', async () => {
  const quick = {
    line1: 'Jessica Rabit',
    line2: 'Toon Bank **** 721',
    representativeImage: 'https://i.pravatar.cc/150?img=2',
  };
  const page = await newSpecPage({
    components: [MQuickActionButton],
    template: () => (h("m-quick-action-button", Object.assign({}, quick))),
  });
  expect(page.root).toEqualHtml(`
    <m-quick-action-button>
      <button class="m-quick-action-button">
        <img alt="" class="m-quick-action-button-representative-image" src="https://i.pravatar.cc/150?img=2">
        <div class="m-quick-action-button-content">
          <div class="m-quick-action-button-text">
            <span class="m-quick-action-button-line1">
              Jessica Rabit
            </span>
            <small class="m-quick-action-button-line2">
              Toon Bank **** 721
            </small>
          </div>
        </div>
      </button>
    </m-quick-action-button>
  `);
});
//# sourceMappingURL=m-quick-action-button.spec.js.map
