import classNames from 'classnames';
import { useEffect, useState } from 'react';

import {
  changeQueryString,
  DBadge,
  DInput,
  DInputCheck,
  DPaginator,
  DSelect,
  DTableHead,
  getQueryString,
  useItemSelection,
} from '../../src';

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

export function ExampleBasicTable() {
  return (
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
  );
}

type Option = {
  label: string;
  value: string;
};

const ACCENTED_EXAMPLES = [
  'table-striped',
  'table-striped-columns',
  'table-dark table-striped',
  'table-dark table-striped-columns',
  'table-primary table-striped',
  'table-primary table-striped-columns',
  'table-secondary table-striped',
  'table-secondary table-striped-columns',
  'table-hover',
  'table-dark table-hover',
  'table-striped table-hover',
]
  .map((option) => ({
    label: option,
    value: option,
  }));

export function ExampleAccentedTable() {
  const [option, setOption] = useState<Option | null>(ACCENTED_EXAMPLES[0]);
  return (
    <>
      <DSelect<Option>
        options={ACCENTED_EXAMPLES}
        value={option}
        onChange={setOption}
      />
      <br />
      <table className={classNames('table', option?.value)}>
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
    </>
  );
}

const BORDERS_EXAMPLES = [
  'table-bordered',
  'table-bordered border-primary',
  'table-bordered border-secondary',
  'table-borderless',
  'table-dark table-borderless',
]
  .map((option) => ({
    label: option,
    value: option,
  }));

export function ExampleBorderTable() {
  const [option, setOption] = useState<Option | null>(BORDERS_EXAMPLES[0]);
  return (
    <>
      <DSelect<Option>
        options={BORDERS_EXAMPLES}
        value={option}
        onChange={setOption}
      />
      <br />
      <table className={classNames('table', option?.value)}>
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
    </>
  );
}

export function ExampleCompositionTableLoading() {
  return (
    <table className="table placeholder-wave">
      <caption>
        <div className="placeholder w-100 bg-secondary" />
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
          <td aria-hidden="true"><div className="placeholder w-100 bg-secondary" /></td>
          <td aria-hidden="true"><div className="placeholder w-100 bg-secondary" /></td>
          <td aria-hidden="true"><div className="placeholder w-100 bg-secondary" /></td>
          <td aria-hidden="true"><div className="placeholder w-100 bg-secondary" /></td>
        </tr>
        <tr>
          <td aria-hidden="true"><div className="placeholder w-100 bg-secondary" /></td>
          <td aria-hidden="true"><div className="placeholder w-100 bg-secondary" /></td>
          <td aria-hidden="true"><div className="placeholder w-100 bg-secondary" /></td>
          <td aria-hidden="true"><div className="placeholder w-100 bg-secondary" /></td>
        </tr>
        <tr>
          <td aria-hidden="true"><div className="placeholder w-100 bg-secondary" /></td>
          <td aria-hidden="true"><div className="placeholder w-100 bg-secondary" /></td>
          <td aria-hidden="true"><div className="placeholder w-100 bg-secondary" /></td>
          <td aria-hidden="true"><div className="placeholder w-100 bg-secondary" /></td>
        </tr>
      </tbody>
    </table>
  );
}

type Props = {
  page: number;
  rows: number;
  totalPages: number;
  sort: string;
  setPage(page: number): void;
  setRows(rows: number): void;
  setSort(sort: string): void;
};

export function ExampleCompositionTable(
  {
    page,
    rows,
    totalPages,
    sort,
    setPage,
    setRows,
    setSort,
  }: Props,
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
              <DTableHead
                style={{ width: '25%' }}
                key={key}
                field={key}
                label={value}
                value={sort}
                onChange={setSort}
              />
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

export function ExampleComposition() {
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(Number(getQueryString('page', { default: '1', useSearch: false })));
  const [rows, setRows] = useState(Number(getQueryString('rows', { default: '3', useSearch: false })));
  const [sort, setSort] = useState(getQueryString('sort', { default: 'id', useSearch: false })!);
  const [queryString, setQueryString] = useState('');

  useEffect(() => {
    setQueryString(changeQueryString(
      { page, rows, sort },
      { useSearch: false },
    ));
  }, [setQueryString, page, rows, sort]);

  return (
    <>
      <DInputCheck
        type="checkbox"
        label="Loading"
        checked={loading}
        onChange={(event) => setLoading(event.target.checked)}
      />
      {'Query String = '}
      {queryString && (
        <DBadge text={queryString} color="primary" />
      )}
      <br />
      <br />
      {loading && <ExampleCompositionTableLoading />}
      {!loading && (
        <ExampleCompositionTable
          page={page}
          rows={rows}
          totalPages={3}
          sort={sort}
          setPage={setPage}
          setRows={setRows}
          setSort={setSort}
        />
      )}
    </>
  );
}
