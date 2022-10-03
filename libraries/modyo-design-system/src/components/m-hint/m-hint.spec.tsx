import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { MHint } from './m-hint';

it('should render help hint', async () => {
  const props = { text: 'Test Hint' };
  const page = await newSpecPage({
    components: [MHint],
    template: () => (
      <m-hint
        {...props}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
  <m-hint>
    <small class="m-hint m-hint-info">
      <span>
        ${props.text}
      </span>
    </small>
  </m-hint>
  `);
});
