import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{D as c}from"./DPaginator-PYPuHQOS.js";import{P as t}from"./config-C3iYXcFk.js";import"./index-C-Y6iqFF.js";import"./iframe-ByOBXyA_.js";import"./index-j79j67Hz.js";import"./index-Dr64R2JO.js";const B={title:"Design System/Components/Paginator",component:c,parameters:{docs:{description:{component:`
![Shield Badge](https://img.shields.io/badge/Wrapper%20Component-red)

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Pagination](https://getbootstrap.com/docs/5.3/components/pagination/)
+ [React Responsive Pagination](https://react-responsive-pagination.elantha.com/)

## CSS Variables
The Bootstrap documentation provides details on the default [Pagination CSS Variables](https://getbootstrap.com/docs/5.3/components/pagination/#css)

| Variable                                             | Class       | Type                   | Description                  |
|------------------------------------------------------|-------------|------------------------|------------------------------|
| --${t}pagination-page-item-size              | .pagination | css length unit        | Size of page item            |
| --${t}pagination-page-border-radius          | .pagination | css border radius unit | Radius page item             |
| --${t}pagination-page-control-color          | .pagination | css color unit         | Page control color           |
| --${t}pagination-page-control-disabled-color | .pagination | css color unit         | Page control disabled color  |
       `}}},argTypes:{total:{control:"number"},current:{control:"number",type:"number"},onPageChange:{action:"onPageChange",type:{name:"function"}},maxWidth:{control:"number"},className:{control:"text"},extraClassName:{control:"text"},pageItemClassName:{control:"text"},pageLinkClassName:{control:"text"},activeItemClassName:{control:"text"},disabledItemClassName:{control:"text"},disabledLinkClassName:{control:"text"},navClassName:{control:"text"},previousClassName:{control:"text"},nextClassName:{control:"text",type:"string"},previousLabel:{control:"text"},nextLabel:{control:"text"},ariaPreviousLabel:{control:"text"},ariaNextLabel:{control:"text"},renderNav:{control:"boolean"},ariaCurrentAttr:{control:"boolean"},linkHref:{control:{type:"radio",labels:{undefined:"empty"}},options:[void 0,"hash","omit"]}},tags:["autodocs"],render:function(S){return s.jsx(c,{...S})},decorators:[i=>s.jsx("div",{style:{width:"800"},children:s.jsx(i,{})})]},e={args:{total:20,maxWidth:400}},a={args:{total:20,nextLabel:"Next",previousLabel:"Previous",maxWidth:200}},o={args:{renderNav:!1,total:20,maxWidth:200}},r={args:{total:20,current:10,maxWidth:200}},n={args:{total:20,maxWidth:400}};var l,m,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    total: 20,
    maxWidth: 400
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,g,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    total: 20,
    nextLabel: 'Next',
    previousLabel: 'Previous',
    maxWidth: 200
  }
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var x,h,b;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    renderNav: false,
    total: 20,
    maxWidth: 200
  }
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var C,v,N;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    total: 20,
    current: 10,
    maxWidth: 200
  }
}`,...(N=(v=r.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var P,f,W;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    total: 20,
    maxWidth: 400
  }
}`,...(W=(f=n.parameters)==null?void 0:f.docs)==null?void 0:W.source}}};const I=["Default","LabelArrows","NoArrows","CustomCurrentPage","CustomMaxWidth"];export{r as CustomCurrentPage,n as CustomMaxWidth,e as Default,a as LabelArrows,o as NoArrows,I as __namedExportsOrder,B as default};
