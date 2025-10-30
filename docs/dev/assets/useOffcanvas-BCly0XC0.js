import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-CHSOfr5v.js";import{M as f,c as o,U as i}from"./blocks-CJUw5px9.js";import{D as s}from"./DOffcanvas-DEuoWzLH.js";import{D as t}from"./DButton-DLoc9Exd.js";import{D as d,a as l}from"./DContext-Dm_WebLV.js";import"./iframe-XnRhdyHW.js";import"./index-CQ6hCEsd.js";import"./index-CucmxpGD.js";import"./index-D0sKC-UO.js";import"./config-BV4l-vIF.js";import"./DIcon-BtjKyMWG.js";function p({payload:n}){const{closePortal:a}=l();return e.jsxs(s,{name:"example",staticBackdrop:!1,scrollable:!1,openFrom:"end",children:[e.jsx(s.Header,{onClose:a,showCloseButton:!0,children:e.jsx("h5",{className:"fw-bold",children:"Advanced filters"})}),e.jsxs(s.Body,{children:[e.jsx("p",{children:"Offcanvas body"}),e.jsx("small",{children:n.description})]}),e.jsxs(s.Footer,{children:[e.jsx(t,{text:"cancel",theme:"secondary",variant:"outline",className:"d-grid",pill:!0,onClick:()=>a()}),e.jsx(t,{text:"ok",className:"d-grid",pill:!0})]})]})}function x(){const{openPortal:n}=l();return e.jsx(t,{text:"Open Offcanvas",onClick:()=>n("example",{description:"from portal payload"})})}function m(){return e.jsx(d,{portalName:"examplePortal",availablePortals:{example:p},children:e.jsx(x,{})})}function r(n){const a={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",...c(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"offcanvas",children:"Offcanvas"}),`
`,e.jsxs(a.p,{children:["To achieve the behavior of an offcanvas it is necessary to use the ",e.jsx(a.code,{children:"DContextProvider"})," and the ",e.jsx(a.code,{children:"useDPortalContext"}),` hook,
however, it is possible to create an inline offcanvas simply using `,e.jsx(a.code,{children:"DOffcanvas"})]}),`
`,e.jsxs(a.p,{children:["This part of the documentation talks about ",e.jsx(a.code,{children:"DOffcanvas"})," and directly covers its behavior."]}),`
`,e.jsxs(a.blockquote,{children:[`
`,e.jsx(a.p,{children:"To achieve inline use of an offcanvas, review the offcanvas topic in components."}),`
`]}),`
`,e.jsx(f,{title:"Design System/Patterns/Offcanvas"}),`
`,e.jsxs(a.h2,{id:"offcanvas-types-typests",children:["Offcanvas Types ",e.jsx(a.code,{children:"types.ts"})]}),`
`,e.jsx(a.p,{children:`Type to define the payload of all the offcanvas, its structure is an object literal
where the key is used for the name of the offcanvas and value for the payload.`}),`
`,e.jsx(o,{code:`
export type PortalPayloads = {
example: {
  description: string;
};
};
  `,language:"tsx",dark:!0}),`
`,e.jsxs(a.h2,{id:"offcanvas-definition-exampleoffcanvastsx",children:["Offcanvas Definition ",e.jsx(a.code,{children:"ExampleOffcanvas.tsx"})]}),`
`,e.jsx(o,{code:`
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
        theme="secondary"
        variant="outline"
        className="d-grid"
        pill
        onClick={() => closePortal()}
      />
      <DButton text="ok" className="d-grid" pill />
    </DOffcanvas.Footer>
  </DOffcanvas>
);
}
  `,language:"tsx",dark:!0}),`
`,e.jsxs(a.h2,{id:"offcanvas-setting-on-the-main-file-apptsx",children:["Offcanvas Setting on the main file ",e.jsx(a.code,{children:"App.tsx"})]}),`
`,e.jsxs(a.p,{children:["The available offcanvas are configured on the ",e.jsx(a.code,{children:"DOffcanvasContextProvider"}),` so that they can
then be opened with the `,e.jsx(a.code,{children:"useDOffcanvasContext"}),` hook. The payload type of the offcanvas
is only necessary if payload will be used.`]}),`
`,e.jsx(o,{code:`
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
`,e.jsx(o,{code:`
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
`,e.jsx(i,{children:e.jsx("div",{className:"d-flex flex-column justify-content-end align-items-end",children:e.jsx(m,{})})})]})}function w(n={}){const{wrapper:a}={...c(),...n.components};return a?e.jsx(a,{...n,children:e.jsx(r,{...n})}):r(n)}export{w as default};
