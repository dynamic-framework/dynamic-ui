import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./iframe-BMeNOU03.js";import{D as w}from"./DAlert-C1BpFHt-.js";import{D as c}from"./DButton-hbOpEc6v.js";import{D as E}from"./DCard-dj7JKffT.js";import"./preload-helper-Dp1pzeXC.js";import"./index-ehdBXeXN.js";import"./DIcon-tIPXWjmp.js";import"./config-C3iYXcFk.js";import"./useMediaBreakpointUp-BJNsKdi4.js";import"./DContext-6FeQK8nL.js";import"./index-yVdt6xC3.js";import"./index-Dqbu3ppb.js";const L=s.createContext(null),b={didCatch:!1,error:null};class Q extends s.Component{constructor(o){super(o),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=b}static getDerivedStateFromError(o){return{didCatch:!0,error:o}}resetErrorBoundary(...o){var t,n;const{error:a}=this.state;a!==null&&((n=(t=this.props).onReset)==null||n.call(t,{args:o,reason:"imperative-api"}),this.setState(b))}componentDidCatch(o,a){var t,n;(n=(t=this.props).onError)==null||n.call(t,o,a)}componentDidUpdate(o,a){var d,l;const{didCatch:t}=this.state,{resetKeys:n}=this.props;t&&a.error!==null&&X(o.resetKeys,n)&&((l=(d=this.props).onReset)==null||l.call(d,{next:n,prev:o.resetKeys,reason:"keys"}),this.setState(b))}render(){const{children:o,fallbackRender:a,FallbackComponent:t,fallback:n}=this.props,{didCatch:d,error:l}=this.state;let p=o;if(d){const u={error:l,resetErrorBoundary:this.resetErrorBoundary};if(typeof a=="function")p=a(u);else if(t)p=s.createElement(t,u);else if(n!==void 0)p=n;else throw l}return s.createElement(L.Provider,{value:{didCatch:d,error:l,resetErrorBoundary:this.resetErrorBoundary}},p)}}function X(r=[],o=[]){return r.length!==o.length||r.some((a,t)=>!Object.is(a,o[t]))}function Y(r){return r!==null&&typeof r=="object"&&"didCatch"in r&&typeof r.didCatch=="boolean"&&"error"in r&&"resetErrorBoundary"in r&&typeof r.resetErrorBoundary=="function"}function Z(r){if(!Y(r))throw new Error("ErrorBoundaryContext not found")}function k(){const r=s.useContext(L);Z(r);const{error:o,resetErrorBoundary:a}=r,[t,n]=s.useState({error:null,hasError:!1}),d=s.useMemo(()=>({error:o,resetBoundary:()=>{a(),n({error:null,hasError:!1})},showBoundary:l=>n({error:l,hasError:!0})}),[o,a]);if(t.hasError)throw t.error;return d}function C(r){switch(typeof r){case"object":{if(r!==null&&"message"in r&&typeof r.message=="string")return r.message;break}case"string":return r}}function v({resetErrorBoundary:r}){return e.jsx(w,{color:"danger",showClose:!1,children:e.jsxs("div",{className:"d-flex align-items-center gap-2",children:[e.jsx("span",{children:"An unexpected error occurred."}),e.jsx(c,{color:"secondary",variant:"outline",size:"sm",onClick:r,children:"Retry"})]})})}try{v.displayName="DefaultErrorBoundary",v.__docgenInfo={description:"",displayName:"DefaultErrorBoundary",props:{resetErrorBoundary:{defaultValue:null,description:"",name:"resetErrorBoundary",required:!0,type:{name:"(...args: unknown[]) => void"}}}}}catch{}function i({name:r,fallback:o,resetKeys:a,onReset:t,onError:n,children:d}){const l=s.useCallback((u,N)=>{console.error(`[DErrorBoundary${r?`:${r}`:""}]`,C(u),N),n==null||n(u,N)},[r,n]),p=s.useCallback(u=>o?o(u):e.jsx(v,{resetErrorBoundary:u.resetErrorBoundary}),[o]);return e.jsx(Q,{resetKeys:a,onReset:t,onError:l,fallbackRender:p,children:d})}try{i.displayName="DErrorBoundary",i.__docgenInfo={description:"",displayName:"DErrorBoundary",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string | undefined"}},fallback:{defaultValue:null,description:"",name:"fallback",required:!1,type:{name:"((props: FallbackProps) => ReactNode) | undefined"}},resetKeys:{defaultValue:null,description:"",name:"resetKeys",required:!1,type:{name:"unknown[] | undefined"}},onReset:{defaultValue:null,description:"",name:"onReset",required:!1,type:{name:"(() => void) | undefined"}},onError:{defaultValue:null,description:"",name:"onError",required:!1,type:{name:"((error: unknown, info: ErrorInfo) => void) | undefined"}}}}}catch{}try{k.displayName="useErrorBoundary",k.__docgenInfo={description:"Convenience hook for imperatively showing or dismissing error boundaries.\n\n⚠️ This hook must only be used within an `ErrorBoundary` subtree.",displayName:"useErrorBoundary",props:{}}}catch{}try{C.displayName="getErrorMessage",C.__docgenInfo={description:"",displayName:"getErrorMessage",props:{}}}catch{}const me={title:"Design System/Components/Error Boundary",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"Minimal wrapper over [react-error-boundary](https://www.npmjs.com/package/react-error-boundary) that centralizes error logging (via onError) and provides an accessible default fallback. Use name to tag logs, fallback to override the UI, and resetKeys/onReset to control recovery."}}},argTypes:{name:{control:"text",description:"Optional identifier to tag logs and distinguish boundaries.",table:{category:"Content"}},fallback:{control:!1,description:"Custom fallback renderer. If omitted, a default accessible alert is used.",table:{category:"Content"}},resetKeys:{control:!1,description:"Keys that, when changed, reset the boundary state.",table:{category:"Behavior"}},onReset:{action:"onReset",description:"Called when the boundary is reset (via resetKeys change or user action).",table:{category:"Events"}},onError:{action:"onError",description:"Called after internal logging when an error is captured.",table:{category:"Events"}}},decorators:[r=>e.jsx("div",{style:{height:180,width:350},children:e.jsx(r,{})})]};function m({explode:r}){if(r)throw new Error("Boom!");return e.jsx(E,{children:e.jsx(E.Body,{children:"Safe content"})})}const f={parameters:{docs:{description:{story:"Shows the default accessible fallback. Click “Trigger error” to simulate a rendering failure inside the boundary."},source:{code:`
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
        `}}},render:function(o){const[a,t]=s.useState(!1);return e.jsxs("div",{className:"d-flex flex-column gap-2",children:[e.jsx(c,{className:"me-auto",onClick:()=>t(!0),children:"Trigger error"}),e.jsx(i,{...o,children:e.jsx(m,{explode:a})})]})},args:{name:"Default"}},g={parameters:{docs:{description:{story:"Provides a custom fallback via the fallback prop. Useful to align the error UI with specific contexts."},source:{code:`
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
`}}},render:function(o){const[a,t]=s.useState(!1);return e.jsxs("div",{className:"d-flex flex-column gap-2",children:[e.jsx(c,{className:"me-auto",onClick:()=>t(!0),children:"Trigger error"}),e.jsx(i,{...o,fallback:()=>e.jsx(w,{color:"warning",children:e.jsx("p",{className:"m-0",children:"An error occurred! Using a custom fallback."})}),children:e.jsx(m,{explode:a})})]})},args:{name:"Custom"}},x={parameters:{docs:{description:{story:"Resets the boundary when resetKeys change. Use this to recover from errors after state changes (e.g., refreshing inputs)."},source:{code:`
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
`}}},render:function(o){const[a,t]=s.useState(0),[n,d]=s.useState(!1);return e.jsxs("div",{className:"d-flex flex-column gap-2",children:[e.jsxs("div",{className:"d-flex gap-2",children:[e.jsx(c,{onClick:()=>d(!0),children:"Trigger error"}),e.jsx(c,{color:"secondary",onClick:()=>t(l=>l+1),children:"Change reset key"})]}),e.jsx(i,{...o,resetKeys:[a],children:e.jsx(m,{explode:n})})]})},args:{name:"WithResetKeys"}},y={parameters:{docs:{description:{story:"Adds name to tag logs and onError to extend logging or integrate with monitoring. Click “Trigger error” to see the event in Actions."},source:{code:`
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
`}}},render:function(o){const[a,t]=s.useState(!1);return e.jsxs("div",{className:"d-flex flex-column gap-2",children:[e.jsx(c,{className:"me-auto",onClick:()=>t(!0),children:"Trigger error"}),e.jsx(i,{...o,onError:(n,d)=>{console.log({error:C(n),info:d})},name:"MyBoundary",children:e.jsx(m,{explode:a})})]})}},B={parameters:{docs:{description:{story:"Uses useErrorBoundary().showBoundary to surface an error without throwing, useful inside event handlers."},source:{code:`
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
`}}},render:function(o){function a(){const{showBoundary:t}=k();return e.jsx(c,{className:"me-auto",onClick:()=>t(new Error("Error from hook")),children:"Trigger error using hook"})}return e.jsx(i,{...o,name:"HookBoundary",children:e.jsxs("div",{className:"d-flex flex-column gap-2",children:[e.jsx(a,{}),e.jsx(E,{children:e.jsx(E.Body,{children:"Press the button to trigger an error without throwing."})})]})})}},h={parameters:{docs:{description:{story:"Combines the default fallback with onReset to perform custom cleanup when the boundary resets."},source:{code:`
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
`}}},render:function(o){const[a,t]=s.useState(!1);return e.jsxs("div",{className:"d-flex flex-column gap-2",children:[e.jsx(c,{className:"me-auto",onClick:()=>t(!0),children:"Trigger error"}),e.jsx(i,{...o,onReset:()=>t(!1),children:e.jsx(m,{explode:a})})]})},args:{name:"DefaultFallbackWithReset"}},D={parameters:{docs:{description:{story:"Combines the custom fallback with onReset to perform custom cleanup when the boundary resets."},source:{code:`
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
`}}},render:function(o){const[a,t]=s.useState(!1);return e.jsxs("div",{className:"d-flex flex-column gap-2",children:[e.jsx(c,{className:"me-auto",onClick:()=>t(!0),children:"Trigger error"}),e.jsx(i,{...o,onReset:()=>t(!1),fallback:({resetErrorBoundary:n})=>e.jsxs(w,{color:"warning",children:[e.jsx("p",{children:"An error occurred! Using a custom fallback."}),e.jsx(c,{variant:"outline",onClick:n,children:"Retry"})]}),children:e.jsx(m,{explode:a})})]})},args:{name:"CustomFallbackWithReset"}};var S,R,j;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(j=(R=f.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var T,_,A;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(A=(_=g.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var U,K,F;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(F=(K=x.parameters)==null?void 0:K.docs)==null?void 0:F.source}}};var V,M,W;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(W=(M=y.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var I,O,P;B.parameters={...B.parameters,docs:{...(I=B.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(P=(O=B.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var q,H,z;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(z=(H=h.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var $,G,J;D.parameters={...D.parameters,docs:{...($=D.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(J=(G=D.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const fe=["DefaultFallback","CustomFallback","WithResetKeys","WithNameAndOnError","UsingHookShowBoundary","DefaultFallbackAndOnReset","CustomFallbackAndOnReset"];export{g as CustomFallback,D as CustomFallbackAndOnReset,f as DefaultFallback,h as DefaultFallbackAndOnReset,B as UsingHookShowBoundary,y as WithNameAndOnError,x as WithResetKeys,fe as __namedExportsOrder,me as default};
