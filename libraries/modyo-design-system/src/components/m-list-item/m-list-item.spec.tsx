import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { MListItem } from './m-list-item';
import type { ListItemVariant } from './m-list-item-interface';

it('should render my component', async () => {
  const listItem = { text: 'Text', value: 'Value' };

  const page = await newSpecPage({
    components: [MListItem],
    template: () => (
      <m-list-item
        {...listItem}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
    <m-list-item class="list-group-item">
      <span class="gap-3">
        <span class="flex-grow-1 opacity-40">
          ${listItem.text}
        </span>
        <span class="flex-shrink-1 text-end">
          ${listItem.value}
        </span>
      </span>
    </m-list-item>
  `);
});

it('should render my component with variant default', async () => {
  const listItem = {
    text: 'Text',
    value: 'Value',
    variant: 'default' as ListItemVariant,
    subtext: 'Subtext',
  };

  const page = await newSpecPage({
    components: [MListItem],
    template: () => (
      <m-list-item
        {...listItem}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
    <m-list-item class="list-group-item list-group-item-variant">
      <div class="gap-2">
        <div class="d-flex flex-column flex-grow-1">
          <span class="d-block fs-6 fw-bold lh-3 text-dark">
            ${listItem.text}
          </span>
          <small class="d-block lh-3 text-gray">
            ${listItem.subtext}
          </small>
        </div>
        <div class="d-flex flex-column flex-grow-1 text-end">
          <span class="fw-bold lh-3 text-gray">
            ${listItem.value}
          </span>
        </div>
      </div>
    </m-list-item>
  `);
});
