import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { MInputSearch } from './m-input-search';
it('should render my component', async () => {
  const search = {
    mId: 'searchId',
    label: 'Label',
    value: 'Value',
    placeholder: 'Search',
  };
  const page = await newSpecPage({
    components: [MInputSearch],
    template: () => (h("m-input-search", Object.assign({}, search))),
  });
  expect(page.root).toEqualHtml(`
     <m-input-search>
      <m-input iconend="search" label="Label" mid="searchId" placeholder="Search" value="Value"></m-input>
    </m-input-search>
  `);
});
//# sourceMappingURL=m-input-search.spec.js.map
