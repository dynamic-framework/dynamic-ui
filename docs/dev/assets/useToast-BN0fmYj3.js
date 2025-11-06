import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-jud9GOph.js";import{M as x,U as s,c as n}from"./blocks-CasXvee6.js";import{D as d,u as i,c as h}from"./useDToast-BUBQ_KbX.js";import{D as a}from"./DButton-TGnXMkmd.js";import{D as u}from"./DContext-DnrHYxse.js";import{D as f}from"./DAlert-jJ8MYA-u.js";import"./iframe-Yvsh7xC9.js";import"./index-B907fQrS.js";import"./index-BVHJzkj7.js";import"./index-DvQjpGce.js";import"./DToast-B5wLm-CK.js";import"./DIcon-kG3_WTRG.js";import"./config-C3iYXcFk.js";function j(){const{toast:e}=i();return t.jsx(a,{text:"Toast - No color",color:"light",onClick:()=>e({title:"Example",timestamp:"just now",icon:"check"},{duration:4e4})})}function T(){const{toast:e}=i();return t.jsx(a,{text:"Toast success",color:"light",onClick:()=>e({title:"Example",timestamp:"just now",icon:"check",color:"success"},{duration:4e4})})}function r({type:e="base"}){return t.jsxs(u,{children:[e==="base"&&t.jsx(j,{}),e==="success"&&t.jsx(T,{}),t.jsx(d,{position:"top-right"})]})}function g(){const{toast:e}=i();return t.jsx(a,{text:"Toast full - No color",color:"light",onClick:()=>e({title:"Example",description:"This is a description",timestamp:"just now",icon:"check"},{duration:4e3})})}function D(){const{toast:e}=i();return t.jsx(a,{text:"Toast full success",color:"light",onClick:()=>e({title:"Example",description:"This is a description",timestamp:"just now",color:"success",icon:"check"},{duration:4e3})})}function c({type:e="base"}){return t.jsxs(u,{children:[e==="base"&&t.jsx(g,{}),e==="success"&&t.jsx(D,{}),t.jsx(d,{position:"top-right"})]})}function l({id:e,visible:o}){return o?t.jsxs("div",{className:"bg-secondary-subtle rounded-2 p-4 text-center",children:[t.jsx("p",{className:"fw-bold mt-0",children:"Toast!"}),t.jsx(a,{size:"sm",variant:"outline",color:"secondary",text:"Close toast",onClick:()=>h.dismiss(e)})]}):null}function y(){const{toast:e}=i();return t.jsx(a,{text:"Show Toast",onClick:()=>e(l,{duration:4e3})})}function C(){return t.jsxs(u,{children:[t.jsx(y,{}),t.jsx(d,{position:"top-right"})]})}try{r.displayName="ExampleSimpleToastRoot",r.__docgenInfo={description:"",displayName:"ExampleSimpleToastRoot",props:{type:{defaultValue:{value:"base"},description:"",name:"type",required:!1,type:{name:"string"}}}}}catch{}try{c.displayName="ExampleFullToastRoot",c.__docgenInfo={description:"",displayName:"ExampleFullToastRoot",props:{type:{defaultValue:{value:"base"},description:"",name:"type",required:!1,type:{name:"string"}}}}}catch{}try{l.displayName="CustomToastExample",l.__docgenInfo={description:"",displayName:"CustomToastExample",props:{}}}catch{}function p(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...m(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(x,{title:"Design System/Patterns/Toast"}),`
`,t.jsx(o.h1,{id:"toast",children:"Toast"}),`
`,t.jsx(o.p,{children:t.jsx(o.img,{src:"https://img.shields.io/badge/Abstraction%20Component-4848b7",alt:"Shield Badge"})}),`
`,t.jsxs(o.p,{children:["Toasts use ",t.jsx(o.code,{children:"DToastContainer"})," and the ",t.jsx(o.code,{children:"useDToast"}),` hook, which are abstractions to configure react-hot-toast in conjunction with
a `,t.jsx(o.code,{children:"DToast"})," to generate toasts. For more detailed information, refer to the official ",t.jsx(o.a,{href:"https://react-hot-toast.com/docs",rel:"nofollow",children:"React Hot Toast Documentation"}),"."]}),`
`,t.jsx("br",{}),`
`,t.jsx(s,{children:t.jsx(f,{color:"warning",children:t.jsx("span",{children:t.jsx(o.p,{children:`Toast appears in all containers because of the way react-hot-toast is
programmed, however, if you want to see the correct toast make it show up
from the correct container.`})})})}),`
`,t.jsx(o.h2,{id:"usage-dtoastcontainer",children:"Usage DToastContainer"}),`
`,t.jsxs(o.p,{children:["To get started, include the ",t.jsx(o.strong,{children:t.jsx(o.code,{children:"<DToastContainer />"})}),` component once in your app, typically near the root of your component tree.
This ensures that all toasts are rendered correctly. Here you can customize general styles for all toasts and configure a default
placement for displaying toasts. You can override this position in any single toast if needed.`]}),`
`,t.jsx(o.h2,{id:"usage-usedtoast",children:"Usage useDToast"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"useDToast"})," hook provides a simple and flexible way to create toast notifications in your application. By ",t.jsx(o.strong,{children:"default"}),`, it uses the
`,t.jsx(o.code,{children:"DToast"})," component to display the toast message. However, you can also render a custom component if needed."]}),`
`,t.jsx(o.p,{children:"Below you will see examples of the use of toast in a simple way, with a custom component and with Material Icons."}),`
`,t.jsx(o.h2,{id:"basic-toast-no-color",children:"Basic toast no color"}),`
`,t.jsx(s,{children:t.jsx("div",{className:"d-flex flex-column justify-content-end align-items-end",style:{height:"200px"},children:t.jsx(r,{})})}),`
`,t.jsx(n,{code:`
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
  onClick={() => toast({ title: "Example" }, { duration: 40000 })}
/>
<DToastContainer position="top-right" />
</DContextProvider>
); } `,language:"tsx",dark:!0}),`
`,t.jsx(o.h2,{id:"basic-toast-success-color",children:"Basic toast success color"}),`
`,t.jsx(s,{children:t.jsx("div",{className:"d-flex flex-column justify-content-end align-items-end",style:{height:"200px"},children:t.jsx(r,{type:"success"})})}),`
`,t.jsx(n,{code:`
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
  onClick={() =>
    toast(
      {
        title: "Example",
        color: "success",
      },
      { duration: 40000 }
    )
  }
/>
<DToastContainer position="top-right" />
</DContextProvider>
); } `,language:"tsx",dark:!0}),`
`,t.jsx(o.h2,{id:"full-toast-no-color",children:"Full toast no color"}),`
`,t.jsx(s,{children:t.jsx("div",{className:"d-flex flex-column justify-content-end align-items-end",style:{height:"200px"},children:t.jsx(c,{type:"base"})})}),`
`,t.jsx(n,{code:`
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
  onClick={() =>
    toast(
      {
        title: "Example",
        description: "This is a description",
        timestamp: "just now",
        icon: "check",
      },
      { duration: 40000 }
    )
  }
/>
<DToastContainer position="top-right" />
</DContextProvider>
); } `,language:"tsx",dark:!0}),`
`,t.jsx(o.h2,{id:"full-toast-success-color",children:"Full toast success color"}),`
`,t.jsx(s,{children:t.jsx("div",{className:"d-flex flex-column justify-content-end align-items-end",style:{height:"200px"},children:t.jsx(c,{type:"success"})})}),`
`,t.jsx(n,{code:`
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
  onClick={() =>
    toast(
      {
        title: "Example",
        description: "This is a description",
        timestamp: "just now",
        color: "success",
        icon: "check",
      },
      { duration: 40000 }
    )
  }
/>
<DToastContainer position="top-right" />
</DContextProvider>
); } `,language:"tsx",dark:!0}),`
`,t.jsx(o.h2,{id:"custom-example",children:"Custom example"}),`
`,t.jsx(s,{children:t.jsx("div",{className:"d-flex flex-column justify-content-end align-items-end",style:{height:"200px"},children:t.jsx(C,{})})}),`
`,t.jsx(o.h3,{id:"apptsx",children:t.jsx(o.code,{children:"App.tsx"})}),`
`,t.jsx(n,{code:`
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
        onClick={() =>
          toast(CustomToastExample, {
            duration: 3000,
          })
        }
      />
      <DToastContainer position="top-right" />
    </DContextProvider>
  ); 
} 
`,language:"tsx",dark:!0}),`
`,t.jsx(o.h3,{id:"customtoastexampletsx",children:t.jsx(o.code,{children:"CustomToastExample.tsx"})}),`
`,t.jsx(n,{code:`
import {
DButton,
} from '@dynamic-framework/ui-react';
import { toast as reactToast, Toast } from 'react-hot-toast';

export function CustomToastExample({ id, visible }: Toast) {
  if (!visible) {
    return null;
  }
  
  return (
    <div className="bg-secondary-subtle rounded-2 p-4 text-center">
      <p className="fw-bold mt-0">Toast!</p>
      <DButton
        size="sm"
        variant="outline"
        color="secondary"
        text="Close toast"
        onClick={() => reactToast.dismiss(id)}
      />
    </div>
  );
}
`,language:"tsx",dark:!0})]})}function M(e={}){const{wrapper:o}={...m(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(p,{...e})}):p(e)}export{M as default};
