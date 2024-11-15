import{j as e}from"./jsx-runtime-CKrituN3.js";import{useMDXComponents as d}from"./index-DSz_1G2r.js";import{ae as x,al as r,ah as h}from"./index-kkS5KTn6.js";import{u as p}from"./useItemSelection-ovHkqXYn.js";import{D as i}from"./DCard-CSo84uCW.js";import{D as u}from"./DInputCheck-DOt0IpKo.js";import{D as o}from"./DButton-DMz62NRO.js";import{D as f}from"./DContext-CSLUP0I2.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-VDFYNcII.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-C8M-hMhC.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./index-ELyB7pIJ.js";import"./DIcon-1scRBrNx.js";import"./config-CUZHf55T.js";const l=[{id:"1",name:"Item 1"},{id:"2",name:"Item 2"},{id:"3",name:"Item 3"}];function j(){const{isSelectedItem:n,toggleSelectedItem:t,setSelectedItems:m,resetSelectedItems:a}=p();return e.jsxs(i,{children:[e.jsx(i.Header,{children:"Selection:"}),e.jsx(i.Body,{className:"d-flex flex-column",children:l.map(s=>e.jsx(u,{type:"checkbox",label:s.name,onClick:()=>t(s),checked:n(s)},s.id))}),e.jsxs(i.Footer,{className:"d-flex justify-content-end gap-3",children:[e.jsx(o,{size:"sm",onClick:()=>m(l),text:"Select All"}),e.jsx(o,{size:"sm",onClick:a,text:"Reset"})]})]})}function I(){return e.jsx(f,{children:e.jsx(j,{})})}function c(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Design System/Utils/Hooks/useItemSelection"}),`
`,e.jsx(t.h1,{id:"useitemselection",children:"useItemSelection"}),`
`,e.jsx(t.p,{children:"Custom hook for managing item selection."}),`
`,e.jsx(t.h2,{id:"parameters",children:"Parameters"}),`
`,e.jsx(t.h3,{id:"propst-extends-identifiable",children:e.jsx(t.code,{children:"Props<T extends Identifiable>"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"getItemIdentifier"})," (optional): A function to retrieve the identifier for an item. If not provided, it defaults to using the item's ",e.jsx(t.code,{children:"id"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"previousSelected"})," (optional): An array of previously selected items, which initializes the selection state."]}),`
`]}),`
`,e.jsx(t.h2,{id:"return-values",children:"Return Values"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"selectedItems"}),": An array of currently selected items."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"isSelectedItem"}),": A function that takes an item and returns a boolean indicating whether it is selected."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"toggleSelectedItem"}),": A function that toggles the selection state of a given item."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"resetSelectedItems"}),": A function that resets the selection state to an empty array."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"setSelectedItems"}),": A function to change all the selected items."]}),`
`]}),`
`,e.jsxs(t.h2,{id:"setup-apptsx",children:["Setup ",e.jsx(t.code,{children:"App.tsx"})]}),`
`,e.jsx(t.p,{children:"Basic setup for working with the framework"}),`
`,e.jsx(r,{code:`
import {
  DContextProvider,
} from '@dynamic-framework/ui-react';

import ExampleOfUse from './ExampleOfUse';

export function App() {
  return (
    <DContextProvider>
      <ExampleOfUse />
    </DContextProvider>
  );
}
`,language:"tsx",dark:!0}),`
`,e.jsxs(t.h2,{id:"example-of-use-exampleusagetsx",children:["Example of use ",e.jsx(t.code,{children:"ExampleUsage.tsx"})]}),`
`,e.jsx(t.p,{children:"Component that utilizes the hook to handle item selection."}),`
`,e.jsx(r,{code:`
import {
  useItemSelection,
  DInputCheck,
  DButton,
  DCard,
  DContextProvider,
} from '@dynamic-framework/ui-react';

const ITEMS = [
  { id: '1', name: 'Item 1' },
  { id: '2', name: 'Item 2' },
  { id: '3', name: 'Item 3' },
];

export function ExampleOfUse() {
  const {
    isSelectedItem,
    toggleSelectedItem,
    setSelectedItems,
    resetSelectedItems,
  } = useItemSelection<typeof ITEMS[0]>();

  return (
    <DCard>
      <DCard.Header>
        Selection:
      </DCard.Header>
      <DCard.Body className="d-flex flex-column">
        {ITEMS.map((item) => (
          <DInputCheck
            key={item.id}
            type="checkbox"
            label={item.name}
            onClick={() => toggleSelectedItem(item)}
            checked={isSelectedItem(item)}
          />
        ))}
      </DCard.Body>
      <DCard.Footer className="d-flex justify-content-end gap-3">
        <DButton size="sm" onClick={() => setSelectedItems(ITEMS)} text="Select All" />
        <DButton size="sm" onClick={resetSelectedItems} text="Reset" />
      </DCard.Footer>
    </DCard>
  );
}
`,language:"tsx",dark:!0}),`
`,e.jsx(t.h2,{id:"example-render",children:"Example Render"}),`
`,e.jsx(h,{children:e.jsx(I,{})})]})}function H(n={}){const{wrapper:t}={...d(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(c,{...n})}):c(n)}export{H as default};