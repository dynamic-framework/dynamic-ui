import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';

import {
  changeQueryString,
  DBadge,
  DBox,
  DInput,
  DInputCheck,
  DPaginator,
  getQueryString,
  useItemSelection,
} from '../../src';

import DocsTemplate from './docs/Template.mdx';

const HEADER_ENTRIES = [
  ['id', '#'],
  ['first', 'First'],
  ['second', 'Second'],
  ['last', 'Last'],
];

const ROWS = [
  {
    id: 1,
    first: 'Marl',
    second: 'Otto',
    last: '@mdo',
  },
  {
    id: 2,
    first: 'Jacob',
    second: 'Thornton',
    last: '@fat',
  },
  {
    id: 3,
    first: 'Larry the Bird',
    second: '-',
    last: '@twitter',
  },
];

const meta: Meta<typeof DBox> = {
  title: 'Patterns/Table Patterns',
  component: DBox,
  parameters: {
    docs: {
      page: DocsTemplate,
      description: {
        component: 'Examples of table patterns using Bootstrap table classes and Dynamic UI components.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DBox>;

export const BasicTable: Story = {
  render: () => (
    <DBox style={{ width: '800px' }}>
      <table className="table">
        <thead>
          <tr>
            {HEADER_ENTRIES.map(([key, value]) => (
              <th key={key}>{value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row) => (
            <tr key={row.id}>
              {HEADER_ENTRIES.map(([key]) => (
                <td key={`${row.id}-${key}`}>
                  {row[key as keyof typeof ROWS[0]]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </DBox>
  ),
};

export const Borderless: Story = {
  render: () => (
    <DBox style={{ width: '800px' }}>
      <table className="table table-borderless">
        <thead>
          <tr>
            {HEADER_ENTRIES.map(([key, value]) => (
              <th key={key}>{value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row) => (
            <tr key={row.id}>
              {HEADER_ENTRIES.map(([key]) => (
                <td key={`${row.id}-${key}`}>
                  {row[key as keyof typeof ROWS[0]]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </DBox>
  ),
};

export const StripedTable: Story = {
  render: () => (
    <DBox style={{ width: '800px' }}>
      <h6>Striped Rows</h6>
      <table className="table table-striped">
        <thead>
          <tr>
            {HEADER_ENTRIES.map(([key, value]) => (
              <th key={key}>{value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row) => (
            <tr key={row.id}>
              {HEADER_ENTRIES.map(([key]) => (
                <td key={`${row.id}-${key}`}>
                  {row[key as keyof typeof ROWS[0]]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <h6>Striped Columns</h6>
      <table className="table table-striped-columns">
        <thead>
          <tr>
            {HEADER_ENTRIES.map(([key, value]) => (
              <th key={key}>{value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row) => (
            <tr key={row.id}>
              {HEADER_ENTRIES.map(([key]) => (
                <td key={`${row.id}-${key}`}>
                  {row[key as keyof typeof ROWS[0]]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </DBox>
  ),
};

export const HoverTable: Story = {
  render: () => (
    <DBox style={{ width: '800px' }}>
      <h6>Hover Rows</h6>
      <table className="table table-hover">
        <thead>
          <tr>
            {HEADER_ENTRIES.map(([key, value]) => (
              <th key={key}>{value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row) => (
            <tr key={row.id}>
              {HEADER_ENTRIES.map(([key]) => (
                <td key={`${row.id}-${key}`}>
                  {row[key as keyof typeof ROWS[0]]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <h6>Striped + Hover</h6>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            {HEADER_ENTRIES.map(([key, value]) => (
              <th key={key}>{value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row) => (
            <tr key={row.id}>
              {HEADER_ENTRIES.map(([key]) => (
                <td key={`${row.id}-${key}`}>
                  {row[key as keyof typeof ROWS[0]]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </DBox>
  ),
};

export const DarkTable: Story = {
  render: () => (
    <DBox style={{ width: '800px' }}>
      <h6>Dark</h6>
      <table className="table table-dark">
        <thead>
          <tr>
            {HEADER_ENTRIES.map(([key, value]) => (
              <th key={key}>{value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row) => (
            <tr key={row.id}>
              {HEADER_ENTRIES.map(([key]) => (
                <td key={`${row.id}-${key}`}>
                  {row[key as keyof typeof ROWS[0]]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <h6>Dark Striped</h6>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            {HEADER_ENTRIES.map(([key, value]) => (
              <th key={key}>{value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row) => (
            <tr key={row.id}>
              {HEADER_ENTRIES.map(([key]) => (
                <td key={`${row.id}-${key}`}>
                  {row[key as keyof typeof ROWS[0]]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </DBox>
  ),
};

export const BorderedTable: Story = {
  render: () => (
    <DBox style={{ width: '800px' }}>
      <h6>Bordered</h6>
      <table className="table table-bordered">
        <thead>
          <tr>
            {HEADER_ENTRIES.map(([key, value]) => (
              <th key={key}>{value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row) => (
            <tr key={row.id}>
              {HEADER_ENTRIES.map(([key]) => (
                <td key={`${row.id}-${key}`}>
                  {row[key as keyof typeof ROWS[0]]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <h6>Bordered Primary</h6>
      <table className="table table-bordered border-primary">
        <thead>
          <tr>
            {HEADER_ENTRIES.map(([key, value]) => (
              <th key={key}>{value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row) => (
            <tr key={row.id}>
              {HEADER_ENTRIES.map(([key]) => (
                <td key={`${row.id}-${key}`}>
                  {row[key as keyof typeof ROWS[0]]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </DBox>
  ),
};

export const SmallTable: Story = {
  render: () => (
    <DBox style={{ width: '800px' }}>
      <table className="table table-sm">
        <thead>
          <tr>
            {HEADER_ENTRIES.map(([key, value]) => (
              <th key={key}>{value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row) => (
            <tr key={row.id}>
              {HEADER_ENTRIES.map(([key]) => (
                <td key={`${row.id}-${key}`}>
                  {row[key as keyof typeof ROWS[0]]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </DBox>
  ),
};

export const ActiveTable: Story = {
  render: () => (
    <DBox style={{ width: '800px' }}>
      <table className="table">
        <thead>
          <tr>
            {HEADER_ENTRIES.map(([key, value]) => (
              <th key={key}>{value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row, index) => (
            <tr className={index === 1 ? 'table-active' : undefined} key={row.id}>
              {HEADER_ENTRIES.map(([key]) => (
                <td key={`${row.id}-${key}`}>
                  {row[key as keyof typeof ROWS[0]]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </DBox>
  ),
};

export const ColorTable: Story = {
  render: () => (
    <DBox style={{ width: '800px' }}>
      <table className="table">
        <thead>
          <tr>
            {HEADER_ENTRIES.map(([key, value]) => (
              <th key={key}>{value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row, index) => {
            let colorClass = '';
            if (index === 0) colorClass = 'table-primary';
            if (index === 1) colorClass = 'table-secondary';
            if (index === 2) colorClass = 'table-success';

            return (
              <tr className={colorClass} key={row.id}>
                {HEADER_ENTRIES.map(([key]) => (
                  <td key={`${row.id}-${key}`}>
                    {row[key as keyof typeof ROWS[0]]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </DBox>
  ),
};

export const LoadingTable: Story = {
  render: () => (
    <DBox style={{ width: '800px' }}>
      <table className="table placeholder-wave">
        <caption>
          <div className="placeholder rounded-1 bg-gray-100 w-100" />
        </caption>
        <thead>
          <tr>
            {HEADER_ENTRIES.map(([key, value]) => (
              <th key={key} style={{ width: '25%' }}>{value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td aria-hidden="true"><div className="placeholder rounded-1 bg-gray-100 w-100" /></td>
            <td aria-hidden="true"><div className="placeholder rounded-1 bg-gray-100 w-100" /></td>
            <td aria-hidden="true"><div className="placeholder rounded-1 bg-gray-100 w-100" /></td>
            <td aria-hidden="true"><div className="placeholder rounded-1 bg-gray-100 w-100" /></td>
          </tr>
          <tr>
            <td aria-hidden="true"><div className="placeholder rounded-1 bg-gray-100 w-100" /></td>
            <td aria-hidden="true"><div className="placeholder rounded-1 bg-gray-100 w-100" /></td>
            <td aria-hidden="true"><div className="placeholder rounded-1 bg-gray-100 w-100" /></td>
            <td aria-hidden="true"><div className="placeholder rounded-1 bg-gray-100 w-100" /></td>
          </tr>
          <tr>
            <td aria-hidden="true"><div className="placeholder rounded-1 bg-gray-100 w-100" /></td>
            <td aria-hidden="true"><div className="placeholder rounded-1 bg-gray-100 w-100" /></td>
            <td aria-hidden="true"><div className="placeholder rounded-1 bg-gray-100 w-100" /></td>
            <td aria-hidden="true"><div className="placeholder rounded-1 bg-gray-100 w-100" /></td>
          </tr>
        </tbody>
      </table>
    </DBox>
  ),
};

function CompleteTableComponent() {
  const {
    isSelectedItem,
    toggleSelectedItem,
    selectedItems,
    setSelectedItems,
  } = useItemSelection<typeof ROWS[0]>();

  const [page, setPage] = useState(1);
  const [rows, setRows] = useState(3);
  const totalPages = 5;

  return (
    <DBox style={{ width: '800px' }}>
      <table className="table table-hover">
        <caption>List of users</caption>
        <thead>
          <tr>
            <th>
              <DInputCheck
                type="checkbox"
                checked={selectedItems.length === ROWS.length}
                onChange={(event) => {
                  setSelectedItems(event.target.checked ? ROWS : []);
                }}
              />
            </th>
            {HEADER_ENTRIES.map(([key, value]) => (
              <th style={{ width: '25%' }} key={key}>{value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row) => (
            <tr key={row.id}>
              <td>
                <DInputCheck
                  type="checkbox"
                  onChange={() => toggleSelectedItem(row)}
                  checked={isSelectedItem(row)}
                />
              </td>
              {HEADER_ENTRIES.map(([key]) => (
                <td key={`${row.id}-${key}`}>
                  {row[key as keyof typeof ROWS[0]]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="row">
        <div className="col-2">
          <small>Per Page </small>
          <DInput
            className="d-inline-block"
            style={{ width: '36px' }}
            size="sm"
            type="number"
            value={rows.toString()}
            onChange={(value) => setRows(parseInt(value, 10))}
          />
        </div>
        <div className="col-8">
          <DPaginator
            current={page}
            onPageChange={setPage}
            total={totalPages}
          />
        </div>
      </div>
    </DBox>
  );
}

export const CompleteTable: Story = {
  render: () => <CompleteTableComponent />,
};

function CompositionTableLoading() {
  return (
    <table className="table placeholder-wave">
      <caption>
        <div className="placeholder rounded-1 bg-gray-100 w-100" />
      </caption>
      <thead>
        <tr>
          {HEADER_ENTRIES.map(([key, value]) => (
            <th key={key} style={{ width: '25%' }}>{value}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td aria-hidden="true"><div className="placeholder rounded-1 bg-gray-100 w-100" /></td>
          <td aria-hidden="true"><div className="placeholder rounded-1 bg-gray-100 w-100" /></td>
          <td aria-hidden="true"><div className="placeholder rounded-1 bg-gray-100 w-100" /></td>
          <td aria-hidden="true"><div className="placeholder rounded-1 bg-gray-100 w-100" /></td>
        </tr>
        <tr>
          <td aria-hidden="true"><div className="placeholder rounded-1 bg-gray-100 w-100" /></td>
          <td aria-hidden="true"><div className="placeholder rounded-1 bg-gray-100 w-100" /></td>
          <td aria-hidden="true"><div className="placeholder rounded-1 bg-gray-100 w-100" /></td>
          <td aria-hidden="true"><div className="placeholder rounded-1 bg-gray-100 w-100" /></td>
        </tr>
        <tr>
          <td aria-hidden="true"><div className="placeholder rounded-1 bg-gray-100 w-100" /></td>
          <td aria-hidden="true"><div className="placeholder rounded-1 bg-gray-100 w-100" /></td>
          <td aria-hidden="true"><div className="placeholder rounded-1 bg-gray-100 w-100" /></td>
          <td aria-hidden="true"><div className="placeholder rounded-1 bg-gray-100 w-100" /></td>
        </tr>
      </tbody>
    </table>
  );
}

type CompositionTableProps = {
  page: number;
  rows: number;
  totalPages: number;
  setPage(page: number): void;
  setRows(rows: number): void;
};

function CompositionTable(
  {
    page,
    rows,
    totalPages,
    setPage,
    setRows,
  }: CompositionTableProps,
) {
  const {
    isSelectedItem,
    toggleSelectedItem,
    selectedItems,
    setSelectedItems,
  } = useItemSelection<typeof ROWS[0]>();

  return (
    <>
      <table className="table table-hover">
        <caption>List of users</caption>
        <thead>
          <tr>
            <th>
              <DInputCheck
                type="checkbox"
                checked={selectedItems.length === ROWS.length}
                onChange={(event) => {
                  setSelectedItems(event.target.checked ? ROWS : []);
                }}
              />
            </th>
            {HEADER_ENTRIES.map(([key, value]) => (
              <th style={{ width: '25%' }} key={key}>{value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row) => (
            <tr key={row.id}>
              <td>
                <DInputCheck
                  type="checkbox"
                  onChange={() => toggleSelectedItem(row)}
                  checked={isSelectedItem(row)}
                />
              </td>
              {HEADER_ENTRIES.map(([key]) => (
                <td key={`${row.id}-${key}`}>
                  {row[key as keyof typeof ROWS[0]]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="row">
        <div className="col-2">
          <small>Per Page </small>
          <DInput
            className="d-inline-block"
            style={{ width: '36px' }}
            size="sm"
            type="number"
            value={rows.toString()}
            onChange={(value) => setRows(parseInt(value, 10))}
          />
        </div>
        <div className="col-8">
          <DPaginator
            current={page}
            onPageChange={setPage}
            total={totalPages}
          />
        </div>
      </div>
    </>
  );
}

function CompositionComponent() {
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(Number(getQueryString('page', { default: '1', useSearch: false })));
  const [rows, setRows] = useState(Number(getQueryString('rows', { default: '3', useSearch: false })));
  const [queryString, setQueryString] = useState('');
  const totalPages = 5;

  useEffect(() => {
    setQueryString(changeQueryString(
      { page, rows },
      { useSearch: false },
    ));
  }, [setQueryString, page, rows]);

  return (
    <>
      {'Query String = '}
      {queryString && (
        <DBadge text={queryString} color="primary" />
      )}
      <br />
      <br />
      <DBox style={{ width: '800px' }}>
        <DInputCheck
          type="checkbox"
          label="Loading"
          checked={loading}
          onChange={(event) => setLoading(event.target.checked)}
        />

        {loading ? (
          <CompositionTableLoading />
        ) : (
          <CompositionTable
            page={page}
            rows={rows}
            totalPages={totalPages}
            setPage={setPage}
            setRows={setRows}
          />
        )}
      </DBox>
    </>
  );
}

export const Composition: Story = {
  render: () => <CompositionComponent />,
  parameters: {
    docs: {
      source: {
        code: `function CompositionTableLoading() {
  return (
    <table className="table placeholder-wave">
      <caption>
        <div className="placeholder rounded-1 bg-gray-100 w-100" />
      </caption>
      <thead>
        <tr>
          {HEADER_ENTRIES.map(([key, value]) => (
            <th key={key} style={{ width: '25%' }}>{value}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td aria-hidden="true"><div className="placeholder rounded-1 bg-gray-100 w-100" /></td>
          <td aria-hidden="true"><div className="placeholder rounded-1 bg-gray-100 w-100" /></td>
          <td aria-hidden="true"><div className="placeholder rounded-1 bg-gray-100 w-100" /></td>
          <td aria-hidden="true"><div className="placeholder rounded-1 bg-gray-100 w-100" /></td>
        </tr>
        <tr>
          <td aria-hidden="true"><div className="placeholder rounded-1 bg-gray-100 w-100" /></td>
          <td aria-hidden="true"><div className="placeholder rounded-1 bg-gray-100 w-100" /></td>
          <td aria-hidden="true"><div className="placeholder rounded-1 bg-gray-100 w-100" /></td>
          <td aria-hidden="true"><div className="placeholder rounded-1 bg-gray-100 w-100" /></td>
        </tr>
        <tr>
          <td aria-hidden="true"><div className="placeholder rounded-1 bg-gray-100 w-100" /></td>
          <td aria-hidden="true"><div className="placeholder rounded-1 bg-gray-100 w-100" /></td>
          <td aria-hidden="true"><div className="placeholder rounded-1 bg-gray-100 w-100" /></td>
          <td aria-hidden="true"><div className="placeholder rounded-1 bg-gray-100 w-100" /></td>
        </tr>
      </tbody>
    </table>
  );
}

type CompositionTableProps = {
  page: number;
  rows: number;
  totalPages: number;
  setPage(page: number): void;
  setRows(rows: number): void;
};

function CompositionTable(
  {
    page,
    rows,
    totalPages,
    setPage,
    setRows,
  }: CompositionTableProps,
) {
  const {
    isSelectedItem,
    toggleSelectedItem,
    selectedItems,
    setSelectedItems,
  } = useItemSelection<typeof ROWS[0]>();

  return (
    <>
      <table className="table table-hover">
        <caption>List of users</caption>
        <thead>
          <tr>
            <th>
              <DInputCheck
                type="checkbox"
                checked={selectedItems.length === ROWS.length}
                onChange={(event) => {
                  setSelectedItems(event.target.checked ? ROWS : []);
                }}
              />
            </th>
            {HEADER_ENTRIES.map(([key, value]) => (
              <th style={{ width: '25%' }} key={key}>{value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row) => (
            <tr key={row.id}>
              <td>
                <DInputCheck
                  type="checkbox"
                  onChange={() => toggleSelectedItem(row)}
                  checked={isSelectedItem(row)}
                />
              </td>
              {HEADER_ENTRIES.map(([key]) => (
                <td key={\`\${row.id}-\${key}\`}>
                  {row[key as keyof typeof ROWS[0]]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="row">
        <div className="col-2">
          <small>Per Page </small>
          <DInput
            className="d-inline-block"
            style={{ width: '36px' }}
            size="sm"
            type="number"
            value={rows.toString()}
            onChange={(value) => setRows(parseInt(value, 10))}
          />
        </div>
        <div className="col-8">
          <DPaginator
            current={page}
            onPageChange={setPage}
            total={totalPages}
          />
        </div>
      </div>
    </>
  );
}

export function Composition() {
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(Number(getQueryString('page', { default: '1', useSearch: false })));
  const [rows, setRows] = useState(Number(getQueryString('rows', { default: '3', useSearch: false })));
  const [queryString, setQueryString] = useState('');
  const totalPages = 5;

  useEffect(() => {
    setQueryString(changeQueryString(
      { page, rows },
      { useSearch: false },
    ));
  }, [setQueryString, page, rows]);

  return (
    <>
      {'Query String = '}
      {queryString && (
        <DBadge text={queryString} color="primary" />
      )}
      <br />
      <br />
      <DBox style={{ width: '800px' }}>
        <DInputCheck
          type="checkbox"
          label="Loading"
          checked={loading}
          onChange={(event) => setLoading(event.target.checked)}
        />

        {loading ? (
          <CompositionTableLoading />
        ) : (
          <CompositionTable
            page={page}
            rows={rows}
            totalPages={totalPages}
            setPage={setPage}
            setRows={setRows}
          />
        )}
      </DBox>
    </>
  );
}`,
      },
    },
  },
};
