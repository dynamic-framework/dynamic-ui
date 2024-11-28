import{j as e}from"./jsx-runtime-DQ32znRX.js";import{r as i}from"./index-DH5ua8nC.js";import{D as n}from"./DPaginator-gubx7Rk1.js";import{P as c}from"./config-CUZHf55T.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CpCSUgdU.js";import"./index-D9uilScg.js";import"./index-mLFX9G4A.js";const $={title:"Design System/Components/Paginator",component:n,parameters:{docs:{description:{component:`
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
       `}}},argTypes:{total:{control:"number"},page:{control:"number"},onPageChange:{action:"onPageChange",type:{name:"function"}},maxWidth:{control:"number"},className:{control:"text"},extraClassName:{control:"text"},pageItemClassName:{control:"text"},pageLinkClassName:{control:"text"},activeItemClassName:{control:"text"},disabledItemClassName:{control:"text"},disabledLinkClassName:{control:"text"},navClassName:{control:"text"},previousClassName:{control:"text"},nextClassName:{control:"text",type:"string"},previousLabel:{control:"text"},nextLabel:{control:"text"},ariaPreviousLabel:{control:"text"},ariaNextLabel:{control:"text"},renderNav:{control:"boolean"},ariaCurrentAttr:{control:"boolean"},linkHref:{control:{type:"radio",labels:{undefined:"empty"}},options:[void 0,"hash","omit"]},showArrows:{control:"boolean"}},tags:["autodocs"]},g={decorators:[t=>e.jsx("div",{style:{width:"calc(100dvw - 64px)"},children:e.jsx(t,{})})],render:function({page:a,...o}){const[r,s]=i.useState(a);return e.jsx(n,{...o,page:r,onPageChange:s,className:"justify-content-center"})},args:{total:20,maxWidth:400}},p={decorators:[t=>e.jsx("div",{style:{width:"calc(100dvw - 64px)"},children:e.jsx(t,{})})],render:function({page:a,...o}){const[r,s]=i.useState(a);return e.jsx(n,{...o,page:r,onPageChange:s,className:"justify-content-center"})},args:{total:20,nextLabel:"Next",previousLabel:"Previous",maxWidth:200}},l={decorators:[t=>e.jsx("div",{style:{width:"calc(100dvw - 64px)"},children:e.jsx(t,{})})],render:function({page:a,...o}){const[r,s]=i.useState(a);return e.jsx(n,{...o,page:r,onPageChange:s,className:"justify-content-center"})},args:{showArrows:!1,total:20,maxWidth:200}},d={decorators:[t=>e.jsx("div",{style:{width:"calc(100dvw - 64px)"},children:e.jsx(t,{})})],render:function({page:a,...o}){const[r,s]=i.useState(a);return e.jsx(n,{...o,page:r,onPageChange:s,className:"justify-content-center"})},args:{total:20,page:10,maxWidth:200}},m={decorators:[t=>e.jsx("div",{style:{width:"calc(100dvw - 64px)"},children:e.jsx(t,{})})],render:function({page:a,...o}){const[r,s]=i.useState(a);return e.jsx(n,{...o,page:r,onPageChange:s,className:"justify-content-center"})},args:{total:20,maxWidth:400}};var u,P,x;g.parameters={...g.parameters,docs:{...(u=g.parameters)==null?void 0:u.docs,source:{originalSource:`{
  decorators: [(Story: StoryFn) => <div style={{
    width: 'calc(100dvw - 64px)'
  }}>
        <Story />
      </div>],
  render: function Render({
    page: initialPage,
    ...args
  }: ComponentProps<typeof DPaginator>) {
    const [page, setPage] = useState<number>(initialPage);
    return <DPaginator {...args} page={page} onPageChange={setPage} className="justify-content-center" />;
  },
  args: {
    total: 20,
    maxWidth: 400
  }
}`,...(x=(P=g.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};var h,y,v;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
  decorators: [(Story: StoryFn) => <div style={{
    width: 'calc(100dvw - 64px)'
  }}>
        <Story />
      </div>],
  render: function Render({
    page: initialPage,
    ...args
  }: ComponentProps<typeof DPaginator>) {
    const [page, setPage] = useState<number>(initialPage);
    return <DPaginator {...args} page={page} onPageChange={setPage} className="justify-content-center" />;
  },
  args: {
    total: 20,
    nextLabel: 'Next',
    previousLabel: 'Previous',
    maxWidth: 200
  }
}`,...(v=(y=p.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var f,C,S;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  decorators: [(Story: StoryFn) => <div style={{
    width: 'calc(100dvw - 64px)'
  }}>
        <Story />
      </div>],
  render: function Render({
    page: initialPage,
    ...args
  }: ComponentProps<typeof DPaginator>) {
    const [page, setPage] = useState<number>(initialPage);
    return <DPaginator {...args} page={page} onPageChange={setPage} className="justify-content-center" />;
  },
  args: {
    showArrows: false,
    total: 20,
    maxWidth: 200
  }
}`,...(S=(C=l.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var b,w,j;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  decorators: [(Story: StoryFn) => <div style={{
    width: 'calc(100dvw - 64px)'
  }}>
        <Story />
      </div>],
  render: function Render({
    page: initialPage,
    ...args
  }: ComponentProps<typeof DPaginator>) {
    const [page, setPage] = useState<number>(initialPage);
    return <DPaginator {...args} page={page} onPageChange={setPage} className="justify-content-center" />;
  },
  args: {
    total: 20,
    page: 10,
    maxWidth: 200
  }
}`,...(j=(w=d.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var N,D,R;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  decorators: [(Story: StoryFn) => <div style={{
    width: 'calc(100dvw - 64px)'
  }}>
        <Story />
      </div>],
  render: function Render({
    page: initialPage,
    ...args
  }: ComponentProps<typeof DPaginator>) {
    const [page, setPage] = useState<number>(initialPage);
    return <DPaginator {...args} page={page} onPageChange={setPage} className="justify-content-center" />;
  },
  args: {
    total: 20,
    maxWidth: 400
  }
}`,...(R=(D=m.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};const k=["Default","LabelArrows","NoArrows","CustomCurrentPage","CustomMaxWidth"];export{d as CustomCurrentPage,m as CustomMaxWidth,g as Default,p as LabelArrows,l as NoArrows,k as __namedExportsOrder,$ as default};
