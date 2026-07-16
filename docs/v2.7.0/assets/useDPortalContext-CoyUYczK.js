import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-C6SlVEW6.js";import{M as c,U as s,c as r}from"./blocks-CG5owoJr.js";import{D as l}from"./DButton-k5jVOt40.js";import{D as n}from"./DModal-DQJnMGr4.js";import{D as h,a as i}from"./DContext-aUrSpq0p.js";import{D as x}from"./DAlert-DyShLHim.js";import"./iframe-vLNjGVop.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DFPG5GmN.js";import"./index-oOcxeWdd.js";import"./index-nyyuC_Uj.js";import"./DIcon-BaYjXWaB.js";import"./index-BPJnJB5S.js";import"./config-C3iYXcFk.js";import"./useMediaBreakpointUp-56XFbS_3.js";function p({payload:t}){const{closePortal:o}=i();return e.jsxs(n,{name:"info",centered:!0,staticBackdrop:!1,children:[e.jsx(n.Header,{onClose:o,showCloseButton:!0,children:e.jsx("h5",{className:"fw-bold",children:"Information"})}),e.jsx(n.Body,{className:"py-3 px-5",children:e.jsx("p",{children:t.message})}),e.jsx(n.Footer,{children:e.jsx(l,{text:"Close",className:"d-grid",onClick:()=>o()})})]})}function j(){const{openPortal:t}=i();return e.jsx(l,{text:"Open Portal",onClick:()=>t("info",{message:"Hello from useDPortalContext!"})})}function m(){return e.jsx(h,{portalName:"exampleDPortalContext",availablePortals:{info:p},children:e.jsx(j,{})})}function d(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Design System/Hooks/useDPortalContext"}),`
`,e.jsx(o.h1,{id:"usedportalcontext",children:"useDPortalContext"}),`
`,e.jsx(o.p,{children:e.jsx(o.img,{src:"https://img.shields.io/badge/Abstraction%20Component-4848b7",alt:"Shield Badge"})}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"useDPortalContext"}),` is the primary hook for managing portals — modals, offcanvas panels, and any other
overlay rendered outside the normal React tree. It provides a stack-based API so multiple portals can
be layered and closed in LIFO order.`]}),`
`,e.jsx("br",{}),`
`,e.jsx(s,{children:e.jsx(x,{color:"warning",children:e.jsx("span",{children:e.jsxs(o.p,{children:[e.jsx("code",{children:"useDPortalContext"}),` must be called inside a component tree that
is wrapped by `,e.jsx("code",{children:"DContextProvider"}),`. Using it outside of that tree
will throw an error at runtime.`]})})})}),`
`,e.jsx(o.h2,{id:"prerequisites",children:"Prerequisites"}),`
`,e.jsxs(o.p,{children:["Before calling ",e.jsx(o.code,{children:"useDPortalContext"}),", two things must be present in the component tree:"]}),`
`,e.jsxs(o.ol,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"DContextProvider"})})," — registers the portal mount point and the available portal components."]}),`
`,e.jsxs(o.li,{children:["A ",e.jsx(o.strong,{children:"DOM element"})," with the ",e.jsx(o.code,{children:"id"})," matching ",e.jsx(o.code,{children:"portalName"})," — ",e.jsx(o.code,{children:"DContextProvider"})," creates this automatically."]}),`
`]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{children:`DContextProvider  (portalName="appPortal", availablePortals={{ modal: MyModal }})
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
`,e.jsx(o.h2,{id:"api",children:"API"}),`
`,e.jsx(o.h3,{id:"return-value",children:"Return value"}),`
`,e.jsxs(o.table,{children:[e.jsx(o.thead,{children:e.jsxs(o.tr,{children:[e.jsx(o.th,{children:"Property"}),e.jsx(o.th,{children:"Type"}),e.jsx(o.th,{children:"Description"})]})}),e.jsxs(o.tbody,{children:[e.jsxs(o.tr,{children:[e.jsx(o.td,{children:e.jsx(o.code,{children:"openPortal"})}),e.jsx(o.td,{children:e.jsx(o.code,{children:"<K extends keyof T & string>(name: K, payload: T[K]) => void"})}),e.jsxs(o.td,{children:["Pushes a named portal onto the stack, rendering its registered component with the given payload. TypeScript correlates ",e.jsx(o.code,{children:"name"})," with the expected ",e.jsx(o.code,{children:"payload"})," shape."]})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:e.jsx(o.code,{children:"closePortal"})}),e.jsx(o.td,{children:e.jsx(o.code,{children:"() => void"})}),e.jsx(o.td,{children:"Pops the topmost portal off the stack, closing it."})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:e.jsx(o.code,{children:"stack"})}),e.jsx(o.td,{children:e.jsx(o.code,{children:"PortalStackEntry<T>[]"})}),e.jsxs(o.td,{children:["Currently open portals, ordered from oldest (bottom) to newest (top). Each entry exposes ",e.jsx(o.code,{children:"name"})," and ",e.jsx(o.code,{children:"payload"})," — use ",e.jsx(o.code,{children:"stack.length"})," to check if any portal is open."]})]})]})]}),`
`,e.jsx(o.h3,{id:"portalpropsp",children:e.jsx(o.code,{children:"PortalProps<P>"})}),`
`,e.jsxs(o.p,{children:["Props received by every component registered in ",e.jsx(o.code,{children:"availablePortals"}),`. Use
`,e.jsx(o.code,{children:"PortalProps<Payloads['myPortal']>"})," to type a specific portal component."]}),`
`,e.jsxs(o.table,{children:[e.jsx(o.thead,{children:e.jsxs(o.tr,{children:[e.jsx(o.th,{children:"Property"}),e.jsx(o.th,{children:"Type"}),e.jsx(o.th,{children:"Description"})]})}),e.jsxs(o.tbody,{children:[e.jsxs(o.tr,{children:[e.jsx(o.td,{children:e.jsx(o.code,{children:"name"})}),e.jsx(o.td,{children:e.jsx(o.code,{children:"string"})}),e.jsxs(o.td,{children:["Portal identifier — matches the key used in ",e.jsx(o.code,{children:"openPortal"}),"."]})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:e.jsx(o.code,{children:"payload"})}),e.jsx(o.td,{children:e.jsx(o.code,{children:"P"})}),e.jsxs(o.td,{children:["Data passed via ",e.jsx(o.code,{children:"openPortal"}),"."]})]})]})]}),`
`,e.jsx(o.h3,{id:"portalcontextpropst",children:e.jsx(o.code,{children:"PortalContextProps<T>"})}),`
`,e.jsxs(o.p,{children:["Props consumed by ",e.jsx(o.code,{children:"DContextProvider"}),` to configure the portal system.
Consumers set these on `,e.jsx(o.code,{children:"DContextProvider"})," — never use ",e.jsx(o.code,{children:"DPortalContextProvider"})," directly."]}),`
`,e.jsxs(o.table,{children:[e.jsx(o.thead,{children:e.jsxs(o.tr,{children:[e.jsx(o.th,{children:"Property"}),e.jsx(o.th,{children:"Type"}),e.jsx(o.th,{children:"Description"})]})}),e.jsxs(o.tbody,{children:[e.jsxs(o.tr,{children:[e.jsx(o.td,{children:e.jsx(o.code,{children:"portalName"})}),e.jsx(o.td,{children:e.jsx(o.code,{children:"string"})}),e.jsx(o.td,{children:"DOM element id used as the portal mount point."})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:e.jsx(o.code,{children:"availablePortals?"})}),e.jsx(o.td,{children:e.jsx(o.code,{children:"{ [K in keyof T]: FC<PortalProps<T[K]>> }"})}),e.jsxs(o.td,{children:["Map of portal name to the component that renders it. Optional on ",e.jsx(o.code,{children:"DContextProvider"}),", but calling ",e.jsx(o.code,{children:"openPortal"})," without a registered component for the given portal name will throw at runtime."]})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:e.jsx(o.code,{children:"children"})}),e.jsx(o.td,{children:e.jsx(o.code,{children:"ReactNode"})}),e.jsx(o.td,{children:"React children to render inside the context."})]})]})]}),`
`,e.jsx(o.h2,{id:"basic-usage",children:"Basic Usage"}),`
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
`,e.jsx(o.p,{children:"Closing a portal from inside the portal component:"}),`
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
`,e.jsx(o.h2,{id:"advanced-typing",children:"Advanced Typing"}),`
`,e.jsx(o.p,{children:`Providing the payload type map as a generic argument enables TypeScript to
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
`,e.jsx(o.h2,{id:"live-example",children:"Live Example"}),`
`,e.jsx(s,{children:e.jsx(m,{})}),`
`,e.jsx(o.h2,{id:"common-errors",children:"Common Errors"}),`
`,e.jsx(o.h3,{id:"usedportalcontext-was-used-outside-of-dportalcontextprovider",children:e.jsx(o.code,{children:"useDPortalContext was used outside of DPortalContextProvider"})}),`
`,e.jsxs(o.p,{children:["This error is thrown when ",e.jsx(o.code,{children:"useDPortalContext"})," is called outside a ",e.jsx(o.code,{children:"DContextProvider"}),` subtree.
Ensure your component is rendered inside a `,e.jsx(o.code,{children:"DContextProvider"}),":"]}),`
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
`,e.jsx(o.h3,{id:"portal-component-not-found",children:"Portal component not found"}),`
`,e.jsxs(o.p,{children:["If ",e.jsx(o.code,{children:"openPortal"})," is called with a name not registered in ",e.jsx(o.code,{children:"availablePortals"}),`, an error is thrown.
Make sure every portal name you pass to `,e.jsx(o.code,{children:"openPortal"})," has a matching entry in ",e.jsx(o.code,{children:"availablePortals"}),"."]}),`
`,e.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(o.p,{children:"For full component usage examples, see:"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.a,{href:"?path=/docs/design-system-components-modal-usage--docs",children:"Design System/Components/Modal/Usage"})," — modal usage with ",e.jsx(o.code,{children:"DModal"})]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.a,{href:"?path=/docs/design-system-components-offcanvas-usage--docs",children:"Design System/Components/Offcanvas/Usage"})," — offcanvas usage with ",e.jsx(o.code,{children:"DOffcanvas"})]}),`
`]})]})}function N(t={}){const{wrapper:o}={...a(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(d,{...t})}):d(t)}export{N as default};
