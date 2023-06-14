import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { MButton } from './m-button';
it('should render base button', async () => {
  const props = { text: 'Test' };
  const page = await newSpecPage({
    components: [MButton],
    template: () => (h("m-button", Object.assign({}, props))),
  });
  expect(page.root).toEqualHtml(`
    <m-button>
      <button class="btn btn-primary m-button" type="button">
        <span>${props.text}</span>
      </button>
    </m-button>
  `);
});
it('should render button pill', async () => {
  const props = {
    text: 'Test',
    isPill: true,
  };
  const page = await newSpecPage({
    components: [MButton],
    template: () => (h("m-button", Object.assign({}, props))),
  });
  expect(page.root).toEqualHtml(`
    <m-button>
      <button class="btn btn-primary m-button rounded-pill" type="button">
        <span>${props.text}</span>
      </button>
    </m-button>
  `);
});
//# sourceMappingURL=m-button.spec.js.map
