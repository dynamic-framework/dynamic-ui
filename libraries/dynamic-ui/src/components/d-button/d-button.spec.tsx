import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { DButton } from './d-button';

it('should render base button', async () => {
  const props = { text: 'Test' };
  const page = await newSpecPage({
    components: [DButton],
    template: () => (
      <d-button
        {...props}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
    <d-button>
      <button class="btn btn-primary" type="button">
        <span>${props.text}</span>
      </button>
    </d-button>
  `);
});

it('should render button pill', async () => {
  const props = {
    text: 'Test',
    isPill: true,
  };
  const page = await newSpecPage({
    components: [DButton],
    template: () => (
      <d-button
        {...props}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
    <d-button>
      <button class="btn btn-primary" type="button" style="--bs-btn-component-border-radius: var(--bs-border-radius-pill); --bs-btn-component-lg-border-radius: var(--bs-border-radius-pill); --bs-btn-component-sm-border-radius: var(--bs-border-radius-pill);">
        <span>${props.text}</span>
      </button>
    </d-button>
  `);
});
