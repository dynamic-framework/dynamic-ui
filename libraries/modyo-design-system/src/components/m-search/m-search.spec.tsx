import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { MSearch } from './m-search';

it('should render my component', async () => {
  const search = {
    mId: 'searchId',
    label: 'Label',
    value: 'Value',
    placeholder: 'Search',
  };

  const page = await newSpecPage({
    components: [MSearch],
    template: () => (
      <m-search
        {...search}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
    <m-search class="form-control-layout form-control-layout-search">
      <label htmlfor="${search.mId}">
        ${search.label}
      </label>
      <div class="form-control-input">
        <div class="input-group">
          <input 
            type="text" 
            aria-describedby="${search.mId}-add" 
            aria-label="${search.label}" 
            class="form-control" 
            id="${search.mId}" 
            placeholder="${search.placeholder}" 
            value="${search.value}"
            autocomplete="off"
          >
          <button class="btn btn-search btn-text">
            <m-icon icon="search"></m-icon>
          </button>
        </div>
      </div>
    </m-search>
  `);
});
