import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-Ccd_3YU0.js";import{M as i,c as t,U as c}from"./blocks-D_Rgh6MF.js";import{D as r}from"./DButton-CluHaZiK.js";import{D as l}from"./DModal-CPKde5Bg.js";import{D as p,a as d}from"./DContext-Dxx5fHg0.js";import"./iframe-DLbf3qKv.js";import"./index-BpFZy5MA.js";import"./index-wK-VFbMZ.js";import"./index-DsY-b2ur.js";import"./DIcon-Dz-46F40.js";import"./config-C3iYXcFk.js";import"./useMediaBreakpointUp-BOU17c78.js";function m({payload:a}){const{closePortal:o}=d();return e.jsxs(l,{name:"example",centered:!0,staticBackdrop:!1,children:[e.jsx(l.Header,{onClose:o,showCloseButton:!0,children:e.jsx("h5",{className:"fw-bold",children:"Do you want to reject the offer?"})}),e.jsxs(l.Body,{className:"py-3 px-5",children:[e.jsx("p",{children:"Modal body"}),e.jsx("small",{children:a.description})]}),e.jsxs(l.Footer,{children:[e.jsx(r,{text:"cancel",color:"secondary",variant:"outline",className:"d-grid",onClick:()=>o()}),e.jsx(r,{text:"ok",className:"d-grid"})]})]})}function x(){const{openPortal:a}=d();return e.jsx(r,{text:"Open Modal",onClick:()=>a("example",{description:"from portal payload"})})}function h(){return e.jsx(p,{portalName:"examplePortal",availablePortals:{example:m},children:e.jsx(x,{})})}function n(a){const o={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",...s(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"modal",children:"Modal"}),`
`,e.jsxs(o.p,{children:["To achieve the behavior of a modal it is necessary to use the ",e.jsx(o.code,{children:"DContextProvider"})," and the ",e.jsx(o.code,{children:"useDPortalContext"}),` hook,
however, it is possible to create an inline modal simply using `,e.jsx(o.code,{children:"DModal"})]}),`
`,e.jsxs(o.p,{children:["This part of the documentation talks about ",e.jsx(o.code,{children:"DModal"})," and directly covers its behavior."]}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsx(o.p,{children:"To achieve inline use of a modal, review the modal topic in components."}),`
`]}),`
`,e.jsx(i,{title:"Design System/Patterns/Modal"}),`
`,e.jsxs(o.h2,{id:"modal-types-typests",children:["Modal Types ",e.jsx(o.code,{children:"types.ts"})]}),`
`,e.jsx(o.p,{children:`Type to define the payload of all the modals, its structure is an object literal
where the key is used for the name of the modal and value for the payload.`}),`
`,e.jsx(t,{code:`
export type ModalPayloads = {
example: {
  description: string;
};
};
  `,language:"tsx",dark:!0}),`
`,e.jsxs(o.h2,{id:"modal-definition-examplemodaltsx",children:["Modal Definition ",e.jsx(o.code,{children:"ExampleModal.tsx"})]}),`
`,e.jsx(t,{code:`
import {
DModal,
DButton,
} from '@dynamic-framework/ui-react';

import type {
PortalProps,
} from '@dynamic-framework/ui-react';

import type { ModalPayloads } from './types';

export function ExampleModal({ payload }: PortalProps<ModalPayloads['example']>) {
const { closePortal } = useDPortalContext();
return (
  <DModal
    name="example"
    centered
    staticBackdrop
  >
    <DModal.Header onClose={closePortal} showCloseButton>
      <h5 className="fw-bold">Do you want to reject the offer?</h5>
    </DModal.Header>
    <DModal.Body className="py-3 px-5">
      <p>Modal body</p>
      <small>{payload.description}</small>
    </DModal.Body>
    <DModal.Footer>
      <DButton
        text="cancel"
        color="secondary"
        variant="outline"
        className="d-grid"
        onClick={() => closePortal()}
      />
      <DButton text="ok" className="d-grid" />
    </DModal.Footer>
  </DModal>
);
}
  `,language:"tsx",dark:!0}),`
`,e.jsxs(o.h2,{id:"modal-setting-on-the-main-file-apptsx",children:["Modal Setting on the main file ",e.jsx(o.code,{children:"App.tsx"})]}),`
`,e.jsxs(o.p,{children:["The available modals are configured on the ",e.jsx(o.code,{children:"DContextProvider"}),` so that they can
then be opened with the `,e.jsx(o.code,{children:"useDModalContext"}),` hook. The payload type of the modals
is only necessary if payload will be used.`]}),`
`,e.jsx(t,{code:`
import {
DContextProvider,
} from '@dynamic-framework/ui-react';

import ExampleModal from './ExampleModal';
import ExampleModalUsage from './ExampleModalUsage';

import type { ModalPayloads } from './types';

export function App() {
return (
  <DContextProvider<ModalPayloads>
    portalName="examplePortal"
    availablePortals={{
      example: ExampleModal,
    }}
  >
    <ExampleModalUsage />
  </DContextProvider>
);
}
  `,language:"tsx",dark:!0}),`
`,e.jsxs(o.h2,{id:"modal-usage-examplemodalusagetsx",children:["Modal Usage ",e.jsx(o.code,{children:"ExampleModalUsage.tsx"})]}),`
`,e.jsx(t,{code:`
import {
DButton,
useDPortalContext,
} from '@dynamic-framework/ui-react';

import type { ModalPayloads } from './types';

export function ExampleModalUsage() {
const { openPortal } = useDPortalContext<ModalPayloads>();
return (
  <DButton
    text="Open Modal"
    onClick={() => openPortal('example', { description: 'from portal payload' })}
  />
);
}
  `,language:"tsx",dark:!0}),`
`,e.jsx(c,{children:e.jsx("div",{className:"d-flex flex-column justify-content-end align-items-end",children:e.jsx(h,{})})})]})}function E(a={}){const{wrapper:o}={...s(),...a.components};return o?e.jsx(o,{...a,children:e.jsx(n,{...a})}):n(a)}export{E as default};
