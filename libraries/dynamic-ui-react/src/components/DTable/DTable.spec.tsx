import { render } from '@testing-library/react';
import DTable from './DTable';

it('should render my component with header, body, and footer slot', () => {
  const modal = { name: 'myModal' };
  const headerData = ['Id', 'Name', 'Age'];
  const bodyData = [
    ['1', 'Anthony', '23'],
    ['2', 'Mark', '32'],
    ['3', 'Jonas', '28'],
  ];
  const footerData = ['', '', ''];

  const { container } = render(
    <DTable
      {...modal}
    >
      <DTable.Header headerData={headerData} />
      <DTable.Body bodyData={bodyData} />
      <DTable.Footer footerData={footerData} />
    </DTable>,
  );

  expect(container).toMatchInlineSnapshot(`
  <div>
    <table
      class="table"
    >
      <thead>
        <tr>
          <th
            scope="col"
          >
            Id
          </th>
          <th
            scope="col"
          >
            Name
          </th>
          <th
            scope="col"
          >
            Age
          </th>
        </tr>
      </thead>
      <tbody
        class=""
      >
        <tr>
          <td>
            1
          </td>
          <td>
            Anthony
          </td>
          <td>
            23
          </td>
        </tr>
        <tr>
          <td>
            2
          </td>
          <td>
            Mark
          </td>
          <td>
            32
          </td>
        </tr>
        <tr>
          <td>
            3
          </td>
          <td>
            Jonas
          </td>
          <td>
            28
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td />
          <td />
          <td />
        </tr>
      </tfoot>
    </table>
  </div>
  `);
});
