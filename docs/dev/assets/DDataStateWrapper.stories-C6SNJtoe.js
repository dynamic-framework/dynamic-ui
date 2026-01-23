import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as C}from"./DAlert-BOtWMw2U.js";import{D as w}from"./DButton-bC_tkz65.js";import{D as T}from"./DIcon-DzHhTXeq.js";import{D as B}from"./DBox-Df6kASFx.js";import"./index-4TPiY_w5.js";import"./iframe-uHxPMequ.js";import"./preload-helper-Dp1pzeXC.js";import"./DContext-BAc4NIae.js";import"./index-DboxJWp3.js";import"./index-Drp_xGtg.js";import"./config-C3iYXcFk.js";import"./useMediaBreakpointUp-DLsS5ULk.js";function u({message:r,onRetry:a,retryMessage:n="Retry",color:s="danger"}){return e.jsxs(C,{color:s,className:"d-flex align-items-center gap-3",children:[e.jsx("div",{className:"flex-grow-1",children:e.jsx("p",{className:"mb-0",children:r??"An unexpected error occurred."})}),a&&e.jsx(w,{onClick:a,text:n,variant:"outline",iconStart:"RefreshCw"})]})}try{u.displayName="ErrorState",u.__docgenInfo={description:"",displayName:"ErrorState",props:{message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string | undefined"}},onRetry:{defaultValue:null,description:"",name:"onRetry",required:!1,type:{name:"(() => void) | undefined"}},retryMessage:{defaultValue:{value:"Retry"},description:"",name:"retryMessage",required:!1,type:{name:"string | undefined"}},color:{defaultValue:{value:"danger"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"danger"'},{value:'"warning"'}]}}}}}catch{}function m({message:r,icon:a="FileText",actionText:n,onAction:s}){return e.jsxs("div",{className:"d-flex flex-column align-items-center justify-content-center p-5 text-center",children:[e.jsx(T,{icon:a,size:"3rem",className:"text-secondary mb-3"}),e.jsx("p",{className:"text-secondary mb-3",children:r??"No data available."}),n&&s&&e.jsx(w,{onClick:s,text:n,variant:"outline"})]})}try{m.displayName="EmptyState",m.__docgenInfo={description:"",displayName:"EmptyState",props:{message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string | undefined"}},icon:{defaultValue:{value:"FileText"},description:"",name:"icon",required:!1,type:{name:"string | undefined"}},actionText:{defaultValue:null,description:"",name:"actionText",required:!1,type:{name:"string | undefined"}},onAction:{defaultValue:null,description:"",name:"onAction",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}function g({ariaLabel:r="Loading...",className:a}){return e.jsx("div",{className:`d-flex align-items-center justify-content-center p-4 ${a||""}`.trim(),"aria-busy":"true","aria-live":"polite",children:e.jsx("span",{className:"spinner-border",role:"status","aria-label":r})})}try{g.displayName="LoadingState",g.__docgenInfo={description:"",displayName:"LoadingState",props:{ariaLabel:{defaultValue:{value:"Loading..."},description:"",name:"ariaLabel",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}}}catch{}function p(r){return r===void 0?null:typeof r=="function"?r():r}function t({isLoading:r,isError:a,data:n,onRetry:s,renderLoading:f,renderEmpty:y,renderError:x,children:k}){return r?f?p(f):e.jsx(g,{}):a?x?p(x):e.jsx(u,{onRetry:s}):n!=null&&n.length?e.jsx(e.Fragment,{children:k(n)}):y?p(y):e.jsx(m,{})}try{t.displayName="DDataStateWrapper",t.__docgenInfo={description:"",displayName:"DDataStateWrapper",props:{isLoading:{defaultValue:null,description:"",name:"isLoading",required:!0,type:{name:"boolean"}},isError:{defaultValue:null,description:"",name:"isError",required:!0,type:{name:"boolean"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[] | undefined"}},onRetry:{defaultValue:null,description:"",name:"onRetry",required:!1,type:{name:"(() => void) | undefined"}},renderLoading:{defaultValue:null,description:"",name:"renderLoading",required:!1,type:{name:"Renderable"}},renderEmpty:{defaultValue:null,description:"",name:"renderEmpty",required:!1,type:{name:"Renderable"}},renderError:{defaultValue:null,description:"",name:"renderError",required:!1,type:{name:"Renderable"}}}}}catch{}const X={title:"Design System/Components/Data State Wrapper",component:t,parameters:{docs:{description:{component:"Utility wrapper to handle loading, error, and empty states. It provides minimal defaults (spinner, basic error and empty views) and allows overriding via renderLoading/renderError/renderEmpty."}}},argTypes:{isLoading:{control:"boolean"},isError:{control:"boolean"},data:{control:"select",options:["empty","list"],mapping:{empty:void 0,list:["One","Two","Three"]}},onRetry:{control:!1},renderLoading:{control:!1},renderEmpty:{control:!1},renderError:{control:!1},children:{control:!1}}},i={render:r=>e.jsx("div",{style:{minHeight:140},children:e.jsx(t,{...r,children:a=>e.jsxs("div",{children:["Items:",(a==null?void 0:a.length)??0]})})}),args:{isLoading:!0,isError:!1,data:void 0}},o={render:r=>e.jsx(t,{...r,children:a=>e.jsxs("div",{children:["Items:",(a==null?void 0:a.length)??0]})}),args:{isLoading:!1,isError:!0,data:void 0,onRetry:()=>{}}},d={render:r=>e.jsx(t,{...r,children:a=>e.jsxs("div",{children:["Items:",(a==null?void 0:a.length)??0]})}),args:{isLoading:!1,isError:!1,data:[]}},l={render:r=>e.jsx(B,{className:"p-3 border rounded",children:e.jsx(t,{...r,data:r.data,children:a=>e.jsx("ul",{className:"m-0",children:a.map(n=>e.jsx("li",{children:n},n))})})}),args:{isLoading:!1,isError:!1,data:["Alpha","Beta","Gamma"]}},c={render:r=>e.jsx(t,{...r,renderEmpty:e.jsx("div",{className:"text-muted",children:"Nothing here…"}),renderLoading:e.jsx("div",{className:"text-info",children:"Loading…"}),renderError:e.jsx("button",{type:"button",className:"btn btn-outline-danger",onClick:()=>{},children:"Retry"}),children:a=>e.jsxs("div",{children:["Items:",(a==null?void 0:a.length)??0]})}),args:{isLoading:!1,isError:!1,data:[]}};var h,v,D;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <div style={{
    minHeight: 140
  }}>
      <DDataStateWrapper {...args}>
        {(data: unknown[]) => <div>
            Items:
            {data?.length ?? 0}
          </div>}
      </DDataStateWrapper>
    </div>,
  args: {
    isLoading: true,
    isError: false,
    data: undefined
  }
}`,...(D=(v=i.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var E,j,_;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <DDataStateWrapper {...args}>
      {(data: unknown[]) => <div>
          Items:
          {data?.length ?? 0}
        </div>}
    </DDataStateWrapper>,
  args: {
    isLoading: false,
    isError: true,
    data: undefined,
    onRetry: () => {}
  }
}`,...(_=(j=o.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var S,N,L;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <DDataStateWrapper {...args}>
      {(data: unknown[]) => <div>
          Items:
          {data?.length ?? 0}
        </div>}
    </DDataStateWrapper>,
  args: {
    isLoading: false,
    isError: false,
    data: []
  }
}`,...(L=(N=d.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var b,q,R;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <DBox className="p-3 border rounded">
      <DDataStateWrapper {...args} data={args.data as string[]}>
        {data => <ul className="m-0">
            {data.map(d => <li key={d}>{d}</li>)}
          </ul>}
      </DDataStateWrapper>
    </DBox>,
  args: {
    isLoading: false,
    isError: false,
    data: ['Alpha', 'Beta', 'Gamma']
  }
}`,...(R=(q=l.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var V,I,W;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <DDataStateWrapper {...args} renderEmpty={<div className="text-muted">Nothing here…</div>} renderLoading={<div className="text-info">Loading…</div>} renderError={<button type="button" className="btn btn-outline-danger" onClick={() => {/* retry */}}>Retry</button>}>
      {(data: unknown[]) => <div>
          Items:
          {data?.length ?? 0}
        </div>}
    </DDataStateWrapper>,
  args: {
    isLoading: false,
    isError: false,
    data: []
  }
}`,...(W=(I=c.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};const Y=["Loading","Error","Empty","Success","CustomRender"];export{c as CustomRender,d as Empty,o as Error,i as Loading,l as Success,Y as __namedExportsOrder,X as default};
