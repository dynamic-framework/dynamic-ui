import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-afZdLfdn.js";import{M as l,c as n,U as i}from"./blocks-DHkwO_IV.js";import{D as t}from"./DButton-CApI4VYz.js";import{D as s}from"./DOffcanvas-UAd4zIDH.js";import{D as d,a as f}from"./DContext-By_v3TNv.js";import"./iframe-z1MTcv_h.js";import"./index-Dj-_Oamp.js";import"./index-bqyYwqY-.js";import"./index-Csc2mwcI.js";import"./DIcon-BXrlZjAH.js";import"./config-C3iYXcFk.js";import"./useMediaBreakpointUp-CaQH-f2J.js";function p({payload:o}){const{closePortal:e}=f();return a.jsxs(s,{name:"example",staticBackdrop:!1,scrollable:!1,openFrom:"end",children:[a.jsx(s.Header,{onClose:e,showCloseButton:!0,children:a.jsx("h5",{className:"fw-bold",children:"Advanced filters"})}),a.jsxs(s.Body,{children:[a.jsx("p",{children:"Offcanvas body"}),a.jsx("small",{children:o.description})]}),a.jsxs(s.Footer,{children:[a.jsx(t,{text:"cancel",color:"secondary",variant:"outline",className:"d-grid",onClick:()=>e()}),a.jsx(t,{text:"ok",className:"d-grid"})]})]})}function x(){const{openPortal:o}=f();return a.jsx(t,{text:"Open Offcanvas",onClick:()=>o("example",{description:"from portal payload"})})}function m(){return a.jsx(d,{portalName:"examplePortal",availablePortals:{example:p},children:a.jsx(x,{})})}function r(o){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",...c(),...o.components};return a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"offcanvas",children:"Offcanvas"}),`
`,a.jsxs(e.p,{children:["To achieve the behavior of an offcanvas it is necessary to use the ",a.jsx(e.code,{children:"DContextProvider"})," and the ",a.jsx(e.code,{children:"useDPortalContext"}),` hook,
however, it is possible to create an inline offcanvas simply using `,a.jsx(e.code,{children:"DOffcanvas"})]}),`
`,a.jsxs(e.p,{children:["This part of the documentation talks about ",a.jsx(e.code,{children:"DOffcanvas"})," and directly covers its behavior."]}),`
`,a.jsxs(e.blockquote,{children:[`
`,a.jsx(e.p,{children:"To achieve inline use of an offcanvas, review the offcanvas topic in components."}),`
`]}),`
`,a.jsx(l,{title:"Design System/Patterns/Offcanvas"}),`
`,a.jsxs(e.h2,{id:"offcanvas-types-typests",children:["Offcanvas Types ",a.jsx(e.code,{children:"types.ts"})]}),`
`,a.jsx(e.p,{children:`Type to define the payload of all the offcanvas, its structure is an object literal
where the key is used for the name of the offcanvas and value for the payload.`}),`
`,a.jsx(n,{code:`
export type PortalPayloads = {
example: {
  description: string;
};
};
  `,language:"tsx",dark:!0}),`
`,a.jsxs(e.h2,{id:"offcanvas-definition-exampleoffcanvastsx",children:["Offcanvas Definition ",a.jsx(e.code,{children:"ExampleOffcanvas.tsx"})]}),`
`,a.jsx(n,{code:`
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
`,a.jsxs(e.h2,{id:"offcanvas-setting-on-the-main-file-apptsx",children:["Offcanvas Setting on the main file ",a.jsx(e.code,{children:"App.tsx"})]}),`
`,a.jsxs(e.p,{children:["The available offcanvas are configured on the ",a.jsx(e.code,{children:"DOffcanvasContextProvider"}),` so that they can
then be opened with the `,a.jsx(e.code,{children:"useDOffcanvasContext"}),` hook. The payload type of the offcanvas
is only necessary if payload will be used.`]}),`
`,a.jsx(n,{code:`
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
`,a.jsxs(e.h2,{id:"offcanvas-usage-exampleoffcanvasusagetsx",children:["Offcanvas Usage ",a.jsx(e.code,{children:"ExampleOffcanvasUsage.tsx"})]}),`
`,a.jsx(n,{code:`
import {
DButton,
useDPortalContext,
} from '@dynamic-framework/ui-react';

import type { OffcanvasPayloads } from './types';

export function ExampleOffcanvasUsage() {
const { openOffcanvas } = useDPortalContext<OffcanvasPayloads>();
return (
  <DButton
    text="Open Offcanvas"
    onClick={() => openOffcanvas('example', { description: 'from offcanvas payload' })}
  />
);
}
  `,language:"tsx",dark:!0}),`
`,a.jsx(i,{children:a.jsx("div",{className:"d-flex flex-column justify-content-end align-items-end",children:a.jsx(m,{})})})]})}function E(o={}){const{wrapper:e}={...c(),...o.components};return e?a.jsx(e,{...o,children:a.jsx(r,{...o})}):r(o)}export{E as default};
