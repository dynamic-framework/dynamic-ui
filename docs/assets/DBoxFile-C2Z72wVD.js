import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{useMDXComponents as j}from"./index-DlpNa54Y.js";import{ae as y,ah as F,ai as N,aj as B,ak as t,al as k}from"./index-DVEinyGq.js";import{D as C,a as L,b as f}from"./DBoxFile.stories-3ZfhkI9U.js";import{r as x}from"./index-BwDkhjyp.js";import{D as a,u as P}from"./useDToast-BpVXdL6V.js";import{D as $}from"./DButton-CuxtYPFC.js";import{D as d}from"./DContext-K5yUkfPZ.js";import{P as i}from"./config-BV4l-vIF.js";import"./iframe-BH4iTL0x.js";import"../sb-preview/runtime.js";import"./index-Jr15HXM4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Cu4lwwaE.js";import"./isNativeReflectConstruct-DULPOR7A.js";import"./index-C8cAHwr1.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-DrFu-skq.js";import"./index-ELyB7pIJ.js";import"./DIcon-NWah5INO.js";import"./DInput-DLv3xEYs.js";import"./useProvidedRefOrCreate-DoZI9Y9Y.js";import"./constants-BfTaJ1B2.js";import"./DToast-DsMnxvi5.js";function E({name:l,filePreview:s}){return e.jsx("img",{className:"img-thumbnail",src:s,alt:l,onLoad:()=>URL.revokeObjectURL(s),style:{width:"120px"}})}function c({showPreview:l,...s}){const{toast:n}=P(),[p,u]=x.useState([]),b=x.useCallback(o=>{n({title:"Error",description:o instanceof Error?o.message:"Unknown error",theme:"danger"})},[n]),h=x.useCallback(o=>{u(o.map(r=>Object.assign(r,{preview:URL.createObjectURL(r)})))},[]),g=x.useCallback((o,r)=>{o.length>0&&(n({title:"Accepted file",theme:"success"}),h([...p,...o])),r.forEach(({file:v,errors:w})=>{n({title:`Error on ${v.name}`,description:w.map(({message:D})=>D).join(", "),theme:"danger"})})},[p,h,n]);return e.jsxs(e.Fragment,{children:[e.jsx(C,{accept:{"image/*":[".png",".jpg",".jpeg",".svg"]},onDrop:g,maxSize:1024*1024,onError:b,onLoad:h,...s,children:o=>e.jsxs("div",{className:"d-flex flex-column gap-4 align-items-center",children:[e.jsx("p",{className:"m-0",children:"Drag and drop it here or"}),e.jsx($,{theme:"primary",variant:"outline",text:"Select the file",onClick:o,...s.disabled&&{disabled:!0}}),e.jsx("p",{className:"text-gray m-0 small",children:"Allowed formats: svg, png, jpg"})]})}),l&&e.jsx("aside",{className:"d-flex flex-wrap gap-4",children:p.map(({name:o,preview:r})=>e.jsx(E,{name:o,filePreview:r},o))})]})}function R(){return e.jsxs(d,{children:[e.jsx("div",{style:{width:"320px"},className:"d-flex flex-column justify-content-center gap-3",children:e.jsx(c,{})}),e.jsx(a,{position:"top-right"})]})}function S(){return e.jsxs(d,{children:[e.jsx("div",{style:{width:"320px"},className:"d-flex flex-column justify-content-center gap-3",children:e.jsx(c,{disabled:!0})}),e.jsx(a,{position:"top-right"})]})}function U(){return e.jsxs(d,{children:[e.jsx("div",{style:{width:"320px"},className:"d-flex flex-column justify-content-center gap-3",children:e.jsx(c,{className:"d-box-file-selected"})}),e.jsx(a,{position:"top-right"})]})}function I(){return e.jsxs(d,{children:[e.jsx("div",{style:{width:"320px"},className:"d-flex flex-column justify-content-center gap-3",children:e.jsx(c,{value:["https://cdn.modyo.cloud/uploads/8c051a86-0d5b-4064-b5fd-76fb346e0fb0/original/dynamic_logo.svg"]})}),e.jsx(a,{position:"top-right"})]})}function M(){return e.jsxs(d,{children:[e.jsx("div",{style:{width:"320px"},className:"d-flex flex-column justify-content-center gap-3",children:e.jsx(c,{value:["https://placehold.co/600x400","https://cdn.modyo.cloud/uploads/8c051a86-0d5b-4064-b5fd-76fb346e0fb0/original/dynamic_logo.svg"],showPreview:!0,multiple:!0})}),e.jsx(a,{position:"top-right"})]})}function m(l){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...j(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(y,{of:L}),`
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
`,e.jsx(k,{language:"tsx",dark:!0,code:`
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
`,e.jsx("hr",{})]})}function ae(l={}){const{wrapper:s}={...j(),...l.components};return s?e.jsx(s,{...l,children:e.jsx(m,{...l})}):m(l)}export{ae as default};
