import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import DCollapse from '.';

it('should render a collapse and show its content', () => {
  const props: ComponentProps<typeof DCollapse> = {
    Component: <>Item 1</>,
    children: <>Content of item 1</>,
    defaultCollapsed: true,
  };

  const { container } = render(
    <DCollapse {...props} />,
  );

  expect(container).toMatchInlineSnapshot(`
  <div>
    <div
      class="collapse-container"
    >
      <button
        class="collapse-button"
        type="button"
      >
        <div
          class="flex-grow-1"
        >
          Item 1
        </div>
        <i
          class="d-icon bi bi-chevron-up"
          style="--bs-icon-component-loading-duration: 1.8s; --bs-icon-component-size: var(--bs-fs-small); --bs-icon-component-color: var(--bs-gray); --bs-icon-component-padding: 0;"
        />
      </button>
      <div
        class="collapse-body"
        style="--bs-collapse-separator-display: none;"
      >
        Content of item 1
      </div>
    </div>
  </div>
  `);
});
