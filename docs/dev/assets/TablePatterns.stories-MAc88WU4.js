import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-DLbf3qKv.js";import ue from"./Template-ucfRC9mt.js";import{D as i}from"./DBox-7Ka-bqdO.js";import{u as pe}from"./useItemSelection-RXiElWdI.js";import{D as u}from"./DInputCheck-DNjBkBBa.js";import{F as me}from"./DInput-ChARcPTF.js";import{D as ye}from"./DPaginator-DjXKHck1.js";import{D as be}from"./DBadge-Ca7qw8Xf.js";import"./index-Ccd_3YU0.js";import"./blocks-D_Rgh6MF.js";import"./index-BpFZy5MA.js";import"./index-wK-VFbMZ.js";import"./index-DsY-b2ur.js";import"./DIcon-Dz-46F40.js";import"./config-C3iYXcFk.js";import"./useMediaBreakpointUp-BOU17c78.js";import"./DContext-Dxx5fHg0.js";import"./useProvidedRefOrCreate-MctdTU5t.js";function I(a,t={useSearch:!0}){return new URLSearchParams(t.useSearch?window.location.search:"").get(a)||t.default}function ge(a,{useSearch:t=!0,pushState:n=!1}={}){const l=new URLSearchParams(t?window.location.search:"");if(Object.entries(a).forEach(([o,h])=>{if(!h){l.delete(o);return}l.set(o,String(h))}),n){const o=new URL(window.location.href);o.search=l.toString(),window.history.pushState(null,"",o.toString())}return l.toString()}const r=[["id","#"],["first","First"],["second","Second"],["last","Last"]],s=[{id:1,first:"Marl",second:"Otto",last:"@mdo"},{id:2,first:"Jacob",second:"Thornton",last:"@fat"},{id:3,first:"Larry the Bird",second:"-",last:"@twitter"}],Qe={title:"Patterns/Table Patterns",component:i,parameters:{docs:{page:ue,description:{component:"Examples of table patterns using Bootstrap table classes and Dynamic UI components."}}},tags:["autodocs"]},g={render:()=>e.jsx(i,{style:{width:"800px"},children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsx("tr",{children:r.map(([a,t])=>e.jsx("th",{children:t},a))})}),e.jsx("tbody",{children:s.map(a=>e.jsx("tr",{children:r.map(([t])=>e.jsx("td",{children:a[t]},`${a.id}-${t}`))},a.id))})]})})},x={render:()=>e.jsx(i,{style:{width:"800px"},children:e.jsxs("table",{className:"table table-borderless",children:[e.jsx("thead",{children:e.jsx("tr",{children:r.map(([a,t])=>e.jsx("th",{children:t},a))})}),e.jsx("tbody",{children:s.map(a=>e.jsx("tr",{children:r.map(([t])=>e.jsx("td",{children:a[t]},`${a.id}-${t}`))},a.id))})]})})},j={render:()=>e.jsxs(i,{style:{width:"800px"},children:[e.jsx("h6",{children:"Striped Rows"}),e.jsxs("table",{className:"table table-striped",children:[e.jsx("thead",{children:e.jsx("tr",{children:r.map(([a,t])=>e.jsx("th",{children:t},a))})}),e.jsx("tbody",{children:s.map(a=>e.jsx("tr",{children:r.map(([t])=>e.jsx("td",{children:a[t]},`${a.id}-${t}`))},a.id))})]}),e.jsx("br",{}),e.jsx("h6",{children:"Striped Columns"}),e.jsxs("table",{className:"table table-striped-columns",children:[e.jsx("thead",{children:e.jsx("tr",{children:r.map(([a,t])=>e.jsx("th",{children:t},a))})}),e.jsx("tbody",{children:s.map(a=>e.jsx("tr",{children:r.map(([t])=>e.jsx("td",{children:a[t]},`${a.id}-${t}`))},a.id))})]})]})},w={render:()=>e.jsxs(i,{style:{width:"800px"},children:[e.jsx("h6",{children:"Hover Rows"}),e.jsxs("table",{className:"table table-hover",children:[e.jsx("thead",{children:e.jsx("tr",{children:r.map(([a,t])=>e.jsx("th",{children:t},a))})}),e.jsx("tbody",{children:s.map(a=>e.jsx("tr",{children:r.map(([t])=>e.jsx("td",{children:a[t]},`${a.id}-${t}`))},a.id))})]}),e.jsx("br",{}),e.jsx("h6",{children:"Striped + Hover"}),e.jsxs("table",{className:"table table-striped table-hover",children:[e.jsx("thead",{children:e.jsx("tr",{children:r.map(([a,t])=>e.jsx("th",{children:t},a))})}),e.jsx("tbody",{children:s.map(a=>e.jsx("tr",{children:r.map(([t])=>e.jsx("td",{children:a[t]},`${a.id}-${t}`))},a.id))})]})]})},k={render:()=>e.jsxs(i,{style:{width:"800px"},children:[e.jsx("h6",{children:"Dark"}),e.jsxs("table",{className:"table table-dark",children:[e.jsx("thead",{children:e.jsx("tr",{children:r.map(([a,t])=>e.jsx("th",{children:t},a))})}),e.jsx("tbody",{children:s.map(a=>e.jsx("tr",{children:r.map(([t])=>e.jsx("td",{children:a[t]},`${a.id}-${t}`))},a.id))})]}),e.jsx("br",{}),e.jsx("h6",{children:"Dark Striped"}),e.jsxs("table",{className:"table table-dark table-striped",children:[e.jsx("thead",{children:e.jsx("tr",{children:r.map(([a,t])=>e.jsx("th",{children:t},a))})}),e.jsx("tbody",{children:s.map(a=>e.jsx("tr",{children:r.map(([t])=>e.jsx("td",{children:a[t]},`${a.id}-${t}`))},a.id))})]})]})},S={render:()=>e.jsxs(i,{style:{width:"800px"},children:[e.jsx("h6",{children:"Bordered"}),e.jsxs("table",{className:"table table-bordered",children:[e.jsx("thead",{children:e.jsx("tr",{children:r.map(([a,t])=>e.jsx("th",{children:t},a))})}),e.jsx("tbody",{children:s.map(a=>e.jsx("tr",{children:r.map(([t])=>e.jsx("td",{children:a[t]},`${a.id}-${t}`))},a.id))})]}),e.jsx("br",{}),e.jsx("h6",{children:"Bordered Primary"}),e.jsxs("table",{className:"table table-bordered border-primary",children:[e.jsx("thead",{children:e.jsx("tr",{children:r.map(([a,t])=>e.jsx("th",{children:t},a))})}),e.jsx("tbody",{children:s.map(a=>e.jsx("tr",{children:r.map(([t])=>e.jsx("td",{children:a[t]},`${a.id}-${t}`))},a.id))})]})]})},v={render:()=>e.jsx(i,{style:{width:"800px"},children:e.jsxs("table",{className:"table table-sm",children:[e.jsx("thead",{children:e.jsx("tr",{children:r.map(([a,t])=>e.jsx("th",{children:t},a))})}),e.jsx("tbody",{children:s.map(a=>e.jsx("tr",{children:r.map(([t])=>e.jsx("td",{children:a[t]},`${a.id}-${t}`))},a.id))})]})})},N={render:()=>e.jsx(i,{style:{width:"800px"},children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsx("tr",{children:r.map(([a,t])=>e.jsx("th",{children:t},a))})}),e.jsx("tbody",{children:s.map((a,t)=>e.jsx("tr",{className:t===1?"table-active":void 0,children:r.map(([n])=>e.jsx("td",{children:a[n]},`${a.id}-${n}`))},a.id))})]})})},E={render:()=>e.jsx(i,{style:{width:"800px"},children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsx("tr",{children:r.map(([a,t])=>e.jsx("th",{children:t},a))})}),e.jsx("tbody",{children:s.map((a,t)=>{let n="";return t===0&&(n="table-primary"),t===1&&(n="table-secondary"),t===2&&(n="table-success"),e.jsx("tr",{className:n,children:r.map(([l])=>e.jsx("td",{children:a[l]},`${a.id}-${l}`))},a.id)})})]})})},R={render:()=>e.jsx(i,{style:{width:"800px"},children:e.jsxs("table",{className:"table placeholder-wave",children:[e.jsx("caption",{children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("thead",{children:e.jsx("tr",{children:r.map(([a,t])=>e.jsx("th",{style:{width:"25%"},children:t},a))})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})})]}),e.jsxs("tr",{children:[e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})})]}),e.jsxs("tr",{children:[e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})})]})]})]})})};function xe(){const{isSelectedItem:a,toggleSelectedItem:t,selectedItems:n,setSelectedItems:l}=pe(),[o,h]=p.useState(1),[m,y]=p.useState(3);return e.jsxs(i,{style:{width:"800px"},children:[e.jsxs("table",{className:"table table-hover",children:[e.jsx("caption",{children:"List of users"}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(u,{type:"checkbox",checked:n.length===s.length,onChange:d=>{l(d.target.checked?s:[])}})}),r.map(([d,c])=>e.jsx("th",{style:{width:"25%"},children:c},d))]})}),e.jsx("tbody",{children:s.map(d=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(u,{type:"checkbox",onChange:()=>t(d),checked:a(d)})}),r.map(([c])=>e.jsx("td",{children:d[c]},`${d.id}-${c}`))]},d.id))})]}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-2",children:[e.jsx("small",{children:"Per Page "}),e.jsx(me,{className:"d-inline-block",style:{width:"36px"},size:"sm",type:"number",value:m.toString(),onChange:d=>y(parseInt(d,10))})]}),e.jsx("div",{className:"col-8",children:e.jsx(ye,{current:o,onPageChange:h,total:5})})]})]})}const f={render:()=>e.jsx(xe,{})};function je(){return e.jsxs("table",{className:"table placeholder-wave",children:[e.jsx("caption",{children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("thead",{children:e.jsx("tr",{children:r.map(([a,t])=>e.jsx("th",{style:{width:"25%"},children:t},a))})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})})]}),e.jsxs("tr",{children:[e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})})]}),e.jsxs("tr",{children:[e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})})]})]})]})}function we({page:a,rows:t,totalPages:n,setPage:l,setRows:o}){const{isSelectedItem:h,toggleSelectedItem:m,selectedItems:y,setSelectedItems:b}=pe();return e.jsxs(e.Fragment,{children:[e.jsxs("table",{className:"table table-hover",children:[e.jsx("caption",{children:"List of users"}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(u,{type:"checkbox",checked:y.length===s.length,onChange:d=>{b(d.target.checked?s:[])}})}),r.map(([d,c])=>e.jsx("th",{style:{width:"25%"},children:c},d))]})}),e.jsx("tbody",{children:s.map(d=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(u,{type:"checkbox",onChange:()=>m(d),checked:h(d)})}),r.map(([c])=>e.jsx("td",{children:d[c]},`${d.id}-${c}`))]},d.id))})]}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-2",children:[e.jsx("small",{children:"Per Page "}),e.jsx(me,{className:"d-inline-block",style:{width:"36px"},size:"sm",type:"number",value:t.toString(),onChange:d=>o(parseInt(d,10))})]}),e.jsx("div",{className:"col-8",children:e.jsx(ye,{current:a,onPageChange:l,total:n})})]})]})}function ke(){const[a,t]=p.useState(!1),[n,l]=p.useState(Number(I("page",{default:"1",useSearch:!1}))),[o,h]=p.useState(Number(I("rows",{default:"3",useSearch:!1}))),[m,y]=p.useState(""),b=5;return p.useEffect(()=>{y(ge({page:n,rows:o},{useSearch:!1}))},[y,n,o]),e.jsxs(e.Fragment,{children:["Query String = ",m&&e.jsx(be,{text:m,color:"primary"}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(i,{style:{width:"800px"},children:[e.jsx(u,{type:"checkbox",label:"Loading",checked:a,onChange:d=>t(d.target.checked)}),a?e.jsx(je,{}):e.jsx(we,{page:n,rows:o,totalPages:b,setPage:l,setRows:h})]})]})}const D={render:()=>e.jsx(ke,{}),parameters:{docs:{source:{code:`function CompositionTableLoading() {
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
}`}}}};var T,C,$;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...($=(C=g.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var P,B,H;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(H=(B=x.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var O,W,A;j.parameters={...j.parameters,docs:{...(O=j.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(A=(W=j.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var _,L,Q;w.parameters={...w.parameters,docs:{...(_=w.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(Q=(L=w.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};var q,F,z;k.parameters={...k.parameters,docs:{...(q=k.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(z=(F=k.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var U,M,J;S.parameters={...S.parameters,docs:{...(U=S.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(J=(M=S.parameters)==null?void 0:M.docs)==null?void 0:J.source}}};var X,G,K;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(K=(G=v.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var V,Y,Z;N.parameters={...N.parameters,docs:{...(V=N.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(Z=(Y=N.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,te;E.parameters={...E.parameters,docs:{...(ee=E.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(ae=E.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var re,de,se;R.parameters={...R.parameters,docs:{...(re=R.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(se=(de=R.parameters)==null?void 0:de.docs)==null?void 0:se.source}}};var ne,le,oe;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <CompleteTableComponent />
}`,...(oe=(le=f.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var ie,ce,he;D.parameters={...D.parameters,docs:{...(ie=D.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}\`
      }
    }
  }
}`,...(he=(ce=D.parameters)==null?void 0:ce.docs)==null?void 0:he.source}}};const qe=["BasicTable","Borderless","StripedTable","HoverTable","DarkTable","BorderedTable","SmallTable","ActiveTable","ColorTable","LoadingTable","CompleteTable","Composition"];export{N as ActiveTable,g as BasicTable,S as BorderedTable,x as Borderless,E as ColorTable,f as CompleteTable,D as Composition,k as DarkTable,w as HoverTable,R as LoadingTable,v as SmallTable,j as StripedTable,qe as __namedExportsOrder,Qe as default};
