import{j as e}from"./jsx-runtime-CKrituN3.js";import{useMDXComponents as k}from"./index-DSz_1G2r.js";import{ae as D,al as b,ah as g}from"./index-D83KeUA8.js";import{r as d}from"./index-CBqU2yxZ.js";import{c as N}from"./index-ELyB7pIJ.js";import{D as R}from"./DSelect-VR4pLnmy.js";import{D as S}from"./DInputCheck-DOt0IpKo.js";import{D as T}from"./DBadge-lRsxpBBr.js";import{u as C}from"./useItemSelection-ovHkqXYn.js";import{D as I}from"./DTableHead-Bk7BQnKO.js";import{F as P}from"./DInput-CT3eH2pi.js";import{D as O}from"./DPaginator-Czo-MijN.js";import"./iframe-n4QHviUT.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-C8M-hMhC.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./index-8JwjhRSi.js";import"./floating-ui.dom-Hl2SHHju.js";import"./config-CUZHf55T.js";import"./DIcon-1scRBrNx.js";import"./DContext-CSLUP0I2.js";import"./useProvidedRefOrCreate-B_Nl4lOm.js";import"./index-D3ylJrlI.js";function f(t,a={useSearch:!0}){return new URLSearchParams(a.useSearch?window.location.search:"").get(t)||a.default}function L(t,{useSearch:a=!0,pushState:s=!1}={}){const r=new URLSearchParams(a?window.location.search:"");if(Object.entries(t).forEach(([n,i])=>{if(!i){r.delete(n);return}r.set(n,String(i))}),s){const n=new URL(window.location.href);n.search=r.toString(),window.history.pushState(null,"",n.toString())}return r.toString()}const l=[["id","#"],["first","First"],["second","Second"],["last","Last"]],c=[{id:1,first:"Marl",second:"Otto",last:"@mdo"},{id:2,first:"Jacob",second:"Thornton",last:"@fat"},{id:3,first:"Larry the Bird",second:"-",last:"@twitter"}];function _(){return e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsx("tr",{children:l.map(([t,a])=>e.jsx("th",{children:a},t))})}),e.jsx("tbody",{children:c.map(t=>e.jsx("tr",{children:l.map(([a])=>e.jsx("td",{children:t[a]},`${t.id}-${a}`))},t.id))})]})}const E=["table-striped","table-striped-columns","table-dark table-striped","table-dark table-striped-columns","table-primary table-striped","table-primary table-striped-columns","table-secondary table-striped","table-secondary table-striped-columns","table-hover","table-dark table-hover","table-striped table-hover"].map(t=>({label:t,value:t}));function A(){const[t,a]=d.useState(E[0]);return e.jsxs(e.Fragment,{children:[e.jsx(R,{options:E,value:t,onChange:a}),e.jsx("br",{}),e.jsxs("table",{className:N("table",t==null?void 0:t.value),children:[e.jsx("thead",{children:e.jsx("tr",{children:l.map(([s,r])=>e.jsx("th",{children:r},s))})}),e.jsx("tbody",{children:c.map(s=>e.jsx("tr",{children:l.map(([r])=>e.jsx("td",{children:s[r]},`${s.id}-${r}`))},s.id))})]})]})}const w=["table-bordered","table-bordered border-primary","table-bordered border-secondary","table-borderless","table-dark table-borderless"].map(t=>({label:t,value:t}));function B(){const[t,a]=d.useState(w[0]);return e.jsxs(e.Fragment,{children:[e.jsx(R,{options:w,value:t,onChange:a}),e.jsx("br",{}),e.jsxs("table",{className:N("table",t==null?void 0:t.value),children:[e.jsx("thead",{children:e.jsx("tr",{children:l.map(([s,r])=>e.jsx("th",{children:r},s))})}),e.jsx("tbody",{children:c.map(s=>e.jsx("tr",{children:l.map(([r])=>e.jsx("td",{children:s[r]},`${s.id}-${r}`))},s.id))})]})]})}function M(){return e.jsxs("table",{className:"table placeholder-wave",children:[e.jsx("caption",{children:e.jsx("div",{className:"placeholder w-100 bg-secondary"})}),e.jsx("thead",{children:e.jsx("tr",{children:l.map(([t,a])=>e.jsx("th",{style:{width:"25%"},children:a},t))})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("div",{className:"placeholder w-100 bg-secondary"})}),e.jsx("td",{children:e.jsx("div",{className:"placeholder w-100 bg-secondary"})}),e.jsx("td",{children:e.jsx("div",{className:"placeholder w-100 bg-secondary"})}),e.jsx("td",{children:e.jsx("div",{className:"placeholder w-100 bg-secondary"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("div",{className:"placeholder w-100 bg-secondary"})}),e.jsx("td",{children:e.jsx("div",{className:"placeholder w-100 bg-secondary"})}),e.jsx("td",{children:e.jsx("div",{className:"placeholder w-100 bg-secondary"})}),e.jsx("td",{children:e.jsx("div",{className:"placeholder w-100 bg-secondary"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("div",{className:"placeholder w-100 bg-secondary"})}),e.jsx("td",{children:e.jsx("div",{className:"placeholder w-100 bg-secondary"})}),e.jsx("td",{children:e.jsx("div",{className:"placeholder w-100 bg-secondary"})}),e.jsx("td",{children:e.jsx("div",{className:"placeholder w-100 bg-secondary"})})]})]})]})}function j({page:t,rows:a,totalPages:s,sort:r,setPage:n,setRows:i,setSort:p}){const{isSelectedItem:x,toggleSelectedItem:m,selectedItems:h,setSelectedItems:y}=C();return e.jsxs(e.Fragment,{children:[e.jsxs("table",{className:"table",children:[e.jsx("caption",{children:"List of users"}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(S,{type:"checkbox",checked:h.length===c.length,onChange:o=>{y(o.target.checked?c:[])}})}),l.map(([o,u])=>e.jsx(I,{style:{width:"25%"},field:o,label:u,value:r,onChange:p},o))]})}),e.jsx("tbody",{children:c.map(o=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(S,{type:"checkbox",onChange:()=>m(o),checked:x(o)})}),l.map(([u])=>e.jsx("td",{children:o[u]},`${o.id}-${u}`))]},o.id))})]}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-2",children:[e.jsx("small",{children:"Per Page "}),e.jsx(P,{className:"d-inline-block",style:{width:"36px"},size:"sm",type:"number",value:a.toString(),onChange:o=>i(parseInt(o,10))})]}),e.jsx("div",{className:"col-8",children:e.jsx(O,{current:t,onPageChange:n,total:s})})]})]})}function H(){const[t,a]=d.useState(!1),[s,r]=d.useState(Number(f("page",{default:"1",useSearch:!1}))),[n,i]=d.useState(Number(f("rows",{default:"3",useSearch:!1}))),[p,x]=d.useState(f("sort",{default:"id",useSearch:!1})),[m,h]=d.useState("");return d.useEffect(()=>{h(L({page:s,rows:n,sort:p},{useSearch:!1}))},[h,s,n,p]),e.jsxs(e.Fragment,{children:[e.jsx(S,{type:"checkbox",label:"Loading",checked:t,onChange:y=>a(y.target.checked)}),"Query String = ",m&&e.jsx(T,{text:m,theme:"primary"}),e.jsx("br",{}),e.jsx("br",{}),t&&e.jsx(M,{}),!t&&e.jsx(j,{page:s,rows:n,totalPages:3,sort:p,setPage:r,setRows:i,setSort:x})]})}try{j.displayName="ExampleCompositionTable",j.__docgenInfo={description:"",displayName:"ExampleCompositionTable",props:{page:{defaultValue:null,description:"",name:"page",required:!0,type:{name:"number"}},rows:{defaultValue:null,description:"",name:"rows",required:!0,type:{name:"number"}},totalPages:{defaultValue:null,description:"",name:"totalPages",required:!0,type:{name:"number"}},sort:{defaultValue:null,description:"",name:"sort",required:!0,type:{name:"string"}},setPage:{defaultValue:null,description:"",name:"setPage",required:!0,type:{name:"(page: number) => void"}},setRows:{defaultValue:null,description:"",name:"setRows",required:!0,type:{name:"(rows: number) => void"}},setSort:{defaultValue:null,description:"",name:"setSort",required:!0,type:{name:"(sort: string) => void"}}}}}catch{}function v(t){const a={a:"a",h1:"h1",h2:"h2",p:"p",...k(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(D,{title:"Design System/Examples/Tables"}),`
`,e.jsx(a.h1,{id:"tables",children:"Tables"}),`
`,e.jsxs(a.p,{children:[`In our framework, we lack a dedicated component for tables. Instead, we utilize HTML tables with
`,e.jsx(a.a,{href:"https://getbootstrap.com/docs/5.3/content/tables/",rel:"nofollow",children:"Bootstrap"}),` and offer components for headers with sorting
capabilities and pagination.`]}),`
`,e.jsx(a.h2,{id:"basic-example",children:"Basic Example"}),`
`,e.jsx(a.p,{children:`This example demonstrates a basic implementation of a table using HTML and Bootstrap classes within our framework.
It includes simple table headers and rows populated with sample data.`}),`
`,e.jsx(b,{code:`
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
              <td key={\`\${row.id}-\${key}\`}>
                {row[key as keyof typeof ROWS[0]]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
    `,language:"tsx",dark:!0}),`
`,e.jsx(g,{children:e.jsx("div",{style:{height:"240px"},children:e.jsx(_,{})})}),`
`,e.jsx(a.h2,{id:"accented-examples",children:"Accented Examples"}),`
`,e.jsx(a.p,{children:`The Accented Examples showcase variations of the table with different styles applied using Bootstrap's utility classes.
Users can select different styling options such as striped rows, hover effects, and various color accents to
customize the table's appearance.`}),`
`,e.jsx(b,{code:`
import {
  DSelect,
} from '@dynamic-framework/ui-react';

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
                <td key={\`\${row.id}-\${key}\`}>
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
`,language:"tsx",dark:!0}),`
`,e.jsx(g,{children:e.jsx("div",{style:{height:"240px"},children:e.jsx(A,{})})}),`
`,e.jsx(a.h2,{id:"borders-example",children:"Borders Example"}),`
`,e.jsx(a.p,{children:`In the Borders Example, we illustrate how to add border styles to tables using Bootstrap's border utility classes.
This allows users to choose between bordered and borderless table styles, with additional options
for border color customization.`}),`
`,e.jsx(b,{code:`
import {
  DSelect,
} from '@dynamic-framework/ui-react';

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

type Option = {
  label: string;
  value: string;
};

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
                <td key={\`\${row.id}-\${key}\`}>
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
`,language:"tsx",dark:!0}),`
`,e.jsx(g,{children:e.jsx("div",{style:{height:"240px"},children:e.jsx(B,{})})}),`
`,e.jsx(a.h2,{id:"composition-example",children:"Composition Example"}),`
`,e.jsx(a.p,{children:`The Composition Example demonstrates our approach to integrating tables with advanced features
like sorting and pagination directly through services. In this example, the table dynamically generates a query string
based on user interactions, enabling seamless integration with backend services for efficient data management.`}),`
`,e.jsx(a.p,{children:`This integration enhances the table component by allowing for sortable columns and pagination controls,
providing a robust user experience for handling large datasets within our framework.`}),`
`,e.jsx(b,{code:`
import {
  DPaginator,
  DInputCheck,
  DBadge,
  DTableHead,
  useItemSelection,
  getQueryString,
  changeQueryString,
} from '@dynamic-framework/ui-react';

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
      <table className="table">
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
        <DBadge text={queryString} theme="primary" />
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
`,language:"tsx",dark:!0}),`
`,e.jsx(g,{children:e.jsx("div",{style:{height:"360px"},children:e.jsx(H,{})})})]})}function he(t={}){const{wrapper:a}={...k(),...t.components};return a?e.jsx(a,{...t,children:e.jsx(v,{...t})}):v(t)}export{he as default};
