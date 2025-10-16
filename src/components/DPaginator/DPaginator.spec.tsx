import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import DPaginator from './DPaginator';

it('should render my component', () => {
  const props: ComponentProps<typeof DPaginator> = {
    total: 3,
    current: 1,
    onPageChange: () => {},
  };

  const { container } = render(
    <DPaginator
      {...props}
    />,
  );

  expect(container).toMatchInlineSnapshot(`
<div>
  <ul
    class="pagination justify-content-center"
    style=""
  >
    <li
      class="page-item disabled page-item-arrow"
    >
      <span
        aria-label="Previous"
        class="page-link"
      >
        <span
          aria-hidden="true"
        >
          «
        </span>
      </span>
    </li>
    <li
      aria-current="page"
      class="page-item active"
    >
      <a
        class="page-link"
        href="#"
      >
        1
      </a>
    </li>
    <li
      class="page-item"
    >
      <a
        class="page-link"
        href="#"
      >
        2
      </a>
    </li>
    <li
      class="page-item"
    >
      <a
        class="page-link"
        href="#"
      >
        3
      </a>
    </li>
    <li
      class="page-item page-item-arrow"
    >
      <a
        aria-label="Next"
        class="page-link"
        href="#"
      >
        <span
          aria-hidden="true"
        >
          »
        </span>
      </a>
    </li>
  </ul>
</div>
`);
});
