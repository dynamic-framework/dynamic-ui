import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { MProgressBar } from './m-progress-bar';

it('should render my component', async () => {
  const progress = { valueCurrent: 33 };

  const page = await newSpecPage({
    components: [MProgressBar],
    template: () => (
      <m-progress-bar
        {...progress}
      />
    ),
  });
  expect(page.root).toEqualHtml(`
  <m-progress-bar class="m-progress-bar">
    <div class="progress">
      <div 
        aria-label="Progress bar" 
        aria-valuemax="100" 
        aria-valuemin="0" 
        aria-valuenow="${progress.valueCurrent}" 
        class="progress-bar" 
        role="progressbar" 
        style="width: ${progress.valueCurrent}%;"
      >
      </div>
    </div>
    <span class="progress-text">
      ${progress.valueCurrent}%
    </span>
  </m-progress-bar>
  `);
});
