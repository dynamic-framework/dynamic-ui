import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-BOlGrI6L.js";import{D as S}from"./DAlert-ByoDv-PH.js";import{D as c}from"./DButton-CpkCVJRB.js";import{D as b}from"./DCard-BITLq3a4.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DowJ8Qf7.js";import"./DIcon-CTNbRGzm.js";import"./index-BPJnJB5S.js";import"./config-7dXXkQRG.js";import"./useMediaBreakpointUp-CBOESKxy.js";import"./DContext-BsbKwSe9.js";import"./index-B7vmrvBm.js";import"./index-1yCPQ3pT.js";const ee=d.createContext(null),v={didCatch:!1,error:null};class re extends d.Component{constructor(o){super(o),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=v}static getDerivedStateFromError(o){return{didCatch:!0,error:o}}resetErrorBoundary(...o){var t,n;const{error:a}=this.state;a!==null&&((n=(t=this.props).onReset)==null||n.call(t,{args:o,reason:"imperative-api"}),this.setState(v))}componentDidCatch(o,a){var t,n;(n=(t=this.props).onError)==null||n.call(t,o,a)}componentDidUpdate(o,a){var s,l;const{didCatch:t}=this.state,{resetKeys:n}=this.props;t&&a.error!==null&&oe(o.resetKeys,n)&&((l=(s=this.props).onReset)==null||l.call(s,{next:n,prev:o.resetKeys,reason:"keys"}),this.setState(v))}render(){const{children:o,fallbackRender:a,FallbackComponent:t,fallback:n}=this.props,{didCatch:s,error:l}=this.state;let p=o;if(s){const f={error:l,resetErrorBoundary:this.resetErrorBoundary};if(typeof a=="function")p=a(f);else if(t)p=d.createElement(t,f);else if(n!==void 0)p=n;else throw l}return d.createElement(ee.Provider,{value:{didCatch:s,error:l,resetErrorBoundary:this.resetErrorBoundary}},p)}}function oe(r=[],o=[]){return r.length!==o.length||r.some((a,t)=>!Object.is(a,o[t]))}function te(r){return r!==null&&typeof r=="object"&&"didCatch"in r&&typeof r.didCatch=="boolean"&&"error"in r&&"resetErrorBoundary"in r&&typeof r.resetErrorBoundary=="function"}function ae(r){if(!te(r))throw new Error("ErrorBoundaryContext not found")}function w(){const r=d.useContext(ee);ae(r);const{error:o,resetErrorBoundary:a}=r,[t,n]=d.useState({error:null,hasError:!1}),s=d.useMemo(()=>({error:o,resetBoundary:()=>{a(),n({error:null,hasError:!1})},showBoundary:l=>n({error:l,hasError:!0})}),[o,a]);if(t.hasError)throw t.error;return s}function k(r){switch(typeof r){case"object":{if(r!==null&&"message"in r&&typeof r.message=="string")return r.message;break}case"string":return r}}function N({resetErrorBoundary:r,message:o="An unexpected error occurred.",retryMessage:a="Retry"}){return e.jsx(S,{color:"danger",showClose:!1,children:e.jsxs("div",{className:"d-error-boundary-content",children:[e.jsx("span",{children:o}),e.jsx(c,{color:"secondary",variant:"outline",size:"sm",onClick:r,children:a})]})})}try{N.displayName="DefaultErrorBoundary",N.__docgenInfo={description:"",displayName:"DefaultErrorBoundary",props:{resetErrorBoundary:{defaultValue:null,description:"",name:"resetErrorBoundary",required:!0,type:{name:"(...args: unknown[]) => void"}},message:{defaultValue:{value:"An unexpected error occurred."},description:"",name:"message",required:!1,type:{name:"string | undefined"}},retryMessage:{defaultValue:{value:"Retry"},description:"",name:"retryMessage",required:!1,type:{name:"string | undefined"}}}}}catch{}function i({name:r,fallback:o,resetKeys:a,onReset:t,onError:n,messages:s,children:l}){const p=d.useCallback((m,R)=>{console.error(`[DErrorBoundary${r?`:${r}`:""}]`,k(m),R),n==null||n(m,R)},[r,n]),f=d.useCallback(m=>o?o(m):e.jsx(N,{resetErrorBoundary:m.resetErrorBoundary,message:s==null?void 0:s.error,retryMessage:s==null?void 0:s.retry}),[o,s]);return e.jsx(re,{resetKeys:a,onReset:t,onError:p,fallbackRender:f,children:l})}try{i.displayName="DErrorBoundary",i.__docgenInfo={description:"",displayName:"DErrorBoundary",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string | undefined"}},fallback:{defaultValue:null,description:"",name:"fallback",required:!1,type:{name:"((props: FallbackProps) => ReactNode) | undefined"}},resetKeys:{defaultValue:null,description:"",name:"resetKeys",required:!1,type:{name:"unknown[] | undefined"}},onReset:{defaultValue:null,description:"",name:"onReset",required:!1,type:{name:"(() => void) | undefined"}},onError:{defaultValue:null,description:"",name:"onError",required:!1,type:{name:"((error: unknown, info: ErrorInfo) => void) | undefined"}},messages:{defaultValue:null,description:"Texts of the default fallback. Ignored when `fallback` is provided.",name:"messages",required:!1,type:{name:"{ error?: string | undefined; retry?: string | undefined; } | undefined"}}}}}catch{}try{w.displayName="useErrorBoundary",w.__docgenInfo={description:"Convenience hook for imperatively showing or dismissing error boundaries.\n\n⚠️ This hook must only be used within an `ErrorBoundary` subtree.",displayName:"useErrorBoundary",props:{}}}catch{}try{k.displayName="getErrorMessage",k.__docgenInfo={description:"",displayName:"getErrorMessage",props:{}}}catch{}const he={title:"Design System/Components/Error Boundary",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"Minimal wrapper over [react-error-boundary](https://www.npmjs.com/package/react-error-boundary) that centralizes error logging (via onError) and provides an accessible default fallback. Use name to tag logs, fallback to override the UI, and resetKeys/onReset to control recovery."}}},argTypes:{name:{control:"text",description:"Optional identifier to tag logs and distinguish boundaries.",table:{category:"Content"}},fallback:{control:!1,description:"Custom fallback renderer. If omitted, a default accessible alert is used.",table:{category:"Content"}},messages:{control:"object",description:"Texts of the default fallback: `error` and `retry`. Ignored when `fallback` is provided.",table:{category:"Content"}},resetKeys:{control:!1,description:"Keys that, when changed, reset the boundary state.",table:{category:"Behavior"}},onReset:{action:"onReset",description:"Called when the boundary is reset (via resetKeys change or user action).",table:{category:"Events"}},onError:{action:"onError",description:"Called after internal logging when an error is captured.",table:{category:"Events"}}},decorators:[r=>e.jsx("div",{style:{height:180,width:350},children:e.jsx(r,{})})]};function u({explode:r}){if(r)throw new Error("Boom!");return e.jsx(b,{children:e.jsx(b.Body,{children:"Safe content"})})}const g={parameters:{docs:{description:{story:"Shows the default accessible fallback. Click “Trigger error” to simulate a rendering failure inside the boundary."},source:{code:`
function Bomb({ explode }: { explode: boolean }) {
  if (explode) throw new Error('Boom!');
  return (
    <DCard>
      <DCard.Body>
        Safe content
      </DCard.Body>
    </DCard>
  );
}

const [explode, setExplode] = useState(false);
return (
  <div className="d-flex flex-column gap-2">
    <DButton
      className="me-auto"
      onClick={() => setExplode(true)}
    >
      Trigger error
    </DButton>
    <DErrorBoundary>
      <Bomb explode={explode} />
    </DErrorBoundary>
  </div>
);
        `}}},render:function(o){const[a,t]=d.useState(!1);return e.jsxs("div",{className:"d-flex flex-column gap-2",children:[e.jsx(c,{className:"me-auto",onClick:()=>t(!0),children:"Trigger error"}),e.jsx(i,{...o,children:e.jsx(u,{explode:a})})]})},args:{name:"Default"}},x={parameters:{docs:{description:{story:"Keeps the default fallback and only replaces its texts with messages."},source:{code:`
const [explode, setExplode] = useState(false);
return (
  <div className="d-flex flex-column gap-2">
    <DButton
      className="me-auto"
      onClick={() => setExplode(true)}
    >
      Trigger error
    </DButton>
    <DErrorBoundary
      messages={{ error: 'Something went wrong loading this section.', retry: 'Try again' }}
    >
      <Bomb explode={explode} />
    </DErrorBoundary>
  </div>
);
        `}}},render:function(o){const[a,t]=d.useState(!1);return e.jsxs("div",{className:"d-flex flex-column gap-2",children:[e.jsx(c,{className:"me-auto",onClick:()=>t(!0),children:"Trigger error"}),e.jsx(i,{...o,children:e.jsx(u,{explode:a})})]})},args:{name:"Messages",messages:{error:"Something went wrong loading this section.",retry:"Try again"}}},y={parameters:{docs:{description:{story:"Provides a custom fallback via the fallback prop. Useful to align the error UI with specific contexts."},source:{code:`
function Bomb({ explode }: { explode: boolean }) {
  if (explode) throw new Error('Boom!');
  return (
    <DCard>
      <DCard.Body>
        Safe content
      </DCard.Body>
    </DCard>
  );
}

const [explode, setExplode] = useState(false);
return (
  <div className="d-flex flex-column gap-2">
    <DButton
      className="me-auto"
      onClick={() => setExplode(true)}
    >
      Trigger error
    </DButton>
    <DErrorBoundary
      fallback={() => (
        <DAlert color="warning">
          <p className="m-0">
            An error occurred! Using a custom fallback.
          </p>
        </DAlert>
      )}
    >
      <Bomb explode={explode} />
    </DErrorBoundary>
  </div>
);
`}}},render:function(o){const[a,t]=d.useState(!1);return e.jsxs("div",{className:"d-flex flex-column gap-2",children:[e.jsx(c,{className:"me-auto",onClick:()=>t(!0),children:"Trigger error"}),e.jsx(i,{...o,fallback:()=>e.jsx(S,{color:"warning",children:e.jsx("p",{className:"m-0",children:"An error occurred! Using a custom fallback."})}),children:e.jsx(u,{explode:a})})]})},args:{name:"Custom"}},B={parameters:{docs:{description:{story:"Resets the boundary when resetKeys change. Use this to recover from errors after state changes (e.g., refreshing inputs)."},source:{code:`
function Bomb({ explode }: { explode: boolean }) {
  if (explode) throw new Error('Boom!');
  return (
    <DCard>
      <DCard.Body>
        Safe content
      </DCard.Body>
    </DCard>
  );
}

const [version, setVersion] = useState(0);
const [explode, setExplode] = useState(false);
return (
  <div className="d-flex flex-column gap-2">
    <div className="d-flex gap-2">
      <DButton
        onClick={() => setExplode(true)}
      >
        Trigger error
      </DButton>
      <DButton
        color="secondary"
        onClick={() => setVersion((v) => v + 1)}
      >
        Change reset key
      </DButton>
    </div>
    <DErrorBoundary
      resetKeys={[version]}
    >
      <Bomb explode={explode} />
    </DErrorBoundary>
  </div>
);
`}}},render:function(o){const[a,t]=d.useState(0),[n,s]=d.useState(!1);return e.jsxs("div",{className:"d-flex flex-column gap-2",children:[e.jsxs("div",{className:"d-flex gap-2",children:[e.jsx(c,{onClick:()=>s(!0),children:"Trigger error"}),e.jsx(c,{color:"secondary",onClick:()=>t(l=>l+1),children:"Change reset key"})]}),e.jsx(i,{...o,resetKeys:[a],children:e.jsx(u,{explode:n})})]})},args:{name:"WithResetKeys"}},h={parameters:{docs:{description:{story:"Adds name to tag logs and onError to extend logging or integrate with monitoring. Click “Trigger error” to see the event in Actions."},source:{code:`
function Bomb({ explode }: { explode: boolean }) {
  if (explode) throw new Error('Boom!');
  return (
    <DCard>
      <DCard.Body>
        Safe content
      </DCard.Body>
    </DCard>
  );
}

const [explode, setExplode] = useState(false);
return (
  <div className="d-flex flex-column gap-2">
    <DButton
      className="me-auto"
      onClick={() => setExplode(true)}
    >
      Trigger error
    </DButton>
    <DErrorBoundary
      onError={(error, info) => {
        console.log({ error: getErrorMessage(error), info });
      }}
      name="MyBoundary"
    >
      <Bomb explode={explode} />
    </DErrorBoundary>
  </div>
);
`}}},render:function(o){const[a,t]=d.useState(!1);return e.jsxs("div",{className:"d-flex flex-column gap-2",children:[e.jsx(c,{className:"me-auto",onClick:()=>t(!0),children:"Trigger error"}),e.jsx(i,{...o,onError:(n,s)=>{console.log({error:k(n),info:s})},name:"MyBoundary",children:e.jsx(u,{explode:a})})]})}},D={parameters:{docs:{description:{story:"Uses useErrorBoundary().showBoundary to surface an error without throwing, useful inside event handlers."},source:{code:`
function ChildTrigger() {
  const { showBoundary } = useErrorBoundary();
  return (
    <DButton
      className="me-auto"
      onClick={() => showBoundary(new Error('Error from hook'))}
    >
      Trigger error using hook
    </DButton>
  );
}

return (
  <DErrorBoundary
    name="HookBoundary"
  >
    <div className="d-flex flex-column gap-2">
      <ChildTrigger />
      <DCard>
        <DCard.Body>
          Press the button to trigger an error without throwing.
        </DCard.Body>
      </DCard>
    </div>
  </DErrorBoundary>
);
`}}},render:function(o){function a(){const{showBoundary:t}=w();return e.jsx(c,{className:"me-auto",onClick:()=>t(new Error("Error from hook")),children:"Trigger error using hook"})}return e.jsx(i,{...o,name:"HookBoundary",children:e.jsxs("div",{className:"d-flex flex-column gap-2",children:[e.jsx(a,{}),e.jsx(b,{children:e.jsx(b.Body,{children:"Press the button to trigger an error without throwing."})})]})})}},E={parameters:{docs:{description:{story:"Combines the default fallback with onReset to perform custom cleanup when the boundary resets."},source:{code:`
function Bomb({ explode }: { explode: boolean }) {
  if (explode) throw new Error('Boom!');
  return (
    <DCard>
      <DCard.Body>
        Safe content
      </DCard.Body>
    </DCard>
  );
}

const [explode, setExplode] = useState(false);
return (
  <div className="d-flex flex-column gap-2">
    <DButton
      className="me-auto"
      onClick={() => setExplode(true)}
    >
      Trigger error
    </DButton>
    <DErrorBoundary
      onReset={() => setExplode(false)}
    >
      <Bomb explode={explode} />
    </DErrorBoundary>
  </div>
);
`}}},render:function(o){const[a,t]=d.useState(!1);return e.jsxs("div",{className:"d-flex flex-column gap-2",children:[e.jsx(c,{className:"me-auto",onClick:()=>t(!0),children:"Trigger error"}),e.jsx(i,{...o,onReset:()=>t(!1),children:e.jsx(u,{explode:a})})]})},args:{name:"DefaultFallbackWithReset"}},C={parameters:{docs:{description:{story:"Combines the custom fallback with onReset to perform custom cleanup when the boundary resets."},source:{code:`
function Bomb({ explode }: { explode: boolean }) {
  if (explode) throw new Error('Boom!');
  return (
    <DCard>
      <DCard.Body>
        Safe content
      </DCard.Body>
    </DCard>
  );
}

const [explode, setExplode] = useState(false);
return (
  <div className="d-flex flex-column gap-2">
    <DButton
      
      className="me-auto"
      onClick={() => setExplode(true)}
    >
      Trigger error
    </DButton>
    <DErrorBoundary
      onReset={() => setExplode(false)}
      fallback={({ resetErrorBoundary }) => (
        <DAlert color="warning">
          <p>
            An error occurred! Using a custom fallback.
          </p>
          <DButton
            variant="outline"
            onClick={resetErrorBoundary}
          >
            Retry
          </DButton>
        </DAlert>
      )}
    >
      <Bomb explode={explode} />
    </DErrorBoundary>
  </div>
);
`}}},render:function(o){const[a,t]=d.useState(!1);return e.jsxs("div",{className:"d-flex flex-column gap-2",children:[e.jsx(c,{className:"me-auto",onClick:()=>t(!0),children:"Trigger error"}),e.jsx(i,{...o,onReset:()=>t(!1),fallback:({resetErrorBoundary:n})=>e.jsxs(S,{color:"warning",children:[e.jsx("p",{children:"An error occurred! Using a custom fallback."}),e.jsx(c,{variant:"outline",onClick:n,children:"Retry"})]}),children:e.jsx(u,{explode:a})})]})},args:{name:"CustomFallbackWithReset"}};var j,T,A;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Shows the default accessible fallback. Click “Trigger error” to simulate a rendering failure inside the boundary.'
      },
      source: {
        code: \`
function Bomb({ explode }: { explode: boolean }) {
  if (explode) throw new Error('Boom!');
  return (
    <DCard>
      <DCard.Body>
        Safe content
      </DCard.Body>
    </DCard>
  );
}

const [explode, setExplode] = useState(false);
return (
  <div className="d-flex flex-column gap-2">
    <DButton
      className="me-auto"
      onClick={() => setExplode(true)}
    >
      Trigger error
    </DButton>
    <DErrorBoundary>
      <Bomb explode={explode} />
    </DErrorBoundary>
  </div>
);
        \`
      }
    }
  },
  render: function Render(args) {
    const [explode, setExplode] = useState(false);
    return <div className="d-flex flex-column gap-2">
        <DButton className="me-auto" onClick={() => setExplode(true)}>
          Trigger error
        </DButton>
        <DErrorBoundary {...args}>
          <Bomb explode={explode} />
        </DErrorBoundary>
      </div>;
  },
  args: {
    name: 'Default'
  }
}`,...(A=(T=g.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var _,K,U;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Keeps the default fallback and only replaces its texts with messages.'
      },
      source: {
        code: \`
const [explode, setExplode] = useState(false);
return (
  <div className="d-flex flex-column gap-2">
    <DButton
      className="me-auto"
      onClick={() => setExplode(true)}
    >
      Trigger error
    </DButton>
    <DErrorBoundary
      messages={{ error: 'Something went wrong loading this section.', retry: 'Try again' }}
    >
      <Bomb explode={explode} />
    </DErrorBoundary>
  </div>
);
        \`
      }
    }
  },
  render: function Render(args) {
    const [explode, setExplode] = useState(false);
    return <div className="d-flex flex-column gap-2">
        <DButton className="me-auto" onClick={() => setExplode(true)}>
          Trigger error
        </DButton>
        <DErrorBoundary {...args}>
          <Bomb explode={explode} />
        </DErrorBoundary>
      </div>;
  },
  args: {
    name: 'Messages',
    messages: {
      error: 'Something went wrong loading this section.',
      retry: 'Try again'
    }
  }
}`,...(U=(K=x.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var F,M,V;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Provides a custom fallback via the fallback prop. Useful to align the error UI with specific contexts.'
      },
      source: {
        code: \`
function Bomb({ explode }: { explode: boolean }) {
  if (explode) throw new Error('Boom!');
  return (
    <DCard>
      <DCard.Body>
        Safe content
      </DCard.Body>
    </DCard>
  );
}

const [explode, setExplode] = useState(false);
return (
  <div className="d-flex flex-column gap-2">
    <DButton
      className="me-auto"
      onClick={() => setExplode(true)}
    >
      Trigger error
    </DButton>
    <DErrorBoundary
      fallback={() => (
        <DAlert color="warning">
          <p className="m-0">
            An error occurred! Using a custom fallback.
          </p>
        </DAlert>
      )}
    >
      <Bomb explode={explode} />
    </DErrorBoundary>
  </div>
);
\`
      }
    }
  },
  render: function Render(args) {
    const [explode, setExplode] = useState(false);
    return <div className="d-flex flex-column gap-2">
        <DButton className="me-auto" onClick={() => setExplode(true)}>
          Trigger error
        </DButton>
        <DErrorBoundary {...args} fallback={() => <DAlert color="warning">
              <p className="m-0">
                An error occurred! Using a custom fallback.
              </p>
            </DAlert>}>
          <Bomb explode={explode} />
        </DErrorBoundary>
      </div>;
  },
  args: {
    name: 'Custom'
  }
}`,...(V=(M=y.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var W,I,q;B.parameters={...B.parameters,docs:{...(W=B.parameters)==null?void 0:W.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Resets the boundary when resetKeys change. Use this to recover from errors after state changes (e.g., refreshing inputs).'
      },
      source: {
        code: \`
function Bomb({ explode }: { explode: boolean }) {
  if (explode) throw new Error('Boom!');
  return (
    <DCard>
      <DCard.Body>
        Safe content
      </DCard.Body>
    </DCard>
  );
}

const [version, setVersion] = useState(0);
const [explode, setExplode] = useState(false);
return (
  <div className="d-flex flex-column gap-2">
    <div className="d-flex gap-2">
      <DButton
        onClick={() => setExplode(true)}
      >
        Trigger error
      </DButton>
      <DButton
        color="secondary"
        onClick={() => setVersion((v) => v + 1)}
      >
        Change reset key
      </DButton>
    </div>
    <DErrorBoundary
      resetKeys={[version]}
    >
      <Bomb explode={explode} />
    </DErrorBoundary>
  </div>
);
\`
      }
    }
  },
  render: function Render(args) {
    const [version, setVersion] = useState(0);
    const [explode, setExplode] = useState(false);
    return <div className="d-flex flex-column gap-2">
        <div className="d-flex gap-2">
          <DButton onClick={() => setExplode(true)}>
            Trigger error
          </DButton>
          <DButton color="secondary" onClick={() => setVersion(v => v + 1)}>
            Change reset key
          </DButton>
        </div>
        <DErrorBoundary {...args} resetKeys={[version]}>
          <Bomb explode={explode} />
        </DErrorBoundary>
      </div>;
  },
  args: {
    name: 'WithResetKeys'
  }
}`,...(q=(I=B.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var O,P,H;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Adds name to tag logs and onError to extend logging or integrate with monitoring. Click “Trigger error” to see the event in Actions.'
      },
      source: {
        code: \`
function Bomb({ explode }: { explode: boolean }) {
  if (explode) throw new Error('Boom!');
  return (
    <DCard>
      <DCard.Body>
        Safe content
      </DCard.Body>
    </DCard>
  );
}

const [explode, setExplode] = useState(false);
return (
  <div className="d-flex flex-column gap-2">
    <DButton
      className="me-auto"
      onClick={() => setExplode(true)}
    >
      Trigger error
    </DButton>
    <DErrorBoundary
      onError={(error, info) => {
        console.log({ error: getErrorMessage(error), info });
      }}
      name="MyBoundary"
    >
      <Bomb explode={explode} />
    </DErrorBoundary>
  </div>
);
\`
      }
    }
  },
  render: function Render(args) {
    const [explode, setExplode] = useState(false);
    return <div className="d-flex flex-column gap-2">
        <DButton className="me-auto" onClick={() => setExplode(true)}>
          Trigger error
        </DButton>
        <DErrorBoundary {...args} onError={(error, info) => {
        console.log({
          error: getErrorMessage(error),
          info
        });
      }} name="MyBoundary">
          <Bomb explode={explode} />
        </DErrorBoundary>
      </div>;
  }
}`,...(H=(P=h.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var z,$,G;D.parameters={...D.parameters,docs:{...(z=D.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Uses useErrorBoundary().showBoundary to surface an error without throwing, useful inside event handlers.'
      },
      source: {
        code: \`
function ChildTrigger() {
  const { showBoundary } = useErrorBoundary();
  return (
    <DButton
      className="me-auto"
      onClick={() => showBoundary(new Error('Error from hook'))}
    >
      Trigger error using hook
    </DButton>
  );
}

return (
  <DErrorBoundary
    name="HookBoundary"
  >
    <div className="d-flex flex-column gap-2">
      <ChildTrigger />
      <DCard>
        <DCard.Body>
          Press the button to trigger an error without throwing.
        </DCard.Body>
      </DCard>
    </div>
  </DErrorBoundary>
);
\`
      }
    }
  },
  render: function Render(args) {
    function ChildTrigger() {
      const {
        showBoundary
      } = useErrorBoundary();
      return <DButton className="me-auto" onClick={() => showBoundary(new Error('Error from hook'))}>
          Trigger error using hook
        </DButton>;
    }
    return <DErrorBoundary {...args} name="HookBoundary">
        <div className="d-flex flex-column gap-2">
          <ChildTrigger />
          <DCard>
            <DCard.Body>
              Press the button to trigger an error without throwing.
            </DCard.Body>
          </DCard>
        </div>
      </DErrorBoundary>;
  }
}`,...(G=($=D.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var J,L,Q;E.parameters={...E.parameters,docs:{...(J=E.parameters)==null?void 0:J.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Combines the default fallback with onReset to perform custom cleanup when the boundary resets.'
      },
      source: {
        code: \`
function Bomb({ explode }: { explode: boolean }) {
  if (explode) throw new Error('Boom!');
  return (
    <DCard>
      <DCard.Body>
        Safe content
      </DCard.Body>
    </DCard>
  );
}

const [explode, setExplode] = useState(false);
return (
  <div className="d-flex flex-column gap-2">
    <DButton
      className="me-auto"
      onClick={() => setExplode(true)}
    >
      Trigger error
    </DButton>
    <DErrorBoundary
      onReset={() => setExplode(false)}
    >
      <Bomb explode={explode} />
    </DErrorBoundary>
  </div>
);
\`
      }
    }
  },
  render: function Render(args) {
    const [explode, setExplode] = useState(false);
    return <div className="d-flex flex-column gap-2">
        <DButton className="me-auto" onClick={() => setExplode(true)}>
          Trigger error
        </DButton>
        <DErrorBoundary {...args} onReset={() => setExplode(false)}>
          <Bomb explode={explode} />
        </DErrorBoundary>
      </div>;
  },
  args: {
    name: 'DefaultFallbackWithReset'
  }
}`,...(Q=(L=E.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};var X,Y,Z;C.parameters={...C.parameters,docs:{...(X=C.parameters)==null?void 0:X.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Combines the custom fallback with onReset to perform custom cleanup when the boundary resets.'
      },
      source: {
        code: \`
function Bomb({ explode }: { explode: boolean }) {
  if (explode) throw new Error('Boom!');
  return (
    <DCard>
      <DCard.Body>
        Safe content
      </DCard.Body>
    </DCard>
  );
}

const [explode, setExplode] = useState(false);
return (
  <div className="d-flex flex-column gap-2">
    <DButton
      
      className="me-auto"
      onClick={() => setExplode(true)}
    >
      Trigger error
    </DButton>
    <DErrorBoundary
      onReset={() => setExplode(false)}
      fallback={({ resetErrorBoundary }) => (
        <DAlert color="warning">
          <p>
            An error occurred! Using a custom fallback.
          </p>
          <DButton
            variant="outline"
            onClick={resetErrorBoundary}
          >
            Retry
          </DButton>
        </DAlert>
      )}
    >
      <Bomb explode={explode} />
    </DErrorBoundary>
  </div>
);
\`
      }
    }
  },
  render: function Render(args) {
    const [explode, setExplode] = useState(false);
    return <div className="d-flex flex-column gap-2">
        <DButton className="me-auto" onClick={() => setExplode(true)}>
          Trigger error
        </DButton>
        <DErrorBoundary {...args} onReset={() => setExplode(false)} fallback={({
        resetErrorBoundary
      }) => <DAlert color="warning">
              <p>
                An error occurred! Using a custom fallback.
              </p>
              <DButton variant="outline" onClick={resetErrorBoundary}>
                Retry
              </DButton>
            </DAlert>}>
          <Bomb explode={explode} />
        </DErrorBoundary>
      </div>;
  },
  args: {
    name: 'CustomFallbackWithReset'
  }
}`,...(Z=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const De=["DefaultFallback","DefaultFallbackWithMessages","CustomFallback","WithResetKeys","WithNameAndOnError","UsingHookShowBoundary","DefaultFallbackAndOnReset","CustomFallbackAndOnReset"];export{y as CustomFallback,C as CustomFallbackAndOnReset,g as DefaultFallback,E as DefaultFallbackAndOnReset,x as DefaultFallbackWithMessages,D as UsingHookShowBoundary,h as WithNameAndOnError,B as WithResetKeys,De as __namedExportsOrder,he as default};
