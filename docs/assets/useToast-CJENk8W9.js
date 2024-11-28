import{j as t}from"./jsx-runtime-DQ32znRX.js";import{useMDXComponents as c}from"./index-COxJNofV.js";import{ae as d,ah as o,al as s}from"./index-C_v-9Xtm.js";import{a,b as i,c as l}from"./useToastExamples-ClhFaY18.js";import{D as m}from"./DAlert-4WmNgx47.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BkS7y1XZ.js";import"../sb-preview/runtime.js";import"./index-D9uilScg.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-DULPOR7A.js";import"./index-C9uyZMOe.js";import"./index-DrFu-skq.js";import"./index-mLFX9G4A.js";import"./DToast-jX7A3oAx.js";import"./DIcon-CDY5yPx9.js";import"./config-CUZHf55T.js";import"./DContext-9gKMeQXa.js";import"./DButton-Cbcj12Fm.js";function r(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...c(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(d,{title:"Design System/Patterns/Toast"}),`
`,t.jsx(e.h1,{id:"toast",children:"Toast"}),`
`,t.jsx(e.p,{children:t.jsx(e.img,{src:"https://img.shields.io/badge/Abstraction%20Component-4848b7",alt:"Shield Badge"})}),`
`,t.jsxs(e.p,{children:["Toasts use ",t.jsx(e.code,{children:"DToastContainer"})," and the ",t.jsx(e.code,{children:"useDToast"}),` hook, which are abstractions to configure react-hot-toast in conjunction with
a `,t.jsx(e.code,{children:"DToast"})," to generate toasts. For more detailed information, refer to the official ",t.jsx(e.a,{href:"https://react-hot-toast.com/docs",rel:"nofollow",children:"React Hot Toast Documentation"}),"."]}),`
`,t.jsx("br",{}),`
`,t.jsx(o,{children:t.jsx(m,{theme:"warning",children:t.jsx("span",{children:`Toast appears in all containers because of the way react-hot-toast is programmed, however,
if you want to see the correct toast make it show up from the correct container.`})})}),`
`,t.jsx(e.h2,{id:"usage-dtoastcontainer",children:"Usage DToastContainer"}),`
`,t.jsxs(e.p,{children:["To get started, include the ",t.jsx(e.strong,{children:t.jsx(e.code,{children:"<DToastContainer />"})}),` component once in your app, typically near the root of your component tree.
This ensures that all toasts are rendered correctly. Here you can customize general styles for all toasts and configure a default
placement for displaying toasts. You can override this position in any single toast if needed.`]}),`
`,t.jsx(e.h2,{id:"usage-usedtoast",children:"Usage useDToast"}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"useDToast"})," hook provides a simple and flexible way to create toast notifications in your application. By ",t.jsx(e.strong,{children:"default"}),`, it uses the
`,t.jsx(e.code,{children:"DToast"})," component to display the toast message. However, you can also render a custom component if needed."]}),`
`,t.jsx(e.p,{children:"Below you will see examples of the use of toast in a simple way, with a custom component and with Material Icons."}),`
`,t.jsx(e.h2,{id:"basic-toast-no-theme",children:"Basic toast no theme"}),`
`,t.jsx(o,{children:t.jsx("div",{className:"d-flex flex-column justify-content-end align-items-end",style:{height:"200px"},children:t.jsx(a,{})})}),`
`,t.jsx(s,{code:`
import {
  DContextProvider,
  DToastContainer,
  useDToast,
} from '@dynamic-framework/ui-react';

export function App() {
  const { toast } = useDToast();

  return (
    <DContextProvider>
      <DButton
        text="Show Toast"
        onClick={() => (
          toast(
            { title: 'Example' },
            { duration: 40000 },
          )
        )}
      />
      <DToastContainer
        position="top-right"
      />
    </DContextProvider>
  );
}
`,language:"tsx",dark:!0}),`
`,t.jsx(e.h2,{id:"basic-toast-secondary-theme",children:"Basic toast secondary theme"}),`
`,t.jsx(o,{children:t.jsx("div",{className:"d-flex flex-column justify-content-end align-items-end",style:{height:"200px"},children:t.jsx(a,{type:"secondary"})})}),`
`,t.jsx(s,{code:`
import {
  DContextProvider,
  DToastContainer,
  useDToast,
} from '@dynamic-framework/ui-react';

export function App() {
  const { toast } = useDToast();

  return (
    <DContextProvider>
      <DButton
        text="Show Toast"
        onClick={() => (
          toast(
            {
              title: 'Example',
              theme: 'secondary',
            },
            { duration: 40000 },
          )
        )}
      />
      <DToastContainer
        position="top-right"
      />
    </DContextProvider>
  );
}
`,language:"tsx",dark:!0}),`
`,t.jsx(e.h2,{id:"basic-toast-secondary-soft",children:"Basic toast secondary soft"}),`
`,t.jsx(o,{children:t.jsx("div",{className:"d-flex flex-column justify-content-end align-items-end",style:{height:"200px"},children:t.jsx(a,{type:"soft"})})}),`
`,t.jsx(s,{code:`
import {
  DContextProvider,
  DToastContainer,
  useDToast,
} from '@dynamic-framework/ui-react';

export function App() {
  const { toast } = useDToast();

  return (
    <DContextProvider>
      <DButton
        text="Show Toast"
        onClick={() => (
          toast(
            {
              title: 'Example',
              theme: 'secondary',
              soft: true,
            },
            { duration: 40000 },
          )
        )}
      />
      <DToastContainer
        position="top-right"
      />
    </DContextProvider>
  );
}
`,language:"tsx",dark:!0}),`
`,t.jsx(e.h2,{id:"full-toast-no-theme",children:"Full toast no theme"}),`
`,t.jsx(o,{children:t.jsx("div",{className:"d-flex flex-column justify-content-end align-items-end",style:{height:"200px"},children:t.jsx(i,{type:"base"})})}),`
`,t.jsx(s,{code:`
import {
  DContextProvider,
  DToastContainer,
  useDToast,
} from '@dynamic-framework/ui-react';

export function App() {
  const { toast } = useDToast();

  return (
    <DContextProvider>
      <DButton
        text="Show Toast"
        onClick={() => (
          toast(
            {
              title: 'Example',
              description: 'This is a description',
              timestamp: 'just now',
              icon: 'check',
            },
            { duration: 40000 },
          )
        )}
      />
      <DToastContainer
        position="top-right"
      />
    </DContextProvider>
  );
}
`,language:"tsx",dark:!0}),`
`,t.jsx(e.h2,{id:"full-toast-secondary-theme",children:"Full toast secondary theme"}),`
`,t.jsx(o,{children:t.jsx("div",{className:"d-flex flex-column justify-content-end align-items-end",style:{height:"200px"},children:t.jsx(i,{type:"secondary"})})}),`
`,t.jsx(s,{code:`
import {
  DContextProvider,
  DToastContainer,
  useDToast,
} from '@dynamic-framework/ui-react';

export function App() {
  const { toast } = useDToast();

  return (
    <DContextProvider>
      <DButton
        text="Show Toast"
        onClick={() => (
          toast(
            {
              title: 'Example',
              description: 'This is a description',
              timestamp: 'just now',
              theme: 'secondary',
              icon: 'check',
            },
            { duration: 40000 },
          )
        )}
      />
      <DToastContainer
        position="top-right"
      />
    </DContextProvider>
  );
}
`,language:"tsx",dark:!0}),`
`,t.jsx(e.h2,{id:"full-toast-secondary-soft",children:"Full toast secondary soft"}),`
`,t.jsx(o,{children:t.jsx("div",{className:"d-flex flex-column justify-content-end align-items-end",style:{height:"200px"},children:t.jsx(i,{type:"soft"})})}),`
`,t.jsx(s,{code:`
import {
  DContextProvider,
  DToastContainer,
  useDToast,
} from '@dynamic-framework/ui-react';

export function App() {
  const { toast } = useDToast();

  return (
    <DContextProvider>
      <DButton
        text="Show Toast"
        onClick={() => (
          toast(
            {
              title: 'Example',
              description: 'This is a description',
              timestamp: 'just now',
              theme: 'secondary',
              soft: true,
              icon: 'check',
            },
            { duration: 40000 },
          )
        )}
      />
      <DToastContainer
        position="top-right"
      />
    </DContextProvider>
  );
}
`,language:"tsx",dark:!0}),`
`,t.jsx(e.h2,{id:"custom-example",children:"Custom example"}),`
`,t.jsx(o,{children:t.jsx("div",{className:"d-flex flex-column justify-content-end align-items-end",style:{height:"200px"},children:t.jsx(l,{})})}),`
`,t.jsx(e.h3,{id:"apptsx",children:t.jsx(e.code,{children:"App.tsx"})}),`
`,t.jsx(s,{code:`
import {
  DContextProvider,
  DToastContainer,
  useDToast,
} from '@dynamic-framework/ui-react';

import CustomToastExample from './CustomToastExample';

export function App() {
  const { toast } = useDToast();

  return (
    <DContextProvider>
      <DButton
        text="Show Toast"
        onClick={() => (
          toast(
            CustomToastExample,
          {
            duration: 3000,
          })
        )}
      />
      <DToastContainer
        position="top-right"
      />
    </DContextProvider>
  );
    }
`,language:"tsx",dark:!0}),`
`,t.jsx(e.h3,{id:"customtoastexampletsx",children:t.jsx(e.code,{children:"CustomToastExample.tsx"})}),`
`,t.jsx(s,{code:`
import {
  DButton,
} from '@dynamic-framework/ui-react';
import { toast as reactToast, Toast } from 'react-hot-toast';

export function CustomToastExample({ id, visible }: Toast) {
  if (!visible) {
    return null;
  }
  return (
    <div className="bg-surface-secondary rounded-2 p-4 text-center">
      <p className="fw-bold mt-0">Toast!</p>
      <DButton
        size="sm"
        variant="outline"
        theme="secondary"
        text="Close toast"
        onClick={() => reactToast.dismiss(id)}
      />
    </div>
  );
}
`,language:"tsx",dark:!0})]})}function N(n={}){const{wrapper:e}={...c(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(r,{...n})}):r(n)}export{N as default};
