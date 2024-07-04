import { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';

import {
  DSelect,
  DPaginator,
  DInputCheck,
  DBadge,
  DInput,
  DTableHead,
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
          <td><div className="placeholder w-100 bg-secondary" /></td>
          <td><div className="placeholder w-100 bg-secondary" /></td>
          <td><div className="placeholder w-100 bg-secondary" /></td>
          <td><div className="placeholder w-100 bg-secondary" /></td>
        </tr>
        <tr>
          <td><div className="placeholder w-100 bg-secondary" /></td>
          <td><div className="placeholder w-100 bg-secondary" /></td>
          <td><div className="placeholder w-100 bg-secondary" /></td>
          <td><div className="placeholder w-100 bg-secondary" /></td>
        </tr>
        <tr>
          <td><div className="placeholder w-100 bg-secondary" /></td>
          <td><div className="placeholder w-100 bg-secondary" /></td>
          <td><div className="placeholder w-100 bg-secondary" /></td>
          <td><div className="placeholder w-100 bg-secondary" /></td>
        </tr>
      </tbody>
    </table>
  );
}

type Props = {
  queryString: string;
  onQueryStringChange: (queryString: string) => void;
  total: number;
};

export function ExampleCompositionTable({ total, queryString, onQueryStringChange }: Props) {
  const {
    pageParam,
    perPageParam,
    sortParam,
  } = useMemo(() => {
    const params = new URLSearchParams(queryString);
    return {
      pageParam: parseInt(params.get('page') || '1', 10),
      perPageParam: parseInt(params.get('per_page') || '1', 10),
      sortParam: params.get('sort') || '',
    };
  }, [queryString]);

  const [page, setPage] = useState(pageParam);
  const [perPage, setPerPage] = useState(perPageParam);
  const [sort, setSort] = useState(sortParam);

  useEffect(() => {
    const params = new URLSearchParams({
      ...page && { page: page.toString() },
      ...perPage && { per_page: perPage.toString() },
      ...total && { total: total.toString() },
      ...sort && { sort },
    });

    onQueryStringChange(params.toString());
  }, [onQueryStringChange, page, perPage, sort, total]);

  return (
    <>
      <table className="table">
        <caption>List of users</caption>
        <thead>
          <tr>
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
            value={perPage.toString()}
            onChange={(value) => setPerPage(parseInt(value, 10))}
          />
        </div>
        <div className="col-8">
          <DPaginator
            page={page}
            onPageChange={setPage}
            total={total}
          />
        </div>
      </div>
    </>
  );
}

export function ExampleComposition() {
  const [loading, setLoading] = useState(true);
  const [queryString, setQueryString] = useState('');

  useEffect(() => {
    const timer = setTimeout(
      () => setLoading(false),
      1000,
    );
    return () => {
      clearTimeout(timer);
    };
  }, []);

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
        <DBadge text={queryString} theme="primary" />
      )}
      <br />
      <br />
      {loading && <ExampleCompositionTableLoading />}
      {!loading && (
        <ExampleCompositionTable
          total={3}
          queryString={queryString}
          onQueryStringChange={setQueryString}
        />
      )}
    </>
  );
}
