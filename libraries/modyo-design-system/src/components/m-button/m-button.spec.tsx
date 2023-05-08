import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { MButton } from './m-button';

it('should render base button', async () => {
  const props = { text: 'Test' };
  const page = await newSpecPage({
    components: [MButton],
    template: () => (
      <m-button
        {...props}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
    <m-button>
      <button class="btn btn-primary" type="button">
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
    template: () => (
      <m-button
        {...props}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
    <m-button>
      <button class="btn btn-primary rounded-pill" type="button">
        <span>${props.text}</span>
      </button>
    </m-button>
  `);
});
