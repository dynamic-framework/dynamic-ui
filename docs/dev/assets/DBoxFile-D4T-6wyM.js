import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as j}from"./index-jud9GOph.js";import{M as y,a as F,C as N,b as B,U as t,c as C}from"./blocks-CasXvee6.js";import{D as L,a as P,b as f}from"./DBoxFile.stories-DDw1D1gL.js";import{r as x}from"./iframe-Yvsh7xC9.js";import{D as d,u as $}from"./useDToast-BUBQ_KbX.js";import{D as k}from"./DButton-TGnXMkmd.js";import{D as a}from"./DContext-DnrHYxse.js";import{P as i}from"./config-C3iYXcFk.js";import"./index-B907fQrS.js";import"./index-BVHJzkj7.js";import"./index-DvQjpGce.js";import"./DIcon-kG3_WTRG.js";import"./DInput-U-qh2Kxo.js";import"./useProvidedRefOrCreate-B2yyi32D.js";import"./constants-BoPmzNgw.js";import"./DToast-B5wLm-CK.js";function E({name:o,filePreview:s}){return e.jsx("img",{className:"img-thumbnail",src:s,alt:o,onLoad:()=>URL.revokeObjectURL(s),style:{width:"120px"}})}function c({showPreview:o,...s}){const{toast:r}=$(),[p,u]=x.useState([]),b=x.useCallback(l=>{r({title:"Error",description:l instanceof Error?l.message:"Unknown error",color:"danger"})},[r]),h=x.useCallback(l=>{u(l.map(n=>Object.assign(n,{preview:URL.createObjectURL(n)})))},[]),g=x.useCallback((l,n)=>{l.length>0&&(r({title:"Accepted file",color:"success"}),h([...p,...l])),n.forEach(({file:v,errors:w})=>{r({title:`Error on ${v.name}`,description:w.map(({message:D})=>D).join(", "),color:"danger"})})},[p,h,r]);return e.jsxs(e.Fragment,{children:[e.jsx(L,{accept:{"image/*":[".png",".jpg",".jpeg",".svg"]},onDrop:g,maxSize:1024*1024,onError:b,onLoad:h,...s,children:l=>e.jsxs("div",{className:"d-flex flex-column gap-4 align-items-center",children:[e.jsx("p",{className:"m-0",children:"Drag and drop it here or"}),e.jsx(k,{color:"primary",variant:"outline",text:"Select the file",onClick:l,...s.disabled&&{disabled:!0}}),e.jsx("p",{className:"text-gray m-0 small",children:"Allowed formats: svg, png, jpg"})]})}),o&&e.jsx("aside",{className:"d-flex flex-wrap gap-4",children:p.map(({name:l,preview:n})=>e.jsx(E,{name:l,filePreview:n},l))})]})}function R(){return e.jsxs(a,{children:[e.jsx("div",{style:{width:"320px"},className:"d-flex flex-column justify-content-center gap-3",children:e.jsx(c,{})}),e.jsx(d,{position:"top-right"})]})}function S(){return e.jsxs(a,{children:[e.jsx("div",{style:{width:"320px"},className:"d-flex flex-column justify-content-center gap-3",children:e.jsx(c,{disabled:!0})}),e.jsx(d,{position:"top-right"})]})}function U(){return e.jsxs(a,{children:[e.jsx("div",{style:{width:"320px"},className:"d-flex flex-column justify-content-center gap-3",children:e.jsx(c,{className:"d-box-file-selected"})}),e.jsx(d,{position:"top-right"})]})}function I(){return e.jsxs(a,{children:[e.jsx("div",{style:{width:"320px"},className:"d-flex flex-column justify-content-center gap-3",children:e.jsx(c,{value:["https://cdn.modyo.cloud/uploads/8c051a86-0d5b-4064-b5fd-76fb346e0fb0/original/dynamic_logo.svg"]})}),e.jsx(d,{position:"top-right"})]})}function M(){return e.jsxs(a,{children:[e.jsx("div",{style:{width:"320px"},className:"d-flex flex-column justify-content-center gap-3",children:e.jsx(c,{value:["https://placehold.co/600x400","https://cdn.modyo.cloud/uploads/8c051a86-0d5b-4064-b5fd-76fb346e0fb0/original/dynamic_logo.svg"],showPreview:!0,multiple:!0})}),e.jsx(d,{position:"top-right"})]})}function m(o){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...j(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(y,{of:P}),`
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
`,e.jsx(F,{children:`
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
`,e.jsx(N,{of:f}),`
`,e.jsx(B,{of:f}),`
`,e.jsx(s.h3,{id:"default",children:"Default"}),`
`,e.jsx(t,{children:e.jsx("div",{className:"d-flex justify-content-center",children:e.jsx(R,{})})}),`
`,e.jsx("hr",{}),`
`,e.jsx(s.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(t,{children:e.jsx("div",{className:"d-flex justify-content-center",children:e.jsx(S,{})})}),`
`,e.jsx("hr",{}),`
`,e.jsx(s.h3,{id:"selected",children:"Selected"}),`
`,e.jsx(t,{children:e.jsx("div",{className:"d-flex justify-content-center",children:e.jsx(U,{})})}),`
`,e.jsx("hr",{}),`
`,e.jsx(s.h3,{id:"with-values",children:"With values"}),`
`,e.jsx(t,{children:e.jsx("div",{className:"d-flex justify-content-center",children:e.jsx(I,{})})}),`
`,e.jsx("hr",{}),`
`,e.jsx(s.h3,{id:"preview-files-type-image",children:"Preview files type image"}),`
`,e.jsx(s.p,{children:"Preview can be easily achieved as follows:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"onLoad"})," prop, which is called when ",e.jsx(s.code,{children:"value"})," are set and returns the files."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"onDrop"})," prop, which is called when files are dropped into the component, and returns the accepted and rejected files."]}),`
`]}),`
`,e.jsxs(s.p,{children:["Here is an example of how to use the ",e.jsx(s.code,{children:"onLoad"})," and ",e.jsx(s.code,{children:"onDrop"})," props to set the preview of the files"]}),`
`,e.jsx(t,{children:e.jsx("div",{className:"d-flex justify-content-center mt-8",children:e.jsx(M,{})})}),`
`,e.jsx(C,{language:"tsx",dark:!0,code:`
function YourComponent() {
const [previews, setPreviews] = useState<(File & { preview: string })[]>([]);

const setImagePreview = useCallback((files: File[]) => {
  setPreviews(files.map((file) => Object.assign(file, {
    preview: URL.createObjectURL(file),
  })));
}, []);

const handleDrop = useCallback((accepted: File[], rejected: RejectedFile[]) => {
  if (accepted.length > 0) {
    setImagePreview([...previews, ...accepted]);
  }
}, [previews, setImagePreview]);

return (
  <>
    <DBoxFile
      accept={{
        'image/*': ['.png', '.jpg', '.jpeg', '.svg'],
      }}
      onDrop={handleDrop}
      onLoad={setImagePreview}
      multiple
    >
      <div className="d-flex flex-column gap-4 align-items-center">
        <p className="m-0">
          Drag and drop it here or
        </p>
        <p className="text-gray m-0 small">
          Allowed formats: svg, png, jpg
        </p>
      </div>
    </DBoxFile>
    <aside className="d-flex flex-wrap gap-4">
      {previews.map(({ name, preview }) => (
        <img
          className="img-thumbnail"
          src={preview}
          alt={name}
          onLoad={() => URL.revokeObjectURL(preview)}
          style={{
            width: '120px',
          }}
        />
      ))}
    </aside>
  </>
);
}
  `}),`
`,e.jsx("hr",{})]})}function se(o={}){const{wrapper:s}={...j(),...o.components};return s?e.jsx(s,{...o,children:e.jsx(m,{...o})}):m(o)}export{se as default};
