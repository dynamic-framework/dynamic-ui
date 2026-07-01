import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';

import {
  changeQueryString,
  DContextProvider,
  DBadge,
  DBox,
  DIcon,
  DOffcanvas,
  DInput,
  DInputCheck,
  DPaginator,
  getQueryString,
  useDPortalContext,
  useItemSelection,
} from '../../src';
import type { PortalProps } from '../../src';

import DocsTemplate from './docs/Template.mdx';

function DocsFullWidthStyle() {
  return (
    <style>
      {`
        .sbdocs.sbdocs-content {
          max-width: min(1800px, calc(100vw - 2rem)) !important;
        }
          .docs-story {
          background: var(--bs-gray-25) !important;
          }
      `}
    </style>
  );
}

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
  title: 'Patterns/Table',
  component: DBox,
  decorators: [
    (Story) => (
      <>
        <DocsFullWidthStyle />
        <Story />
      </>
    ),
  ],
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
    <DBox style={{ width: '1100px' }}>
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
    <DBox style={{ width: '1100px' }}>
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
    <DBox style={{ width: '1100px' }}>
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
    <DBox style={{ width: '1100px' }}>
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
    <DBox style={{ width: '1100px' }}>
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
    <DBox style={{ width: '1100px' }}>
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
    <DBox style={{ width: '1100px' }}>
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
    <DBox style={{ width: '1100px' }}>
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
    <DBox style={{ width: '1100px' }}>
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
    <DBox style={{ width: '1100px' }}>
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
    <DBox style={{ width: '1100px' }}>
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
        <DBadge soft size="sm" text={queryString} color="primary" />
      )}
      <br />
      <br />
      <DBox style={{ width: '1100px' }}>
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
        <DBadge soft size="sm" text={queryString} color="primary" />
      )}
      <br />
      <br />
      <DBox style={{ width: '1100px' }}>
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

type FinanceTransactionType = 'Credit' | 'Debit';
type FinanceTransactionStatus = 'Posted' | 'Pending' | 'Flagged';

type FinanceTransaction = {
  id: string;
  date: string;
  reference: string;
  account: string;
  category: 'Payroll' | 'Card Processing' | 'Vendor Payment' | 'Chargeback' | 'Treasury' | 'Adjustment';
  type: FinanceTransactionType;
  status: FinanceTransactionStatus;
  amount: number;
};

const FINANCE_TRANSACTIONS: FinanceTransaction[] = [
  {
    id: 'TX-10491',
    date: '2026-06-08',
    reference: 'Payroll Batch - ACME',
    account: 'Main Operating',
    category: 'Payroll',
    type: 'Debit',
    status: 'Posted',
    amount: -42500.9,
  },
  {
    id: 'TX-10492',
    date: '2026-06-08',
    reference: 'Card Settlement',
    account: 'Merchant Clearing',
    category: 'Card Processing',
    type: 'Credit',
    status: 'Posted',
    amount: 19880.22,
  },
  {
    id: 'TX-10493',
    date: '2026-06-09',
    reference: 'Wire Out - Supplier',
    account: 'Main Operating',
    category: 'Vendor Payment',
    type: 'Debit',
    status: 'Pending',
    amount: -7420,
  },
  {
    id: 'TX-10494',
    date: '2026-06-09',
    reference: 'ACH Return',
    account: 'Collections',
    category: 'Chargeback',
    type: 'Debit',
    status: 'Flagged',
    amount: -1280.35,
  },
  {
    id: 'TX-10495',
    date: '2026-06-10',
    reference: 'Treasury Sweep',
    account: 'Liquidity Reserve',
    category: 'Treasury',
    type: 'Credit',
    status: 'Posted',
    amount: 65500,
  },
  {
    id: 'TX-10496',
    date: '2026-06-10',
    reference: 'Manual Adjustment',
    account: 'Main Operating',
    category: 'Adjustment',
    type: 'Debit',
    status: 'Pending',
    amount: -560,
  },
];

type PortfolioLoan = {
  id: string;
  borrower: string;
  product: string;
  disbursed: number;
  paidInstallments: number;
  totalInstallments: number;
  daysPastDue: number;
};

const PORTFOLIO_LOANS: PortfolioLoan[] = [
  {
    id: 'LN-8801',
    borrower: 'A. Ibarra',
    product: 'Personal Loan',
    disbursed: 12000,
    paidInstallments: 8,
    totalInstallments: 12,
    daysPastDue: 0,
  },
  {
    id: 'LN-8802',
    borrower: 'Norte Retail SA',
    product: 'Working Capital',
    disbursed: 95000,
    paidInstallments: 4,
    totalInstallments: 18,
    daysPastDue: 12,
  },
  {
    id: 'LN-8803',
    borrower: 'M. Zuniga',
    product: 'Auto Loan',
    disbursed: 24500,
    paidInstallments: 2,
    totalInstallments: 24,
    daysPastDue: 47,
  },
  {
    id: 'LN-8804',
    borrower: 'Pacifica Foods',
    product: 'Invoice Financing',
    disbursed: 60000,
    paidInstallments: 9,
    totalInstallments: 12,
    daysPastDue: 0,
  },
];

type PaymentApproval = {
  id: string;
  beneficiary: string;
  account: string;
  amount: number;
  dueDate: string;
};

const PAYMENT_APPROVALS: PaymentApproval[] = [
  {
    id: 'AP-301',
    beneficiary: 'Riverside Logistics',
    account: 'Operating - 0012',
    amount: 14800,
    dueDate: '2026-06-12',
  },
  {
    id: 'AP-302',
    beneficiary: 'Cloud Ops Inc.',
    account: 'Technology - 9981',
    amount: 2350.75,
    dueDate: '2026-06-13',
  },
  {
    id: 'AP-303',
    beneficiary: 'Servicios Aurora',
    account: 'Operations - 7810',
    amount: 4210,
    dueDate: '2026-06-13',
  },
  {
    id: 'AP-304',
    beneficiary: 'Northwind Holdings',
    account: 'Treasury - 1300',
    amount: 90640,
    dueDate: '2026-06-15',
  },
];

const USD = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function financeStatusColor(status: FinanceTransactionStatus) {
  if (status === 'Posted') return 'success';
  if (status === 'Pending') return 'warning';
  return 'danger';
}

function loanRisk(daysPastDue: number) {
  if (daysPastDue >= 30) return { text: 'High', color: 'danger' as const };
  if (daysPastDue > 0) return { text: 'Medium', color: 'warning' as const };
  return { text: 'Low', color: 'success' as const };
}

function FinancialTransactionHistoryComponent() {
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState<'all' | FinanceTransactionType>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | FinanceTransactionStatus>('all');

  const rows = FINANCE_TRANSACTIONS.filter((row) => {
    const query = search.trim().toLowerCase();
    const matchesSearch = query.length === 0
      || row.id.toLowerCase().includes(query)
      || row.reference.toLowerCase().includes(query)
      || row.account.toLowerCase().includes(query);
    const matchesType = typeFilter === 'all' || row.type === typeFilter;
    const matchesStatus = statusFilter === 'all' || row.status === statusFilter;
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <DBox style={{ width: '100%' }}>
      <div className="d-flex flex-wrap gap-3 align-items-end mb-3">
        <div style={{ minWidth: '320px', flex: 1 }}>
          <small className="d-block text-secondary mb-1">Search transaction</small>
          <DInput
            type="text"
            value={search}
            placeholder="Search by id, account, or reference"
            aria-label="Search transaction"
            onChange={setSearch}
          />
        </div>
        <div>
          <small className="d-block text-secondary mb-1">Type</small>
          <select
            aria-label="Filter by type"
            className="form-select"
            value={typeFilter}
            onChange={(event) => setTypeFilter(event.target.value as 'all' | FinanceTransactionType)}
          >
            <option value="all">All</option>
            <option value="Credit">Credit</option>
            <option value="Debit">Debit</option>
          </select>
        </div>
        <div>
          <small className="d-block text-secondary mb-1">Status</small>
          <select
            aria-label="Filter by status"
            className="form-select"
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value as 'all' | FinanceTransactionStatus)}
          >
            <option value="all">All</option>
            <option value="Posted">Posted</option>
            <option value="Pending">Pending</option>
            <option value="Flagged">Flagged</option>
          </select>
        </div>
      </div>

      <table className="table table-hover align-middle">
        <caption>Transaction History</caption>
        <thead>
          <tr>
            <th>Transaction</th>
            <th>Date</th>
            <th>Account</th>
            <th>Category</th>
            <th>Status</th>
            <th className="text-end">Amount</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>
                <div className="fw-semibold">{row.id}</div>
                <small className="text-secondary">{row.reference}</small>
              </td>
              <td>{row.date}</td>
              <td>{row.account}</td>
              <td>{row.category}</td>
              <td>
                <DBadge soft size="sm" text={row.status} color={financeStatusColor(row.status)} />
              </td>
              <td className={`text-end fw-semibold ${row.amount >= 0 ? 'text-success' : 'text-danger'}`}>
                {USD.format(row.amount)}
              </td>
            </tr>
          ))}
          {rows.length === 0 && (
            <tr>
              <td colSpan={6} className="text-center text-secondary py-4">
                No transactions match your current filters.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </DBox>
  );
}

export const TransactionHistory: Story = {
  render: () => <FinancialTransactionHistoryComponent />,
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: {
        code: `function TransactionHistoryExample() {
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const rows = FINANCE_TRANSACTIONS.filter((row) => {
    const query = search.trim().toLowerCase();
    const matchesSearch = query.length === 0
      || row.id.toLowerCase().includes(query)
      || row.reference.toLowerCase().includes(query)
      || row.account.toLowerCase().includes(query);
    const matchesType = typeFilter === 'all' || row.type === typeFilter;
    const matchesStatus = statusFilter === 'all' || row.status === statusFilter;
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <DBox style={{ width: '100%' }}>
      <div className="d-flex flex-wrap gap-3 align-items-end mb-3">
        <div style={{ minWidth: '320px', flex: 1 }}>
          <small className="d-block text-secondary mb-1">Search transaction</small>
          <DInput
            type="text"
            value={search}
            placeholder="Search by id, account, or reference"
            aria-label="Search transaction"
            onChange={setSearch}
          />
        </div>
        <div>
          <small className="d-block text-secondary mb-1">Type</small>
          <select
            className="form-select"
            value={typeFilter}
            onChange={(event) => setTypeFilter(event.target.value)}
            aria-label="Filter by type"
          >
            <option value="all">All</option>
            <option value="Credit">Credit</option>
            <option value="Debit">Debit</option>
          </select>
        </div>
        <div>
          <small className="d-block text-secondary mb-1">Status</small>
          <select
            className="form-select"
            aria-label="Filter by status"
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
          >
            <option value="all">All</option>
            <option value="Posted">Posted</option>
            <option value="Pending">Pending</option>
            <option value="Flagged">Flagged</option>
          </select>
        </div>
      </div>

      <table className="table table-hover align-middle">
        <caption>Transaction History</caption>
        <thead>
          <tr>
            <th>Transaction</th>
            <th>Date</th>
            <th>Account</th>
            <th>Category</th>
            <th>Status</th>
            <th className="text-end">Amount</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>
                <div className="fw-semibold">{row.id}</div>
                <small className="text-secondary">{row.reference}</small>
              </td>
              <td>{row.date}</td>
              <td>{row.account}</td>
              <td>{row.category}</td>
              <td>
                <DBadge soft size="sm" text={row.status} color={financeStatusColor(row.status)} />
              </td>
              <td className={\`text-end fw-semibold \${row.amount >= 0 ? 'text-success' : 'text-danger'}\`}>
                {USD.format(row.amount)}
              </td>
            </tr>
          ))}
          {rows.length === 0 && (
            <tr>
              <td colSpan={6} className="text-center text-secondary py-4">
                No transactions match your current filters.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </DBox>
  );
}`,
      },
    },
  },
};

type TransactionScreeningFilters = {
  typeFilter: 'all' | FinanceTransactionType;
  statusFilter: 'all' | FinanceTransactionStatus;
  minAmountFilter: string;
};

type TransactionScreeningPortalPayloads = {
  filters: {
    values: TransactionScreeningFilters;
    onApply(values: TransactionScreeningFilters): void;
    onClear(): void;
  };
};

function TransactionScreeningFiltersOffcanvas(
  { name, payload }: PortalProps<TransactionScreeningPortalPayloads['filters']>,
) {
  const { closePortal } = useDPortalContext();
  const [typeFilter, setTypeFilter] = useState<TransactionScreeningFilters['typeFilter']>(payload.values.typeFilter);
  const [statusFilter, setStatusFilter] = useState<TransactionScreeningFilters['statusFilter']>(payload.values.statusFilter);
  const [minAmountFilter, setMinAmountFilter] = useState(payload.values.minAmountFilter);

  useEffect(() => {
    setTypeFilter(payload.values.typeFilter);
    setStatusFilter(payload.values.statusFilter);
    setMinAmountFilter(payload.values.minAmountFilter);
  }, [payload.values.minAmountFilter, payload.values.statusFilter, payload.values.typeFilter]);

  return (
    <DOffcanvas
      name={name}
      staticBackdrop={false}
      scrollable
      openFrom="end"
    >
      <DOffcanvas.Header onClose={closePortal} showCloseButton>
        <h6 className="mb-0">Advanced Filters</h6>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <div className="mb-3">
          <small className="d-block text-secondary mb-1">Type</small>
          <select
            aria-label="Filter by type"
            className="form-select"
            value={typeFilter}
            onChange={(event) => setTypeFilter(event.target.value as TransactionScreeningFilters['typeFilter'])}
          >
            <option value="all">All</option>
            <option value="Credit">Credit</option>
            <option value="Debit">Debit</option>
          </select>
        </div>

        <div className="mb-3">
          <small className="d-block text-secondary mb-1">Status</small>
          <select
            aria-label="Filter by status"
            className="form-select"
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value as TransactionScreeningFilters['statusFilter'])}
          >
            <option value="all">All</option>
            <option value="Posted">Posted</option>
            <option value="Pending">Pending</option>
            <option value="Flagged">Flagged</option>
          </select>
        </div>

        <div className="mb-3">
          <small className="d-block text-secondary mb-1">Minimum absolute amount</small>
          <DInput
            type="number"
            min={0}
            value={minAmountFilter}
            aria-label="Minimum absolute amount"
            onChange={setMinAmountFilter}
          />
        </div>
      </DOffcanvas.Body>
      <DOffcanvas.Footer>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            payload.onApply({
              typeFilter,
              statusFilter,
              minAmountFilter,
            });
            closePortal();
          }}
        >
          Apply
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => {
            payload.onClear();
            closePortal();
          }}
        >
          Clear Filters
        </button>
      </DOffcanvas.Footer>
    </DOffcanvas>
  );
}

function FinancialTransactionOffcanvasContent() {
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState<TransactionScreeningFilters['typeFilter']>('all');
  const [statusFilter, setStatusFilter] = useState<TransactionScreeningFilters['statusFilter']>('all');
  const [minAmountFilter, setMinAmountFilter] = useState('0');
  const { openPortal } = useDPortalContext<TransactionScreeningPortalPayloads>();

  const currentFilters: TransactionScreeningFilters = {
    typeFilter,
    statusFilter,
    minAmountFilter,
  };
  const minAmount = Math.max(0, Number(minAmountFilter) || 0);

  const rows = FINANCE_TRANSACTIONS.filter((row) => {
    const query = search.trim().toLowerCase();
    const matchesSearch = query.length === 0
      || row.id.toLowerCase().includes(query)
      || row.reference.toLowerCase().includes(query)
      || row.account.toLowerCase().includes(query);
    const matchesType = typeFilter === 'all' || row.type === typeFilter;
    const matchesStatus = statusFilter === 'all' || row.status === statusFilter;
    const matchesAmount = Math.abs(row.amount) >= minAmount;
    return matchesSearch && matchesType && matchesStatus && matchesAmount;
  });

  return (
    <DBox style={{ width: '100%', position: 'relative' }}>
      <div className="d-flex gap-2 align-items-end mb-3 flex-wrap">
        <div style={{ minWidth: '320px', flex: 1 }}>
          <DInput
            type="text"
            value={search}
            placeholder="Search by id, account, or reference"
            aria-label="Search transaction"
            onChange={setSearch}
          />
        </div>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => openPortal('filters', {
            values: currentFilters,
            onApply: (values) => {
              setTypeFilter(values.typeFilter);
              setStatusFilter(values.statusFilter);
              setMinAmountFilter(values.minAmountFilter);
            },
            onClear: () => {
              setTypeFilter('all');
              setStatusFilter('all');
              setMinAmountFilter('0');
            },
          })}
        >
          Advanced Filters
        </button>
      </div>

      {(typeFilter !== 'all' || statusFilter !== 'all' || minAmount > 0) && (
        <div className="d-flex gap-2 flex-wrap mb-3">
          {typeFilter !== 'all' && <DBadge text={`Type: ${typeFilter}`} color="primary" />}
          {statusFilter !== 'all' && <DBadge soft size="sm" text={`Status: ${statusFilter}`} color="warning" />}
          {minAmount > 0 && <DBadge soft size="sm" text={`Min Amount: ${USD.format(minAmount)}`} color="secondary" />}
        </div>
      )}

      <table className="table table-striped table-hover align-middle">
        <caption>Transaction Screening</caption>
        <thead>
          <tr>
            <th>Transaction</th>
            <th>Date</th>
            <th>Account</th>
            <th>Status</th>
            <th className="text-end">Amount</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>
                <div className="fw-semibold">{row.id}</div>
                <small className="text-secondary">{row.reference}</small>
              </td>
              <td>{row.date}</td>
              <td>{row.account}</td>
              <td>
                <DBadge soft size="sm" text={row.status} color={financeStatusColor(row.status)} />
              </td>
              <td className={`text-end fw-semibold ${row.amount >= 0 ? 'text-success' : 'text-danger'}`}>
                {USD.format(row.amount)}
              </td>
            </tr>
          ))}
          {rows.length === 0 && (
            <tr>
              <td colSpan={5} className="text-center text-secondary py-4">
                No transactions match your current filters.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </DBox>
  );
}

function FinancialTransactionOffcanvasComponent() {
  return (
    <DContextProvider<TransactionScreeningPortalPayloads>
      portalName="tablePatternsTransactionFiltersPortal"
      availablePortals={{ filters: TransactionScreeningFiltersOffcanvas }}
    >
      <FinancialTransactionOffcanvasContent />
    </DContextProvider>
  );
}

export const TransactionHistoryOffcanvas: Story = {
  render: () => <FinancialTransactionOffcanvasComponent />,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Uses `DContextProvider` + `openPortal` + `DOffcanvas` to open a responsive advanced-filters panel with apply/clear actions.',
      },
    },
  },
};

function LoanPortfolioComponent() {
  const [sortBy, setSortBy] = useState<'borrower' | 'disbursed' | 'daysPastDue'>('daysPastDue');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const getSortIcon = (field: 'borrower' | 'disbursed' | 'daysPastDue') => {
    if (sortBy !== field) {
      return <DIcon icon="ArrowUpDown" size="0.9rem" className="text-gray-300" />;
    }

    if (sortDirection === 'asc') {
      return <DIcon icon="ArrowUp" size="0.9rem" className="text-primary" />;
    }

    return <DIcon icon="ArrowDown" size="0.9rem" className="text-primary" />;
  };

  const rows = [...PORTFOLIO_LOANS].sort((left, right) => {
    let base = 0;
    if (sortBy === 'borrower') {
      base = left.borrower.localeCompare(right.borrower);
    }
    if (sortBy === 'disbursed') {
      base = left.disbursed - right.disbursed;
    }
    if (sortBy === 'daysPastDue') {
      base = left.daysPastDue - right.daysPastDue;
    }
    return sortDirection === 'asc' ? base : -base;
  });

  const onSort = (field: 'borrower' | 'disbursed' | 'daysPastDue') => {
    if (sortBy === field) {
      setSortDirection((previous) => (previous === 'asc' ? 'desc' : 'asc'));
      return;
    }
    setSortBy(field);
    setSortDirection('desc');
  };

  const getAriaSort = (field: 'borrower' | 'disbursed' | 'daysPastDue'): 'ascending' | 'descending' | 'none' => {
    if (sortBy !== field) return 'none';
    return sortDirection === 'asc' ? 'ascending' : 'descending';
  };

  return (
    <DBox style={{ width: '100%' }}>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h6 className="mb-0">Loan Portfolio</h6>
        <small className="text-secondary">Click sortable columns to reorder</small>
      </div>

      <table className="table table-hover align-middle">
        <caption>Credit Risk Monitoring</caption>
        <thead>
          <tr>
            <th
              aria-sort={getAriaSort('borrower')}
            >
              <button
                type="button"
                className="btn btn-link p-0 text-decoration-none d-inline-flex align-items-center gap-1"
                onClick={() => onSort('borrower')}
              >
                Borrower
                {getSortIcon('borrower')}
              </button>
            </th>
            <th>Product</th>
            <th
              aria-sort={getAriaSort('disbursed')}
            >
              <button
                type="button"
                className="btn btn-link p-0 text-decoration-none d-inline-flex align-items-center gap-1"
                onClick={() => onSort('disbursed')}
              >
                Disbursed
                {getSortIcon('disbursed')}
              </button>
            </th>
            <th>Installments</th>
            <th
              aria-sort={getAriaSort('daysPastDue')}
            >
              <button
                type="button"
                className="btn btn-link p-0 text-decoration-none d-inline-flex align-items-center gap-1"
                onClick={() => onSort('daysPastDue')}
              >
                Days Past Due
                {getSortIcon('daysPastDue')}
              </button>
            </th>
            <th>Risk</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((loan) => {
            const risk = loanRisk(loan.daysPastDue);

            return (
              <tr key={loan.id}>
                <td>
                  <div className="fw-semibold">{loan.borrower}</div>
                  <small className="text-secondary">{loan.id}</small>
                </td>
                <td>{loan.product}</td>
                <td className="fw-semibold">{USD.format(loan.disbursed)}</td>
                <td>
                  {loan.paidInstallments}
                  /
                  {loan.totalInstallments}
                </td>
                <td>
                  {loan.daysPastDue === 0 ? (
                    <span className="text-success">Current</span>
                  ) : (
                    <span className="text-danger fw-semibold">
                      {loan.daysPastDue}
                      {' '}
                      days
                    </span>
                  )}
                </td>
                <td>
                  <DBadge soft size="sm" text={risk.text} color={risk.color} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </DBox>
  );
}

export const LoanPortfolio: Story = {
  render: () => <LoanPortfolioComponent />,
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: {
        code: `function LoanPortfolioExample() {
  const [sortBy, setSortBy] = useState('daysPastDue');
  const [sortDirection, setSortDirection] = useState('desc');

  const getSortIcon = (field) => {
    if (sortBy !== field) return <DIcon icon="ArrowUpDown" size="0.9rem" className="text-gray-300" />;
    if (sortDirection === 'asc') return <DIcon icon="ArrowUp" size="0.9rem" className="text-primary" />;
    return <DIcon icon="ArrowDown" size="0.9rem" className="text-primary" />;
  };

  const rows = [...PORTFOLIO_LOANS].sort((left, right) => {
    let base = 0;
    if (sortBy === 'borrower') base = left.borrower.localeCompare(right.borrower);
    if (sortBy === 'disbursed') base = left.disbursed - right.disbursed;
    if (sortBy === 'daysPastDue') base = left.daysPastDue - right.daysPastDue;
    return sortDirection === 'asc' ? base : -base;
  });

  const onSort = (field) => {
    if (sortBy === field) {
      setSortDirection((previous) => (previous === 'asc' ? 'desc' : 'asc'));
      return;
    }
    setSortBy(field);
    setSortDirection('desc');
  };

  const getAriaSort = (field) => {
    if (sortBy !== field) return 'none';
    return sortDirection === 'asc' ? 'ascending' : 'descending';
  };

  return (
    <DBox style={{ width: '100%' }}>
      <table className="table table-hover align-middle">
        <caption>Credit Risk Monitoring</caption>
        <thead>
          <tr>
            <th aria-sort={getAriaSort('borrower')}>
              <button
                type="button"
                className="btn btn-link p-0 text-decoration-none d-inline-flex align-items-center gap-1"
                onClick={() => onSort('borrower')}
              >
                Borrower
                {getSortIcon('borrower')}
              </button>
            </th>
            <th>Product</th>
            <th aria-sort={getAriaSort('disbursed')}>
              <button
                type="button"
                className="btn btn-link p-0 text-decoration-none d-inline-flex align-items-center gap-1"
                onClick={() => onSort('disbursed')}
              >
                Disbursed
                {getSortIcon('disbursed')}
              </button>
            </th>
            <th>Installments</th>
            <th aria-sort={getAriaSort('daysPastDue')}>
              <button
                type="button"
                className="btn btn-link p-0 text-decoration-none d-inline-flex align-items-center gap-1"
                onClick={() => onSort('daysPastDue')}
              >
                Days Past Due
                {getSortIcon('daysPastDue')}
              </button>
            </th>
            <th>Risk</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((loan) => {
            const risk = loanRisk(loan.daysPastDue);
            return (
              <tr key={loan.id}>
                <td>
                  <div className="fw-semibold">{loan.borrower}</div>
                  <small className="text-secondary">{loan.id}</small>
                </td>
                <td>{loan.product}</td>
                <td className="fw-semibold">{USD.format(loan.disbursed)}</td>
                <td>{loan.paidInstallments}/{loan.totalInstallments}</td>
                <td>
                  {loan.daysPastDue === 0
                    ? <span className="text-success">Current</span>
                    : <span className="text-danger fw-semibold">{loan.daysPastDue} days</span>}
                </td>
                <td><DBadge soft size="sm" text={risk.text} color={risk.color} /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </DBox>
  );
}`,
      },
    },
  },
};

function BulkActionsComponent() {
  const {
    selectedItems,
    setSelectedItems,
    toggleSelectedItem,
    isSelectedItem,
  } = useItemSelection<PaymentApproval>();

  const [lastAction, setLastAction] = useState('');

  const selectedAmount = selectedItems.reduce((total, row) => total + row.amount, 0);

  return (
    <DBox style={{ width: '100%' }}>
      {selectedItems.length > 0 && (
        <div className="alert alert-primary d-flex justify-content-between align-items-center mb-3">
          <span>
            <strong>{selectedItems.length}</strong>
            {' '}
            selected
            {' '}
            <span className="text-secondary">
              (Total:
              {' '}
              {USD.format(selectedAmount)}
              )
            </span>
          </span>
          <div className="d-flex gap-2">
            <button
              type="button"
              className="btn btn-sm btn-success"
              onClick={() => setLastAction(`Approved ${selectedItems.length} payments`)}
            >
              Approve
            </button>
            <button
              type="button"
              className="btn btn-sm btn-warning"
              onClick={() => setLastAction(`Sent ${selectedItems.length} payments to review`)}
            >
              Send to Review
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              onClick={() => setLastAction(`Exported ${selectedItems.length} payments`)}
            >
              Export CSV
            </button>
          </div>
        </div>
      )}

      {lastAction && <p className="small text-muted">{lastAction}</p>}

      <table className="table table-hover align-middle">
        <caption>Payment Approval Queue</caption>
        <thead>
          <tr>
            <th>
              <DInputCheck
                type="checkbox"
                ariaLabel="Select all payments"
                checked={PAYMENT_APPROVALS.length > 0
                  && selectedItems.length === PAYMENT_APPROVALS.length}
                indeterminate={selectedItems.length > 0
                  && selectedItems.length < PAYMENT_APPROVALS.length}
                onChange={(event) => {
                  setSelectedItems(event.target.checked ? PAYMENT_APPROVALS : []);
                }}
              />
            </th>
            <th>Beneficiary</th>
            <th>Account</th>
            <th>Due Date</th>
            <th className="text-end">Amount</th>
          </tr>
        </thead>
        <tbody>
          {PAYMENT_APPROVALS.map((row) => (
            <tr key={row.id} className={isSelectedItem(row) ? 'table-active' : undefined}>
              <td>
                <DInputCheck
                  type="checkbox"
                  ariaLabel={`Select payment ${row.id}`}
                  checked={isSelectedItem(row)}
                  onChange={() => toggleSelectedItem(row)}
                />
              </td>
              <td>
                <div className="fw-semibold">{row.beneficiary}</div>
                <small className="text-secondary">{row.id}</small>
              </td>
              <td>{row.account}</td>
              <td>{row.dueDate}</td>
              <td className="text-end fw-semibold">{USD.format(row.amount)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DBox>
  );
}

export const BulkActions: Story = {
  render: () => <BulkActionsComponent />,
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: {
        code: `function BulkActionsExample() {
  const {
    selectedItems,
    setSelectedItems,
    toggleSelectedItem,
    isSelectedItem,
  } = useItemSelection();

  const [lastAction, setLastAction] = useState('');

  const selectedAmount = selectedItems.reduce((total, row) => total + row.amount, 0);

  return (
    <DBox style={{ width: '100%' }}>
      {selectedItems.length > 0 && (
        <div className="alert alert-primary d-flex justify-content-between align-items-center mb-3">
          <span>
            <strong>{selectedItems.length}</strong> selected
            <span className="text-secondary"> (Total: {USD.format(selectedAmount)})</span>
          </span>
          <div className="d-flex gap-2">
            <button type="button" className="btn btn-sm btn-success"
              onClick={() => setLastAction(\`Approved \${selectedItems.length} payments\`)}
            >Approve</button>
            <button type="button" className="btn btn-sm btn-warning"
              onClick={() => setLastAction(\`Sent \${selectedItems.length} payments to review\`)}
            >Send to Review</button>
            <button type="button" className="btn btn-sm btn-outline-secondary"
              onClick={() => setLastAction(\`Exported \${selectedItems.length} payments\`)}
            >Export CSV</button>
          </div>
        </div>
      )}

      {lastAction && <p className="small text-muted">{lastAction}</p>}

      <table className="table table-hover align-middle">
        <caption>Payment Approval Queue</caption>
        <thead>
          <tr>
            <th>
              <DInputCheck
                type="checkbox"
                ariaLabel="Select all payments"
                checked={PAYMENT_APPROVALS.length > 0 && selectedItems.length === PAYMENT_APPROVALS.length}
                indeterminate={selectedItems.length > 0 && selectedItems.length < PAYMENT_APPROVALS.length}
                onChange={(event) => {
                  setSelectedItems(event.target.checked ? PAYMENT_APPROVALS : []);
                }}
              />
            </th>
            <th>Beneficiary</th>
            <th>Account</th>
            <th>Due Date</th>
            <th className="text-end">Amount</th>
          </tr>
        </thead>
        <tbody>
          {PAYMENT_APPROVALS.map((row) => (
            <tr key={row.id} className={isSelectedItem(row) ? 'table-active' : undefined}>
              <td>
                <DInputCheck
                  type="checkbox"
                  ariaLabel={\`Select payment \${row.id}\`}
                  checked={isSelectedItem(row)}
                  onChange={() => toggleSelectedItem(row)}
                />
              </td>
              <td>
                <div className="fw-semibold">{row.beneficiary}</div>
                <small className="text-secondary">{row.id}</small>
              </td>
              <td>{row.account}</td>
              <td>{row.dueDate}</td>
              <td className="text-end fw-semibold">{USD.format(row.amount)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DBox>
  );
}`,
      },
    },
  },
};
