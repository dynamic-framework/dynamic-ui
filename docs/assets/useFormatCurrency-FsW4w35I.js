import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{useMDXComponents as s}from"./index-DlpNa54Y.js";import{ae as i,al as o,ak as a}from"./index-Cm-SA4Al.js";import{u as m}from"./useFormatCurrency-DVKu3N0D.js";import{D as p}from"./DContext-K5yUkfPZ.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CxciKjQx.js";import"../sb-preview/runtime.js";import"./index-Jr15HXM4.js";import"./index-Cu4lwwaE.js";import"./isNativeReflectConstruct-DULPOR7A.js";import"./index-C8cAHwr1.js";import"./index-DrFu-skq.js";import"./currency.es-9OAR_aOO.js";import"./config-BV4l-vIF.js";function c(){const{values:t}=m(100,234.12,-233);return e.jsx("div",{className:"p-3",children:t.map(r=>e.jsx("pre",{children:r},r))})}function x(){return e.jsx(p,{children:e.jsx(c,{})})}function n(t){const r={code:"code",h1:"h1",h2:"h2",p:"p",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Design System/Utils/Hooks/useFormatCurrency"}),`
`,e.jsx(r.h1,{id:"useformatcurrency",children:"useFormatCurrency"}),`
`,e.jsx(r.p,{children:"Currency formatting hook"}),`
`,e.jsxs(r.h2,{id:"setup-apptsx",children:["Setup ",e.jsx(r.code,{children:"App.tsx"})]}),`
`,e.jsx(r.p,{children:"It is necessary to use the hook inside a DContextProvider, because the hook takes the formatting configuration from that context"}),`
`,e.jsx(o,{code:`
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
`,e.jsxs(r.h2,{id:"example-of-use-exampleofusetsx",children:["Example of use ",e.jsx(r.code,{children:"ExampleOfUse.tsx"})]}),`
`,e.jsx(r.p,{children:"Component that uses the hook"}),`
`,e.jsx(o,{code:`
import {
  useFormatCurrency,
} from '@dynamic-framework/ui-react';

export function ExampleOfUse() {
  const { values } = useFormatCurrency(100, 234.12, -233);
  return (
    <div className="p-3">
      {values.map((value) => (
        <pre key={value}>{value}</pre>
      ))}
    </div>
  );
}
    `,language:"tsx",dark:!0}),`
`,e.jsxs(r.h2,{id:"setup-with-other-settings-apptsx",children:["Setup with other settings ",e.jsx(r.code,{children:"App.tsx"})]}),`
`,e.jsx(r.p,{children:"Formatting settings can be changed by changing the values of the currency property of the DContextProvider"}),`
`,e.jsx(o,{code:`
import {
  DContextProvider,
} from '@dynamic-framework/ui-react';

import ExampleOfUse from './ExampleOfUse';

export function App() {
  return (
    <DContextProvider
      currency={{
        symbol: '$',
        precision: 2,
        separator: ',',
        decimal: '.',
      }}
    >
      <ExampleOfUse />
    </DContextProvider>
  );
}
    `,language:"tsx",dark:!0}),`
`,e.jsx(r.h2,{id:"example-render",children:"Example Render"}),`
`,e.jsx(a,{children:e.jsx(x,{})})]})}function F(t={}){const{wrapper:r}={...s(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(n,{...t})}):n(t)}export{F as default};
