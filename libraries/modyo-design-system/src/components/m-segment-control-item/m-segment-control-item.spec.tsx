import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { MSegmentControlItem } from './m-segment-control-item';

it('should render my component', async () => {
  const segmentItem = {
    name: 'repeatTime',
    label: 'Monthly',
    value: 'monthly',
    mId: 'monthly',
  };

  const page = await newSpecPage({
    components: [MSegmentControlItem],
    template: () => (
      <m-segment-control-item
        {...segmentItem}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
    <m-segment-control-item>
      <input 
        type="radio" 
        class="btn-check" 
        name="${segmentItem.name}" 
        id="${segmentItem.mId}" 
        value="${segmentItem.value}"
        autocomplete="off"
      >
      <label class="segment-control-item" htmlfor="${segmentItem.mId}">
        ${segmentItem.label}
      </label>
    </m-segment-control-item>
  `);
});
