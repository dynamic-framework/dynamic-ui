import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { DInputSearch } from './d-input-search';

it('should render my component', async () => {
  const search = {
    innerId: 'searchId',
    label: 'Label',
    value: 'Value',
    placeholder: 'Search',
  };

  const page = await newSpecPage({
    components: [DInputSearch],
    template: () => (
      <d-input-search
        {...search}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
    <d-input-search>
      <d-input iconend="search" label="Label" innerid="searchId" placeholder="Search" value="Value"></d-input>
    </d-input-search>
  `);
});
