import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{useMDXComponents as c}from"./index-DlpNa54Y.js";import{ae as f,al as n,ak as i}from"./index-Ca4iaMPk.js";import{D as t}from"./DOffcanvas-Dx6_jWAA.js";import{D as s}from"./DButton-_5ABEfC5.js";import{D as d,a as l}from"./DContext-K5yUkfPZ.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Co6eceYb.js";import"../sb-preview/runtime.js";import"./index-Jr15HXM4.js";import"./index-Cu4lwwaE.js";import"./isNativeReflectConstruct-DULPOR7A.js";import"./index-C8cAHwr1.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-DrFu-skq.js";import"./index-ELyB7pIJ.js";import"./config-BV4l-vIF.js";import"./DIcon-NWah5INO.js";function p({payload:o}){const{closePortal:a}=l();return e.jsxs(t,{name:"example",staticBackdrop:!1,scrollable:!1,openFrom:"end",children:[e.jsx(t.Header,{onClose:a,showCloseButton:!0,children:e.jsx("h5",{className:"fw-bold",children:"Advanced filters"})}),e.jsxs(t.Body,{children:[e.jsx("p",{children:"Offcanvas body"}),e.jsx("small",{children:o.description})]}),e.jsxs(t.Footer,{children:[e.jsx(s,{text:"cancel",theme:"secondary",variant:"outline",className:"d-grid",pill:!0,onClick:()=>a()}),e.jsx(s,{text:"ok",className:"d-grid",pill:!0})]})]})}function m(){const{openPortal:o}=l();return e.jsx(s,{text:"Open Offcanvas",onClick:()=>o("example",{description:"from portal payload"})})}function x(){return e.jsx(d,{portalName:"examplePortal",availablePortals:{example:p},children:e.jsx(m,{})})}function r(o){const a={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",...c(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"offcanvas",children:"Offcanvas"}),`
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
  const { openOffcanvas } = useDPortalContext<OffcanvasPayloads>();
  return (
    <DButton
      text="Open Offcanvas"
      onClick={() => openOffcanvas('example', { description: 'from offcanvas payload' })}
    />
  );
}
    `,language:"tsx",dark:!0}),`
`,e.jsx(i,{children:e.jsx("div",{className:"d-flex flex-column justify-content-end align-items-end",children:e.jsx(x,{})})})]})}function M(o={}){const{wrapper:a}={...c(),...o.components};return a?e.jsx(a,{...o,children:e.jsx(r,{...o})}):r(o)}export{M as default};
