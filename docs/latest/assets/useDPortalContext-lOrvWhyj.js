import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-De1Sfuvg.js";import{M as c,U as s,c as r}from"./blocks-oHYiFMmU.js";import{D as l}from"./DButton-DirQMA9j.js";import{D as n}from"./DModal-C2LN4UpS.js";import{D as h,a as i}from"./DContext-ULBuRU4Q.js";import{D as x}from"./DAlert-BXC5CQP3.js";import"./iframe-BbP4EpNS.js";import"./preload-helper-Dp1pzeXC.js";import"./index-ot9Nx1sn.js";import"./index-Cnm-fICI.js";import"./index-DMl0VWOS.js";import"./DIcon-BTxBpgwN.js";import"./config-C3iYXcFk.js";import"./useMediaBreakpointUp-VYljbZXU.js";function p({payload:o}){const{closePortal:t}=i();return e.jsxs(n,{name:"info",centered:!0,staticBackdrop:!1,children:[e.jsx(n.Header,{onClose:t,showCloseButton:!0,children:e.jsx("h5",{className:"fw-bold",children:"Information"})}),e.jsx(n.Body,{className:"py-3 px-5",children:e.jsx("p",{children:o.message})}),e.jsx(n.Footer,{children:e.jsx(l,{text:"Close",className:"d-grid",onClick:()=>t()})})]})}function j(){const{openPortal:o}=i();return e.jsx(l,{text:"Open Portal",onClick:()=>o("info",{message:"Hello from useDPortalContext!"})})}function m(){return e.jsx(h,{portalName:"exampleDPortalContext",availablePortals:{info:p},children:e.jsx(j,{})})}function d(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Design System/Utils/Hooks/useDPortalContext"}),`
`,e.jsx(t.h1,{id:"usedportalcontext",children:"useDPortalContext"}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"https://img.shields.io/badge/Abstraction%20Component-4848b7",alt:"Shield Badge"})}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"useDPortalContext"}),` is the primary hook for managing portals — modals, offcanvas panels, and any other
overlay rendered outside the normal React tree. It provides a stack-based API so multiple portals can
be layered and closed in LIFO order.`]}),`
`,e.jsx("br",{}),`
`,e.jsx(s,{children:e.jsx(x,{color:"warning",children:e.jsx("span",{children:e.jsxs(t.p,{children:[e.jsx("code",{children:"useDPortalContext"}),` must be called inside a component tree that
is wrapped by `,e.jsx("code",{children:"DContextProvider"}),`. Using it outside of that tree
will throw an error at runtime.`]})})})}),`
`,e.jsx(t.h2,{id:"prerequisites",children:"Prerequisites"}),`
`,e.jsxs(t.p,{children:["Before calling ",e.jsx(t.code,{children:"useDPortalContext"}),", two things must be present in the component tree:"]}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"DContextProvider"})})," — registers the portal mount point and the available portal components."]}),`
`,e.jsxs(t.li,{children:["A ",e.jsx(t.strong,{children:"DOM element"})," with the ",e.jsx(t.code,{children:"id"})," matching ",e.jsx(t.code,{children:"portalName"})," — ",e.jsx(t.code,{children:"DContextProvider"})," creates this automatically."]}),`
`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{children:`DContextProvider  (portalName="appPortal", availablePortals={{ modal: MyModal }})
└── <YourApp>    ← useDPortalContext() → openPortal('modal', payload)
`})}),`
`,e.jsx(r,{code:`
import {
DContextProvider,
} from '@dynamic-framework/ui-react';

import { MyModal } from './MyModal';

import type { MyPayloads } from './types';

export function App() {
return (
  <DContextProvider<MyPayloads>
    portalName="appPortal"
    availablePortals={{
      modal: MyModal,
    }}
  >
    {/* your app content */}
  </DContextProvider>
);
}
`,language:"tsx",dark:!0}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(t.h3,{id:"return-value",children:"Return value"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Property"}),e.jsx(t.th,{children:"Type"}),e.jsx(t.th,{children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"openPortal"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"<K extends keyof T & string>(name: K, payload: T[K]) => void"})}),e.jsxs(t.td,{children:["Pushes a named portal onto the stack, rendering its registered component with the given payload. TypeScript correlates ",e.jsx(t.code,{children:"name"})," with the expected ",e.jsx(t.code,{children:"payload"})," shape."]})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"closePortal"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"() => void"})}),e.jsx(t.td,{children:"Pops the topmost portal off the stack, closing it."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"stack"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"PortalStackEntry<T>[]"})}),e.jsxs(t.td,{children:["Currently open portals, ordered from oldest (bottom) to newest (top). Each entry exposes ",e.jsx(t.code,{children:"name"})," and ",e.jsx(t.code,{children:"payload"})," — use ",e.jsx(t.code,{children:"stack.length"})," to check if any portal is open."]})]})]})]}),`
`,e.jsx(t.h3,{id:"portalpropsp",children:e.jsx(t.code,{children:"PortalProps<P>"})}),`
`,e.jsxs(t.p,{children:["Props received by every component registered in ",e.jsx(t.code,{children:"availablePortals"}),`. Use
`,e.jsx(t.code,{children:"PortalProps<Payloads['myPortal']>"})," to type a specific portal component."]}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Property"}),e.jsx(t.th,{children:"Type"}),e.jsx(t.th,{children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"name"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsxs(t.td,{children:["Portal identifier — matches the key used in ",e.jsx(t.code,{children:"openPortal"}),"."]})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"payload"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"P"})}),e.jsxs(t.td,{children:["Data passed via ",e.jsx(t.code,{children:"openPortal"}),"."]})]})]})]}),`
`,e.jsx(t.h3,{id:"portalcontextpropst",children:e.jsx(t.code,{children:"PortalContextProps<T>"})}),`
`,e.jsxs(t.p,{children:["Props consumed by ",e.jsx(t.code,{children:"DContextProvider"}),` to configure the portal system.
Consumers set these on `,e.jsx(t.code,{children:"DContextProvider"})," — never use ",e.jsx(t.code,{children:"DPortalContextProvider"})," directly."]}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Property"}),e.jsx(t.th,{children:"Type"}),e.jsx(t.th,{children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"portalName"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"DOM element id used as the portal mount point."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"availablePortals?"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"{ [K in keyof T]: FC<PortalProps<T[K]>> }"})}),e.jsxs(t.td,{children:["Map of portal name to the component that renders it. Optional on ",e.jsx(t.code,{children:"DContextProvider"}),", but calling ",e.jsx(t.code,{children:"openPortal"})," without a registered component for the given portal name will throw at runtime."]})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"children"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"ReactNode"})}),e.jsx(t.td,{children:"React children to render inside the context."})]})]})]}),`
`,e.jsx(t.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(r,{code:`
import { useDPortalContext } from '@dynamic-framework/ui-react';

import type { MyPayloads } from './types';

export function OpenModalButton() {
const { openPortal } = useDPortalContext<MyPayloads>();
return (
  <button onClick={() => openPortal('modal', { title: 'Hello' })}>
    Open Modal
  </button>
);
}
`,language:"tsx",dark:!0}),`
`,e.jsx(t.p,{children:"Closing a portal from inside the portal component:"}),`
`,e.jsx(r,{code:`
import { DModal, DButton, useDPortalContext } from '@dynamic-framework/ui-react';
import type { PortalProps } from '@dynamic-framework/ui-react';
import type { MyPayloads } from './types';

export function MyModal({ payload }: PortalProps<MyPayloads['modal']>) {
const { closePortal } = useDPortalContext();
return (
  <DModal name="modal">
    <DModal.Header onClose={closePortal} showCloseButton>
      <h5>{payload.title}</h5>
    </DModal.Header>
    <DModal.Body>Modal content</DModal.Body>
  </DModal>
);
}
`,language:"tsx",dark:!0}),`
`,e.jsx(t.h2,{id:"advanced-typing",children:"Advanced Typing"}),`
`,e.jsx(t.p,{children:`Providing the payload type map as a generic argument enables TypeScript to
enforce the payload shape for each portal name:`}),`
`,e.jsx(r,{code:`
// types.ts
export type AppPortalPayloads = {
confirm: { message: string };
userDetail: { userId: string };
};
`,language:"tsx",dark:!0}),`
`,e.jsx(r,{code:`
import { useDPortalContext } from '@dynamic-framework/ui-react';
import type { AppPortalPayloads } from './types';

// TypeScript will validate payload shapes:
const { openPortal } = useDPortalContext<AppPortalPayloads>();
openPortal('confirm', { message: 'Are you sure?' });      // ✓
openPortal('userDetail', { userId: 'abc-123' });          // ✓
openPortal('confirm', { userId: 'abc-123' });             // ✗ type error
`,language:"tsx",dark:!0}),`
`,e.jsx(t.h2,{id:"live-example",children:"Live Example"}),`
`,e.jsx(s,{children:e.jsx(m,{})}),`
`,e.jsx(t.h2,{id:"common-errors",children:"Common Errors"}),`
`,e.jsx(t.h3,{id:"usedportalcontext-was-used-outside-of-dportalcontextprovider",children:e.jsx(t.code,{children:"useDPortalContext was used outside of DPortalContextProvider"})}),`
`,e.jsxs(t.p,{children:["This error is thrown when ",e.jsx(t.code,{children:"useDPortalContext"})," is called outside a ",e.jsx(t.code,{children:"DContextProvider"}),` subtree.
Ensure your component is rendered inside a `,e.jsx(t.code,{children:"DContextProvider"}),":"]}),`
`,e.jsx(r,{code:`
import { useDPortalContext, DContextProvider } from '@dynamic-framework/ui-react';

// ✗ Wrong — hook called at the root, outside DContextProvider
export function App() {
const { openPortal } = useDPortalContext(); // throws!
return <DContextProvider>...</DContextProvider>;
}

// ✓ Correct — component that uses the hook is inside DContextProvider
export function App() {
return (
  <DContextProvider portalName="app" availablePortals={{}}>
    <MyComponent />  {/* useDPortalContext() is safe here */}
  </DContextProvider>
);
}
`,language:"tsx",dark:!0}),`
`,e.jsx(t.h3,{id:"portal-component-not-found",children:"Portal component not found"}),`
`,e.jsxs(t.p,{children:["If ",e.jsx(t.code,{children:"openPortal"})," is called with a name not registered in ",e.jsx(t.code,{children:"availablePortals"}),`, an error is thrown.
Make sure every portal name you pass to `,e.jsx(t.code,{children:"openPortal"})," has a matching entry in ",e.jsx(t.code,{children:"availablePortals"}),"."]}),`
`,e.jsx(t.h2,{id:"patterns",children:"Patterns"}),`
`,e.jsx(t.p,{children:"For full implementation patterns see:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"?path=/docs/design-system-patterns-modal--docs",children:"Design System/Patterns/Modal"})," — modal pattern with ",e.jsx(t.code,{children:"DModal"})]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"?path=/docs/design-system-patterns-offcanvas--docs",children:"Design System/Patterns/Offcanvas"})," — offcanvas pattern with ",e.jsx(t.code,{children:"DOffcanvas"})]}),`
`]})]})}function I(o={}){const{wrapper:t}={...a(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(d,{...o})}):d(o)}export{I as default};
