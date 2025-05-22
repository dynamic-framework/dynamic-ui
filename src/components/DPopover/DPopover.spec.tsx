import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import DPopover from '.';

it('should render a popover', () => {
  const props: ComponentProps<typeof DPopover> = {
    open: false,
    renderComponent: () => <>Item 1</>,
    children: <>Content of item 1</>,
  };

  const { container } = render(
    <DPopover {...props} />,
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="d-popover"
      >
        <div
          aria-expanded="false"
          aria-haspopup="dialog"
        >
          Item 1
        </div>
      </div>
    </div>
  `);
});
