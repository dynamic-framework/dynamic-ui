import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{useMDXComponents as f}from"./index-DlpNa54Y.js";import{ae as g,ah as D,ai as v,aj as y,ak as r}from"./index-Cm-SA4Al.js";import{D as $,a as B,b as a}from"./DBoxFile.stories-B5u9kgPr.js";import{r as c}from"./index-BwDkhjyp.js";import{D as l,u as w}from"./useDToast-BpVXdL6V.js";import{D as E}from"./DButton-Ba_arLMY.js";import{D as t}from"./DContext-K5yUkfPZ.js";import{P as i}from"./config-BV4l-vIF.js";import"./iframe-CxciKjQx.js";import"../sb-preview/runtime.js";import"./index-Jr15HXM4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Cu4lwwaE.js";import"./isNativeReflectConstruct-DULPOR7A.js";import"./index-C8cAHwr1.js";import"./index-DrFu-skq.js";import"./index-ELyB7pIJ.js";import"./DIcon-NWah5INO.js";import"./DInput-Cx_Zrwj0.js";import"./useProvidedRefOrCreate-DoZI9Y9Y.js";import"./constants-BfTaJ1B2.js";import"./DToast-DsMnxvi5.js";function d(o){const{toast:s}=w(),h=c.useCallback(n=>{s({title:"Error",description:n instanceof Error?n.message:"Unknown error",theme:"danger"})},[s]),p=c.useCallback((n,m)=>{n.length>0&&s({title:"Accepted file",theme:"success"}),m.forEach(({file:j,errors:u})=>{s({title:`Error on ${j.name}`,description:u.map(({message:b})=>b).join(", "),theme:"danger"})})},[s]);return e.jsx($,{accept:{"image/*":[".png",".jpg",".jpeg",".svg"]},onDrop:p,maxSize:1024*1024,onError:h,...o,children:n=>e.jsxs("div",{className:"d-flex flex-column gap-4 align-items-center",children:[e.jsx("p",{className:"m-0",children:"Drag and drop it here or"}),e.jsx(E,{theme:"primary",variant:"outline",text:"Select the file",onClick:n,...o.disabled&&{disabled:!0}}),e.jsx("p",{className:"text-gray m-0 small",children:"Allowed formats: svg, png, jpg"})]})})}function F(){return e.jsxs(t,{children:[e.jsx("div",{style:{width:"320px"},className:"d-flex flex-column justify-content-center gap-3",children:e.jsx(d,{})}),e.jsx(l,{position:"top-right"})]})}function C(){return e.jsxs(t,{children:[e.jsx("div",{style:{width:"320px"},className:"d-flex flex-column justify-content-center gap-3",children:e.jsx(d,{disabled:!0})}),e.jsx(l,{position:"top-right"})]})}function N(){return e.jsxs(t,{children:[e.jsx("div",{style:{width:"320px"},className:"d-flex flex-column justify-content-center gap-3",children:e.jsx(d,{className:"d-box-file-selected"})}),e.jsx(l,{position:"top-right"})]})}function S(){return e.jsxs(t,{children:[e.jsx("div",{style:{width:"320px"},className:"d-flex flex-column justify-content-center gap-3",children:e.jsx(d,{value:["https://placehold.co/600x400","/../assets/1.png","/../assets/2.png","/../assets/3.png"]})}),e.jsx(l,{position:"top-right"})]})}function x(o){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...f(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(g,{of:B}),`
`,e.jsx(s.h1,{id:"dboxfile",children:"DBoxFile"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"DBoxFile"}),` component is a drag-and-drop solution for file uploads. It supports preloading images from URLs and allows users to delete uploaded files.
The component's behavior is inspired by the `,e.jsx(s.a,{href:"https://react-dropzone.js.org/",rel:"nofollow",children:"React Dropzone"})," library."]}),`
`,e.jsx(s.h2,{id:"features",children:"Features"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Drag-and-drop support"}),": Easily upload files by dragging them into the component."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Preloaded files"}),": Initialize the component with files from URLs."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"File deletion"}),": Users can remove uploaded files directly from the interface."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Multiple file uploads"}),": Configurable to accept one or multiple files."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"File validation"}),": Supports MIME type and file size validation."]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.h2,{id:"css-variables",children:"CSS Variables"}),`
`,e.jsx(D,{children:`
| Variable                                 | Class       | Type            | Description              |
|------------------------------------------|-------------|-----------------|--------------------------|
| --${i}box-file-gap               | .d-box-file | css length unit | Space between elements   |
| --${i}box-file-bg                | .d-box-file | css color unit  | Background               |
| --${i}box-file-border            | .d-box-file | css border      | Border                   |
| --${i}box-file-border-radius     | .d-box-file | css length unit | Border radius            |
| --${i}box-file-padding           | .d-box-file | css length unit | Padding                  |
| --${i}box-file-content-max-width | .d-box-file | css length unit | Max width of the content |
| --${i}box-file-icon-size         | .d-box-file | css length unit | Icon size                |
| --${i}box-file-icon-color        | .d-box-file | css color unit  | Icon color               |
| --${i}box-file-hover-border      | .d-box-file | css border      | Hover Border             |
| --${i}box-file-hover-bg          | .d-box-file | css color unit  | Hover background         |
| --${i}box-file-selected-border   | .d-box-file | css border      | Selected border          |
| --${i}box-file-selected-bg       | .d-box-file | css color unit  | Selected background      |
| --${i}box-file-disabled-border   | .d-box-file | css border      | Disabled Border          |
| --${i}box-file-disabled-bg       | .d-box-file | css color unit  | Disabled background      |
| --${i}box-file-valid-border      | .d-box-file | css border      | Valid border             |
| --${i}box-file-invalid-border    | .d-box-file | css color unit  | Valid background         |
  `}),`
`,e.jsx(v,{of:a}),`
`,e.jsx(y,{of:a}),`
`,e.jsx(s.h3,{id:"default",children:"Default"}),`
`,e.jsx(r,{children:e.jsx("div",{className:"d-flex justify-content-center",children:e.jsx(F,{})})}),`
`,e.jsx("hr",{}),`
`,e.jsx(s.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(r,{children:e.jsx("div",{className:"d-flex justify-content-center",children:e.jsx(C,{})})}),`
`,e.jsx("hr",{}),`
`,e.jsx(s.h3,{id:"selected",children:"Selected"}),`
`,e.jsx(r,{children:e.jsx("div",{className:"d-flex justify-content-center",children:e.jsx(N,{})})}),`
`,e.jsx("hr",{}),`
`,e.jsx(s.h3,{id:"with-values",children:"With values"}),`
`,e.jsx(r,{children:e.jsx("div",{className:"d-flex justify-content-center",children:e.jsx(S,{})})}),`
`,e.jsx("hr",{})]})}function ee(o={}){const{wrapper:s}={...f(),...o.components};return s?e.jsx(s,{...o,children:e.jsx(x,{...o})}):x(o)}export{ee as default};
