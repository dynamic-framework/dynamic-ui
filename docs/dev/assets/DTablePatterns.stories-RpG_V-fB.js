import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./iframe-ByOBXyA_.js";import{D as i}from"./DBox-BBgex0c_.js";import{u as ue}from"./useItemSelection-COKfKWMO.js";import{D as g}from"./DInputCheck-BoBybdTP.js";import{D as ye}from"./DTableHead-BWm35c5x.js";import{F as be}from"./DInput-CqdmX8yY.js";import{D as ge}from"./DPaginator-PYPuHQOS.js";import{D as xe}from"./DBadge-Deaj3Y_0.js";import"./index-C-Y6iqFF.js";import"./DIcon-DH916wZW.js";import"./config-C3iYXcFk.js";import"./DContext-CtW_D21q.js";import"./index-j79j67Hz.js";import"./index-Dr64R2JO.js";import"./useProvidedRefOrCreate-CryQw0G6.js";function C(t,a={useSearch:!0}){return new URLSearchParams(a.useSearch?window.location.search:"").get(t)||a.default}function je(t,{useSearch:a=!0,pushState:n=!1}={}){const l=new URLSearchParams(a?window.location.search:"");if(Object.entries(t).forEach(([o,p])=>{if(!p){l.delete(o);return}l.set(o,String(p))}),n){const o=new URL(window.location.href);o.search=l.toString(),window.history.pushState(null,"",o.toString())}return l.toString()}const r=[["id","#"],["first","First"],["second","Second"],["last","Last"]],s=[{id:1,first:"Marl",second:"Otto",last:"@mdo"},{id:2,first:"Jacob",second:"Thornton",last:"@fat"},{id:3,first:"Larry the Bird",second:"-",last:"@twitter"}],Le={title:"Patterns/Table Patterns",component:i,parameters:{docs:{description:{component:"Examples of table patterns using Bootstrap table classes and Dynamic UI components."}}},tags:["autodocs"]},j={render:()=>e.jsx(i,{style:{width:"800px"},children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsx("tr",{children:r.map(([t,a])=>e.jsx("th",{children:a},t))})}),e.jsx("tbody",{children:s.map(t=>e.jsx("tr",{children:r.map(([a])=>e.jsx("td",{children:t[a]},`${t.id}-${a}`))},t.id))})]})})},S={render:()=>e.jsx(i,{style:{width:"800px"},children:e.jsxs("table",{className:"table table-borderless",children:[e.jsx("thead",{children:e.jsx("tr",{children:r.map(([t,a])=>e.jsx("th",{children:a},t))})}),e.jsx("tbody",{children:s.map(t=>e.jsx("tr",{children:r.map(([a])=>e.jsx("td",{children:t[a]},`${t.id}-${a}`))},t.id))})]})})},w={render:()=>e.jsxs(i,{style:{width:"800px"},children:[e.jsx("h6",{children:"Striped Rows"}),e.jsxs("table",{className:"table table-striped",children:[e.jsx("thead",{children:e.jsx("tr",{children:r.map(([t,a])=>e.jsx("th",{children:a},t))})}),e.jsx("tbody",{children:s.map(t=>e.jsx("tr",{children:r.map(([a])=>e.jsx("td",{children:t[a]},`${t.id}-${a}`))},t.id))})]}),e.jsx("br",{}),e.jsx("h6",{children:"Striped Columns"}),e.jsxs("table",{className:"table table-striped-columns",children:[e.jsx("thead",{children:e.jsx("tr",{children:r.map(([t,a])=>e.jsx("th",{children:a},t))})}),e.jsx("tbody",{children:s.map(t=>e.jsx("tr",{children:r.map(([a])=>e.jsx("td",{children:t[a]},`${t.id}-${a}`))},t.id))})]})]})},k={render:()=>e.jsxs(i,{style:{width:"800px"},children:[e.jsx("h6",{children:"Hover Rows"}),e.jsxs("table",{className:"table table-hover",children:[e.jsx("thead",{children:e.jsx("tr",{children:r.map(([t,a])=>e.jsx("th",{children:a},t))})}),e.jsx("tbody",{children:s.map(t=>e.jsx("tr",{children:r.map(([a])=>e.jsx("td",{children:t[a]},`${t.id}-${a}`))},t.id))})]}),e.jsx("br",{}),e.jsx("h6",{children:"Striped + Hover"}),e.jsxs("table",{className:"table table-striped table-hover",children:[e.jsx("thead",{children:e.jsx("tr",{children:r.map(([t,a])=>e.jsx("th",{children:a},t))})}),e.jsx("tbody",{children:s.map(t=>e.jsx("tr",{children:r.map(([a])=>e.jsx("td",{children:t[a]},`${t.id}-${a}`))},t.id))})]})]})},v={render:()=>e.jsxs(i,{style:{width:"800px"},children:[e.jsx("h6",{children:"Dark"}),e.jsxs("table",{className:"table table-dark",children:[e.jsx("thead",{children:e.jsx("tr",{children:r.map(([t,a])=>e.jsx("th",{children:a},t))})}),e.jsx("tbody",{children:s.map(t=>e.jsx("tr",{children:r.map(([a])=>e.jsx("td",{children:t[a]},`${t.id}-${a}`))},t.id))})]}),e.jsx("br",{}),e.jsx("h6",{children:"Dark Striped"}),e.jsxs("table",{className:"table table-dark table-striped",children:[e.jsx("thead",{children:e.jsx("tr",{children:r.map(([t,a])=>e.jsx("th",{children:a},t))})}),e.jsx("tbody",{children:s.map(t=>e.jsx("tr",{children:r.map(([a])=>e.jsx("td",{children:t[a]},`${t.id}-${a}`))},t.id))})]})]})},N={render:()=>e.jsxs(i,{style:{width:"800px"},children:[e.jsx("h6",{children:"Bordered"}),e.jsxs("table",{className:"table table-bordered",children:[e.jsx("thead",{children:e.jsx("tr",{children:r.map(([t,a])=>e.jsx("th",{children:a},t))})}),e.jsx("tbody",{children:s.map(t=>e.jsx("tr",{children:r.map(([a])=>e.jsx("td",{children:t[a]},`${t.id}-${a}`))},t.id))})]}),e.jsx("br",{}),e.jsx("h6",{children:"Bordered Primary"}),e.jsxs("table",{className:"table table-bordered border-primary",children:[e.jsx("thead",{children:e.jsx("tr",{children:r.map(([t,a])=>e.jsx("th",{children:a},t))})}),e.jsx("tbody",{children:s.map(t=>e.jsx("tr",{children:r.map(([a])=>e.jsx("td",{children:t[a]},`${t.id}-${a}`))},t.id))})]})]})},E={render:()=>e.jsx(i,{style:{width:"800px"},children:e.jsxs("table",{className:"table table-sm",children:[e.jsx("thead",{children:e.jsx("tr",{children:r.map(([t,a])=>e.jsx("th",{children:a},t))})}),e.jsx("tbody",{children:s.map(t=>e.jsx("tr",{children:r.map(([a])=>e.jsx("td",{children:t[a]},`${t.id}-${a}`))},t.id))})]})})},R={render:()=>e.jsx(i,{style:{width:"800px"},children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsx("tr",{children:r.map(([t,a])=>e.jsx("th",{children:a},t))})}),e.jsx("tbody",{children:s.map((t,a)=>e.jsx("tr",{className:a===1?"table-active":void 0,children:r.map(([n])=>e.jsx("td",{children:t[n]},`${t.id}-${n}`))},t.id))})]})})},f={render:()=>e.jsx(i,{style:{width:"800px"},children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsx("tr",{children:r.map(([t,a])=>e.jsx("th",{children:a},t))})}),e.jsx("tbody",{children:s.map((t,a)=>{let n="";return a===0&&(n="table-primary"),a===1&&(n="table-secondary"),a===2&&(n="table-success"),e.jsx("tr",{className:n,children:r.map(([l])=>e.jsx("td",{children:t[l]},`${t.id}-${l}`))},t.id)})})]})})},D={render:()=>e.jsx(i,{style:{width:"800px"},children:e.jsxs("table",{className:"table placeholder-wave",children:[e.jsx("caption",{children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("thead",{children:e.jsx("tr",{children:r.map(([t,a])=>e.jsx("th",{style:{width:"25%"},children:a},t))})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})})]}),e.jsxs("tr",{children:[e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})})]}),e.jsxs("tr",{children:[e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})})]})]})]})})};function Se(){const{isSelectedItem:t,toggleSelectedItem:a,selectedItems:n,setSelectedItems:l}=ue(),[o,p]=h.useState(1),[m,b]=h.useState(3),[u,y]=h.useState("id");return e.jsxs(i,{style:{width:"800px"},children:[e.jsxs("table",{className:"table table-hover",children:[e.jsx("caption",{children:"List of users"}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(g,{type:"checkbox",checked:n.length===s.length,onChange:d=>{l(d.target.checked?s:[])}})}),r.map(([d,c])=>e.jsx(ye,{style:{width:"25%"},field:d,label:c,value:u,onChange:y},d))]})}),e.jsx("tbody",{children:s.map(d=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(g,{type:"checkbox",onChange:()=>a(d),checked:t(d)})}),r.map(([c])=>e.jsx("td",{children:d[c]},`${d.id}-${c}`))]},d.id))})]}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-2",children:[e.jsx("small",{children:"Per Page "}),e.jsx(be,{className:"d-inline-block",style:{width:"36px"},size:"sm",type:"number",value:m.toString(),onChange:d=>b(parseInt(d,10))})]}),e.jsx("div",{className:"col-8",children:e.jsx(ge,{current:o,onPageChange:p,total:5})})]})]})}const I={render:()=>e.jsx(Se,{})};function we(){return e.jsxs("table",{className:"table placeholder-wave",children:[e.jsx("caption",{children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("thead",{children:e.jsx("tr",{children:r.map(([t,a])=>e.jsx("th",{style:{width:"25%"},children:a},t))})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})})]}),e.jsxs("tr",{children:[e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})})]}),e.jsxs("tr",{children:[e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})})]})]})]})}function ke({page:t,rows:a,totalPages:n,sort:l,setPage:o,setRows:p,setSort:m}){const{isSelectedItem:b,toggleSelectedItem:u,selectedItems:y,setSelectedItems:x}=ue();return e.jsxs(e.Fragment,{children:[e.jsxs("table",{className:"table table-hover",children:[e.jsx("caption",{children:"List of users"}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(g,{type:"checkbox",checked:y.length===s.length,onChange:d=>{x(d.target.checked?s:[])}})}),r.map(([d,c])=>e.jsx(ye,{style:{width:"25%"},field:d,label:c,value:l,onChange:m},d))]})}),e.jsx("tbody",{children:s.map(d=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(g,{type:"checkbox",onChange:()=>u(d),checked:b(d)})}),r.map(([c])=>e.jsx("td",{children:d[c]},`${d.id}-${c}`))]},d.id))})]}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-2",children:[e.jsx("small",{children:"Per Page "}),e.jsx(be,{className:"d-inline-block",style:{width:"36px"},size:"sm",type:"number",value:a.toString(),onChange:d=>p(parseInt(d,10))})]}),e.jsx("div",{className:"col-8",children:e.jsx(ge,{current:t,onPageChange:o,total:n})})]})]})}function ve(){const[t,a]=h.useState(!1),[n,l]=h.useState(Number(C("page",{default:"1",useSearch:!1}))),[o,p]=h.useState(Number(C("rows",{default:"3",useSearch:!1}))),[m,b]=h.useState(C("sort",{default:"id",useSearch:!1})),[u,y]=h.useState(""),x=5;return h.useEffect(()=>{y(je({page:n,rows:o,sort:m},{useSearch:!1}))},[y,n,o,m]),e.jsxs(e.Fragment,{children:["Query String = ",u&&e.jsx(xe,{text:u,color:"primary"}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(i,{style:{width:"800px"},children:[e.jsx(g,{type:"checkbox",label:"Loading",checked:t,onChange:d=>a(d.target.checked)}),t?e.jsx(we,{}):e.jsx(ke,{page:n,rows:o,totalPages:x,sort:m,setPage:l,setRows:p,setSort:b})]})]})}const T={render:()=>e.jsx(ve,{}),parameters:{docs:{source:{code:`function CompositionTableLoading() {
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
  sort: string;
  setPage(page: number): void;
  setRows(rows: number): void;
  setSort(sort: string): void;
};

function CompositionTable(
  {
    page,
    rows,
    totalPages,
    sort,
    setPage,
    setRows,
    setSort,
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

export function Composition() {
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(Number(getQueryString('page', { default: '1', useSearch: false })));
  const [rows, setRows] = useState(Number(getQueryString('rows', { default: '3', useSearch: false })));
  const [sort, setSort] = useState(getQueryString('sort', { default: 'id', useSearch: false })!);
  const [queryString, setQueryString] = useState('');
  const totalPages = 5;

  useEffect(() => {
    setQueryString(changeQueryString(
      { page, rows, sort },
      { useSearch: false },
    ));
  }, [setQueryString, page, rows, sort]);

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
            sort={sort}
            setPage={setPage}
            setRows={setRows}
            setSort={setSort}
          />
        )}
      </DBox>
    </>
  );
}`}}}};var $,P,H;j.parameters={...j.parameters,docs:{...($=j.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <DBox style={{
    width: '800px'
  }}>
      <table className="table">
        <thead>
          <tr>
            {HEADER_ENTRIES.map(([key, value]) => <th key={key}>{value}</th>)}
          </tr>
        </thead>
        <tbody>
          {ROWS.map(row => <tr key={row.id}>
              {HEADER_ENTRIES.map(([key]) => <td key={\`\${row.id}-\${key}\`}>
                  {row[key as keyof typeof ROWS[0]]}
                </td>)}
            </tr>)}
        </tbody>
      </table>
    </DBox>
}`,...(H=(P=j.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var B,O,W;S.parameters={...S.parameters,docs:{...(B=S.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <DBox style={{
    width: '800px'
  }}>
      <table className="table table-borderless">
        <thead>
          <tr>
            {HEADER_ENTRIES.map(([key, value]) => <th key={key}>{value}</th>)}
          </tr>
        </thead>
        <tbody>
          {ROWS.map(row => <tr key={row.id}>
              {HEADER_ENTRIES.map(([key]) => <td key={\`\${row.id}-\${key}\`}>
                  {row[key as keyof typeof ROWS[0]]}
                </td>)}
            </tr>)}
        </tbody>
      </table>
    </DBox>
}`,...(W=(O=S.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var A,_,L;w.parameters={...w.parameters,docs:{...(A=w.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <DBox style={{
    width: '800px'
  }}>
      <h6>Striped Rows</h6>
      <table className="table table-striped">
        <thead>
          <tr>
            {HEADER_ENTRIES.map(([key, value]) => <th key={key}>{value}</th>)}
          </tr>
        </thead>
        <tbody>
          {ROWS.map(row => <tr key={row.id}>
              {HEADER_ENTRIES.map(([key]) => <td key={\`\${row.id}-\${key}\`}>
                  {row[key as keyof typeof ROWS[0]]}
                </td>)}
            </tr>)}
        </tbody>
      </table>
      <br />
      <h6>Striped Columns</h6>
      <table className="table table-striped-columns">
        <thead>
          <tr>
            {HEADER_ENTRIES.map(([key, value]) => <th key={key}>{value}</th>)}
          </tr>
        </thead>
        <tbody>
          {ROWS.map(row => <tr key={row.id}>
              {HEADER_ENTRIES.map(([key]) => <td key={\`\${row.id}-\${key}\`}>
                  {row[key as keyof typeof ROWS[0]]}
                </td>)}
            </tr>)}
        </tbody>
      </table>
    </DBox>
}`,...(L=(_=w.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var Q,q,F;k.parameters={...k.parameters,docs:{...(Q=k.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <DBox style={{
    width: '800px'
  }}>
      <h6>Hover Rows</h6>
      <table className="table table-hover">
        <thead>
          <tr>
            {HEADER_ENTRIES.map(([key, value]) => <th key={key}>{value}</th>)}
          </tr>
        </thead>
        <tbody>
          {ROWS.map(row => <tr key={row.id}>
              {HEADER_ENTRIES.map(([key]) => <td key={\`\${row.id}-\${key}\`}>
                  {row[key as keyof typeof ROWS[0]]}
                </td>)}
            </tr>)}
        </tbody>
      </table>
      <br />
      <h6>Striped + Hover</h6>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            {HEADER_ENTRIES.map(([key, value]) => <th key={key}>{value}</th>)}
          </tr>
        </thead>
        <tbody>
          {ROWS.map(row => <tr key={row.id}>
              {HEADER_ENTRIES.map(([key]) => <td key={\`\${row.id}-\${key}\`}>
                  {row[key as keyof typeof ROWS[0]]}
                </td>)}
            </tr>)}
        </tbody>
      </table>
    </DBox>
}`,...(F=(q=k.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var z,U,J;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <DBox style={{
    width: '800px'
  }}>
      <h6>Dark</h6>
      <table className="table table-dark">
        <thead>
          <tr>
            {HEADER_ENTRIES.map(([key, value]) => <th key={key}>{value}</th>)}
          </tr>
        </thead>
        <tbody>
          {ROWS.map(row => <tr key={row.id}>
              {HEADER_ENTRIES.map(([key]) => <td key={\`\${row.id}-\${key}\`}>
                  {row[key as keyof typeof ROWS[0]]}
                </td>)}
            </tr>)}
        </tbody>
      </table>
      <br />
      <h6>Dark Striped</h6>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            {HEADER_ENTRIES.map(([key, value]) => <th key={key}>{value}</th>)}
          </tr>
        </thead>
        <tbody>
          {ROWS.map(row => <tr key={row.id}>
              {HEADER_ENTRIES.map(([key]) => <td key={\`\${row.id}-\${key}\`}>
                  {row[key as keyof typeof ROWS[0]]}
                </td>)}
            </tr>)}
        </tbody>
      </table>
    </DBox>
}`,...(J=(U=v.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};var M,G,K;N.parameters={...N.parameters,docs:{...(M=N.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <DBox style={{
    width: '800px'
  }}>
      <h6>Bordered</h6>
      <table className="table table-bordered">
        <thead>
          <tr>
            {HEADER_ENTRIES.map(([key, value]) => <th key={key}>{value}</th>)}
          </tr>
        </thead>
        <tbody>
          {ROWS.map(row => <tr key={row.id}>
              {HEADER_ENTRIES.map(([key]) => <td key={\`\${row.id}-\${key}\`}>
                  {row[key as keyof typeof ROWS[0]]}
                </td>)}
            </tr>)}
        </tbody>
      </table>
      <br />
      <h6>Bordered Primary</h6>
      <table className="table table-bordered border-primary">
        <thead>
          <tr>
            {HEADER_ENTRIES.map(([key, value]) => <th key={key}>{value}</th>)}
          </tr>
        </thead>
        <tbody>
          {ROWS.map(row => <tr key={row.id}>
              {HEADER_ENTRIES.map(([key]) => <td key={\`\${row.id}-\${key}\`}>
                  {row[key as keyof typeof ROWS[0]]}
                </td>)}
            </tr>)}
        </tbody>
      </table>
    </DBox>
}`,...(K=(G=N.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var V,X,Y;E.parameters={...E.parameters,docs:{...(V=E.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <DBox style={{
    width: '800px'
  }}>
      <table className="table table-sm">
        <thead>
          <tr>
            {HEADER_ENTRIES.map(([key, value]) => <th key={key}>{value}</th>)}
          </tr>
        </thead>
        <tbody>
          {ROWS.map(row => <tr key={row.id}>
              {HEADER_ENTRIES.map(([key]) => <td key={\`\${row.id}-\${key}\`}>
                  {row[key as keyof typeof ROWS[0]]}
                </td>)}
            </tr>)}
        </tbody>
      </table>
    </DBox>
}`,...(Y=(X=E.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;R.parameters={...R.parameters,docs:{...(Z=R.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <DBox style={{
    width: '800px'
  }}>
      <table className="table">
        <thead>
          <tr>
            {HEADER_ENTRIES.map(([key, value]) => <th key={key}>{value}</th>)}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row, index) => <tr className={index === 1 ? 'table-active' : undefined} key={row.id}>
              {HEADER_ENTRIES.map(([key]) => <td key={\`\${row.id}-\${key}\`}>
                  {row[key as keyof typeof ROWS[0]]}
                </td>)}
            </tr>)}
        </tbody>
      </table>
    </DBox>
}`,...(te=(ee=R.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,re,de;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <DBox style={{
    width: '800px'
  }}>
      <table className="table">
        <thead>
          <tr>
            {HEADER_ENTRIES.map(([key, value]) => <th key={key}>{value}</th>)}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row, index) => {
          let colorClass = '';
          if (index === 0) colorClass = 'table-primary';
          if (index === 1) colorClass = 'table-secondary';
          if (index === 2) colorClass = 'table-success';
          return <tr className={colorClass} key={row.id}>
                {HEADER_ENTRIES.map(([key]) => <td key={\`\${row.id}-\${key}\`}>
                    {row[key as keyof typeof ROWS[0]]}
                  </td>)}
              </tr>;
        })}
        </tbody>
      </table>
    </DBox>
}`,...(de=(re=f.parameters)==null?void 0:re.docs)==null?void 0:de.source}}};var se,ne,le;D.parameters={...D.parameters,docs:{...(se=D.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <DBox style={{
    width: '800px'
  }}>
      <table className="table placeholder-wave">
        <caption>
          <div className="placeholder rounded-1 bg-gray-100 w-100" />
        </caption>
        <thead>
          <tr>
            {HEADER_ENTRIES.map(([key, value]) => <th key={key} style={{
            width: '25%'
          }}>{value}</th>)}
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
}`,...(le=(ne=D.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var oe,ie,ce;I.parameters={...I.parameters,docs:{...(oe=I.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <CompleteTableComponent />
}`,...(ce=(ie=I.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var he,pe,me;T.parameters={...T.parameters,docs:{...(he=T.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <CompositionComponent />,
  parameters: {
    docs: {
      source: {
        code: \`function CompositionTableLoading() {
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
  sort: string;
  setPage(page: number): void;
  setRows(rows: number): void;
  setSort(sort: string): void;
};

function CompositionTable(
  {
    page,
    rows,
    totalPages,
    sort,
    setPage,
    setRows,
    setSort,
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
                <td key={\\\`\\\${row.id}-\\\${key}\\\`}>
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
  const [sort, setSort] = useState(getQueryString('sort', { default: 'id', useSearch: false })!);
  const [queryString, setQueryString] = useState('');
  const totalPages = 5;

  useEffect(() => {
    setQueryString(changeQueryString(
      { page, rows, sort },
      { useSearch: false },
    ));
  }, [setQueryString, page, rows, sort]);

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
            sort={sort}
            setPage={setPage}
            setRows={setRows}
            setSort={setSort}
          />
        )}
      </DBox>
    </>
  );
}\`
      }
    }
  }
}`,...(me=(pe=T.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};const Qe=["BasicTable","Borderless","StripedTable","HoverTable","DarkTable","BorderedTable","SmallTable","ActiveTable","ColorTable","LoadingTable","CompleteTable","Composition"];export{R as ActiveTable,j as BasicTable,N as BorderedTable,S as Borderless,f as ColorTable,I as CompleteTable,T as Composition,v as DarkTable,k as HoverTable,D as LoadingTable,E as SmallTable,w as StripedTable,Qe as __namedExportsOrder,Le as default};
