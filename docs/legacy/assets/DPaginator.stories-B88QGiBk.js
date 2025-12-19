import{j as e}from"./jsx-runtime-DztICxWZ.js";import{r as i}from"./index-Bv9Y92EF.js";import{D as s}from"./DPaginator-DE_rAoQI.js";import{P as c}from"./config-BV4l-vIF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BhKcopM4.js";import"./index-ym0Fkt11.js";import"./index-Dmu3RR_O.js";import"./index-PkosZWDx.js";const k={title:"Design System/Components/Paginator",component:s,parameters:{docs:{description:{component:`
![Shield Badge](https://img.shields.io/badge/Wrapper%20Component-red)

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Pagination](https://getbootstrap.com/docs/5.3/components/pagination/)
+ [React Responsive Pagination](https://react-responsive-pagination.elantha.com/)

## CSS Variables
The Bootstrap documentation provides details on the default [Pagination CSS Variables](https://getbootstrap.com/docs/5.3/components/pagination/#css)

| Variable                                             | Class       | Type                   | Description                  |
|------------------------------------------------------|-------------|------------------------|------------------------------|
| --${c}pagination-page-item-size              | .pagination | css length unit        | Size of page item            |
| --${c}pagination-page-border-radius          | .pagination | css border radius unit | Radius page item             |
| --${c}pagination-page-control-color          | .pagination | css color unit         | Page control color           |
| --${c}pagination-page-control-disabled-color | .pagination | css color unit         | Page control disabled color  |
       `}}},argTypes:{total:{control:"number"},page:{control:"number"},onPageChange:{action:"onPageChange",type:{name:"function"}},maxWidth:{control:"number"},className:{control:"text"},extraClassName:{control:"text"},pageItemClassName:{control:"text"},pageLinkClassName:{control:"text"},activeItemClassName:{control:"text"},disabledItemClassName:{control:"text"},disabledLinkClassName:{control:"text"},navClassName:{control:"text"},previousClassName:{control:"text"},nextClassName:{control:"text",type:"string"},previousLabel:{control:"text"},nextLabel:{control:"text"},ariaPreviousLabel:{control:"text"},ariaNextLabel:{control:"text"},renderNav:{control:"boolean"},ariaCurrentAttr:{control:"boolean"},linkHref:{control:{type:"radio",labels:{undefined:"empty"}},options:[void 0,"hash","omit"]},showArrows:{control:"boolean"}},tags:["autodocs"]},g={decorators:[t=>e.jsx("div",{style:{width:"calc(100dvw - 64px)"},children:e.jsx(t,{})})],render:function({page:a,...o}){const[r,n]=i.useState(a);return e.jsx(s,{...o,page:r,onPageChange:n,className:"justify-content-center"})},args:{total:20,maxWidth:400}},d={decorators:[t=>e.jsx("div",{style:{width:"calc(100dvw - 64px)"},children:e.jsx(t,{})})],render:function({page:a,...o}){const[r,n]=i.useState(a);return e.jsx(s,{...o,page:r,onPageChange:n,className:"justify-content-center"})},args:{total:20,nextLabel:"Next",previousLabel:"Previous",maxWidth:200}},p={decorators:[t=>e.jsx("div",{style:{width:"calc(100dvw - 64px)"},children:e.jsx(t,{})})],render:function({page:a,...o}){const[r,n]=i.useState(a);return e.jsx(s,{...o,page:r,onPageChange:n,className:"justify-content-center"})},args:{showArrows:!1,total:20,maxWidth:200}},l={decorators:[t=>e.jsx("div",{style:{width:"calc(100dvw - 64px)"},children:e.jsx(t,{})})],render:function({page:a,...o}){const[r,n]=i.useState(a);return e.jsx(s,{...o,page:r,onPageChange:n,className:"justify-content-center"})},args:{total:20,page:10,maxWidth:200}},m={decorators:[t=>e.jsx("div",{style:{width:"calc(100dvw - 64px)"},children:e.jsx(t,{})})],render:function({page:a,...o}){const[r,n]=i.useState(a);return e.jsx(s,{...o,page:r,onPageChange:n,className:"justify-content-center"})},args:{total:20,maxWidth:400}};var u,P,x;g.parameters={...g.parameters,docs:{...(u=g.parameters)==null?void 0:u.docs,source:{originalSource:`{
  decorators: [(Story: StoryFn) => <div style={{
    width: 'calc(100dvw - 64px)'
  }}>
        <Story />
      </div>],
  render: function Render({
    page: initialPage,
    ...args
  }: ComponentProps<typeof DPaginator>) {
    const [page, setPage] = useState<number | undefined>(initialPage);
    return <DPaginator {...args} page={page} onPageChange={setPage} className="justify-content-center" />;
  },
  args: {
    total: 20,
    maxWidth: 400
  }
}`,...(x=(P=g.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};var h,y,f;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  decorators: [(Story: StoryFn) => <div style={{
    width: 'calc(100dvw - 64px)'
  }}>
        <Story />
      </div>],
  render: function Render({
    page: initialPage,
    ...args
  }: ComponentProps<typeof DPaginator>) {
    const [page, setPage] = useState<number | undefined>(initialPage);
    return <DPaginator {...args} page={page} onPageChange={setPage} className="justify-content-center" />;
  },
  args: {
    total: 20,
    nextLabel: 'Next',
    previousLabel: 'Previous',
    maxWidth: 200
  }
}`,...(f=(y=d.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,C,S;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  decorators: [(Story: StoryFn) => <div style={{
    width: 'calc(100dvw - 64px)'
  }}>
        <Story />
      </div>],
  render: function Render({
    page: initialPage,
    ...args
  }: ComponentProps<typeof DPaginator>) {
    const [page, setPage] = useState<number | undefined>(initialPage);
    return <DPaginator {...args} page={page} onPageChange={setPage} className="justify-content-center" />;
  },
  args: {
    showArrows: false,
    total: 20,
    maxWidth: 200
  }
}`,...(S=(C=p.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var b,w,j;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  decorators: [(Story: StoryFn) => <div style={{
    width: 'calc(100dvw - 64px)'
  }}>
        <Story />
      </div>],
  render: function Render({
    page: initialPage,
    ...args
  }: ComponentProps<typeof DPaginator>) {
    const [page, setPage] = useState<number | undefined>(initialPage);
    return <DPaginator {...args} page={page} onPageChange={setPage} className="justify-content-center" />;
  },
  args: {
    total: 20,
    page: 10,
    maxWidth: 200
  }
}`,...(j=(w=l.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var N,D,R;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  decorators: [(Story: StoryFn) => <div style={{
    width: 'calc(100dvw - 64px)'
  }}>
        <Story />
      </div>],
  render: function Render({
    page: initialPage,
    ...args
  }: ComponentProps<typeof DPaginator>) {
    const [page, setPage] = useState<number | undefined>(initialPage);
    return <DPaginator {...args} page={page} onPageChange={setPage} className="justify-content-center" />;
  },
  args: {
    total: 20,
    maxWidth: 400
  }
}`,...(R=(D=m.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};const V=["Default","LabelArrows","NoArrows","CustomCurrentPage","CustomMaxWidth"];export{l as CustomCurrentPage,m as CustomMaxWidth,g as Default,d as LabelArrows,p as NoArrows,V as __namedExportsOrder,k as default};
