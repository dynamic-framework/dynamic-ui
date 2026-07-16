import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as u}from"./index-C6SlVEW6.js";import{M as p,c as s,U as c}from"./blocks-CG5owoJr.js";import{r as m}from"./iframe-vLNjGVop.js";import{D as l,u as d}from"./DConfirmModalContainer-B2bEQ-9U.js";import{D as a}from"./DButton-k5jVOt40.js";import{D as f}from"./DAvatar-BgN1m99j.js";import{D as h}from"./DContext-aUrSpq0p.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DFPG5GmN.js";import"./index-oOcxeWdd.js";import"./DModal-DQJnMGr4.js";import"./index-nyyuC_Uj.js";import"./config-C3iYXcFk.js";import"./DIcon-BaYjXWaB.js";import"./index-BPJnJB5S.js";import"./useMediaBreakpointUp-56XFbS_3.js";import"./DInput-CimCsfpA.js";import"./useProvidedRefOrCreate-8yhSHKFF.js";function C(){const r=d({onConfirm:async()=>{await new Promise(n=>{setTimeout(n,800)})}});return e.jsx("div",{className:"d-flex flex-column align-items-center gap-3",children:e.jsx(a,{text:"Proceed",onClick:r.open})})}function g(){const[r,n]=m.useState(""),t=d({title:"Delete Account",message:"This is a permanent action. All your data will be erased and cannot be recovered.",confirmLabel:"Delete Account",cancelLabel:"Cancel",confirmColor:"danger",critical:{code:"DELETE ACCOUNT",codeLabel:"Type the confirmation code to proceed",inputPlaceholder:"Type: DELETE ACCOUNT"},onConfirm:async()=>{await new Promise(i=>{setTimeout(i,1e3)}),n("Account deleted permanently.")}});return e.jsxs("div",{className:"d-flex flex-column align-items-center gap-3",children:[e.jsx(a,{text:"Delete Account",color:"danger",onClick:t.open}),r&&e.jsx("p",{className:"alert alert-danger mb-0",children:r})]})}function b(){const[r,n]=m.useState([]),t=o=>n(x=>[...x,o]),i=d({title:"Archive Record",message:"This record will be moved to the archive. You can restore it later.",confirmLabel:"Archive",cancelLabel:"Keep",confirmColor:"warning",onConfirm:async()=>{await new Promise(o=>{setTimeout(o,600)}),t("✔ onConfirm — record archived.")},onClose:()=>{t("✖ onClose — modal closed without confirming.")}});return e.jsxs("div",{className:"d-flex flex-column align-items-center gap-3",style:{minWidth:320},children:[e.jsx(a,{text:"Archive Record",variant:"outline",onClick:i.open}),r.length>0&&e.jsx("ul",{className:"list-group w-100",children:r.map((o,x)=>e.jsx("li",{className:"list-group-item list-group-item-light small",children:o},x))})]})}function y(){const[r,n]=m.useState(!1),t="Sarah Mitchell",i=d({title:"Delete Contact",message:`Are you sure you want to delete ${t} from your contact list?`,confirmLabel:"Delete",cancelLabel:"Cancel",confirmColor:"danger",onConfirm:async()=>{await new Promise(o=>{setTimeout(o,800)}),n(!0)}});return r?e.jsx("p",{className:"alert alert-success",children:"Contact removed successfully."}):e.jsxs("div",{className:"card p-4 d-flex flex-row align-items-center gap-3",style:{minWidth:320},children:[e.jsx(f,{name:t,size:"sm"}),e.jsxs("div",{className:"flex-grow-1",children:[e.jsx("div",{className:"fw-semibold",children:t}),e.jsx("div",{className:"text-muted small",children:"sarah.mitchell@email.com"})]}),e.jsx(a,{text:"Delete",color:"danger",variant:"outline",onClick:i.open})]})}function v(){return e.jsxs(h,{children:[e.jsx(C,{}),e.jsx(l,{nodeId:"d-portal"})]})}function D(){return e.jsxs(h,{children:[e.jsx(g,{}),e.jsx(l,{nodeId:"d-portal"})]})}function w(){return e.jsxs(h,{children:[e.jsx(b,{}),e.jsx(l,{nodeId:"d-portal"})]})}function M(){return e.jsxs(h,{children:[e.jsx(y,{}),e.jsx(l,{nodeId:"d-portal"})]})}function E(){return e.jsx(v,{})}function j(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...u(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Design System/Hooks/useConfirmModal"}),`
`,e.jsx(n.h1,{id:"useconfirmmodal",children:"useConfirmModal"}),`
`,e.jsxs(n.p,{children:["Custom hook to display a confirmation modal via ",e.jsx(n.code,{children:"DPortalContext"}),`.
It handles all internal state (loading, critical code validation) and renders the modal automatically — no JSX needed at the call site.`]}),`
`,e.jsxs(n.p,{children:["Requires ",e.jsx(n.code,{children:"DContextProvider"})," (which includes ",e.jsx(n.code,{children:"DPortalContext"}),") wrapping your application."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"️-important-requires-dcontextprovider--dconfirmmodalcontainer",children:"⚠️ IMPORTANT: Requires DContextProvider + DConfirmModalContainer"}),`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:["This hook MUST be used within a ",e.jsx(n.code,{children:"<DContextProvider>"})]}),". Additionally, you must mount ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"<DConfirmModalContainer>"})})," somewhere inside that provider — it is the component that physically renders the modal. Without it, calling ",e.jsx(n.code,{children:"open()"})," will have no visible effect."]}),`
`,e.jsxs(n.p,{children:[`If you forget to add the provider and see this error:
Error: useConfirmModal must be used within a `,e.jsx(n.code,{children:"<DContextProvider>"}),"."]}),`
`,e.jsxs(n.p,{children:["Follow the ",e.jsx(n.a,{href:"#setup-apptsx",children:"Setup guide"})," below to wrap your application."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsx(n.h3,{id:"useconfirmmodalconfig",children:e.jsx(n.code,{children:"UseConfirmModalConfig"})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Required"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"title"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'Are you sure you want to proceed?'"})}),e.jsx(n.td,{children:"Modal header title."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"message"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'Please confirm if you want to continue with this action.'"})}),e.jsx(n.td,{children:"Body text shown inside the modal."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"confirmLabel"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'Confirm'"})}),e.jsx(n.td,{children:"Label for the confirm button."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"cancelLabel"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'Cancel'"})}),e.jsx(n.td,{children:"Label for the cancel/close button."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"confirmColor"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"ConfirmModalColor"})}),e.jsx(n.td,{}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'primary'"})}),e.jsx(n.td,{children:"Color variant of the confirm button."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onConfirm"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"() => void | Promise<void>"})}),e.jsx(n.td,{children:"✅"}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Async-safe callback executed when the user confirms. The modal stays open (with a loading state) until the promise resolves."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onClose"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"() => void"})}),e.jsx(n.td,{}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Called after the modal closes via the cancel button or the X icon."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"critical"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"CriticalConfirmConfig"})}),e.jsx(n.td,{}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Enables a critical confirmation mode that requires the user to type a specific code before confirming."})]})]})]}),`
`,e.jsx(n.h3,{id:"confirmmodalcolor",children:e.jsx(n.code,{children:"ConfirmModalColor"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`type ConfirmModalColor = 'primary' | 'danger' | 'warning';
`})}),`
`,e.jsx(n.h3,{id:"criticalconfirmconfig",children:e.jsx(n.code,{children:"CriticalConfirmConfig"})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Required"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"code"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"✅"}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"The exact string the user must type to enable the confirm button."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"codeLabel"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'Confirmation code'"})}),e.jsx(n.td,{children:"Label shown above the code input."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"inputPlaceholder"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Placeholder text for the code input."})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"return-values",children:"Return Values"}),`
`,e.jsx(n.h3,{id:"useconfirmmodalreturn",children:e.jsx(n.code,{children:"UseConfirmModalReturn"})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Property"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"open"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"() => void"})}),e.jsx(n.td,{children:"Opens the confirmation modal."})]})})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"setup-apptsx",children:["Setup ",e.jsx(n.code,{children:"App.tsx"})]}),`
`,e.jsxs(n.p,{children:["Wrap your application with ",e.jsx(n.code,{children:"DContextProvider"})," and place ",e.jsx(n.code,{children:"DConfirmModalContainer"}),` inside it.
This follows the same pattern as `,e.jsx(n.code,{children:"DToastContainer"})," — the container must be mounted once per provider to render confirmation modals into the portal."]}),`
`,e.jsx(s,{code:`import { DContextProvider, DConfirmModalContainer } from '@dynamic-framework/ui-react';
import ExampleOfUse from './ExampleOfUse';

export function App() {
return (
  <DContextProvider>
    <ExampleOfUse />
    {/* Required: renders confirmation modals into the portal */}
    <DConfirmModalContainer nodeId="d-portal" />
  </DContextProvider>
);
}`,language:"tsx",dark:!0}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"basic-example-exampleofusetsx",children:["Basic example ",e.jsx(n.code,{children:"ExampleOfUse.tsx"})]}),`
`,e.jsxs(n.p,{children:["Only ",e.jsx(n.code,{children:"onConfirm"})," is required. Everything else has sensible defaults."]}),`
`,e.jsx(s,{code:`import { DButton, useConfirmModal } from '@dynamic-framework/ui-react';

export function ExampleOfUse() {
const confirm = useConfirmModal({
  onConfirm: async () => {
    await doSomething();
  },
});

return <DButton text="Proceed" onClick={confirm.open} />;
}`,language:"tsx",dark:!0}),`
`,e.jsx(c,{children:e.jsx(E,{})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"critical-confirmation",children:"Critical confirmation"}),`
`,e.jsxs(n.p,{children:["When a destructive action is irreversible, use ",e.jsx(n.code,{children:"critical"})," to force the user to type a confirmation code before enabling the confirm button."]}),`
`,e.jsx(s,{code:`import { useState } from 'react';
import { DButton, useConfirmModal } from '@dynamic-framework/ui-react';

export function DeleteAccountButton() {
const [result, setResult] = useState('');

const confirm = useConfirmModal({
  title: 'Delete Account',
  message: 'This is a permanent action. All your data will be erased and cannot be recovered.',
  confirmLabel: 'Delete Account',
  cancelLabel: 'Cancel',
  confirmColor: 'danger',
  critical: {
    code: 'DELETE ACCOUNT',
    codeLabel: 'Type the confirmation code to proceed',
    inputPlaceholder: 'Type: DELETE ACCOUNT',
  },
  onConfirm: async () => {
    await deleteAccount();
    setResult('Account deleted permanently.');
  },
});

return (
  <div className="d-flex flex-column align-items-center gap-3">
    <DButton text="Delete Account" color="danger" onClick={confirm.open} />
    {result && <p className="alert alert-danger mb-0">{result}</p>}
  </div>
);
}`,language:"tsx",dark:!0}),`
`,e.jsx(c,{children:e.jsx(D,{})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"using-onclose-callback",children:["Using ",e.jsx(n.code,{children:"onClose"})," callback"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"onClose"})," fires after the modal closes via the cancel button or the X icon. Use it to react to user cancellation."]}),`
`,e.jsx(s,{code:`const confirm = useConfirmModal({
title: 'Archive Record',
message: 'This record will be moved to the archive. You can restore it later.',
confirmLabel: 'Archive',
cancelLabel: 'Keep',
confirmColor: 'warning',
onConfirm: async () => {
  await archiveRecord();
},
onClose: () => {
  console.log('User dismissed the modal.');
},
});`,language:"tsx",dark:!0}),`
`,e.jsx(c,{children:e.jsx(w,{})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"dynamic-message-per-item",children:"Dynamic message per item"}),`
`,e.jsxs(n.p,{children:["Pass a dynamic ",e.jsx(n.code,{children:"message"})," by calling ",e.jsx(n.code,{children:"useConfirmModal"})," inside the component that owns the item's data. Each instance is fully independent."]}),`
`,e.jsx(s,{code:`function ContactRow({ contact, onDeleted }) {
const confirm = useConfirmModal({
  title: 'Delete Contact',
  message: \`Are you sure you want to delete \${contact.name} from your contact list?\`,
  confirmLabel: 'Delete',
  cancelLabel: 'Cancel',
  confirmColor: 'danger',
  onConfirm: async () => {
    await deleteContact(contact.id);
    onDeleted(contact.id);
  },
});

return (
  <div className="d-flex align-items-center gap-3">
    <span>{contact.name}</span>
    <DButton text="Delete" color="danger" variant="outline" onClick={confirm.open} />
  </div>
);
}`,language:"tsx",dark:!0}),`
`,e.jsx(c,{children:e.jsx(M,{})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"see-more-examples",children:"See more examples"}),`
`,e.jsxs("div",{className:"alert d-flex align-items-start gap-3 p-4 rounded border border-primary-subtle bg-primary-subtle",role:"note","aria-label":"See more examples",children:[e.jsx("span",{className:"fs-4","aria-hidden":"true",children:"💡"}),e.jsxs("div",{children:[e.jsx("strong",{className:"d-block mb-1",children:"Looking for more examples?"}),e.jsxs("span",{className:"text-secondary",children:["To explore more real-world flows, visit ",e.jsx("a",{href:"/?path=/story/patterns-confirm-modal--docs",target:"_parent",children:e.jsx("strong",{children:"Patterns / Confirm Modal"})})," stories in Storybook."]})]})]})]})}function $(r={}){const{wrapper:n}={...u(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(j,{...r})}):j(r)}export{$ as default};
