import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-C6SlVEW6.js";import{M as f,c as n,U as i}from"./blocks-CG5owoJr.js";import{D as t}from"./DButton-k5jVOt40.js";import{D as s}from"./DOffcanvas-DVZ4A-eL.js";import{D as d,a as l}from"./DContext-aUrSpq0p.js";import"./iframe-vLNjGVop.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DFPG5GmN.js";import"./index-oOcxeWdd.js";import"./index-nyyuC_Uj.js";import"./DIcon-BaYjXWaB.js";import"./index-BPJnJB5S.js";import"./config-C3iYXcFk.js";import"./useMediaBreakpointUp-56XFbS_3.js";function p({payload:o}){const{closePortal:a}=l();return e.jsxs(s,{name:"example",staticBackdrop:!1,scrollable:!1,openFrom:"end",children:[e.jsx(s.Header,{onClose:a,showCloseButton:!0,children:e.jsx("h5",{className:"fw-bold",children:"Advanced filters"})}),e.jsxs(s.Body,{children:[e.jsx("p",{children:"Offcanvas body"}),e.jsx("small",{children:o.description})]}),e.jsxs(s.Footer,{children:[e.jsx(t,{text:"cancel",color:"secondary",variant:"outline",className:"d-grid",onClick:()=>a()}),e.jsx(t,{text:"ok",className:"d-grid"})]})]})}function x(){const{openPortal:o}=l();return e.jsx(t,{text:"Open Offcanvas",onClick:()=>o("example",{description:"from offcanvas payload"})})}function m(){return e.jsx(d,{portalName:"examplePortal",availablePortals:{example:p},children:e.jsx(x,{})})}function r(o){const a={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",...c(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"offcanvas",children:"Offcanvas"}),`
`,e.jsxs(a.p,{children:["To achieve the behavior of an offcanvas it is necessary to use the ",e.jsx(a.code,{children:"DContextProvider"})," and the ",e.jsx(a.code,{children:"useDPortalContext"}),` hook,
however, it is possible to create an inline offcanvas simply using `,e.jsx(a.code,{children:"DOffcanvas"})]}),`
`,e.jsxs(a.p,{children:["This part of the documentation talks about ",e.jsx(a.code,{children:"DOffcanvas"})," and directly covers its behavior."]}),`
`,e.jsxs(a.blockquote,{children:[`
`,e.jsx(a.p,{children:"To achieve inline use of an offcanvas, review the offcanvas topic in components."}),`
`]}),`
`,e.jsx(f,{title:"Design System/Components/Offcanvas/Usage"}),`
`,e.jsxs(a.h2,{id:"offcanvas-types-typests",children:["Offcanvas Types ",e.jsx(a.code,{children:"types.ts"})]}),`
`,e.jsx(a.p,{children:`Type to define the payload of all the offcanvas, its structure is an object literal
where the key is used for the name of the offcanvas and value for the payload.`}),`
`,e.jsx(n,{code:`
export type PortalPayloads = {
example: {
  description: string;
};
};
  `,language:"tsx",dark:!0}),`
`,e.jsxs(a.h2,{id:"offcanvas-definition-exampleoffcanvastsx",children:["Offcanvas Definition ",e.jsx(a.code,{children:"ExampleOffcanvas.tsx"})]}),`
`,e.jsx(n,{code:`
import {
DOffcanvas,
DButton,
} from '@dynamic-framework/ui-react';

import type {
PortalProps,
} from '@dynamic-framework/ui-react';

import type { OffcanvasPayloads } from './types';

export function ExampleOffcanvas({ payload }: PortalProps<OffcanvasPayloads['example']>) {
const { closePortal } = useDPortalContext();
return (
  <DOffcanvas
    name="example"
    staticBackdrop={false}
    scrollable={false}
    openFrom="end"
  >
    <DOffcanvas.Header onClose={closePortal} showCloseButton>
      <h5 className="fw-bold">Advanced filters</h5>
    </DOffcanvas.Header>
    <DOffcanvas.Body>
      <p>Offcanvas body</p>
      <small>{payload.description}</small>
    </DOffcanvas.Body>
    <DOffcanvas.Footer>
      <DButton
        text="cancel"
        color="secondary"
        variant="outline"
        className="d-grid"
        onClick={() => closePortal()}
      />
      <DButton text="ok" className="d-grid" />
    </DOffcanvas.Footer>
  </DOffcanvas>
);
}
  `,language:"tsx",dark:!0}),`
`,e.jsxs(a.h2,{id:"offcanvas-setting-on-the-main-file-apptsx",children:["Offcanvas Setting on the main file ",e.jsx(a.code,{children:"App.tsx"})]}),`
`,e.jsxs(a.p,{children:["The available offcanvas are configured on the ",e.jsx(a.code,{children:"DContextProvider"}),` so that they can
then be opened with the `,e.jsx(a.code,{children:"useDPortalContext"}),` hook. The payload type of the offcanvas
is only necessary if payload will be used.`]}),`
`,e.jsx(n,{code:`
import {
DContextProvider,
} from '@dynamic-framework/ui-react';

import ExampleOffcanvas from './ExampleOffcanvas';
import ExampleOffcanvasUsage from './ExampleOffcanvasUsage';

import type { OffcanvasPayloads } from './types';

export function App() {
return (
  <DContextProvider<OffcanvasPayloads>
    portalName="examplePortal"
    availablePortals={{
      example: ExampleOffcanvas,
    }}
  >
    <ExampleOffcanvasUsage />
  </DContextProvider>
);
}
  `,language:"tsx",dark:!0}),`
`,e.jsxs(a.h2,{id:"offcanvas-usage-exampleoffcanvasusagetsx",children:["Offcanvas Usage ",e.jsx(a.code,{children:"ExampleOffcanvasUsage.tsx"})]}),`
`,e.jsx(n,{code:`
import {
DButton,
useDPortalContext,
} from '@dynamic-framework/ui-react';

import type { OffcanvasPayloads } from './types';

export function ExampleOffcanvasUsage() {
const { openPortal } = useDPortalContext<OffcanvasPayloads>();
return (
  <DButton
    text="Open Offcanvas"
    onClick={() => openPortal('example', { description: 'from offcanvas payload' })}
  />
);
}
  `,language:"tsx",dark:!0}),`
`,e.jsx(i,{children:e.jsx("div",{className:"d-flex flex-column justify-content-end align-items-end",children:e.jsx(m,{})})})]})}function U(o={}){const{wrapper:a}={...c(),...o.components};return a?e.jsx(a,{...o,children:e.jsx(r,{...o})}):r(o)}export{U as default};
