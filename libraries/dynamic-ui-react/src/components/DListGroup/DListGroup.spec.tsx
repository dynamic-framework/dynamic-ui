import { render } from '@testing-library/react';
import DListGroup from './DListGroup';

it('should render base switch', () => {
  const { container } = render(
    <DListGroup>
      <DListGroup.Item>
        Item A
      </DListGroup.Item>
      <DListGroup.Item>
        Item B
      </DListGroup.Item>
      <DListGroup.Item>
        Item C
      </DListGroup.Item>
    </DListGroup>,
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <ul
        class="list-group"
      >
        <li
          class="list-group-item"
        >
          Item A
        </li>
        <li
          class="list-group-item"
        >
          Item B
        </li>
        <li
          class="list-group-item"
        >
          Item C
        </li>
      </ul>
    </div>
  `);
});
