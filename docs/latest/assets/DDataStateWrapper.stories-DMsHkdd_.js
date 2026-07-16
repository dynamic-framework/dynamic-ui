import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-vLNjGVop.js";import{D as g,E as ee,a as f,L as te}from"./DDataStateWrapper-CynHkBou.js";import{D as ae}from"./DBox-Cmf34cPu.js";import"./preload-helper-Dp1pzeXC.js";import"./DAlert-DyShLHim.js";import"./index-nyyuC_Uj.js";import"./DIcon-BaYjXWaB.js";import"./index-BPJnJB5S.js";import"./config-C3iYXcFk.js";import"./useMediaBreakpointUp-56XFbS_3.js";import"./DContext-aUrSpq0p.js";import"./index-DFPG5GmN.js";import"./index-oOcxeWdd.js";import"./DButton-k5jVOt40.js";const fe={title:"Design System/Components/Data State Wrapper",component:g,tags:["autodocs"],parameters:{docs:{description:{component:"Easily manage UI transitions between different data states. Wrap your content and provide the current state flags. **Standalone components:** `EmptyState`, `ErrorState`, and `LoadingState` are also available as individual exports for use outside of `DDataStateWrapper` when you need to display these states independently."}}},argTypes:{isLoading:{description:"Whether the data is currently being fetched.",table:{category:"State",defaultValue:{summary:"false"}}},isError:{description:"Whether an error occurred during fetching.",table:{category:"State",defaultValue:{summary:"false"}}},data:{description:"The data to be displayed. If null or empty, the empty state is shown.",table:{category:"Data"},control:"select",options:["empty","populated"],mapping:{empty:[],populated:["Apple","Banana","Cherry"]}},onRetry:{description:"Callback function to be executed when the user clicks the retry button in the default error state.",table:{category:"Callbacks"},action:"onRetry"},renderLoading:{description:"Custom renderer for the loading state.",table:{category:"Custom Renderers"},control:!1},renderEmpty:{description:"Custom renderer for the empty state.",table:{category:"Custom Renderers"},control:!1},renderError:{description:"Custom renderer for the error state.",table:{category:"Custom Renderers"},control:!1},children:{description:"Render function that receives the data when it is successfully loaded and not empty.",table:{category:"Content"},control:!1},messages:{description:"Override the default built-in strings without replacing the default markup. The loading key maps to the spinner aria-label (accessibility label, not visible text); empty/error/retry map to visible UI text. All keys are optional.",table:{category:"Customization"}}},decorators:[a=>e.jsx("div",{style:{height:180},children:e.jsx(a,{})})]},r={args:{isLoading:!1,isError:!1,data:[],children:a=>e.jsx("ul",{className:"list-group",children:a.map(t=>e.jsx("li",{className:"list-group-item",children:t},t))})}},i={args:{...r.args,data:["Alpha","Beta","Gamma"]}},d={args:{...r.args,isLoading:!0},render:a=>e.jsx("div",{style:{minHeight:"150px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(g,{...a})})},l={args:{...r.args,isError:!0}},c={render:function(t){const[n,o]=p.useState({isLoading:t.isLoading,isError:t.isError,data:t.data});p.useEffect(()=>{o({isLoading:t.isLoading,isError:t.isError,data:t.data})},[t.isLoading,t.isError,t.data]);const s=(b,h,y)=>{o({isLoading:b,isError:h,data:y})};return e.jsxs("div",{className:"d-flex flex-column gap-3",children:[e.jsxs("div",{className:"d-flex gap-2 mb-3",children:[e.jsx("button",{type:"button",className:"btn btn-outline-primary btn-sm",onClick:()=>s(!0,!1,[]),children:"Loading"}),e.jsx("button",{type:"button",className:"btn btn-outline-danger btn-sm",onClick:()=>s(!1,!0,[]),children:"Error"}),e.jsx("button",{type:"button",className:"btn btn-outline-secondary btn-sm",onClick:()=>s(!1,!1,[]),children:"Empty"}),e.jsx("button",{type:"button",className:"btn btn-outline-success btn-sm",onClick:()=>s(!1,!1,["Alpha","Beta","Gamma"]),children:"Success"})]}),e.jsx(g,{...t,isLoading:n.isLoading,isError:n.isError,data:n.data})]})},args:{isLoading:!1,isError:!1,data:[],messages:{loading:"Cargando…",empty:"Sin datos disponibles.",error:"Ocurrió un error inesperado.",retry:"Reintentar"},children:a=>e.jsx("ul",{className:"list-group",children:a.map(t=>e.jsx("li",{className:"list-group-item",children:t},t))})},argTypes:{isLoading:{control:"boolean"},isError:{control:"boolean"}}},u={render:function(t){const[n,o]=p.useState({isLoading:t.isLoading,isError:t.isError,data:t.data});p.useEffect(()=>{o({isLoading:t.isLoading,isError:t.isError,data:t.data})},[t.isLoading,t.isError,t.data]);const s=(b,h,y)=>{o({isLoading:b,isError:h,data:y})};return e.jsxs("div",{className:"d-flex flex-column gap-3",children:[e.jsxs("div",{className:"d-flex gap-2 mb-3",children:[e.jsx("button",{type:"button",className:"btn btn-outline-primary btn-sm",onClick:()=>s(!0,!1,[]),children:"Show Loading"}),e.jsx("button",{type:"button",className:"btn btn-outline-danger btn-sm",onClick:()=>s(!1,!0,[]),children:"Show Error"}),e.jsx("button",{type:"button",className:"btn btn-outline-secondary btn-sm",onClick:()=>s(!1,!1,[]),children:"Show Empty"}),e.jsx("button",{type:"button",className:"btn btn-outline-success btn-sm",onClick:()=>s(!1,!1,["Item 1"]),children:"Show Success"})]}),e.jsx(g,{...t,isLoading:n.isLoading,isError:n.isError,data:n.data})]})},args:{isLoading:!0,isError:!1,data:[],renderLoading:e.jsxs("div",{className:"text-center p-5 border rounded bg-light",children:[e.jsx("div",{className:"spinner-grow text-primary",role:"status",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})}),e.jsx("p",{className:"mt-2 mb-0",children:"Customizing the loading experience..."})]}),renderError:e.jsx("div",{className:"alert alert-danger d-flex align-items-center",role:"alert",children:e.jsxs("div",{children:[e.jsx("strong",{children:"Oops!"})," ","Something went wrong."," ",e.jsx("button",{type:"button",className:"btn btn-link p-0 align-baseline",children:"Click here to try again"}),"."]})}),renderEmpty:e.jsxs(ae,{className:"text-center p-4 border-dashed rounded",children:[e.jsx("h4",{children:"No tracks found"}),e.jsx("p",{className:"text-muted",children:"Try adjusting your search filters."}),e.jsx("button",{type:"button",className:"btn btn-primary btn-sm",children:"Reset Filters"})]}),children:a=>e.jsxs("div",{children:["Data loaded:"," ",JSON.stringify(a)]})},argTypes:{isLoading:{control:"boolean"},isError:{control:"boolean"}}},m={render:()=>e.jsxs("div",{className:"d-flex flex-column gap-4",children:[e.jsxs("div",{children:[e.jsx("h6",{className:"text-muted mb-3",children:"EmptyState"}),e.jsx(ee,{message:"No items found",icon:"Search",actionText:"Create New",onAction:()=>{}})]}),e.jsxs("div",{children:[e.jsx("h6",{className:"text-muted mb-3",children:"ErrorState (Danger)"}),e.jsx(f,{message:"Failed to load data. Please check your connection.",onRetry:()=>{},retryMessage:"Retry",color:"danger"})]}),e.jsxs("div",{children:[e.jsx("h6",{className:"text-muted mb-3",children:"ErrorState (Warning)"}),e.jsx(f,{message:"Something went wrong, but you can try again.",onRetry:()=>{},retryMessage:"Try Again",color:"warning"})]}),e.jsxs("div",{children:[e.jsx("h6",{className:"text-muted mb-3",children:"LoadingState"}),e.jsx(te,{ariaLabel:"Loading your data..."})]})]})};var x,S,E,N,L;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(E=(S=r.parameters)==null?void 0:S.docs)==null?void 0:E.source},description:{story:"The basic state showing the empty view by default.",...(L=(N=r.parameters)==null?void 0:N.docs)==null?void 0:L.description}}};var v,j,w,C,k;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: ['Alpha', 'Beta', 'Gamma']
  }
}`,...(w=(j=i.parameters)==null?void 0:j.docs)==null?void 0:w.source},description:{story:"A state populated with data.",...(k=(C=i.parameters)==null?void 0:C.docs)==null?void 0:k.description}}};var D,R,T,A,W;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(T=(R=d.parameters)==null?void 0:R.docs)==null?void 0:T.source},description:{story:"Displays the default loading state (spinner).",...(W=(A=d.parameters)==null?void 0:A.docs)==null?void 0:W.description}}};var B,O,I,M,F;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isError: true
  }
}`,...(I=(O=l.parameters)==null?void 0:O.docs)==null?void 0:I.source},description:{story:"Displays the default error state with a retry button.",...(F=(M=l.parameters)==null?void 0:M.docs)==null?void 0:F.description}}};var G,z,P,H,J;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(P=(z=c.parameters)==null?void 0:z.docs)==null?void 0:P.source},description:{story:"Pass a `messages` object to override the hardcoded default strings without\nreplacing the built-in markup.  All keys are optional — only supply what you\nneed (e.g. from an i18n catalogue).",...(J=(H=c.parameters)==null?void 0:H.docs)==null?void 0:J.description}}};var U,V,_,q,K;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(_=(V=u.parameters)==null?void 0:V.docs)==null?void 0:_.source},description:{story:`Demonstrates how to override the default states with custom components.
This story is interactive, allowing you to test each state using the buttons below.`,...(K=(q=u.parameters)==null?void 0:q.docs)==null?void 0:K.description}}};var Q,X,Y,Z,$;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:`Showcases the individual state components that are also available as standalone exports:
- **EmptyState**: Displays when there is no data, with optional icon, message, and action button.
- **ErrorState**: Displays error messages with an optional retry button.
- **LoadingState**: Displays a loading spinner with accessibility support.

These can be imported and used independently
when you don't need the full DDataStateWrapper orchestration.`,...($=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:$.description}}};const xe=["Default","Success","Loading","Error","CustomMessages","CustomTemplates","StandaloneStates"];export{c as CustomMessages,u as CustomTemplates,r as Default,l as Error,d as Loading,m as StandaloneStates,i as Success,xe as __namedExportsOrder,fe as default};
