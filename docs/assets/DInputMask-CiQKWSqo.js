import{j as t}from"./jsx-runtime-CKrituN3.js";import{useMDXComponents as l}from"./index-DSz_1G2r.js";import{ae as d,ah as p,al as u,aj as o,ai as h,ak as m,ag as f}from"./index-D83KeUA8.js";import{F as g,D as x,a}from"./DInputMask.stories-CRqN_xUp.js";import{P as n}from"./config-CUZHf55T.js";import{r as b}from"./index-CBqU2yxZ.js";import{D as j}from"./DAlert-BJ8CDSqL.js";import"./iframe-n4QHviUT.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-C8M-hMhC.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./DInput-CT3eH2pi.js";import"./index-ELyB7pIJ.js";import"./DIcon-1scRBrNx.js";import"./DContext-CSLUP0I2.js";import"./useProvidedRefOrCreate-B_Nl4lOm.js";import"./constants-DhWTmuJQ.js";const i="_ ____ ____";function k(){const[s,e]=b.useState(i);return t.jsx(g,{mask:i,showMask:!0,value:s,onChange:c=>e(c),replacement:{_:/\d/}})}function r(s){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",strong:"strong",...l(),...s.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{of:x}),`
`,t.jsx(e.h1,{id:"input-mask",children:"Input Mask"}),`
`,t.jsx(e.p,{children:t.jsx(e.img,{src:"https://img.shields.io/badge/Wrapper%20Component-red",alt:"Shield Badge"})}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.strong,{children:t.jsx(e.code,{children:"DInputMask"})}),` component is designed for creating masked input fields, leveraging
the capabilities provided by `,t.jsx(e.strong,{children:"@react-input/mask"}),`.
This component is composed with `,t.jsx(e.code,{children:"DInput"})," to offer a masked input functionality."]}),`
`,t.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,t.jsxs(e.p,{children:[`To utilize this component effectively, it's important to understand how it interacts
with state management, particularly when using `,t.jsx(e.code,{children:"useState"}),"."]}),`
`,t.jsx(e.h3,{id:"initial-state",children:"Initial State"}),`
`,t.jsxs(e.p,{children:["When using ",t.jsx(e.code,{children:"useState"}),` to manage the state of the DInputMask component, it's crucial to
set the initial state to match the mask pattern. This ensures that the component
behaves as expected throughout the input process.`]}),`
`,t.jsxs(e.h4,{id:"important-note-from-react-inputmask-documentation",children:["Important Note from ",t.jsx(e.code,{children:"@react-input/mask"})," documentation"]}),`
`,t.jsx(p,{children:t.jsx(j,{theme:"warning",children:t.jsx("span",{children:`The InputMask component does not change the value passed in the value or defaultValue property
of the input element, so set the initialized value to something that can match the masked value
at any stage of input. If you make a mistake, you will see a warning about it in the console.`})})}),`
`,t.jsx(e.p,{children:`This means that setting the initial state correctly, in alignment with the mask
pattern, is crucial for seamless functionality. Any discrepancies may result in warnings being displayed in the console.`}),`
`,t.jsxs(e.p,{children:["For further details on the capabilities and usage of @react-input/mask, refer to the ",t.jsx(e.a,{href:"https://www.npmjs.com/package/@react-input/mask",rel:"nofollow",children:"documentation"}),"."]}),`
`,t.jsx(u,{code:`
import { useState } from 'react';
import { DInputMask } from '@dynamic-framework/ui-react';

const BASE_MASK = '_ ____ ____';

export default function App() {
  const [maskValue, setMaskValue] = useState<string>(BASE_MASK);

  return (
    <DInputMask
      mask={BASE_MASK}
      showMask
      value={maskValue}
      onChange={(value) => setMaskValue(value)}
      replacement={{ _: /d/ }}
    />
  );
}
    `,language:"tsx",dark:!0}),`
`,t.jsx(o,{children:t.jsx("div",{className:"d-flex justify-content-center",children:t.jsx(k,{})})}),`
`,t.jsx(e.h2,{id:"css-variables",children:"CSS Variables"}),`
`,t.jsxs(e.p,{children:["The Bootstrap documentation provides details on the default ",t.jsx(e.a,{href:"https://getbootstrap.com/docs/5.3/forms/form-control/#css",rel:"nofollow",children:"Input Form CSS Variables"}),`
and so it does `,t.jsx(e.a,{href:"https://getbootstrap.com/docs/5.3/forms/input-group/#css",rel:"nofollow",children:"Input Group CSS Variables"})]}),`
`,t.jsx(h,{children:`
| Variable                                         | Type            | Description                   |
|--------------------------------------------------|-----------------|-------------------------------|
| --${n}label-color                        | css color unit  | Label color                   |
| --${n}label-font-weight                  | css font weight | Label font weight             |
| --${n}label-font-size                    | css length unit | Label font size               |
| --${n}label-padding-x                    | css length unit | Label horizontal padding      |
| --${n}label-padding-y                    | css length unit | Label vertical padding        |
| --${n}input-border-color                 | css color unit  | Input border color            |
| --${n}input-border-width                 | css length unit | Input border width            |
| --${n}input-border-radius                | css length unit | Input border radius           |
| --${n}input-focus-border-color           | css color unit  | Input focus border color      |
| --${n}input-focus-box-shadow             | css shadow      | Input focus box shadow        |
| --${n}input-disabled-bg                  | css color unit  | Input disable background      |
| --${n}input-disabled-color               | css color unit  | Input disable color           |
| --${n}input-disabled-border-color        | css color unit  | Input disable border color    |
| --${n}form-text-padding                  | css length unit | Hint padding                  |
| --${n}form-text-gap                      | css length unit | Space between hint elements   |
| --${n}form-text-color                    | css color unit  | Hint color                    |
| --${n}form-control-text-align            | css text align  | Input text align              |
  `}),`
`,t.jsx(o,{of:a}),`
`,t.jsx(m,{of:a}),`
`,t.jsx(f,{})]})}function N(s={}){const{wrapper:e}={...l(),...s.components};return e?t.jsx(e,{...s,children:t.jsx(r,{...s})}):r(s)}export{N as default};
