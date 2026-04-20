import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as M}from"./iframe-BBcUAjIA.js";import{D as U}from"./DAlert-BXplpAmX.js";import{D as J}from"./DButton-CIjnx8OM.js";import{D as $}from"./DIcon-CAcmHYTg.js";import{D as K}from"./DBox-D27pIc5U.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bw5_15j5.js";import"./DContext-CvDyqak0.js";import"./index-d4dYLo0s.js";import"./index-BcoQFopu.js";import"./config-C3iYXcFk.js";import"./useMediaBreakpointUp-DQHqXBJn.js";function y({message:t,onRetry:r,retryMessage:a="Retry",color:n="danger"}){return e.jsxs(U,{color:n,className:"d-flex align-items-center gap-3",children:[e.jsx("div",{className:"flex-grow-1",children:e.jsx("p",{className:"mb-0",children:t??"An unexpected error occurred."})}),r&&e.jsx(J,{onClick:r,text:a,variant:"outline",iconStart:"RefreshCw"})]})}try{y.displayName="ErrorState",y.__docgenInfo={description:"",displayName:"ErrorState",props:{message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string | undefined"}},onRetry:{defaultValue:null,description:"",name:"onRetry",required:!1,type:{name:"(() => void) | undefined"}},retryMessage:{defaultValue:{value:"Retry"},description:"",name:"retryMessage",required:!1,type:{name:"string | undefined"}},color:{defaultValue:{value:"danger"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"danger"'},{value:'"warning"'}]}}}}}catch{}function b({message:t,icon:r="FileText",actionText:a,onAction:n}){return e.jsxs("div",{className:"d-flex flex-column align-items-center justify-content-center p-5 text-center",children:[e.jsx($,{icon:r,size:"3rem",className:"text-secondary mb-3"}),e.jsx("p",{className:"text-secondary mb-3",children:t??"No data available."}),a&&n&&e.jsx(J,{onClick:n,text:a,variant:"outline"})]})}try{b.displayName="EmptyState",b.__docgenInfo={description:"",displayName:"EmptyState",props:{message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string | undefined"}},icon:{defaultValue:{value:"FileText"},description:"",name:"icon",required:!1,type:{name:"string | undefined"}},actionText:{defaultValue:null,description:"",name:"actionText",required:!1,type:{name:"string | undefined"}},onAction:{defaultValue:null,description:"",name:"onAction",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}function h({ariaLabel:t="Loading...",className:r}){return e.jsx("div",{className:`d-flex align-items-center justify-content-center p-4 ${r||""}`.trim(),"aria-busy":"true","aria-live":"polite",children:e.jsx("span",{className:"spinner-border",role:"status","aria-label":t})})}try{h.displayName="LoadingState",h.__docgenInfo={description:"",displayName:"LoadingState",props:{ariaLabel:{defaultValue:{value:"Loading..."},description:"",name:"ariaLabel",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}}}catch{}function f(t){return t===void 0?null:typeof t=="function"?t():t}function u({isLoading:t,isError:r,data:a,onRetry:n,renderLoading:i,renderEmpty:p,renderError:m,children:g}){return t?i?f(i):e.jsx(h,{}):r?m?f(m):e.jsx(y,{onRetry:n}):a!=null&&a.length?e.jsx(e.Fragment,{children:g(a)}):p?f(p):e.jsx(b,{})}try{u.displayName="DDataStateWrapper",u.__docgenInfo={description:"",displayName:"DDataStateWrapper",props:{isLoading:{defaultValue:null,description:"",name:"isLoading",required:!0,type:{name:"boolean"}},isError:{defaultValue:null,description:"",name:"isError",required:!0,type:{name:"boolean"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[] | undefined"}},onRetry:{defaultValue:null,description:"",name:"onRetry",required:!1,type:{name:"(() => void) | undefined"}},renderLoading:{defaultValue:null,description:"",name:"renderLoading",required:!1,type:{name:"Renderable"}},renderEmpty:{defaultValue:null,description:"",name:"renderEmpty",required:!1,type:{name:"Renderable"}},renderError:{defaultValue:null,description:"",name:"renderError",required:!1,type:{name:"Renderable"}}}}}catch{}const le={title:"Design System/Components/Data State Wrapper",component:u,tags:["autodocs"],parameters:{docs:{description:{component:"Easily manage UI transitions between different data states. Wrap your content and provide the current state flags."}}},argTypes:{isLoading:{description:"Whether the data is currently being fetched.",table:{category:"State",defaultValue:{summary:"false"}}},isError:{description:"Whether an error occurred during fetching.",table:{category:"State",defaultValue:{summary:"false"}}},data:{description:"The data to be displayed. If null or empty, the empty state is shown.",table:{category:"Data"},control:"select",options:["empty","populated"],mapping:{empty:[],populated:["Apple","Banana","Cherry"]}},onRetry:{description:"Callback function to be executed when the user clicks the retry button in the default error state.",table:{category:"Callbacks"},action:"onRetry"},renderLoading:{description:"Custom renderer for the loading state.",table:{category:"Custom Renderers"},control:!1},renderEmpty:{description:"Custom renderer for the empty state.",table:{category:"Custom Renderers"},control:!1},renderError:{description:"Custom renderer for the error state.",table:{category:"Custom Renderers"},control:!1},children:{description:"Render function that receives the data when it is successfully loaded and not empty.",table:{category:"Content"},control:!1}},decorators:[t=>e.jsx("div",{style:{height:180},children:e.jsx(t,{})})]},s={args:{isLoading:!1,isError:!1,data:[],children:t=>e.jsx("ul",{className:"list-group",children:t.map(r=>e.jsx("li",{className:"list-group-item",children:r},r))})}},o={args:{...s.args,data:["Alpha","Beta","Gamma"]}},l={args:{...s.args,isLoading:!0},render:t=>e.jsx("div",{style:{minHeight:"150px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(u,{...t})})},d={args:{...s.args,isError:!0}},c={render:function(r){const[a,n]=M.useState({isLoading:r.isLoading,isError:r.isError,data:r.data}),i=(p,m,g)=>{n({isLoading:p,isError:m,data:g})};return e.jsxs("div",{className:"d-flex flex-column gap-3",children:[e.jsxs("div",{className:"d-flex gap-2 mb-3",children:[e.jsx("button",{type:"button",className:"btn btn-outline-primary btn-sm",onClick:()=>i(!0,!1,[]),children:"Show Loading"}),e.jsx("button",{type:"button",className:"btn btn-outline-danger btn-sm",onClick:()=>i(!1,!0,[]),children:"Show Error"}),e.jsx("button",{type:"button",className:"btn btn-outline-secondary btn-sm",onClick:()=>i(!1,!1,[]),children:"Show Empty"}),e.jsx("button",{type:"button",className:"btn btn-outline-success btn-sm",onClick:()=>i(!1,!1,["Item 1"]),children:"Show Success"})]}),e.jsx(u,{...r,isLoading:a.isLoading,isError:a.isError,data:a.data})]})},args:{isLoading:!0,isError:!1,data:[],renderLoading:e.jsxs("div",{className:"text-center p-5 border rounded bg-light",children:[e.jsx("div",{className:"spinner-grow text-primary",role:"status",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})}),e.jsx("p",{className:"mt-2 mb-0",children:"Customizing the loading experience..."})]}),renderError:e.jsx("div",{className:"alert alert-danger d-flex align-items-center",role:"alert",children:e.jsxs("div",{children:[e.jsx("strong",{children:"Oops!"})," ","Something went wrong."," ",e.jsx("button",{type:"button",className:"btn btn-link p-0 align-baseline",children:"Click here to try again"}),"."]})}),renderEmpty:e.jsxs(K,{className:"text-center p-4 border-dashed rounded",children:[e.jsx("h4",{children:"No tracks found"}),e.jsx("p",{className:"text-muted",children:"Try adjusting your search filters."}),e.jsx("button",{type:"button",className:"btn btn-primary btn-sm",children:"Reset Filters"})]}),children:t=>e.jsxs("div",{children:["Data loaded:"," ",JSON.stringify(t)]})},argTypes:{isLoading:{control:"boolean"},isError:{control:"boolean"}}};var x,N,v,S,j;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isLoading: false,
    isError: false,
    data: [],
    children: data => <ul className="list-group">
        {(data as string[]).map(item => <li key={item} className="list-group-item">
            {item}
          </li>)}
      </ul>
  }
}`,...(v=(N=s.parameters)==null?void 0:N.docs)==null?void 0:v.source},description:{story:"The basic state showing the empty view by default.",...(j=(S=s.parameters)==null?void 0:S.docs)==null?void 0:j.description}}};var E,L,_,D,w;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: ['Alpha', 'Beta', 'Gamma']
  }
}`,...(_=(L=o.parameters)==null?void 0:L.docs)==null?void 0:_.source},description:{story:"A state populated with data.",...(w=(D=o.parameters)==null?void 0:D.docs)==null?void 0:w.description}}};var C,k,R,V,q;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(R=(k=l.parameters)==null?void 0:k.docs)==null?void 0:R.source},description:{story:"Displays the default loading state (spinner).",...(q=(V=l.parameters)==null?void 0:V.docs)==null?void 0:q.description}}};var T,I,W,A,B;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isError: true
  }
}`,...(W=(I=d.parameters)==null?void 0:I.docs)==null?void 0:W.source},description:{story:"Displays the default error state with a retry button.",...(B=(A=d.parameters)==null?void 0:A.docs)==null?void 0:B.description}}};var F,O,z,G,H;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: function Render(args) {
    const [state, setState] = useState({
      isLoading: args.isLoading,
      isError: args.isError,
      data: args.data
    });
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

        <DDataStateWrapper {...args} isLoading={state.isLoading} isError={state.isError} data={state.data as unknown[]} />
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
    children: data => <div>
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
}`,...(z=(O=c.parameters)==null?void 0:O.docs)==null?void 0:z.source},description:{story:`Demonstrates how to override the default states with custom components.
This story is interactive, allowing you to test each state using the buttons below.`,...(H=(G=c.parameters)==null?void 0:G.docs)==null?void 0:H.description}}};const de=["Default","Success","Loading","Error","CustomTemplates"];export{c as CustomTemplates,s as Default,d as Error,l as Loading,o as Success,de as __namedExportsOrder,le as default};
