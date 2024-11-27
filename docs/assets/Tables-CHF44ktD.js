import{j as e}from"./jsx-runtime-DQ32znRX.js";import{useMDXComponents as k}from"./index-COxJNofV.js";import{ae as D,al as b,ah as g}from"./index-foV-M_fl.js";import{r as d}from"./index-DH5ua8nC.js";import{c as N}from"./index-mLFX9G4A.js";import{D as R}from"./DSelect-DVjpWrYV.js";import{D as S}from"./DInputCheck-DxtBQ11x.js";import{D as T}from"./DBadge-EhzYGdXN.js";import{u as C}from"./useItemSelection-n2n_KRij.js";import{D as I}from"./DTableHead-CdhFM9q3.js";import{F as P}from"./DInput-CpmK98WL.js";import{D as O}from"./DPaginator-gubx7Rk1.js";import"./iframe-DYwGD2Mj.js";import"../sb-preview/runtime.js";import"./index-D9uilScg.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-DULPOR7A.js";import"./index-C9uyZMOe.js";import"./index-DrFu-skq.js";import"./floating-ui.dom-B5CW5bK0.js";import"./config-CUZHf55T.js";import"./DIcon-CDY5yPx9.js";import"./DContext-9gKMeQXa.js";import"./useProvidedRefOrCreate-DxC68qIt.js";import"./index-CpCSUgdU.js";function f(t,a={useSearch:!0}){return new URLSearchParams(a.useSearch?window.location.search:"").get(t)||a.default}function L(t,{useSearch:a=!0,pushState:s=!1}={}){const r=new URLSearchParams(a?window.location.search:"");if(Object.entries(t).forEach(([n,i])=>{if(!i){r.delete(n);return}r.set(n,String(i))}),s){const n=new URL(window.location.href);n.search=r.toString(),window.history.pushState(null,"",n.toString())}return r.toString()}const l=[["id","#"],["first","First"],["second","Second"],["last","Last"]],c=[{id:1,first:"Marl",second:"Otto",last:"@mdo"},{id:2,first:"Jacob",second:"Thornton",last:"@fat"},{id:3,first:"Larry the Bird",second:"-",last:"@twitter"}];function _(){return e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsx("tr",{children:l.map(([t,a])=>e.jsx("th",{children:a},t))})}),e.jsx("tbody",{children:c.map(t=>e.jsx("tr",{children:l.map(([a])=>e.jsx("td",{children:t[a]},`${t.id}-${a}`))},t.id))})]})}const E=["table-striped","table-striped-columns","table-dark table-striped","table-dark table-striped-columns","table-primary table-striped","table-primary table-striped-columns","table-secondary table-striped","table-secondary table-striped-columns","table-hover","table-dark table-hover","table-striped table-hover"].map(t=>({label:t,value:t}));function A(){const[t,a]=d.useState(E[0]);return e.jsxs(e.Fragment,{children:[e.jsx(R,{options:E,value:t,onChange:a}),e.jsx("br",{}),e.jsxs("table",{className:N("table",t==null?void 0:t.value),children:[e.jsx("thead",{children:e.jsx("tr",{children:l.map(([s,r])=>e.jsx("th",{children:r},s))})}),e.jsx("tbody",{children:c.map(s=>e.jsx("tr",{children:l.map(([r])=>e.jsx("td",{children:s[r]},`${s.id}-${r}`))},s.id))})]})]})}const w=["table-bordered","table-bordered border-primary","table-bordered border-secondary","table-borderless","table-dark table-borderless"].map(t=>({label:t,value:t}));function B(){const[t,a]=d.useState(w[0]);return e.jsxs(e.Fragment,{children:[e.jsx(R,{options:w,value:t,onChange:a}),e.jsx("br",{}),e.jsxs("table",{className:N("table",t==null?void 0:t.value),children:[e.jsx("thead",{children:e.jsx("tr",{children:l.map(([s,r])=>e.jsx("th",{children:r},s))})}),e.jsx("tbody",{children:c.map(s=>e.jsx("tr",{children:l.map(([r])=>e.jsx("td",{children:s[r]},`${s.id}-${r}`))},s.id))})]})]})}function M(){return e.jsxs("table",{className:"table placeholder-wave",children:[e.jsx("caption",{children:e.jsx("div",{className:"placeholder w-100 bg-secondary"})}),e.jsx("thead",{children:e.jsx("tr",{children:l.map(([t,a])=>e.jsx("th",{style:{width:"25%"},children:a},t))})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder w-100 bg-secondary"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder w-100 bg-secondary"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder w-100 bg-secondary"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder w-100 bg-secondary"})})]}),e.jsxs("tr",{children:[e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder w-100 bg-secondary"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder w-100 bg-secondary"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder w-100 bg-secondary"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder w-100 bg-secondary"})})]}),e.jsxs("tr",{children:[e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder w-100 bg-secondary"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder w-100 bg-secondary"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder w-100 bg-secondary"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder w-100 bg-secondary"})})]})]})]})}function j({page:t,rows:a,totalPages:s,sort:r,setPage:n,setRows:i,setSort:p}){const{isSelectedItem:x,toggleSelectedItem:h,selectedItems:m,setSelectedItems:y}=C();return e.jsxs(e.Fragment,{children:[e.jsxs("table",{className:"table",children:[e.jsx("caption",{children:"List of users"}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(S,{type:"checkbox",checked:m.length===c.length,onChange:o=>{y(o.target.checked?c:[])}})}),l.map(([o,u])=>e.jsx(I,{style:{width:"25%"},field:o,label:u,value:r,onChange:p},o))]})}),e.jsx("tbody",{children:c.map(o=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(S,{type:"checkbox",onChange:()=>h(o),checked:x(o)})}),l.map(([u])=>e.jsx("td",{children:o[u]},`${o.id}-${u}`))]},o.id))})]}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-2",children:[e.jsx("small",{children:"Per Page "}),e.jsx(P,{className:"d-inline-block",style:{width:"36px"},size:"sm",type:"number",value:a.toString(),onChange:o=>i(parseInt(o,10))})]}),e.jsx("div",{className:"col-8",children:e.jsx(O,{current:t,onPageChange:n,total:s})})]})]})}function H(){const[t,a]=d.useState(!1),[s,r]=d.useState(Number(f("page",{default:"1",useSearch:!1}))),[n,i]=d.useState(Number(f("rows",{default:"3",useSearch:!1}))),[p,x]=d.useState(f("sort",{default:"id",useSearch:!1})),[h,m]=d.useState("");return d.useEffect(()=>{m(L({page:s,rows:n,sort:p},{useSearch:!1}))},[m,s,n,p]),e.jsxs(e.Fragment,{children:[e.jsx(S,{type:"checkbox",label:"Loading",checked:t,onChange:y=>a(y.target.checked)}),"Query String = ",h&&e.jsx(T,{text:h,theme:"primary"}),e.jsx("br",{}),e.jsx("br",{}),t&&e.jsx(M,{}),!t&&e.jsx(j,{page:s,rows:n,totalPages:3,sort:p,setPage:r,setRows:i,setSort:x})]})}try{j.displayName="ExampleCompositionTable",j.__docgenInfo={description:"",displayName:"ExampleCompositionTable",props:{page:{defaultValue:null,description:"",name:"page",required:!0,type:{name:"number"}},rows:{defaultValue:null,description:"",name:"rows",required:!0,type:{name:"number"}},totalPages:{defaultValue:null,description:"",name:"totalPages",required:!0,type:{name:"number"}},sort:{defaultValue:null,description:"",name:"sort",required:!0,type:{name:"string"}},setPage:{defaultValue:null,description:"",name:"setPage",required:!0,type:{name:"(page: number) => void"}},setRows:{defaultValue:null,description:"",name:"setRows",required:!0,type:{name:"(rows: number) => void"}},setSort:{defaultValue:null,description:"",name:"setSort",required:!0,type:{name:"(sort: string) => void"}}}}}catch{}function v(t){const a={a:"a",h1:"h1",h2:"h2",p:"p",...k(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(D,{title:"Design System/Examples/Tables"}),`
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
