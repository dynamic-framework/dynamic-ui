import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as g}from"./iframe-BOlGrI6L.js";import{D as b,E as ie,a as x,L as le}from"./DDataStateWrapper-BdGQG8vE.js";import{D as oe}from"./DBox-Dt8mDl-c.js";import"./preload-helper-Dp1pzeXC.js";import"./DAlert-ByoDv-PH.js";import"./index-DowJ8Qf7.js";import"./DIcon-CTNbRGzm.js";import"./index-BPJnJB5S.js";import"./config-7dXXkQRG.js";import"./useMediaBreakpointUp-CBOESKxy.js";import"./DContext-BsbKwSe9.js";import"./index-B7vmrvBm.js";import"./index-1yCPQ3pT.js";import"./DButton-CpkCVJRB.js";const Le={title:"Design System/Components/Data State Wrapper",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Easily manage UI transitions between different data states. Wrap your content and provide the current state flags. **Standalone components:** `EmptyState`, `ErrorState`, and `LoadingState` are also available as individual exports for use outside of `DDataStateWrapper` when you need to display these states independently."}}},argTypes:{isLoading:{description:"Whether the data is currently being fetched.",table:{category:"State",defaultValue:{summary:"false"}}},isError:{description:"Whether an error occurred during fetching.",table:{category:"State",defaultValue:{summary:"false"}}},data:{description:"The data to be displayed: a collection (`T[]`, empty with no items) or a single resource (`T | null | undefined`, empty when `null` or `undefined`). `children` receives it with the same shape.",table:{category:"Data"},control:"select",options:["empty","populated"],mapping:{empty:[],populated:["Apple","Banana","Cherry"]}},onRetry:{description:"Callback function to be executed when the user clicks the retry button in the default error state.",table:{category:"Callbacks"},action:"onRetry"},renderLoading:{description:"Custom renderer for the loading state.",table:{category:"Custom Renderers"},control:!1},renderEmpty:{description:"Custom renderer for the empty state.",table:{category:"Custom Renderers"},control:!1},renderError:{description:"Custom renderer for the error state.",table:{category:"Custom Renderers"},control:!1},children:{description:"Render function that receives the data when it is successfully loaded and not empty.",table:{category:"Content"},control:!1},messages:{description:"Override the default built-in strings without replacing the default markup. The loading key maps to the spinner aria-label (accessibility label, not visible text); empty/error/retry map to visible UI text. All keys are optional.",table:{category:"Customization"}}},decorators:[a=>e.jsx("div",{style:{height:180},children:e.jsx(a,{})})]},o={args:{isLoading:!1,isError:!1,data:[],children:a=>e.jsx("ul",{className:"list-group",children:a.map(t=>e.jsx("li",{className:"list-group-item",children:t},t))})}},i={args:{...o.args,data:["Alpha","Beta","Gamma"]}},l={render:function(){const[t,s]=g.useState(null);return e.jsxs("div",{className:"d-flex flex-column gap-3",children:[e.jsxs("div",{className:"d-flex gap-2",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-outline-primary",onClick:()=>s({alias:"Cuenta de ahorros",number:"•••• 4821",balance:"$ 12.450.000"}),children:"Load detail"}),e.jsx("button",{type:"button",className:"btn btn-sm btn-outline-secondary",onClick:()=>s(null),children:"Clear"})]}),e.jsx(b,{isLoading:!1,isError:!1,data:t,messages:{empty:"Select an account to see its detail."},children:r=>e.jsxs(oe,{children:[e.jsx("h3",{className:"h5 mb-1",children:r.alias}),e.jsx("p",{className:"mb-1",children:r.number}),e.jsx("p",{className:"mb-0 fw-bold",children:r.balance})]})})]})}},d={args:{...o.args,isLoading:!0},render:a=>e.jsx("div",{style:{minHeight:"150px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(b,{...a})})},c={args:{...o.args,isError:!0}},u={render:function(t){const[s,r]=g.useState({isLoading:t.isLoading,isError:t.isError,data:t.data});g.useEffect(()=>{r({isLoading:t.isLoading,isError:t.isError,data:t.data})},[t.isLoading,t.isError,t.data]);const n=(h,y,f)=>{r({isLoading:h,isError:y,data:f})};return e.jsxs("div",{className:"d-flex flex-column gap-3",children:[e.jsxs("div",{className:"d-flex gap-2 mb-3",children:[e.jsx("button",{type:"button",className:"btn btn-outline-primary btn-sm",onClick:()=>n(!0,!1,[]),children:"Loading"}),e.jsx("button",{type:"button",className:"btn btn-outline-danger btn-sm",onClick:()=>n(!1,!0,[]),children:"Error"}),e.jsx("button",{type:"button",className:"btn btn-outline-secondary btn-sm",onClick:()=>n(!1,!1,[]),children:"Empty"}),e.jsx("button",{type:"button",className:"btn btn-outline-success btn-sm",onClick:()=>n(!1,!1,["Alpha","Beta","Gamma"]),children:"Success"})]}),e.jsx(b,{...t,isLoading:s.isLoading,isError:s.isError,data:s.data})]})},args:{isLoading:!1,isError:!1,data:[],messages:{loading:"Cargando…",empty:"Sin datos disponibles.",error:"Ocurrió un error inesperado.",retry:"Reintentar"},children:a=>e.jsx("ul",{className:"list-group",children:a.map(t=>e.jsx("li",{className:"list-group-item",children:t},t))})},argTypes:{isLoading:{control:"boolean"},isError:{control:"boolean"}}},m={render:function(t){const[s,r]=g.useState({isLoading:t.isLoading,isError:t.isError,data:t.data});g.useEffect(()=>{r({isLoading:t.isLoading,isError:t.isError,data:t.data})},[t.isLoading,t.isError,t.data]);const n=(h,y,f)=>{r({isLoading:h,isError:y,data:f})};return e.jsxs("div",{className:"d-flex flex-column gap-3",children:[e.jsxs("div",{className:"d-flex gap-2 mb-3",children:[e.jsx("button",{type:"button",className:"btn btn-outline-primary btn-sm",onClick:()=>n(!0,!1,[]),children:"Show Loading"}),e.jsx("button",{type:"button",className:"btn btn-outline-danger btn-sm",onClick:()=>n(!1,!0,[]),children:"Show Error"}),e.jsx("button",{type:"button",className:"btn btn-outline-secondary btn-sm",onClick:()=>n(!1,!1,[]),children:"Show Empty"}),e.jsx("button",{type:"button",className:"btn btn-outline-success btn-sm",onClick:()=>n(!1,!1,["Item 1"]),children:"Show Success"})]}),e.jsx(b,{...t,isLoading:s.isLoading,isError:s.isError,data:s.data})]})},args:{isLoading:!0,isError:!1,data:[],renderLoading:e.jsxs("div",{className:"text-center p-5 border rounded bg-light",children:[e.jsx("div",{className:"spinner-grow text-primary",role:"status",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})}),e.jsx("p",{className:"mt-2 mb-0",children:"Customizing the loading experience..."})]}),renderError:e.jsx("div",{className:"alert alert-danger d-flex align-items-center",role:"alert",children:e.jsxs("div",{children:[e.jsx("strong",{children:"Oops!"})," ","Something went wrong."," ",e.jsx("button",{type:"button",className:"btn btn-link p-0 align-baseline",children:"Click here to try again"}),"."]})}),renderEmpty:e.jsxs(oe,{className:"text-center p-4 border-dashed rounded",children:[e.jsx("h4",{children:"No tracks found"}),e.jsx("p",{className:"text-muted",children:"Try adjusting your search filters."}),e.jsx("button",{type:"button",className:"btn btn-primary btn-sm",children:"Reset Filters"})]}),children:a=>e.jsxs("div",{children:["Data loaded:"," ",JSON.stringify(a)]})},argTypes:{isLoading:{control:"boolean"},isError:{control:"boolean"}}},p={render:()=>e.jsxs("div",{className:"d-flex flex-column gap-4",children:[e.jsxs("div",{children:[e.jsx("h6",{className:"text-muted mb-3",children:"EmptyState"}),e.jsx(ie,{message:"No items found",icon:"Search",actionText:"Create New",onAction:()=>{}})]}),e.jsxs("div",{children:[e.jsx("h6",{className:"text-muted mb-3",children:"ErrorState (Danger)"}),e.jsx(x,{message:"Failed to load data. Please check your connection.",onRetry:()=>{},retryMessage:"Retry",color:"danger"})]}),e.jsxs("div",{children:[e.jsx("h6",{className:"text-muted mb-3",children:"ErrorState (Warning)"}),e.jsx(x,{message:"Something went wrong, but you can try again.",onRetry:()=>{},retryMessage:"Try Again",color:"warning"})]}),e.jsxs("div",{children:[e.jsx("h6",{className:"text-muted mb-3",children:"LoadingState"}),e.jsx(le,{ariaLabel:"Loading your data..."})]})]})};var S,E,N,v,L;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    isLoading: false,
    isError: false,
    data: [],
    children: (data: unknown) => <ul className="list-group">
        {(data as string[]).map(item => <li key={item} className="list-group-item">
            {item}
          </li>)}
      </ul>
  }
}`,...(N=(E=o.parameters)==null?void 0:E.docs)==null?void 0:N.source},description:{story:"The basic state showing the empty view by default.",...(L=(v=o.parameters)==null?void 0:v.docs)==null?void 0:L.description}}};var j,w,C,D,k;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: ['Alpha', 'Beta', 'Gamma']
  }
}`,...(C=(w=i.parameters)==null?void 0:w.docs)==null?void 0:C.source},description:{story:"A state populated with data.",...(k=(D=i.parameters)==null?void 0:D.docs)==null?void 0:k.description}}};var R,T,A,W,B;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: function Render() {
    type AccountDetail = {
      alias: string;
      number: string;
      balance: string;
    };
    const [detail, setDetail] = useState<AccountDetail | null>(null);
    return <div className="d-flex flex-column gap-3">
        <div className="d-flex gap-2">
          <button type="button" className="btn btn-sm btn-outline-primary" onClick={() => setDetail({
          alias: 'Cuenta de ahorros',
          number: '•••• 4821',
          balance: '$ 12.450.000'
        })}>
            Load detail
          </button>
          <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => setDetail(null)}>
            Clear
          </button>
        </div>
        <DDataStateWrapper isLoading={false} isError={false} data={detail} messages={{
        empty: 'Select an account to see its detail.'
      }}>
          {account => <DBox>
              <h3 className="h5 mb-1">{account.alias}</h3>
              <p className="mb-1">{account.number}</p>
              <p className="mb-0 fw-bold">{account.balance}</p>
            </DBox>}
        </DDataStateWrapper>
      </div>;
  }
}`,...(A=(T=l.parameters)==null?void 0:T.docs)==null?void 0:A.source},description:{story:"A single resource (an entity detail, a summary) instead of a collection.\nThe render prop receives the object itself, and the empty state shows when\nit is `null` or `undefined`.",...(B=(W=l.parameters)==null?void 0:W.docs)==null?void 0:B.description}}};var O,I,M,F,G;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isLoading: true
  },
  render: args => <div style={{
    minHeight: '150px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
      <DDataStateWrapper {...args} />
    </div>
}`,...(M=(I=d.parameters)==null?void 0:I.docs)==null?void 0:M.source},description:{story:"Displays the default loading state (spinner).",...(G=(F=d.parameters)==null?void 0:F.docs)==null?void 0:G.description}}};var z,P,H,J,U;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isError: true
  }
}`,...(H=(P=c.parameters)==null?void 0:P.docs)==null?void 0:H.source},description:{story:"Displays the default error state with a retry button.",...(U=(J=c.parameters)==null?void 0:J.docs)==null?void 0:U.description}}};var V,_,$,q,K;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: function Render(args) {
    const [state, setState] = useState({
      isLoading: args.isLoading,
      isError: args.isError,
      data: args.data
    });
    useEffect(() => {
      setState({
        isLoading: args.isLoading,
        isError: args.isError,
        data: args.data
      });
    }, [args.isLoading, args.isError, args.data]);
    const setStatus = (loading: boolean, error: boolean, data: unknown[]) => {
      setState({
        isLoading: loading,
        isError: error,
        data
      });
    };
    return <div className="d-flex flex-column gap-3">
        <div className="d-flex gap-2 mb-3">
          <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => setStatus(true, false, [])}>
            Loading
          </button>
          <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => setStatus(false, true, [])}>
            Error
          </button>
          <button type="button" className="btn btn-outline-secondary btn-sm" onClick={() => setStatus(false, false, [])}>
            Empty
          </button>
          <button type="button" className="btn btn-outline-success btn-sm" onClick={() => setStatus(false, false, ['Alpha', 'Beta', 'Gamma'])}>
            Success
          </button>
        </div>
        <DDataStateWrapper {...args} isLoading={state.isLoading} isError={state.isError} data={state.data} />
      </div>;
  },
  args: {
    isLoading: false,
    isError: false,
    data: [],
    messages: {
      loading: 'Cargando…',
      empty: 'Sin datos disponibles.',
      error: 'Ocurrió un error inesperado.',
      retry: 'Reintentar'
    },
    children: (data: unknown) => <ul className="list-group">
        {(data as string[]).map(item => <li key={item} className="list-group-item">{item}</li>)}
      </ul>
  },
  argTypes: {
    isLoading: {
      control: 'boolean'
    },
    isError: {
      control: 'boolean'
    }
  }
}`,...($=(_=u.parameters)==null?void 0:_.docs)==null?void 0:$.source},description:{story:"Pass a `messages` object to override the hardcoded default strings without\nreplacing the built-in markup.  All keys are optional — only supply what you\nneed (e.g. from an i18n catalogue).",...(K=(q=u.parameters)==null?void 0:q.docs)==null?void 0:K.description}}};var Q,X,Y,Z,ee;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: function Render(args) {
    const [state, setState] = useState({
      isLoading: args.isLoading,
      isError: args.isError,
      data: args.data
    });
    useEffect(() => {
      setState({
        isLoading: args.isLoading,
        isError: args.isError,
        data: args.data
      });
    }, [args.isLoading, args.isError, args.data]);
    const setStatus = (loading: boolean, error: boolean, data: unknown[]) => {
      setState({
        isLoading: loading,
        isError: error,
        data
      });
    };
    return <div className="d-flex flex-column gap-3">
        <div className="d-flex gap-2 mb-3">
          <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => setStatus(true, false, [])}>
            Show Loading
          </button>
          <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => setStatus(false, true, [])}>
            Show Error
          </button>
          <button type="button" className="btn btn-outline-secondary btn-sm" onClick={() => setStatus(false, false, [])}>
            Show Empty
          </button>
          <button type="button" className="btn btn-outline-success btn-sm" onClick={() => setStatus(false, false, ['Item 1'])}>
            Show Success
          </button>
        </div>

        <DDataStateWrapper {...args} isLoading={state.isLoading} isError={state.isError} data={state.data} />
      </div>;
  },
  args: {
    isLoading: true,
    isError: false,
    data: [],
    renderLoading: <div className="text-center p-5 border rounded bg-light">
        <div className="spinner-grow text-primary" role="status">
          <span className="visually-hidden">
            Loading...
          </span>
        </div>
        <p className="mt-2 mb-0">
          Customizing the loading experience...
        </p>
      </div>,
    renderError: <div className="alert alert-danger d-flex align-items-center" role="alert">
        <div>
          <strong>
            Oops!
          </strong>
          {' '}
          Something went wrong.
          {' '}
          <button type="button" className="btn btn-link p-0 align-baseline">
            Click here to try again
          </button>
          .
        </div>
      </div>,
    renderEmpty: <DBox className="text-center p-4 border-dashed rounded">
        <h4>
          No tracks found
        </h4>
        <p className="text-muted">
          Try adjusting your search filters.
        </p>
        <button type="button" className="btn btn-primary btn-sm">
          Reset Filters
        </button>
      </DBox>,
    children: (data: unknown) => <div>
        Data loaded:
        {' '}
        {JSON.stringify(data)}
      </div>
  },
  argTypes: {
    isLoading: {
      control: 'boolean'
    },
    isError: {
      control: 'boolean'
    }
  }
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:`Demonstrates how to override the default states with custom components.
This story is interactive, allowing you to test each state using the buttons below.`,...(ee=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var te,ae,se,re,ne;p.parameters={...p.parameters,docs:{...(te=p.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-column gap-4">
      <div>
        <h6 className="text-muted mb-3">EmptyState</h6>
        <EmptyState message="No items found" icon="Search" actionText="Create New" onAction={() => undefined} />
      </div>
      <div>
        <h6 className="text-muted mb-3">ErrorState (Danger)</h6>
        <ErrorState message="Failed to load data. Please check your connection." onRetry={() => undefined} retryMessage="Retry" color="danger" />
      </div>
      <div>
        <h6 className="text-muted mb-3">ErrorState (Warning)</h6>
        <ErrorState message="Something went wrong, but you can try again." onRetry={() => undefined} retryMessage="Try Again" color="warning" />
      </div>
      <div>
        <h6 className="text-muted mb-3">LoadingState</h6>
        <LoadingState ariaLabel="Loading your data..." />
      </div>
    </div>
}`,...(se=(ae=p.parameters)==null?void 0:ae.docs)==null?void 0:se.source},description:{story:`Showcases the individual state components that are also available as standalone exports:
- **EmptyState**: Displays when there is no data, with optional icon, message, and action button.
- **ErrorState**: Displays error messages with an optional retry button.
- **LoadingState**: Displays a loading spinner with accessibility support.

These can be imported and used independently
when you don't need the full DDataStateWrapper orchestration.`,...(ne=(re=p.parameters)==null?void 0:re.docs)==null?void 0:ne.description}}};const je=["Default","Success","SingleResource","Loading","Error","CustomMessages","CustomTemplates","StandaloneStates"];export{u as CustomMessages,m as CustomTemplates,o as Default,c as Error,d as Loading,l as SingleResource,p as StandaloneStates,i as Success,je as __namedExportsOrder,Le as default};
