import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./iframe-DkjceUUU.js";import{M as Ve}from"./Template-D3iTeei6.js";import{D as b}from"./DBox-DyjlUDDM.js";import{u as W}from"./useItemSelection-CYftDNG3.js";import{D as x}from"./DInputCheck-q2Je69Hw.js";import{F as w}from"./DInput-BcmlNBIB.js";import{D as He}from"./DPaginator-C3j6rpE-.js";import{D as H}from"./DBadge-C8EgVhNQ.js";import{D as _}from"./DIcon-CBkIH7ym.js";import{D as Ye,a as _e}from"./DContext-BbaizxMa.js";import{D as f}from"./DOffcanvas-B2tlYFUX.js";import{D as M}from"./DChip-D9jvKWd5.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CYNyJDzm.js";import"./blocks-B0SbRRHM.js";import"./index-p6Xuepxi.js";import"./index-DxZ9-uFP.js";import"./index-CtlKHQhD.js";import"./useProvidedRefOrCreate-S-lUNZjQ.js";import"./config-C3iYXcFk.js";import"./useMediaBreakpointUp-C9viAbpR.js";function z(t,a={useSearch:!0}){return new URLSearchParams(a.useSearch?window.location.search:"").get(t)||a.default}function Xe(t,{useSearch:a=!0,pushState:n=!1}={}){const i=new URLSearchParams(a?window.location.search:"");if(Object.entries(t).forEach(([o,c])=>{if(!c){i.delete(o);return}i.set(o,String(c))}),n){const o=new URL(window.location.href);o.search=i.toString(),window.history.pushState(null,"",o.toString())}return i.toString()}function Je(){return e.jsx("style",{children:`
        .sbdocs.sbdocs-content {
          max-width: min(1800px, calc(100vw - 2rem)) !important;
        }
          .docs-story {
          background: var(--bs-gray-25) !important;
          }
      `})}const d=[["id","#"],["first","First"],["second","Second"],["last","Last"]],y=[{id:1,first:"Marl",second:"Otto",last:"@mdo"},{id:2,first:"Jacob",second:"Thornton",last:"@fat"},{id:3,first:"Larry the Bird",second:"-",last:"@twitter"}],It={title:"Patterns/Table",component:b,parameters:{docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(Je,{}),e.jsx(Ve,{})]}),description:{component:"Examples of table patterns using Bootstrap table classes and Dynamic UI components."}}},tags:["autodocs"]},j={render:()=>e.jsx(b,{style:{width:"1100px"},children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsx("tr",{children:d.map(([t,a])=>e.jsx("th",{children:a},t))})}),e.jsx("tbody",{children:y.map(t=>e.jsx("tr",{children:d.map(([a])=>e.jsx("td",{children:t[a]},`${t.id}-${a}`))},t.id))})]})})},N={render:()=>e.jsx(b,{style:{width:"1100px"},children:e.jsxs("table",{className:"table table-borderless",children:[e.jsx("thead",{children:e.jsx("tr",{children:d.map(([t,a])=>e.jsx("th",{children:a},t))})}),e.jsx("tbody",{children:y.map(t=>e.jsx("tr",{children:d.map(([a])=>e.jsx("td",{children:t[a]},`${t.id}-${a}`))},t.id))})]})})},k={render:()=>e.jsxs(b,{style:{width:"1100px"},children:[e.jsx("h6",{children:"Striped Rows"}),e.jsxs("table",{className:"table table-striped",children:[e.jsx("thead",{children:e.jsx("tr",{children:d.map(([t,a])=>e.jsx("th",{children:a},t))})}),e.jsx("tbody",{children:y.map(t=>e.jsx("tr",{children:d.map(([a])=>e.jsx("td",{children:t[a]},`${t.id}-${a}`))},t.id))})]}),e.jsx("br",{}),e.jsx("h6",{children:"Striped Columns"}),e.jsxs("table",{className:"table table-striped-columns",children:[e.jsx("thead",{children:e.jsx("tr",{children:d.map(([t,a])=>e.jsx("th",{children:a},t))})}),e.jsx("tbody",{children:y.map(t=>e.jsx("tr",{children:d.map(([a])=>e.jsx("td",{children:t[a]},`${t.id}-${a}`))},t.id))})]})]})},D={render:()=>e.jsxs(b,{style:{width:"1100px"},children:[e.jsx("h6",{children:"Hover Rows"}),e.jsxs("table",{className:"table table-hover",children:[e.jsx("thead",{children:e.jsx("tr",{children:d.map(([t,a])=>e.jsx("th",{children:a},t))})}),e.jsx("tbody",{children:y.map(t=>e.jsx("tr",{children:d.map(([a])=>e.jsx("td",{children:t[a]},`${t.id}-${a}`))},t.id))})]}),e.jsx("br",{}),e.jsx("h6",{children:"Striped + Hover"}),e.jsxs("table",{className:"table table-striped table-hover",children:[e.jsx("thead",{children:e.jsx("tr",{children:d.map(([t,a])=>e.jsx("th",{children:a},t))})}),e.jsx("tbody",{children:y.map(t=>e.jsx("tr",{children:d.map(([a])=>e.jsx("td",{children:t[a]},`${t.id}-${a}`))},t.id))})]})]})},C={render:()=>e.jsxs(b,{style:{width:"1100px"},children:[e.jsx("h6",{children:"Dark"}),e.jsxs("table",{className:"table table-dark",children:[e.jsx("thead",{children:e.jsx("tr",{children:d.map(([t,a])=>e.jsx("th",{children:a},t))})}),e.jsx("tbody",{children:y.map(t=>e.jsx("tr",{children:d.map(([a])=>e.jsx("td",{children:t[a]},`${t.id}-${a}`))},t.id))})]}),e.jsx("br",{}),e.jsx("h6",{children:"Dark Striped"}),e.jsxs("table",{className:"table table-dark table-striped",children:[e.jsx("thead",{children:e.jsx("tr",{children:d.map(([t,a])=>e.jsx("th",{children:a},t))})}),e.jsx("tbody",{children:y.map(t=>e.jsx("tr",{children:d.map(([a])=>e.jsx("td",{children:t[a]},`${t.id}-${a}`))},t.id))})]})]})},A={render:()=>e.jsxs(b,{style:{width:"1100px"},children:[e.jsx("h6",{children:"Bordered"}),e.jsxs("table",{className:"table table-bordered",children:[e.jsx("thead",{children:e.jsx("tr",{children:d.map(([t,a])=>e.jsx("th",{children:a},t))})}),e.jsx("tbody",{children:y.map(t=>e.jsx("tr",{children:d.map(([a])=>e.jsx("td",{children:t[a]},`${t.id}-${a}`))},t.id))})]}),e.jsx("br",{}),e.jsx("h6",{children:"Bordered Primary"}),e.jsxs("table",{className:"table table-bordered border-primary",children:[e.jsx("thead",{children:e.jsx("tr",{children:d.map(([t,a])=>e.jsx("th",{children:a},t))})}),e.jsx("tbody",{children:y.map(t=>e.jsx("tr",{children:d.map(([a])=>e.jsx("td",{children:t[a]},`${t.id}-${a}`))},t.id))})]})]})},F={render:()=>e.jsx(b,{style:{width:"1100px"},children:e.jsxs("table",{className:"table table-sm",children:[e.jsx("thead",{children:e.jsx("tr",{children:d.map(([t,a])=>e.jsx("th",{children:a},t))})}),e.jsx("tbody",{children:y.map(t=>e.jsx("tr",{children:d.map(([a])=>e.jsx("td",{children:t[a]},`${t.id}-${a}`))},t.id))})]})})},P={render:()=>e.jsx(b,{style:{width:"1100px"},children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsx("tr",{children:d.map(([t,a])=>e.jsx("th",{children:a},t))})}),e.jsx("tbody",{children:y.map((t,a)=>e.jsx("tr",{className:a===1?"table-active":void 0,children:d.map(([n])=>e.jsx("td",{children:t[n]},`${t.id}-${n}`))},t.id))})]})})},I={render:()=>e.jsx(b,{style:{width:"1100px"},children:e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsx("tr",{children:d.map(([t,a])=>e.jsx("th",{children:a},t))})}),e.jsx("tbody",{children:y.map((t,a)=>{let n="";return a===0&&(n="table-primary"),a===1&&(n="table-secondary"),a===2&&(n="table-success"),e.jsx("tr",{className:n,children:d.map(([i])=>e.jsx("td",{children:t[i]},`${t.id}-${i}`))},t.id)})})]})})},E={render:()=>e.jsx(b,{style:{width:"1100px"},children:e.jsxs("table",{className:"table placeholder-wave",children:[e.jsx("caption",{children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("thead",{children:e.jsx("tr",{children:d.map(([t,a])=>e.jsx("th",{style:{width:"25%"},children:a},t))})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})})]}),e.jsxs("tr",{children:[e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})})]}),e.jsxs("tr",{children:[e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})})]})]})]})})};function Ze(){const{isSelectedItem:t,toggleSelectedItem:a,selectedItems:n,setSelectedItems:i}=W(),[o,c]=h.useState(1),[m,l]=h.useState(3);return e.jsxs(b,{style:{width:"1100px"},children:[e.jsxs("table",{className:"table table-hover",children:[e.jsx("caption",{children:"List of users"}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(x,{type:"checkbox",checked:n.length===y.length,onChange:r=>{i(r.target.checked?y:[])}})}),d.map(([r,u])=>e.jsx("th",{style:{width:"25%"},children:u},r))]})}),e.jsx("tbody",{children:y.map(r=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(x,{type:"checkbox",onChange:()=>a(r),checked:t(r)})}),d.map(([u])=>e.jsx("td",{children:r[u]},`${r.id}-${u}`))]},r.id))})]}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-2",children:[e.jsx("small",{children:"Per Page "}),e.jsx(w,{className:"d-inline-block",style:{width:"36px"},size:"sm",type:"number",value:m.toString(),onChange:r=>l(parseInt(r,10))})]}),e.jsx("div",{className:"col-8",children:e.jsx(He,{current:o,onPageChange:c,total:5})})]})]})}const T={render:()=>e.jsx(Ze,{}),parameters:{docs:{source:{code:`function CompleteTableExample() {
  const {
    isSelectedItem,
    toggleSelectedItem,
    selectedItems,
    setSelectedItems,
  } = useItemSelection();

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
                ariaLabel="Select all rows"
                checked={ROWS.length > 0 && selectedItems.length === ROWS.length}
                indeterminate={selectedItems.length > 0 && selectedItems.length < ROWS.length}
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
                  {row[key]}
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
}`}}}};function Ge(){return e.jsxs("table",{className:"table placeholder-wave",children:[e.jsx("caption",{children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("thead",{children:e.jsx("tr",{children:d.map(([t,a])=>e.jsx("th",{style:{width:"25%"},children:a},t))})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})})]}),e.jsxs("tr",{children:[e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})})]}),e.jsxs("tr",{children:[e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})}),e.jsx("td",{"aria-hidden":"true",children:e.jsx("div",{className:"placeholder rounded-1 bg-gray-100 w-100"})})]})]})]})}function Ke({page:t,rows:a,totalPages:n,setPage:i,setRows:o}){const{isSelectedItem:c,toggleSelectedItem:m,selectedItems:l,setSelectedItems:s}=W();return e.jsxs(e.Fragment,{children:[e.jsxs("table",{className:"table table-hover",children:[e.jsx("caption",{children:"List of users"}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(x,{type:"checkbox",checked:l.length===y.length,onChange:r=>{s(r.target.checked?y:[])}})}),d.map(([r,u])=>e.jsx("th",{style:{width:"25%"},children:u},r))]})}),e.jsx("tbody",{children:y.map(r=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(x,{type:"checkbox",onChange:()=>m(r),checked:c(r)})}),d.map(([u])=>e.jsx("td",{children:r[u]},`${r.id}-${u}`))]},r.id))})]}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-2",children:[e.jsx("small",{children:"Per Page "}),e.jsx(w,{className:"d-inline-block",style:{width:"36px"},size:"sm",type:"number",value:a.toString(),onChange:r=>o(parseInt(r,10))})]}),e.jsx("div",{className:"col-8",children:e.jsx(He,{current:t,onPageChange:i,total:n})})]})]})}function et(){const[t,a]=h.useState(!1),[n,i]=h.useState(Number(z("page",{default:"1",useSearch:!1}))),[o,c]=h.useState(Number(z("rows",{default:"3",useSearch:!1}))),[m,l]=h.useState(""),s=5;return h.useEffect(()=>{l(Xe({page:n,rows:o},{useSearch:!1}))},[l,n,o]),e.jsxs(e.Fragment,{children:["Query String = ",m&&e.jsx(H,{soft:!0,size:"sm",text:m,color:"primary"}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(b,{style:{width:"1100px"},children:[e.jsx(x,{type:"checkbox",label:"Loading",checked:t,onChange:r=>a(r.target.checked)}),t?e.jsx(Ge,{}):e.jsx(Ke,{page:n,rows:o,totalPages:s,setPage:i,setRows:c})]})]})}const R={render:()=>e.jsx(et,{}),parameters:{docs:{source:{code:`function CompositionTableLoading() {
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
}`}}}},Me=[{id:"TX-10491",date:"2026-06-08",reference:"Payroll Batch - ACME",account:"Main Operating",category:"Payroll",type:"Debit",status:"Posted",amount:-42500.9},{id:"TX-10492",date:"2026-06-08",reference:"Card Settlement",account:"Merchant Clearing",category:"Card Processing",type:"Credit",status:"Posted",amount:19880.22},{id:"TX-10493",date:"2026-06-09",reference:"Wire Out - Supplier",account:"Main Operating",category:"Vendor Payment",type:"Debit",status:"Pending",amount:-7420},{id:"TX-10494",date:"2026-06-09",reference:"ACH Return",account:"Collections",category:"Chargeback",type:"Debit",status:"Flagged",amount:-1280.35},{id:"TX-10495",date:"2026-06-10",reference:"Treasury Sweep",account:"Liquidity Reserve",category:"Treasury",type:"Credit",status:"Posted",amount:65500},{id:"TX-10496",date:"2026-06-10",reference:"Manual Adjustment",account:"Main Operating",category:"Adjustment",type:"Debit",status:"Pending",amount:-560}],tt=[{id:"LN-8801",borrower:"A. Ibarra",product:"Personal Loan",disbursed:12e3,paidInstallments:8,totalInstallments:12,daysPastDue:0},{id:"LN-8802",borrower:"Norte Retail SA",product:"Working Capital",disbursed:95e3,paidInstallments:4,totalInstallments:18,daysPastDue:12},{id:"LN-8803",borrower:"M. Zuniga",product:"Auto Loan",disbursed:24500,paidInstallments:2,totalInstallments:24,daysPastDue:47},{id:"LN-8804",borrower:"Pacifica Foods",product:"Invoice Financing",disbursed:6e4,paidInstallments:9,totalInstallments:12,daysPastDue:0}],S=[{id:"AP-301",beneficiary:"Riverside Logistics",account:"Operating - 0012",amount:14800,dueDate:"2026-06-12"},{id:"AP-302",beneficiary:"Cloud Ops Inc.",account:"Technology - 9981",amount:2350.75,dueDate:"2026-06-13"},{id:"AP-303",beneficiary:"Servicios Aurora",account:"Operations - 7810",amount:4210,dueDate:"2026-06-13"},{id:"AP-304",beneficiary:"Northwind Holdings",account:"Treasury - 1300",amount:90640,dueDate:"2026-06-15"}],v=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2,maximumFractionDigits:2});function We(t){return t==="Posted"?"success":t==="Pending"?"warning":"danger"}function at(t){return t>=30?{text:"High",color:"danger"}:t>0?{text:"Medium",color:"warning"}:{text:"Low",color:"success"}}function st(){const[t,a]=h.useState(""),[n,i]=h.useState("all"),[o,c]=h.useState("all"),m=t.trim().toLowerCase(),l=Me.filter(s=>{const r=m.length===0||s.id.toLowerCase().includes(m)||s.reference.toLowerCase().includes(m)||s.account.toLowerCase().includes(m),u=n==="all"||s.type===n,g=o==="all"||s.status===o;return r&&u&&g});return e.jsxs(b,{style:{width:"100%"},children:[e.jsxs("div",{className:"d-flex flex-wrap gap-3 align-items-end mb-3",children:[e.jsxs("div",{style:{minWidth:"320px",flex:1},children:[e.jsx("small",{className:"d-block text-secondary mb-1",children:"Search transaction"}),e.jsx(w,{type:"text",value:t,placeholder:"Search by id, account, or reference","aria-label":"Search transaction",onChange:a})]}),e.jsxs("div",{children:[e.jsx("small",{className:"d-block text-secondary mb-1",children:"Type"}),e.jsxs("select",{"aria-label":"Filter by type",className:"form-select",value:n,onChange:s=>i(s.target.value),children:[e.jsx("option",{value:"all",children:"All"}),e.jsx("option",{value:"Credit",children:"Credit"}),e.jsx("option",{value:"Debit",children:"Debit"})]})]}),e.jsxs("div",{children:[e.jsx("small",{className:"d-block text-secondary mb-1",children:"Status"}),e.jsxs("select",{"aria-label":"Filter by status",className:"form-select",value:o,onChange:s=>c(s.target.value),children:[e.jsx("option",{value:"all",children:"All"}),e.jsx("option",{value:"Posted",children:"Posted"}),e.jsx("option",{value:"Pending",children:"Pending"}),e.jsx("option",{value:"Flagged",children:"Flagged"})]})]})]}),e.jsxs("table",{className:"table table-hover align-middle",children:[e.jsx("caption",{children:"Transaction History"}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Transaction"}),e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Account"}),e.jsx("th",{children:"Category"}),e.jsx("th",{children:"Status"}),e.jsx("th",{className:"text-end",children:"Amount"})]})}),e.jsxs("tbody",{children:[l.map(s=>e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("div",{className:"fw-semibold",children:s.id}),e.jsx("small",{className:"text-secondary",children:s.reference})]}),e.jsx("td",{children:s.date}),e.jsx("td",{children:s.account}),e.jsx("td",{children:s.category}),e.jsx("td",{children:e.jsx(H,{soft:!0,size:"sm",text:s.status,color:We(s.status)})}),e.jsx("td",{className:`text-end fw-semibold ${s.amount>=0?"text-success":"text-danger"}`,children:v.format(s.amount)})]},s.id)),l.length===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:6,className:"text-center text-secondary py-4",children:"No transactions match your current filters."})})]})]})]})}const O={render:()=>e.jsx(st,{}),parameters:{layout:"fullscreen",docs:{source:{code:`function TransactionHistoryExample() {
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const query = search.trim().toLowerCase();
  const rows = FINANCE_TRANSACTIONS.filter((row) => {
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
}`}}}};function rt({name:t,payload:a}){const{closePortal:n}=_e(),[i,o]=h.useState(a.values.typeFilter),[c,m]=h.useState(a.values.statusFilter),[l,s]=h.useState(a.values.minAmountFilter);return h.useEffect(()=>{o(a.values.typeFilter),m(a.values.statusFilter),s(a.values.minAmountFilter)},[a.values.minAmountFilter,a.values.statusFilter,a.values.typeFilter]),e.jsxs(f,{name:t,staticBackdrop:!1,scrollable:!0,openFrom:"end",children:[e.jsx(f.Header,{onClose:n,showCloseButton:!0,children:e.jsx("h6",{className:"mb-0",id:`${t}Label`,children:"Advanced Filters"})}),e.jsxs(f.Body,{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("small",{className:"d-block text-secondary mb-1",children:"Type"}),e.jsxs("select",{"aria-label":"Filter by type",className:"form-select",value:i,onChange:r=>o(r.target.value),children:[e.jsx("option",{value:"all",children:"All"}),e.jsx("option",{value:"Credit",children:"Credit"}),e.jsx("option",{value:"Debit",children:"Debit"})]})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("small",{className:"d-block text-secondary mb-1",children:"Status"}),e.jsxs("select",{"aria-label":"Filter by status",className:"form-select",value:c,onChange:r=>m(r.target.value),children:[e.jsx("option",{value:"all",children:"All"}),e.jsx("option",{value:"Posted",children:"Posted"}),e.jsx("option",{value:"Pending",children:"Pending"}),e.jsx("option",{value:"Flagged",children:"Flagged"})]})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("small",{className:"d-block text-secondary mb-1",children:"Minimum absolute amount"}),e.jsx(w,{type:"number",min:0,value:l,"aria-label":"Minimum absolute amount",onChange:s})]})]}),e.jsxs(f.Footer,{children:[e.jsx("button",{type:"button",className:"btn btn-primary",onClick:()=>{a.onApply({typeFilter:i,statusFilter:c,minAmountFilter:l}),n()},children:"Apply"}),e.jsx("button",{type:"button",className:"btn btn-outline-secondary",onClick:()=>{a.onClear(),n()},children:"Clear Filters"})]})]})}function nt(){const[t,a]=h.useState(""),[n,i]=h.useState("all"),[o,c]=h.useState("all"),[m,l]=h.useState("0"),{openPortal:s}=_e(),r={typeFilter:n,statusFilter:o,minAmountFilter:m},u=Math.max(0,Number(m)||0),g=t.trim().toLowerCase(),q=Me.filter(p=>{const qe=g.length===0||p.id.toLowerCase().includes(g)||p.reference.toLowerCase().includes(g)||p.account.toLowerCase().includes(g),ze=n==="all"||p.type===n,Ue=o==="all"||p.status===o,Qe=Math.abs(p.amount)>=u;return qe&&ze&&Ue&&Qe});return e.jsxs(b,{style:{width:"100%",position:"relative"},children:[e.jsxs("div",{className:"d-flex gap-2 align-items-end mb-3 flex-wrap",children:[e.jsx("div",{style:{minWidth:"320px",flex:1},children:e.jsx(w,{type:"text",value:t,placeholder:"Search by id, account, or reference","aria-label":"Search transaction",onChange:a})}),e.jsx("button",{type:"button",className:"btn btn-outline-primary",onClick:()=>s("filters",{values:r,onApply:p=>{i(p.typeFilter),c(p.statusFilter),l(p.minAmountFilter)},onClear:()=>{i("all"),c("all"),l("0")}}),children:"Advanced Filters"})]}),(n!=="all"||o!=="all"||u>0)&&e.jsxs("div",{className:"d-flex gap-2 flex-wrap mb-3",children:[n!=="all"&&e.jsx(M,{text:`Type: ${n}`,color:"primary",showClose:!0,onClose:()=>i("all")}),o!=="all"&&e.jsx(M,{text:`Status: ${o}`,color:"warning",showClose:!0,onClose:()=>c("all")}),u>0&&e.jsx(M,{text:`Min Amount: ${v.format(u)}`,color:"secondary",showClose:!0,onClose:()=>l("0")})]}),e.jsxs("table",{className:"table table-striped table-hover align-middle",children:[e.jsx("caption",{children:"Transaction Screening"}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Transaction"}),e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Account"}),e.jsx("th",{children:"Status"}),e.jsx("th",{className:"text-end",children:"Amount"})]})}),e.jsxs("tbody",{children:[q.map(p=>e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("div",{className:"fw-semibold",children:p.id}),e.jsx("small",{className:"text-secondary",children:p.reference})]}),e.jsx("td",{children:p.date}),e.jsx("td",{children:p.account}),e.jsx("td",{children:e.jsx(H,{soft:!0,size:"sm",text:p.status,color:We(p.status)})}),e.jsx("td",{className:`text-end fw-semibold ${p.amount>=0?"text-success":"text-danger"}`,children:v.format(p.amount)})]},p.id)),q.length===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:5,className:"text-center text-secondary py-4",children:"No transactions match your current filters."})})]})]})]})}function lt(){return e.jsx(Ye,{portalName:"tablePatternsTransactionFiltersPortal",availablePortals:{filters:rt},children:e.jsx(nt,{})})}const B={render:()=>e.jsx(lt,{}),parameters:{layout:"fullscreen",docs:{description:{story:"Uses `DContextProvider` + `openPortal` + `DOffcanvas` to open a responsive advanced-filters panel with apply/clear actions."},source:{code:`function TransactionScreeningFiltersOffcanvas({ name, payload }) {
  const { closePortal } = useDPortalContext();
  const [typeFilter, setTypeFilter] = useState(payload.values.typeFilter);
  const [statusFilter, setStatusFilter] = useState(payload.values.statusFilter);
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
        <h6 className="mb-0" id={\`\${name}Label\`}>
          Advanced Filters
        </h6>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <div className="mb-3">
          <small className="d-block text-secondary mb-1">Type</small>
          <select
            aria-label="Filter by type"
            className="form-select"
            value={typeFilter}
            onChange={(event) => setTypeFilter(event.target.value)}
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
            onChange={(event) => setStatusFilter(event.target.value)}
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
            payload.onApply({ typeFilter, statusFilter, minAmountFilter });
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
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [minAmountFilter, setMinAmountFilter] = useState('0');
  const { openPortal } = useDPortalContext();

  const currentFilters = { typeFilter, statusFilter, minAmountFilter };
  const minAmount = Math.max(0, Number(minAmountFilter) || 0);
  const query = search.trim().toLowerCase();

  const rows = FINANCE_TRANSACTIONS.filter((row) => {
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
          {typeFilter !== 'all' && <DChip text={\`Type: \${typeFilter}\`} color="primary" showClose onClose={() => setTypeFilter('all')} />}
          {statusFilter !== 'all' && <DChip text={\`Status: \${statusFilter}\`} color="warning" showClose onClose={() => setStatusFilter('all')} />}
          {minAmount > 0 && <DChip text={\`Min Amount: \${USD.format(minAmount)}\`} color="secondary" showClose onClose={() => setMinAmountFilter('0')} />}
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
              <td className={\`text-end fw-semibold \${row.amount >= 0 ? 'text-success' : 'text-danger'}\`}>
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

export function TransactionHistoryOffcanvasExample() {
  return (
    <DContextProvider
      portalName="tablePatternsTransactionFiltersPortal"
      availablePortals={{ filters: TransactionScreeningFiltersOffcanvas }}
    >
      <FinancialTransactionOffcanvasContent />
    </DContextProvider>
  );
}`}}}};function ot(){const[t,a]=h.useState("daysPastDue"),[n,i]=h.useState("desc"),o=s=>t!==s?e.jsx(_,{icon:"ArrowUpDown",size:"0.9rem",className:"text-gray-300"}):n==="asc"?e.jsx(_,{icon:"ArrowUp",size:"0.9rem",className:"text-primary"}):e.jsx(_,{icon:"ArrowDown",size:"0.9rem",className:"text-primary"}),c=[...tt].sort((s,r)=>{let u=0;return t==="borrower"&&(u=s.borrower.localeCompare(r.borrower)),t==="disbursed"&&(u=s.disbursed-r.disbursed),t==="daysPastDue"&&(u=s.daysPastDue-r.daysPastDue),n==="asc"?u:-u}),m=s=>{if(t===s){i(r=>r==="asc"?"desc":"asc");return}a(s),i("desc")},l=s=>t!==s?"none":n==="asc"?"ascending":"descending";return e.jsxs(b,{style:{width:"100%"},children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-2",children:[e.jsx("h6",{className:"mb-0",children:"Loan Portfolio"}),e.jsx("small",{className:"text-secondary",children:"Click sortable columns to reorder"})]}),e.jsxs("table",{className:"table table-hover align-middle",children:[e.jsx("caption",{children:"Credit Risk Monitoring"}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{"aria-sort":l("borrower"),children:e.jsxs("button",{type:"button",className:"btn btn-link p-0 text-decoration-none d-inline-flex align-items-center gap-1",onClick:()=>m("borrower"),children:["Borrower",o("borrower")]})}),e.jsx("th",{children:"Product"}),e.jsx("th",{"aria-sort":l("disbursed"),children:e.jsxs("button",{type:"button",className:"btn btn-link p-0 text-decoration-none d-inline-flex align-items-center gap-1",onClick:()=>m("disbursed"),children:["Disbursed",o("disbursed")]})}),e.jsx("th",{children:"Installments"}),e.jsx("th",{"aria-sort":l("daysPastDue"),children:e.jsxs("button",{type:"button",className:"btn btn-link p-0 text-decoration-none d-inline-flex align-items-center gap-1",onClick:()=>m("daysPastDue"),children:["Days Past Due",o("daysPastDue")]})}),e.jsx("th",{children:"Risk"})]})}),e.jsx("tbody",{children:c.map(s=>{const r=at(s.daysPastDue);return e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("div",{className:"fw-semibold",children:s.borrower}),e.jsx("small",{className:"text-secondary",children:s.id})]}),e.jsx("td",{children:s.product}),e.jsx("td",{className:"fw-semibold",children:v.format(s.disbursed)}),e.jsxs("td",{children:[s.paidInstallments,"/",s.totalInstallments]}),e.jsx("td",{children:s.daysPastDue===0?e.jsx("span",{className:"text-success",children:"Current"}):e.jsxs("span",{className:"text-danger fw-semibold",children:[s.daysPastDue," ","days"]})}),e.jsx("td",{children:e.jsx(H,{soft:!0,size:"sm",text:r.text,color:r.color})})]},s.id)})})]})]})}const L={render:()=>e.jsx(ot,{}),parameters:{layout:"fullscreen",docs:{source:{code:`function LoanPortfolioExample() {
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
}`}}}};function dt(){const{selectedItems:t,setSelectedItems:a,toggleSelectedItem:n,isSelectedItem:i}=W(),[o,c]=h.useState(""),m=t.reduce((l,s)=>l+s.amount,0);return e.jsxs(b,{style:{width:"100%"},children:[t.length>0&&e.jsxs("div",{className:"alert alert-primary d-flex justify-content-between align-items-center mb-3",children:[e.jsxs("span",{children:[e.jsx("strong",{children:t.length})," ","selected"," ",e.jsxs("span",{className:"text-secondary",children:["(Total:"," ",v.format(m),")"]})]}),e.jsxs("div",{className:"d-flex gap-2",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-success",onClick:()=>c(`Approved ${t.length} payments`),children:"Approve"}),e.jsx("button",{type:"button",className:"btn btn-sm btn-warning",onClick:()=>c(`Sent ${t.length} payments to review`),children:"Send to Review"}),e.jsx("button",{type:"button",className:"btn btn-sm btn-outline-secondary",onClick:()=>c(`Exported ${t.length} payments`),children:"Export CSV"})]})]}),o&&e.jsx("p",{className:"small text-muted",children:o}),e.jsxs("table",{className:"table table-hover align-middle",children:[e.jsx("caption",{children:"Payment Approval Queue"}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(x,{type:"checkbox",ariaLabel:"Select all payments",checked:S.length>0&&t.length===S.length,indeterminate:t.length>0&&t.length<S.length,onChange:l=>{a(l.target.checked?S:[])}})}),e.jsx("th",{children:"Beneficiary"}),e.jsx("th",{children:"Account"}),e.jsx("th",{children:"Due Date"}),e.jsx("th",{className:"text-end",children:"Amount"})]})}),e.jsx("tbody",{children:S.map(l=>e.jsxs("tr",{className:i(l)?"table-active":void 0,children:[e.jsx("td",{children:e.jsx(x,{type:"checkbox",ariaLabel:`Select payment ${l.id}`,checked:i(l),onChange:()=>n(l)})}),e.jsxs("td",{children:[e.jsx("div",{className:"fw-semibold",children:l.beneficiary}),e.jsx("small",{className:"text-secondary",children:l.id})]}),e.jsx("td",{children:l.account}),e.jsx("td",{children:l.dueDate}),e.jsx("td",{className:"text-end fw-semibold",children:v.format(l.amount)})]},l.id))})]})]})}const $={render:()=>e.jsx(dt,{}),parameters:{layout:"fullscreen",docs:{source:{code:`function BulkActionsExample() {
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
}`}}}};var U,Q,V;j.parameters={...j.parameters,docs:{...(U=j.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <DBox style={{
    width: '1100px'
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
}`,...(V=(Q=j.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var Y,X,J;N.parameters={...N.parameters,docs:{...(Y=N.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <DBox style={{
    width: '1100px'
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
}`,...(J=(X=N.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var Z,G,K;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <DBox style={{
    width: '1100px'
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
}`,...(K=(G=k.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var ee,te,ae;D.parameters={...D.parameters,docs:{...(ee=D.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <DBox style={{
    width: '1100px'
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
}`,...(ae=(te=D.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var se,re,ne;C.parameters={...C.parameters,docs:{...(se=C.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <DBox style={{
    width: '1100px'
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
}`,...(ne=(re=C.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var le,oe,de;A.parameters={...A.parameters,docs:{...(le=A.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <DBox style={{
    width: '1100px'
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
}`,...(de=(oe=A.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var ie,ce,me;F.parameters={...F.parameters,docs:{...(ie=F.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <DBox style={{
    width: '1100px'
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
}`,...(me=(ce=F.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var ue,he,pe;P.parameters={...P.parameters,docs:{...(ue=P.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <DBox style={{
    width: '1100px'
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
}`,...(pe=(he=P.parameters)==null?void 0:he.docs)==null?void 0:pe.source}}};var ye,be,xe;I.parameters={...I.parameters,docs:{...(ye=I.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => <DBox style={{
    width: '1100px'
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
}`,...(xe=(be=I.parameters)==null?void 0:be.docs)==null?void 0:xe.source}}};var ge,ve,Se;E.parameters={...E.parameters,docs:{...(ge=E.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <DBox style={{
    width: '1100px'
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
}`,...(Se=(ve=E.parameters)==null?void 0:ve.docs)==null?void 0:Se.source}}};var we,fe,je;T.parameters={...T.parameters,docs:{...(we=T.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => <CompleteTableComponent />,
  parameters: {
    docs: {
      source: {
        code: \`function CompleteTableExample() {
  const {
    isSelectedItem,
    toggleSelectedItem,
    selectedItems,
    setSelectedItems,
  } = useItemSelection();

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
                ariaLabel="Select all rows"
                checked={ROWS.length > 0 && selectedItems.length === ROWS.length}
                indeterminate={selectedItems.length > 0 && selectedItems.length < ROWS.length}
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
                  {row[key]}
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
}\`
      }
    }
  }
}`,...(je=(fe=T.parameters)==null?void 0:fe.docs)==null?void 0:je.source}}};var Ne,ke,De;R.parameters={...R.parameters,docs:{...(Ne=R.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}\`
      }
    }
  }
}`,...(De=(ke=R.parameters)==null?void 0:ke.docs)==null?void 0:De.source}}};var Ce,Ae,Fe;O.parameters={...O.parameters,docs:{...(Ce=O.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => <FinancialTransactionHistoryComponent />,
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: {
        code: \`function TransactionHistoryExample() {
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const query = search.trim().toLowerCase();
  const rows = FINANCE_TRANSACTIONS.filter((row) => {
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
              <td className={\\\`text-end fw-semibold \\\${row.amount >= 0 ? 'text-success' : 'text-danger'}\\\`}>
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
}\`
      }
    }
  }
}`,...(Fe=(Ae=O.parameters)==null?void 0:Ae.docs)==null?void 0:Fe.source}}};var Pe,Ie,Ee;B.parameters={...B.parameters,docs:{...(Pe=B.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  render: () => <FinancialTransactionOffcanvasComponent />,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Uses \`DContextProvider\` + \`openPortal\` + \`DOffcanvas\` to open a responsive advanced-filters panel with apply/clear actions.'
      },
      source: {
        code: \`function TransactionScreeningFiltersOffcanvas({ name, payload }) {
  const { closePortal } = useDPortalContext();
  const [typeFilter, setTypeFilter] = useState(payload.values.typeFilter);
  const [statusFilter, setStatusFilter] = useState(payload.values.statusFilter);
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
        <h6 className="mb-0" id={\\\`\\\${name}Label\\\`}>
          Advanced Filters
        </h6>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <div className="mb-3">
          <small className="d-block text-secondary mb-1">Type</small>
          <select
            aria-label="Filter by type"
            className="form-select"
            value={typeFilter}
            onChange={(event) => setTypeFilter(event.target.value)}
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
            onChange={(event) => setStatusFilter(event.target.value)}
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
            payload.onApply({ typeFilter, statusFilter, minAmountFilter });
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
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [minAmountFilter, setMinAmountFilter] = useState('0');
  const { openPortal } = useDPortalContext();

  const currentFilters = { typeFilter, statusFilter, minAmountFilter };
  const minAmount = Math.max(0, Number(minAmountFilter) || 0);
  const query = search.trim().toLowerCase();

  const rows = FINANCE_TRANSACTIONS.filter((row) => {
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
          {typeFilter !== 'all' && <DChip text={\\\`Type: \\\${typeFilter}\\\`} color="primary" showClose onClose={() => setTypeFilter('all')} />}
          {statusFilter !== 'all' && <DChip text={\\\`Status: \\\${statusFilter}\\\`} color="warning" showClose onClose={() => setStatusFilter('all')} />}
          {minAmount > 0 && <DChip text={\\\`Min Amount: \\\${USD.format(minAmount)}\\\`} color="secondary" showClose onClose={() => setMinAmountFilter('0')} />}
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
              <td className={\\\`text-end fw-semibold \\\${row.amount >= 0 ? 'text-success' : 'text-danger'}\\\`}>
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

export function TransactionHistoryOffcanvasExample() {
  return (
    <DContextProvider
      portalName="tablePatternsTransactionFiltersPortal"
      availablePortals={{ filters: TransactionScreeningFiltersOffcanvas }}
    >
      <FinancialTransactionOffcanvasContent />
    </DContextProvider>
  );
}\`
      }
    }
  }
}`,...(Ee=(Ie=B.parameters)==null?void 0:Ie.docs)==null?void 0:Ee.source}}};var Te,Re,Oe;L.parameters={...L.parameters,docs:{...(Te=L.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => <LoanPortfolioComponent />,
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: {
        code: \`function LoanPortfolioExample() {
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
}\`
      }
    }
  }
}`,...(Oe=(Re=L.parameters)==null?void 0:Re.docs)==null?void 0:Oe.source}}};var Be,Le,$e;$.parameters={...$.parameters,docs:{...(Be=$.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: () => <BulkActionsComponent />,
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: {
        code: \`function BulkActionsExample() {
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
              onClick={() => setLastAction(\\\`Approved \\\${selectedItems.length} payments\\\`)}
            >Approve</button>
            <button type="button" className="btn btn-sm btn-warning"
              onClick={() => setLastAction(\\\`Sent \\\${selectedItems.length} payments to review\\\`)}
            >Send to Review</button>
            <button type="button" className="btn btn-sm btn-outline-secondary"
              onClick={() => setLastAction(\\\`Exported \\\${selectedItems.length} payments\\\`)}
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
                  ariaLabel={\\\`Select payment \\\${row.id}\\\`}
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
}\`
      }
    }
  }
}`,...($e=(Le=$.parameters)==null?void 0:Le.docs)==null?void 0:$e.source}}};const Et=["BasicTable","Borderless","StripedTable","HoverTable","DarkTable","BorderedTable","SmallTable","ActiveTable","ColorTable","LoadingTable","CompleteTable","Composition","TransactionHistory","TransactionHistoryOffcanvas","LoanPortfolio","BulkActions"];export{P as ActiveTable,j as BasicTable,A as BorderedTable,N as Borderless,$ as BulkActions,I as ColorTable,T as CompleteTable,R as Composition,C as DarkTable,D as HoverTable,E as LoadingTable,L as LoanPortfolio,F as SmallTable,k as StripedTable,O as TransactionHistory,B as TransactionHistoryOffcanvas,Et as __namedExportsOrder,It as default};
