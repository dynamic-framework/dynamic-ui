import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { MSegmentControl } from './m-segment-control';

it('should render my component', async () => {
  const segment = { description: undefined };

  const page = await newSpecPage({
    components: [MSegmentControl],
    template: () => (
      <m-segment-control
        {...segment}
      >
        Render Test
      </m-segment-control>
    ),
  });
  expect(page.root).toEqualHtml(`
    <m-segment-control>
      <div class="segment-control" role="group">
        Render Test
      </div>
    </m-segment-control>
  `);
});
